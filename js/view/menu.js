
module.exports = Backbone.View.extend({
    events: {
        "click #USD_BTC": "menuUSD_BTC", 
        "click #BTC_LTC": "menuBTC_LTC",  
        "click #BTC_ETH": "menuBTC_ETH", 
        "click #BTC_MAID": "menuBTC_MAID", 
        "click #BTC_BTS": "menuBTC_BTS", 
        "click #BTC_FCT": "menuBTC_FCT", 
        "click #BTC_XMR": "menuBTC_XMR", 
    },
    menuUSD_BTC: function () {
        document.getElementById('select').innerHTML = 'USD_BTC';
    },
    menuBTC_LTC: function () {
        document.getElementById('select').innerHTML = 'BTC_LTC';
    },
    menuBTC_ETH: function () {
        document.getElementById('select').innerHTML = 'BTC_ETH';
    },
    menuBTC_MAID: function () {
        document.getElementById('select').innerHTML = 'BTC_MAID';
    },
    menuBTC_BTS: function () {
        document.getElementById('select').innerHTML = 'BTC_BTS';
    },
    menuBTC_FCT: function () {
        document.getElementById('select').innerHTML = 'BTC_FCT';
    },
    menuBTC_XMR: function () {
        document.getElementById('select').innerHTML = 'BTC_XMR';
    },
});