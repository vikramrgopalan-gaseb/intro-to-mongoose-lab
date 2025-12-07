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
} = require('app') // THIS IS IMPORTING FUNCTIONS IN BULK

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

    let create = 1
    let view = 2
    let update = 3
    let delete = 4
    let quit = 5

    const choices = (choice) => {

        if choice === 1
        createCustomer()
        console.log('Created a new customer')

            else if choice === 2
                    viewCustomers()
                    console.log('Here are your customers')

                    else if choice === 3
                            updateCustomer()
                            console.log('Updated a customer')

                            else if choice === 4
                                    deleteCustomer()
                                    console.log('Deleted a customer')

                                    else if choice === 5
                                    mongoose.connection.close()
                                    console.log('Closed. Thank you!')

}};

connect()
/*------------------------------ Query Functions -----------------------------*/

// build the CRM options for the user here



