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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.7675, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.83, 500, 1500, "Access Home Page"], "isController": false}, {"data": [0.71, 500, 1500, "Single Video Access [android]"], "isController": false}, {"data": [0.59, 500, 1500, "Single Video Access [Chrome]"], "isController": false}, {"data": [0.0, 500, 1500, "LoginRequest"], "isController": false}, {"data": [0.98, 500, 1500, "Subcription"], "isController": false}, {"data": [1.0, 500, 1500, "Access Playlist"], "isController": false}, {"data": [0.91, 500, 1500, "Access Detail Movie"], "isController": false}, {"data": [0.98, 500, 1500, "History"], "isController": false}, {"data": [0.85, 500, 1500, "Access Favorite Page"], "isController": false}, {"data": [0.61, 500, 1500, "Single Video Access [Firefox]"], "isController": false}, {"data": [0.75, 500, 1500, "Single Video Access [ios]"], "isController": false}, {"data": [1.0, 500, 1500, "Get Continue Watching List"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 600, 0, 0.0, 985.4416666666676, 65, 7958, 1072.1, 7240.0, 7724.620000000001, 46.28915290850178, 247.54036136880882, 22.6843971802191], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Access Home Page", 50, 0, 0.0, 426.02, 299, 609, 565.4, 594.65, 609.0, 48.07692307692308, 946.1857722355769, 7.183368389423077], "isController": false}, {"data": ["Single Video Access [android]", 50, 0, 0.0, 510.48, 192, 783, 693.5, 705.4499999999999, 783.0, 19.786307874950534, 97.77218539770479, 11.41461280668777], "isController": false}, {"data": ["Single Video Access [Chrome]", 50, 0, 0.0, 625.5799999999998, 187, 1804, 1057.6, 1188.8499999999997, 1804.0, 17.68033946251768, 87.26214418316832, 10.18242519006365], "isController": false}, {"data": ["LoginRequest", 50, 0, 0.0, 7308.04, 6787, 7958, 7762.0, 7907.5, 7958.0, 6.279829188646069, 8.9672771838106, 2.8773147057900026], "isController": false}, {"data": ["Subcription", 50, 0, 0.0, 314.70000000000016, 152, 1210, 434.09999999999997, 509.7499999999993, 1210.0, 27.085590465872155, 17.238497088299024, 15.149415120530877], "isController": false}, {"data": ["Access Playlist", 50, 0, 0.0, 147.62, 65, 491, 257.7, 264.04999999999995, 491.0, 22.104332449160037, 430.5379987290009, 3.820768401856764], "isController": false}, {"data": ["Access Detail Movie", 50, 0, 0.0, 294.13999999999993, 72, 1676, 538.7, 559.6999999999999, 1676.0, 20.824656393169512, 27.77976624323199, 11.525552504164931], "isController": false}, {"data": ["History", 50, 0, 0.0, 350.96, 171, 1100, 411.6, 516.9499999999995, 1100.0, 21.570319240724764, 13.550120658973253, 12.148892498921484], "isController": false}, {"data": ["Access Favorite Page", 50, 0, 0.0, 438.76, 142, 1288, 601.6999999999999, 727.9499999999994, 1288.0, 32.29974160206718, 21.702019743217054, 18.318117126937985], "isController": false}, {"data": ["Single Video Access [Firefox]", 50, 0, 0.0, 627.08, 200, 1156, 914.8, 1002.9499999999995, 1156.0, 18.005041411595247, 88.97022416276558, 10.387009925279077], "isController": false}, {"data": ["Single Video Access [ios]", 50, 0, 0.0, 472.56, 161, 1034, 589.6, 661.45, 1034.0, 24.142926122646067, 119.30000603573153, 13.833613743360694], "isController": false}, {"data": ["Get Continue Watching List", 50, 0, 0.0, 309.3599999999999, 132, 486, 456.59999999999997, 484.45, 486.0, 19.76284584980237, 10.986907114624508, 10.957185647233203], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 600, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
