
+++ 
archetype = "default" 
title = "OpenJDK" 
weight = 1
+++

## Installing Keycloak with OpenJDK for production env with PostgreSQL (Documentation under development)

{{< notice info >}}
Make sure your machine or container platform can provide sufficient memory and CPU for your desired usage of Keycloak. See Concepts for sizing CPU and memory resources for more on how to get started with production sizing.
{{< /notice >}}

1. Install openjdk 21 using
   ```
   sudo apt install openjdk-21-jdk
   ```

2. Lets create a directory for Keycloak.
   ```
	sudo mkdir /app
	sudo chown user /app
	cd /app
	mkdir keycloak
	cd keycloak
   ```

3. Download and extract Keycloak's latest version from Keycloak [here](https://www.keycloak.org/downloads). You can use following command to download and extract it.
	```
	wget https://github.com/keycloak/keycloak/releases/download/25.0.2/keycloak-25.0.2.tar.gz
	tar -xvzf keycloak-25.0.2.tar.gz
	```

4. After extracting this file, you should have a directory that is named keycloak-[your_version_here]. Let's rename it to Keycloak.
	```
	mv keycloak-25.0.2 keycloak
	rm keycloak-25.0.2.tar.gz
	```
	Now our setup is ready, lets move to creating configuration.

5. Running Keycloak \
   **Option 1 To get Keycloak running with SSL**
   1. Lets create dir and certificates 
		```
		mkdir certs
		cd certs
		openssl genrsa -out keycloak.key 2048
		openssl req -new -x509 -sha256 -key keycloak.key -out keycloak.crt -days 365
		```
   2. Now go back to keycloak dir 
		```
		cd ..
		```
	3. Start server
		```
		bin/kc.sh start --https-certificate-file=/app/keycloak/certs/keycloak.crt  --https-certificate-key-file=/app/keycloak/certs/keycloak.key --hostname https://yourdomain.com
		```

	**Option 2 To get Keycloak running without SSL** \
   	To run Keycloak without SSL (If you want to break your SSL on gateway or CDN and internal VNET or VPC routing can be without SSL) 
	1. Start server
		```
		bin/kc.sh start --hostname-strict false --proxy-headers forwarded --http-enabled true
		```


