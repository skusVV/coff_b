const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shopId: {
        type: String,
        required: true
    },
    products: {
        type: [],
        default: [],
    }
});

module.exports = {
    ShopSchema
};
