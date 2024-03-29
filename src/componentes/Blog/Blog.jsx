import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
        
                <NavBar></NavBar>

                <hr />

            <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p class="text-gray-300">Answer:<br />
An access token and refresh token are commonly used in authentication and authorization protocols. <br />
Access Token:  A secure string that a client uses to access protected resources. An instance issues access tokens to clients that have a valid authorization grant. Each access token has a specific scope, lifespan, and other attributes. It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period.<br />
Refresh token: A credential that a client uses to obtain new access tokens without requiring additional user authorization. An instance issues a refresh token to a client when it is first authorized to have an access token. The refresh token is used to generate a new access token.<br />
When a client application makes a request to an API endpoint, it includes the access token in the request headers or as a parameter. The server verifies the access token to ensure that the user is authenticated and authorized to access the requested resource. If the access token is valid and has not expired, the server processes the request and returns the requested data or performs the requested action on behalf of the user.<br />
When an access token expires, the client application can send a request to the authentication server with the refresh token. If the refresh token is valid and not expired, the server responds with a new access token. This process is known as token refresh or token renewal. The client application can then continue to use the new access token to access protected resources on behalf of the user.
Two options for client-side token storage: localStorage and cookies. The two have different purposes, and hence different strengths and weaknesses. Cookies are intended to be read by the server, whereas localStorage can only be read by the browser.<br />
</p>
                </div>
            </div>
               <hr />

              <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">2. Compare SQL and NoSQL databases?</h1>
                    <p class="text-gray-300">Answer:<br />
SQL is a domain-specific language used to query and manage data. It works by allowing users to query, insert, delete, and update records in relational databases. SQL also allows for complex logic to be applied through the use of transactions and embedded procedures such as stored functions or views.<br />
NoSQL is preferred over SQL in many cases because it offers more flexibility and scalability. The primary benefit of using a NoSQL system is that it provides developers with the ability to store and access data quickly and easily, without the overhead of a traditional relational database. As a result, development teams can focus on delivering features and core business logic faster, without worrying about the underlying data storage implementation. <br />
SQL: Relational database management system (RDBMS)<br />
NoSQL: Non-relational database management system.<br />
SQL: Suitable for structured data with predefined schema.<br />
NoSQL: Suitable for unstructured and semi-structured data.<br />

SQL: Data is stored in tables with columns and rows.<br />
NoSQL: Data is stored in collections or documents.<br />
SQL: Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server.<br />
NoSQL: Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis.<br />
</p>
                </div>
            </div>
               <hr />

              <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">3. What is express js? What is Nest JS ?</h1>
                    <p class="text-gray-300">Answer:<br />
Express.js: Express.js is a free and open-source web application framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.<br />
Nest JS: Nest JS is a popular open-source, back-end framework for Node.js and TypeScript-based, server-side applications. Nest JS is a modular and adaptable framework that allows developers to easily organize their code into smaller and reusable modules. It also includes a robust dependency injection framework that simplifies managing application components and dependencies. Nest JS also supports several server-side rendering techniques and interfaces with other Node.js modules and tools.<br />
</p>
                </div>
            </div>
              <hr />


              <div class="bg-gray-900 p-4">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">4. What is MongoDB aggregate and how does it work (google it)?</h1>
                    <p class="text-gray-300">Answer: <br />In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result.<br />
MongoDB provides three ways to perform aggregation :<br />
•	Aggregation pipeline<br />
•	Map-reduce function<br />
•	Single-purpose aggregation<br />
</p>
                </div>
            </div>
              <hr />

              <Footer></Footer>

        </div>
    );
};

export default Blog;