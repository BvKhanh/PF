const Food = require('../model/monan');

exports.getAllFoods = (req, res) => {
    const page = req.query.page
    const pageSize = req.query.pageSize || 10


    Food.getAll({page, pageSize}, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }

        console.log(result);
        res.send(page ?result[0] :result);
    });
};

exports.getFoodById = (req, res) => {
    const { ma_mon_an } = req.params;
    Food.getById(ma_mon_an, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.createFood = (req, res) => {
    const foodData = req.body;
    Food.create(foodData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Food added successfully");
    });
};

exports.updateFood = (req, res) => {
    const { ma_mon_an } = req.params;
    const foodData = req.body;
    Food.update(ma_mon_an, foodData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Food updated successfully");
    });
};

exports.deleteFood = (req, res) => {
    const { ma_mon_an } = req.params;
    Food.delete(ma_mon_an, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Food deleted successfully");
    });
};

exports.searchFoodByName = (req, res) => {
    const { searchTerm } = req.params; 
    Food.searchByName(searchTerm, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};
