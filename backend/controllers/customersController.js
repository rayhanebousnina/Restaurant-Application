const Customer = require('../models/customerModel');


module.exports = {
   

    addCustomer: async(req,res) => {

        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const phone = req.body.phone
        const email = req.body.email
        const password = req.body.password

        try {
            customer = new Customer({
                firstName,
                lastName,
                phone,
                email,
                password
            })
            await customer.save()
            res.json(customer)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    getCustomer: async(req,res) => {
        try {
            const customer = await Customer.find()
            res.json(customer)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    deleteCustomer: async(req,res) => {
        try {
            const customer = await Customer.findByIdAndDelete(req.params.id)
            res.json(customer)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    updateCustomer: async(req,res) => {
        try {
            const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {new : true})
            res.json(customer)
        }
        catch (error) {
            console.error(error.message)
        }
    }
};
