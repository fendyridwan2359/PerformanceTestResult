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

    var data = {"OkPercent": 38.75, "KoPercent": 61.25};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.14625, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.31333333333333335, 500, 1500, "Access Home Page"], "isController": false}, {"data": [0.041666666666666664, 500, 1500, "Single Video Access [android]"], "isController": false}, {"data": [0.05333333333333334, 500, 1500, "Single Video Access [Chrome]"], "isController": false}, {"data": [0.0, 500, 1500, "LoginRequest"], "isController": false}, {"data": [0.06, 500, 1500, "Subcription"], "isController": false}, {"data": [0.4533333333333333, 500, 1500, "Access Playlist"], "isController": false}, {"data": [0.5633333333333334, 500, 1500, "Access Detail Movie"], "isController": false}, {"data": [0.07, 500, 1500, "History"], "isController": false}, {"data": [0.04833333333333333, 500, 1500, "Access Favorite Page"], "isController": false}, {"data": [0.045, 500, 1500, "Single Video Access [Firefox]"], "isController": false}, {"data": [0.055, 500, 1500, "Single Video Access [ios]"], "isController": false}, {"data": [0.051666666666666666, 500, 1500, "Get Continue Watching List"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3600, 2205, 61.25, 3782.793611111136, 54, 39704, 2295.2000000000016, 38797.399999999994, 39201.99, 73.16775740823543, 301.70003490076624, 18.88821370320312], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Access Home Page", 300, 0, 0.0, 1457.3433333333326, 199, 2568, 1982.9, 2016.0, 2065.59, 11.734334663224596, 230.9509578150669, 1.7532746127669563], "isController": false}, {"data": ["Single Video Access [android]", 300, 245, 81.66666666666667, 582.9933333333336, 60, 2883, 1892.5000000000002, 2227.0, 2639.7300000000014, 12.38390092879257, 16.79909216976264, 3.315112229102167], "isController": false}, {"data": ["Single Video Access [Chrome]", 300, 245, 81.66666666666667, 699.3266666666665, 99, 3341, 1663.2000000000016, 1912.8499999999997, 3264.1400000000035, 11.583906093134607, 15.701434172040312, 3.0896449532782455], "isController": false}, {"data": ["LoginRequest", 300, 245, 81.66666666666667, 36517.483333333344, 15506, 39704, 39207.7, 39272.95, 39376.97, 7.553820974442906, 10.356922958894623, 3.4601516272189348], "isController": false}, {"data": ["Subcription", 300, 245, 81.66666666666667, 1018.4366666666666, 165, 28983, 1316.8000000000006, 1750.95, 2819.170000000002, 9.86679822397632, 5.412285705476073, 2.467855821410952], "isController": false}, {"data": ["Access Playlist", 300, 0, 0.0, 1084.7733333333335, 61, 2096, 2001.8000000000002, 2020.9, 2049.99, 11.388656897729861, 221.83413133019513, 1.9685471395490093], "isController": false}, {"data": ["Access Detail Movie", 300, 0, 0.0, 895.6066666666671, 54, 2037, 1778.0000000000005, 1833.5, 1967.99, 11.481056257175661, 15.416270510428626, 2.8043376865671643], "isController": false}, {"data": ["History", 300, 245, 81.66666666666667, 688.2199999999996, 94, 2443, 1221.0, 1403.0, 2344.7300000000005, 10.294067185945167, 5.64665775229043, 2.6149343324297427], "isController": false}, {"data": ["Access Favorite Page", 300, 245, 81.66666666666667, 554.489999999999, 134, 2263, 1149.5000000000005, 1965.75, 2223.250000000001, 11.387360030366294, 6.256561076579996, 2.9371382140823687], "isController": false}, {"data": ["Single Video Access [Firefox]", 300, 245, 81.66666666666667, 600.923333333333, 61, 3141, 1837.7000000000005, 2267.4999999999995, 2934.8, 11.975091809037202, 16.244531686591888, 3.2056759440364044], "isController": false}, {"data": ["Single Video Access [ios]", 300, 245, 81.66666666666667, 541.2500000000005, 62, 3600, 1890.6000000000004, 2325.249999999999, 3135.4400000000005, 13.010104514506267, 17.64855404885294, 3.4319232729086258], "isController": false}, {"data": ["Get Continue Watching List", 300, 245, 81.66666666666667, 752.676666666667, 94, 3145, 1534.6000000000004, 1830.85, 3085.160000000006, 10.8038029386344, 5.783129411552866, 2.64946386127917], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["504\/Gateway Time-out", 245, 11.11111111111111, 6.805555555555555], "isController": false}, {"data": ["401\/Unauthorized", 1960, 88.88888888888889, 54.44444444444444], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3600, 2205, "401\/Unauthorized", 1960, "504\/Gateway Time-out", 245, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["Single Video Access [android]", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Chrome]", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["LoginRequest", 300, 245, "504\/Gateway Time-out", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Subcription", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["History", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Access Favorite Page", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Firefox]", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [ios]", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get Continue Watching List", 300, 245, "401\/Unauthorized", 245, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
