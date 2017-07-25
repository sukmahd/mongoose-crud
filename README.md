# mongoose-crud

Demo app with basic REST API and mongodb use mongoose ODM

## REST API

List of basic routes:

| Route            | HTTP          | Description      |
| ------------- |:-------------:| ----------------:|
| /    | GET           | Print hai     |

List of user routes:

| Route             | HTTP          | Description      |
| -------------     |:-------------:| :----------------|
| /book          |GET            | Get all the books info    |
| /book/:id      |GET            | Get a single book info     |
| /book         |POST           | Create a book|
| /book/:id      |DELETE         | Delete a book|
| /book/:id      |PUT            | Update a book with new info |
| /customer          |GET            | Get all the customer info    |
| /customer/:id      |GET            | Get a single customer info     |
| /customer         |POST           | Create a customer|
| /customer/:id      |DELETE         | Delete a customer|
| /customer/:id      |PUT            | Update a customer with new info |
| /transaction          |GET            | Get all the transaction info    |
| /transaction/:id      |GET            | Get a single transaction info     |
| /transaction         |POST           | Create a transaction|
| /transaction/:id      |DELETE         | Delete a transaction|
| /transaction/:id      |PUT            | Update a transaction with new info |
| /transaction/:id      |POST            | Add new book to transaction |
