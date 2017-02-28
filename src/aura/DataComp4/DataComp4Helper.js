({
    setupChart  : function(component) {
			//////getting apex data//////////

			        // var selectedTerritoryId = component.get('v.selectedTerritoryId');
			        var action = component.get("c.getInt");
			        // action.setParams({ "selectedTerritoryId" : selectedTerritoryId});
			        action.setCallback(this, function(a){
			            var otherValue = JSON.parse(a.getReturnValue());
									console.log(otherValue);
						///////end apex value except for asynchronous call back////////////////////



				var dataset = component.get('v.dataset');
        var data;
        var jsonRetVal
        if (dataset == '1'){
            jsonRetVal = {"chartLabels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"chartData":[1.00,3.00,6.00,10.00,15.00,21.00]}
        } else {
           jsonRetVal = {"chartLabels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"chartData":[21.00,3.00,16.00,19.00,17.00,12.00]}
        }


        var el = component.find('andeeChart').getElement();
        var ctx = el.getContext('2d');

        // Need something here to destroy any chart that is currently being displayed to stop the 'flicker'

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: jsonRetVal.chartLabels,
                datasets: [
                    {
                        label: "Data",
                        fillColor: "rgba(220,220,220,1)",
                        strokeColor: "rgba(220,220,220,1)",
                        data: jsonRetVal.chartData
                    }
                ]
            },
            options: {
                hover: {
                    mode: "none"
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
					});

        });
				$A.enqueueAction(action); /////this is the end of the apex call


    }
})
// ({
//
//     setupChart  : function(component, event, helper) {
//         var selectedTerritoryId = component.get('v.selectedTerritoryId');
//         var action = component.get("c.GetChartDataJSON");
//         action.setParams({ "selectedTerritoryId" : selectedTerritoryId});
//         action.setCallback(this, function(a){
//             var jsonRetVal = JSON.parse(a.getReturnValue());
//
//             var el = component.find('stiChart').getElement();
//             var ctx = el.getContext('2d');
//             new Chart(ctx, {
//                 type: 'bar',
//                 data: {
//                     labels: jsonRetVal.chartLabels,
//                 datasets: [
//                     {
//                         label: "Cumulative Gross Achieved",
//                         fill: false,
//                         backgroundColor: "rgba(11,111,206,0.8)",
//                         data: jsonRetVal.chartActualData
//                     },
//                     {
//                         type: 'line',
//                         label: "Cumulative Gross Target",
//                         fill: true,
//                         borderColor: "rgba(164,188,152,1)",
//                         backgroundColor: "rgba(184,208,172,0.4)",
//                         pointBackgroundColor: "rgba(255,0,0,1)",
//                         data: jsonRetVal.chartTargetData
//                     }
//                     ]
//                 },
//                 options: {
//                     hover: {
//                         mode: "none"
//                     },
//                     tooltips : {
//
//                         callbacks : {
//                             title : function() {
//                                 return '';
//                             },
//                             beforeLabel : function(tooltipItem) {
//                                 if (tooltipItem.xLabel=='Jan') return 'January';
//                                 if (tooltipItem.xLabel=='Feb') return 'February';
//                                 if (tooltipItem.xLabel=='Mar') return 'March';
//                                 if (tooltipItem.xLabel=='Apr') return 'April';
//                                 if (tooltipItem.xLabel=='May') return 'May';
//                                 if (tooltipItem.xLabel=='Jun') return 'June';
//                                 if (tooltipItem.xLabel=='Jul') return 'July';
//                                 if (tooltipItem.xLabel=='Aug') return 'August';
//                                 if (tooltipItem.xLabel=='Sep') return 'September';
//                                 if (tooltipItem.xLabel=='Oct') return 'October';
//                                 if (tooltipItem.xLabel=='Nov') return 'November';
//                                 if (tooltipItem.xLabel=='Dec') return 'December';
//                                 return tooltipItem.xLabel;
//                             },
//                             label : function(tooltipItem, data) {
//                                 return data.datasets[tooltipItem.datasetIndex].label + ': ' + (Math.round(tooltipItem.yLabel*100)/100).toLocaleString() + 'm';
//                             }
//                         }
//
//                     },
//                     scales: {
//                         xAxes: [{
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: 'Month',
//                                 fontstyle: 'bold',
//                                 fontSize: 20
//                             }
//                         }],
//                         yAxes: [{
//                             ticks: {
//                                 beginAtZero:true
//                             },
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: 'Gross Sales (Millions)',
//                                 fontstyle: 'bold',
//                                 fontSize: 20
//                             }
//                         }]
//                     }
//                 }
//             });
//
//
//         });
//         $A.enqueueAction(action);
//
//
//     }
// })
