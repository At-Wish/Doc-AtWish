+++ 
archetype = "default" 
title = "Airflow installation" 
weight = 3
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache kafka installation"
+++

{{< notice warning >}}
Please note this is not Official documentation and prepared as I am exploring these tools. If you see any issue or any missing content please feel free to correct and create a pull request or you can reach to me on contact@shantanukhond.me. Thank you!
{{< /notice >}}




#### Installation of Apache Airflow

###### PiPy Installation

* Update Ubuntu/Debian

    ```bash

    sudo apt update -y & sudo apt upgrade -y

    ```


* Creating virtual environment 

    ```bash
    sudo apt-get install build-essential libssl-dev libffi-dev python3-dev python3-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev python3.10-venv
    ```

* Create app directory for superset and dependencies

    ```bash
    sudo mkdir /app
    sudo chown user /app
    cd /app
    ```

* Create python environment

    ```bash
    mkdir airflow
    cd airflow
    python3 -m venv airflow_env
    . airflow_env/bin/activate
    pip install --upgrade setuptools pip
    ```

* Install *Apache Airflow*

    ```bash
    pip install apache-airflow apache-airflow-providers-google
    ```


* Setup environment variable 

    ```bash
    export AIRFLOW_HOME=/app/airflow
    ```

* Create Airflow Configuration file

    ```bash
    airflow config list --defaults > "${AIRFLOW_HOME}/airflow.cfg"
    ```

* Configure Airflow configuration file if needed such as Airflow metadata db if you want to use any other database than
    sqlite. If you use other db then you can also change executor to `LocalExecutor` in config file. In the config file this will be commented you can uncomment this and use `LocalExecutor` as default executor is sequentialExecutor which does not support parallelism because of sqlite.  


* Run following to setup airflow

    ```bash
    airflow db migrate

    airflow users create \
        --username admin \
        --firstname Shantanu \
        --lastname Khond \
        --role Admin \
        --email contact@shantanukhond.me
    
    
    airflow webserver --port 8080

    ```


* Now your airflow webserver should be running and accessible on port 8080 Lets create service to run both web server and scheduler (For executor I will write another page to use executors)

