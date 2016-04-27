window.addEventListener('load', function () {
    var api = require('./data');
    var data = [];
    var price = document.getElementById('price');
    var high = document.getElementById('high');
    var low = document.getElementById('low');
    var change = document.getElementById('change');
    var volumeBTC = document.getElementById('volumeBTC');
    var volumeETH = document.getElementById('volumeETH');
    
    function callBack (d){
        data = d;
        if (data[0]==="BTC_ETH"){
            price.textContent = data[1];
            high.textContent = data[8];
            low.textContent = data[9];
            change.textContent = Math.round(data[4]*1000000)/10000;
            volumeBTC.textContent = data[5];
        }
    
    }
    function periodic() {
        (api(callBack));
    }
    setInterval(periodic, 10000);
    
    
    var accountManager = require('./model/account');
    var balance = require('./view/balance');
    var transact = require('./view/transact');

    var manager = new accountManager();
    var bal = new balance({
        el: document.getElementById('resources'),
        model: manager,
        price: parseInt(data[1]),
    });
    
    bal.render();
    var trans = new transact({
        el: document.getElementById('controls'),
        model: manager,
        price: parseInt(data[1]),
    });
    
});