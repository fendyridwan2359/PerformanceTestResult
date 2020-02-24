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

    var data = {"OkPercent": 86.875, "KoPercent": 13.125};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.5091666666666667, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.6125, 500, 1500, "Access Home Page"], "isController": false}, {"data": [0.4025, 500, 1500, "Single Video Access [android]"], "isController": false}, {"data": [0.385, 500, 1500, "Single Video Access [Chrome]"], "isController": false}, {"data": [0.0, 500, 1500, "LoginRequest"], "isController": false}, {"data": [0.6275, 500, 1500, "Subcription"], "isController": false}, {"data": [0.82, 500, 1500, "Access Playlist"], "isController": false}, {"data": [0.8825, 500, 1500, "Access Detail Movie"], "isController": false}, {"data": [0.5425, 500, 1500, "History"], "isController": false}, {"data": [0.5325, 500, 1500, "Access Favorite Page"], "isController": false}, {"data": [0.3675, 500, 1500, "Single Video Access [Firefox]"], "isController": false}, {"data": [0.4375, 500, 1500, "Single Video Access [ios]"], "isController": false}, {"data": [0.5, 500, 1500, "Get Continue Watching List"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2400, 315, 13.125, 2944.1324999999983, 57, 33620, 1906.0, 29661.949999999997, 33116.88, 60.01350303818359, 304.06314076917306, 26.433926149008528], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Access Home Page", 200, 0, 0.0, 827.545, 215, 1517, 1334.4, 1402.9, 1511.0, 7.623985056989288, 150.0525340220333, 1.1391305798040636], "isController": false}, {"data": ["Single Video Access [android]", 200, 35, 17.5, 814.5499999999998, 71, 2135, 1646.2, 1904.7499999999998, 2122.9, 8.893632159373887, 37.115063797914445, 4.542743977343473], "isController": false}, {"data": ["Single Video Access [Chrome]", 200, 35, 17.5, 830.6150000000001, 59, 2793, 1682.0, 1834.75, 2141.5700000000015, 8.613635384814161, 35.904938102954475, 4.391313754360652], "isController": false}, {"data": ["LoginRequest", 200, 35, 17.5, 27720.595, 8277, 33620, 33146.5, 33335.0, 33615.99, 5.946187007581388, 8.417861323769882, 2.7236614111045045], "isController": false}, {"data": ["Subcription", 200, 35, 17.5, 528.2549999999994, 107, 1781, 1081.8000000000002, 1266.0499999999997, 1778.5400000000004, 7.8848807411787885, 4.4377864429331755, 3.8888863221959395], "isController": false}, {"data": ["Access Playlist", 200, 0, 0.0, 500.1200000000001, 74, 1524, 896.0, 1015.0, 1353.7500000000002, 9.047317470370036, 176.2283147109382, 1.563842961187008], "isController": false}, {"data": ["Access Detail Movie", 200, 0, 0.0, 373.7499999999999, 57, 1690, 781.2000000000007, 1046.6, 1270.6200000000003, 8.837825894829873, 11.806135729673, 4.3071023668802475], "isController": false}, {"data": ["History", 200, 35, 17.5, 656.2899999999998, 133, 1942, 1335.8, 1647.95, 1876.1900000000007, 8.256274768824307, 4.629762515996532, 4.104311904000165], "isController": false}, {"data": ["Access Favorite Page", 200, 35, 17.5, 596.9400000000002, 81, 1833, 1304.200000000001, 1641.6499999999996, 1815.8700000000001, 7.669005713409256, 4.405783868246481, 3.8423291369492696], "isController": false}, {"data": ["Single Video Access [Firefox]", 200, 35, 17.5, 959.9899999999998, 64, 2782, 1835.0, 2004.9, 2634.1400000000026, 8.751203290452437, 36.52067711068084, 4.4699932861862255], "isController": false}, {"data": ["Single Video Access [ios]", 200, 35, 17.5, 742.1399999999996, 66, 2336, 1579.0000000000002, 1905.2499999999998, 2135.940000000001, 9.204712812960237, 38.41327111043354, 4.665683751956001], "isController": false}, {"data": ["Get Continue Watching List", 200, 35, 17.5, 778.8000000000002, 81, 1886, 1247.9, 1366.8, 1876.700000000002, 8.692250858359772, 4.356057004867661, 4.244645098113781], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["504\/Gateway Time-out", 35, 11.11111111111111, 1.4583333333333333], "isController": false}, {"data": ["401\/Unauthorized", 280, 88.88888888888889, 11.666666666666666], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2400, 315, "401\/Unauthorized", 280, "504\/Gateway Time-out", 35, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["Single Video Access [android]", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Chrome]", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["LoginRequest", 200, 35, "504\/Gateway Time-out", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Subcription", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["History", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Access Favorite Page", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Firefox]", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [ios]", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get Continue Watching List", 200, 35, "401\/Unauthorized", 35, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
