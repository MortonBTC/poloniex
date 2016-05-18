module.exports = Backbone.View.extend({
    initialize: function () {
        // Set up an event listener.
        // Run this.render whenever the model changes.
        this.model.on('change', this.render, this);
    },
//    getTimeData : function (month, day, hour, minute) {
//            if (fbData['Month'+month] === undefined) {
//                console.log('1');
//                return null;
//            } else if (fbData['Month'+month]['Day'+day] === undefined) {
//                console.log('2');
//                return null;
//            } else if (fbData['Month'+month]['Day'+day]['Hours'+hour] === undefined) {
//                console.log('3');
//                return null;
//            } else if (fbData['Month'+month]['Day'+day]['Hours'+hour]['Minutes'+minute] === undefined) {
//                console.log('4');
//                return null;
//            } else {
//                return fbData['Month'+month]['Day'+day]['Hours'+hour]['Minutes'+minute].data[1];
//            }
//        },
    firebase: function (cryptoPair) {
        var fbInfo = {};
        if (cryptoPair === 'btc') {
        var refBTC = new Firebase("https://poloniextrader.firebaseio.com/Bitcoin");
        refBTC.on('child_added', function(snapshot) {
//            console.log(snapshot.val());
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'ltc') {
        var refLTC = new Firebase("https://poloniextrader.firebaseio.com/Litecoin");
        refLTC.on('child_added', function(snapshot) {
//            console.log(snapshot.val());
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'eth') {
        var refETH = new Firebase("https://poloniextrader.firebaseio.com/Ethereum");
        refETH.on('child_added', function(snapshot) {
//            console.log(snapshot.val());
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'maid') {
        var refMAID = new Firebase("https://poloniextrader.firebaseio.com/Maidsafe");
        refMAID.on('child_added', function(snapshot) {
//            console.log(snapshot.val());
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'bts') {
        var refBTS = new Firebase("https://poloniextrader.firebaseio.com/Bitshares");
        refBTS.on('child_added', function(snapshot) {
//            console.log(snapshot.val());
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'fct') {
        var refFCT = new Firebase("https://poloniextrader.firebaseio.com/Factom");
        refFCT.on('child_added', function(snapshot) {
//            console.log(snapshot.val());
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'xmr') {
        var refXMR = new Firebase("https://poloniextrader.firebaseio.com/Monero");
        refXMR.on('child_added', function(snapshot) {
//            console.log(snapshot.val());
            fbInfo = snapshot.val();
        });
        }
      return fbInfo;
    },
    render: function () {     

    var fbData = {};
    fbData = this.firebase(this.model.get('pair'));
    var date = new Date();
    var years = date.getYear();
    var months = date.getMonth();
    var days = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var timesArr = [];

        for (let i = 1; i <= 100; i++) {
                if ((minutes - ((i-1))) < 0){
                    if (hours <= 0) {
                        hours = 23;
                        minutes = minutes + 60;       
                        timesArr[(i-1)] = hours + ":" + ("0" + (minutes - ((i-1)))).slice(-2);
                    } else {
                        hours = hours - 1;
                        minutes = minutes + 60;
                        timesArr[(i-1)] = hours + ":" + ("0" + (minutes - ((i-1)))).slice(-2);
                    }
                } else {
                    timesArr[(i-1)] = hours + ":" + ("0" + (minutes - ((i-1)))).slice(-2);
                }
        };
        
     this.model.set('times', timesArr);
     
        var timeSplit = [];
        for (var j = 0; j < 100; j++) {
          timeSplit[j] = timesArr[j].split(":");
        };
        
//        console.log(fbData);
        
        function getTimeData(month, day, hour, minute) {
            if (fbData['Month'+month] === undefined) {
//                console.log('1');
                return null;
            } else if (fbData['Month'+month]['Day'+day] === undefined) {
//                console.log('2');
                return null;
            } else if (fbData['Month'+month]['Day'+day]['Hours'+hour] === undefined) {
//                console.log('3');
                return null;
            } else if (fbData['Month'+month]['Day'+day]['Hours'+hour]['Minutes'+minute] === undefined) {
//                console.log('4');
                return null;
            } else {
                return fbData['Month'+month]['Day'+day]['Hours'+hour]['Minutes'+minute].data[1];
            }
        }
    
        var priceArr = [];
        
        for (var k = 0; k < 100; k++){
         priceArr[k] = getTimeData(months, days, timeSplit[k][0], timeSplit[k][1]);
        };
        
         var price5MArr = []
         var price5MHArr = []
         var price5MLArr = []
         
         for (var l = 0; l < 100; l++){
           if (l % 5 === 0 && priceArr[l] !== null) {
               price5MArr.push(priceArr[l])
               price5MHArr.push(this.setHigh(priceArr[l], priceArr[l-1], priceArr[l-2], priceArr[l-3], priceArr[l-4]))
               price5MLArr.push(this.setLow(priceArr[l], priceArr[l-1], priceArr[l-2], priceArr[l-3], priceArr[l-4]))
           } else if (l % 5 === 0 && priceArr[l-1] !== null) {
               price5MArr.push(priceArr[l-1])
               price5MHArr.push(this.setHigh(priceArr[l-1], priceArr[l-2], priceArr[l-3], priceArr[l-4], null))
               price5MLArr.push(this.setLow(priceArr[l-1], priceArr[l-2], priceArr[l-3], priceArr[l-4], null))
           } else if (l % 5 === 0 && priceArr[l-2] !== null) {
               price5MArr.push(priceArr[l-2])
               price5MHArr.push(this.setHigh(priceArr[l-2], priceArr[l-3], priceArr[l-4], null, null))
               price5MLArr.push(this.setLow(priceArr[l-2], priceArr[l-3], priceArr[l-4], null, null))
           } else if (l % 5 === 0 && priceArr[l-3] !== null) {
               price5MArr.push(priceArr[l-3])
               price5MHArr.push(this.setHigh(priceArr[l-3], priceArr[l-4], null, null, null))
               price5MLArr.push(this.setLow(priceArr[l-3], priceArr[l-4], null, null, null))
           } else if (l % 5 === 0 && priceArr[l-4] !== null) {
               price5MArr.push(priceArr[l-4])
               price5MHArr.push(priceArr[l-4])
               price5MLArr.push(priceArr[l-4])
           } else if (l % 5 === 0) {
               price5MArr.push(price5MArr[Math.floor(l/5)-1])
           }
         };
        
//        console.log(priceArr);
//        console.log(price5MArr);
//        console.log(price5MHArr);
//        console.log(price5MLArr);
        
        for (var m = 0; m < 14; m++) {
            this.model.set((this.model.get('pair')+"P"+m), price5MArr[m])
            this.model.set((this.model.get('pair')+"MH"+m), price5MHArr[m])
            this.model.set((this.model.get('pair')+"ML"+m), price5MLArr[m])
        }    
    },
    setHigh : function (price1, price2, price3, price4, price5) {
            var top = price1;
            if (price1 < price2 && price1 !== null &&  price2 !== null) {
                top = price2
            } else if (price2 < price3 && price2 !== null &&  price3 !== null) {
                top = price3
            } else if (price3 < price4 && price3 !== null &&  price4 !== null) {
                top = price4
            } else if (price4 < price5 && price4 !== null &&  price5 !== null) {
                top = price5
            } ;
            return top;
    },
    setLow : function (price1, price2, price3, price4, price5) {
            var bottom = price1;
            if (price1 > price2 && price1 !== null &&  price2 !== null) {
                bottom = price2
            } else if (price2 > price3 && price2 !== null &&  price3 !== null) {
                bottom = price3
            } else if (price3 > price4 && price3 !== null &&  price4 !== null) {
                bottom = price4
            } else if (price4 > price5 && price4 !== null &&  price5 !== null) {
                bottom = price5
            };
            return bottom;
    },
});