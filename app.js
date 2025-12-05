/* const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`); */

/* const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  name: String,
  age: Number,
}); */

// Compile the schema into a model:
/* const Customer = mongoose.model('Customer', customerSchema);

// Export the model:
module.exports = Customer; */

// LOOK AT HOW TO IMPORT FUNCTIONS INTO THIS FILE

// EXPORT THE CONNECT FUNCTION INTO THIS FILE

const connect = require('/queries')

// Welcome message

console.log("Welcome to this database, user!")

// Choices - ENCAPSULATE THIS INTO RUNQUERIES THEN EXPORT TO Q.JS

const Customer = require('/queries')

const createCustomer = require('/queries')

const viewCustomers = require('/queries')

const updateCustomer = require('/queries')

const deleteCustomer = require('/queries')

let create === 1
let view === 2
let update === 3
let delete === 4
let quit === 5
const choices = () => {
    if choice === 1
        return new

        else if choice === 2
                return view

                else if choice === 3

}

mongoose.connection.close()