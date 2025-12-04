/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const Customer = require('./models/customers')

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

// import the model into queries js

// create functions for CRUD and return the result

await createCustomer

await viewCustomer

await updateCustomer

await deleteCustomer

// use export and import into app js

  // The functions calls to run queries in our db will go here as we write them.
};

connect()
/*------------------------------ Query Functions -----------------------------*/

const createCustomer = async () => {
    const customerData = {
        name: "Matt",
        age: 43,
    }

    const customer = await Customer.create(customerData)
    console.log("New Customer:", customer)
}

const viewCustomers = async () => {
    const customers = await Customer.find({})
    console.log('All Customers:', customer)
}

/* const findSingleCustomer = async () => {
    const customer = await Customer.findOne({ name: 'NAME' })
    console.log('Single Customer:', customer)
} */

const updateCustomer = async () => {
    const id = 'ID'
    const updatedCustomer = await Customer.findByIdAndUpdate(id, 
        {isComplete: true},
        {new: true}
    )
    console.log('Updated Customer:', updatedCustomer)
}

const deleteCustomer = async () => {
    const id = 'ID'
    const removedCustomer = await Customer.findByIdAndDelete(id)
    console.log('Removed Customer:', removedCustomer)
}