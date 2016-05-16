module.exports = Backbone.View.extend({
    initialize: function () {
        // Set up an event listener.
        // Run this.render whenever the model changes.
        this.model.on('change', this.render, this);
        google.charts.load('current', {'packages':['corechart']});
    },
    firebase: function (cryptoPair) {
        var fbInfo = {};
        if (cryptoPair === 'btc') {
        var refBTC = new Firebase("https://poloniextrader.firebaseio.com/Bitcoin");
        refBTC.on('child_added', function(snapshot) {
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'ltc') {
        var refLTC = new Firebase("https://poloniextrader.firebaseio.com/Litecoin");
        refLTC.on('child_added', function(snapshot) {
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'eth') {
        var refETH = new Firebase("https://poloniextrader.firebaseio.com/Ethereum");
        refETH.on('child_added', function(snapshot) {
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'maid') {
        var refMAID = new Firebase("https://poloniextrader.firebaseio.com/MaidSafe");
        refMAID.on('child_added', function(snapshot) {
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'bts') {
        var refBTS = new Firebase("https://poloniextrader.firebaseio.com/Bitshares");
        refBTS.on('child_added', function(snapshot) {
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'fct') {
        var refFCT = new Firebase("https://poloniextrader.firebaseio.com/Factom");
        refFCT.on('child_added', function(snapshot) {
            fbInfo = snapshot.val();
        });
        }
        if (cryptoPair === 'xmr') {
        var refXMR = new Firebase("https://poloniextrader.firebaseio.com/Monero");
        refXMR.on('child_added', function(snapshot) {
            fbInfo = snapshot.val();
        });
        }
//        console.log(fbInfo + " is working!")
      return fbInfo;
    },
    render: function () {
        var fbData = this.firebase(this.model.get('pair'));
        var date = new Date();
        var years = date.getYear();
        var months = date.getMonth();
        var days = date.getDay();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var times = [];

        for (let i = 1; i <= 10; i++) {
                if ((minutes - (5 * (i-1))) < 0){
                    if (hours <= 0) {
                        hours = 23;
                        minutes = minutes + 60;       
                        times[(i-1)] = hours + ":" + ("0" + (minutes - (5 * (i-1)))).slice(-2);
                    } else {
                        hours = hours - 1;
                        minutes = minutes + 60;
                        times[(i-1)] = hours + ":" + ("0" + (minutes - (5 * (i-1)))).slice(-2);
                    }
                } else {
                    times[(i-1)] = hours + ":" + ("0" + (minutes - (5 * (i-1)))).slice(-2);
                }
        };
        var timeSplit0 = times[0].split(":");
        var timeSplit15 = times[1].split(":");
        var timeSplit30 = times[2].split(":");
        var timeSplit45 = times[3].split(":");
        
        var min0 = [times[0], 68, 66, 22, 15];
        var min15 = [times[1], 77, 77, 66, 50];
        var min30 = [times[2], 50, 55, 77, 80];
        var min45 = [times[3], 31, 38, 55, 66];
        
        console.log(fbData.val());
//        console.log(fbData.day1.hours12.minutes11.data[1]);
        
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                [times[4], 20, 28, 38, 45],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [times[3], 31, 38, 55, 66],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [times[2], 50, 55, 77, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [times[1], 77, 77, 66, 50],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [null, 82, 88, 72, 80],
                [times[0], 68, 66, 22, 15]
                // Treat first row as data as well.
            ], true);

        var options = {
            legend:'none'
        };
        var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        }
    }
});