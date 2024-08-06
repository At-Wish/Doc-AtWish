
+++ 
archetype = "default" 
title = "Java based" 
weight = 1
+++

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
		3. Go to the Keycloak Admin Console.

		4. Log in with the username and password you created earlier.	
		

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
		


  
