/* const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`); */

const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Compile the schema into a model:
const Customer = mongoose.model('Customer', customerSchema);

// Export the model:
module.exports = Customer;

// Welcome message

console.log("Welcome to this database, user!")

// Choices

const choices = () => {
    let create === 1
    let view === 2
    let update === 3
    let delete === 4
    let quit === 5
}

mongoose.connection.close()