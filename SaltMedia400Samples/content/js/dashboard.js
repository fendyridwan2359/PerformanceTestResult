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

    var data = {"OkPercent": 36.25, "KoPercent": 63.75};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.09510416666666667, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.15875, 500, 1500, "Access Home Page"], "isController": false}, {"data": [0.03375, 500, 1500, "Single Video Access [android]"], "isController": false}, {"data": [0.03875, 500, 1500, "Single Video Access [Chrome]"], "isController": false}, {"data": [0.0, 500, 1500, "LoginRequest"], "isController": false}, {"data": [0.0525, 500, 1500, "Subcription"], "isController": false}, {"data": [0.355, 500, 1500, "Access Playlist"], "isController": false}, {"data": [0.2925, 500, 1500, "Access Detail Movie"], "isController": false}, {"data": [0.04875, 500, 1500, "History"], "isController": false}, {"data": [0.0425, 500, 1500, "Access Favorite Page"], "isController": false}, {"data": [0.03125, 500, 1500, "Single Video Access [Firefox]"], "isController": false}, {"data": [0.03375, 500, 1500, "Single Video Access [ios]"], "isController": false}, {"data": [0.05375, 500, 1500, "Get Continue Watching List"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 4800, 3060, 63.75, 3847.066458333347, 44, 34568, 4404.300000000069, 33588.8, 34101.979999999996, 85.41989215738616, 348.07344358950405, 21.2425153322033], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Access Home Page", 400, 0, 0.0, 3122.567500000001, 199, 5820, 4814.0, 5125.0, 5523.140000000001, 13.513970066556302, 265.9771022669685, 2.0191771681475728], "isController": false}, {"data": ["Single Video Access [android]", 400, 340, 85.0, 529.6475, 60, 4543, 1602.1000000000004, 2048.5499999999993, 3950.720000000001, 10.655301012253597, 12.894318976425147, 2.7179342035162493], "isController": false}, {"data": ["Single Video Access [Chrome]", 400, 340, 85.0, 1271.1025000000002, 53, 7503, 2128.000000000002, 3309.0, 7156.880000000032, 10.23122570083896, 12.372889010384695, 2.599770436873338], "isController": false}, {"data": ["LoginRequest", 400, 340, 85.0, 31915.20999999999, 9326, 34568, 34126.9, 34370.95, 34545.23, 11.544677903486493, 15.802341585372892, 5.2878063398320245], "isController": false}, {"data": ["Subcription", 400, 340, 85.0, 1150.5600000000002, 137, 4011, 1859.2000000000025, 2892.65, 3823.0, 9.608455440787894, 5.276205560893586, 2.2820081671871244], "isController": false}, {"data": ["Access Playlist", 400, 0, 0.0, 1711.045000000001, 64, 4191, 4000.8, 4113.65, 4182.95, 10.186670741334964, 198.4212252018234, 1.7607819543127816], "isController": false}, {"data": ["Access Detail Movie", 400, 0, 0.0, 1886.5550000000012, 44, 4074, 3569.9000000000005, 3828.95, 4049.0, 10.231487402481136, 13.742066600588311, 2.370028136590357], "isController": false}, {"data": ["History", 400, 340, 85.0, 619.6500000000001, 109, 3710, 1269.8000000000002, 1894.2499999999993, 3232.86, 9.732123306002286, 5.3441141943018415, 2.349395391839615], "isController": false}, {"data": ["Access Favorite Page", 400, 340, 85.0, 2223.774999999998, 450, 31215, 2875.7000000000003, 3061.65, 3801.91, 9.647620655555825, 5.304778134873737, 2.366681942066038], "isController": false}, {"data": ["Single Video Access [Firefox]", 400, 340, 85.0, 656.2750000000001, 55, 6835, 1828.100000000001, 2277.0999999999995, 4536.240000000005, 10.424811050299713, 12.61554844279385, 2.6591412561897316], "isController": false}, {"data": ["Single Video Access [ios]", 400, 340, 85.0, 448.35000000000025, 58, 4484, 1566.8000000000004, 2006.85, 3834.6600000000003, 11.137407768341918, 13.478221147153, 2.7974035918140054], "isController": false}, {"data": ["Get Continue Watching List", 400, 340, 85.0, 630.0600000000004, 90, 3796, 1267.0, 2038.9999999999984, 3343.8900000000012, 9.825595676737903, 5.288933922869074, 2.28560243183493], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["504\/Gateway Time-out", 340, 11.11111111111111, 7.083333333333333], "isController": false}, {"data": ["401\/Unauthorized", 2720, 88.88888888888889, 56.666666666666664], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 4800, 3060, "401\/Unauthorized", 2720, "504\/Gateway Time-out", 340, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["Single Video Access [android]", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Chrome]", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["LoginRequest", 400, 340, "504\/Gateway Time-out", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Subcription", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["History", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Access Favorite Page", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [Firefox]", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Single Video Access [ios]", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Get Continue Watching List", 400, 340, "401\/Unauthorized", 340, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
