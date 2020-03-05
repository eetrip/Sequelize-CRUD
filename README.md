# Sequelize-CRUD

A simple rest api using Node.js Express , Sequelize and MySQL
(port 3000).

## To install

- run npm ci

## To run

- run npm start

## API routes :

- /api/all - GET
- /api/:id - GET(one)
- /api/new - POST
- /api/update/:id - PUT
- /api/delete/:id - DELETE

## Parser speed test

#### to run

- npm run parsertest

parsing a sample js file (jquery.js) presents comparision between parsing speed of babel vs acorn vs esprima

## Worker thread

#### to run

- npm run workertest

untill the task becomes cpu intensive (upto the value of 1000000(ten lakh)), the "normal sieve" or computing without worker threads presents the best results but observation changes drastically when the task becomes intensive (at the value of 10000000(one crore)) in that situation the sharedArrayBuffer setup of worker threads presents the best results (upto 10 times faster than normal sieve).

running without worker threads doesnt break but after going above the value of 9x8times the time taken to complete the calculation exeeds over 70+ seconds
can result in timeouts.

running with array buffer worker thread runs the calculations upto the value of 9x9times in under to upto 50 seconds but the buffer allocation breaks at values above 9x10 using Int8Array();

running with sharedArrayBuffer worker thread runs the calculations upto the value of 9x9times in under to upto 20 seconds but the buffer allocation breaks at values above 9x10 when using Int8Array();

### database to be created manually

Only GET and POST method is implemented in the front-end.
Please ensure that the db name assigned in the config.js in config folder for dev mode is same as the one created in MySQL.

- to log the queries set { "logging": false, } as true in config.json
