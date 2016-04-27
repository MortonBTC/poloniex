module.exports = Backbone.View.extend({
    events: {
        'click #buy': 'buyButton',
        'click #sell': 'sellButton',
    },
    buyButton: function () {
        console.log('buy');
        this.model.buy();

    },
    sellButton: function () {
        console.log('sell');
        this.model.sell();

    },
});