module.exports = function (callBack) {
    var autobahn = require('autobahn');
    var Firebase = require('firebase');
    var refBTC = new Firebase("https://poloniextrader.firebaseio.com/Bitcoin");
    var refLTC = new Firebase("https://poloniextrader.firebaseio.com/Litecoin");
    var refETH = new Firebase("https://poloniextrader.firebaseio.com/Ethereum");
    var refMAID = new Firebase("https://poloniextrader.firebaseio.com/Maidsafe");
    var refBTS = new Firebase("https://poloniextrader.firebaseio.com/Bitshares");
    var refFCT = new Firebase("https://poloniextrader.firebaseio.com/Factom");
    var refXMR = new Firebase("https://poloniextrader.firebaseio.com/Monero");
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
    
                if (args[0]==="USDT_BTC"){
                        var time = new Date();
                        var year = refBTC.child("Year" + time.getFullYear());
                        var month = year.child("Month" + time.getMonth());
                        var day = month.child("Day" + time.getDate());
                        var hours = day.child("Hours" + time.getHours());
                        var minutes = hours.child("Minutes" + time.getMinutes());

                            minutes.set({
                                id: Date.now(),
                                name: 'Bitcoin Data',
                                data: args,
                            });

                        callBack.model.set('btcP', parseFloat(args[1]));
                        callBack.model.set('btcPH', parseFloat(args[8]));
                        callBack.model.set('btcPL', parseFloat(args[9]));
                        callBack.model.set('btcPP', parseFloat(Math.round(args[4]*1000000)/10000));
                        callBack.model.set('btcPV', parseFloat(args[5]));

                    
                      if (callBack.model.get('pair')==='btc'){
                          callBack.callBack(args, 'btcP');
                      }

                };
                
                if (args[0]==="BTC_LTC"){
                        var time = new Date();
                        var year = refLTC.child("Year" + time.getFullYear());
                        var month = year.child("Month" + time.getMonth());
                        var day = month.child("Day" + time.getDate());
                        var hours = day.child("Hours" + time.getHours());
                        var minutes = hours.child("Minutes" + time.getMinutes());
                            minutes.set({
                                id: Date.now(),
                                name: 'Litecoin Data',
                                data: args,
                            });
                        callBack.model.set('ltcP', parseFloat(args[1]));
                        callBack.model.set('ltcPH', parseFloat(args[8]));
                        callBack.model.set('ltcPL', parseFloat(args[9]));
                        callBack.model.set('ltcPP', parseFloat(Math.round(args[4]*1000000)/10000));
                        callBack.model.set('ltcPV', parseFloat(args[5]));
                    
                      if (callBack.model.get('pair')==='ltc'){
                          callBack.callBack(args, 'ltcP');
                      }
                };
                
                if (args[0]==="BTC_ETH"){
                        var time = new Date();
                        var year = refETH.child("Year" + time.getFullYear());
                        var month = year.child("Month" + time.getMonth());
                        var day = month.child("Day" + time.getDate());
                        var hours = day.child("Hours" + time.getHours());
                        var minutes = hours.child("Minutes" + time.getMinutes());
                            minutes.set({
                                id: Date.now(),
                                name: 'Ethereum Data',
                                data: args,
                            });
                        callBack.model.set('ethP', parseFloat(args[1]));
                        callBack.model.set('ethPH', parseFloat(args[8]));
                        callBack.model.set('ethPL', parseFloat(args[9]));
                        callBack.model.set('ethPP', parseFloat(Math.round(args[4]*1000000)/10000));
                        callBack.model.set('ethPV', parseFloat(args[5]));
                    
                      if (callBack.model.get('pair')==='eth'){
                          callBack.callBack(args, 'ethP');
                      }
                };
                
                if (args[0]==="BTC_MAID"){
                        var time = new Date();
                        var year = refMAID.child("Year" + time.getFullYear());
                        var month = year.child("Month" + time.getMonth());
                        var day = month.child("Day" + time.getDate());
                        var hours = day.child("Hours" + time.getHours());
                        var minutes = hours.child("Minutes" + time.getMinutes());
                            minutes.set({
                                id: Date.now(),
                                name: 'Maidsafe Data',
                                data: args,
                            });
                        callBack.model.set('maidP', parseFloat(args[1]));
                        callBack.model.set('maidPH', parseFloat(args[8]));
                        callBack.model.set('maidPL', parseFloat(args[9]));
                        callBack.model.set('maidPP', parseFloat(Math.round(args[4]*1000000)/10000));
                        callBack.model.set('maidPV', parseFloat(args[5]));
                    
                      if (callBack.model.get('pair')==='maid'){
                          callBack.callBack(args, 'maidP');
                      }
                };
                
                if (args[0]==="BTC_BTS"){
                        var time = new Date();
                        var year = refBTS.child("Year" + time.getFullYear());
                        var month = year.child("Month" + time.getMonth());
                        var day = month.child("Day" + time.getDate());
                        var hours = day.child("Hours" + time.getHours());
                        var minutes = hours.child("Minutes" + time.getMinutes());
                            minutes.set({
                                id: Date.now(),
                                name: 'Bitshares Data',
                                data: args,
                            });
                        callBack.model.set('btsP', parseFloat(args[1]));
                        callBack.model.set('btsPH', parseFloat(args[8]));
                        callBack.model.set('btsPL', parseFloat(args[9]));
                        callBack.model.set('btsPP', parseFloat(Math.round(args[4]*1000000)/10000));
                        callBack.model.set('btsPV', parseFloat(args[5]));
                    
                      if (callBack.model.get('pair')==='bts'){
                          callBack.callBack(args, 'btsP');
                      }
                    
                      console.log([callBack.model.get('btsP'),
                        callBack.model.get('btsPH'),
                        callBack.model.get('btsPL'),
                        callBack.model.get('btsPP'),
                        callBack.model.get('btsPV')])
                };
                    
                if (args[0]==="BTC_FCT"){
                        var time = new Date();
                        var year = refFCT.child("Year" + time.getFullYear());
                        var month = year.child("Month" + time.getMonth());
                        var day = month.child("Day" + time.getDate());
                        var hours = day.child("Hours" + time.getHours());
                        var minutes = hours.child("Minutes" + time.getMinutes());
                            minutes.set({
                                id: Date.now(),
                                name: 'Factom Data',
                                data: args,
                            });
                        callBack.model.set('fctP', parseFloat(args[1]));
                        callBack.model.set('fctPH', parseFloat(args[8]));
                        callBack.model.set('fctPL', parseFloat(args[9]));
                        callBack.model.set('fctPP', parseFloat(Math.round(args[4]*1000000)/10000));
                        callBack.model.set('fctPV', parseFloat(args[5]));
                    
                      if (callBack.model.get('pair')==='fct'){
                          callBack.callBack(args, 'fctP');
                      }
                };
                
                if (args[0]==="BTC_XMR"){
                        var time = new Date();
                        var year = refXMR.child("Year" + time.getFullYear());
                        var month = year.child("Month" + time.getMonth());
                        var day = month.child("Day" + time.getDate());
                        var hours = day.child("Hours" + time.getHours());
                        var minutes = hours.child("Minutes" + time.getMinutes());
                            minutes.set({
                                id: Date.now(),
                                name: 'Monero Data',
                                data: args,
                            });
                        callBack.model.set('xmrP', parseFloat(args[1]));
                        callBack.model.set('xmrPH', parseFloat(args[8]));
                        callBack.model.set('xmrPL', parseFloat(args[9]));
                        callBack.model.set('xmrPP', parseFloat(Math.round(args[4]*1000000)/10000));
                        callBack.model.set('xmrPV', parseFloat(args[5]));
                    
                      if (callBack.model.get('pair')==='xmr'){
                          callBack.callBack(args, 'xmrP');
                      }
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