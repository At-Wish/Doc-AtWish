+++ 
archetype = "default" 
title = "Kafka Java installation" 
weight = 3
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache kafka installation"
+++

{{< notice warning >}}
Please note this is not Official documentation and prepared as I am exploring these tools. If you see any issue or any missing content please feel free to correct and create a pull request or you can reach to me on contact@shantanukhond.me. Thank you!
{{< /notice >}}




#### Installation of Apache kafka


* Update Ubuntu/Debian

    ```
    sudo apt update -y & sudo apt upgrade -y
    ```

* Kafka needs java installed if java does not exists install it using you can check java using `java -version` command

    ```
    sudo apt install default-jre
    ```


* Create app directory for kafka 

    ```
    sudo mkdir /app
    sudo chown user /app
    cd /app
    ```


* To download kafka go to [https://kafka.apache.org/downloads](https://kafka.apache.org/downloads) right click on the link in front of scala. For this tutorial i am selecting latest scala version. Currently its Scala 2.13. Download it using following command

    ```
    wget https://downloads.apache.org/kafka/3.8.0/kafka_2.13-3.8.0.tgz -o kafka.tgz
    tar -xvzf kafka.tgz
    ```

    The above command will download and unzip kafka into kafka folder. Don't forget to replace this url otherwise you might face **404 not found** if newer versions are updated.

* To allow deletion of topics from kafka edit `/app/kafka/config/server.properties` file and add following command
    ```
    delete.topic.enable = true
    ```

    

* to start kafka and zookeeper lets create services
    For zookeeper `sudo nano /etc/systemd/system/zookeeper.service`
    ```
    [Unit]
    Requires=network.target remote-fs.target
    After=network.target remote-fs.target

    [Service]
    Type=simple
    User=kafka
    ExecStart=/app/kafka/bin/zookeeper-server-start.sh /app/kafka/config/zookeeper.properties
    ExecStop=/app/kafka/bin/zookeeper-server-stop.sh
    Restart=on-abnormal

    [Install]
    WantedBy=multi-user.target
    ```

    For Kafka `/etc/systemd/system/kafka.service`
    ```
    [Unit]
    Requires=zookeeper.service
    After=zookeeper.service

    [Service]
    Type=simple
    User=kafka
    ExecStart=/bin/sh -c '/home/kafka/kafka/bin/kafka-server-start.sh /home/kafka/kafka/config/server.properties > /home/kafka/kafka/kafka.log 2>&1'
    ExecStop=/home/kafka/kafka/bin/kafka-server-stop.sh
    Restart=on-abnormal

    [Install]
    WantedBy=multi-user.target
    ```


* Reload systemctl using 
    
    ```
    sudo systemctl daemon-reload
    ```

* Start the services with following

    ```
    sudo systemctl start zookeeper
    sudo systemctl start kafka
    ```

* To check status of kafka and zookeeper use
    ```
    sudo systemctl status zookeeper
    sudo systemctl status kafka
    ```

##### Congratulations you have successfully installed kafka!

Lets test kafka if we are able to publish and consume messages.

* Create topic
    ```
    /app/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test-topic
    ```

* Publish message to the topic

    ```
    echo "Kafka is best" | /app/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test-topic > /dev/null
    ```

* Consume message from the topic

    ```
    /app/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-topic --from-beginning
    ```