module.exports = Backbone.View.extend({
    events: {
        'click #buy': 'buyButton',
        'click #sell': 'sellButton',
    },
    buyButton: function () {
        console.log(this.model.get('ethd'));
        if (this.model.get('ethd') - this.model.get('price') > 0) {
        
        this.model.buy();
        }
    },
    sellButton: function () {
        if (this.model.get(this.model.get('pair')) > 0) {
        console.log(this.model.get('pair'));
        this.model.sell();
        }
    },
});