const config = require('../config');

const categories = {
    COFFEE: {
        name: 'Кава',
        value: 'coffee'
    },
    PIECE_GOODS: {
        name: 'Штучний товар',
        value: 'piece_goods'
    },
    SUMMER: {
        name: 'Літній товар',
        value: 'summer_product'
    },
};

module.exports = {
    data: {
        shopId: config.nameId,
        name: config.name,
        products: [
            {
                name: 'Американно',
                id: 'americano_s',
                category: categories.COFFEE,
                size: 100,
                price: 22,
                amount: 100
            },
            {
                name: 'Американо',
                id: 'americano_l',
                category: categories.COFFEE,
                size: 175,
                price: 34,
                amount: 50
            },
            {
                name: 'Латте L',
                id: 'late_l',
                category: categories.COFFEE,
                size: 300,
                price: 25,
                amount: 50
            },{
                name: 'Латте XL',
                id: 'late_xl',
                category: categories.COFFEE,
                size: 600,
                price: 44,
                amount: 50
            },{
                name: 'Снікер',
                id: 'snickers',
                category: categories.PIECE_GOODS,
                price: 8.5,
                amount: 50
            },{
                name: 'Морозиво ЛАСУНКА',
                id: 'ice_cream',
                category: categories.PIECE_GOODS,
                price: 27,
                amount: 50
            },{
                name: 'Цукерка',
                id: 'candy',
                category: categories.PIECE_GOODS,
                price: 5.6,
                amount: 50
            },{
                name: 'Bounty',
                id: 'Bounty',
                category: categories.PIECE_GOODS,
                price: 14,
                amount: 50
            },
            {
                name: 'Холодний чай',
                id: 'clod_tee',
                category: categories.SUMMER,
                size: 500,
                price: 18,
                amount: 50
            },{
                name: 'Холодна кава',
                id: 'cold_coffe',
                category: categories.SUMMER,
                size: 100,
                price: 18,
                amount: 50
            },
        ]
    }
}