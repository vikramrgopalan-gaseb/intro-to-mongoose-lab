const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

// Compile the schema into a model:
const Todo = mongoose.model('Todo', todoSchema);

// Export the model:
module.exports = Todo;
