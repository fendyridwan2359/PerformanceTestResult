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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 143.0, "minX": 0.0, "maxY": 4286.0, "series": [{"data": [[0.0, 143.0], [0.1, 143.0], [0.2, 183.0], [0.3, 183.0], [0.4, 211.0], [0.5, 211.0], [0.6, 211.0], [0.7, 211.0], [0.8, 213.0], [0.9, 213.0], [1.0, 215.0], [1.1, 215.0], [1.2, 226.0], [1.3, 226.0], [1.4, 227.0], [1.5, 227.0], [1.6, 229.0], [1.7, 229.0], [1.8, 229.0], [1.9, 229.0], [2.0, 234.0], [2.1, 234.0], [2.2, 235.0], [2.3, 235.0], [2.4, 235.0], [2.5, 235.0], [2.6, 236.0], [2.7, 236.0], [2.8, 236.0], [2.9, 240.0], [3.0, 240.0], [3.1, 241.0], [3.2, 241.0], [3.3, 241.0], [3.4, 241.0], [3.5, 243.0], [3.6, 243.0], [3.7, 245.0], [3.8, 245.0], [3.9, 245.0], [4.0, 245.0], [4.1, 246.0], [4.2, 246.0], [4.3, 246.0], [4.4, 246.0], [4.5, 246.0], [4.6, 246.0], [4.7, 247.0], [4.8, 247.0], [4.9, 247.0], [5.0, 247.0], [5.1, 247.0], [5.2, 248.0], [5.3, 248.0], [5.4, 248.0], [5.5, 248.0], [5.6, 248.0], [5.7, 250.0], [5.8, 250.0], [5.9, 250.0], [6.0, 250.0], [6.1, 251.0], [6.2, 251.0], [6.3, 251.0], [6.4, 251.0], [6.5, 252.0], [6.6, 252.0], [6.7, 252.0], [6.8, 252.0], [6.9, 252.0], [7.0, 252.0], [7.1, 253.0], [7.2, 253.0], [7.3, 260.0], [7.4, 260.0], [7.5, 260.0], [7.6, 260.0], [7.7, 260.0], [7.8, 260.0], [7.9, 263.0], [8.0, 264.0], [8.1, 264.0], [8.2, 266.0], [8.3, 266.0], [8.4, 270.0], [8.5, 270.0], [8.6, 272.0], [8.7, 272.0], [8.8, 273.0], [8.9, 273.0], [9.0, 274.0], [9.1, 274.0], [9.2, 275.0], [9.3, 275.0], [9.4, 277.0], [9.5, 277.0], [9.6, 277.0], [9.7, 277.0], [9.8, 277.0], [9.9, 277.0], [10.0, 278.0], [10.1, 278.0], [10.2, 278.0], [10.3, 278.0], [10.4, 279.0], [10.5, 279.0], [10.6, 279.0], [10.7, 279.0], [10.8, 280.0], [10.9, 280.0], [11.0, 280.0], [11.1, 280.0], [11.2, 281.0], [11.3, 281.0], [11.4, 282.0], [11.5, 282.0], [11.6, 282.0], [11.7, 282.0], [11.8, 283.0], [11.9, 283.0], [12.0, 283.0], [12.1, 283.0], [12.2, 283.0], [12.3, 283.0], [12.4, 283.0], [12.5, 283.0], [12.6, 283.0], [12.7, 283.0], [12.8, 284.0], [12.9, 284.0], [13.0, 286.0], [13.1, 286.0], [13.2, 287.0], [13.3, 287.0], [13.4, 287.0], [13.5, 287.0], [13.6, 293.0], [13.7, 293.0], [13.8, 293.0], [13.9, 293.0], [14.0, 293.0], [14.1, 293.0], [14.2, 301.0], [14.3, 301.0], [14.4, 302.0], [14.5, 302.0], [14.6, 303.0], [14.7, 303.0], [14.8, 303.0], [14.9, 303.0], [15.0, 304.0], [15.1, 304.0], [15.2, 305.0], [15.3, 305.0], [15.4, 307.0], [15.5, 307.0], [15.6, 309.0], [15.7, 309.0], [15.8, 314.0], [15.9, 314.0], [16.0, 315.0], [16.1, 315.0], [16.2, 317.0], [16.3, 317.0], [16.4, 318.0], [16.5, 318.0], [16.6, 320.0], [16.7, 320.0], [16.8, 322.0], [16.9, 322.0], [17.0, 324.0], [17.1, 324.0], [17.2, 325.0], [17.3, 325.0], [17.4, 327.0], [17.5, 327.0], [17.6, 328.0], [17.7, 328.0], [17.8, 328.0], [17.9, 328.0], [18.0, 335.0], [18.1, 335.0], [18.2, 340.0], [18.3, 340.0], [18.4, 340.0], [18.5, 340.0], [18.6, 341.0], [18.7, 341.0], [18.8, 343.0], [18.9, 343.0], [19.0, 343.0], [19.1, 343.0], [19.2, 343.0], [19.3, 343.0], [19.4, 347.0], [19.5, 347.0], [19.6, 348.0], [19.7, 348.0], [19.8, 352.0], [19.9, 352.0], [20.0, 354.0], [20.1, 354.0], [20.2, 356.0], [20.3, 356.0], [20.4, 357.0], [20.5, 357.0], [20.6, 359.0], [20.7, 359.0], [20.8, 366.0], [20.9, 366.0], [21.0, 369.0], [21.1, 369.0], [21.2, 371.0], [21.3, 371.0], [21.4, 376.0], [21.5, 376.0], [21.6, 378.0], [21.7, 378.0], [21.8, 380.0], [21.9, 380.0], [22.0, 389.0], [22.1, 389.0], [22.2, 389.0], [22.3, 389.0], [22.4, 390.0], [22.5, 390.0], [22.6, 390.0], [22.7, 390.0], [22.8, 395.0], [22.9, 395.0], [23.0, 398.0], [23.1, 398.0], [23.2, 399.0], [23.3, 399.0], [23.4, 399.0], [23.5, 399.0], [23.6, 400.0], [23.7, 400.0], [23.8, 400.0], [23.9, 400.0], [24.0, 400.0], [24.1, 400.0], [24.2, 401.0], [24.3, 401.0], [24.4, 404.0], [24.5, 404.0], [24.6, 404.0], [24.7, 404.0], [24.8, 406.0], [24.9, 406.0], [25.0, 411.0], [25.1, 411.0], [25.2, 416.0], [25.3, 416.0], [25.4, 425.0], [25.5, 425.0], [25.6, 432.0], [25.7, 432.0], [25.8, 434.0], [25.9, 434.0], [26.0, 434.0], [26.1, 434.0], [26.2, 435.0], [26.3, 435.0], [26.4, 436.0], [26.5, 436.0], [26.6, 437.0], [26.7, 437.0], [26.8, 442.0], [26.9, 442.0], [27.0, 445.0], [27.1, 445.0], [27.2, 446.0], [27.3, 446.0], [27.4, 447.0], [27.5, 447.0], [27.6, 452.0], [27.7, 452.0], [27.8, 456.0], [27.9, 456.0], [28.0, 459.0], [28.1, 459.0], [28.2, 460.0], [28.3, 460.0], [28.4, 461.0], [28.5, 461.0], [28.6, 463.0], [28.7, 463.0], [28.8, 469.0], [28.9, 469.0], [29.0, 474.0], [29.1, 474.0], [29.2, 476.0], [29.3, 476.0], [29.4, 478.0], [29.5, 478.0], [29.6, 478.0], [29.7, 478.0], [29.8, 479.0], [29.9, 479.0], [30.0, 481.0], [30.1, 481.0], [30.2, 484.0], [30.3, 484.0], [30.4, 490.0], [30.5, 490.0], [30.6, 494.0], [30.7, 494.0], [30.8, 498.0], [30.9, 498.0], [31.0, 500.0], [31.1, 500.0], [31.2, 500.0], [31.3, 500.0], [31.4, 508.0], [31.5, 508.0], [31.6, 509.0], [31.7, 509.0], [31.8, 516.0], [31.9, 516.0], [32.0, 519.0], [32.1, 519.0], [32.2, 519.0], [32.3, 519.0], [32.4, 520.0], [32.5, 520.0], [32.6, 521.0], [32.7, 521.0], [32.8, 524.0], [32.9, 524.0], [33.0, 530.0], [33.1, 530.0], [33.2, 531.0], [33.3, 531.0], [33.4, 574.0], [33.5, 574.0], [33.6, 595.0], [33.7, 595.0], [33.8, 601.0], [33.9, 601.0], [34.0, 627.0], [34.1, 627.0], [34.2, 632.0], [34.3, 632.0], [34.4, 642.0], [34.5, 642.0], [34.6, 650.0], [34.7, 650.0], [34.8, 651.0], [34.9, 651.0], [35.0, 652.0], [35.1, 652.0], [35.2, 657.0], [35.3, 657.0], [35.4, 658.0], [35.5, 658.0], [35.6, 693.0], [35.7, 693.0], [35.8, 696.0], [35.9, 696.0], [36.0, 696.0], [36.1, 696.0], [36.2, 696.0], [36.3, 696.0], [36.4, 716.0], [36.5, 716.0], [36.6, 768.0], [36.7, 768.0], [36.8, 782.0], [36.9, 782.0], [37.0, 783.0], [37.1, 783.0], [37.2, 784.0], [37.3, 784.0], [37.4, 784.0], [37.5, 793.0], [37.6, 793.0], [37.7, 802.0], [37.8, 802.0], [37.9, 805.0], [38.0, 805.0], [38.1, 811.0], [38.2, 811.0], [38.3, 812.0], [38.4, 812.0], [38.5, 817.0], [38.6, 817.0], [38.7, 824.0], [38.8, 824.0], [38.9, 829.0], [39.0, 829.0], [39.1, 834.0], [39.2, 834.0], [39.3, 836.0], [39.4, 836.0], [39.5, 837.0], [39.6, 837.0], [39.7, 842.0], [39.8, 842.0], [39.9, 862.0], [40.0, 862.0], [40.1, 869.0], [40.2, 869.0], [40.3, 876.0], [40.4, 876.0], [40.5, 879.0], [40.6, 879.0], [40.7, 880.0], [40.8, 880.0], [40.9, 1102.0], [41.0, 1102.0], [41.1, 1139.0], [41.2, 1139.0], [41.3, 1147.0], [41.4, 1147.0], [41.5, 1177.0], [41.6, 1177.0], [41.7, 1185.0], [41.8, 1185.0], [41.9, 1185.0], [42.0, 1185.0], [42.1, 1187.0], [42.2, 1187.0], [42.3, 1188.0], [42.4, 1188.0], [42.5, 1189.0], [42.6, 1189.0], [42.7, 1191.0], [42.8, 1191.0], [42.9, 1195.0], [43.0, 1195.0], [43.1, 1207.0], [43.2, 1207.0], [43.3, 1209.0], [43.4, 1209.0], [43.5, 1216.0], [43.6, 1216.0], [43.7, 1217.0], [43.8, 1217.0], [43.9, 1217.0], [44.0, 1217.0], [44.1, 1224.0], [44.2, 1224.0], [44.3, 1225.0], [44.4, 1225.0], [44.5, 1227.0], [44.6, 1227.0], [44.7, 1228.0], [44.8, 1228.0], [44.9, 1228.0], [45.0, 1228.0], [45.1, 1228.0], [45.2, 1228.0], [45.3, 1232.0], [45.4, 1232.0], [45.5, 1233.0], [45.6, 1233.0], [45.7, 1235.0], [45.8, 1235.0], [45.9, 1239.0], [46.0, 1239.0], [46.1, 1239.0], [46.2, 1239.0], [46.3, 1240.0], [46.4, 1240.0], [46.5, 1241.0], [46.6, 1241.0], [46.7, 1243.0], [46.8, 1243.0], [46.9, 1253.0], [47.0, 1253.0], [47.1, 1256.0], [47.2, 1256.0], [47.3, 1258.0], [47.4, 1258.0], [47.5, 1258.0], [47.6, 1258.0], [47.7, 1266.0], [47.8, 1266.0], [47.9, 1266.0], [48.0, 1266.0], [48.1, 1267.0], [48.2, 1267.0], [48.3, 1277.0], [48.4, 1277.0], [48.5, 1278.0], [48.6, 1278.0], [48.7, 1279.0], [48.8, 1279.0], [48.9, 1279.0], [49.0, 1279.0], [49.1, 1280.0], [49.2, 1280.0], [49.3, 1281.0], [49.4, 1281.0], [49.5, 1281.0], [49.6, 1281.0], [49.7, 1282.0], [49.8, 1282.0], [49.9, 1285.0], [50.0, 1285.0], [50.1, 1285.0], [50.2, 1285.0], [50.3, 1286.0], [50.4, 1286.0], [50.5, 1286.0], [50.6, 1286.0], [50.7, 1287.0], [50.8, 1287.0], [50.9, 1289.0], [51.0, 1289.0], [51.1, 1289.0], [51.2, 1289.0], [51.3, 1293.0], [51.4, 1293.0], [51.5, 1293.0], [51.6, 1293.0], [51.7, 1294.0], [51.8, 1294.0], [51.9, 1297.0], [52.0, 1297.0], [52.1, 1299.0], [52.2, 1299.0], [52.3, 1300.0], [52.4, 1300.0], [52.5, 1300.0], [52.6, 1300.0], [52.7, 1301.0], [52.8, 1301.0], [52.9, 1302.0], [53.0, 1302.0], [53.1, 1303.0], [53.2, 1303.0], [53.3, 1306.0], [53.4, 1306.0], [53.5, 1306.0], [53.6, 1306.0], [53.7, 1306.0], [53.8, 1306.0], [53.9, 1307.0], [54.0, 1307.0], [54.1, 1307.0], [54.2, 1307.0], [54.3, 1307.0], [54.4, 1307.0], [54.5, 1307.0], [54.6, 1307.0], [54.7, 1308.0], [54.8, 1308.0], [54.9, 1309.0], [55.0, 1309.0], [55.1, 1310.0], [55.2, 1310.0], [55.3, 1312.0], [55.4, 1312.0], [55.5, 1312.0], [55.6, 1312.0], [55.7, 1313.0], [55.8, 1313.0], [55.9, 1315.0], [56.0, 1315.0], [56.1, 1315.0], [56.2, 1315.0], [56.3, 1316.0], [56.4, 1316.0], [56.5, 1316.0], [56.6, 1316.0], [56.7, 1317.0], [56.8, 1317.0], [56.9, 1318.0], [57.0, 1318.0], [57.1, 1318.0], [57.2, 1318.0], [57.3, 1319.0], [57.4, 1319.0], [57.5, 1320.0], [57.6, 1320.0], [57.7, 1321.0], [57.8, 1321.0], [57.9, 1322.0], [58.0, 1322.0], [58.1, 1322.0], [58.2, 1322.0], [58.3, 1324.0], [58.4, 1324.0], [58.5, 1324.0], [58.6, 1324.0], [58.7, 1325.0], [58.8, 1325.0], [58.9, 1326.0], [59.0, 1326.0], [59.1, 1327.0], [59.2, 1327.0], [59.3, 1329.0], [59.4, 1329.0], [59.5, 1329.0], [59.6, 1329.0], [59.7, 1329.0], [59.8, 1329.0], [59.9, 1334.0], [60.0, 1334.0], [60.1, 1334.0], [60.2, 1334.0], [60.3, 1337.0], [60.4, 1337.0], [60.5, 1340.0], [60.6, 1340.0], [60.7, 1344.0], [60.8, 1344.0], [60.9, 1347.0], [61.0, 1347.0], [61.1, 1349.0], [61.2, 1349.0], [61.3, 1357.0], [61.4, 1357.0], [61.5, 1359.0], [61.6, 1359.0], [61.7, 1359.0], [61.8, 1359.0], [61.9, 1360.0], [62.0, 1360.0], [62.1, 1360.0], [62.2, 1360.0], [62.3, 1367.0], [62.4, 1367.0], [62.5, 1367.0], [62.6, 1367.0], [62.7, 1368.0], [62.8, 1368.0], [62.9, 1369.0], [63.0, 1369.0], [63.1, 1370.0], [63.2, 1370.0], [63.3, 1372.0], [63.4, 1372.0], [63.5, 1373.0], [63.6, 1373.0], [63.7, 1375.0], [63.8, 1375.0], [63.9, 1379.0], [64.0, 1379.0], [64.1, 1379.0], [64.2, 1379.0], [64.3, 1379.0], [64.4, 1379.0], [64.5, 1381.0], [64.6, 1381.0], [64.7, 1381.0], [64.8, 1381.0], [64.9, 1386.0], [65.0, 1386.0], [65.1, 1387.0], [65.2, 1387.0], [65.3, 1390.0], [65.4, 1390.0], [65.5, 1392.0], [65.6, 1392.0], [65.7, 1392.0], [65.8, 1392.0], [65.9, 1393.0], [66.0, 1393.0], [66.1, 1396.0], [66.2, 1396.0], [66.3, 1401.0], [66.4, 1401.0], [66.5, 1405.0], [66.6, 1405.0], [66.7, 1406.0], [66.8, 1406.0], [66.9, 1408.0], [67.0, 1408.0], [67.1, 1414.0], [67.2, 1414.0], [67.3, 1415.0], [67.4, 1415.0], [67.5, 1432.0], [67.6, 1432.0], [67.7, 1433.0], [67.8, 1433.0], [67.9, 1435.0], [68.0, 1435.0], [68.1, 1436.0], [68.2, 1436.0], [68.3, 1437.0], [68.4, 1437.0], [68.5, 1437.0], [68.6, 1437.0], [68.7, 1438.0], [68.8, 1438.0], [68.9, 1440.0], [69.0, 1440.0], [69.1, 1441.0], [69.2, 1441.0], [69.3, 1441.0], [69.4, 1441.0], [69.5, 1442.0], [69.6, 1442.0], [69.7, 1442.0], [69.8, 1442.0], [69.9, 1442.0], [70.0, 1442.0], [70.1, 1443.0], [70.2, 1443.0], [70.3, 1444.0], [70.4, 1444.0], [70.5, 1444.0], [70.6, 1444.0], [70.7, 1445.0], [70.8, 1445.0], [70.9, 1449.0], [71.0, 1449.0], [71.1, 1451.0], [71.2, 1451.0], [71.3, 1452.0], [71.4, 1452.0], [71.5, 1454.0], [71.6, 1454.0], [71.7, 1454.0], [71.8, 1454.0], [71.9, 1454.0], [72.0, 1454.0], [72.1, 1454.0], [72.2, 1454.0], [72.3, 1455.0], [72.4, 1455.0], [72.5, 1455.0], [72.6, 1455.0], [72.7, 1456.0], [72.8, 1456.0], [72.9, 1457.0], [73.0, 1457.0], [73.1, 1457.0], [73.2, 1457.0], [73.3, 1457.0], [73.4, 1457.0], [73.5, 1458.0], [73.6, 1458.0], [73.7, 1458.0], [73.8, 1458.0], [73.9, 1458.0], [74.0, 1458.0], [74.1, 1459.0], [74.2, 1459.0], [74.3, 1460.0], [74.4, 1460.0], [74.5, 1460.0], [74.6, 1460.0], [74.7, 1461.0], [74.8, 1461.0], [74.9, 1461.0], [75.0, 1461.0], [75.1, 1462.0], [75.2, 1462.0], [75.3, 1462.0], [75.4, 1462.0], [75.5, 1463.0], [75.6, 1463.0], [75.7, 1463.0], [75.8, 1463.0], [75.9, 1464.0], [76.0, 1464.0], [76.1, 1464.0], [76.2, 1464.0], [76.3, 1467.0], [76.4, 1467.0], [76.5, 1467.0], [76.6, 1467.0], [76.7, 1468.0], [76.8, 1468.0], [76.9, 1468.0], [77.0, 1468.0], [77.1, 1469.0], [77.2, 1469.0], [77.3, 1471.0], [77.4, 1471.0], [77.5, 1473.0], [77.6, 1473.0], [77.7, 1474.0], [77.8, 1474.0], [77.9, 1475.0], [78.0, 1475.0], [78.1, 1478.0], [78.2, 1478.0], [78.3, 1478.0], [78.4, 1478.0], [78.5, 1479.0], [78.6, 1479.0], [78.7, 1479.0], [78.8, 1479.0], [78.9, 1480.0], [79.0, 1480.0], [79.1, 1480.0], [79.2, 1480.0], [79.3, 1483.0], [79.4, 1483.0], [79.5, 1486.0], [79.6, 1486.0], [79.7, 1492.0], [79.8, 1492.0], [79.9, 1492.0], [80.0, 1492.0], [80.1, 1493.0], [80.2, 1493.0], [80.3, 1494.0], [80.4, 1494.0], [80.5, 1495.0], [80.6, 1495.0], [80.7, 1495.0], [80.8, 1495.0], [80.9, 1497.0], [81.0, 1497.0], [81.1, 1499.0], [81.2, 1499.0], [81.3, 1499.0], [81.4, 1499.0], [81.5, 1499.0], [81.6, 1499.0], [81.7, 1503.0], [81.8, 1503.0], [81.9, 1504.0], [82.0, 1504.0], [82.1, 1505.0], [82.2, 1505.0], [82.3, 1506.0], [82.4, 1506.0], [82.5, 1512.0], [82.6, 1512.0], [82.7, 1513.0], [82.8, 1513.0], [82.9, 1515.0], [83.0, 1515.0], [83.1, 1526.0], [83.2, 1526.0], [83.3, 1526.0], [83.4, 1526.0], [83.5, 1532.0], [83.6, 1532.0], [83.7, 1536.0], [83.8, 1536.0], [83.9, 1538.0], [84.0, 1538.0], [84.1, 1540.0], [84.2, 1540.0], [84.3, 1541.0], [84.4, 1541.0], [84.5, 1541.0], [84.6, 1541.0], [84.7, 1543.0], [84.8, 1543.0], [84.9, 1547.0], [85.0, 1547.0], [85.1, 1547.0], [85.2, 1547.0], [85.3, 1547.0], [85.4, 1547.0], [85.5, 1551.0], [85.6, 1551.0], [85.7, 1551.0], [85.8, 1551.0], [85.9, 1552.0], [86.0, 1552.0], [86.1, 1556.0], [86.2, 1556.0], [86.3, 1562.0], [86.4, 1562.0], [86.5, 1657.0], [86.6, 1657.0], [86.7, 1679.0], [86.8, 1679.0], [86.9, 1680.0], [87.0, 1680.0], [87.1, 1681.0], [87.2, 1681.0], [87.3, 1702.0], [87.4, 1702.0], [87.5, 1704.0], [87.6, 1704.0], [87.7, 1709.0], [87.8, 1709.0], [87.9, 1710.0], [88.0, 1710.0], [88.1, 1710.0], [88.2, 1710.0], [88.3, 1720.0], [88.4, 1720.0], [88.5, 2488.0], [88.6, 2488.0], [88.7, 3026.0], [88.8, 3026.0], [88.9, 3027.0], [89.0, 3027.0], [89.1, 3037.0], [89.2, 3037.0], [89.3, 3040.0], [89.4, 3040.0], [89.5, 3043.0], [89.6, 3043.0], [89.7, 3062.0], [89.8, 3062.0], [89.9, 3063.0], [90.0, 3063.0], [90.1, 3064.0], [90.2, 3064.0], [90.3, 3065.0], [90.4, 3065.0], [90.5, 3065.0], [90.6, 3065.0], [90.7, 3065.0], [90.8, 3065.0], [90.9, 3065.0], [91.0, 3065.0], [91.1, 3066.0], [91.2, 3066.0], [91.3, 3066.0], [91.4, 3066.0], [91.5, 3066.0], [91.6, 3066.0], [91.7, 3066.0], [91.8, 3066.0], [91.9, 3066.0], [92.0, 3066.0], [92.1, 3066.0], [92.2, 3066.0], [92.3, 3067.0], [92.4, 3067.0], [92.5, 3067.0], [92.6, 3067.0], [92.7, 3068.0], [92.8, 3068.0], [92.9, 3068.0], [93.0, 3068.0], [93.1, 3068.0], [93.2, 3068.0], [93.3, 3069.0], [93.4, 3069.0], [93.5, 3071.0], [93.6, 3071.0], [93.7, 3071.0], [93.8, 3071.0], [93.9, 3072.0], [94.0, 3072.0], [94.1, 3072.0], [94.2, 3072.0], [94.3, 3074.0], [94.4, 3074.0], [94.5, 3074.0], [94.6, 3074.0], [94.7, 3074.0], [94.8, 3074.0], [94.9, 3077.0], [95.0, 3077.0], [95.1, 3077.0], [95.2, 3077.0], [95.3, 3077.0], [95.4, 3077.0], [95.5, 3080.0], [95.6, 3080.0], [95.7, 3091.0], [95.8, 3091.0], [95.9, 3116.0], [96.0, 3116.0], [96.1, 3122.0], [96.2, 3122.0], [96.3, 3126.0], [96.4, 3126.0], [96.5, 3127.0], [96.6, 3127.0], [96.7, 3127.0], [96.8, 3127.0], [96.9, 3128.0], [97.0, 3128.0], [97.1, 3131.0], [97.2, 3131.0], [97.3, 3136.0], [97.4, 3136.0], [97.5, 3136.0], [97.6, 3136.0], [97.7, 3137.0], [97.8, 3137.0], [97.9, 3139.0], [98.0, 3139.0], [98.1, 3140.0], [98.2, 3140.0], [98.3, 3140.0], [98.4, 3140.0], [98.5, 3243.0], [98.6, 3243.0], [98.7, 3259.0], [98.8, 3259.0], [98.9, 3261.0], [99.0, 3261.0], [99.1, 3267.0], [99.2, 3267.0], [99.3, 3268.0], [99.4, 3268.0], [99.5, 3286.0], [99.6, 3286.0], [99.7, 3291.0], [99.8, 3291.0], [99.9, 4286.0], [100.0, 4286.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 77.0, "series": [{"data": [[600.0, 13.0], [2400.0, 1.0], [700.0, 6.0], [3000.0, 36.0], [3100.0, 13.0], [200.0, 69.0], [800.0, 16.0], [3200.0, 7.0], [4200.0, 1.0], [1100.0, 11.0], [300.0, 47.0], [1200.0, 46.0], [1300.0, 70.0], [1400.0, 77.0], [1500.0, 24.0], [100.0, 2.0], [400.0, 37.0], [1600.0, 4.0], [1700.0, 6.0], [500.0, 14.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 92.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 251.0, "series": [{"data": [[0.0, 157.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 251.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 92.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 239.57000000000002, "minX": 1.57232304E12, "maxY": 239.57000000000002, "series": [{"data": [[1.57232304E12, 239.57000000000002]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232304E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 211.66666666666666, "minX": 1.0, "maxY": 4286.0, "series": [{"data": [[3.0, 3054.0], [5.0, 3065.0], [6.0, 3080.0], [10.0, 3127.0], [11.0, 3139.0], [12.0, 3138.6666666666665], [14.0, 3136.5], [16.0, 3126.5], [18.0, 3122.0], [19.0, 3126.0], [20.0, 3074.0], [21.0, 3091.0], [22.0, 3027.0], [23.0, 3026.0], [24.0, 3040.0], [25.0, 3037.0], [26.0, 3063.0], [28.0, 3069.0], [30.0, 3065.0], [35.0, 3077.0], [34.0, 3070.25], [37.0, 3077.0], [39.0, 3069.0], [38.0, 3074.0], [40.0, 3066.0], [43.0, 3291.0], [42.0, 3066.5], [45.0, 3068.0], [47.0, 3267.0], [46.0, 3286.0], [51.0, 3069.5], [50.0, 3261.0], [52.0, 3066.0], [55.0, 3066.0], [54.0, 3198.3333333333335], [57.0, 3152.5], [59.0, 1401.0], [58.0, 2488.0], [60.0, 1300.0], [63.0, 1177.0], [62.0, 1383.0], [67.0, 1309.3333333333333], [64.0, 1217.0], [70.0, 1216.0], [75.0, 1315.0], [74.0, 1318.3333333333333], [72.0, 1289.0], [78.0, 1252.5], [76.0, 1277.0], [83.0, 1214.0], [81.0, 1293.0], [80.0, 1256.5], [93.0, 1710.0], [92.0, 1714.5], [99.0, 1495.5], [98.0, 1228.0], [97.0, 1345.5], [103.0, 1679.0], [102.0, 1427.3333333333333], [106.0, 1280.0], [105.0, 1536.0], [104.0, 1282.0], [111.0, 1454.5], [109.0, 1388.0], [108.0, 1279.0], [115.0, 1532.5], [119.0, 1209.0], [118.0, 1356.5], [116.0, 1405.0], [121.0, 1325.5], [127.0, 1239.0], [126.0, 1338.5], [124.0, 1329.0], [134.0, 1342.5], [132.0, 1360.0], [131.0, 1367.0], [130.0, 1241.0], [129.0, 1360.0], [128.0, 1392.0], [143.0, 1396.0], [140.0, 1289.0], [138.0, 1551.75], [149.0, 1523.3333333333333], [146.0, 1472.6666666666667], [157.0, 1486.0], [156.0, 1530.3333333333333], [152.0, 1446.3333333333333], [165.0, 1457.5], [161.0, 1452.0], [173.0, 1498.0], [172.0, 1258.0], [170.0, 1413.5], [183.0, 1499.0], [177.0, 1427.5], [176.0, 1492.0], [188.0, 1449.5], [187.0, 1480.0], [185.0, 1490.3333333333333], [199.0, 1468.25], [198.0, 1389.3333333333333], [192.0, 1465.0], [206.0, 1460.0], [204.0, 1465.3333333333333], [201.0, 1451.0], [214.0, 1466.0], [213.0, 1452.0], [212.0, 1465.5], [211.0, 1359.0], [209.0, 1463.0], [208.0, 1458.0], [219.0, 1433.75], [217.0, 1235.0], [230.0, 1393.0], [228.0, 1465.0], [238.0, 1425.0], [237.0, 1441.0], [236.0, 1459.0], [234.0, 1449.5], [232.0, 1389.3333333333333], [247.0, 1415.0], [246.0, 1454.0], [243.0, 1461.0], [242.0, 1385.6666666666667], [241.0, 1437.0], [240.0, 1442.0], [254.0, 1230.0], [252.0, 1368.0], [251.0, 1400.6], [250.0, 1457.0], [248.0, 1431.0], [269.0, 1189.0], [268.0, 1368.5], [266.0, 1375.0], [265.0, 1387.6], [262.0, 1332.5], [258.0, 1381.75], [287.0, 1305.3333333333333], [284.0, 1253.0], [274.0, 1268.0], [283.0, 1227.0], [281.0, 1294.0], [280.0, 1324.0], [279.0, 1337.0], [278.0, 1334.0], [277.0, 1188.0], [276.0, 1346.5], [303.0, 434.75], [299.0, 372.5], [297.0, 303.0], [296.0, 1232.0], [295.0, 1258.0], [294.0, 1193.5], [292.0, 1255.0], [289.0, 1299.0], [288.0, 1139.0], [317.0, 454.0], [314.0, 466.5], [313.0, 386.5], [309.0, 357.5], [335.0, 379.0], [320.0, 264.5], [323.0, 727.6666666666667], [331.0, 377.25], [330.0, 318.0], [332.0, 341.0], [334.0, 241.0], [329.0, 876.0], [328.0, 236.0], [327.0, 314.0], [326.0, 229.0], [348.0, 400.6666666666667], [336.0, 261.5], [351.0, 211.66666666666666], [350.0, 282.3333333333333], [349.0, 289.0], [344.0, 245.0], [343.0, 276.6666666666667], [340.0, 247.0], [338.0, 273.0], [359.0, 298.3333333333333], [358.0, 398.0], [357.0, 328.0], [356.0, 256.6666666666667], [364.0, 505.85714285714283], [354.0, 303.75], [365.0, 359.42857142857144], [367.0, 436.0], [366.0, 459.0], [362.0, 461.0], [361.0, 348.0], [380.0, 489.5], [377.0, 494.0], [368.0, 634.0], [370.0, 550.0], [379.0, 431.0], [381.0, 395.0], [383.0, 546.2], [378.0, 287.0], [376.0, 802.0], [375.0, 277.0], [374.0, 811.5], [372.0, 595.0], [397.0, 348.3333333333333], [387.0, 584.1666666666666], [385.0, 500.0], [386.0, 508.0], [398.0, 340.0], [395.0, 277.0], [393.0, 277.0], [392.0, 466.25], [388.0, 280.0], [414.0, 696.0], [415.0, 302.0], [412.0, 500.0], [403.0, 274.0], [402.0, 520.5], [400.0, 512.6666666666666], [411.0, 280.0], [410.0, 286.0], [409.0, 287.0], [408.0, 282.0], [407.0, 278.5], [405.0, 278.0], [418.0, 320.0], [422.0, 390.3333333333333], [421.0, 540.6666666666666], [423.0, 418.8], [417.0, 309.5], [426.0, 431.0], [429.0, 324.5], [430.0, 472.4], [424.0, 312.0], [419.0, 327.0], [1.0, 4286.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}, {"data": [[239.56799999999984, 1192.2039999999997]], "isOverall": false, "label": "Access Animation Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 430.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1950.0, "minX": 1.57232304E12, "maxY": 65690.03333333334, "series": [{"data": [[1.57232304E12, 65690.03333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232304E12, 1950.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232304E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1192.2039999999997, "minX": 1.57232304E12, "maxY": 1192.2039999999997, "series": [{"data": [[1.57232304E12, 1192.2039999999997]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232304E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 741.5739999999997, "minX": 1.57232304E12, "maxY": 741.5739999999997, "series": [{"data": [[1.57232304E12, 741.5739999999997]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232304E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 488.6859999999999, "minX": 1.57232304E12, "maxY": 488.6859999999999, "series": [{"data": [[1.57232304E12, 488.6859999999999]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232304E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 143.0, "minX": 1.57232304E12, "maxY": 4286.0, "series": [{"data": [[1.57232304E12, 4286.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232304E12, 143.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232304E12, 3063.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232304E12, 3266.94]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232304E12, 3077.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232304E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 348.0, "minX": 1.0, "maxY": 3072.0, "series": [{"data": [[1.0, 2843.5], [272.0, 1348.0], [169.0, 348.0], [57.0, 3072.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 272.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 237.0, "minX": 1.0, "maxY": 3061.0, "series": [{"data": [[1.0, 1703.0], [272.0, 306.0], [169.0, 237.0], [57.0, 3061.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 272.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232304E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232304E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232304E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232304E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232304E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232304E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232304E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232304E12, 8.333333333333334]], "isOverall": false, "label": "Access Animation Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232304E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232304E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232304E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232304E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

