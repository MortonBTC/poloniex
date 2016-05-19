module.exports = Backbone.Router.extend({
  initialize: function (vars) {
      this.model = vars.model;
    },
    
  routes: {
    "USD_BTC": "USD_BTC", 
    "BTC_LTC": "BTC_LTC",  
    "BTC_ETH": "BTC_ETH", 
    "BTC_MAID": "BTC_MAID", 
    "BTC_BTS": "BTC_BTS", 
    "BTC_FCT": "BTC_FCT", 
    "BTC_XMR": "BTC_XMR", 
    
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
    
  USD_BTC: function() {
    this.model.set('pair', 'btc');
      this.Change();
  },
      
  BTC_LTC: function() {
    this.model.set('pair', 'ltc');
      this.Change();
  },
    
  BTC_ETH: function() {
    this.model.set('pair', 'eth');
      this.Change();
  },
    
  BTC_MAID: function() {
    this.model.set('pair', 'maid');
      this.Change();
  },
    
  BTC_BTS: function() {
    this.model.set('pair', 'bts');
      this.Change();
  },
    
  BTC_FCT: function() {
    this.model.set('pair', 'fct');
      this.Change();
  },
    
  BTC_XMR: function() {
    this.model.set('pair', 'xmr');
      this.Change();
  },
 
});