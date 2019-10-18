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
        data: {"result": {"minY": 8094.0, "minX": 0.0, "maxY": 18890.0, "series": [{"data": [[0.0, 8094.0], [0.1, 8095.0], [0.2, 8103.0], [0.3, 8103.0], [0.4, 8105.0], [0.5, 8105.0], [0.6, 8105.0], [0.7, 8106.0], [0.8, 8107.0], [0.9, 8108.0], [1.0, 8120.0], [1.1, 8125.0], [1.2, 8125.0], [1.3, 8140.0], [1.4, 8143.0], [1.5, 8144.0], [1.6, 8145.0], [1.7, 8154.0], [1.8, 8159.0], [1.9, 8160.0], [2.0, 8160.0], [2.1, 8161.0], [2.2, 8162.0], [2.3, 8162.0], [2.4, 8162.0], [2.5, 8162.0], [2.6, 8162.0], [2.7, 8163.0], [2.8, 8163.0], [2.9, 8163.0], [3.0, 8164.0], [3.1, 8164.0], [3.2, 8165.0], [3.3, 8166.0], [3.4, 8167.0], [3.5, 8167.0], [3.6, 8169.0], [3.7, 8169.0], [3.8, 8204.0], [3.9, 8238.0], [4.0, 8239.0], [4.1, 8239.0], [4.2, 8239.0], [4.3, 8247.0], [4.4, 8249.0], [4.5, 8255.0], [4.6, 8260.0], [4.7, 8281.0], [4.8, 8290.0], [4.9, 8291.0], [5.0, 8295.0], [5.1, 8296.0], [5.2, 8299.0], [5.3, 8300.0], [5.4, 8300.0], [5.5, 8301.0], [5.6, 8307.0], [5.7, 8308.0], [5.8, 8309.0], [5.9, 8309.0], [6.0, 8310.0], [6.1, 8311.0], [6.2, 8311.0], [6.3, 8312.0], [6.4, 8313.0], [6.5, 8315.0], [6.6, 8316.0], [6.7, 8316.0], [6.8, 8322.0], [6.9, 8325.0], [7.0, 8328.0], [7.1, 8402.0], [7.2, 8406.0], [7.3, 8409.0], [7.4, 8415.0], [7.5, 8416.0], [7.6, 8419.0], [7.7, 8428.0], [7.8, 8458.0], [7.9, 8459.0], [8.0, 8461.0], [8.1, 8461.0], [8.2, 8462.0], [8.3, 8464.0], [8.4, 8672.0], [8.5, 8673.0], [8.6, 8676.0], [8.7, 8676.0], [8.8, 8678.0], [8.9, 8678.0], [9.0, 8681.0], [9.1, 8682.0], [9.2, 8683.0], [9.3, 8703.0], [9.4, 8704.0], [9.5, 8710.0], [9.6, 8720.0], [9.7, 8727.0], [9.8, 8728.0], [9.9, 8729.0], [10.0, 8732.0], [10.1, 8732.0], [10.2, 8758.0], [10.3, 8846.0], [10.4, 8847.0], [10.5, 8848.0], [10.6, 8849.0], [10.7, 8850.0], [10.8, 8851.0], [10.9, 8852.0], [11.0, 8853.0], [11.1, 8853.0], [11.2, 8855.0], [11.3, 8855.0], [11.4, 8858.0], [11.5, 8859.0], [11.6, 8860.0], [11.7, 8860.0], [11.8, 8861.0], [11.9, 8863.0], [12.0, 8867.0], [12.1, 8867.0], [12.2, 8873.0], [12.3, 8877.0], [12.4, 8878.0], [12.5, 8883.0], [12.6, 8884.0], [12.7, 8886.0], [12.8, 8889.0], [12.9, 8895.0], [13.0, 8902.0], [13.1, 8903.0], [13.2, 8929.0], [13.3, 9070.0], [13.4, 9072.0], [13.5, 9086.0], [13.6, 9134.0], [13.7, 9135.0], [13.8, 9136.0], [13.9, 9151.0], [14.0, 9156.0], [14.1, 9156.0], [14.2, 9159.0], [14.3, 9167.0], [14.4, 9173.0], [14.5, 9174.0], [14.6, 9175.0], [14.7, 9212.0], [14.8, 9214.0], [14.9, 9214.0], [15.0, 9232.0], [15.1, 9233.0], [15.2, 9233.0], [15.3, 9235.0], [15.4, 9248.0], [15.5, 9250.0], [15.6, 9251.0], [15.7, 9254.0], [15.8, 9267.0], [15.9, 9269.0], [16.0, 9270.0], [16.1, 9271.0], [16.2, 9272.0], [16.3, 9272.0], [16.4, 9273.0], [16.5, 9273.0], [16.6, 9273.0], [16.7, 9273.0], [16.8, 9274.0], [16.9, 9275.0], [17.0, 9275.0], [17.1, 9276.0], [17.2, 9288.0], [17.3, 9299.0], [17.4, 9301.0], [17.5, 9303.0], [17.6, 9303.0], [17.7, 9322.0], [17.8, 9324.0], [17.9, 9335.0], [18.0, 9338.0], [18.1, 9339.0], [18.2, 9342.0], [18.3, 9344.0], [18.4, 9348.0], [18.5, 9352.0], [18.6, 9352.0], [18.7, 9354.0], [18.8, 9363.0], [18.9, 9380.0], [19.0, 9388.0], [19.1, 9405.0], [19.2, 9416.0], [19.3, 9417.0], [19.4, 9419.0], [19.5, 9420.0], [19.6, 9421.0], [19.7, 9424.0], [19.8, 9424.0], [19.9, 9499.0], [20.0, 9501.0], [20.1, 9504.0], [20.2, 9505.0], [20.3, 9506.0], [20.4, 9506.0], [20.5, 9507.0], [20.6, 9508.0], [20.7, 9508.0], [20.8, 9509.0], [20.9, 9509.0], [21.0, 9510.0], [21.1, 9512.0], [21.2, 9512.0], [21.3, 9514.0], [21.4, 9514.0], [21.5, 9520.0], [21.6, 9521.0], [21.7, 9523.0], [21.8, 9539.0], [21.9, 9541.0], [22.0, 9542.0], [22.1, 9543.0], [22.2, 9561.0], [22.3, 9579.0], [22.4, 9647.0], [22.5, 9649.0], [22.6, 9650.0], [22.7, 9767.0], [22.8, 9768.0], [22.9, 9770.0], [23.0, 9775.0], [23.1, 9778.0], [23.2, 9782.0], [23.3, 9783.0], [23.4, 9791.0], [23.5, 9795.0], [23.6, 9796.0], [23.7, 9806.0], [23.8, 9806.0], [23.9, 9806.0], [24.0, 9806.0], [24.1, 9810.0], [24.2, 9811.0], [24.3, 9811.0], [24.4, 9812.0], [24.5, 9812.0], [24.6, 9812.0], [24.7, 9812.0], [24.8, 9814.0], [24.9, 9814.0], [25.0, 9815.0], [25.1, 9815.0], [25.2, 9817.0], [25.3, 9817.0], [25.4, 9819.0], [25.5, 9822.0], [25.6, 9822.0], [25.7, 9822.0], [25.8, 9822.0], [25.9, 9826.0], [26.0, 9827.0], [26.1, 9832.0], [26.2, 9834.0], [26.3, 9838.0], [26.4, 9838.0], [26.5, 9841.0], [26.6, 9841.0], [26.7, 9842.0], [26.8, 9846.0], [26.9, 9848.0], [27.0, 9849.0], [27.1, 9849.0], [27.2, 9849.0], [27.3, 9850.0], [27.4, 9851.0], [27.5, 9852.0], [27.6, 9853.0], [27.7, 9853.0], [27.8, 9854.0], [27.9, 9855.0], [28.0, 9857.0], [28.1, 9857.0], [28.2, 9857.0], [28.3, 9857.0], [28.4, 9857.0], [28.5, 9858.0], [28.6, 9858.0], [28.7, 9859.0], [28.8, 9859.0], [28.9, 9860.0], [29.0, 9861.0], [29.1, 9862.0], [29.2, 9866.0], [29.3, 9869.0], [29.4, 9875.0], [29.5, 9882.0], [29.6, 9892.0], [29.7, 9893.0], [29.8, 9895.0], [29.9, 9925.0], [30.0, 9926.0], [30.1, 10051.0], [30.2, 10052.0], [30.3, 10052.0], [30.4, 10053.0], [30.5, 10053.0], [30.6, 10053.0], [30.7, 10054.0], [30.8, 10094.0], [30.9, 10145.0], [31.0, 10146.0], [31.1, 10147.0], [31.2, 10148.0], [31.3, 10178.0], [31.4, 10183.0], [31.5, 10185.0], [31.6, 10185.0], [31.7, 10193.0], [31.8, 10195.0], [31.9, 10199.0], [32.0, 10241.0], [32.1, 10242.0], [32.2, 10242.0], [32.3, 10243.0], [32.4, 10244.0], [32.5, 10246.0], [32.6, 10247.0], [32.7, 10258.0], [32.8, 10263.0], [32.9, 10279.0], [33.0, 10286.0], [33.1, 10312.0], [33.2, 10342.0], [33.3, 10365.0], [33.4, 10370.0], [33.5, 10376.0], [33.6, 10377.0], [33.7, 10384.0], [33.8, 10387.0], [33.9, 10403.0], [34.0, 10414.0], [34.1, 10417.0], [34.2, 10430.0], [34.3, 10430.0], [34.4, 10432.0], [34.5, 10440.0], [34.6, 10440.0], [34.7, 10446.0], [34.8, 10447.0], [34.9, 10451.0], [35.0, 10474.0], [35.1, 10476.0], [35.2, 10477.0], [35.3, 10478.0], [35.4, 10478.0], [35.5, 10479.0], [35.6, 10485.0], [35.7, 10486.0], [35.8, 10487.0], [35.9, 10490.0], [36.0, 10494.0], [36.1, 10495.0], [36.2, 10495.0], [36.3, 10500.0], [36.4, 10500.0], [36.5, 10502.0], [36.6, 10503.0], [36.7, 10504.0], [36.8, 10505.0], [36.9, 10508.0], [37.0, 10509.0], [37.1, 10517.0], [37.2, 10519.0], [37.3, 10607.0], [37.4, 10612.0], [37.5, 10672.0], [37.6, 10707.0], [37.7, 10707.0], [37.8, 10710.0], [37.9, 10710.0], [38.0, 10713.0], [38.1, 10713.0], [38.2, 10716.0], [38.3, 10732.0], [38.4, 10810.0], [38.5, 10818.0], [38.6, 10818.0], [38.7, 10819.0], [38.8, 10820.0], [38.9, 10820.0], [39.0, 10845.0], [39.1, 10866.0], [39.2, 10899.0], [39.3, 10925.0], [39.4, 10926.0], [39.5, 10927.0], [39.6, 10935.0], [39.7, 10940.0], [39.8, 10942.0], [39.9, 10944.0], [40.0, 10945.0], [40.1, 10948.0], [40.2, 10949.0], [40.3, 10977.0], [40.4, 11039.0], [40.5, 11042.0], [40.6, 11056.0], [40.7, 11059.0], [40.8, 11072.0], [40.9, 11079.0], [41.0, 11085.0], [41.1, 11088.0], [41.2, 11096.0], [41.3, 11132.0], [41.4, 11136.0], [41.5, 11163.0], [41.6, 11171.0], [41.7, 11172.0], [41.8, 11173.0], [41.9, 11205.0], [42.0, 11210.0], [42.1, 11228.0], [42.2, 11235.0], [42.3, 11236.0], [42.4, 11237.0], [42.5, 11248.0], [42.6, 11248.0], [42.7, 11256.0], [42.8, 11270.0], [42.9, 11272.0], [43.0, 11273.0], [43.1, 11274.0], [43.2, 11277.0], [43.3, 11278.0], [43.4, 11279.0], [43.5, 11295.0], [43.6, 11307.0], [43.7, 11308.0], [43.8, 11309.0], [43.9, 11309.0], [44.0, 11312.0], [44.1, 11315.0], [44.2, 11316.0], [44.3, 11326.0], [44.4, 11328.0], [44.5, 11328.0], [44.6, 11329.0], [44.7, 11329.0], [44.8, 11329.0], [44.9, 11330.0], [45.0, 11330.0], [45.1, 11330.0], [45.2, 11330.0], [45.3, 11330.0], [45.4, 11330.0], [45.5, 11331.0], [45.6, 11333.0], [45.7, 11333.0], [45.8, 11333.0], [45.9, 11333.0], [46.0, 11333.0], [46.1, 11333.0], [46.2, 11333.0], [46.3, 11333.0], [46.4, 11333.0], [46.5, 11334.0], [46.6, 11334.0], [46.7, 11334.0], [46.8, 11335.0], [46.9, 11335.0], [47.0, 11335.0], [47.1, 11335.0], [47.2, 11335.0], [47.3, 11335.0], [47.4, 11335.0], [47.5, 11336.0], [47.6, 11336.0], [47.7, 11337.0], [47.8, 11338.0], [47.9, 11339.0], [48.0, 11347.0], [48.1, 11347.0], [48.2, 11347.0], [48.3, 11348.0], [48.4, 11349.0], [48.5, 11350.0], [48.6, 11351.0], [48.7, 11354.0], [48.8, 11355.0], [48.9, 11357.0], [49.0, 11369.0], [49.1, 11375.0], [49.2, 11380.0], [49.3, 11381.0], [49.4, 11393.0], [49.5, 11409.0], [49.6, 11412.0], [49.7, 11426.0], [49.8, 11438.0], [49.9, 11438.0], [50.0, 11439.0], [50.1, 11439.0], [50.2, 11441.0], [50.3, 11443.0], [50.4, 11444.0], [50.5, 11445.0], [50.6, 11447.0], [50.7, 11453.0], [50.8, 11456.0], [50.9, 11457.0], [51.0, 11474.0], [51.1, 11475.0], [51.2, 11475.0], [51.3, 11480.0], [51.4, 11485.0], [51.5, 11485.0], [51.6, 11485.0], [51.7, 11488.0], [51.8, 11494.0], [51.9, 11496.0], [52.0, 11530.0], [52.1, 11598.0], [52.2, 11598.0], [52.3, 11601.0], [52.4, 11618.0], [52.5, 11619.0], [52.6, 11635.0], [52.7, 11637.0], [52.8, 11676.0], [52.9, 11678.0], [53.0, 11683.0], [53.1, 11684.0], [53.2, 11686.0], [53.3, 11695.0], [53.4, 11697.0], [53.5, 11697.0], [53.6, 11699.0], [53.7, 11700.0], [53.8, 11706.0], [53.9, 11715.0], [54.0, 11718.0], [54.1, 11720.0], [54.2, 11720.0], [54.3, 11721.0], [54.4, 11730.0], [54.5, 11751.0], [54.6, 11759.0], [54.7, 11766.0], [54.8, 11779.0], [54.9, 11781.0], [55.0, 11838.0], [55.1, 11841.0], [55.2, 11843.0], [55.3, 11850.0], [55.4, 11851.0], [55.5, 11859.0], [55.6, 11862.0], [55.7, 11864.0], [55.8, 11866.0], [55.9, 11866.0], [56.0, 11867.0], [56.1, 11867.0], [56.2, 11867.0], [56.3, 11868.0], [56.4, 11868.0], [56.5, 11869.0], [56.6, 11869.0], [56.7, 11870.0], [56.8, 11870.0], [56.9, 11870.0], [57.0, 11871.0], [57.1, 11871.0], [57.2, 11871.0], [57.3, 11872.0], [57.4, 11872.0], [57.5, 11872.0], [57.6, 11872.0], [57.7, 11873.0], [57.8, 11873.0], [57.9, 11874.0], [58.0, 11875.0], [58.1, 11876.0], [58.2, 11877.0], [58.3, 11877.0], [58.4, 11877.0], [58.5, 11879.0], [58.6, 11879.0], [58.7, 11879.0], [58.8, 11879.0], [58.9, 11879.0], [59.0, 11879.0], [59.1, 11880.0], [59.2, 11880.0], [59.3, 11881.0], [59.4, 11881.0], [59.5, 11881.0], [59.6, 11883.0], [59.7, 11884.0], [59.8, 11884.0], [59.9, 11885.0], [60.0, 11886.0], [60.1, 11886.0], [60.2, 11886.0], [60.3, 11887.0], [60.4, 11888.0], [60.5, 11888.0], [60.6, 11889.0], [60.7, 11889.0], [60.8, 11890.0], [60.9, 11893.0], [61.0, 11894.0], [61.1, 11894.0], [61.2, 11896.0], [61.3, 11896.0], [61.4, 11896.0], [61.5, 11897.0], [61.6, 11897.0], [61.7, 11897.0], [61.8, 11897.0], [61.9, 11899.0], [62.0, 11900.0], [62.1, 11900.0], [62.2, 11904.0], [62.3, 11905.0], [62.4, 11905.0], [62.5, 11906.0], [62.6, 11907.0], [62.7, 11907.0], [62.8, 11908.0], [62.9, 11908.0], [63.0, 11908.0], [63.1, 11909.0], [63.2, 11910.0], [63.3, 11910.0], [63.4, 11912.0], [63.5, 11913.0], [63.6, 11913.0], [63.7, 11913.0], [63.8, 11914.0], [63.9, 11915.0], [64.0, 11915.0], [64.1, 11915.0], [64.2, 11916.0], [64.3, 11916.0], [64.4, 11916.0], [64.5, 11916.0], [64.6, 11916.0], [64.7, 11917.0], [64.8, 11917.0], [64.9, 11917.0], [65.0, 11918.0], [65.1, 11918.0], [65.2, 11919.0], [65.3, 11919.0], [65.4, 11920.0], [65.5, 11921.0], [65.6, 11921.0], [65.7, 11921.0], [65.8, 11921.0], [65.9, 11922.0], [66.0, 11922.0], [66.1, 11922.0], [66.2, 11923.0], [66.3, 11924.0], [66.4, 11925.0], [66.5, 11928.0], [66.6, 11934.0], [66.7, 11934.0], [66.8, 11935.0], [66.9, 11938.0], [67.0, 11949.0], [67.1, 11952.0], [67.2, 11967.0], [67.3, 12015.0], [67.4, 12059.0], [67.5, 12114.0], [67.6, 12183.0], [67.7, 12187.0], [67.8, 12205.0], [67.9, 12214.0], [68.0, 12231.0], [68.1, 12235.0], [68.2, 12254.0], [68.3, 12258.0], [68.4, 12282.0], [68.5, 12292.0], [68.6, 12295.0], [68.7, 12315.0], [68.8, 12315.0], [68.9, 12319.0], [69.0, 12319.0], [69.1, 12320.0], [69.2, 12341.0], [69.3, 12342.0], [69.4, 12343.0], [69.5, 12356.0], [69.6, 12359.0], [69.7, 12384.0], [69.8, 12389.0], [69.9, 12409.0], [70.0, 12410.0], [70.1, 12413.0], [70.2, 12415.0], [70.3, 12415.0], [70.4, 12417.0], [70.5, 12431.0], [70.6, 12440.0], [70.7, 12441.0], [70.8, 12443.0], [70.9, 12448.0], [71.0, 12449.0], [71.1, 12464.0], [71.2, 12487.0], [71.3, 12498.0], [71.4, 12499.0], [71.5, 12501.0], [71.6, 12503.0], [71.7, 12504.0], [71.8, 12508.0], [71.9, 12509.0], [72.0, 12517.0], [72.1, 12522.0], [72.2, 12529.0], [72.3, 12530.0], [72.4, 12531.0], [72.5, 12532.0], [72.6, 12533.0], [72.7, 12534.0], [72.8, 12536.0], [72.9, 12537.0], [73.0, 12541.0], [73.1, 12543.0], [73.2, 12544.0], [73.3, 12545.0], [73.4, 12545.0], [73.5, 12546.0], [73.6, 12546.0], [73.7, 12547.0], [73.8, 12547.0], [73.9, 12548.0], [74.0, 12548.0], [74.1, 12549.0], [74.2, 12549.0], [74.3, 12549.0], [74.4, 12550.0], [74.5, 12551.0], [74.6, 12551.0], [74.7, 12551.0], [74.8, 12551.0], [74.9, 12551.0], [75.0, 12552.0], [75.1, 12552.0], [75.2, 12552.0], [75.3, 12553.0], [75.4, 12554.0], [75.5, 12556.0], [75.6, 12561.0], [75.7, 12562.0], [75.8, 12565.0], [75.9, 12570.0], [76.0, 12588.0], [76.1, 12590.0], [76.2, 12592.0], [76.3, 12608.0], [76.4, 12614.0], [76.5, 12617.0], [76.6, 12658.0], [76.7, 12670.0], [76.8, 12679.0], [76.9, 12690.0], [77.0, 12698.0], [77.1, 12723.0], [77.2, 12738.0], [77.3, 12768.0], [77.4, 12789.0], [77.5, 12822.0], [77.6, 12832.0], [77.7, 12843.0], [77.8, 12853.0], [77.9, 12862.0], [78.0, 12863.0], [78.1, 12884.0], [78.2, 12886.0], [78.3, 12912.0], [78.4, 13004.0], [78.5, 13069.0], [78.6, 13086.0], [78.7, 13112.0], [78.8, 13115.0], [78.9, 13138.0], [79.0, 13184.0], [79.1, 13192.0], [79.2, 13200.0], [79.3, 13203.0], [79.4, 13203.0], [79.5, 13209.0], [79.6, 13212.0], [79.7, 13214.0], [79.8, 13214.0], [79.9, 13219.0], [80.0, 13220.0], [80.1, 13221.0], [80.2, 13225.0], [80.3, 13258.0], [80.4, 13273.0], [80.5, 13273.0], [80.6, 13289.0], [80.7, 13290.0], [80.8, 13291.0], [80.9, 13292.0], [81.0, 13302.0], [81.1, 13305.0], [81.2, 13305.0], [81.3, 13306.0], [81.4, 13307.0], [81.5, 13308.0], [81.6, 13309.0], [81.7, 13310.0], [81.8, 13311.0], [81.9, 13312.0], [82.0, 13314.0], [82.1, 13314.0], [82.2, 13315.0], [82.3, 13315.0], [82.4, 13315.0], [82.5, 13315.0], [82.6, 13316.0], [82.7, 13316.0], [82.8, 13317.0], [82.9, 13317.0], [83.0, 13317.0], [83.1, 13327.0], [83.2, 13365.0], [83.3, 13387.0], [83.4, 13400.0], [83.5, 13402.0], [83.6, 13406.0], [83.7, 13406.0], [83.8, 13407.0], [83.9, 13407.0], [84.0, 13407.0], [84.1, 13407.0], [84.2, 13408.0], [84.3, 13409.0], [84.4, 13409.0], [84.5, 13409.0], [84.6, 13410.0], [84.7, 13411.0], [84.8, 13411.0], [84.9, 13412.0], [85.0, 13412.0], [85.1, 13412.0], [85.2, 13412.0], [85.3, 13413.0], [85.4, 13413.0], [85.5, 13414.0], [85.6, 13414.0], [85.7, 13415.0], [85.8, 13415.0], [85.9, 13415.0], [86.0, 13433.0], [86.1, 13433.0], [86.2, 13434.0], [86.3, 13435.0], [86.4, 13435.0], [86.5, 13435.0], [86.6, 13435.0], [86.7, 13435.0], [86.8, 13439.0], [86.9, 13441.0], [87.0, 13478.0], [87.1, 13533.0], [87.2, 13535.0], [87.3, 13537.0], [87.4, 13594.0], [87.5, 13609.0], [87.6, 13650.0], [87.7, 13665.0], [87.8, 13691.0], [87.9, 13701.0], [88.0, 13714.0], [88.1, 13738.0], [88.2, 13739.0], [88.3, 13740.0], [88.4, 13743.0], [88.5, 13743.0], [88.6, 13743.0], [88.7, 13759.0], [88.8, 13767.0], [88.9, 13793.0], [89.0, 13801.0], [89.1, 13828.0], [89.2, 13844.0], [89.3, 13847.0], [89.4, 13851.0], [89.5, 13852.0], [89.6, 13877.0], [89.7, 13878.0], [89.8, 13879.0], [89.9, 13880.0], [90.0, 13883.0], [90.1, 13884.0], [90.2, 13884.0], [90.3, 13884.0], [90.4, 13884.0], [90.5, 13895.0], [90.6, 13896.0], [90.7, 13897.0], [90.8, 13898.0], [90.9, 13899.0], [91.0, 13899.0], [91.1, 13900.0], [91.2, 13901.0], [91.3, 13901.0], [91.4, 13901.0], [91.5, 14019.0], [91.6, 14026.0], [91.7, 14030.0], [91.8, 14059.0], [91.9, 14072.0], [92.0, 14092.0], [92.1, 14109.0], [92.2, 14111.0], [92.3, 14112.0], [92.4, 14113.0], [92.5, 14114.0], [92.6, 14115.0], [92.7, 14115.0], [92.8, 14261.0], [92.9, 14355.0], [93.0, 14468.0], [93.1, 14469.0], [93.2, 14471.0], [93.3, 14479.0], [93.4, 14486.0], [93.5, 14494.0], [93.6, 14509.0], [93.7, 14519.0], [93.8, 14543.0], [93.9, 14576.0], [94.0, 14580.0], [94.1, 14609.0], [94.2, 14659.0], [94.3, 14676.0], [94.4, 14767.0], [94.5, 14800.0], [94.6, 14821.0], [94.7, 14878.0], [94.8, 14880.0], [94.9, 14884.0], [95.0, 14885.0], [95.1, 14886.0], [95.2, 14888.0], [95.3, 14889.0], [95.4, 14891.0], [95.5, 14892.0], [95.6, 14893.0], [95.7, 14894.0], [95.8, 14894.0], [95.9, 14895.0], [96.0, 14896.0], [96.1, 14988.0], [96.2, 14995.0], [96.3, 14995.0], [96.4, 14997.0], [96.5, 15008.0], [96.6, 15115.0], [96.7, 15176.0], [96.8, 15217.0], [96.9, 15218.0], [97.0, 15219.0], [97.1, 15224.0], [97.2, 15226.0], [97.3, 15227.0], [97.4, 15248.0], [97.5, 15283.0], [97.6, 15288.0], [97.7, 15298.0], [97.8, 15358.0], [97.9, 15376.0], [98.0, 15381.0], [98.1, 15413.0], [98.2, 15413.0], [98.3, 15467.0], [98.4, 15475.0], [98.5, 15482.0], [98.6, 15501.0], [98.7, 15503.0], [98.8, 15518.0], [98.9, 15527.0], [99.0, 15684.0], [99.1, 15702.0], [99.2, 15816.0], [99.3, 15821.0], [99.4, 15888.0], [99.5, 15948.0], [99.6, 16109.0], [99.7, 16417.0], [99.8, 18780.0], [99.9, 18890.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 8000.0, "maxY": 70.0, "series": [{"data": [[8100.0, 35.0], [8000.0, 2.0], [8300.0, 18.0], [8200.0, 16.0], [8400.0, 13.0], [8600.0, 9.0], [8700.0, 10.0], [9100.0, 11.0], [9200.0, 27.0], [9000.0, 3.0], [8800.0, 27.0], [8900.0, 3.0], [9300.0, 17.0], [9400.0, 9.0], [9700.0, 10.0], [9500.0, 23.0], [9600.0, 3.0], [9800.0, 62.0], [9900.0, 2.0], [10100.0, 11.0], [10000.0, 8.0], [10200.0, 11.0], [10300.0, 8.0], [10400.0, 24.0], [10500.0, 10.0], [10600.0, 3.0], [10700.0, 8.0], [11000.0, 9.0], [10900.0, 11.0], [11200.0, 17.0], [11100.0, 6.0], [10800.0, 9.0], [11300.0, 59.0], [11400.0, 25.0], [11600.0, 14.0], [11500.0, 3.0], [11700.0, 13.0], [11800.0, 70.0], [11900.0, 53.0], [12100.0, 3.0], [12200.0, 9.0], [12000.0, 2.0], [12300.0, 12.0], [12400.0, 16.0], [12500.0, 49.0], [12600.0, 8.0], [12700.0, 4.0], [12800.0, 8.0], [13200.0, 18.0], [13100.0, 5.0], [13300.0, 24.0], [13000.0, 3.0], [12900.0, 1.0], [13400.0, 37.0], [13700.0, 11.0], [13500.0, 4.0], [13800.0, 21.0], [13600.0, 4.0], [13900.0, 4.0], [14000.0, 6.0], [14100.0, 7.0], [14300.0, 1.0], [14200.0, 1.0], [14400.0, 6.0], [14500.0, 5.0], [14800.0, 16.0], [14600.0, 3.0], [14700.0, 1.0], [14900.0, 4.0], [15000.0, 1.0], [15200.0, 10.0], [15100.0, 2.0], [15300.0, 3.0], [15500.0, 4.0], [15400.0, 5.0], [15700.0, 1.0], [15800.0, 3.0], [15600.0, 1.0], [15900.0, 1.0], [16100.0, 1.0], [16400.0, 1.0], [18700.0, 1.0], [18800.0, 1.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1000.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 957.427, "minX": 1.57139358E12, "maxY": 957.427, "series": [{"data": [[1.57139358E12, 957.427]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139358E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11062.236203090513, "minX": 1.0, "maxY": 18890.0, "series": [{"data": [[518.0, 15378.5], [2.0, 18780.0], [798.0, 15248.0], [795.0, 15283.0], [789.0, 15288.0], [788.0, 15298.0], [3.0, 15684.0], [808.0, 14602.6], [803.0, 14209.5], [802.0, 15224.0], [801.0, 15226.0], [895.0, 14997.0], [894.0, 15008.0], [898.0, 14991.5], [896.0, 14995.0], [943.0, 14676.0], [987.0, 13884.333333333334], [991.0, 11864.0], [990.0, 14056.0], [989.0, 11695.0], [986.0, 14891.0], [985.0, 14217.0], [983.0, 13815.0], [980.0, 14821.0], [965.0, 14752.5], [960.0, 12843.0], [1000.0, 11062.236203090513], [999.0, 14880.0], [998.0, 14021.4], [996.0, 14885.0], [994.0, 12484.25], [993.0, 11715.0], [992.0, 11720.0], [4.0, 16417.0], [5.0, 16109.0], [6.0, 14019.0], [7.0, 14030.0], [8.0, 14026.0], [9.0, 12912.0], [10.0, 12768.0], [11.0, 15948.0], [12.0, 12884.0], [14.0, 14293.0], [15.0, 13767.0], [18.0, 15132.0], [19.0, 12738.0], [21.0, 14186.0], [28.0, 14447.5], [39.0, 14840.0], [41.0, 14085.818181818182], [1.0, 18890.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}, {"data": [[957.427, 11371.128000000004]], "isOverall": false, "label": "Access Movies Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3733.3333333333335, "minX": 1.57139358E12, "maxY": 109560.33333333333, "series": [{"data": [[1.57139358E12, 109560.33333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57139358E12, 3733.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139358E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11371.128000000004, "minX": 1.57139358E12, "maxY": 11371.128000000004, "series": [{"data": [[1.57139358E12, 11371.128000000004]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139358E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11032.313999999995, "minX": 1.57139358E12, "maxY": 11032.313999999995, "series": [{"data": [[1.57139358E12, 11032.313999999995]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139358E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8164.231000000006, "minX": 1.57139358E12, "maxY": 8164.231000000006, "series": [{"data": [[1.57139358E12, 8164.231000000006]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139358E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8094.0, "minX": 1.57139358E12, "maxY": 18890.0, "series": [{"data": [[1.57139358E12, 18890.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57139358E12, 8094.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57139358E12, 13882.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57139358E12, 15682.430000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57139358E12, 14884.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9273.5, "minX": 1.0, "maxY": 18890.0, "series": [{"data": [[2.0, 17232.0], [1.0, 18890.0], [153.0, 13221.0], [80.0, 14888.5], [89.0, 13847.0], [11.0, 14026.0], [436.0, 11656.5], [228.0, 9273.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 436.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9272.5, "minX": 1.0, "maxY": 18822.0, "series": [{"data": [[2.0, 12752.0], [1.0, 18822.0], [153.0, 12692.0], [80.0, 13211.0], [89.0, 13228.0], [11.0, 11219.0], [436.0, 11424.0], [228.0, 9272.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 436.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139352E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139352E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139352E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139358E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139358E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139358E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139358E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139358E12, 16.666666666666668]], "isOverall": false, "label": "Access Movies Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139358E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139358E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139358E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139358E12, "title": "Total Transactions Per Second"}},
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

