In SQL, making structural changes to a database is often necessary. Whether it’s renaming a table or a column, adding new columns, or modifying data types, the SQL ALTER TABLE command plays a critical role. This command provides flexibility to manage and adjust database schemas without affecting the existing data.

In this article, we will explain how to rename tables and columns in SQL using the ALTER TABLE command, along with practical examples. We’ll also cover how these commands vary across databases like MySQL, MariaDB, and Oracle. This comprehensive guide ensures our queries are accurate, efficient, and SEO-optimized.

# What is the ALTER Command in SQL?
The structure of an existing table can be changed by users using the SQL ALTER TABLE command. If we need to rename a table, add a new column, or change the name of an existing column in SQL, the ALTER command is crucial for making schema changes without affecting the data that is already there. This is essential for tasks like:

Renaming a table.
Changing a column name.
Adding or deleting columns.
Modifying the data type of a column.

### 1. Renaming a Table
```sql
ALTER TABLE table_name
RENAME TO new_table_name;
```


### 2. Renaming a Column
```sql
ALTER TABLE table_name
RENAME COLUMN old_column_name TO new_column_name;
```

```sql
ALTER TABLE Student RENAME Column name TO FIRST_NAME;
```

### 3. Adding a New Column
```sql
ALTER TABLE table_name
ADD column_name datatype;
```

``sql
ALTER TABLE Student ADD marks INT;
```

### 4. Modifying a Column Data Type
```sql
ALTER TABLE table_name
MODIFY COLUMN column_name new_datatype;
```

```sql
ALTER TABLE Student
MODIFY COLUMN phone BIGINT;
```

Explanation:

The phone column now has a BIGINT data type, suitable for storing large numeric values.
Existing data remains unchanged but is stored as integers instead of strings.