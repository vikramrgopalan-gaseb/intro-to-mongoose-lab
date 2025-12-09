/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const Customer = require('./models/customers') // THIS IS AN IMPORT

const {
    deleteCustomer,
    updateCustomer,
    viewCustomers,
    createCustomer,
    makeChoice,
} = require('./app') // THIS IS IMPORTING FUNCTIONS IN BULK

const prompt = require('prompt-sync')();

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()


  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log('Queries running.')

  // The functions calls to run queries in our db will go here as we write them.
  
   let crudChoice = makeChoice()

    while (true) {

    switch (crudChoice) {
        case '1':
            await createCustomer()
            console.log('Created a new customer')
            crudChoice = makeChoice()
            break;
            
        case '2' :
            await viewCustomers()
            console.log('Here are your customers')
            crudChoice = makeChoice()
            break;
        case '3' :
            await updateCustomer()
            console.log('Updated a customer')
            crudChoice = makeChoice()
            break;
        case '4' :
            await deleteCustomer()
            console.log('Deleted a customer')
            crudChoice = makeChoice()
            break;
        case '5' :
            mongoose.connection.close()
            console.log('Closed. Thank you!')
            crudChoice = makeChoice()
            break;
        default :
            crudChoice = makeChoice()

}};}

connect()
/*------------------------------ Query Functions -----------------------------*/



