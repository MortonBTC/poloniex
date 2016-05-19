module.exports = Backbone.View.extend({
    events: {
        'click #buy': 'buyButton',
        'click #sell': 'sellButton',
    },
    buyButton: function () {
        if (this.model.get('btc') - this.model.get('price') > 0) {
        
        this.model.buy();
        }
    },
    sellButton: function () {
        if (this.model.get(this.model.get('pair')) > 0) {
        this.model.sell();
        }
    },
});