// Welcome message

console.log("Welcome to this database, user!")

const Customer = require('./models/customers')

const firstCustomer = {
    name: "Matt",
    age: 43,
}

const createCustomer = async () => {
    const newName = prompt(`Enter the name of your new customer`)
    const newAge = prompt(`Enter the age of your new customer`)
    const customerData = {
            name: newName,
            age: newAge
    }
    const newCustomer = await Customer.create(customerData)
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

const updateInfo = () => {
    viewCustomers()
    const custInfo = prompt(`Enter the ID for the customer you want to update`)
    return custInfo
}

// combine both update functions above

const deleteCustomer = async () => {
    const id = prompt(`Enter the ID for the customer you want to delete`)
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

module.exports = {
    deleteCustomer,
    updateCustomer,
    viewCustomers,
    createCustomer,
    makeChoice,
    updateInfo,
}