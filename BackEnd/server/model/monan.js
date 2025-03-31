const db = require('../config/config');

const Food = {

    getAll: ({page, pageSize}, callback) => {

        const sqlGet = page ?  `CALL GetFoodsByPage(${page}, ${pageSize});` :  "SELECT * FROM mon_an";

        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    getById: (ma_mon_an, callback) => {
        const sqlGet = "SELECT * FROM mon_an WHERE ma_mon_an = ?";
        db.query(sqlGet, [ma_mon_an], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    create: (foodData, callback) => {
        const {ten_mon_an , gia , size , loai_mon ,anh_monan ,ma_danh_muc ,soluong , mo_ta } = foodData;
        const sqlInsert = "Insert into mon_an (ten_mon_an , gia,size_mon,loai_mon,anh_monan,ma_danh_muc,soluong,mo_ta) values(?,?,?,?,?,?,?,?)";
        db.query(sqlInsert, [ten_mon_an , gia , size_mon , loai_mon ,anh_monan ,ma_danh_muc ,soluong , mo_ta], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    update: (ma_mon_an, foodData, callback) => {
        const {ten_mon_an , gia , size , loai_mon ,anh_monan ,ma_danh_muc ,soluong , mo_ta } = foodData;
        const sqlUpdate = "update mon_an set ten_mon_an = ?, gia = ? ,size = ?, loai_mon = ? ,anh_monan = ? ,ma_danh_muc = ? ,soluong= ?, mo_ta = ? where ma_mon_an = ?";
        db.query(sqlUpdate, [ten_mon_an , gia , size_mon , loai_mon ,anh_monan ,ma_danh_muc ,soluong , mo_ta, ma_mon_an], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    
    delete: (ma_mon_an, callback) => {
        const sqlDelete = "DELETE FROM mon_an WHERE ma_mon_an = ?";
        db.query(sqlDelete, [ma_mon_an], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

     searchByName: (searchTerm, callback) => {
        const sqlSearch = "SELECT * FROM mon_an WHERE ten_mon_an LIKE ?";
        const formattedSearchTerm = `%${searchTerm}%`;
        db.query(sqlSearch, [formattedSearchTerm], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
};

module.exports = Food;
