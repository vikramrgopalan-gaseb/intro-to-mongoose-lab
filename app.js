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
