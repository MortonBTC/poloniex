module.exports = Backbone.View.extend({
    initialize: function () {
        // Set up an event listener.
        // Run this.render whenever the model changes.
        this.model.on('change', this.render, this);
        google.charts.load('current', {'packages':['corechart']});
    },
    render: function () {
              var timeSet = [];
          for (var k = 0; k < 6; k++) {
                if (this.model.get('times').length !== 0) {
                    timeSet[k] = this.model.get('times')[(0+(15*k))];
                } else {
                    timeSet = null;
                }
          };
        
        var cs1L = parseFloat(this.model.get((this.model.get('pair')+"ML0")));
        var cs1O = parseFloat(this.model.get((this.model.get('pair')+"P1")));
        var cs1C = parseFloat(this.model.get((this.model.get('pair')+"P0")));
        var cs1H = parseFloat(this.model.get((this.model.get('pair')+"MH0")));
        if (cs1L === undefined && cs1O === undefined && cs1C === undefined && cs1H === undefined) {
            cs1L = 0;
            cs1O = 0;
            cs1C = 0;
            cs1H = 0;
        }
        if (cs1H < cs1O || cs1H < cs1C || cs1H < cs1L) {
            if (cs1O < cs1C) {
                cs1H = cs1C;
            } else {
                cs1H = cs1O;
            }
        }
         if (cs1L > cs1O || cs1L > cs1C || cs1L > cs1L) {
            if (cs1O < cs1C) {
                cs1L = cs1O;
            } else {
                cs1L = cs1C;
            }
        }
        
        var cs2L = parseFloat(this.model.get((this.model.get('pair')+"ML1")));
        var cs2O = parseFloat(this.model.get((this.model.get('pair')+"P2")));
        var cs2C = parseFloat(this.model.get((this.model.get('pair')+"P1")));
        var cs2H = parseFloat(this.model.get((this.model.get('pair')+"MH1")));
        if (cs2L === undefined && cs2O === undefined && cs2C === undefined && cs2H === undefined) {
            cs2L = 0;
            cs2O = 0;
            cs2C = 0;
            cs2H = 0;
        }
        if (cs2H < cs2O || cs2H < cs2C || cs2H < cs2L) {
            if (cs2O < cs2C) {
                cs2H = cs2C;
            } else {
                cs2H = cs2O;
            }
        }
         if (cs2L > cs2O || cs2L > cs2C || cs2L > cs2L) {
            if (cs2O < cs2C) {
                cs2L = cs2O;
            } else {
                cs2L = cs2C;
            }
        }
        
        var cs3L = parseFloat(this.model.get((this.model.get('pair')+"ML2")));
        var cs3O = parseFloat(this.model.get((this.model.get('pair')+"P3")));
        var cs3C = parseFloat(this.model.get((this.model.get('pair')+"P2")));
        var cs3H = parseFloat(this.model.get((this.model.get('pair')+"MH2")));
        if (cs3L === undefined && cs3O === undefined && cs3C === undefined && cs3H === undefined) {
            cs3L = 0;
            cs3O = 0;
            cs3C = 0;
            cs3H = 0;
        }
        if (cs3H < cs3O || cs3H < cs3C || cs3H < cs3L) {
            if (cs3O < cs3C) {
                cs3H = cs3C;
            } else {
                cs3H = cs3O;
            }
        }
         if (cs3L > cs3O || cs3L > cs3C || cs3L > cs3L) {
            if (cs3O < cs3C) {
                cs3L = cs3O;
            } else {
                cs3L = cs3C;
            }
        }
        
        var cs4L = parseFloat(this.model.get((this.model.get('pair')+"ML3")));
        var cs4O = parseFloat(this.model.get((this.model.get('pair')+"P4")));
        var cs4C = parseFloat(this.model.get((this.model.get('pair')+"P3")));
        var cs4H = parseFloat(this.model.get((this.model.get('pair')+"MH3")));
        if (cs4L === undefined && cs4O === undefined && cs4C === undefined && cs4H === undefined) {
            cs4L = 0;
            cs4O = 0;
            cs4C = 0;
            cs4H = 0;
        }
        if (cs4H < cs4O || cs4H < cs4C || cs4H < cs4L) {
            if (cs4O < cs4C) {
                cs4H = cs4C;
            } else {
                cs4H = cs4O;
            }
        }
         if (cs4L > cs4O || cs4L > cs4C || cs4L > cs4L) {
            if (cs4O < cs4C) {
                cs4L = cs4O;
            } else {
                cs4L = cs4C;
            }
        }
        
        var cs5L = parseFloat(this.model.get((this.model.get('pair')+"ML4")));
        var cs5O = parseFloat(this.model.get((this.model.get('pair')+"P5")));
        var cs5C = parseFloat(this.model.get((this.model.get('pair')+"P4")));
        var cs5H = parseFloat(this.model.get((this.model.get('pair')+"MH4")));
        if (cs5L === undefined && cs5O === undefined && cs5C === undefined && cs5H === undefined) {
            cs5L = 0;
            cs5O = 0;
            cs5C = 0;
            cs5H = 0;
        }
        if (cs5H < cs5O || cs5H < cs5C || cs5H < cs5L) {
            if (cs5O < cs5C) {
                cs5H = cs5C;
            } else {
                cs5H = cs5O;
            }
        }
         if (cs5L > cs5O || cs5L > cs5C || cs5L > cs5L) {
            if (cs5O < cs5C) {
                cs5L = cs5O;
            } else {
                cs5L = cs5C;
            }
        }
        
        var cs6L = parseFloat(this.model.get((this.model.get('pair')+"ML5")));
        var cs6O = parseFloat(this.model.get((this.model.get('pair')+"P6")));
        var cs6C = parseFloat(this.model.get((this.model.get('pair')+"P5")));
        var cs6H = parseFloat(this.model.get((this.model.get('pair')+"MH5")));
        if (cs6L === undefined && cs6O === undefined && cs6C === undefined && cs6H === undefined) {
            cs6L = 0;
            cs6O = 0;
            cs6C = 0;
            cs6H = 0;
        }
        if (cs6H < cs6O || cs6H < cs6C || cs6H < cs6L) {
            if (cs6O < cs6C) {
                cs6H = cs6C;
            } else {
                cs6H = cs6O;
            }
        }
         if (cs6L > cs6O || cs6L > cs6C || cs6L > cs6L) {
            if (cs6O < cs6C) {
                cs6L = cs6O;
            } else {
                cs6L = cs6C;
            }
        }
        
        var cs7L = parseFloat(this.model.get((this.model.get('pair')+"ML6")));
        var cs7O = parseFloat(this.model.get((this.model.get('pair')+"P7")));
        var cs7C = parseFloat(this.model.get((this.model.get('pair')+"P6")));
        var cs7H = parseFloat(this.model.get((this.model.get('pair')+"MH6")));
        if (cs7L === undefined && cs7O === undefined && cs7C === undefined && cs7H === undefined) {
            cs7L = 0;
            cs7O = 0;
            cs7C = 0;
            cs7H = 0;
        }
        if (cs7H < cs7O || cs7H < cs7C || cs7H < cs7L) {
            if (cs7O < cs7C) {
                cs7H = cs7C;
            } else {
                cs7H = cs7O;
            }
        }
         if (cs7L > cs7O || cs7L > cs7C || cs7L > cs7L) {
            if (cs7O < cs7C) {
                cs7L = cs7O;
            } else {
                cs7L = cs7C;
            }
        }
        
        var cs8L = parseFloat(this.model.get((this.model.get('pair')+"ML7")));
        var cs8O = parseFloat(this.model.get((this.model.get('pair')+"P8")));
        var cs8C = parseFloat(this.model.get((this.model.get('pair')+"P7")));
        var cs8H = parseFloat(this.model.get((this.model.get('pair')+"MH7")));
        if (cs8L === undefined && cs8O === undefined && cs8C === undefined && cs8H === undefined) {
            cs8L = 0;
            cs8O = 0;
            cs8C = 0;
            cs8H = 0;
        }
        if (cs8H < cs8O || cs8H < cs8C || cs8H < cs8L) {
            if (cs8O < cs8C) {
                cs8H = cs8C;
            } else {
                cs8H = cs8O;
            }
        }
         if (cs8L > cs8O || cs8L > cs8C || cs8L > cs8L) {
            if (cs8O < cs8C) {
                cs8L = cs8O;
            } else {
                cs8L = cs8C;
            }
        }
        
        var cs9L = parseFloat(this.model.get((this.model.get('pair')+"ML8")));
        var cs9O = parseFloat(this.model.get((this.model.get('pair')+"P9")));
        var cs9C = parseFloat(this.model.get((this.model.get('pair')+"P8")));
        var cs9H = parseFloat(this.model.get((this.model.get('pair')+"MH8")));
        if (cs9L === undefined && cs9O === undefined && cs9C === undefined && cs9H === undefined) {
            cs9L = 0;
            cs9O = 0;
            cs9C = 0;
            cs9H = 0;
        }
        if (cs9H < cs9O || cs9H < cs9C || cs9H < cs9L) {
            if (cs9O < cs9C) {
                cs9H = cs9C;
            } else {
                cs9H = cs9O;
            }
        }
         if (cs9L > cs9O || cs9L > cs9C || cs9L > cs9L) {
            if (cs9O < cs9C) {
                cs9L = cs9O;
            } else {
                cs9L = cs9C;
            }
        }
        
        var cs10L = parseFloat(this.model.get((this.model.get('pair')+"ML9")));
        var cs10O = parseFloat(this.model.get((this.model.get('pair')+"P10")));
        var cs10C = parseFloat(this.model.get((this.model.get('pair')+"P9")));
        var cs10H = parseFloat(this.model.get((this.model.get('pair')+"MH9")));
        if (cs10L === undefined && cs10O === undefined && cs10C === undefined && cs10H === undefined) {
            cs10L = 0;
            cs10O = 0;
            cs10C = 0;
            cs10H = 0;
        }
        if (cs10H < cs10O || cs10H < cs10C || cs10H < cs10L) {
            if (cs10O < cs10C) {
                cs10H = cs10C;
            } else {
                cs10H = cs10O;
            }
        }
         if (cs10L > cs10O || cs10L > cs10C || cs10L > cs10L) {
            if (cs10O < cs10C) {
                cs10L = cs10O;
            } else {
                cs10L = cs10C;
            }
        }
        
        var cs11L = parseFloat(this.model.get((this.model.get('pair')+"ML10")));
        var cs11O = parseFloat(this.model.get((this.model.get('pair')+"P11")));
        var cs11C = parseFloat(this.model.get((this.model.get('pair')+"P10")));
        var cs11H = parseFloat(this.model.get((this.model.get('pair')+"MH10")));
        if (cs11L === undefined && cs11O === undefined && cs11C === undefined && cs11H === undefined) {
            cs11L = 0;
            cs11O = 0;
            cs11C = 0;
            cs11H = 0;
        }
        if (cs11H < cs11O || cs11H < cs11C || cs11H < cs11L) {
            if (cs11O < cs11C) {
                cs11H = cs11C;
            } else {
                cs11H = cs11O;
            }
        }
         if (cs11L > cs11O || cs11L > cs11C || cs11L > cs11L) {
            if (cs11O < cs11C) {
                cs11L = cs11O;
            } else {
                cs11L = cs11C;
            }
        }
        
        var cs12L = parseFloat(this.model.get((this.model.get('pair')+"ML11")));
        var cs12O = parseFloat(this.model.get((this.model.get('pair')+"P12")));
        var cs12C = parseFloat(this.model.get((this.model.get('pair')+"P11")));
        var cs12H = parseFloat(this.model.get((this.model.get('pair')+"MH11")));
        if (cs12L === undefined && cs12O === undefined && cs12C === undefined && cs12H === undefined) {
            cs12L = 0;
            cs12O = 0;
            cs12C = 0;
            cs12H = 0;
        }
        if (cs12H < cs12O || cs12H < cs12C || cs12H < cs12L) {
            if (cs12O < cs12C) {
                cs12H = cs12C;
            } else {
                cs12H = cs12O;
            }
        }
         if (cs12L > cs12O || cs12L > cs12C || cs12L > cs12L) {
            if (cs12O < cs12C) {
                cs12L = cs12O;
            } else {
                cs12L = cs12C;
            }
        }
        
        var cs13L = parseFloat(this.model.get((this.model.get('pair')+"ML12")));
        var cs13O = parseFloat(this.model.get((this.model.get('pair')+"P13")));
        var cs13C = parseFloat(this.model.get((this.model.get('pair')+"P12")));
        var cs13H = parseFloat(this.model.get((this.model.get('pair')+"MH12")));
        if (cs13L === undefined && cs13O === undefined && cs13C === undefined && cs13H === undefined) {
            cs13L = 0;
            cs13O = 0;
            cs13C = 0;
            cs13H = 0;
        }
        if (cs13H < cs13O || cs13H < cs13C || cs13H < cs13L) {
            if (cs13O < cs13C) {
                cs13H = cs13C;
            } else {
                cs13H = cs13O;
            }
        }

//        console.log([cs1L, cs1O, cs1C, cs1H]);
//        console.log([cs5L, cs5O, cs5C, cs5H]);
        
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            if (timeSet !== null) {
            var data = google.visualization.arrayToDataTable([
                [timeSet[4], cs13L, cs13O, cs13C, cs13H],
                [null, cs12L, cs12O, cs12C, cs12H],
                [null, cs11L, cs11O, cs11C, cs11H],
                [timeSet[3], cs10L, cs10O, cs10C, cs10H],
                [null, cs9L, cs9O, cs9C, cs9H],
                [null, cs8L, cs8O, cs8C, cs8H],
                [timeSet[2], cs7L, cs7O, cs7C, cs7H],
                [null, cs6L, cs6O, cs6C, cs6H],
                [null, cs5L, cs5O, cs5C, cs5H],
                [timeSet[1], cs4L, cs4O, cs4C, cs4H],
                [null, cs3L, cs3O, cs3C, cs3H],
                [null, cs2L, cs2O, cs2C, cs2H],
                [timeSet[0], cs1L, cs1O, cs1C, cs1H],
                // Treat first row as data as well.
            ], true);

                
        var options = {
            legend:'none',
            candlestick: {
            bar: { groupWidth: '100%' }, // Remove space between bars.
            fallingColor: { strokeWidth: 0, fill: '#a52714'}, // red
            risingColor: { strokeWidth: 0, fill: '#0f9d58'},   // green
          }
        };
                
        var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
        chart.draw(data, options);
        }
        }
    }
});