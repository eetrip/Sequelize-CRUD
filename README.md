# Sequelize-CRUD

A simple rest api using Node.js Express , Sequelize and MySQL

This project is a testing on the sequelize ORM for node.js. You can play around with the CRUD operations using postman (port 3000).

## To install

- run npm ci

## To run

- run npm start
- run npm run parsertest (speed comparison of babel vs esprima)

## API routes :

- /api/all - GET
- /api/new - POST
- /api/update/:id - PUT
- /api/delete/:id - DELETE
- /api/worker - testing worker threads

### database to be created manually

Only GET and POST method is implemented in the front-end. The front end is tweaked a little with bootstrap for better visualisation.
Please ensure that the db name assigned in the config.js in config folder for dev mode is same as the one created in MySQL.

- to log the queries set { "logging": false, } as true in config.json
