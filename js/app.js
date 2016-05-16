window.addEventListener('load', function () {
    var api = require('./data');
    var data = [];
    var price = document.getElementById('price');
    var high = document.getElementById('high');
    var low = document.getElementById('low');
    var change = document.getElementById('change');
    var volumeBTC = document.getElementById('volumeBTC'); 
    
    var accountManager = require('./model/account');
    var balance = require('./view/balance');
    var chart = require('./view/chart');
    var menu = require('./view/menu')
    var transact = require('./view/transact');
    var router = require('./router')

    var manager = new accountManager();
    
    var apiData = new api({
        model: manager,
        price: parseInt(data[1]),
        callBack:   function (d, f){
        data = d; 
        price.textContent = manager.get(f);
        manager.set('price', manager.get(f));
        high.textContent = data[8];
        low.textContent = data[9];
        change.textContent = Math.round(data[4]*1000000)/10000;
        volumeBTC.textContent = data[5];
        }
    });
    
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
    trans.render();
    
    var route = new router({
        model: manager,
    })
    
    var menus = new menu({
        el: document.getElementById('data'),
    });
    
    var charts = new chart({
        model: manager,
    });
    charts.render();
    
    Backbone.history.start();
    route.navigate('ETHD_Dollar');
});