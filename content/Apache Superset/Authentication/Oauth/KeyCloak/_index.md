
1. **Install Required Libraries:**

	In Python virtual env where you have installed superset, install Authlib and Flask OAuth lib plugin.
    
	 - pip install Flask-OAuthlib Authlib

2. **Configure OAuth in Superset:**

	Now open and update superset_config.py 
	Update the URL and other details mentioned here with keycloak configurations you did in step 1.

   Edit the `superset_config.py` file to add Keycloak as an OAuth provider. This file is typically located in the root of your Superset installation directory.

   ```
		from flask_appbuilder.security.manager import AUTH_OAUTH
		
		# Enable OAuth authentication
		AUTH_TYPE = AUTH_OAUTH
		LOGOUT_REDIRECT_URL='http://localhost:8080/realms/{realmName}/protocol/openid-connect/logout'
		AUTH_USER_REGISTRATION = True
		AUTH_USER_REGISTRATION_ROLE = 'Gamma'
		# OAuth provider configuration for Keycloak
		OAUTH_PROVIDERS = [
			{
				'name': 'keycloak',
				'icon': 'fa-key',
				'token_key': 'access_token',  # Keycloak uses 'access_token' for the access token
				'remote_app': {
					'client_id': 'client-name',
					'client_secret': 'client-password',
					'client_kwargs': {
						'scope': 'openid profile email',
					},
					'server_metadata_url': 'http://localhost:8080/realms/{realmName}/.well-known/openid-configuration',
					'api_base_url': 'http://localhost:8080/realms/{realmName}/protocol/',
				},
			}
			]
   ```

   Replace placeholders such as `<keycloak-server>`, `{realmName}`, and `YOUR_CLIENT_SECRET` with your actual Keycloak server address, realm name, and client secret.


3. **Restart Superset:**

   After making these changes, restart your Superset server to apply the new configuration. You can typically do this by stopping and starting the Superset service:

   ```bash
   superset stop
   superset start
   ```

### Step 3: Test the Integration

1. **Access the Superset Login Page:**

   Navigate to the Superset login page (e.g., `http://localhost:8088/login`).

2. **Log In with Keycloak into Superset:**

   You should see an option to log in with Keycloak. Click the Keycloak login button and authenticate with your Keycloak credentials.

3. **Log Out from Superset:**
 
   Check log out by clicking on the logout button, you will be redirected to keycloak again.
   


### Additional Configuration (Optional)

- **Role Mapping:** (Mapping Keycloak Roles with Superset Roles)

1. Create `custom_sso_security_manager.py` that extends SupersetSecurityManager and overrides oauth_user_info:

 ````
		import logging
		from superset.security import SupersetSecurityManager
		from requests.exceptions import HTTPError

		class CustomSsoSecurityManager(SupersetSecurityManager):
			def oauth_user_info(self, provider, response=None):  # noqa: ARG002
				try:
					remote_app = self.appbuilder.sm.oauth_remotes.get(provider)
					if remote_app is None:
						logging.error("Provider %s is not configured in oauth_remotes.", provider)
						return {}

					me = remote_app.get("openid-connect/userinfo")
					me.raise_for_status()
					data = me.json()
					logging.debug("User info from Keycloak: %s", data)
					role_keys = data.get("role_keys", [])
					return {
						"username": data.get("preferred_username", ""),
						"first_name": data.get("given_name", ""),
						"last_name": data.get("family_name", ""),
						"email": data.get("email", ""),
						"role_keys": data.get("role_keys", []),
					}
				except HTTPError as e:
					logging.error("HTTP error occurred: %s", e)
				except Exception as e:
					logging.error("An error occurred while fetching user info: %s", e)

				return {}
				
	````
	
2. Open and Edit the `superset_config.py` 
	
	````
			from custom_sso_security_manager import CustomSsoSecurityManager
			CUSTOM_SECURITY_MANAGER = CustomSsoSecurityManager

			AUTH_ROLES_MAPPING = {
			"superset_users": ["Gamma","Alpha","Manager"],
			"superset_admins": ["Admin"],
			}

			# if we should replace ALL the user's roles each login, or only on registration
			AUTH_ROLES_SYNC_AT_LOGIN = True
			
	````
  