/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 41.5, "KoPercent": 58.5};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.19516666666666665, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.338, 500, 1500, "Access Home Page"], "isController": false}, {"data": [0.068, 500, 1500, "Single Video Access [android]"], "isController": false}, {"data": [0.076, 500, 1500, "Single Video Access [Chrome]"], "isController": false}, {"data": [0.0, 500, 1500, "LoginRequest"], "isController": false}, {"data": [0.05, 500, 1500, "Subcription"], "isController": false}, {"data": [0.662, 500, 1500, "Access Playlist"], "isController": false}, {"data": [0.788, 500, 1500, "Access Detail Movie"], "isController": false}, {"data": [0.108, 500, 1500, "History"], "isController": false}, {"data": [0.064, 500, 1500, "Access Favorite Page"], "isController": false}, {"data": [0.064, 500, 1500, "Single Video Access [Firefox]"], "isController": false}, {"data": [0.06, 500, 1500, "Single Video Access [ios]"], "isController": false}, {"data": [0.064, 500, 1500, "Get Continue Watching List"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3000, 1755, 58.5, 3451.3210000000113, 52, 35719, 2573.8, 34119.7, 35284.78, 67.12610758077508, 280.37187601388393, 18.027948584198516], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Access Home Page", 250, 0, 0.0, 1626.0160000000005, 203, 4011, 2559.9, 2664.35, 3839.8100000000013, 9.165902841429881, 180.40000572868928, 1.3695147800183318], "isController": false}, {"data": ["Single Video Access [android]", 250, 195, 78.0, 551.5400000000001, 59, 2892, 1873.0, 2217.5999999999995, 2747.680000000001, 10.627444312191804, 16.12693917647934, 2.9925803833319162], "isController": false}, {"data": ["Single Video Access [Chrome]", 250, 195, 78.0, 859.4760000000005, 73, 3207, 1463.1000000000001, 1896.6999999999998, 2703.7100000000028, 9.856878129558806, 14.944913912490636, 2.7659709148168594], "isController": false}, {"data": ["LoginRequest", 250, 195, 78.0, 31841.376000000004, 12127, 35719, 35331.3, 35579.45, 35716.0, 6.998488326521471, 9.61332586536308, 3.205608369842114], "isController": false}, {"data": ["Subcription", 250, 195, 78.0, 883.4079999999998, 131, 2355, 1732.5, 1865.1499999999999, 2287.3200000000006, 9.167583425009166, 5.022833012467913, 2.420349456820682], "isController": false}, {"data": ["Access Playlist", 250, 0, 0.0, 846.1160000000001, 63, 4534, 1775.0, 2171.75, 4525.9400000000005, 9.856878129558806, 191.99735466033198, 1.703776786066317], "isController": false}, {"data": ["Access Detail Movie", 250, 0, 0.0, 603.8519999999996, 52, 2963, 1247.6, 1451.1499999999994, 2320.3900000000003, 9.845620667926905, 13.216399665741179, 2.5416700510987713], "isController": false}, {"data": ["History", 250, 195, 78.0, 1063.807999999999, 125, 4231, 1830.7, 2000.6999999999998, 2145.49, 9.076057360682519, 4.972686739880196, 2.4316388523325467], "isController": false}, {"data": ["Access Favorite Page", 250, 195, 78.0, 1095.9680000000005, 162, 2236, 1857.9, 1927.1499999999999, 2197.86, 8.91583452211127, 4.894479705331669, 2.4235397534771757], "isController": false}, {"data": ["Single Video Access [Firefox]", 250, 195, 78.0, 569.9759999999999, 59, 2860, 1706.4, 2239.2, 2826.01, 10.154758519842398, 15.409647718733499, 2.8594768649214024], "isController": false}, {"data": ["Single Video Access [ios]", 250, 195, 78.0, 612.6800000000005, 59, 2946, 1859.4000000000003, 2183.35, 2875.7200000000003, 10.953862331858213, 16.62227214597117, 3.041707857753144], "isController": false}, {"data": ["Get Continue Watching List", 250, 195, 78.0, 861.6360000000009, 128, 4277, 1782.0, 1940.6, 4271.41, 9.468262384487199, 5.037041617747311, 2.453500475780185], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["504\/Gateway Time-out", 195, 11.11111111111111, 6.5], "isController": false}, {"data": ["401\/Unauthorized", 1560, 88.88888888888889, 52.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3000, 1755, "401\/Unauthorized", 1560, "504\/Gateway Time-out", 195, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["Single Video Access [android]", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Chrome]", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["LoginRequest", 250, 195, "504\/Gateway Time-out", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Subcription", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["History", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Access Favorite Page", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Firefox]", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [ios]", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get Continue Watching List", 250, 195, "401\/Unauthorized", 195, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
