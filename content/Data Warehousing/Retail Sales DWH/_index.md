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

Before we begin lets understand what business needs from the reports. Using this data we can build following reports.
1.  Sales and Revenue Reports:
1.  Customer Segmentation Reports
1.  Product Performance Reports
1.  Market Basket Analysis Reports
1.  Promotion and Campaign Reports
1.  Store Performance Report
1.  Forecasting and Demand Planning Reports
1.  Supply Chain and Logistics Reports
1.  Inventory Reports
 etc....

If we consider above reports except last two reports all other can be built using Sales data. So for this specific tutorial lets assume business came to us and asked that they need warehouse to perform Sales Analysis as in next chapter we will be focusing on Supply chain specifically.

Lets move to sales analysis. In above schema **SalesOrderHeader** is the core sales fact table. most of our discussion is going to be around the facts and dimension of this table. Lets deep dive in using the steps mentioned in the **Data WarehouseETL Toolkit** book. 
