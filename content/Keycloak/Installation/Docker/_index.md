+++ 
archetype = "default" 
title = "Docker" 
description = "How to install KeyCloak with docker and custom theme"
weight = 2
+++

## How to install KeyCloak with docker and custom theme

{{< notice info >}}
Make sure your machine or container platform can provide sufficient memory and CPU for your desired usage of Keycloak. See Concepts for sizing CPU and memory resources for more on how to get started with production sizing.
{{< /notice >}}

1. Lets create a dir called `keycloak`  if you want different directory please create directory as required.
   ```
   mkdir keycloak
   cd keycloak
   ```

2. Create environment file with named `.env.docker` 