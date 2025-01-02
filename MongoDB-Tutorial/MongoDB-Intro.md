#  RDBMS vs MongoDB
RDBMS has a typical schema design that shows number of tables and the relationship between these tables whereas MongoDB is document-oriented. There is no concept of schema or relationship.

Complex transactions are not supported in MongoDB because complex join operations are not available.

MongoDB allows a highly flexible and scalable document structure. For example, one data document of a collection in MongoDB can have two fields whereas the other document in the same collection can have four.

MongoDB is faster as compared to RDBMS due to efficient indexing and storage techniques.

There are a few terms that are related in both databases. What’s called Table in RDBMS is called a Collection in MongoDB. Similarly, a Row is called a Document and a Column is called a Field. MongoDB provides a default ‘_id’ (if not provided explicitly) which is a 12-byte hexadecimal number that assures the uniqueness of every document. It is similar to the Primary key in RDBMS.

# MongoDB database features
### Document Oriented: 
MongoDB stores the main subject in the minimal number of documents and not by breaking it up into multiple relational structures like RDBMS. For example, it stores all the information of a computer in a single document called Computer and not in distinct relational structures like CPU, RAM, Hard disk etc.

### Indexing: 
Without indexing, a database would have to scan every document of a collection to select those that match the query which would be inefficient. So, for efficient searching Indexing is a must and MongoDB uses it to process huge volumes of data in very less time.

### Scalability: 
MongoDB scales horizontally using sharding (partitioning data across various servers). Data is partitioned into data chunks using the shard key and these data chunks are evenly distributed across shards that reside across many physical servers. Also, new machines can be added to a running database.

### Replication and High Availability: 
MongoDB increases the data availability with multiple copies of data on different servers. By providing redundancy, it protects the database from hardware failures. If one server goes down, the data can be retrieved easily from other active servers which also had the data stored on them.

### Aggregation: 
Aggregation operations process data records and return the computed results. It is similar to the GROUPBY clause in SQL. A few aggregation expressions are sum, avg, min, max, etc

# Where do we use MongoDB?
MongoDB is preferred over RDBMS in the following scenarios:

### Big Data: 
If we have huge amount of data to be stored in tables, think of MongoDB before RDBMS databases. MongoDB has built-in solution for partitioning and sharding our database.

### Unstable Schema: 
Adding a new column in RDBMS is hard whereas MongoDB is schema-less. Adding a new field does not effect old documents and will be very easy.

### Distributed data: 
Since multiple copies of data are stored across different servers, recovery of data is instant and safe even if there is a hardware failure.

# Language Support by MongoDB
MongoDB currently provides official driver support for all popular programming languages like C, C++, Rust, C#, Java, Node.js, Perl, PHP, Python, Ruby, Scala, Go and Erlang.