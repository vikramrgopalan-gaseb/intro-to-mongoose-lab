// Welcome message

console.log("Welcome to this database, user!")

// EXPORT THE CONNECT FUNCTION INTO THIS FILE

const connect = require('/queries')

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

module.exports = {
    deleteCustomer,
    updateCustomer,
    viewCustomers,
    createCustomer,
}