const { callbackKeys } = require('../constants');

module.exports = {
    // Keyboard on /start commands
    START: [
        [
            {
                text: 'Показати на карте',
                callback_data: callbackKeys.SHOW_ON_MAP
            }
        ],
        [
            {
                text: 'Меню',
                callback_data: callbackKeys.MENU
            }
        ]

    ],
    //
}