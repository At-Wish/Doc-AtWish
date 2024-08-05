## Detailed Guide to Integrate Keycloak with Apache Superset

### Step 1: Set Up Keycloak

1. **Install Keycloak:**

		**Before you start**
		Make sure your machine or container platform can provide sufficient memory and CPU for your desired usage of Keycloak. See Concepts for sizing CPU and memory resources for more on how to get started with production sizing.
		Make sure you have OpenJDK 21 installed.

		**Download Keycloak**
		Download Keycloak's latest version from Keycloak [here] (https://www.keycloak.org/downloads).
		Download and extract keycloak-25.0.1.zip from the Keycloak website.
		After extracting this file, you should have a directory that is named keycloak-25.0.1.

		**Start Keycloak**
		 1. From a terminal, open the keycloak-25.0.1 directory.

		 2. Enter the following command:

				On Linux, run:

					bin/kc.sh start-dev
					
				On Windows, run:

					bin\kc.bat start-dev
		
		Using the start-dev option, you are starting Keycloak in development mode. In this mode, you can try out Keycloak for the first time to get it up and running quickly. This mode offers convenient defaults for developers, such as for developing a new Keycloak theme.
		
		**Create an admin user**
		Keycloak has no default admin user. You need to create an admin user before you can start Keycloak.

		1. Open http://localhost:8080/.

		2. Fill in the form with your preferred username and password.	

		**Log in to the Admin Console**
		1. Go to the Keycloak Admin Console.

		2. Log in with the username and password you created earlier.	
		

2. **Create a Realm:**
		A realm in Keycloak is equivalent to a tenant. Each realm allows an administrator to create isolated groups of applications and users. Initially, Keycloak includes a single realm, called master. Use this realm only for managing Keycloak and not for managing any applications.

		Use these steps to create realm.

			- Open the Keycloak Admin Console.
			
			- Click Keycloak next to master realm, then click Create Realm.

			- Enter a name for your realm (e.g., `myrealm`) in the Realm name field.

			- Click Create.

3. **Create a Client for Superset:**

		- Open the Keycloak Admin Console.

		- Click the word master in the top-left corner, then click myrealm.

		- Click Clients.

		- Click Create client

		- Fill in the form with the following values:

			Client type: OpenID Connect

			Client ID: Set the Client ID (e.g., `superset`) 
			
		- Click Next

		- Confirm that Standard flow is enabled.

		- Click Next.

		- Make these changes under Login settings.

				Set Valid redirect URIs to https://localhost:8088/oauth-authorized/keycloak  (if superset is running locally)
				
				Set Valid post logout redirect URIs to https://localhost:8088/login (if superset is running locally)

				Set Web origins to https://localhost:8088/* (if superset is running locally)

		- Click Save.

		- Go to the `Credentials` tab to get the Client Secret. Make note of this secret as you will need it later.
		
5. **Creating Realm Roles:**

		- To create a new Realm Roles, click on the Realm roles menu from the left pane and click the Create role button.
		
		- In the next screen provide the role name as per your requirements.
			eg: 'superset_users' and 'superset_admins'
			
		- Click Save

6. **Create a User:**
		
		- Verify that you are still in your created realm 'eg: myrealm' realm, which is shown above the word Manage.

		- Click Users in the left-hand menu.

		- Click Add user.

		- Fill in the form with the following values:

				Username: myuser

				First name: any first name

				Last name: any last name

		- Click Create.

	This user needs a password to log in. To set the initial password:

		- Click Credentials at the top of the page.

		- Fill in the Set password form with a password.

		- Toggle Temporary to Off so that the user does not need to update this password at the first login.
	
	To set role for the user :
	
		- Click the Role mapping tab and press Assign role.
		
		- Now the Realm roles list will be available in the table. Check the required role and click Assign to map it to the respective user.
		


### Step 2: Configure Superset

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
  
  
