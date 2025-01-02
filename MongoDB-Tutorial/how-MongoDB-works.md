# Some important parts of MongoDB –

### Drivers: 
Drivers are present on your server that are used to communicate with MongoDB. The drivers support by the MongoDB are C, C++, C#, and .Net, Go, Java, Node.js, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid.

### MongoDB Shell: 
MongoDB Shell or mongo shell is an interactive JavaScript interface for MongoDB. It is used for queries, data updates, and it also performs administrative operations.

### Storage Engine: 
It is an important part of MongoDB which is generally used to manage how data is stored in the memory and on the disk. MongoDB can have multiple search engines. You are allowed to use your own search engine and if you don’t want to use your own search engine you can use the default search engine, known as WiredTiger Storage Engine which is an excellent storage engine, it efficiently works with your data like reading, writing, etc.

# MongoDB work in two layers –

### Application Layer and Data layer
Application Layer is also known as the Final Abstraction Layer, it has two-parts, first is a Frontend (User Interface) and the second is Backend (server). The frontend is the place where the user uses MongoDB with the help of a Web or Mobile. This web and mobile include web pages, mobile applications, android default applications, IOS applications, etc. The backend contains a server which is used to perform server-side logic and also contain drivers or mongo shell to interact with MongoDB server with the help of queries.

These queries are sent to the MongoDB server present in the Data Layer. Now, the MongoDB server receives the queries and passes the received queries to the storage engine. MongoDB server itself does not directly read or write the data to the files or disk or memory. After passing the received queries to the storage engine, the storage engine is responsible to read or write the data in the files or memory basically it manages the data.