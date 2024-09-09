+++ 
archetype = "default" 
title = "Retail Sales DWH" 
weight = 1
keywords = ""
+++


## Retail Sales Transaction Warehousing

We will be using Microsoft's famous AdventureWorks OLTP database with MS-SQL server. Database backup can be downloaded from [here](https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver16&tabs=ssms). Please note in initial step we are going to use OLTP schema as we are going to transform and convert it into DWH. We have already downloaded and restored the backup to local MS-SQL instance. 

##### Lets understand the schema

{{< figure src="/images/DWH/AdvWorksOLTPSchemaVisio.png" title="Adventure Works OLTP Schema" >}}

Database is divided into 6 schemas 