const express = require('express');
const router = express.Router();
const foodController = require('../controllers/monanController');

router.get('/api/getallma', foodController.getAllFoods);
router.get('/api/getsp/:ma_mon_an', foodController.getFoodById);
router.post('/api/createsp', foodController.createFood);
router.put('/api/updatesp/:ma_mon_an', foodController.updateFood);
router.delete('/api/deletesp/:ma_mon_an', foodController.deleteFood);
router.get('/api/searchsp/:searchTerm', foodController.searchFoodByName);

module.exports = router;
    