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
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 3682.0, "series": [{"data": [[0.0, 216.0], [0.1, 216.0], [0.2, 217.0], [0.3, 217.0], [0.4, 219.0], [0.5, 219.0], [0.6, 219.0], [0.7, 220.0], [0.8, 227.0], [0.9, 227.0], [1.0, 233.0], [1.1, 233.0], [1.2, 234.0], [1.3, 234.0], [1.4, 234.0], [1.5, 234.0], [1.6, 234.0], [1.7, 234.0], [1.8, 235.0], [1.9, 235.0], [2.0, 235.0], [2.1, 235.0], [2.2, 235.0], [2.3, 235.0], [2.4, 236.0], [2.5, 236.0], [2.6, 236.0], [2.7, 236.0], [2.8, 236.0], [2.9, 236.0], [3.0, 236.0], [3.1, 236.0], [3.2, 237.0], [3.3, 237.0], [3.4, 237.0], [3.5, 237.0], [3.6, 237.0], [3.7, 237.0], [3.8, 237.0], [3.9, 238.0], [4.0, 238.0], [4.1, 238.0], [4.2, 239.0], [4.3, 239.0], [4.4, 239.0], [4.5, 239.0], [4.6, 239.0], [4.7, 240.0], [4.8, 240.0], [4.9, 241.0], [5.0, 241.0], [5.1, 245.0], [5.2, 245.0], [5.3, 246.0], [5.4, 246.0], [5.5, 247.0], [5.6, 247.0], [5.7, 247.0], [5.8, 247.0], [5.9, 249.0], [6.0, 249.0], [6.1, 251.0], [6.2, 251.0], [6.3, 253.0], [6.4, 253.0], [6.5, 255.0], [6.6, 255.0], [6.7, 255.0], [6.8, 255.0], [6.9, 256.0], [7.0, 256.0], [7.1, 256.0], [7.2, 256.0], [7.3, 256.0], [7.4, 256.0], [7.5, 260.0], [7.6, 260.0], [7.7, 262.0], [7.8, 262.0], [7.9, 262.0], [8.0, 262.0], [8.1, 263.0], [8.2, 263.0], [8.3, 263.0], [8.4, 263.0], [8.5, 265.0], [8.6, 265.0], [8.7, 265.0], [8.8, 265.0], [8.9, 265.0], [9.0, 265.0], [9.1, 266.0], [9.2, 266.0], [9.3, 267.0], [9.4, 267.0], [9.5, 267.0], [9.6, 267.0], [9.7, 268.0], [9.8, 268.0], [9.9, 268.0], [10.0, 268.0], [10.1, 269.0], [10.2, 269.0], [10.3, 270.0], [10.4, 270.0], [10.5, 270.0], [10.6, 270.0], [10.7, 271.0], [10.8, 273.0], [10.9, 273.0], [11.0, 275.0], [11.1, 275.0], [11.2, 278.0], [11.3, 278.0], [11.4, 279.0], [11.5, 279.0], [11.6, 279.0], [11.7, 279.0], [11.8, 280.0], [11.9, 280.0], [12.0, 282.0], [12.1, 282.0], [12.2, 283.0], [12.3, 283.0], [12.4, 284.0], [12.5, 284.0], [12.6, 285.0], [12.7, 285.0], [12.8, 288.0], [12.9, 288.0], [13.0, 291.0], [13.1, 291.0], [13.2, 293.0], [13.3, 293.0], [13.4, 293.0], [13.5, 293.0], [13.6, 297.0], [13.7, 297.0], [13.8, 298.0], [13.9, 298.0], [14.0, 299.0], [14.1, 299.0], [14.2, 306.0], [14.3, 306.0], [14.4, 308.0], [14.5, 308.0], [14.6, 317.0], [14.7, 317.0], [14.8, 320.0], [14.9, 320.0], [15.0, 338.0], [15.1, 338.0], [15.2, 343.0], [15.3, 343.0], [15.4, 345.0], [15.5, 345.0], [15.6, 348.0], [15.7, 348.0], [15.8, 353.0], [15.9, 353.0], [16.0, 358.0], [16.1, 358.0], [16.2, 362.0], [16.3, 362.0], [16.4, 372.0], [16.5, 372.0], [16.6, 401.0], [16.7, 401.0], [16.8, 406.0], [16.9, 406.0], [17.0, 412.0], [17.1, 412.0], [17.2, 423.0], [17.3, 423.0], [17.4, 426.0], [17.5, 426.0], [17.6, 432.0], [17.7, 432.0], [17.8, 433.0], [17.9, 433.0], [18.0, 442.0], [18.1, 442.0], [18.2, 444.0], [18.3, 444.0], [18.4, 450.0], [18.5, 450.0], [18.6, 461.0], [18.7, 461.0], [18.8, 462.0], [18.9, 462.0], [19.0, 466.0], [19.1, 466.0], [19.2, 467.0], [19.3, 467.0], [19.4, 469.0], [19.5, 469.0], [19.6, 469.0], [19.7, 469.0], [19.8, 482.0], [19.9, 482.0], [20.0, 515.0], [20.1, 515.0], [20.2, 517.0], [20.3, 517.0], [20.4, 517.0], [20.5, 517.0], [20.6, 517.0], [20.7, 517.0], [20.8, 530.0], [20.9, 530.0], [21.0, 531.0], [21.1, 531.0], [21.2, 534.0], [21.3, 534.0], [21.4, 554.0], [21.5, 554.0], [21.6, 555.0], [21.7, 555.0], [21.8, 557.0], [21.9, 557.0], [22.0, 559.0], [22.1, 559.0], [22.2, 561.0], [22.3, 561.0], [22.4, 563.0], [22.5, 563.0], [22.6, 587.0], [22.7, 587.0], [22.8, 589.0], [22.9, 589.0], [23.0, 590.0], [23.1, 590.0], [23.2, 593.0], [23.3, 593.0], [23.4, 593.0], [23.5, 593.0], [23.6, 599.0], [23.7, 599.0], [23.8, 611.0], [23.9, 611.0], [24.0, 619.0], [24.1, 619.0], [24.2, 620.0], [24.3, 620.0], [24.4, 627.0], [24.5, 627.0], [24.6, 630.0], [24.7, 630.0], [24.8, 634.0], [24.9, 634.0], [25.0, 634.0], [25.1, 634.0], [25.2, 636.0], [25.3, 636.0], [25.4, 638.0], [25.5, 638.0], [25.6, 641.0], [25.7, 641.0], [25.8, 649.0], [25.9, 649.0], [26.0, 658.0], [26.1, 658.0], [26.2, 660.0], [26.3, 660.0], [26.4, 669.0], [26.5, 669.0], [26.6, 669.0], [26.7, 669.0], [26.8, 672.0], [26.9, 672.0], [27.0, 700.0], [27.1, 700.0], [27.2, 724.0], [27.3, 724.0], [27.4, 735.0], [27.5, 735.0], [27.6, 801.0], [27.7, 801.0], [27.8, 813.0], [27.9, 813.0], [28.0, 814.0], [28.1, 814.0], [28.2, 817.0], [28.3, 817.0], [28.4, 819.0], [28.5, 819.0], [28.6, 819.0], [28.7, 819.0], [28.8, 821.0], [28.9, 821.0], [29.0, 821.0], [29.1, 821.0], [29.2, 822.0], [29.3, 822.0], [29.4, 823.0], [29.5, 823.0], [29.6, 824.0], [29.7, 824.0], [29.8, 834.0], [29.9, 834.0], [30.0, 848.0], [30.1, 848.0], [30.2, 850.0], [30.3, 850.0], [30.4, 1168.0], [30.5, 1168.0], [30.6, 1178.0], [30.7, 1178.0], [30.8, 1182.0], [30.9, 1182.0], [31.0, 1209.0], [31.1, 1209.0], [31.2, 1211.0], [31.3, 1211.0], [31.4, 1211.0], [31.5, 1211.0], [31.6, 1212.0], [31.7, 1212.0], [31.8, 1217.0], [31.9, 1217.0], [32.0, 1223.0], [32.1, 1223.0], [32.2, 1227.0], [32.3, 1227.0], [32.4, 1229.0], [32.5, 1229.0], [32.6, 1234.0], [32.7, 1234.0], [32.8, 1238.0], [32.9, 1238.0], [33.0, 1240.0], [33.1, 1240.0], [33.2, 1243.0], [33.3, 1243.0], [33.4, 1246.0], [33.5, 1246.0], [33.6, 1250.0], [33.7, 1250.0], [33.8, 1252.0], [33.9, 1252.0], [34.0, 1253.0], [34.1, 1253.0], [34.2, 1253.0], [34.3, 1253.0], [34.4, 1260.0], [34.5, 1260.0], [34.6, 1261.0], [34.7, 1261.0], [34.8, 1261.0], [34.9, 1261.0], [35.0, 1262.0], [35.1, 1262.0], [35.2, 1263.0], [35.3, 1263.0], [35.4, 1265.0], [35.5, 1265.0], [35.6, 1268.0], [35.7, 1268.0], [35.8, 1269.0], [35.9, 1269.0], [36.0, 1274.0], [36.1, 1274.0], [36.2, 1275.0], [36.3, 1275.0], [36.4, 1276.0], [36.5, 1276.0], [36.6, 1283.0], [36.7, 1283.0], [36.8, 1289.0], [36.9, 1289.0], [37.0, 1290.0], [37.1, 1290.0], [37.2, 1293.0], [37.3, 1293.0], [37.4, 1295.0], [37.5, 1295.0], [37.6, 1295.0], [37.7, 1295.0], [37.8, 1304.0], [37.9, 1304.0], [38.0, 1310.0], [38.1, 1310.0], [38.2, 1314.0], [38.3, 1314.0], [38.4, 1314.0], [38.5, 1314.0], [38.6, 1320.0], [38.7, 1320.0], [38.8, 1321.0], [38.9, 1321.0], [39.0, 1326.0], [39.1, 1326.0], [39.2, 1335.0], [39.3, 1335.0], [39.4, 1335.0], [39.5, 1350.0], [39.6, 1350.0], [39.7, 1355.0], [39.8, 1355.0], [39.9, 1358.0], [40.0, 1358.0], [40.1, 1359.0], [40.2, 1359.0], [40.3, 1360.0], [40.4, 1360.0], [40.5, 1362.0], [40.6, 1362.0], [40.7, 1381.0], [40.8, 1381.0], [40.9, 1381.0], [41.0, 1381.0], [41.1, 1386.0], [41.2, 1386.0], [41.3, 1390.0], [41.4, 1390.0], [41.5, 1391.0], [41.6, 1391.0], [41.7, 1394.0], [41.8, 1394.0], [41.9, 1412.0], [42.0, 1412.0], [42.1, 1419.0], [42.2, 1419.0], [42.3, 1423.0], [42.4, 1423.0], [42.5, 1425.0], [42.6, 1425.0], [42.7, 1425.0], [42.8, 1425.0], [42.9, 1426.0], [43.0, 1426.0], [43.1, 1427.0], [43.2, 1427.0], [43.3, 1429.0], [43.4, 1429.0], [43.5, 1431.0], [43.6, 1431.0], [43.7, 1432.0], [43.8, 1432.0], [43.9, 1436.0], [44.0, 1436.0], [44.1, 1438.0], [44.2, 1438.0], [44.3, 1440.0], [44.4, 1440.0], [44.5, 1440.0], [44.6, 1440.0], [44.7, 1440.0], [44.8, 1440.0], [44.9, 1444.0], [45.0, 1444.0], [45.1, 1444.0], [45.2, 1444.0], [45.3, 1448.0], [45.4, 1448.0], [45.5, 1449.0], [45.6, 1449.0], [45.7, 1450.0], [45.8, 1450.0], [45.9, 1450.0], [46.0, 1450.0], [46.1, 1452.0], [46.2, 1452.0], [46.3, 1453.0], [46.4, 1453.0], [46.5, 1455.0], [46.6, 1455.0], [46.7, 1458.0], [46.8, 1458.0], [46.9, 1458.0], [47.0, 1458.0], [47.1, 1460.0], [47.2, 1460.0], [47.3, 1460.0], [47.4, 1460.0], [47.5, 1460.0], [47.6, 1460.0], [47.7, 1462.0], [47.8, 1462.0], [47.9, 1464.0], [48.0, 1464.0], [48.1, 1466.0], [48.2, 1466.0], [48.3, 1466.0], [48.4, 1466.0], [48.5, 1467.0], [48.6, 1467.0], [48.7, 1467.0], [48.8, 1467.0], [48.9, 1468.0], [49.0, 1468.0], [49.1, 1469.0], [49.2, 1469.0], [49.3, 1471.0], [49.4, 1471.0], [49.5, 1475.0], [49.6, 1475.0], [49.7, 1477.0], [49.8, 1477.0], [49.9, 1481.0], [50.0, 1481.0], [50.1, 1493.0], [50.2, 1493.0], [50.3, 1497.0], [50.4, 1497.0], [50.5, 1506.0], [50.6, 1506.0], [50.7, 1507.0], [50.8, 1507.0], [50.9, 1508.0], [51.0, 1508.0], [51.1, 1508.0], [51.2, 1508.0], [51.3, 1517.0], [51.4, 1517.0], [51.5, 1519.0], [51.6, 1519.0], [51.7, 1520.0], [51.8, 1520.0], [51.9, 1522.0], [52.0, 1522.0], [52.1, 1522.0], [52.2, 1522.0], [52.3, 1523.0], [52.4, 1523.0], [52.5, 1526.0], [52.6, 1526.0], [52.7, 1526.0], [52.8, 1526.0], [52.9, 1527.0], [53.0, 1527.0], [53.1, 1533.0], [53.2, 1533.0], [53.3, 1533.0], [53.4, 1533.0], [53.5, 1534.0], [53.6, 1534.0], [53.7, 1535.0], [53.8, 1535.0], [53.9, 1538.0], [54.0, 1538.0], [54.1, 1539.0], [54.2, 1539.0], [54.3, 1541.0], [54.4, 1541.0], [54.5, 1544.0], [54.6, 1544.0], [54.7, 1545.0], [54.8, 1545.0], [54.9, 1545.0], [55.0, 1545.0], [55.1, 1545.0], [55.2, 1545.0], [55.3, 1548.0], [55.4, 1548.0], [55.5, 1550.0], [55.6, 1550.0], [55.7, 1554.0], [55.8, 1554.0], [55.9, 1555.0], [56.0, 1555.0], [56.1, 1556.0], [56.2, 1556.0], [56.3, 1564.0], [56.4, 1564.0], [56.5, 1568.0], [56.6, 1568.0], [56.7, 1569.0], [56.8, 1569.0], [56.9, 1569.0], [57.0, 1569.0], [57.1, 1570.0], [57.2, 1570.0], [57.3, 1570.0], [57.4, 1570.0], [57.5, 1572.0], [57.6, 1572.0], [57.7, 1572.0], [57.8, 1572.0], [57.9, 1576.0], [58.0, 1576.0], [58.1, 1576.0], [58.2, 1576.0], [58.3, 1577.0], [58.4, 1577.0], [58.5, 1578.0], [58.6, 1578.0], [58.7, 1583.0], [58.8, 1583.0], [58.9, 1587.0], [59.0, 1587.0], [59.1, 1589.0], [59.2, 1589.0], [59.3, 1593.0], [59.4, 1593.0], [59.5, 1594.0], [59.6, 1594.0], [59.7, 1594.0], [59.8, 1594.0], [59.9, 1594.0], [60.0, 1594.0], [60.1, 1598.0], [60.2, 1598.0], [60.3, 1603.0], [60.4, 1603.0], [60.5, 1605.0], [60.6, 1605.0], [60.7, 1607.0], [60.8, 1607.0], [60.9, 1608.0], [61.0, 1608.0], [61.1, 1608.0], [61.2, 1608.0], [61.3, 1614.0], [61.4, 1614.0], [61.5, 1616.0], [61.6, 1616.0], [61.7, 1631.0], [61.8, 1631.0], [61.9, 1631.0], [62.0, 1631.0], [62.1, 1633.0], [62.2, 1633.0], [62.3, 1642.0], [62.4, 1642.0], [62.5, 1651.0], [62.6, 1651.0], [62.7, 1651.0], [62.8, 1651.0], [62.9, 1653.0], [63.0, 1653.0], [63.1, 1659.0], [63.2, 1659.0], [63.3, 1659.0], [63.4, 1659.0], [63.5, 1661.0], [63.6, 1661.0], [63.7, 1661.0], [63.8, 1661.0], [63.9, 1662.0], [64.0, 1662.0], [64.1, 1668.0], [64.2, 1668.0], [64.3, 1673.0], [64.4, 1673.0], [64.5, 1675.0], [64.6, 1675.0], [64.7, 1676.0], [64.8, 1676.0], [64.9, 1679.0], [65.0, 1679.0], [65.1, 1680.0], [65.2, 1680.0], [65.3, 1683.0], [65.4, 1683.0], [65.5, 1684.0], [65.6, 1684.0], [65.7, 1684.0], [65.8, 1684.0], [65.9, 1685.0], [66.0, 1685.0], [66.1, 1689.0], [66.2, 1689.0], [66.3, 1691.0], [66.4, 1691.0], [66.5, 1695.0], [66.6, 1695.0], [66.7, 1696.0], [66.8, 1696.0], [66.9, 1697.0], [67.0, 1697.0], [67.1, 1699.0], [67.2, 1699.0], [67.3, 1700.0], [67.4, 1700.0], [67.5, 1702.0], [67.6, 1702.0], [67.7, 1702.0], [67.8, 1702.0], [67.9, 1702.0], [68.0, 1702.0], [68.1, 1703.0], [68.2, 1703.0], [68.3, 1703.0], [68.4, 1703.0], [68.5, 1711.0], [68.6, 1711.0], [68.7, 1712.0], [68.8, 1712.0], [68.9, 1712.0], [69.0, 1712.0], [69.1, 1713.0], [69.2, 1713.0], [69.3, 1714.0], [69.4, 1714.0], [69.5, 1714.0], [69.6, 1714.0], [69.7, 1716.0], [69.8, 1716.0], [69.9, 1722.0], [70.0, 1722.0], [70.1, 1722.0], [70.2, 1722.0], [70.3, 1726.0], [70.4, 1726.0], [70.5, 1726.0], [70.6, 1726.0], [70.7, 1727.0], [70.8, 1727.0], [70.9, 1727.0], [71.0, 1727.0], [71.1, 1728.0], [71.2, 1728.0], [71.3, 1728.0], [71.4, 1728.0], [71.5, 1728.0], [71.6, 1728.0], [71.7, 1729.0], [71.8, 1729.0], [71.9, 1730.0], [72.0, 1730.0], [72.1, 1730.0], [72.2, 1730.0], [72.3, 1730.0], [72.4, 1730.0], [72.5, 1731.0], [72.6, 1731.0], [72.7, 1732.0], [72.8, 1732.0], [72.9, 1733.0], [73.0, 1733.0], [73.1, 1738.0], [73.2, 1738.0], [73.3, 1738.0], [73.4, 1738.0], [73.5, 1741.0], [73.6, 1741.0], [73.7, 1745.0], [73.8, 1745.0], [73.9, 1747.0], [74.0, 1747.0], [74.1, 1749.0], [74.2, 1749.0], [74.3, 1755.0], [74.4, 1755.0], [74.5, 1757.0], [74.6, 1757.0], [74.7, 1759.0], [74.8, 1759.0], [74.9, 1760.0], [75.0, 1760.0], [75.1, 1770.0], [75.2, 1770.0], [75.3, 1772.0], [75.4, 1772.0], [75.5, 1772.0], [75.6, 1772.0], [75.7, 1779.0], [75.8, 1779.0], [75.9, 1816.0], [76.0, 1816.0], [76.1, 2279.0], [76.2, 2279.0], [76.3, 2399.0], [76.4, 2399.0], [76.5, 2441.0], [76.6, 2441.0], [76.7, 2486.0], [76.8, 2486.0], [76.9, 2516.0], [77.0, 2516.0], [77.1, 2518.0], [77.2, 2518.0], [77.3, 2534.0], [77.4, 2534.0], [77.5, 2555.0], [77.6, 2555.0], [77.7, 2557.0], [77.8, 2557.0], [77.9, 2564.0], [78.0, 2564.0], [78.1, 2565.0], [78.2, 2565.0], [78.3, 2567.0], [78.4, 2567.0], [78.5, 2567.0], [78.6, 2567.0], [78.7, 2572.0], [78.8, 2572.0], [78.9, 2578.0], [79.0, 2578.0], [79.1, 2579.0], [79.2, 2579.0], [79.3, 2583.0], [79.4, 2583.0], [79.5, 2589.0], [79.6, 2589.0], [79.7, 2594.0], [79.8, 2594.0], [79.9, 2601.0], [80.0, 2601.0], [80.1, 2602.0], [80.2, 2602.0], [80.3, 2609.0], [80.4, 2609.0], [80.5, 2611.0], [80.6, 2611.0], [80.7, 2643.0], [80.8, 2643.0], [80.9, 2647.0], [81.0, 2647.0], [81.1, 2656.0], [81.2, 2656.0], [81.3, 2667.0], [81.4, 2667.0], [81.5, 2672.0], [81.6, 2672.0], [81.7, 2673.0], [81.8, 2673.0], [81.9, 2690.0], [82.0, 2690.0], [82.1, 2702.0], [82.2, 2702.0], [82.3, 2705.0], [82.4, 2705.0], [82.5, 2716.0], [82.6, 2716.0], [82.7, 2719.0], [82.8, 2719.0], [82.9, 2733.0], [83.0, 2733.0], [83.1, 2747.0], [83.2, 2747.0], [83.3, 2747.0], [83.4, 2747.0], [83.5, 2753.0], [83.6, 2753.0], [83.7, 2771.0], [83.8, 2771.0], [83.9, 2771.0], [84.0, 2771.0], [84.1, 2772.0], [84.2, 2772.0], [84.3, 2776.0], [84.4, 2776.0], [84.5, 2779.0], [84.6, 2779.0], [84.7, 2779.0], [84.8, 2779.0], [84.9, 2781.0], [85.0, 2781.0], [85.1, 2783.0], [85.2, 2783.0], [85.3, 2786.0], [85.4, 2786.0], [85.5, 2788.0], [85.6, 2788.0], [85.7, 2788.0], [85.8, 2788.0], [85.9, 2788.0], [86.0, 2788.0], [86.1, 2792.0], [86.2, 2792.0], [86.3, 2793.0], [86.4, 2793.0], [86.5, 2806.0], [86.6, 2806.0], [86.7, 2806.0], [86.8, 2806.0], [86.9, 2810.0], [87.0, 2810.0], [87.1, 2812.0], [87.2, 2812.0], [87.3, 2813.0], [87.4, 2813.0], [87.5, 2824.0], [87.6, 2824.0], [87.7, 2841.0], [87.8, 2841.0], [87.9, 2853.0], [88.0, 2853.0], [88.1, 2856.0], [88.2, 2856.0], [88.3, 2860.0], [88.4, 2860.0], [88.5, 2864.0], [88.6, 2864.0], [88.7, 3012.0], [88.8, 3012.0], [88.9, 3013.0], [89.0, 3013.0], [89.1, 3013.0], [89.2, 3013.0], [89.3, 3014.0], [89.4, 3014.0], [89.5, 3016.0], [89.6, 3016.0], [89.7, 3016.0], [89.8, 3016.0], [89.9, 3018.0], [90.0, 3018.0], [90.1, 3021.0], [90.2, 3021.0], [90.3, 3022.0], [90.4, 3022.0], [90.5, 3024.0], [90.6, 3024.0], [90.7, 3027.0], [90.8, 3027.0], [90.9, 3032.0], [91.0, 3032.0], [91.1, 3032.0], [91.2, 3032.0], [91.3, 3032.0], [91.4, 3032.0], [91.5, 3035.0], [91.6, 3035.0], [91.7, 3040.0], [91.8, 3040.0], [91.9, 3052.0], [92.0, 3052.0], [92.1, 3053.0], [92.2, 3053.0], [92.3, 3055.0], [92.4, 3055.0], [92.5, 3056.0], [92.6, 3056.0], [92.7, 3056.0], [92.8, 3056.0], [92.9, 3057.0], [93.0, 3057.0], [93.1, 3057.0], [93.2, 3057.0], [93.3, 3057.0], [93.4, 3057.0], [93.5, 3058.0], [93.6, 3058.0], [93.7, 3059.0], [93.8, 3059.0], [93.9, 3059.0], [94.0, 3059.0], [94.1, 3059.0], [94.2, 3059.0], [94.3, 3060.0], [94.4, 3060.0], [94.5, 3061.0], [94.6, 3061.0], [94.7, 3062.0], [94.8, 3062.0], [94.9, 3062.0], [95.0, 3062.0], [95.1, 3062.0], [95.2, 3062.0], [95.3, 3063.0], [95.4, 3063.0], [95.5, 3063.0], [95.6, 3063.0], [95.7, 3064.0], [95.8, 3064.0], [95.9, 3064.0], [96.0, 3064.0], [96.1, 3064.0], [96.2, 3064.0], [96.3, 3065.0], [96.4, 3065.0], [96.5, 3065.0], [96.6, 3065.0], [96.7, 3065.0], [96.8, 3065.0], [96.9, 3066.0], [97.0, 3066.0], [97.1, 3067.0], [97.2, 3067.0], [97.3, 3072.0], [97.4, 3072.0], [97.5, 3072.0], [97.6, 3072.0], [97.7, 3075.0], [97.8, 3075.0], [97.9, 3205.0], [98.0, 3205.0], [98.1, 3216.0], [98.2, 3216.0], [98.3, 3289.0], [98.4, 3289.0], [98.5, 3502.0], [98.6, 3502.0], [98.7, 3504.0], [98.8, 3504.0], [98.9, 3558.0], [99.0, 3558.0], [99.1, 3562.0], [99.2, 3562.0], [99.3, 3565.0], [99.4, 3565.0], [99.5, 3566.0], [99.6, 3566.0], [99.7, 3592.0], [99.8, 3592.0], [99.9, 3682.0], [100.0, 3682.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 71.0, "series": [{"data": [[600.0, 16.0], [700.0, 3.0], [800.0, 14.0], [1100.0, 3.0], [1200.0, 34.0], [1300.0, 20.0], [1400.0, 43.0], [1500.0, 49.0], [1600.0, 35.0], [1700.0, 43.0], [1800.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 15.0], [2600.0, 11.0], [2700.0, 22.0], [2800.0, 11.0], [3000.0, 46.0], [200.0, 71.0], [3200.0, 3.0], [3500.0, 7.0], [3600.0, 1.0], [300.0, 12.0], [400.0, 17.0], [500.0, 19.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 248.0, "series": [{"data": [[0.0, 100.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 152.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 248.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 248.22800000000018, "minX": 1.57232202E12, "maxY": 248.22800000000018, "series": [{"data": [[1.57232202E12, 248.22800000000018]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232202E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 218.0, "minX": 1.0, "maxY": 3682.0, "series": [{"data": [[2.0, 3205.0], [3.0, 3682.0], [4.0, 3216.0], [5.0, 3012.0], [6.0, 3592.0], [7.0, 3032.0], [9.0, 3534.5], [10.0, 3566.0], [12.0, 3560.0], [13.0, 3289.0], [14.0, 3016.0], [15.0, 3018.0], [16.0, 3013.0], [17.0, 3021.0], [18.0, 3022.0], [19.0, 3016.0], [20.0, 3013.0], [21.0, 3014.0], [22.0, 3027.0], [24.0, 3028.0], [26.0, 3033.5], [28.0, 3062.0], [29.0, 3056.0], [30.0, 3049.5], [33.0, 3061.0], [32.0, 3057.0], [36.0, 3056.0], [39.0, 3061.0], [38.0, 3060.0], [41.0, 3063.3333333333335], [43.0, 3062.0], [42.0, 3065.0], [45.0, 3052.5], [49.0, 3058.0], [48.0, 3056.5], [53.0, 3072.0], [52.0, 3064.0], [55.0, 3072.0], [54.0, 3067.0], [57.0, 3075.0], [56.0, 3066.0], [58.0, 2864.0], [61.0, 2851.3333333333335], [63.0, 2824.0], [62.0, 2856.0], [66.0, 2595.0], [64.0, 2702.0], [70.0, 2794.0], [73.0, 2776.0], [72.0, 2809.0], [79.0, 2789.0], [82.0, 2761.833333333333], [84.0, 2715.0], [91.0, 2781.0], [89.0, 2771.5], [94.0, 2753.0], [93.0, 2609.0], [92.0, 2694.2], [99.0, 2628.0], [97.0, 2694.0], [103.0, 2672.0], [102.0, 2667.0], [101.0, 2279.0], [100.0, 2690.0], [107.0, 2565.0], [106.0, 2534.0], [105.0, 2649.5], [111.0, 2497.6666666666665], [108.0, 2579.0], [114.0, 2506.5], [112.0, 2567.0], [119.0, 2521.5], [117.0, 2555.0], [116.0, 2565.5], [123.0, 1386.0], [122.0, 1526.0], [121.0, 1481.0], [120.0, 2518.0], [126.0, 1304.0], [125.0, 1263.0], [131.0, 1667.5], [129.0, 1240.0], [128.0, 1244.5], [143.0, 1263.0], [142.0, 1260.0], [141.0, 1261.0], [140.0, 1419.2], [138.0, 1252.6666666666667], [139.0, 1212.0], [148.0, 1411.6666666666667], [145.0, 1262.0], [144.0, 1182.0], [158.0, 1253.0], [156.0, 1244.0], [164.0, 1658.5], [160.0, 1597.111111111111], [175.0, 1714.0], [174.0, 1356.6666666666667], [171.0, 1301.5], [169.0, 1384.2], [179.0, 1743.25], [191.0, 1608.0], [190.0, 1728.0], [189.0, 1665.5], [187.0, 1555.0], [185.0, 1731.5], [184.0, 1673.0], [198.0, 1728.0], [197.0, 1572.0], [196.0, 1550.0], [194.0, 1660.5], [205.0, 1700.0], [204.0, 1731.0], [203.0, 1718.0], [202.0, 1728.0], [215.0, 1703.0], [214.0, 1712.0], [208.0, 1514.0], [218.0, 1613.6], [217.0, 1671.5], [216.0, 1583.0], [225.0, 1477.0], [224.0, 1439.8333333333333], [237.0, 1690.0], [234.0, 1668.888888888889], [244.0, 1511.3333333333333], [241.0, 1597.3333333333333], [240.0, 1689.0], [254.0, 1589.0], [253.0, 1496.0], [250.0, 1613.5], [248.0, 1650.0], [268.0, 1642.0], [270.0, 1631.0], [271.0, 1335.0], [269.0, 1633.0], [267.0, 1494.3333333333333], [264.0, 1659.0], [263.0, 1460.0], [258.0, 1466.0], [257.0, 1624.6666666666667], [262.0, 1656.5], [260.0, 1664.5], [286.0, 1362.0], [287.0, 1569.0], [285.0, 1484.0], [283.0, 1535.6666666666667], [280.0, 1467.0], [277.0, 1578.0], [276.0, 1582.0], [274.0, 1598.0], [273.0, 1610.5], [303.0, 1523.0], [302.0, 1545.0], [300.0, 1381.0], [296.0, 1295.0], [295.0, 1560.6666666666667], [292.0, 1457.0], [289.0, 1539.0], [318.0, 1410.0], [319.0, 1507.0], [316.0, 1455.0], [315.0, 1520.0], [314.0, 1442.5], [310.0, 1523.2], [308.0, 1527.0], [306.0, 1537.0], [305.0, 1526.0], [323.0, 1412.0], [335.0, 1305.3333333333333], [332.0, 1406.0], [330.0, 1384.25], [326.0, 1466.5], [324.0, 1467.0], [322.0, 1493.0], [321.0, 1497.0], [320.0, 1314.0], [339.0, 1295.0], [350.0, 302.5], [351.0, 308.0], [348.0, 1424.0], [346.0, 1428.5], [344.0, 1429.0], [343.0, 1347.5], [341.0, 1268.0], [340.0, 1253.0], [338.0, 1438.0], [337.0, 1448.0], [336.0, 1250.0], [367.0, 444.75], [365.0, 334.0], [361.0, 340.5], [359.0, 307.0], [356.0, 345.5], [354.0, 263.0], [353.0, 324.5], [368.0, 362.0], [383.0, 235.0], [381.0, 554.0], [380.0, 608.6666666666666], [377.0, 388.75], [373.0, 234.0], [372.0, 518.0], [370.0, 644.3333333333334], [398.0, 401.0], [396.0, 239.0], [395.0, 237.0], [392.0, 235.0], [391.0, 535.0], [389.0, 726.0], [387.0, 258.0], [400.0, 433.0], [407.0, 556.5], [408.0, 643.5], [411.0, 558.3333333333333], [415.0, 540.5], [413.0, 268.0], [409.0, 795.25], [404.0, 759.5], [403.0, 754.6666666666666], [430.0, 735.0], [420.0, 468.0], [421.0, 252.0], [431.0, 256.0], [429.0, 218.0], [419.0, 255.0], [418.0, 264.0], [416.0, 265.0], [427.0, 227.0], [426.0, 233.0], [425.0, 239.0], [424.0, 249.0], [423.0, 247.0], [445.0, 347.2], [444.0, 297.25], [446.0, 377.2857142857143], [442.0, 557.75], [441.0, 425.25], [443.0, 562.0], [440.0, 593.0], [439.0, 311.4], [434.0, 446.0], [432.0, 279.0], [447.0, 268.0], [435.0, 246.0], [451.0, 261.8], [456.0, 475.0], [463.0, 555.25], [461.0, 638.0], [460.0, 515.0], [459.0, 634.0], [453.0, 249.0], [464.0, 353.0], [1.0, 3502.0]], "isOverall": false, "label": "Access Series Page", "isController": false}, {"data": [[248.22800000000018, 1515.3779999999988]], "isOverall": false, "label": "Access Series Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 464.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1925.0, "minX": 1.57232202E12, "maxY": 65775.6, "series": [{"data": [[1.57232202E12, 65775.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232202E12, 1925.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232202E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1515.3779999999988, "minX": 1.57232202E12, "maxY": 1515.3779999999988, "series": [{"data": [[1.57232202E12, 1515.3779999999988]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232202E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 715.5360000000004, "minX": 1.57232202E12, "maxY": 715.5360000000004, "series": [{"data": [[1.57232202E12, 715.5360000000004]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232202E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 428.916, "minX": 1.57232202E12, "maxY": 428.916, "series": [{"data": [[1.57232202E12, 428.916]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232202E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 216.0, "minX": 1.57232202E12, "maxY": 3682.0, "series": [{"data": [[1.57232202E12, 3682.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232202E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232202E12, 3020.7000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232202E12, 3561.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232202E12, 3062.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232202E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 346.5, "minX": 57.0, "maxY": 3060.0, "series": [{"data": [[66.0, 2696.0], [144.0, 346.5], [57.0, 3060.0], [233.0, 1526.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 233.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 222.0, "minX": 57.0, "maxY": 3035.0, "series": [{"data": [[66.0, 348.0], [144.0, 222.0], [57.0, 3035.0], [233.0, 348.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 233.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232202E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232202E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232202E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232202E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232202E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232202E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232202E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232202E12, 8.333333333333334]], "isOverall": false, "label": "Access Series Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232202E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232202E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232202E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232202E12, "title": "Total Transactions Per Second"}},
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

