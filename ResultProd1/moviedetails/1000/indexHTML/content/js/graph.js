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
        data: {"result": {"minY": 213.0, "minX": 0.0, "maxY": 3642.0, "series": [{"data": [[0.0, 213.0], [0.1, 214.0], [0.2, 214.0], [0.3, 214.0], [0.4, 222.0], [0.5, 229.0], [0.6, 229.0], [0.7, 229.0], [0.8, 229.0], [0.9, 229.0], [1.0, 231.0], [1.1, 233.0], [1.2, 233.0], [1.3, 235.0], [1.4, 236.0], [1.5, 241.0], [1.6, 246.0], [1.7, 246.0], [1.8, 246.0], [1.9, 247.0], [2.0, 248.0], [2.1, 249.0], [2.2, 250.0], [2.3, 250.0], [2.4, 251.0], [2.5, 251.0], [2.6, 251.0], [2.7, 253.0], [2.8, 254.0], [2.9, 254.0], [3.0, 254.0], [3.1, 255.0], [3.2, 255.0], [3.3, 255.0], [3.4, 255.0], [3.5, 255.0], [3.6, 256.0], [3.7, 256.0], [3.8, 256.0], [3.9, 256.0], [4.0, 256.0], [4.1, 256.0], [4.2, 257.0], [4.3, 257.0], [4.4, 258.0], [4.5, 258.0], [4.6, 259.0], [4.7, 259.0], [4.8, 259.0], [4.9, 259.0], [5.0, 259.0], [5.1, 259.0], [5.2, 260.0], [5.3, 260.0], [5.4, 260.0], [5.5, 260.0], [5.6, 261.0], [5.7, 261.0], [5.8, 261.0], [5.9, 262.0], [6.0, 262.0], [6.1, 262.0], [6.2, 262.0], [6.3, 263.0], [6.4, 263.0], [6.5, 263.0], [6.6, 264.0], [6.7, 264.0], [6.8, 264.0], [6.9, 264.0], [7.0, 264.0], [7.1, 264.0], [7.2, 265.0], [7.3, 265.0], [7.4, 266.0], [7.5, 266.0], [7.6, 266.0], [7.7, 267.0], [7.8, 267.0], [7.9, 267.0], [8.0, 267.0], [8.1, 267.0], [8.2, 267.0], [8.3, 268.0], [8.4, 269.0], [8.5, 269.0], [8.6, 270.0], [8.7, 270.0], [8.8, 270.0], [8.9, 270.0], [9.0, 270.0], [9.1, 270.0], [9.2, 271.0], [9.3, 271.0], [9.4, 271.0], [9.5, 272.0], [9.6, 272.0], [9.7, 272.0], [9.8, 272.0], [9.9, 273.0], [10.0, 273.0], [10.1, 273.0], [10.2, 273.0], [10.3, 274.0], [10.4, 275.0], [10.5, 275.0], [10.6, 277.0], [10.7, 278.0], [10.8, 279.0], [10.9, 280.0], [11.0, 281.0], [11.1, 281.0], [11.2, 281.0], [11.3, 281.0], [11.4, 282.0], [11.5, 282.0], [11.6, 282.0], [11.7, 283.0], [11.8, 283.0], [11.9, 283.0], [12.0, 284.0], [12.1, 284.0], [12.2, 284.0], [12.3, 284.0], [12.4, 285.0], [12.5, 285.0], [12.6, 285.0], [12.7, 285.0], [12.8, 286.0], [12.9, 286.0], [13.0, 286.0], [13.1, 286.0], [13.2, 286.0], [13.3, 287.0], [13.4, 287.0], [13.5, 287.0], [13.6, 287.0], [13.7, 287.0], [13.8, 289.0], [13.9, 289.0], [14.0, 289.0], [14.1, 289.0], [14.2, 291.0], [14.3, 292.0], [14.4, 293.0], [14.5, 294.0], [14.6, 294.0], [14.7, 294.0], [14.8, 294.0], [14.9, 295.0], [15.0, 295.0], [15.1, 295.0], [15.2, 295.0], [15.3, 296.0], [15.4, 297.0], [15.5, 298.0], [15.6, 298.0], [15.7, 299.0], [15.8, 300.0], [15.9, 300.0], [16.0, 301.0], [16.1, 301.0], [16.2, 301.0], [16.3, 301.0], [16.4, 302.0], [16.5, 304.0], [16.6, 306.0], [16.7, 306.0], [16.8, 310.0], [16.9, 310.0], [17.0, 311.0], [17.1, 312.0], [17.2, 312.0], [17.3, 314.0], [17.4, 315.0], [17.5, 316.0], [17.6, 318.0], [17.7, 320.0], [17.8, 320.0], [17.9, 321.0], [18.0, 322.0], [18.1, 322.0], [18.2, 323.0], [18.3, 323.0], [18.4, 324.0], [18.5, 324.0], [18.6, 325.0], [18.7, 325.0], [18.8, 326.0], [18.9, 326.0], [19.0, 326.0], [19.1, 326.0], [19.2, 326.0], [19.3, 327.0], [19.4, 327.0], [19.5, 327.0], [19.6, 328.0], [19.7, 328.0], [19.8, 328.0], [19.9, 329.0], [20.0, 330.0], [20.1, 330.0], [20.2, 330.0], [20.3, 330.0], [20.4, 330.0], [20.5, 330.0], [20.6, 330.0], [20.7, 330.0], [20.8, 330.0], [20.9, 331.0], [21.0, 331.0], [21.1, 331.0], [21.2, 332.0], [21.3, 332.0], [21.4, 332.0], [21.5, 333.0], [21.6, 333.0], [21.7, 334.0], [21.8, 334.0], [21.9, 336.0], [22.0, 336.0], [22.1, 341.0], [22.2, 344.0], [22.3, 348.0], [22.4, 348.0], [22.5, 349.0], [22.6, 350.0], [22.7, 351.0], [22.8, 352.0], [22.9, 352.0], [23.0, 352.0], [23.1, 353.0], [23.2, 354.0], [23.3, 355.0], [23.4, 358.0], [23.5, 359.0], [23.6, 359.0], [23.7, 360.0], [23.8, 360.0], [23.9, 360.0], [24.0, 361.0], [24.1, 362.0], [24.2, 364.0], [24.3, 367.0], [24.4, 370.0], [24.5, 371.0], [24.6, 374.0], [24.7, 376.0], [24.8, 377.0], [24.9, 378.0], [25.0, 379.0], [25.1, 381.0], [25.2, 385.0], [25.3, 388.0], [25.4, 390.0], [25.5, 390.0], [25.6, 405.0], [25.7, 421.0], [25.8, 425.0], [25.9, 428.0], [26.0, 430.0], [26.1, 430.0], [26.2, 433.0], [26.3, 433.0], [26.4, 436.0], [26.5, 437.0], [26.6, 438.0], [26.7, 438.0], [26.8, 439.0], [26.9, 439.0], [27.0, 440.0], [27.1, 440.0], [27.2, 440.0], [27.3, 443.0], [27.4, 443.0], [27.5, 443.0], [27.6, 445.0], [27.7, 445.0], [27.8, 447.0], [27.9, 448.0], [28.0, 448.0], [28.1, 449.0], [28.2, 451.0], [28.3, 452.0], [28.4, 452.0], [28.5, 452.0], [28.6, 452.0], [28.7, 455.0], [28.8, 455.0], [28.9, 456.0], [29.0, 456.0], [29.1, 457.0], [29.2, 457.0], [29.3, 457.0], [29.4, 458.0], [29.5, 458.0], [29.6, 459.0], [29.7, 460.0], [29.8, 460.0], [29.9, 460.0], [30.0, 460.0], [30.1, 460.0], [30.2, 460.0], [30.3, 461.0], [30.4, 461.0], [30.5, 461.0], [30.6, 462.0], [30.7, 462.0], [30.8, 462.0], [30.9, 463.0], [31.0, 463.0], [31.1, 464.0], [31.2, 465.0], [31.3, 465.0], [31.4, 469.0], [31.5, 469.0], [31.6, 469.0], [31.7, 470.0], [31.8, 471.0], [31.9, 474.0], [32.0, 477.0], [32.1, 478.0], [32.2, 478.0], [32.3, 484.0], [32.4, 484.0], [32.5, 484.0], [32.6, 485.0], [32.7, 487.0], [32.8, 487.0], [32.9, 488.0], [33.0, 490.0], [33.1, 491.0], [33.2, 492.0], [33.3, 495.0], [33.4, 495.0], [33.5, 499.0], [33.6, 500.0], [33.7, 504.0], [33.8, 506.0], [33.9, 508.0], [34.0, 511.0], [34.1, 511.0], [34.2, 513.0], [34.3, 518.0], [34.4, 521.0], [34.5, 521.0], [34.6, 522.0], [34.7, 522.0], [34.8, 522.0], [34.9, 522.0], [35.0, 523.0], [35.1, 525.0], [35.2, 525.0], [35.3, 529.0], [35.4, 530.0], [35.5, 530.0], [35.6, 530.0], [35.7, 530.0], [35.8, 530.0], [35.9, 531.0], [36.0, 532.0], [36.1, 532.0], [36.2, 532.0], [36.3, 533.0], [36.4, 534.0], [36.5, 534.0], [36.6, 535.0], [36.7, 540.0], [36.8, 542.0], [36.9, 544.0], [37.0, 551.0], [37.1, 552.0], [37.2, 553.0], [37.3, 553.0], [37.4, 554.0], [37.5, 555.0], [37.6, 555.0], [37.7, 556.0], [37.8, 558.0], [37.9, 558.0], [38.0, 558.0], [38.1, 559.0], [38.2, 559.0], [38.3, 561.0], [38.4, 562.0], [38.5, 567.0], [38.6, 567.0], [38.7, 568.0], [38.8, 570.0], [38.9, 573.0], [39.0, 573.0], [39.1, 573.0], [39.2, 573.0], [39.3, 573.0], [39.4, 573.0], [39.5, 574.0], [39.6, 574.0], [39.7, 574.0], [39.8, 574.0], [39.9, 574.0], [40.0, 574.0], [40.1, 576.0], [40.2, 576.0], [40.3, 578.0], [40.4, 584.0], [40.5, 585.0], [40.6, 589.0], [40.7, 590.0], [40.8, 590.0], [40.9, 590.0], [41.0, 591.0], [41.1, 591.0], [41.2, 591.0], [41.3, 592.0], [41.4, 592.0], [41.5, 593.0], [41.6, 593.0], [41.7, 593.0], [41.8, 597.0], [41.9, 598.0], [42.0, 599.0], [42.1, 599.0], [42.2, 600.0], [42.3, 600.0], [42.4, 600.0], [42.5, 601.0], [42.6, 602.0], [42.7, 602.0], [42.8, 603.0], [42.9, 604.0], [43.0, 604.0], [43.1, 605.0], [43.2, 605.0], [43.3, 606.0], [43.4, 607.0], [43.5, 607.0], [43.6, 607.0], [43.7, 608.0], [43.8, 608.0], [43.9, 609.0], [44.0, 609.0], [44.1, 609.0], [44.2, 610.0], [44.3, 610.0], [44.4, 610.0], [44.5, 610.0], [44.6, 611.0], [44.7, 612.0], [44.8, 612.0], [44.9, 614.0], [45.0, 614.0], [45.1, 614.0], [45.2, 615.0], [45.3, 615.0], [45.4, 615.0], [45.5, 616.0], [45.6, 616.0], [45.7, 617.0], [45.8, 618.0], [45.9, 618.0], [46.0, 620.0], [46.1, 622.0], [46.2, 622.0], [46.3, 622.0], [46.4, 622.0], [46.5, 624.0], [46.6, 625.0], [46.7, 626.0], [46.8, 627.0], [46.9, 629.0], [47.0, 629.0], [47.1, 629.0], [47.2, 630.0], [47.3, 630.0], [47.4, 630.0], [47.5, 630.0], [47.6, 630.0], [47.7, 630.0], [47.8, 630.0], [47.9, 631.0], [48.0, 631.0], [48.1, 632.0], [48.2, 633.0], [48.3, 633.0], [48.4, 634.0], [48.5, 635.0], [48.6, 636.0], [48.7, 636.0], [48.8, 638.0], [48.9, 638.0], [49.0, 642.0], [49.1, 643.0], [49.2, 644.0], [49.3, 644.0], [49.4, 645.0], [49.5, 648.0], [49.6, 648.0], [49.7, 650.0], [49.8, 652.0], [49.9, 654.0], [50.0, 655.0], [50.1, 656.0], [50.2, 656.0], [50.3, 657.0], [50.4, 659.0], [50.5, 663.0], [50.6, 669.0], [50.7, 669.0], [50.8, 671.0], [50.9, 674.0], [51.0, 674.0], [51.1, 677.0], [51.2, 678.0], [51.3, 682.0], [51.4, 684.0], [51.5, 688.0], [51.6, 688.0], [51.7, 689.0], [51.8, 690.0], [51.9, 691.0], [52.0, 691.0], [52.1, 692.0], [52.2, 692.0], [52.3, 696.0], [52.4, 699.0], [52.5, 700.0], [52.6, 701.0], [52.7, 701.0], [52.8, 701.0], [52.9, 701.0], [53.0, 701.0], [53.1, 702.0], [53.2, 703.0], [53.3, 703.0], [53.4, 703.0], [53.5, 703.0], [53.6, 705.0], [53.7, 708.0], [53.8, 710.0], [53.9, 710.0], [54.0, 711.0], [54.1, 712.0], [54.2, 712.0], [54.3, 717.0], [54.4, 720.0], [54.5, 729.0], [54.6, 730.0], [54.7, 732.0], [54.8, 732.0], [54.9, 735.0], [55.0, 736.0], [55.1, 742.0], [55.2, 757.0], [55.3, 759.0], [55.4, 765.0], [55.5, 766.0], [55.6, 793.0], [55.7, 800.0], [55.8, 803.0], [55.9, 813.0], [56.0, 814.0], [56.1, 816.0], [56.2, 825.0], [56.3, 828.0], [56.4, 837.0], [56.5, 837.0], [56.6, 837.0], [56.7, 838.0], [56.8, 838.0], [56.9, 840.0], [57.0, 840.0], [57.1, 842.0], [57.2, 843.0], [57.3, 844.0], [57.4, 854.0], [57.5, 859.0], [57.6, 859.0], [57.7, 860.0], [57.8, 878.0], [57.9, 879.0], [58.0, 881.0], [58.1, 882.0], [58.2, 883.0], [58.3, 884.0], [58.4, 885.0], [58.5, 886.0], [58.6, 888.0], [58.7, 889.0], [58.8, 890.0], [58.9, 890.0], [59.0, 891.0], [59.1, 893.0], [59.2, 898.0], [59.3, 899.0], [59.4, 902.0], [59.5, 907.0], [59.6, 914.0], [59.7, 922.0], [59.8, 927.0], [59.9, 1035.0], [60.0, 1035.0], [60.1, 1036.0], [60.2, 1039.0], [60.3, 1075.0], [60.4, 1095.0], [60.5, 1097.0], [60.6, 1115.0], [60.7, 1169.0], [60.8, 1179.0], [60.9, 1181.0], [61.0, 1183.0], [61.1, 1184.0], [61.2, 1187.0], [61.3, 1187.0], [61.4, 1187.0], [61.5, 1192.0], [61.6, 1197.0], [61.7, 1198.0], [61.8, 1199.0], [61.9, 1200.0], [62.0, 1200.0], [62.1, 1203.0], [62.2, 1204.0], [62.3, 1210.0], [62.4, 1238.0], [62.5, 1242.0], [62.6, 1245.0], [62.7, 1248.0], [62.8, 1251.0], [62.9, 1252.0], [63.0, 1252.0], [63.1, 1257.0], [63.2, 1262.0], [63.3, 1265.0], [63.4, 1266.0], [63.5, 1266.0], [63.6, 1266.0], [63.7, 1267.0], [63.8, 1267.0], [63.9, 1267.0], [64.0, 1268.0], [64.1, 1269.0], [64.2, 1272.0], [64.3, 1274.0], [64.4, 1278.0], [64.5, 1279.0], [64.6, 1284.0], [64.7, 1286.0], [64.8, 1286.0], [64.9, 1286.0], [65.0, 1287.0], [65.1, 1288.0], [65.2, 1289.0], [65.3, 1289.0], [65.4, 1291.0], [65.5, 1293.0], [65.6, 1295.0], [65.7, 1295.0], [65.8, 1297.0], [65.9, 1303.0], [66.0, 1311.0], [66.1, 1322.0], [66.2, 1331.0], [66.3, 1374.0], [66.4, 1374.0], [66.5, 1376.0], [66.6, 1378.0], [66.7, 1379.0], [66.8, 1379.0], [66.9, 1387.0], [67.0, 1393.0], [67.1, 1398.0], [67.2, 1398.0], [67.3, 1399.0], [67.4, 1403.0], [67.5, 1406.0], [67.6, 1415.0], [67.7, 1417.0], [67.8, 1418.0], [67.9, 1418.0], [68.0, 1425.0], [68.1, 1434.0], [68.2, 1434.0], [68.3, 1435.0], [68.4, 1441.0], [68.5, 1442.0], [68.6, 1443.0], [68.7, 1444.0], [68.8, 1448.0], [68.9, 1453.0], [69.0, 1455.0], [69.1, 1455.0], [69.2, 1455.0], [69.3, 1457.0], [69.4, 1458.0], [69.5, 1459.0], [69.6, 1459.0], [69.7, 1460.0], [69.8, 1461.0], [69.9, 1463.0], [70.0, 1467.0], [70.1, 1468.0], [70.2, 1470.0], [70.3, 1471.0], [70.4, 1476.0], [70.5, 1476.0], [70.6, 1481.0], [70.7, 1489.0], [70.8, 1491.0], [70.9, 1492.0], [71.0, 1504.0], [71.1, 1506.0], [71.2, 1513.0], [71.3, 1515.0], [71.4, 1515.0], [71.5, 1515.0], [71.6, 1517.0], [71.7, 1522.0], [71.8, 1522.0], [71.9, 1531.0], [72.0, 1531.0], [72.1, 1532.0], [72.2, 1534.0], [72.3, 1539.0], [72.4, 1540.0], [72.5, 1544.0], [72.6, 1544.0], [72.7, 1545.0], [72.8, 1545.0], [72.9, 1552.0], [73.0, 1552.0], [73.1, 1555.0], [73.2, 1556.0], [73.3, 1558.0], [73.4, 1558.0], [73.5, 1559.0], [73.6, 1559.0], [73.7, 1561.0], [73.8, 1578.0], [73.9, 1589.0], [74.0, 1596.0], [74.1, 1597.0], [74.2, 1600.0], [74.3, 1603.0], [74.4, 1607.0], [74.5, 1607.0], [74.6, 1609.0], [74.7, 1613.0], [74.8, 1615.0], [74.9, 1618.0], [75.0, 1618.0], [75.1, 1619.0], [75.2, 1620.0], [75.3, 1620.0], [75.4, 1622.0], [75.5, 1629.0], [75.6, 1636.0], [75.7, 1636.0], [75.8, 1636.0], [75.9, 1637.0], [76.0, 1637.0], [76.1, 1638.0], [76.2, 1638.0], [76.3, 1639.0], [76.4, 1640.0], [76.5, 1643.0], [76.6, 1644.0], [76.7, 1645.0], [76.8, 1648.0], [76.9, 1649.0], [77.0, 1650.0], [77.1, 1650.0], [77.2, 1650.0], [77.3, 1651.0], [77.4, 1652.0], [77.5, 1654.0], [77.6, 1655.0], [77.7, 1655.0], [77.8, 1655.0], [77.9, 1657.0], [78.0, 1657.0], [78.1, 1658.0], [78.2, 1660.0], [78.3, 1663.0], [78.4, 1667.0], [78.5, 1668.0], [78.6, 1669.0], [78.7, 1671.0], [78.8, 1675.0], [78.9, 1678.0], [79.0, 1681.0], [79.1, 1682.0], [79.2, 1682.0], [79.3, 1683.0], [79.4, 1684.0], [79.5, 1693.0], [79.6, 1694.0], [79.7, 1695.0], [79.8, 1696.0], [79.9, 1703.0], [80.0, 1704.0], [80.1, 1707.0], [80.2, 1709.0], [80.3, 1710.0], [80.4, 1710.0], [80.5, 1716.0], [80.6, 1716.0], [80.7, 1717.0], [80.8, 1725.0], [80.9, 1738.0], [81.0, 1761.0], [81.1, 1762.0], [81.2, 1762.0], [81.3, 1762.0], [81.4, 1770.0], [81.5, 1772.0], [81.6, 1774.0], [81.7, 1783.0], [81.8, 1794.0], [81.9, 1809.0], [82.0, 1810.0], [82.1, 1824.0], [82.2, 1826.0], [82.3, 1830.0], [82.4, 1835.0], [82.5, 1839.0], [82.6, 1840.0], [82.7, 1841.0], [82.8, 1842.0], [82.9, 1871.0], [83.0, 1882.0], [83.1, 1886.0], [83.2, 1887.0], [83.3, 1888.0], [83.4, 1890.0], [83.5, 1891.0], [83.6, 1911.0], [83.7, 1913.0], [83.8, 1917.0], [83.9, 1920.0], [84.0, 1934.0], [84.1, 1938.0], [84.2, 1979.0], [84.3, 1997.0], [84.4, 2011.0], [84.5, 2015.0], [84.6, 2017.0], [84.7, 2017.0], [84.8, 2019.0], [84.9, 2025.0], [85.0, 2026.0], [85.1, 2029.0], [85.2, 2030.0], [85.3, 2032.0], [85.4, 2035.0], [85.5, 2036.0], [85.6, 2037.0], [85.7, 2037.0], [85.8, 2038.0], [85.9, 2038.0], [86.0, 2041.0], [86.1, 2041.0], [86.2, 2041.0], [86.3, 2041.0], [86.4, 2041.0], [86.5, 2041.0], [86.6, 2042.0], [86.7, 2062.0], [86.8, 2064.0], [86.9, 2067.0], [87.0, 2069.0], [87.1, 2073.0], [87.2, 2073.0], [87.3, 2078.0], [87.4, 2083.0], [87.5, 2084.0], [87.6, 2084.0], [87.7, 2087.0], [87.8, 2089.0], [87.9, 2089.0], [88.0, 2089.0], [88.1, 2090.0], [88.2, 2090.0], [88.3, 2090.0], [88.4, 2090.0], [88.5, 2090.0], [88.6, 2090.0], [88.7, 2094.0], [88.8, 2096.0], [88.9, 2096.0], [89.0, 2096.0], [89.1, 2096.0], [89.2, 2100.0], [89.3, 2102.0], [89.4, 2102.0], [89.5, 2107.0], [89.6, 2110.0], [89.7, 2113.0], [89.8, 2113.0], [89.9, 2116.0], [90.0, 2119.0], [90.1, 2120.0], [90.2, 2129.0], [90.3, 2130.0], [90.4, 2133.0], [90.5, 2152.0], [90.6, 2180.0], [90.7, 2207.0], [90.8, 2210.0], [90.9, 2461.0], [91.0, 2462.0], [91.1, 2473.0], [91.2, 2548.0], [91.3, 2574.0], [91.4, 2584.0], [91.5, 2620.0], [91.6, 2620.0], [91.7, 2621.0], [91.8, 2625.0], [91.9, 2629.0], [92.0, 2629.0], [92.1, 2630.0], [92.2, 2630.0], [92.3, 2637.0], [92.4, 2638.0], [92.5, 2639.0], [92.6, 2639.0], [92.7, 2661.0], [92.8, 2662.0], [92.9, 2673.0], [93.0, 2688.0], [93.1, 2690.0], [93.2, 2696.0], [93.3, 2803.0], [93.4, 2810.0], [93.5, 2812.0], [93.6, 3011.0], [93.7, 3011.0], [93.8, 3013.0], [93.9, 3017.0], [94.0, 3019.0], [94.1, 3020.0], [94.2, 3020.0], [94.3, 3021.0], [94.4, 3021.0], [94.5, 3021.0], [94.6, 3022.0], [94.7, 3023.0], [94.8, 3023.0], [94.9, 3024.0], [95.0, 3024.0], [95.1, 3024.0], [95.2, 3024.0], [95.3, 3025.0], [95.4, 3025.0], [95.5, 3025.0], [95.6, 3025.0], [95.7, 3026.0], [95.8, 3027.0], [95.9, 3027.0], [96.0, 3028.0], [96.1, 3029.0], [96.2, 3030.0], [96.3, 3030.0], [96.4, 3030.0], [96.5, 3030.0], [96.6, 3031.0], [96.7, 3032.0], [96.8, 3032.0], [96.9, 3032.0], [97.0, 3032.0], [97.1, 3035.0], [97.2, 3037.0], [97.3, 3037.0], [97.4, 3037.0], [97.5, 3038.0], [97.6, 3038.0], [97.7, 3038.0], [97.8, 3038.0], [97.9, 3039.0], [98.0, 3039.0], [98.1, 3040.0], [98.2, 3041.0], [98.3, 3044.0], [98.4, 3047.0], [98.5, 3048.0], [98.6, 3056.0], [98.7, 3061.0], [98.8, 3071.0], [98.9, 3072.0], [99.0, 3074.0], [99.1, 3076.0], [99.2, 3086.0], [99.3, 3088.0], [99.4, 3515.0], [99.5, 3575.0], [99.6, 3631.0], [99.7, 3632.0], [99.8, 3638.0], [99.9, 3642.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 158.0, "series": [{"data": [[600.0, 103.0], [700.0, 32.0], [800.0, 37.0], [900.0, 5.0], [1000.0, 7.0], [1100.0, 13.0], [1200.0, 40.0], [1300.0, 15.0], [1400.0, 36.0], [1500.0, 32.0], [1600.0, 58.0], [1700.0, 20.0], [1800.0, 17.0], [1900.0, 8.0], [2000.0, 48.0], [2100.0, 15.0], [2200.0, 2.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 18.0], [2800.0, 3.0], [3000.0, 58.0], [200.0, 158.0], [3500.0, 2.0], [3600.0, 4.0], [300.0, 97.0], [400.0, 80.0], [500.0, 86.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 291.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 373.0, "series": [{"data": [[0.0, 336.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 373.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 291.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 364.6659999999997, "minX": 1.57232364E12, "maxY": 364.6659999999997, "series": [{"data": [[1.57232364E12, 364.6659999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232364E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 231.0, "minX": 2.0, "maxY": 3642.0, "series": [{"data": [[2.0, 3044.0], [3.0, 3011.0], [4.0, 3017.0], [5.0, 3021.0], [6.0, 3025.0], [8.0, 3023.5], [10.0, 3022.0], [11.0, 3024.0], [12.0, 3021.0], [14.0, 3023.0], [15.0, 3026.0], [19.0, 3034.25], [21.0, 3038.0], [22.0, 3048.0], [23.0, 3024.0], [24.0, 3032.0], [25.0, 3011.0], [26.0, 3013.0], [27.0, 3019.0], [28.0, 3037.0], [29.0, 3038.0], [31.0, 3029.5], [33.0, 3030.0], [32.0, 3032.0], [34.0, 3035.0], [36.0, 3035.5], [39.0, 3025.0], [38.0, 3030.5], [41.0, 3515.0], [40.0, 3040.0], [43.0, 3071.5], [44.0, 3642.0], [46.0, 3631.5], [49.0, 3575.0], [48.0, 3087.0], [51.0, 3023.0], [50.0, 3638.0], [52.0, 3020.0], [55.0, 3037.0], [54.0, 3026.5], [56.0, 3024.0], [58.0, 3025.5], [61.0, 3061.0], [60.0, 3040.5], [63.0, 3074.0], [62.0, 3056.0], [64.0, 3076.0], [70.0, 1515.0], [69.0, 2749.6], [74.0, 1262.0], [77.0, 2584.0], [76.0, 1249.6], [83.0, 2567.4], [81.0, 2639.0], [87.0, 2629.5], [89.0, 2673.0], [93.0, 2625.0], [92.0, 2637.75], [99.0, 1311.0], [98.0, 1238.0], [97.0, 1295.0], [96.0, 2644.0], [103.0, 1265.0], [102.0, 1268.0], [100.0, 1268.0], [107.0, 1257.0], [106.0, 2473.0], [105.0, 1266.0], [104.0, 1267.0], [110.0, 1279.0], [109.0, 2574.0], [108.0, 1287.0], [115.0, 1187.0], [114.0, 1286.0], [113.0, 1281.3333333333333], [119.0, 1522.0], [118.0, 1378.0], [117.0, 1198.0], [116.0, 1471.0], [123.0, 1274.0], [122.0, 1115.0], [121.0, 1097.0], [120.0, 1095.0], [127.0, 1600.0], [126.0, 1322.0], [125.0, 1293.0], [135.0, 1284.0], [134.0, 1289.0], [133.0, 1255.6], [128.0, 1075.0], [139.0, 1185.5], [137.0, 1513.0], [136.0, 1303.0], [149.0, 1354.4], [146.0, 1269.2], [157.0, 1517.8], [154.0, 1516.0], [152.0, 1522.0], [167.0, 1896.5], [165.0, 1531.0], [166.0, 1615.0], [173.0, 1276.4285714285713], [172.0, 1457.0], [182.0, 1320.3333333333333], [181.0, 1267.0], [180.0, 1467.0], [179.0, 2025.0], [178.0, 2152.0], [177.0, 2208.5], [189.0, 955.6666666666666], [188.0, 729.0], [186.0, 733.5], [185.0, 736.0], [192.0, 1501.6666666666667], [215.0, 973.5], [213.0, 1762.4], [222.0, 1415.0], [221.0, 1418.0], [220.0, 1403.0], [218.0, 1396.0], [216.0, 1183.0], [226.0, 1707.0], [225.0, 1702.5], [224.0, 1710.0], [243.0, 2090.0], [242.0, 1641.5454545454547], [255.0, 1899.5714285714287], [253.0, 859.0], [252.0, 1904.0], [268.0, 967.0], [264.0, 883.0], [263.0, 887.0], [262.0, 890.5], [261.0, 896.4], [259.0, 907.0], [257.0, 1074.3333333333333], [284.0, 1935.3333333333333], [285.0, 2129.0], [282.0, 2120.0], [280.0, 2100.0], [278.0, 1376.5], [277.0, 1418.5], [275.0, 1453.0], [273.0, 1402.5], [300.0, 1884.0], [288.0, 2085.5], [317.0, 1398.0], [315.0, 1379.0], [313.0, 1896.5], [334.0, 1868.0], [332.0, 1669.0], [330.0, 1645.5], [328.0, 1654.0], [326.0, 1555.0], [349.0, 1651.0], [348.0, 364.0], [346.0, 1986.4482758620688], [345.0, 1331.5], [343.0, 837.0], [342.0, 838.0], [341.0, 1887.0], [339.0, 1374.5], [336.0, 2025.3333333333333], [358.0, 1683.6666666666667], [357.0, 1677.857142857143], [382.0, 978.25], [378.0, 1763.25], [377.0, 1707.6666666666667], [373.0, 1772.0], [372.0, 1174.4], [398.0, 612.3333333333334], [394.0, 602.6], [396.0, 974.0], [395.0, 520.8], [393.0, 320.0], [391.0, 324.0], [399.0, 1644.25], [388.0, 1669.0], [385.0, 1224.6666666666667], [412.0, 844.0], [400.0, 669.6666666666666], [413.0, 733.3333333333334], [411.0, 1254.75], [410.0, 1199.6666666666667], [409.0, 719.0], [415.0, 1648.0], [407.0, 328.0], [406.0, 326.0], [404.0, 905.5], [403.0, 325.0], [402.0, 940.8333333333334], [418.0, 350.25], [431.0, 701.0], [428.0, 438.0], [419.0, 1603.75], [430.0, 231.0], [429.0, 693.0], [426.0, 1032.5], [425.0, 610.0], [424.0, 1230.3333333333333], [423.0, 454.0], [420.0, 449.5], [422.0, 1569.6666666666667], [417.0, 515.3333333333334], [416.0, 599.0], [433.0, 817.625], [447.0, 433.88235294117646], [441.0, 538.3333333333334], [440.0, 1646.3333333333333], [443.0, 727.5], [442.0, 448.5], [446.0, 510.8], [432.0, 649.1666666666666], [437.0, 713.625], [438.0, 540.0], [436.0, 676.4], [435.0, 1299.6666666666667], [434.0, 457.0], [444.0, 862.2], [445.0, 284.3333333333333], [451.0, 423.8], [462.0, 553.0], [460.0, 519.3333333333334], [461.0, 283.0], [458.0, 498.25], [459.0, 875.5], [457.0, 645.1666666666667], [456.0, 543.5], [463.0, 260.0], [455.0, 591.25], [453.0, 592.0], [452.0, 260.5], [454.0, 426.6666666666667], [450.0, 421.875], [449.0, 595.75], [448.0, 498.00000000000006], [478.0, 457.44444444444446], [472.0, 374.07692307692315], [473.0, 450.33333333333337], [479.0, 586.0909090909091], [477.0, 596.0], [474.0, 607.0909090909091], [475.0, 336.25], [476.0, 587.1428571428572], [471.0, 412.25], [467.0, 405.2], [466.0, 535.0], [465.0, 320.5], [464.0, 280.0], [470.0, 817.0], [469.0, 1454.0], [494.0, 356.59999999999997], [495.0, 377.6], [492.0, 404.6], [493.0, 364.2307692307692], [483.0, 376.0], [481.0, 338.6666666666667], [491.0, 436.1666666666667], [490.0, 490.2], [489.0, 429.25], [488.0, 379.6666666666667], [486.0, 551.0], [487.0, 402.4], [480.0, 414.14285714285717], [485.0, 559.0], [484.0, 496.0], [499.0, 332.0], [511.0, 295.5], [508.0, 354.1428571428571], [510.0, 269.5], [507.0, 329.6666666666667], [506.0, 305.3333333333333], [505.0, 302.14285714285717], [502.0, 408.0], [501.0, 330.0], [497.0, 426.0], [496.0, 328.1428571428571], [498.0, 422.0], [514.0, 406.5], [515.0, 461.66666666666663], [516.0, 272.0], [512.0, 343.85714285714283], [513.0, 313.0], [517.0, 271.3333333333333], [522.0, 268.0], [527.0, 310.27272727272725], [526.0, 508.6], [525.0, 281.0], [524.0, 703.0], [521.0, 407.57142857142856], [519.0, 265.5], [518.0, 405.0], [536.0, 622.0], [538.0, 319.12500000000006], [537.0, 476.0], [541.0, 285.0], [540.0, 285.0], [543.0, 287.0], [528.0, 880.8333333333333], [529.0, 298.0], [532.0, 677.0], [531.0, 488.4], [530.0, 489.5], [535.0, 282.0], [534.0, 657.3333333333334], [542.0, 287.0], [544.0, 289.3333333333333]], "isOverall": false, "label": "Access Detail Movie", "isController": false}, {"data": [[364.6629999999999, 1060.7820000000002]], "isOverall": false, "label": "Access Detail Movie-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 544.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4450.0, "minX": 1.57232364E12, "maxY": 132140.83333333334, "series": [{"data": [[1.57232364E12, 132140.83333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232364E12, 4450.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232364E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1060.7820000000002, "minX": 1.57232364E12, "maxY": 1060.7820000000002, "series": [{"data": [[1.57232364E12, 1060.7820000000002]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232364E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 548.009, "minX": 1.57232364E12, "maxY": 548.009, "series": [{"data": [[1.57232364E12, 548.009]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232364E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 308.9899999999996, "minX": 1.57232364E12, "maxY": 308.9899999999996, "series": [{"data": [[1.57232364E12, 308.9899999999996]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232364E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 213.0, "minX": 1.57232364E12, "maxY": 3642.0, "series": [{"data": [[1.57232364E12, 3642.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232364E12, 213.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232364E12, 2118.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232364E12, 3073.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232364E12, 3024.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232364E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 329.0, "minX": 24.0, "maxY": 3037.0, "series": [{"data": [[282.0, 1515.0], [318.0, 329.0], [40.0, 3037.0], [336.0, 551.5], [24.0, 3025.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 336.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 214.0, "minX": 24.0, "maxY": 3020.0, "series": [{"data": [[282.0, 401.5], [318.0, 214.0], [40.0, 3020.0], [336.0, 374.0], [24.0, 3016.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 336.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232364E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232364E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232364E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232364E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232364E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232364E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232364E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232364E12, 16.666666666666668]], "isOverall": false, "label": "Access Detail Movie-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232364E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232364E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232364E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232364E12, "title": "Total Transactions Per Second"}},
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

