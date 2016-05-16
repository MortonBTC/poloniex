
module.exports = Backbone.View.extend({
    events: {
        "click #USD_ETHD": "menuUSD_ETHD",
        "click #ETHD_BTC": "menuETHD_BTC", 
        "click #ETHD_LTC": "menuETHD_LTC",  
        "click #ETHD_ETH": "menuETHD_ETH", 
        "click #ETHD_MAID": "menuETHD_MAID", 
        "click #ETHD_BTS": "menuETHD_BTS", 
        "click #ETHD_FCT": "menuETHD_FCT", 
        "click #ETHD_XMR": "menuETHD_XMR", 
    },
    menuUSD_ETHD: function () {
        document.getElementById('select').innerHTML = 'USD_ETHD';
    },
    menuETHD_BTC: function () {
        document.getElementById('select').innerHTML = 'ETHD_BTC';
    },
    menuETHD_LTC: function () {
        document.getElementById('select').innerHTML = 'ETHD_LTC';
    },
    menuETHD_ETH: function () {
        document.getElementById('select').innerHTML = 'ETHD_ETH';
    },
    menuETHD_MAID: function () {
        document.getElementById('select').innerHTML = 'ETHD_MAID';
    },
    menuETHD_BTS: function () {
        document.getElementById('select').innerHTML = 'ETHD_BTS';
    },
    menuETHD_FCT: function () {
        document.getElementById('select').innerHTML = 'ETHD_FCT';
    },
    menuETHD_XMR: function () {
        document.getElementById('select').innerHTML = 'ETHD_XMR';
    },
});