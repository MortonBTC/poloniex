module.exports = Backbone.Model.extend({
    defaults: {
        ethd: 1,
        btc: 0,
        ltc: 0,
        eth: 0,
        maid: 0,
        bts: 0,
        fct: 0,
        xmr: 0,
        price: 0,
        pair: '',
        ethdP: "N/A",
        btcP: "N/A",
        ltcP: "N/A",
        ethP: "N/A",
        maidP: "N/A",
        btsP: "N/A",
        fctP: "N/A",
        xmrP: "N/A",
        ethdPH: "N/A",
        btcPH: "N/A",
        ltcPH: "N/A",
        ethPH: "N/A",
        maidPH: "N/A",
        btsPH: "N/A",
        fctPH: "N/A",
        xmrPH: "N/A",
        ethdPL: "N/A",
        btcPL: "N/A",
        ltcPL: "N/A",
        ethPL: "N/A",
        maidPL: "N/A",
        btsPL: "N/A",
        fctPL: "N/A",
        xmrPL: "N/A",
        ethdPP: "N/A",
        btcPP: "N/A",
        ltcPP: "N/A",
        ethPP: "N/A",
        maidPP: "N/A",
        btsPP: "N/A",
        fctPP: "N/A",
        xmrPP: "N/A",
        ethdPV: "N/A",
        btcPV: "N/A",
        ltcPV: "N/A",
        ethPV: "N/A",
        maidPV: "N/A",
        btsPV: "N/A",
        fctPV: "N/A",
        xmrPV: "N/A",
    },

    buy: function () {
        console.log(this.get('pair'));
        this.set(this.get('pair'), this.get(this.get('pair')) + 1);
        this.set('ethd', this.get('ethd') - this.get('price'));
    },
    
    sell: function () {
        console.log(this.get('pair'));
        this.set(this.get('pair'), this.get(this.get('pair')) - 1);
        this.set('ethd', this.get('ethd') + this.get('price'));
    },
});