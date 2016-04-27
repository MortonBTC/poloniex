
module.exports = Backbone.View.extend({
    initialize: function () {
        // Set up an event listener.
        // Run this.render whenever the model changes.
        this.model.on('change', this.render, this);
    },
    render: function () {
        document.getElementById('btc-wealth').textContent = this.model.get('btc');
        document.getElementById('eth-wealth').textContent = this.model.get('eth');
    }
});