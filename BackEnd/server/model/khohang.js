const db = require('../config/config');

const Warehouse = {
    getAll: (callback) => {
        const sqlGet = "SELECT * FROM kho_hang";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    getById: (ma_kho_hang, callback) => {
        const sqlGet = "SELECT * FROM kho_hang WHERE ma_kho_hang = ?";
        db.query(sqlGet, ma_kho_hang, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    create: (warehouseData, callback) => {
        const { ma_mon_an ,ten_mon_an,ngay_che_bien,so_luong,loai_mon ,size_mon,anh_monan} = warehouseData;
        const sqlInsert = "INSERT INTO kho_hang (ma_mon_an ,ten_mon_an,ngay_che_bien,so_luong,loai_mon ,size_mon,anh_monan) VALUES (?, ?, ?, ?,?,?,?)";
        db.query(sqlInsert, [ma_mon_an ,ten_mon_an,ngay_che_bien,so_luong,loai_mon ,size_mon,anh_monan], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    update: (ma_kho_hang, warehouseData, callback) => {
        const {ten_mon_an,ngay_che_bien,so_luong,loai_mon,size_mon,anh_monan } = warehouseData;
        const sqlUpdate = "update kho_hang set ten_mon_an = ?,ngay_che_bien = ?,so_luong = ?,loai_mon =? ,size_mon=?, anh_monan=? WHERE ma_kho_hang = ?";
        db.query(sqlUpdate, [ten_mon_an,ngay_che_bien,so_luong,loai_mon,size_mon,anh_monan, ma_kho_hang], (error, result) => {
            if (error) {
                return callback(error);

            }
            callback(null, result);
        });
    },

    delete: (ma_kho_hang, callback) => {
        const sqlDelete = "DELETE FROM kho_hang WHERE ma_kho_hang = ?";
        db.query(sqlDelete, ma_kho_hang, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

     // Thêm hàm tìm kiếm gần đúng
     searchByName: (searchTerm, callback) => {
        const sqlSearch = "SELECT * FROM kho_hang WHERE ten_mon_an LIKE ?";
        const formattedSearchTerm = `%${searchTerm}%`; // Tìm kiếm gần đúng
        db.query(sqlSearch, [formattedSearchTerm], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
};

module.exports = Warehouse;
