const Dish = require('../models/dishModel');


module.exports = {
    message : (req,res) => {
       return res.send("hello my friends")
    },

    addDish: async(req,res) => {

        const name = req.body.name
        const price = req.body.price
        const description = req.body.description

        try {
            dish = new Dish({
                name,
                price,
                description
            })
            await dish.save()
            res.json(dish)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    getDishes: async(req,res) => {
        try {
            const dish = await Dish.find()
            res.json(dish)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    deleteDish: async(req,res) => {
        try {
            const dish = await Dish.findByIdAndDelete(req.params.id)
            res.json(dish)
        }
        catch (error) {
            console.error(error.message)
        }
    },

    updateDish: async(req,res) => {
        try {
            const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {new : true})
            res.json(dish)
        }
        catch (error) {
            console.error(error.message)
        }
    }
};
