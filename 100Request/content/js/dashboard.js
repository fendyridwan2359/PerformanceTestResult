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

    var data = {"OkPercent": 85.71428571428571, "KoPercent": 14.285714285714286};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.7135714285714285, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "Play Video"], "isController": false}, {"data": [1.0, 500, 1500, "Search Video"], "isController": false}, {"data": [0.0, 500, 1500, "Login into Web"], "isController": false}, {"data": [1.0, 500, 1500, "Access Live TV Page"], "isController": false}, {"data": [1.0, 500, 1500, "Access Animation Page"], "isController": false}, {"data": [1.0, 500, 1500, "Access Movies Page"], "isController": false}, {"data": [0.995, 500, 1500, "Access Series Page"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 700, 100, 14.285714285714286, 88765.5942857143, 24, 605798, 605429.9, 605573.95, 605704.59, 1.1189562376215465, 5.915841078442029, 0.2713094225706261], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Play Video", 100, 100, 100.0, 605515.7799999998, 605333, 605798, 605659.9, 605718.7, 605797.41, 0.16229445407391538, 0.5412456647093956, 0.0], "isController": false}, {"data": ["Search Video", 100, 0, 0.0, 57.71, 45, 105, 77.60000000000002, 98.34999999999985, 104.99, 9.128251939753538, 58.61157861706983, 2.7277784116841626], "isController": false}, {"data": ["Login into Web", 100, 0, 0.0, 15617.850000000004, 9068, 20006, 19224.3, 19492.649999999998, 20001.67, 4.9862877088007975, 7.839768760907504, 2.605140550984792], "isController": false}, {"data": ["Access Live TV Page", 100, 0, 0.0, 34.5, 25, 64, 42.900000000000006, 50.0, 63.95999999999998, 9.205560158335635, 59.1010446872411, 1.995736674951671], "isController": false}, {"data": ["Access Animation Page", 100, 0, 0.0, 33.85000000000002, 26, 74, 42.0, 44.0, 73.8099999999999, 9.213193292795282, 59.15005052860697, 2.0423778100239542], "isController": false}, {"data": ["Access Movies Page", 100, 0, 0.0, 40.82000000000001, 24, 257, 50.70000000000002, 77.34999999999985, 256.4099999999997, 9.184423218221896, 58.964355827516535, 2.00909257898604], "isController": false}, {"data": ["Access Series Page", 100, 0, 0.0, 58.65, 27, 535, 60.70000000000002, 335.0499999999998, 534.1899999999996, 9.201324990798675, 59.072865867684946, 2.0127898417372103], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com:80 [f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/52.221.158.128, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/54.169.47.176, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/13.229.178.69, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/3.0.142.132, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/13.228.182.0, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/52.221.31.124, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/54.169.155.73, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/18.138.148.89] failed: Operation timed out", 100, 100.0, 14.285714285714286], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 700, 100, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com:80 [f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/52.221.158.128, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/54.169.47.176, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/13.229.178.69, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/3.0.142.132, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/13.228.182.0, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/52.221.31.124, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/54.169.155.73, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/18.138.148.89] failed: Operation timed out", 100, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Play Video", 100, 100, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException\/Non HTTP response message: Connect to f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com:80 [f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/52.221.158.128, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/54.169.47.176, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/13.229.178.69, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/3.0.142.132, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/13.228.182.0, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/52.221.31.124, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/54.169.155.73, f5a6d605abe50dff9714350b56a2b8b5.egress.mediapackage-vod.ap-southeast-1.amazonaws.com\\\/18.138.148.89] failed: Operation timed out", 100, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
