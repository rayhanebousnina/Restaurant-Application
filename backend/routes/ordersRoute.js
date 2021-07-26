const express = require('express');
const router = express.Router();
const orders = require('../controllers/ordersController');

/* @GET URL */
router.get("/getOrders", orders.getOrders);


/* @POST URL */
router.post("/addOrder", orders.addOrder);

/* @DELETE URL */
router.delete("/deleteOrder/:id", orders.deleteOrder);

/* @PUT URL */
router.put("/updateOrder/:id", orders.updateOrder);



module.exports = router;