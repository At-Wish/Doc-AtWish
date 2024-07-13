+++ 
archetype = "default" 
title = "Alerts and Reports" 
weight = 6 
+++


## Alerts and Reports With Superset


{{< notice note >}}
Chromium headless or firefox is necessary to get alerts and reports running as expected as well Celery Redis Should be installed and configured. We have documentation you can refer to [Chromium Configuration] and [apache-superset/configuration/celery-workers--beat/] Thank you!
{{< /notice >}}

To get Alerts and reports working. We need SMTP creds, and chrome or firefox should be installed. For this tutorial I am using chrome. 



1. In Superset Config file i.e. `superset_config.py` if you already have `FEATURE_FLAGS` then add `"ALERT_REPORTS": True` it should look something like shown below. If you don't have just copy entire thing and put it in `superset_config.py`

    ```
    FEATURE_FLAGS = {
        "ALERT_REPORTS": True
    }
    ``` 

2. Your config file should look something like this

    ```
    from celery.schedules import crontab

    FEATURE_FLAGS = {
        "ALERT_REPORTS": True
    }

    REDIS_HOST = "superset_cache"
    REDIS_PORT = "6379"

    class CeleryConfig:
        broker_url = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
        imports = (
            "superset.sql_lab",
            "superset.tasks.scheduler",
        )
        result_backend = f"redis://{REDIS_HOST}:{REDIS_PORT}/0"
        worker_prefetch_multiplier = 10
        task_acks_late = True
        task_annotations = {
            "sql_lab.get_sql_results": {
                "rate_limit": "100/s",
            },
        }
        beat_schedule = {
            "reports.scheduler": {
                "task": "reports.scheduler",
                "schedule": crontab(minute="*", hour="*"),
            },
            "reports.prune_log": {
                "task": "reports.prune_log",
                "schedule": crontab(minute=0, hour=0),
            },
        }
    CELERY_CONFIG = CeleryConfig

    SCREENSHOT_LOCATE_WAIT = 100
    SCREENSHOT_LOAD_WAIT = 600

    # Slack configuration
    SLACK_API_TOKEN = "xoxb-"

    # Email configuration
    SMTP_HOST = "smtp.sendgrid.net" # change to your host
    SMTP_PORT = 2525 # your port, e.g. 587
    SMTP_STARTTLS = True
    SMTP_SSL_SERVER_AUTH = True # If your using an SMTP server with a valid certificate
    SMTP_SSL = False
    SMTP_USER = "your_user" # use the empty string "" if using an unauthenticated SMTP server
    SMTP_PASSWORD = "your_password" # use the empty string "" if using an unauthenticated SMTP server
    SMTP_MAIL_FROM = "noreply@youremail.com"
    EMAIL_REPORTS_SUBJECT_PREFIX = "[Superset] " # optional - overwrites default value in config.py of "[Report] "

    # WebDriver configuration
    # If you use Firefox, you can stick with default values
    # If you use Chrome, then add the following WEBDRIVER_TYPE and WEBDRIVER_OPTION_ARGS
    WEBDRIVER_TYPE = "chrome"
    WEBDRIVER_OPTION_ARGS = [
        "--force-device-scale-factor=2.0",
        "--high-dpi-support=2.0",
        "--headless",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-extensions",
    ]

    # This is for internal use, you can keep http
    WEBDRIVER_BASEURL = "http://superset:8088" # When running using docker compose use "http://superset_app:8088'
    # This is the link sent to the recipient. Change to your domain, e.g. https://superset.mydomain.com
    WEBDRIVER_BASEURL_USER_FRIENDLY = "http://localhost:8088"
    ```

3.  Restart Superset using (assuming you have service and has same name as mine i.e. superset)

    ```
    sudo systemctl restart superset
    ```

&nbsp;
&nbsp;
#### Any Question? Feel free to mail me on [contact@shantanukhond.me](mailto://contact@shantanukhond.me)
&nbsp;
&nbsp;
&nbsp;
&nbsp;


### Let's Learn Together! 📖😊
<!-- 
[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/shantanukhond) -->
