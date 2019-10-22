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
        data: {"result": {"minY": 325.0, "minX": 0.0, "maxY": 3706.0, "series": [{"data": [[0.0, 325.0], [0.1, 325.0], [0.2, 325.0], [0.3, 325.0], [0.4, 332.0], [0.5, 332.0], [0.6, 332.0], [0.7, 368.0], [0.8, 368.0], [0.9, 368.0], [1.0, 385.0], [1.1, 385.0], [1.2, 385.0], [1.3, 385.0], [1.4, 393.0], [1.5, 393.0], [1.6, 393.0], [1.7, 395.0], [1.8, 395.0], [1.9, 395.0], [2.0, 410.0], [2.1, 410.0], [2.2, 410.0], [2.3, 410.0], [2.4, 412.0], [2.5, 412.0], [2.6, 412.0], [2.7, 419.0], [2.8, 419.0], [2.9, 419.0], [3.0, 425.0], [3.1, 425.0], [3.2, 425.0], [3.3, 425.0], [3.4, 427.0], [3.5, 427.0], [3.6, 427.0], [3.7, 432.0], [3.8, 432.0], [3.9, 432.0], [4.0, 435.0], [4.1, 435.0], [4.2, 435.0], [4.3, 435.0], [4.4, 439.0], [4.5, 439.0], [4.6, 439.0], [4.7, 469.0], [4.8, 469.0], [4.9, 469.0], [5.0, 486.0], [5.1, 486.0], [5.2, 486.0], [5.3, 486.0], [5.4, 490.0], [5.5, 490.0], [5.6, 490.0], [5.7, 491.0], [5.8, 491.0], [5.9, 491.0], [6.0, 502.0], [6.1, 502.0], [6.2, 502.0], [6.3, 502.0], [6.4, 504.0], [6.5, 504.0], [6.6, 504.0], [6.7, 504.0], [6.8, 504.0], [6.9, 504.0], [7.0, 513.0], [7.1, 513.0], [7.2, 513.0], [7.3, 513.0], [7.4, 515.0], [7.5, 515.0], [7.6, 515.0], [7.7, 531.0], [7.8, 531.0], [7.9, 531.0], [8.0, 584.0], [8.1, 584.0], [8.2, 584.0], [8.3, 584.0], [8.4, 601.0], [8.5, 601.0], [8.6, 601.0], [8.7, 619.0], [8.8, 619.0], [8.9, 619.0], [9.0, 622.0], [9.1, 622.0], [9.2, 622.0], [9.3, 622.0], [9.4, 631.0], [9.5, 631.0], [9.6, 631.0], [9.7, 632.0], [9.8, 632.0], [9.9, 632.0], [10.0, 636.0], [10.1, 636.0], [10.2, 636.0], [10.3, 636.0], [10.4, 643.0], [10.5, 643.0], [10.6, 643.0], [10.7, 646.0], [10.8, 646.0], [10.9, 646.0], [11.0, 646.0], [11.1, 648.0], [11.2, 648.0], [11.3, 648.0], [11.4, 663.0], [11.5, 663.0], [11.6, 663.0], [11.7, 681.0], [11.8, 681.0], [11.9, 681.0], [12.0, 681.0], [12.1, 683.0], [12.2, 683.0], [12.3, 683.0], [12.4, 683.0], [12.5, 683.0], [12.6, 683.0], [12.7, 684.0], [12.8, 684.0], [12.9, 684.0], [13.0, 684.0], [13.1, 684.0], [13.2, 684.0], [13.3, 684.0], [13.4, 693.0], [13.5, 693.0], [13.6, 693.0], [13.7, 697.0], [13.8, 697.0], [13.9, 697.0], [14.0, 697.0], [14.1, 709.0], [14.2, 709.0], [14.3, 709.0], [14.4, 710.0], [14.5, 710.0], [14.6, 710.0], [14.7, 713.0], [14.8, 713.0], [14.9, 713.0], [15.0, 713.0], [15.1, 714.0], [15.2, 714.0], [15.3, 714.0], [15.4, 714.0], [15.5, 714.0], [15.6, 714.0], [15.7, 723.0], [15.8, 723.0], [15.9, 723.0], [16.0, 723.0], [16.1, 726.0], [16.2, 726.0], [16.3, 726.0], [16.4, 727.0], [16.5, 727.0], [16.6, 727.0], [16.7, 729.0], [16.8, 729.0], [16.9, 729.0], [17.0, 729.0], [17.1, 729.0], [17.2, 729.0], [17.3, 729.0], [17.4, 729.0], [17.5, 729.0], [17.6, 729.0], [17.7, 732.0], [17.8, 732.0], [17.9, 732.0], [18.0, 737.0], [18.1, 737.0], [18.2, 737.0], [18.3, 737.0], [18.4, 738.0], [18.5, 738.0], [18.6, 738.0], [18.7, 738.0], [18.8, 738.0], [18.9, 738.0], [19.0, 743.0], [19.1, 743.0], [19.2, 743.0], [19.3, 743.0], [19.4, 745.0], [19.5, 745.0], [19.6, 745.0], [19.7, 747.0], [19.8, 747.0], [19.9, 747.0], [20.0, 747.0], [20.1, 747.0], [20.2, 747.0], [20.3, 747.0], [20.4, 754.0], [20.5, 754.0], [20.6, 754.0], [20.7, 760.0], [20.8, 760.0], [20.9, 760.0], [21.0, 767.0], [21.1, 767.0], [21.2, 767.0], [21.3, 767.0], [21.4, 771.0], [21.5, 771.0], [21.6, 771.0], [21.7, 774.0], [21.8, 774.0], [21.9, 774.0], [22.0, 775.0], [22.1, 775.0], [22.2, 775.0], [22.3, 775.0], [22.4, 784.0], [22.5, 784.0], [22.6, 784.0], [22.7, 787.0], [22.8, 787.0], [22.9, 787.0], [23.0, 793.0], [23.1, 793.0], [23.2, 793.0], [23.3, 793.0], [23.4, 797.0], [23.5, 797.0], [23.6, 797.0], [23.7, 798.0], [23.8, 798.0], [23.9, 798.0], [24.0, 801.0], [24.1, 801.0], [24.2, 801.0], [24.3, 801.0], [24.4, 802.0], [24.5, 802.0], [24.6, 802.0], [24.7, 806.0], [24.8, 806.0], [24.9, 806.0], [25.0, 806.0], [25.1, 806.0], [25.2, 806.0], [25.3, 806.0], [25.4, 807.0], [25.5, 807.0], [25.6, 807.0], [25.7, 808.0], [25.8, 808.0], [25.9, 808.0], [26.0, 810.0], [26.1, 810.0], [26.2, 810.0], [26.3, 810.0], [26.4, 812.0], [26.5, 812.0], [26.6, 812.0], [26.7, 819.0], [26.8, 819.0], [26.9, 819.0], [27.0, 823.0], [27.1, 823.0], [27.2, 823.0], [27.3, 823.0], [27.4, 839.0], [27.5, 839.0], [27.6, 839.0], [27.7, 842.0], [27.8, 842.0], [27.9, 842.0], [28.0, 845.0], [28.1, 845.0], [28.2, 845.0], [28.3, 845.0], [28.4, 847.0], [28.5, 847.0], [28.6, 847.0], [28.7, 851.0], [28.8, 851.0], [28.9, 851.0], [29.0, 861.0], [29.1, 861.0], [29.2, 861.0], [29.3, 861.0], [29.4, 864.0], [29.5, 864.0], [29.6, 864.0], [29.7, 870.0], [29.8, 870.0], [29.9, 870.0], [30.0, 871.0], [30.1, 871.0], [30.2, 871.0], [30.3, 871.0], [30.4, 894.0], [30.5, 894.0], [30.6, 894.0], [30.7, 895.0], [30.8, 895.0], [30.9, 895.0], [31.0, 896.0], [31.1, 896.0], [31.2, 896.0], [31.3, 896.0], [31.4, 901.0], [31.5, 901.0], [31.6, 901.0], [31.7, 902.0], [31.8, 902.0], [31.9, 902.0], [32.0, 905.0], [32.1, 905.0], [32.2, 905.0], [32.3, 905.0], [32.4, 906.0], [32.5, 906.0], [32.6, 906.0], [32.7, 907.0], [32.8, 907.0], [32.9, 907.0], [33.0, 910.0], [33.1, 910.0], [33.2, 910.0], [33.3, 910.0], [33.4, 914.0], [33.5, 914.0], [33.6, 914.0], [33.7, 919.0], [33.8, 919.0], [33.9, 919.0], [34.0, 921.0], [34.1, 921.0], [34.2, 921.0], [34.3, 921.0], [34.4, 930.0], [34.5, 930.0], [34.6, 930.0], [34.7, 930.0], [34.8, 930.0], [34.9, 930.0], [35.0, 935.0], [35.1, 935.0], [35.2, 935.0], [35.3, 935.0], [35.4, 939.0], [35.5, 939.0], [35.6, 939.0], [35.7, 948.0], [35.8, 948.0], [35.9, 948.0], [36.0, 954.0], [36.1, 954.0], [36.2, 954.0], [36.3, 954.0], [36.4, 958.0], [36.5, 958.0], [36.6, 958.0], [36.7, 962.0], [36.8, 962.0], [36.9, 962.0], [37.0, 976.0], [37.1, 976.0], [37.2, 976.0], [37.3, 976.0], [37.4, 982.0], [37.5, 982.0], [37.6, 982.0], [37.7, 983.0], [37.8, 983.0], [37.9, 983.0], [38.0, 987.0], [38.1, 987.0], [38.2, 987.0], [38.3, 987.0], [38.4, 993.0], [38.5, 993.0], [38.6, 993.0], [38.7, 1001.0], [38.8, 1001.0], [38.9, 1001.0], [39.0, 1004.0], [39.1, 1004.0], [39.2, 1004.0], [39.3, 1004.0], [39.4, 1007.0], [39.5, 1007.0], [39.6, 1007.0], [39.7, 1008.0], [39.8, 1008.0], [39.9, 1008.0], [40.0, 1008.0], [40.1, 1008.0], [40.2, 1008.0], [40.3, 1008.0], [40.4, 1010.0], [40.5, 1010.0], [40.6, 1010.0], [40.7, 1013.0], [40.8, 1013.0], [40.9, 1013.0], [41.0, 1013.0], [41.1, 1014.0], [41.2, 1014.0], [41.3, 1014.0], [41.4, 1014.0], [41.5, 1014.0], [41.6, 1014.0], [41.7, 1016.0], [41.8, 1016.0], [41.9, 1016.0], [42.0, 1016.0], [42.1, 1018.0], [42.2, 1018.0], [42.3, 1018.0], [42.4, 1021.0], [42.5, 1021.0], [42.6, 1021.0], [42.7, 1022.0], [42.8, 1022.0], [42.9, 1022.0], [43.0, 1022.0], [43.1, 1024.0], [43.2, 1024.0], [43.3, 1024.0], [43.4, 1025.0], [43.5, 1025.0], [43.6, 1025.0], [43.7, 1025.0], [43.8, 1025.0], [43.9, 1025.0], [44.0, 1025.0], [44.1, 1031.0], [44.2, 1031.0], [44.3, 1031.0], [44.4, 1034.0], [44.5, 1034.0], [44.6, 1034.0], [44.7, 1039.0], [44.8, 1039.0], [44.9, 1039.0], [45.0, 1039.0], [45.1, 1043.0], [45.2, 1043.0], [45.3, 1043.0], [45.4, 1046.0], [45.5, 1046.0], [45.6, 1046.0], [45.7, 1051.0], [45.8, 1051.0], [45.9, 1051.0], [46.0, 1051.0], [46.1, 1054.0], [46.2, 1054.0], [46.3, 1054.0], [46.4, 1056.0], [46.5, 1056.0], [46.6, 1056.0], [46.7, 1059.0], [46.8, 1059.0], [46.9, 1059.0], [47.0, 1059.0], [47.1, 1062.0], [47.2, 1062.0], [47.3, 1062.0], [47.4, 1064.0], [47.5, 1064.0], [47.6, 1064.0], [47.7, 1070.0], [47.8, 1070.0], [47.9, 1070.0], [48.0, 1070.0], [48.1, 1097.0], [48.2, 1097.0], [48.3, 1097.0], [48.4, 1106.0], [48.5, 1106.0], [48.6, 1106.0], [48.7, 1108.0], [48.8, 1108.0], [48.9, 1108.0], [49.0, 1108.0], [49.1, 1117.0], [49.2, 1117.0], [49.3, 1117.0], [49.4, 1120.0], [49.5, 1120.0], [49.6, 1120.0], [49.7, 1121.0], [49.8, 1121.0], [49.9, 1121.0], [50.0, 1121.0], [50.1, 1122.0], [50.2, 1122.0], [50.3, 1122.0], [50.4, 1122.0], [50.5, 1122.0], [50.6, 1122.0], [50.7, 1127.0], [50.8, 1127.0], [50.9, 1127.0], [51.0, 1127.0], [51.1, 1129.0], [51.2, 1129.0], [51.3, 1129.0], [51.4, 1130.0], [51.5, 1130.0], [51.6, 1130.0], [51.7, 1132.0], [51.8, 1132.0], [51.9, 1132.0], [52.0, 1132.0], [52.1, 1135.0], [52.2, 1135.0], [52.3, 1135.0], [52.4, 1142.0], [52.5, 1142.0], [52.6, 1142.0], [52.7, 1142.0], [52.8, 1142.0], [52.9, 1142.0], [53.0, 1142.0], [53.1, 1170.0], [53.2, 1170.0], [53.3, 1170.0], [53.4, 1181.0], [53.5, 1181.0], [53.6, 1181.0], [53.7, 1192.0], [53.8, 1192.0], [53.9, 1192.0], [54.0, 1192.0], [54.1, 1192.0], [54.2, 1192.0], [54.3, 1192.0], [54.4, 1473.0], [54.5, 1473.0], [54.6, 1473.0], [54.7, 1522.0], [54.8, 1522.0], [54.9, 1522.0], [55.0, 1522.0], [55.1, 1534.0], [55.2, 1534.0], [55.3, 1534.0], [55.4, 1570.0], [55.5, 1570.0], [55.6, 1570.0], [55.7, 1581.0], [55.8, 1581.0], [55.9, 1581.0], [56.0, 1581.0], [56.1, 1607.0], [56.2, 1607.0], [56.3, 1607.0], [56.4, 1621.0], [56.5, 1621.0], [56.6, 1621.0], [56.7, 1622.0], [56.8, 1622.0], [56.9, 1622.0], [57.0, 1622.0], [57.1, 1629.0], [57.2, 1629.0], [57.3, 1629.0], [57.4, 1634.0], [57.5, 1634.0], [57.6, 1634.0], [57.7, 1641.0], [57.8, 1641.0], [57.9, 1641.0], [58.0, 1641.0], [58.1, 1642.0], [58.2, 1642.0], [58.3, 1642.0], [58.4, 1652.0], [58.5, 1652.0], [58.6, 1652.0], [58.7, 1653.0], [58.8, 1653.0], [58.9, 1653.0], [59.0, 1653.0], [59.1, 1661.0], [59.2, 1661.0], [59.3, 1661.0], [59.4, 1663.0], [59.5, 1663.0], [59.6, 1663.0], [59.7, 1672.0], [59.8, 1672.0], [59.9, 1672.0], [60.0, 1672.0], [60.1, 1681.0], [60.2, 1681.0], [60.3, 1681.0], [60.4, 1692.0], [60.5, 1692.0], [60.6, 1692.0], [60.7, 1693.0], [60.8, 1693.0], [60.9, 1693.0], [61.0, 1693.0], [61.1, 1693.0], [61.2, 1693.0], [61.3, 1693.0], [61.4, 1702.0], [61.5, 1702.0], [61.6, 1702.0], [61.7, 1704.0], [61.8, 1704.0], [61.9, 1704.0], [62.0, 1704.0], [62.1, 1707.0], [62.2, 1707.0], [62.3, 1707.0], [62.4, 1709.0], [62.5, 1709.0], [62.6, 1709.0], [62.7, 1712.0], [62.8, 1712.0], [62.9, 1712.0], [63.0, 1712.0], [63.1, 1714.0], [63.2, 1714.0], [63.3, 1714.0], [63.4, 1715.0], [63.5, 1715.0], [63.6, 1715.0], [63.7, 1717.0], [63.8, 1717.0], [63.9, 1717.0], [64.0, 1717.0], [64.1, 1741.0], [64.2, 1741.0], [64.3, 1741.0], [64.4, 1745.0], [64.5, 1745.0], [64.6, 1745.0], [64.7, 1746.0], [64.8, 1746.0], [64.9, 1746.0], [65.0, 1746.0], [65.1, 1760.0], [65.2, 1760.0], [65.3, 1760.0], [65.4, 1770.0], [65.5, 1770.0], [65.6, 1770.0], [65.7, 1774.0], [65.8, 1774.0], [65.9, 1774.0], [66.0, 1774.0], [66.1, 1779.0], [66.2, 1779.0], [66.3, 1779.0], [66.4, 1779.0], [66.5, 1779.0], [66.6, 1779.0], [66.7, 1784.0], [66.8, 1784.0], [66.9, 1784.0], [67.0, 1784.0], [67.1, 1787.0], [67.2, 1787.0], [67.3, 1787.0], [67.4, 1788.0], [67.5, 1788.0], [67.6, 1788.0], [67.7, 1796.0], [67.8, 1796.0], [67.9, 1796.0], [68.0, 1796.0], [68.1, 1805.0], [68.2, 1805.0], [68.3, 1805.0], [68.4, 1806.0], [68.5, 1806.0], [68.6, 1806.0], [68.7, 1809.0], [68.8, 1809.0], [68.9, 1809.0], [69.0, 1809.0], [69.1, 1810.0], [69.2, 1810.0], [69.3, 1810.0], [69.4, 1810.0], [69.5, 1810.0], [69.6, 1810.0], [69.7, 1813.0], [69.8, 1813.0], [69.9, 1813.0], [70.0, 1813.0], [70.1, 1816.0], [70.2, 1816.0], [70.3, 1816.0], [70.4, 1818.0], [70.5, 1818.0], [70.6, 1818.0], [70.7, 1824.0], [70.8, 1824.0], [70.9, 1824.0], [71.0, 1824.0], [71.1, 1839.0], [71.2, 1839.0], [71.3, 1839.0], [71.4, 1840.0], [71.5, 1840.0], [71.6, 1840.0], [71.7, 1841.0], [71.8, 1841.0], [71.9, 1841.0], [72.0, 1841.0], [72.1, 1844.0], [72.2, 1844.0], [72.3, 1844.0], [72.4, 1844.0], [72.5, 1844.0], [72.6, 1844.0], [72.7, 1845.0], [72.8, 1845.0], [72.9, 1845.0], [73.0, 1845.0], [73.1, 1852.0], [73.2, 1852.0], [73.3, 1852.0], [73.4, 1853.0], [73.5, 1853.0], [73.6, 1853.0], [73.7, 1856.0], [73.8, 1856.0], [73.9, 1856.0], [74.0, 1856.0], [74.1, 1861.0], [74.2, 1861.0], [74.3, 1861.0], [74.4, 1863.0], [74.5, 1863.0], [74.6, 1863.0], [74.7, 1865.0], [74.8, 1865.0], [74.9, 1865.0], [75.0, 1865.0], [75.1, 1865.0], [75.2, 1865.0], [75.3, 1865.0], [75.4, 1868.0], [75.5, 1868.0], [75.6, 1868.0], [75.7, 1872.0], [75.8, 1872.0], [75.9, 1872.0], [76.0, 1872.0], [76.1, 1874.0], [76.2, 1874.0], [76.3, 1874.0], [76.4, 1875.0], [76.5, 1875.0], [76.6, 1875.0], [76.7, 1880.0], [76.8, 1880.0], [76.9, 1880.0], [77.0, 1889.0], [77.1, 1889.0], [77.2, 1889.0], [77.3, 1889.0], [77.4, 1889.0], [77.5, 1889.0], [77.6, 1889.0], [77.7, 1889.0], [77.8, 1889.0], [77.9, 1889.0], [78.0, 1891.0], [78.1, 1891.0], [78.2, 1891.0], [78.3, 1891.0], [78.4, 1891.0], [78.5, 1891.0], [78.6, 1891.0], [78.7, 1892.0], [78.8, 1892.0], [78.9, 1892.0], [79.0, 1892.0], [79.1, 1892.0], [79.2, 1892.0], [79.3, 1892.0], [79.4, 1893.0], [79.5, 1893.0], [79.6, 1893.0], [79.7, 1893.0], [79.8, 1893.0], [79.9, 1893.0], [80.0, 1893.0], [80.1, 1895.0], [80.2, 1895.0], [80.3, 1895.0], [80.4, 1896.0], [80.5, 1896.0], [80.6, 1896.0], [80.7, 1898.0], [80.8, 1898.0], [80.9, 1898.0], [81.0, 1900.0], [81.1, 1900.0], [81.2, 1900.0], [81.3, 1900.0], [81.4, 1900.0], [81.5, 1900.0], [81.6, 1900.0], [81.7, 1907.0], [81.8, 1907.0], [81.9, 1907.0], [82.0, 1908.0], [82.1, 1908.0], [82.2, 1908.0], [82.3, 1908.0], [82.4, 1912.0], [82.5, 1912.0], [82.6, 1912.0], [82.7, 1914.0], [82.8, 1914.0], [82.9, 1914.0], [83.0, 1916.0], [83.1, 1916.0], [83.2, 1916.0], [83.3, 1916.0], [83.4, 1916.0], [83.5, 1916.0], [83.6, 1916.0], [83.7, 1917.0], [83.8, 1917.0], [83.9, 1917.0], [84.0, 1919.0], [84.1, 1919.0], [84.2, 1919.0], [84.3, 1919.0], [84.4, 1921.0], [84.5, 1921.0], [84.6, 1921.0], [84.7, 1922.0], [84.8, 1922.0], [84.9, 1922.0], [85.0, 1923.0], [85.1, 1923.0], [85.2, 1923.0], [85.3, 1923.0], [85.4, 1923.0], [85.5, 1923.0], [85.6, 1923.0], [85.7, 1930.0], [85.8, 1930.0], [85.9, 1930.0], [86.0, 1930.0], [86.1, 1930.0], [86.2, 1930.0], [86.3, 1930.0], [86.4, 1932.0], [86.5, 1932.0], [86.6, 1932.0], [86.7, 1932.0], [86.8, 1932.0], [86.9, 1932.0], [87.0, 1933.0], [87.1, 1933.0], [87.2, 1933.0], [87.3, 1933.0], [87.4, 1933.0], [87.5, 1933.0], [87.6, 1933.0], [87.7, 1940.0], [87.8, 1940.0], [87.9, 1940.0], [88.0, 1940.0], [88.1, 1940.0], [88.2, 1940.0], [88.3, 1940.0], [88.4, 1941.0], [88.5, 1941.0], [88.6, 1941.0], [88.7, 1943.0], [88.8, 1943.0], [88.9, 1943.0], [89.0, 1945.0], [89.1, 1945.0], [89.2, 1945.0], [89.3, 1945.0], [89.4, 1946.0], [89.5, 1946.0], [89.6, 1946.0], [89.7, 1947.0], [89.8, 1947.0], [89.9, 1947.0], [90.0, 1948.0], [90.1, 1948.0], [90.2, 1948.0], [90.3, 1948.0], [90.4, 1950.0], [90.5, 1950.0], [90.6, 1950.0], [90.7, 1953.0], [90.8, 1953.0], [90.9, 1953.0], [91.0, 1953.0], [91.1, 1953.0], [91.2, 1953.0], [91.3, 1953.0], [91.4, 1953.0], [91.5, 1953.0], [91.6, 1953.0], [91.7, 1955.0], [91.8, 1955.0], [91.9, 1955.0], [92.0, 1957.0], [92.1, 1957.0], [92.2, 1957.0], [92.3, 1957.0], [92.4, 1958.0], [92.5, 1958.0], [92.6, 1958.0], [92.7, 1959.0], [92.8, 1959.0], [92.9, 1959.0], [93.0, 1961.0], [93.1, 1961.0], [93.2, 1961.0], [93.3, 1961.0], [93.4, 1961.0], [93.5, 1961.0], [93.6, 1961.0], [93.7, 1962.0], [93.8, 1962.0], [93.9, 1962.0], [94.0, 1963.0], [94.1, 1963.0], [94.2, 1963.0], [94.3, 1963.0], [94.4, 1965.0], [94.5, 1965.0], [94.6, 1965.0], [94.7, 1969.0], [94.8, 1969.0], [94.9, 1969.0], [95.0, 1969.0], [95.1, 1969.0], [95.2, 1969.0], [95.3, 1969.0], [95.4, 1970.0], [95.5, 1970.0], [95.6, 1970.0], [95.7, 1972.0], [95.8, 1972.0], [95.9, 1972.0], [96.0, 1974.0], [96.1, 1974.0], [96.2, 1974.0], [96.3, 1974.0], [96.4, 1980.0], [96.5, 1980.0], [96.6, 1980.0], [96.7, 1990.0], [96.8, 1990.0], [96.9, 1990.0], [97.0, 2072.0], [97.1, 2072.0], [97.2, 2072.0], [97.3, 2072.0], [97.4, 2144.0], [97.5, 2144.0], [97.6, 2144.0], [97.7, 2152.0], [97.8, 2152.0], [97.9, 2152.0], [98.0, 2152.0], [98.1, 2152.0], [98.2, 2152.0], [98.3, 2152.0], [98.4, 2167.0], [98.5, 2167.0], [98.6, 2167.0], [98.7, 2188.0], [98.8, 2188.0], [98.9, 2188.0], [99.0, 2222.0], [99.1, 2222.0], [99.2, 2222.0], [99.3, 2222.0], [99.4, 3432.0], [99.5, 3432.0], [99.6, 3432.0], [99.7, 3706.0], [99.8, 3706.0], [99.9, 3706.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 48.0, "series": [{"data": [[2100.0, 5.0], [2200.0, 1.0], [600.0, 17.0], [700.0, 30.0], [800.0, 22.0], [3400.0, 1.0], [900.0, 22.0], [3700.0, 1.0], [1000.0, 29.0], [1100.0, 18.0], [300.0, 6.0], [1400.0, 1.0], [1500.0, 4.0], [400.0, 12.0], [1600.0, 16.0], [1700.0, 20.0], [1800.0, 39.0], [1900.0, 48.0], [500.0, 7.0], [2000.0, 1.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 146.0, "series": [{"data": [[0.0, 18.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 146.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 136.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 151.81666666666658, "minX": 1.57173534E12, "maxY": 151.81666666666658, "series": [{"data": [[1.57173534E12, 151.81666666666658]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173534E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 448.5, "minX": 1.0, "maxY": 3706.0, "series": [{"data": [[2.0, 3706.0], [3.0, 2222.0], [4.0, 2188.0], [5.0, 2152.0], [6.0, 2167.0], [7.0, 2152.0], [9.0, 2051.0], [10.0, 2072.0], [11.0, 1969.0], [12.0, 1965.0], [13.0, 1980.0], [16.0, 1953.0], [19.0, 1866.75], [21.0, 1919.0], [25.0, 1823.25], [28.0, 1842.3333333333333], [30.0, 1962.0], [31.0, 1652.0], [33.0, 1762.0], [35.0, 1796.0], [36.0, 1961.0], [38.0, 1941.5], [41.0, 1834.0], [44.0, 1867.3333333333333], [49.0, 1948.25], [48.0, 1746.0], [51.0, 1708.0], [54.0, 1923.0], [57.0, 1860.0], [59.0, 1889.0], [58.0, 1945.0], [62.0, 1936.5], [64.0, 1737.0], [70.0, 1892.0], [68.0, 1899.5], [74.0, 1923.0], [73.0, 1803.3333333333333], [79.0, 1857.0], [76.0, 1922.0], [82.0, 1848.0], [87.0, 1745.0], [86.0, 1875.0], [84.0, 1916.0], [90.0, 1896.0], [88.0, 1634.0], [93.0, 1788.3333333333333], [98.0, 1880.5], [96.0, 1825.3333333333333], [103.0, 1839.5], [101.0, 1785.0], [105.0, 1889.0], [111.0, 1808.6666666666667], [108.0, 1863.0], [115.0, 1868.0], [114.0, 1840.0], [113.0, 1865.0], [112.0, 1875.0], [118.0, 1861.0], [117.0, 1854.5], [120.0, 1603.0], [127.0, 1784.0], [126.0, 1824.0], [125.0, 1473.0], [124.0, 1834.5], [135.0, 1693.0], [133.0, 1702.0], [132.0, 1715.0], [131.0, 1621.0], [130.0, 1760.0], [129.0, 1672.0], [142.0, 948.0], [141.0, 1192.0], [140.0, 958.0], [139.0, 1181.0], [138.0, 1192.0], [137.0, 1653.0], [136.0, 1522.0], [149.0, 1130.5], [147.0, 901.0], [146.0, 1060.5], [144.0, 1156.0], [159.0, 847.0], [157.0, 1057.5], [155.0, 1127.0], [154.0, 1131.5], [167.0, 910.0], [164.0, 1089.8333333333333], [160.0, 1014.0], [175.0, 1053.5], [173.0, 918.6666666666666], [172.0, 1054.0], [169.0, 1067.0], [183.0, 1013.0], [180.0, 1038.5], [178.0, 1024.0], [177.0, 1016.0], [176.0, 1062.0], [189.0, 1021.0], [188.0, 1022.0], [187.0, 1021.0], [184.0, 987.0], [198.0, 1011.0], [196.0, 1003.5], [192.0, 903.0], [207.0, 908.0], [205.0, 798.0], [204.0, 905.0], [203.0, 983.0], [202.0, 976.0], [201.0, 821.0], [215.0, 930.0], [214.0, 935.0], [213.0, 910.0], [212.0, 914.0], [211.0, 851.0], [210.0, 930.0], [209.0, 791.0], [223.0, 894.0], [222.0, 850.0], [220.0, 760.0], [219.0, 727.0], [218.0, 902.0], [217.0, 920.0], [231.0, 845.0], [230.0, 797.0], [229.0, 738.0], [228.0, 862.5], [226.0, 839.0], [225.0, 842.0], [224.0, 871.0], [239.0, 621.0], [237.0, 806.0], [236.0, 809.5], [234.0, 784.0], [233.0, 805.0], [245.0, 568.3333333333334], [242.0, 601.0], [240.0, 801.0], [255.0, 636.0], [254.0, 645.6666666666666], [251.0, 595.25], [249.0, 513.0], [248.0, 774.0], [271.0, 638.0], [269.0, 615.5], [267.0, 713.0], [264.0, 448.5], [262.0, 743.0], [261.0, 556.25], [260.0, 631.0], [258.0, 745.0], [283.0, 712.0], [281.0, 592.5], [277.0, 676.6666666666666], [275.0, 662.0], [300.0, 549.6470588235294], [1.0, 3432.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}, {"data": [[151.81666666666658, 1304.216666666667]], "isOverall": false, "label": "Access Animation Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1155.0, "minX": 1.57173534E12, "maxY": 39446.71666666667, "series": [{"data": [[1.57173534E12, 39446.71666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57173534E12, 1155.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173534E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1304.216666666667, "minX": 1.57173534E12, "maxY": 1304.216666666667, "series": [{"data": [[1.57173534E12, 1304.216666666667]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173534E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 813.0399999999998, "minX": 1.57173534E12, "maxY": 813.0399999999998, "series": [{"data": [[1.57173534E12, 813.0399999999998]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173534E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 609.2299999999997, "minX": 1.57173534E12, "maxY": 609.2299999999997, "series": [{"data": [[1.57173534E12, 609.2299999999997]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173534E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 325.0, "minX": 1.57173534E12, "maxY": 3706.0, "series": [{"data": [[1.57173534E12, 3706.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57173534E12, 325.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57173534E12, 1947.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57173534E12, 2221.6600000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57173534E12, 1969.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173534E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 823.0, "minX": 2.0, "maxY": 3569.0, "series": [{"data": [[135.0, 1880.0], [2.0, 3569.0], [163.0, 823.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 163.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 695.0, "minX": 2.0, "maxY": 2579.0, "series": [{"data": [[135.0, 713.0], [2.0, 2579.0], [163.0, 695.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 163.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173534E12, "maxY": 5.0, "series": [{"data": [[1.57173534E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173534E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173534E12, "maxY": 5.0, "series": [{"data": [[1.57173534E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173534E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173534E12, "maxY": 5.0, "series": [{"data": [[1.57173534E12, 5.0]], "isOverall": false, "label": "Access Animation Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173534E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173534E12, "maxY": 5.0, "series": [{"data": [[1.57173534E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173534E12, "title": "Total Transactions Per Second"}},
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

