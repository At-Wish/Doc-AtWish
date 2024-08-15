+++ 
archetype = "default" 
title = "Chromium" 
weight = 3
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache superset installation, Apache superset python installation, Superset docker, Apache superset docker, Apache superset windows, Superset React embedding, Superset Angular embedding, Embedding in public, Celery, celery beat, Asynchronous execution"
+++

#### To install headless Chrome on Ubuntu, you can use the following steps:

1. Install Dependencies:
    ```
    sudo apt update
    sudo apt install -y wget apt-transport-https ca-certificates curl gnupg
    ```    

2. Download and Install Google Chrome:

    First, download the Google Chrome package and add the Google Chrome repository to your system:

    ```
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    sudo dpkg -i google-chrome-stable_current_amd64.deb
    ```

    If you encounter any dependency issues, you can run the following command to resolve them:

    ```
    sudo apt -f install
    ```    

{{< in-line-ad >}}

3. Install the ChromeDriver:

    The ChromeDriver is a separate executable that WebDriver uses to control Chrome. You need to install it separately:

    ```
    sudo apt install -y chromium-chromedriver
    ```    

4. Verify Installation:

    You can verify that Chrome and ChromeDriver are installed correctly by checking their versions:

    ```
    google-chrome --version
    chromedriver --version
    ```    

    The output should display the installed versions of Chrome and ChromeDriver.

5. Set ChromeDriver Path in Superset Configuration (if necessary):

    If you're using Superset and need to specify the path to ChromeDriver in the configuration file, you can set it like this:


    ```
    CHROME_DRIVER_PATH = '/usr/lib/chromium-browser/chromedriver'
    ``` 

    Adjust the path as necessary based on where ChromeDriver is installed on your system.

{{< in-line-ad >}}

6. Configure Chrome for Headless Mode:


    ```
    google-chrome --headless
    ```

