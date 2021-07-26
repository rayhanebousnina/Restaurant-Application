const Order = require('../models/orderModel')

module.exports = {
    addOrder: async(req,res) => {

        const idCustomer = req.body.idCustomer
        const idDish = req.body.idDish
        const orderDate = req.body.orderDate
        const orderTime = req.body.orderTime
        const description = req.body.description
        const totalPrice = req.body.totalPrice

        try {
            order = new Order({
                idCustomer,
                idDish,
                orderDate,
                orderTime,
                description,
                totalPrice
            })
            await order.save()
            res.json(order)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    getOrders: async(req,res) => {
        try {
            const order = await Order.find()
            res.json(order)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    deleteOrder: async(req,res) => {
        try {
            const order = await Order.findByIdAndDelete(req.params.id)
            res.json(order)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    updateOrder: async(req,res) => {
        try {
            const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new : true})
            res.json(order)
        }
        catch (error) {
            console.error(error.message)
        }
    }
};