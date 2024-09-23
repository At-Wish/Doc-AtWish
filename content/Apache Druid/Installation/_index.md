+++ 
archetype = "default" 
title = "Druid installation" 
weight = 3
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache kafka installation"
+++

{{< notice warning >}}
Please note this is not Official documentation and prepared as I am exploring these tools. If you see any issue or any missing content please feel free to correct and create a pull request or you can reach to me on contact@shantanukhond.me. Thank you!
{{< /notice >}}




#### Installation of Apache Druid


* Update Ubuntu/Debian

    ```
    sudo apt update -y & sudo apt upgrade -y
    ```

* Druid needs java installed if java does not exists install it using you can check java using `java -version` command

    ```
    sudo apt install default-jre
    ```


* Create app directory for Druid 

    ```
    sudo mkdir /app
    sudo chown user /app
    cd /app
    ```

* To download Druid go to [https://dlcdn.apache.org/druid/](https://dlcdn.apache.org/druid/) open the latest directory. Currently while writing this documentation it is 30.0.1. right click on the file with name **bin.tar.gz** and click copy as link. Replace the url in following code.

    ```
    wget https://dlcdn.apache.org/druid/30.0.1/apache-druid-30.0.1-bin.tar.gz -o druid.tgz
    tar -xvzf druid.tgz
    ```

    The above command will download and druid kafka into druid folder. Don't forget to replace this url otherwise you might face **404 not found** if newer versions are updated.

* To start druid simply run following command

    ```
    ./druid/bin/start-micro-quickstart
    ```



