const { data } = require('./data');

module.exports.initDbIfNeed = async function(collection, shopId) {
    try {
        const shop = await collection.find({ shopId });

        if (!shop.length) {
            const res = await collection.create(data);
            console.log('DB initialized with data: ', res);
        }
    } catch(e) {
        console.log('Failed DB initL: ',e )
    }
};
