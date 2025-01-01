# SQL CREATE TABLE Statement
To create a new table in the database, use the SQL CREATE TABLE statement. A table’s structure, including column names, data types, and constraints like NOT NULL, PRIMARY KEY, and CHECK, are defined when it is created in SQL.

The CREATE TABLE command is a crucial tool for database administration because of these limitations, which aid in ensuring data integrity.
To create a table in SQL, use this CREATE TABLE syntax:


CREATE table table_name
(
Column1 datatype (size),
column2 datatype (size),
.
.
columnN datatype(size)
);


table_name: The name you assign to the new table.
column1, column2, … : The names of the columns in the table.
datatype(size): Defines the data type and size of each column.

```sql
CREATE TABLE Customer(
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT CHECK (Age >= 0 AND Age <= 99),
    Phone int(10)
);
```
```sql
INSERT INTO Customer (CustomerID, CustomerName, LastName, Age, Phone)
VALUES (1, 'Shubham', 'Thakur', '23','1234567890'),
       (2, 'Aman ', 'Chopra', '21','1234567890'),
       (3, 'Naveen', 'Tulasi', '24','1234567890'),
       (4, 'Aditya', 'Arpan', '21','1234567890'),
       (5, 'Nishant. Salchichas S.A.', 'Jain','22','1234567890');
```

# Create Table From Another Table
We can also use CREATE TABLE to create a copy of an existing table. In the new table, it gets the exact column definition all columns or specific columns can be selected.

If an existing table was used to create a new table, by default the new table would be populated with the existing values from the old table.

Syntax:

```sql
CREATE TABLE SubTable AS
SELECT CustomerID, CustomerName
FROM customer;