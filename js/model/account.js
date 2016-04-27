module.exports = Backbone.Model.extend({
    defaults: {
        btc: 2,
        eth: 0,
    },

    buy: function () {
        console.log(this.model);
        this.set('btc', this.get('btc') - this.price.get("price"));
        this.set('eth', this.get('eth') + 1);
    },
    
    sell: function () {
        console.log(this.get.price);
        this.set('eth', this.get('eth') - 1);
        this.set('btc', this.get('btc') + this.model.get("price"));
    },
});