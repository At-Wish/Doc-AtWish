
+++ 
archetype = "default" 
title = "OpenJDK" 
weight = 1
description = "How to install KeyCloak with PostgreSQL java custom theme"

+++

## Installing Keycloak with OpenJDK for production env with PostgreSQL in Ubuntu/Debian 

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
	3. Start server command (You can test it but skip it for now)
		```
		bin/kc.sh start --https-certificate-file=/app/keycloak/certs/keycloak.crt  --https-certificate-key-file=/app/keycloak/certs/keycloak.key --hostname https://yourdomain.com
		```

	**Option 2 To get Keycloak running without SSL** \
   	To run Keycloak without SSL (If you want to break your SSL on gateway or CDN and internal VNET or VPC routing can be without SSL) 
	1. Start server  (You can test it but skip it for now)
		```
		bin/kc.sh start --hostname-strict false --proxy-headers forwarded --http-enabled true
		```


6. Above will start server but we have not configured databases. To run keycloak with desired configuration we will create `run_keycloak.sh` script using following command
	```
	touch run_keycloak.sh
	chmod +x run_keycloak.sh
	```

7.  Add following code in it
	```
	export KC_DB=postgres
	export KEYCLOAK_ADMIN=admin
	export KEYCLOAK_ADMIN_PASSWORD=admin
	export KC_DB_URL="jdbc:postgresql://127.0.0.1:5432/keycloak"
	export KC_DB_USERNAME=postgres
	export KC_DB_PASSWORD=password
	#bin/kc.sh start --hostname-strict false --proxy-headers forwarded --http-enabled true
	#--https-certificate-file=/app/keycloak/certs/keycloak.crt  --https-certificate-key-file=/app/keycloak/certs/keycloak.key  https://yourdomain.com/  
	```
   
8.  Now you might have noticed we have two lines commented in the file above. According to your requirement uncomment run script. 
    1.  If SSL is required then uncomment **last line** change domain. 
    2.  If SSL is not required then uncomment **second last line**.

9.   Run the script using following command
    ```
	./run_keycloak.sh
	```

10. To create service so that keycloak will start as soon as server reboots. To create service use following command
    Lets create service called keycloak using following command

	```
	sudo nano /etc/systemd/system/keycloak.service
	```

	paste following code in it 

	```
	[Unit]
	Description = keycloak Webserver Daemon
	After = network.target

	[Service]
	PIDFile = /app/keycloak/keycloak-webserver.PIDFile
	WorkingDirectory = /app/keycloak
	ExecStart = /app/keycloak/run_keycloak.sh
	ExecStop = /bin/kill -s TERM $MAINPID


	[Install]
	WantedBy=multi-user.target

	```

11. once copied run following command to enable and start service

	```
	systemctl daemon-reload
	sudo systemctl enable keycloak.service
	sudo systemctl start keycloak.service
	```
  

### YEY! Your production keycloak Server is Up and running…

