The SQL DELETE statement is one of the most commonly used commands in SQL (Structured Query Language). It allows you to remove one or more rows from the table depending on the situation. Unlike the DROP statement, which removes the entire table, the DELETE statement removes data (rows) from the table retaining only the table structure, constraints, and schema

In this article, we’ll learn the syntax and usage of the SQL DELETE statement with detailed examples, including how to delete a single record, delete multiple records, and delete all records from a table.

SQL DELETE Statement
The SQL DELETE statement removes one or more rows from a database table based on a condition specified in the WHERE clause. It’s a DML (Data Manipulation Language) operation that modifies the data within the table without altering its structure.

Syntax: 
```sql
DELETE FROM table_name
WHERE some_condition;
```

Some_condition: condition to choose a particular record.
table_name: name of the table

# Examples of SQL DELETE Statement
Assume we have created a table named GFG_Employee in SQL which contains the personal details of the Employee including their id, name, email and department etc. as shown below −

```sql
CREATE TABLE GFG_Employees (
   id INT PRIMARY KEY,
   name VARCHAR (20) ,
   email VARCHAR (25),
   department VARCHAR(20)
);
```

```sql
INSERT INTO GFG_Employees (id, name, email, department) VALUES 
(1, 'Jessie', 'jessie23@gmail.com', 'Development'),
(2, 'Praveen', 'praveen_dagger@yahoo.com', 'HR'),
(3, 'Bisa', 'dragonBall@gmail.com', 'Sales'),
(4, 'Rithvik', 'msvv@hotmail.com', 'IT'),
(5, 'Suraj', 'srjsunny@gmail.com', 'Quality Assurance'),
(6, 'Om', 'OmShukla@yahoo.com', 'IT'),
(7, 'Naruto', 'uzumaki@konoha.com', 'Development');
```

```sql
Select * From GFG_Employees
```

# Example 1: Deleting Single Record
We can use the DELETE statement with a condition to delete a specific row from a table. The WHERE clause ensures only the intended record is removed. We can delete the records named Rithvik by using the below query:

Query:
```sql
DELETE FROM GFG_Employees WHERE NAME = 'Rithvik';  
```

```sql

SQL DELETE Statement
Last Updated : 28 Nov, 2024
The SQL DELETE statement is one of the most commonly used commands in SQL (Structured Query Language). It allows you to remove one or more rows from the table depending on the situation. Unlike the DROP statement, which removes the entire table, the DELETE statement removes data (rows) from the table retaining only the table structure, constraints, and schema

In this article, we’ll learn the syntax and usage of the SQL DELETE statement with detailed examples, including how to delete a single record, delete multiple records, and delete all records from a table.

SQL DELETE Statement
The SQL DELETE statement removes one or more rows from a database table based on a condition specified in the WHERE clause. It’s a DML (Data Manipulation Language) operation that modifies the data within the table without altering its structure.

Syntax: 


DELETE FROM table_name


WHERE some_condition;


Parameter Explanation


Some_condition: condition to choose a particular record.
table_name: name of the table
Note: We can delete single as well as multiple records depending on the condition we provide in the WHERE clause. If we omit the WHERE clause then all of the records will be deleted and the table will be empty. 

The sample table is as follows GFG_Employees:

Examples of SQL DELETE Statement
Assume we have created a table named GFG_Employee in SQL which contains the personal details of the Employee including their id, name, email and department etc. as shown below −

CREATE TABLE GFG_Employees (
   id INT PRIMARY KEY,
   name VARCHAR (20) ,
   email VARCHAR (25),
   department VARCHAR(20)
);
INSERT INTO GFG_Employees (id, name, email, department) VALUES 
(1, 'Jessie', 'jessie23@gmail.com', 'Development'),
(2, 'Praveen', 'praveen_dagger@yahoo.com', 'HR'),
(3, 'Bisa', 'dragonBall@gmail.com', 'Sales'),
(4, 'Rithvik', 'msvv@hotmail.com', 'IT'),
(5, 'Suraj', 'srjsunny@gmail.com', 'Quality Assurance'),
(6, 'Om', 'OmShukla@yahoo.com', 'IT'),
(7, 'Naruto', 'uzumaki@konoha.com', 'Development');
Select * From GFG_Employees
Output

GFG_Employee
GFG_Employees

Example 1: Deleting Single Record
We can use the DELETE statement with a condition to delete a specific row from a table. The WHERE clause ensures only the intended record is removed. We can delete the records named Rithvik by using the below query:

Query:
```sql
DELETE FROM GFG_Employees WHERE NAME = 'Rithvik';  
```


# Example 2: Deleting Multiple Records
Delete the rows from the table  GFG_Employees where the department is “Development”. This will delete 2 rows(the first row and the seventh row).

Query
```sql
DELETE FROM GFG_Employees 
WHERE department = 'Development';
```

DELETE FROM GFG_EMPLOyees;
Or
DELETE * FROM GFG_EMPLOyees; 


Rolling Back DELETE Operations
Since the DELETE statement is a DML operation, it can be rolled back when executed in a statement. If you accidentally delete records or need to repeat the process, you can use the ROLLBACK command.

Query:
```sql
START TRANSACTION;
DELETE FROM GFG_Employees WHERE department = 'Development';
-- If needed, you can rollback the deletion
ROLLBACK;
```

# Best Practices for Using SQL DELETE
### Use Transactions: 
Wrap DELETE statements in transactions to provide an option to roll back changes if necessary.
### Always Use a WHERE Clause: 
Avoid deleting all rows by accident. 
Always filter records using a WHERE clause to specify which rows to delete.

### Backup Data: 
Before performing large deletions, ensure that you have a backup of the data to avoid irreversible loss.

### Test on Development Server: 
Always test your DELETE queries on a development or staging environment to ensure they produce the desired result.

### Optimize Deletions: 
For large datasets, delete records in batches to reduce performance impact.