const express = require('express');
const router = express.Router();
const dishes = require('../controllers/dishesController');

/* @GET URL */
router.get("/message", dishes.message);
router.get("/getDishes", dishes.getDishes);


/* @POST URL */
router.post("/addDish", dishes.addDish);

/* @DELETE URL */
router.delete("/deleteDish/:id", dishes.deleteDish);

/* @PUT URL */
router.put("/updateDish/:id", dishes.updateDish);


module.exports = router;