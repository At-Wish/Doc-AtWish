+++ 
archetype = "default" 
title = "Running in Dev Mode" 
weight = 9 
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache superset installation"
+++


## Running Apache Superset in Development Mode

As we want to customize apache superset and or to develop custom visuals we first need to run Apache Superset in development mode to quickly see the changes and modify the code.

### Clone the Apache Superset
We first need to clone the apache superset let do that first. I am still going to use 4.0

```
git clone --depth=1 -b 4.0 https://github.com/apache/superset.git
```

Move inside Superset directory 

```
cd superset
```

### Set-Up Env and Superset config file for running it

* Create python environment 

```
python3 -m venv superset_env
. superset_env/bin/activate
pip install --upgrade setuptools pip
```


* Install Required dependencies

```
pip install -r requirement/development.txt
pip install -e .
```


* Create superset config file and set environment variable 

```
touch superset_config.py
export SUPERSET_CONFIG_PATH=/app/superset/superset_config.py

```

* Edit and paste following code in it

```
# Superset specific config
ROW_LIMIT = 5000

# Flask App Builder configuration
# Your App secret key will be used for securely signing the session cookie
# and encrypting sensitive information on the database
# Make sure you are changing this key for your deployment with a strong key.
# Alternatively you can set it with `SUPERSET_SECRET_KEY` environment variable.
# You MUST set this for production environments or the server will not refuse
# to start and you will see an error in the logs accordingly.
SECRET_KEY = 'YOUR_OWN_RANDOM_GENERATED_SECRET_KEY'

# The SQLAlchemy connection string to your database backend
# This connection defines the path to the database that stores your
# superset metadata (slices, connections, tables, dashboards, ...).
# Note that the connection information to connect to the datasources
# you want to explore are managed directly in the web UI
# The check_same_thread=false property ensures the sqlite client does not attempt
# to enforce single-threaded access, which may be problematic in some edge cases
SQLALCHEMY_DATABASE_URI = 'sqlite:////app/superset/superset.db?check_same_thread=false'

TALISMAN_ENABLED = False
WTF_CSRF_ENABLED = False

# Set this API key to enable Mapbox visualizations
MAPBOX_API_KEY = ''
```

Please replace YOUR_OWN_RANDOM_GENERATED_SECRET_KEY in above file with the code returned by following command

```
openssl rand -base64 42
```

* Once Done let us inititlize database with following commands 

```
# Create an admin user in your metadata database (use `admin` as username to be able to load the examples)
export FLASK_APP=superset

superset db upgrade

superset fab create-admin

# As this is going to be production I have commented load example part but if you need you can run this
# superset load_examples

# Create default roles and permissions
superset init

```

* Run backend with following command 

```
superset run -p 8088 --with-threads --reload --debugger --debug
```

### Running up front-end in development environment

* Now in new terminal open up same superset directory and move inside `superset-frontend` dir using `cd superset-frontend`

* Install npm dependencies using `npm ci`

* Now finally run front-end using `npm run dev`

#### Hurrah! Our development server is ready whatever changes you do in the code will reflect as soon as you save it. Lets now work on the customization part!

