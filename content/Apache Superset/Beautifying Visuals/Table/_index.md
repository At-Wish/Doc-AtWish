+++ 
archetype = "default" 
title = "Beautifying Table" 
weight = 7
keywords     = "Apache Superset documentation, Apache Superset, Superset, Open source reporting, Shantanu Khond, At wish, Apache superset installation, Beautifying Apache Superset Visuals"
description = "Beautifying Apache Superset Table Visual"
+++

## Beautifying Table visual in Apache Superset

{{< figure src="/images/superset/assets/images/beautified_table.png" title="Beautified Apache Superset Table" >}}


### Concatinating multiple Columns into single cell as rows and column

```SQL
CONCAT(
    "<div style='display:flex; align-items:center;'>",
    "<img src='https://cdn-icons-png.flaticon.com/512/5231/5231019.png' alt='Person Icon' style='width:32px; height:32px; margin-right:8px;'>",
    "<div style='display:flex; flex-direction:column;'>",
    "<span style='font-weight:800; font-size:12px;'>",
    first_name,
    "</span>",
    "<span style='font-size:12px;'>INV-",
    product_id,
    "</span>",
    "</div>",
    "</div>"
)
```


### Adding pill shaped background-color

```SQL
CONCAT(
    "<div style='display:inline-block; padding:4px 8px; border-radius:12px; font-size:12px; font-weight:600; color:white; ",
    CASE 
        WHEN "Payment Status" = 'Paid' THEN "background-color:#EEF7EF;color:#8EC0AD;"
        WHEN "Payment Status" = 'Partial Paid' THEN "background-color:#F1F0FC;color:#6B70B7;"
        WHEN "Payment Status" = 'Unpaid' THEN "background-color:#F8EEED;color:#D98885;"
        ELSE "background-color:#F8EEED;"
    END,
    "'>",
    "Payment Status",
    "</div>"
)
```

### CSS For table customization 
```CSS
.css-xojzyz{
    display:none;
}

#chart-id-14 > div > div > div:nth-child(2) > div:nth-child(2) > table > tbody > tr{
    background-color: #fff;
}

.table>caption+thead>tr:first-child>td, .table>caption+thead>tr:first-child>th, .table>colgroup+thead>tr:first-child>td, .table>colgroup+thead>tr:first-child>th, .table>thead:first-child>tr:first-child>td, .table>thead:first-child>tr:first-child>th{
    background-color:#F6F8FA;
}
```


### Chat GPT Prompt 
You can modify following ChatGPT prompt to generate html code that you can use directly in column

```
Using SQL, generate HTML code to create a pill-shaped background for a selected column. Please follow the syntax of the provided example, which combines strings using CONCAT, and extend it to create a pill-shaped background with a specified color and padding. For instance, if the selected column is 'Payment Status', the generated HTML code should resemble: CONCAT('<div style="background-color: #<color>; border-radius: 10px; padding: 5px; width: auto;">', 'Payment Status', '</div>'). Provide the SQL code that can be used to generate this HTML code.
```

##### Output of above prompt is:

Here is the SQL code to generate the desired HTML code for creating a pill-shaped background for the `Payment Status` column. This example uses the `CONCAT` function to construct the HTML string:

```sql
SELECT 
    CONCAT(
        '<div style="background-color: #',
        CASE 
            WHEN "Payment Status" = 'Paid' THEN '28a745' -- Green for Paid
            WHEN "Payment Status" = 'Pending' THEN 'ffc107' -- Yellow for Pending
            WHEN "Payment Status" = 'Overdue' THEN 'dc3545' -- Red for Overdue
            ELSE '6c757d' -- Gray for Unknown
        END,
        '; border-radius: 10px; padding: 5px; width: auto; display: inline-block;">',
        "Payment Status",
        '</div>'
    ) AS "Payment Status HTML"
FROM your_table_name;
```

### Explanation:
1. **`CONCAT`**: Combines strings into a single HTML string.
2. **`CASE` Statement**: Dynamically sets the background color based on the value of the `Payment Status` column.
3. **Inline Styling**:
   - `background-color`: Dynamically set using the `CASE` statement.
   - `border-radius: 10px`: Creates the pill shape by rounding the corners.
   - `padding: 5px`: Adds space inside the pill.
   - `width: auto`: Ensures the width adjusts based on the text.
   - `display: inline-block`: Ensures proper inline alignment for the pill.
4. **Output**: Generates a styled `<div>` element for each row in the `Payment Status` column.

Replace `your_table_name` with the actual name of your table. You can adjust the colors in the `CASE` statement to match your design preferences.