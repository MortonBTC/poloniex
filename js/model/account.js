module.exports = Backbone.Model.extend({
    defaults: {
        btc: 1,
        ltc: 0,
        eth: 0,
        maid: 0,
        bts: 0,
        fct: 0,
        xmr: 0,
        price: 0,
        pair: 'btc',
        times: [],
        btcP: "N/A",
        ltcP: "N/A",
        ethP: "N/A",
        maidP: "N/A",
        btsP: "N/A",
        fctP: "N/A",
        xmrP: "N/A",
        btcPH: "N/A",
        ltcPH: "N/A",
        ethPH: "N/A",
        maidPH: "N/A",
        btsPH: "N/A",
        fctPH: "N/A",
        xmrPH: "N/A",
        btcPL: "N/A",
        ltcPL: "N/A",
        ethPL: "N/A",
        maidPL: "N/A",
        btsPL: "N/A",
        fctPL: "N/A",
        xmrPL: "N/A",
        btcPP: "N/A",
        ltcPP: "N/A",
        ethPP: "N/A",
        maidPP: "N/A",
        btsPP: "N/A",
        fctPP: "N/A",
        xmrPP: "N/A",
        btcPV: "N/A",
        ltcPV: "N/A",
        ethPV: "N/A",
        maidPV: "N/A",
        btsPV: "N/A",
        fctPV: "N/A",
        xmrPV: "N/A",
        btcP0: 0,
        btcMH0: 0,
        btcML0: 0,
        btcP1: 0,
        btcMH1: 0,
        btcML1: 0,
        btcP2: 0,
        btcMH2: 0,
        btcML2: 0,
        btcP3: 0,
        btcMH3: 0,
        btcML3: 0,
        btcP4: 0,
        btcMH4: 0,
        btcML4: 0,
        btcP5: 0,
        btcMH5: 0,
        btcML5: 0,
        btcP6: 0,
        btcMH6: 0,
        btcML6: 0,
        btcP7: 0,
        btcMH7: 0,
        btcML7: 0,
        btcP8: 0,
        btcMH8: 0,
        btcML8: 0,
        btcP9: 0,
        btcMH9: 0,
        btcML9: 0,
        btcP10: 0,
        btcMH10: 0,
        btcML10: 0,
        btcP11: 0,
        btcMH11: 0,
        btcML11: 0,
        btcP12: 0,
        btcMH12: 0,
        btcML12: 0,
        btcP13: 0,
        btcMH13: 0,
        btcML13: 0,
        ltcP0: 0,
        ltcMH0: 0,
        ltcML0: 0,
        ltcP1: 0,
        ltcMH1: 0,
        ltcML1: 0,
        ltcP2: 0,
        ltcMH2: 0,
        ltcML2: 0,
        ltcP3: 0,
        ltcMH3: 0,
        ltcML3: 0,
        ltcP4: 0,
        ltcMH4: 0,
        ltcML4: 0,
        ltcP5: 0,
        ltcMH5: 0,
        ltcML5: 0,
        ltcP6: 0,
        ltcMH6: 0,
        ltcML6: 0,
        ltcP7: 0,
        ltcMH7: 0,
        ltcML7: 0,
        ltcP8: 0,
        ltcMH8: 0,
        ltcML8: 0,
        ltcP9: 0,
        ltcMH9: 0,
        ltcML9: 0,
        ltcP10: 0,
        ltcMH10: 0,
        ltcML10: 0,
        ltcP11: 0,
        ltcMH11: 0,
        ltcML11: 0,
        ltcP12: 0,
        ltcMH12: 0,
        ltcML12: 0,
        ltcP13: 0,
        ltcMH13: 0,
        ltcML13: 0,
        ethP0: 0,
        ethMH0: 0,
        ethML0: 0,
        ethP1: 0,
        ethMH1: 0,
        ethML1: 0,
        ethP2: 0,
        ethMH2: 0,
        ethML2: 0,
        ethP3: 0,
        ethMH3: 0,
        ethML3: 0,
        ethP4: 0,
        ethMH4: 0,
        ethML4: 0,
        ethP5: 0,
        ethMH5: 0,
        ethML5: 0,
        ethP6: 0,
        ethMH6: 0,
        ethML6: 0,
        ethP7: 0,
        ethMH7: 0,
        ethML7: 0,
        ethP8: 0,
        ethMH8: 0,
        ethML8: 0,
        ethP9: 0,
        ethMH9: 0,
        ethML9: 0,
        ethP10: 0,
        ethMH10: 0,
        ethML10: 0,
        ethP11: 0,
        ethMH11: 0,
        ethML11: 0,
        ethP12: 0,
        ethMH12: 0,
        ethML12: 0,
        ethP13: 0,
        ethMH13: 0,
        ethML13: 0,
        maidP0: 0,
        maidMH0: 0,
        maidML0: 0,
        maidP1: 0,
        maidMH1: 0,
        maidML1: 0,
        maidP2: 0,
        maidMH2: 0,
        maidML2: 0,
        maidP3: 0,
        maidMH3: 0,
        maidML3: 0,
        maidP4: 0,
        maidMH4: 0,
        maidML4: 0,
        maidP5: 0,
        maidMH5: 0,
        maidML5: 0,
        maidP6: 0,
        maidMH6: 0,
        maidML6: 0,
        maidP7: 0,
        maidMH7: 0,
        maidML7: 0,
        maidP8: 0,
        maidMH8: 0,
        maidML8: 0,
        maidP9: 0,
        maidMH9: 0,
        maidML9: 0,
        maidP10: 0,
        maidMH10: 0,
        maidML10: 0,
        maidP11: 0,
        maidMH11: 0,
        maidML11: 0,
        maidP12: 0,
        maidMH12: 0,
        maidML12: 0,
        maidP13: 0,
        maidMH13: 0,
        maidML13: 0,
        btsP0: 0,
        btsMH0: 0,
        btsML0: 0,
        btsP1: 0,
        btsMH1: 0,
        btsML1: 0,
        btsP2: 0,
        btsMH2: 0,
        btsML2: 0,
        btsP3: 0,
        btsMH3: 0,
        btsML3: 0,
        btsP4: 0,
        btsMH4: 0,
        btsML4: 0,
        btsP5: 0,
        btsMH5: 0,
        btsML5: 0,
        btsP6: 0,
        btsMH6: 0,
        btsML6: 0,
        btsP7: 0,
        btsMH7: 0,
        btsML7: 0,
        btsP8: 0,
        btsMH8: 0,
        btsML8: 0,
        btsP9: 0,
        btsMH9: 0,
        btsML9: 0,
        btsP10: 0,
        btsMH10: 0,
        btsML10: 0,
        btsP11: 0,
        btsMH11: 0,
        btsML11: 0,
        btsP12: 0,
        btsMH12: 0,
        btsML12: 0,
        btsP13: 0,
        btsMH13: 0,
        btsML13: 0,
        fctP0: 0,
        fctMH0: 0,
        fctML0: 0,
        fctP1: 0,
        fctMH1: 0,
        fctML1: 0,
        fctP2: 0,
        fctMH2: 0,
        fctML2: 0,
        fctP3: 0,
        fctMH3: 0,
        fctML3: 0,
        fctP4: 0,
        fctMH4: 0,
        fctML4: 0,
        fctP5: 0,
        fctMH5: 0,
        fctML5: 0,
        fctP6: 0,
        fctMH6: 0,
        fctML6: 0,
        fctP7: 0,
        fctMH7: 0,
        fctML7: 0,
        fctP8: 0,
        fctMH8: 0,
        fctML8: 0,
        fctP9: 0,
        fctMH9: 0,
        fctML9: 0,
        fctP10: 0,
        fctMH10: 0,
        fctML10: 0,
        fctP11: 0,
        fctMH11: 0,
        fctML11: 0,
        fctP12: 0,
        fctMH12: 0,
        fctML12: 0,
        fctP13: 0,
        fctMH13: 0,
        fctML13: 0,
        xmrP0: 0,
        xmrMH0: 0,
        xmrML0: 0,
        xmrP1: 0,
        xmrMH1: 0,
        xmrML1: 0,
        xmrP2: 0,
        xmrMH2: 0,
        xmrML2: 0,
        xmrP3: 0,
        xmrMH3: 0,
        xmrML3: 0,
        xmrP4: 0,
        xmrMH4: 0,
        xmrML4: 0,
        xmrP5: 0,
        xmrMH5: 0,
        xmrML5: 0,
        xmrP6: 0,
        xmrMH6: 0,
        xmrML6: 0,
        xmrP7: 0,
        xmrMH7: 0,
        xmrML7: 0,
        xmrP8: 0,
        xmrMH8: 0,
        xmrML8: 0,
        xmrP9: 0,
        xmrMH9: 0,
        xmrML9: 0,
        xmrP10: 0,
        xmrMH10: 0,
        xmrML10: 0,
        xmrP11: 0,
        xmrMH11: 0,
        xmrML11: 0,
        xmrP12: 0,
        xmrMH12: 0,
        xmrML12: 0,
        xmrP13: 0,
        xmrMH13: 0,
        xmrML13: 0,
    },

    buy: function () {
        console.log(this.get('pair'));
        this.set(this.get('pair'), this.get(this.get('pair')) + 1);
        this.set('btc', Math.round(this.get('btc') - this.get('price')*100000000)/100000000);
    },
    
    sell: function () {
        console.log(this.get('pair'));
        this.set(this.get('pair'), this.get(this.get('pair')) - 1);
        this.set('btc', Math.round(this.get('btc') + this.get('price')*100000000)/100000000);
    },
});