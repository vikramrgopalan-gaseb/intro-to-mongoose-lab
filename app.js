// Welcome message

console.log("Welcome to this database, user!")

const Customer = require('./models/customers')

const createCustomer = async () => {
    const customerData = {
        name: "Matt",
        age: 43,
    }
    const customer = await Customer.create(customerData)
    console.log("New Customer:", newCustomer)
}

const viewCustomers = async () => {
    const customers = await Customer.find({})
    console.log('All Customers:', customers)
}

/* const findSingleCustomer = async () => {
    const customer = await Customer.findOne({ name: 'NAME' })
    console.log('Single Customer:', customer)
} */

const updateCustomer = async (id, data) => {
    const updatedCustomer = await Customer.findByIdAndUpdate(id, data,
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

const prompt = require('prompt-sync')();

const makeChoice = () => {
   const userChoice = prompt(`What would you like to do?

    1. Create a customer
    2. View all customers
    3. Update a customer
    4. Delete a customer
    5. Quit;

    Number of action to run: `) 

    return userChoice
}

const updateInfo = () => {
    // get all the IDs of the customers first
    const custInfo = prompt(`Enter the ID and data for this customer`)

    // have a separate prompt for the new ID and age

    // return a new objacr {
    name:
    age:
    // create object here?
    return custInfo
}

module.exports = {
    deleteCustomer,
    updateCustomer,
    viewCustomers,
    createCustomer,
    makeChoice,
    updateInfo,
}