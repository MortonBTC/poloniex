module.exports = Backbone.Router.extend({
  initialize: function (vars) {
      this.model = vars.model;
    },
    
  routes: {
    "USD_ETHD": "USD_ETHD",
    "ETHD_BTC": "ETHD_BTC", 
    "ETHD_LTC": "ETHD_LTC",  
    "ETHD_ETH": "ETHD_ETH", 
    "ETHD_MAID": "ETHD_MAID", 
    "ETHD_BTS": "ETHD_BTS", 
    "ETHD_FCT": "ETHD_FCT", 
    "ETHD_XMR": "ETHD_XMR", 
    
  },
  Change: function () {
    var price = document.getElementById('price');
    var high = document.getElementById('high');
    var low = document.getElementById('low');
    var change = document.getElementById('change');
    var volumeBTC = document.getElementById('volumeBTC');
    price.textContent = this.model.get(this.model.get('pair')+"P");
    high.textContent = this.model.get(this.model.get('pair')+"PH")
    low.textContent = this.model.get(this.model.get('pair')+"PL")
    change.textContent = this.model.get(this.model.get('pair')+"PP")
    volumeBTC.textContent = this.model.get(this.model.get('pair')+"PV")
  },
    
  USD_ETHD: function() {
    this.model.set('pair', 'ethd');
      this.Change();
  },
    
  ETHD_BTC: function() {
    this.model.set('pair', 'btc');
      this.Change();
  },
      
  ETHD_LTC: function() {
    this.model.set('pair', 'ltc');
      this.Change();
  },
    
  ETHD_ETH: function() {
    this.model.set('pair', 'eth');
      this.Change();
  },
    
  ETHD_MAID: function() {
    this.model.set('pair', 'maid');
      this.Change();
  },
    
  ETHD_BTS: function() {
    this.model.set('pair', 'bts');
      this.Change();
  },
    
  ETHD_FCT: function() {
    this.model.set('pair', 'fct');
      this.Change();
  },
    
  ETHD_XMR: function() {
    this.model.set('pair', 'xmr');
      this.Change();
  },
 
});