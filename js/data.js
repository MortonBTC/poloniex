module.exports = function (callBack) {
    var autobahn = require('autobahn');
    var Firebase = require('firebase');
    var refETH = new Firebase("https://poloniextrader.firebaseio.com/Ethereum");
    var wsuri = "wss://api.poloniex.com";
    var connection = new autobahn.Connection({
      url: wsuri,
      realm: "realm1"
    });
    
    connection.onopen = function (session) {
//            function marketEvent (args,kwargs) {
//                    console.log(args);
//            }
            function tickerEvent (args,kwargs) {
//                    console.log(args);
                    callBack(args);
                if (args[0]==="BTC_ETH"){
                        var time = new Date();
                        var year = refETH.child("Year " + time.getFullYear());
                        var month = year.child("Month " + time.getMonth());
                        var day = month.child("Day " + time.getDay());
                        var hours = day.child("Hours " + time.getHours());
                        var minutes = hours.child("Minutes " + time.getMinutes());
                            minutes.set({
                                id: Date.now(),
                                name: 'Ethereum Data',
                                data: args,
                            });
                };
                    
            }

//           session.subscribe('BTC_ETH', marketEvent);
            session.subscribe('ticker', tickerEvent);
    }
    
    connection.onclose = function () {
      console.log("Websocket connection closed");
    }
    connection.open();
   
};