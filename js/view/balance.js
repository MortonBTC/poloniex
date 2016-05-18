
module.exports = Backbone.View.extend({
    initialize: function () {
        // Set up an event listener.
        // Run this.render whenever the model changes.
        this.model.on('change', this.render, this);
    },
    render: function () {
        document.getElementById('btc-wealth').textContent = this.model.get('btc');
        document.getElementById('ltc-wealth').textContent = this.model.get('ltc');
        document.getElementById('eth-wealth').textContent = this.model.get('eth');
        document.getElementById('maid-wealth').textContent = this.model.get('maid');
        document.getElementById('bts-wealth').textContent = this.model.get('bts');
        document.getElementById('fct-wealth').textContent = this.model.get('fct');
        document.getElementById('xmr-wealth').textContent = this.model.get('xmr');
    }
});