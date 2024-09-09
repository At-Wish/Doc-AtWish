+++ 
archetype = "default" 
title = "Data Warehousing" 
weight = 4
keywords     = ""
+++


## Data warehousing from Transaction/Product using Kimball's data warehousing Techniques 

We will be discussing almost all of the domains covered in data warehousing toolkit book by Ralph Kimball with in depth data and reporting. First edition of the book was published in 1st January 1996, even before my birth but the book is still in use. [Link to the book can be found here: The Data WarehouseETL Toolkit: Practical Techniques for Extracting, Cleaning, Conforming, and Delivering Data](https://amzn.to/47ofaq3)

### Why Kimball style data warehousing?
The way Authors studied each domain and created Data warehousing techniques are so robust that modern data warehousing platform such as Snowflake, Databricks, etc. still suggest or even describe their architecture using Kimball's terminology. If you even see databricks [Medallion Architecture](https://www.databricks.com/glossary/medallion-architecture). In gold layer even databricks is suggesting Kimball style star schema.

#### Thats enough about the why let's see the implementation.

For the implementation just like book but in detail we will go through each domain analyze the data, create application or transactional system's model and we will go through the process of converting it into data warehousing i.e. Kimball style star schema.

#### Domains are as follows
###### [1. Retail Sales Transaction Warehousing](/data-warehousing/retail-sales-dwh)




