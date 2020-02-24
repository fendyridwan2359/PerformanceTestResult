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

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.62, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.505, 500, 1500, "Access Home Page"], "isController": false}, {"data": [0.595, 500, 1500, "Single Video Access [android]"], "isController": false}, {"data": [0.585, 500, 1500, "Single Video Access [Chrome]"], "isController": false}, {"data": [0.0, 500, 1500, "LoginRequest"], "isController": false}, {"data": [0.775, 500, 1500, "Subcription"], "isController": false}, {"data": [0.8, 500, 1500, "Access Playlist"], "isController": false}, {"data": [0.8, 500, 1500, "Access Detail Movie"], "isController": false}, {"data": [0.59, 500, 1500, "History"], "isController": false}, {"data": [0.79, 500, 1500, "Access Favorite Page"], "isController": false}, {"data": [0.595, 500, 1500, "Single Video Access [Firefox]"], "isController": false}, {"data": [0.7, 500, 1500, "Single Video Access [ios]"], "isController": false}, {"data": [0.705, 500, 1500, "Get Continue Watching List"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1200, 0, 0.0, 1816.9316666666657, 63, 16959, 1772.3000000000006, 14991.5, 16290.96, 50.0709338229158, 266.8891199381415, 24.542092182675457], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Access Home Page", 100, 0, 0.0, 1042.24, 211, 1722, 1592.5, 1700.399999999999, 1721.96, 10.084711577248891, 198.4836690701896, 1.5067977258975394], "isController": false}, {"data": ["Single Video Access [android]", 100, 0, 0.0, 722.1300000000003, 163, 1788, 1524.3000000000004, 1704.8499999999988, 1787.78, 11.748120300751879, 58.05223507988722, 6.77891781455592], "isController": false}, {"data": ["Single Video Access [Chrome]", 100, 0, 0.0, 734.6400000000001, 243, 2229, 1209.0, 1389.8499999999997, 2224.439999999998, 11.523392486748099, 56.87424377736805, 6.637991724763769], "isController": false}, {"data": ["LoginRequest", 100, 0, 0.0, 14555.219999999992, 7814, 16959, 16301.4, 16439.0, 16958.99, 5.89622641509434, 8.418878519310141, 2.7010359854068393], "isController": false}, {"data": ["Subcription", 100, 0, 0.0, 546.7599999999998, 159, 1833, 1013.8000000000002, 1540.199999999997, 1832.95, 10.984182776801406, 6.429179481546574, 6.145028112642795], "isController": false}, {"data": ["Access Playlist", 100, 0, 0.0, 485.13, 71, 1666, 955.9, 1003.8499999999997, 1662.029999999998, 13.81406271584473, 269.0774364553115, 2.387782324906755], "isController": false}, {"data": ["Access Detail Movie", 100, 0, 0.0, 441.35, 63, 1357, 905.3000000000001, 1071.5999999999992, 1355.3199999999993, 12.444001991040318, 16.600104218516677, 6.888800203770533], "isController": false}, {"data": ["History", 100, 0, 0.0, 818.6700000000003, 140, 2284, 1814.7000000000007, 2002.7999999999993, 2283.95, 10.625863351397301, 6.175556695622144, 5.986075968281798], "isController": false}, {"data": ["Access Favorite Page", 100, 0, 0.0, 490.4699999999998, 155, 2092, 825.8000000000002, 1222.9, 2083.7599999999957, 9.797198001371608, 5.931992903154697, 5.557517971735083], "isController": false}, {"data": ["Single Video Access [Firefox]", 100, 0, 0.0, 725.52, 223, 2551, 1404.1000000000008, 1591.1499999999992, 2543.379999999996, 11.622501162250117, 57.431499883775, 6.7064328727917255], "isController": false}, {"data": ["Single Video Access [ios]", 100, 0, 0.0, 596.2800000000002, 155, 1722, 1217.9000000000003, 1606.7999999999995, 1721.85, 12.091898428053204, 59.75098246674728, 6.9300512016324065], "isController": false}, {"data": ["Get Continue Watching List", 100, 0, 0.0, 644.7700000000003, 125, 1835, 1515.1000000000006, 1593.35, 1833.5099999999993, 12.78772378516624, 6.5080023177749355, 7.091567095588235], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1200, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
