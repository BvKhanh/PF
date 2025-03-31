const Warehouse = require('../model/khohang');

exports.getAllwarehouse = (req, res) => {
    Warehouse.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.getwarehouseById = (req, res) => {
    const { ma_kho_hang } = req.params;
    Warehouse.getById(ma_kho_hang, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.createwarehouse = (req, res) => {
    const warehouseData = req.body;
    Warehouse.create(warehouseData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Warehouse added successfully");
    });
};

exports.updatewarehouse = (req, res) => {
    const { ma_kho_hang } = req.params;
    const warehouseData = req.body;
    Warehouse.update(ma_kho_hang, warehouseData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Warehouse updated successfully");
    });
};

exports.deletewarehouse = (req, res) => {
    const { ma_kho_hang } = req.params;
    Warehouse.delete(ma_kho_hang, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Warehouse deleted successfully");
    });
};


exports.searchWarehouseByName = (req, res) => {
    const { searchTerm } = req.params; // Lấy search term từ URL params
    Warehouse.searchByName(searchTerm, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};