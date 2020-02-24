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

    var data = {"OkPercent": 33.25, "KoPercent": 66.75};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.049166666666666664, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.118, 500, 1500, "Access Home Page"], "isController": false}, {"data": [0.02, 500, 1500, "Single Video Access [android]"], "isController": false}, {"data": [0.019, 500, 1500, "Single Video Access [Chrome]"], "isController": false}, {"data": [0.0, 500, 1500, "LoginRequest"], "isController": false}, {"data": [0.046, 500, 1500, "Subcription"], "isController": false}, {"data": [0.145, 500, 1500, "Access Playlist"], "isController": false}, {"data": [0.097, 500, 1500, "Access Detail Movie"], "isController": false}, {"data": [0.039, 500, 1500, "History"], "isController": false}, {"data": [0.028, 500, 1500, "Access Favorite Page"], "isController": false}, {"data": [0.015, 500, 1500, "Single Video Access [Firefox]"], "isController": false}, {"data": [0.021, 500, 1500, "Single Video Access [ios]"], "isController": false}, {"data": [0.042, 500, 1500, "Get Continue Watching List"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 6000, 4005, 66.75, 5052.765333333312, 49, 36061, 5094.900000000001, 34788.9, 35840.96, 86.98047288383758, 349.36741808885785, 20.641850767783883], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Access Home Page", 500, 0, 0.0, 3722.313999999999, 232, 5560, 5120.400000000001, 5303.65, 5539.96, 16.735841478109517, 329.38881752912033, 2.500570064600348], "isController": false}, {"data": ["Single Video Access [android]", 500, 445, 89.0, 1456.0720000000022, 55, 10225, 2919.2000000000003, 3066.85, 5516.67, 10.18122581958868, 10.5336911079719, 2.4426789032274487], "isController": false}, {"data": ["Single Video Access [Chrome]", 500, 445, 89.0, 2678.3000000000015, 148, 11934, 3389.9, 3472.95, 4097.860000000001, 9.947873144721658, 10.28584824892563, 2.3769782278361387], "isController": false}, {"data": ["LoginRequest", 500, 445, 89.0, 33702.54199999997, 11054, 36061, 35873.6, 36029.0, 36046.99, 13.864241348713398, 18.938689075324422, 6.350418266831189], "isController": false}, {"data": ["Subcription", 500, 445, 89.0, 2793.911999999999, 141, 4767, 4183.0, 4217.85, 4361.860000000001, 14.48225923244026, 7.962696868211442, 3.220011540550326], "isController": false}, {"data": ["Access Playlist", 500, 0, 0.0, 2715.3759999999993, 60, 5830, 3981.2000000000003, 4606.5, 5285.920000000002, 9.9304865938431, 193.4311382820258, 1.7165001241310824], "isController": false}, {"data": ["Access Detail Movie", 500, 0, 0.0, 2864.876, 51, 4133, 3664.9, 3805.75, 3981.91, 9.960357776051316, 13.382188110071914, 2.156242374101078], "isController": false}, {"data": ["History", 500, 445, 89.0, 2257.670000000002, 163, 20060, 3787.9, 4111.95, 4768.190000000003, 9.500465522810618, 5.223586033840658, 2.149461768939178], "isController": false}, {"data": ["Access Favorite Page", 500, 445, 89.0, 2937.5539999999974, 346, 30978, 4265.9, 4364.9, 4481.84, 15.691197238349286, 8.635828151969246, 3.611396467519222], "isController": false}, {"data": ["Single Video Access [Firefox]", 500, 445, 89.0, 2319.8299999999995, 181, 20110, 3304.9, 3405.9, 5695.140000000001, 10.121252606222546, 10.471641673498512, 2.428290134562053], "isController": false}, {"data": ["Single Video Access [ios]", 500, 445, 89.0, 803.2500000000007, 49, 20110, 2281.500000000001, 2773.45, 5500.040000000001, 10.400416016640666, 10.76046948127925, 2.4546403731149247], "isController": false}, {"data": ["Get Continue Watching List", 500, 445, 89.0, 2381.4879999999976, 300, 5124, 3937.7000000000016, 4132.85, 4891.240000000002, 9.785884839707206, 5.302726347516343, 2.1280285784534385], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["504\/Gateway Time-out", 445, 11.11111111111111, 7.416666666666667], "isController": false}, {"data": ["401\/Unauthorized", 3560, 88.88888888888889, 59.333333333333336], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 6000, 4005, "401\/Unauthorized", 3560, "504\/Gateway Time-out", 445, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["Single Video Access [android]", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Chrome]", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["LoginRequest", 500, 445, "504\/Gateway Time-out", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Subcription", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["History", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Access Favorite Page", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Firefox]", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [ios]", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get Continue Watching List", 500, 445, "401\/Unauthorized", 445, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
