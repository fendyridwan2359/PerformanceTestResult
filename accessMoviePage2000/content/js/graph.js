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
        data: {"result": {"minY": 16027.0, "minX": 0.0, "maxY": 33397.0, "series": [{"data": [[0.0, 16027.0], [0.1, 16028.0], [0.2, 20685.0], [0.3, 20691.0], [0.4, 20695.0], [0.5, 20701.0], [0.6, 20711.0], [0.7, 20719.0], [0.8, 20748.0], [0.9, 20868.0], [1.0, 20870.0], [1.1, 20874.0], [1.2, 20874.0], [1.3, 20875.0], [1.4, 20876.0], [1.5, 20877.0], [1.6, 20879.0], [1.7, 20884.0], [1.8, 20890.0], [1.9, 20891.0], [2.0, 20893.0], [2.1, 20904.0], [2.2, 21090.0], [2.3, 21706.0], [2.4, 21707.0], [2.5, 21708.0], [2.6, 21711.0], [2.7, 21714.0], [2.8, 21717.0], [2.9, 21729.0], [3.0, 21732.0], [3.1, 21734.0], [3.2, 21747.0], [3.3, 21783.0], [3.4, 21973.0], [3.5, 21976.0], [3.6, 22001.0], [3.7, 22100.0], [3.8, 22240.0], [3.9, 22254.0], [4.0, 22299.0], [4.1, 22387.0], [4.2, 22397.0], [4.3, 22405.0], [4.4, 22419.0], [4.5, 22500.0], [4.6, 22516.0], [4.7, 22528.0], [4.8, 22534.0], [4.9, 22540.0], [5.0, 22543.0], [5.1, 22545.0], [5.2, 22549.0], [5.3, 22555.0], [5.4, 22557.0], [5.5, 22558.0], [5.6, 22562.0], [5.7, 22700.0], [5.8, 22702.0], [5.9, 22706.0], [6.0, 22710.0], [6.1, 22712.0], [6.2, 22714.0], [6.3, 22716.0], [6.4, 22719.0], [6.5, 22721.0], [6.6, 22724.0], [6.7, 22726.0], [6.8, 22728.0], [6.9, 22733.0], [7.0, 22734.0], [7.1, 22735.0], [7.2, 22737.0], [7.3, 22738.0], [7.4, 22739.0], [7.5, 22742.0], [7.6, 22744.0], [7.7, 22771.0], [7.8, 22778.0], [7.9, 22956.0], [8.0, 23022.0], [8.1, 23120.0], [8.2, 23156.0], [8.3, 23165.0], [8.4, 23166.0], [8.5, 23168.0], [8.6, 23170.0], [8.7, 23181.0], [8.8, 23199.0], [8.9, 23211.0], [9.0, 23220.0], [9.1, 23234.0], [9.2, 23240.0], [9.3, 23243.0], [9.4, 23244.0], [9.5, 23268.0], [9.6, 23336.0], [9.7, 23340.0], [9.8, 23348.0], [9.9, 23360.0], [10.0, 23380.0], [10.1, 23381.0], [10.2, 23398.0], [10.3, 23508.0], [10.4, 23511.0], [10.5, 23524.0], [10.6, 23529.0], [10.7, 23529.0], [10.8, 23533.0], [10.9, 23542.0], [11.0, 23568.0], [11.1, 23576.0], [11.2, 23614.0], [11.3, 23625.0], [11.4, 23672.0], [11.5, 23690.0], [11.6, 23696.0], [11.7, 23700.0], [11.8, 23721.0], [11.9, 23733.0], [12.0, 23767.0], [12.1, 23796.0], [12.2, 23800.0], [12.3, 23828.0], [12.4, 23830.0], [12.5, 23831.0], [12.6, 23835.0], [12.7, 23841.0], [12.8, 23843.0], [12.9, 23866.0], [13.0, 23882.0], [13.1, 23882.0], [13.2, 23899.0], [13.3, 23908.0], [13.4, 23917.0], [13.5, 23958.0], [13.6, 23959.0], [13.7, 23961.0], [13.8, 23963.0], [13.9, 23965.0], [14.0, 23967.0], [14.1, 23968.0], [14.2, 23976.0], [14.3, 23977.0], [14.4, 23978.0], [14.5, 23986.0], [14.6, 23989.0], [14.7, 24017.0], [14.8, 24039.0], [14.9, 24058.0], [15.0, 24063.0], [15.1, 24067.0], [15.2, 24069.0], [15.3, 24094.0], [15.4, 24129.0], [15.5, 24134.0], [15.6, 24135.0], [15.7, 24136.0], [15.8, 24139.0], [15.9, 24140.0], [16.0, 24140.0], [16.1, 24141.0], [16.2, 24141.0], [16.3, 24142.0], [16.4, 24143.0], [16.5, 24144.0], [16.6, 24144.0], [16.7, 24145.0], [16.8, 24145.0], [16.9, 24145.0], [17.0, 24146.0], [17.1, 24146.0], [17.2, 24147.0], [17.3, 24147.0], [17.4, 24148.0], [17.5, 24152.0], [17.6, 24153.0], [17.7, 24154.0], [17.8, 24154.0], [17.9, 24155.0], [18.0, 24157.0], [18.1, 24157.0], [18.2, 24159.0], [18.3, 24161.0], [18.4, 24163.0], [18.5, 24164.0], [18.6, 24165.0], [18.7, 24166.0], [18.8, 24167.0], [18.9, 24169.0], [19.0, 24170.0], [19.1, 24171.0], [19.2, 24172.0], [19.3, 24173.0], [19.4, 24177.0], [19.5, 24216.0], [19.6, 24238.0], [19.7, 24322.0], [19.8, 24344.0], [19.9, 24359.0], [20.0, 24363.0], [20.1, 24366.0], [20.2, 24369.0], [20.3, 24378.0], [20.4, 24380.0], [20.5, 24504.0], [20.6, 24624.0], [20.7, 24710.0], [20.8, 24719.0], [20.9, 24725.0], [21.0, 24725.0], [21.1, 24733.0], [21.2, 24734.0], [21.3, 24735.0], [21.4, 24814.0], [21.5, 24842.0], [21.6, 24913.0], [21.7, 25129.0], [21.8, 25200.0], [21.9, 25554.0], [22.0, 25571.0], [22.1, 25573.0], [22.2, 25593.0], [22.3, 25598.0], [22.4, 25654.0], [22.5, 25661.0], [22.6, 25668.0], [22.7, 25710.0], [22.8, 25792.0], [22.9, 25805.0], [23.0, 25813.0], [23.1, 25864.0], [23.2, 25877.0], [23.3, 25902.0], [23.4, 25952.0], [23.5, 25966.0], [23.6, 26036.0], [23.7, 26070.0], [23.8, 26082.0], [23.9, 26152.0], [24.0, 26201.0], [24.1, 26212.0], [24.2, 26238.0], [24.3, 26247.0], [24.4, 26290.0], [24.5, 26328.0], [24.6, 26330.0], [24.7, 26333.0], [24.8, 26345.0], [24.9, 26354.0], [25.0, 26373.0], [25.1, 26386.0], [25.2, 26405.0], [25.3, 26415.0], [25.4, 26419.0], [25.5, 26420.0], [25.6, 26420.0], [25.7, 26420.0], [25.8, 26422.0], [25.9, 26424.0], [26.0, 26424.0], [26.1, 26425.0], [26.2, 26427.0], [26.3, 26427.0], [26.4, 26428.0], [26.5, 26430.0], [26.6, 26435.0], [26.7, 26437.0], [26.8, 26438.0], [26.9, 26439.0], [27.0, 26444.0], [27.1, 26449.0], [27.2, 26450.0], [27.3, 26451.0], [27.4, 26452.0], [27.5, 26453.0], [27.6, 26454.0], [27.7, 26459.0], [27.8, 26460.0], [27.9, 26466.0], [28.0, 26472.0], [28.1, 26476.0], [28.2, 26481.0], [28.3, 26483.0], [28.4, 26489.0], [28.5, 26497.0], [28.6, 26515.0], [28.7, 26556.0], [28.8, 26597.0], [28.9, 26628.0], [29.0, 26647.0], [29.1, 26733.0], [29.2, 26746.0], [29.3, 26755.0], [29.4, 26793.0], [29.5, 26819.0], [29.6, 26849.0], [29.7, 27010.0], [29.8, 27083.0], [29.9, 27084.0], [30.0, 27085.0], [30.1, 27086.0], [30.2, 27087.0], [30.3, 27087.0], [30.4, 27088.0], [30.5, 27089.0], [30.6, 27091.0], [30.7, 27092.0], [30.8, 27094.0], [30.9, 27095.0], [31.0, 27101.0], [31.1, 27104.0], [31.2, 27107.0], [31.3, 27107.0], [31.4, 27108.0], [31.5, 27111.0], [31.6, 27114.0], [31.7, 27117.0], [31.8, 27211.0], [31.9, 27236.0], [32.0, 27242.0], [32.1, 27266.0], [32.2, 27275.0], [32.3, 27289.0], [32.4, 27295.0], [32.5, 27301.0], [32.6, 27320.0], [32.7, 27381.0], [32.8, 27397.0], [32.9, 27594.0], [33.0, 27679.0], [33.1, 27707.0], [33.2, 27716.0], [33.3, 27726.0], [33.4, 27738.0], [33.5, 27740.0], [33.6, 27744.0], [33.7, 27748.0], [33.8, 27756.0], [33.9, 27761.0], [34.0, 27762.0], [34.1, 27764.0], [34.2, 27766.0], [34.3, 27770.0], [34.4, 27774.0], [34.5, 27775.0], [34.6, 27777.0], [34.7, 27781.0], [34.8, 27782.0], [34.9, 27788.0], [35.0, 27789.0], [35.1, 27796.0], [35.2, 27799.0], [35.3, 27802.0], [35.4, 27824.0], [35.5, 27834.0], [35.6, 27839.0], [35.7, 27851.0], [35.8, 27909.0], [35.9, 28016.0], [36.0, 28019.0], [36.1, 28020.0], [36.2, 28022.0], [36.3, 28023.0], [36.4, 28023.0], [36.5, 28023.0], [36.6, 28024.0], [36.7, 28024.0], [36.8, 28026.0], [36.9, 28026.0], [37.0, 28028.0], [37.1, 28028.0], [37.2, 28028.0], [37.3, 28029.0], [37.4, 28030.0], [37.5, 28031.0], [37.6, 28033.0], [37.7, 28039.0], [37.8, 28041.0], [37.9, 28042.0], [38.0, 28043.0], [38.1, 28044.0], [38.2, 28046.0], [38.3, 28046.0], [38.4, 28048.0], [38.5, 28049.0], [38.6, 28050.0], [38.7, 28050.0], [38.8, 28052.0], [38.9, 28053.0], [39.0, 28054.0], [39.1, 28055.0], [39.2, 28057.0], [39.3, 28058.0], [39.4, 28060.0], [39.5, 28060.0], [39.6, 28060.0], [39.7, 28061.0], [39.8, 28064.0], [39.9, 28064.0], [40.0, 28066.0], [40.1, 28068.0], [40.2, 28070.0], [40.3, 28071.0], [40.4, 28073.0], [40.5, 28074.0], [40.6, 28078.0], [40.7, 28082.0], [40.8, 28082.0], [40.9, 28087.0], [41.0, 28089.0], [41.1, 28095.0], [41.2, 28101.0], [41.3, 28102.0], [41.4, 28106.0], [41.5, 28109.0], [41.6, 28112.0], [41.7, 28113.0], [41.8, 28114.0], [41.9, 28114.0], [42.0, 28115.0], [42.1, 28116.0], [42.2, 28117.0], [42.3, 28118.0], [42.4, 28121.0], [42.5, 28123.0], [42.6, 28123.0], [42.7, 28128.0], [42.8, 28130.0], [42.9, 28133.0], [43.0, 28136.0], [43.1, 28142.0], [43.2, 28147.0], [43.3, 28153.0], [43.4, 28155.0], [43.5, 28156.0], [43.6, 28157.0], [43.7, 28159.0], [43.8, 28164.0], [43.9, 28168.0], [44.0, 28173.0], [44.1, 28182.0], [44.2, 28192.0], [44.3, 28194.0], [44.4, 28198.0], [44.5, 28198.0], [44.6, 28200.0], [44.7, 28203.0], [44.8, 28207.0], [44.9, 28209.0], [45.0, 28210.0], [45.1, 28211.0], [45.2, 28211.0], [45.3, 28211.0], [45.4, 28217.0], [45.5, 28220.0], [45.6, 28228.0], [45.7, 28230.0], [45.8, 28231.0], [45.9, 28233.0], [46.0, 28234.0], [46.1, 28235.0], [46.2, 28236.0], [46.3, 28238.0], [46.4, 28238.0], [46.5, 28239.0], [46.6, 28241.0], [46.7, 28243.0], [46.8, 28244.0], [46.9, 28246.0], [47.0, 28247.0], [47.1, 28317.0], [47.2, 28338.0], [47.3, 28342.0], [47.4, 28356.0], [47.5, 28362.0], [47.6, 28363.0], [47.7, 28363.0], [47.8, 28364.0], [47.9, 28364.0], [48.0, 28367.0], [48.1, 28382.0], [48.2, 28385.0], [48.3, 28388.0], [48.4, 28390.0], [48.5, 28393.0], [48.6, 28394.0], [48.7, 28577.0], [48.8, 28668.0], [48.9, 28684.0], [49.0, 28686.0], [49.1, 28687.0], [49.2, 28688.0], [49.3, 28688.0], [49.4, 28690.0], [49.5, 28696.0], [49.6, 28697.0], [49.7, 28697.0], [49.8, 28698.0], [49.9, 28700.0], [50.0, 28701.0], [50.1, 28708.0], [50.2, 28710.0], [50.3, 28713.0], [50.4, 28716.0], [50.5, 28719.0], [50.6, 28722.0], [50.7, 28725.0], [50.8, 28734.0], [50.9, 28739.0], [51.0, 28741.0], [51.1, 28744.0], [51.2, 28750.0], [51.3, 28758.0], [51.4, 28828.0], [51.5, 28830.0], [51.6, 28830.0], [51.7, 28833.0], [51.8, 28841.0], [51.9, 28890.0], [52.0, 28966.0], [52.1, 28969.0], [52.2, 28970.0], [52.3, 28972.0], [52.4, 28972.0], [52.5, 28975.0], [52.6, 28976.0], [52.7, 28977.0], [52.8, 28981.0], [52.9, 28984.0], [53.0, 28987.0], [53.1, 28988.0], [53.2, 28991.0], [53.3, 28993.0], [53.4, 28995.0], [53.5, 28998.0], [53.6, 29000.0], [53.7, 29000.0], [53.8, 29002.0], [53.9, 29004.0], [54.0, 29006.0], [54.1, 29007.0], [54.2, 29009.0], [54.3, 29011.0], [54.4, 29012.0], [54.5, 29014.0], [54.6, 29014.0], [54.7, 29016.0], [54.8, 29017.0], [54.9, 29018.0], [55.0, 29020.0], [55.1, 29022.0], [55.2, 29024.0], [55.3, 29025.0], [55.4, 29028.0], [55.5, 29029.0], [55.6, 29030.0], [55.7, 29032.0], [55.8, 29033.0], [55.9, 29036.0], [56.0, 29038.0], [56.1, 29179.0], [56.2, 29186.0], [56.3, 29189.0], [56.4, 29194.0], [56.5, 29201.0], [56.6, 29223.0], [56.7, 29231.0], [56.8, 29233.0], [56.9, 29234.0], [57.0, 29236.0], [57.1, 29238.0], [57.2, 29241.0], [57.3, 29243.0], [57.4, 29244.0], [57.5, 29245.0], [57.6, 29247.0], [57.7, 29249.0], [57.8, 29254.0], [57.9, 29254.0], [58.0, 29256.0], [58.1, 29257.0], [58.2, 29258.0], [58.3, 29260.0], [58.4, 29262.0], [58.5, 29264.0], [58.6, 29266.0], [58.7, 29268.0], [58.8, 29269.0], [58.9, 29271.0], [59.0, 29273.0], [59.1, 29275.0], [59.2, 29276.0], [59.3, 29278.0], [59.4, 29279.0], [59.5, 29280.0], [59.6, 29281.0], [59.7, 29283.0], [59.8, 29284.0], [59.9, 29286.0], [60.0, 29288.0], [60.1, 29289.0], [60.2, 29290.0], [60.3, 29291.0], [60.4, 29292.0], [60.5, 29293.0], [60.6, 29296.0], [60.7, 29296.0], [60.8, 29299.0], [60.9, 29299.0], [61.0, 29301.0], [61.1, 29303.0], [61.2, 29305.0], [61.3, 29319.0], [61.4, 29347.0], [61.5, 29348.0], [61.6, 29349.0], [61.7, 29349.0], [61.8, 29351.0], [61.9, 29353.0], [62.0, 29354.0], [62.1, 29437.0], [62.2, 29451.0], [62.3, 29458.0], [62.4, 29463.0], [62.5, 29472.0], [62.6, 29473.0], [62.7, 29478.0], [62.8, 29483.0], [62.9, 29493.0], [63.0, 29495.0], [63.1, 29503.0], [63.2, 29504.0], [63.3, 29508.0], [63.4, 29510.0], [63.5, 29512.0], [63.6, 29514.0], [63.7, 29519.0], [63.8, 29581.0], [63.9, 29583.0], [64.0, 29593.0], [64.1, 29603.0], [64.2, 29606.0], [64.3, 29607.0], [64.4, 29609.0], [64.5, 29610.0], [64.6, 29613.0], [64.7, 29622.0], [64.8, 29625.0], [64.9, 29667.0], [65.0, 29798.0], [65.1, 29840.0], [65.2, 30164.0], [65.3, 30164.0], [65.4, 30169.0], [65.5, 30172.0], [65.6, 30177.0], [65.7, 30183.0], [65.8, 30188.0], [65.9, 30231.0], [66.0, 30238.0], [66.1, 30262.0], [66.2, 30353.0], [66.3, 30358.0], [66.4, 30360.0], [66.5, 30363.0], [66.6, 30366.0], [66.7, 30497.0], [66.8, 30512.0], [66.9, 30528.0], [67.0, 30532.0], [67.1, 30560.0], [67.2, 30577.0], [67.3, 30579.0], [67.4, 30580.0], [67.5, 30582.0], [67.6, 30583.0], [67.7, 30584.0], [67.8, 30586.0], [67.9, 30587.0], [68.0, 30588.0], [68.1, 30589.0], [68.2, 30591.0], [68.3, 30591.0], [68.4, 30593.0], [68.5, 30593.0], [68.6, 30597.0], [68.7, 30606.0], [68.8, 30613.0], [68.9, 30616.0], [69.0, 30619.0], [69.1, 30625.0], [69.2, 30626.0], [69.3, 30629.0], [69.4, 30632.0], [69.5, 30635.0], [69.6, 30637.0], [69.7, 30644.0], [69.8, 30647.0], [69.9, 30649.0], [70.0, 30654.0], [70.1, 30656.0], [70.2, 30658.0], [70.3, 30660.0], [70.4, 30663.0], [70.5, 30665.0], [70.6, 30665.0], [70.7, 30668.0], [70.8, 30670.0], [70.9, 30681.0], [71.0, 30682.0], [71.1, 30688.0], [71.2, 30691.0], [71.3, 30699.0], [71.4, 30737.0], [71.5, 30751.0], [71.6, 30767.0], [71.7, 30768.0], [71.8, 30776.0], [71.9, 30787.0], [72.0, 30798.0], [72.1, 30822.0], [72.2, 30840.0], [72.3, 30842.0], [72.4, 30849.0], [72.5, 30855.0], [72.6, 30858.0], [72.7, 30870.0], [72.8, 30872.0], [72.9, 30873.0], [73.0, 30877.0], [73.1, 30878.0], [73.2, 30879.0], [73.3, 30882.0], [73.4, 30883.0], [73.5, 30887.0], [73.6, 30890.0], [73.7, 30891.0], [73.8, 30896.0], [73.9, 30899.0], [74.0, 30902.0], [74.1, 30904.0], [74.2, 30908.0], [74.3, 30974.0], [74.4, 31008.0], [74.5, 31011.0], [74.6, 31011.0], [74.7, 31015.0], [74.8, 31021.0], [74.9, 31023.0], [75.0, 31031.0], [75.1, 31036.0], [75.2, 31039.0], [75.3, 31045.0], [75.4, 31055.0], [75.5, 31061.0], [75.6, 31062.0], [75.7, 31067.0], [75.8, 31076.0], [75.9, 31157.0], [76.0, 31165.0], [76.1, 31169.0], [76.2, 31171.0], [76.3, 31174.0], [76.4, 31177.0], [76.5, 31179.0], [76.6, 31181.0], [76.7, 31186.0], [76.8, 31193.0], [76.9, 31196.0], [77.0, 31200.0], [77.1, 31221.0], [77.2, 31222.0], [77.3, 31228.0], [77.4, 31229.0], [77.5, 31231.0], [77.6, 31233.0], [77.7, 31243.0], [77.8, 31255.0], [77.9, 31269.0], [78.0, 31286.0], [78.1, 31289.0], [78.2, 31293.0], [78.3, 31298.0], [78.4, 31298.0], [78.5, 31300.0], [78.6, 31302.0], [78.7, 31305.0], [78.8, 31307.0], [78.9, 31308.0], [79.0, 31311.0], [79.1, 31315.0], [79.2, 31318.0], [79.3, 31322.0], [79.4, 31325.0], [79.5, 31327.0], [79.6, 31328.0], [79.7, 31331.0], [79.8, 31334.0], [79.9, 31343.0], [80.0, 31350.0], [80.1, 31355.0], [80.2, 31362.0], [80.3, 31363.0], [80.4, 31365.0], [80.5, 31366.0], [80.6, 31370.0], [80.7, 31372.0], [80.8, 31373.0], [80.9, 31378.0], [81.0, 31382.0], [81.1, 31390.0], [81.2, 31396.0], [81.3, 31400.0], [81.4, 31400.0], [81.5, 31403.0], [81.6, 31409.0], [81.7, 31415.0], [81.8, 31424.0], [81.9, 31432.0], [82.0, 31440.0], [82.1, 31443.0], [82.2, 31449.0], [82.3, 31453.0], [82.4, 31457.0], [82.5, 31466.0], [82.6, 31469.0], [82.7, 31482.0], [82.8, 31491.0], [82.9, 31504.0], [83.0, 31507.0], [83.1, 31510.0], [83.2, 31514.0], [83.3, 31524.0], [83.4, 31530.0], [83.5, 31534.0], [83.6, 31535.0], [83.7, 31537.0], [83.8, 31539.0], [83.9, 31544.0], [84.0, 31548.0], [84.1, 31550.0], [84.2, 31554.0], [84.3, 31556.0], [84.4, 31558.0], [84.5, 31558.0], [84.6, 31561.0], [84.7, 31562.0], [84.8, 31565.0], [84.9, 31567.0], [85.0, 31570.0], [85.1, 31572.0], [85.2, 31575.0], [85.3, 31575.0], [85.4, 31578.0], [85.5, 31580.0], [85.6, 31581.0], [85.7, 31583.0], [85.8, 31585.0], [85.9, 31588.0], [86.0, 31593.0], [86.1, 31595.0], [86.2, 31598.0], [86.3, 31598.0], [86.4, 31603.0], [86.5, 31607.0], [86.6, 31613.0], [86.7, 31620.0], [86.8, 31625.0], [86.9, 31631.0], [87.0, 31639.0], [87.1, 31677.0], [87.2, 31685.0], [87.3, 31694.0], [87.4, 31694.0], [87.5, 31697.0], [87.6, 31698.0], [87.7, 31700.0], [87.8, 31750.0], [87.9, 31922.0], [88.0, 31928.0], [88.1, 31932.0], [88.2, 31985.0], [88.3, 31996.0], [88.4, 32057.0], [88.5, 32074.0], [88.6, 32079.0], [88.7, 32102.0], [88.8, 32103.0], [88.9, 32108.0], [89.0, 32110.0], [89.1, 32112.0], [89.2, 32113.0], [89.3, 32114.0], [89.4, 32115.0], [89.5, 32116.0], [89.6, 32117.0], [89.7, 32117.0], [89.8, 32120.0], [89.9, 32126.0], [90.0, 32134.0], [90.1, 32151.0], [90.2, 32178.0], [90.3, 32241.0], [90.4, 32246.0], [90.5, 32260.0], [90.6, 32271.0], [90.7, 32290.0], [90.8, 32311.0], [90.9, 32327.0], [91.0, 32372.0], [91.1, 32386.0], [91.2, 32419.0], [91.3, 32463.0], [91.4, 32472.0], [91.5, 32483.0], [91.6, 32491.0], [91.7, 32499.0], [91.8, 32511.0], [91.9, 32537.0], [92.0, 32539.0], [92.1, 32542.0], [92.2, 32546.0], [92.3, 32554.0], [92.4, 32560.0], [92.5, 32563.0], [92.6, 32568.0], [92.7, 32583.0], [92.8, 32625.0], [92.9, 32638.0], [93.0, 32641.0], [93.1, 32651.0], [93.2, 32656.0], [93.3, 32658.0], [93.4, 32660.0], [93.5, 32678.0], [93.6, 32750.0], [93.7, 32763.0], [93.8, 32821.0], [93.9, 32831.0], [94.0, 32873.0], [94.1, 32877.0], [94.2, 32877.0], [94.3, 32878.0], [94.4, 32879.0], [94.5, 32879.0], [94.6, 32879.0], [94.7, 32880.0], [94.8, 32881.0], [94.9, 32881.0], [95.0, 32881.0], [95.1, 32883.0], [95.2, 32883.0], [95.3, 32883.0], [95.4, 32884.0], [95.5, 32884.0], [95.6, 32885.0], [95.7, 32885.0], [95.8, 32885.0], [95.9, 32886.0], [96.0, 32887.0], [96.1, 32887.0], [96.2, 32888.0], [96.3, 32889.0], [96.4, 32890.0], [96.5, 32890.0], [96.6, 32890.0], [96.7, 32890.0], [96.8, 32892.0], [96.9, 32893.0], [97.0, 32894.0], [97.1, 32895.0], [97.2, 32895.0], [97.3, 32896.0], [97.4, 32896.0], [97.5, 32898.0], [97.6, 32898.0], [97.7, 32898.0], [97.8, 32899.0], [97.9, 32901.0], [98.0, 32903.0], [98.1, 32903.0], [98.2, 32904.0], [98.3, 32905.0], [98.4, 32905.0], [98.5, 32905.0], [98.6, 32907.0], [98.7, 32908.0], [98.8, 32908.0], [98.9, 32910.0], [99.0, 32912.0], [99.1, 32913.0], [99.2, 32915.0], [99.3, 32917.0], [99.4, 32920.0], [99.5, 32923.0], [99.6, 32925.0], [99.7, 32927.0], [99.8, 33288.0], [99.9, 33378.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 16000.0, "maxY": 108.0, "series": [{"data": [[32900.0, 38.0], [33300.0, 3.0], [16000.0, 3.0], [20700.0, 6.0], [20800.0, 25.0], [20600.0, 7.0], [21000.0, 1.0], [20900.0, 3.0], [22300.0, 4.0], [21900.0, 5.0], [22100.0, 2.0], [22500.0, 24.0], [21700.0, 21.0], [22000.0, 2.0], [22400.0, 5.0], [21600.0, 1.0], [22200.0, 5.0], [23300.0, 13.0], [23100.0, 16.0], [23000.0, 2.0], [23200.0, 14.0], [22700.0, 43.0], [23500.0, 17.0], [22900.0, 1.0], [22800.0, 1.0], [23400.0, 1.0], [23800.0, 21.0], [23900.0, 29.0], [24100.0, 83.0], [24000.0, 13.0], [23600.0, 11.0], [23700.0, 10.0], [24300.0, 15.0], [24200.0, 4.0], [24400.0, 1.0], [24500.0, 2.0], [24800.0, 4.0], [25200.0, 2.0], [25100.0, 2.0], [24700.0, 14.0], [25000.0, 1.0], [24900.0, 1.0], [24600.0, 2.0], [25500.0, 9.0], [26400.0, 67.0], [26000.0, 6.0], [26200.0, 9.0], [25900.0, 6.0], [25800.0, 9.0], [25700.0, 3.0], [26100.0, 2.0], [25600.0, 7.0], [26300.0, 15.0], [26600.0, 5.0], [26500.0, 6.0], [27200.0, 15.0], [27500.0, 2.0], [27100.0, 16.0], [27000.0, 25.0], [26700.0, 7.0], [26800.0, 5.0], [27600.0, 3.0], [27300.0, 7.0], [27900.0, 1.0], [28000.0, 108.0], [27700.0, 43.0], [27800.0, 11.0], [28300.0, 33.0], [28100.0, 68.0], [28200.0, 49.0], [28600.0, 23.0], [28500.0, 1.0], [29500.0, 20.0], [28900.0, 32.0], [29000.0, 49.0], [29100.0, 9.0], [29200.0, 90.0], [29600.0, 18.0], [29300.0, 21.0], [29400.0, 21.0], [28800.0, 12.0], [28700.0, 30.0], [30600.0, 54.0], [30500.0, 38.0], [30700.0, 14.0], [30100.0, 13.0], [30200.0, 7.0], [30300.0, 10.0], [29700.0, 1.0], [29800.0, 3.0], [30400.0, 1.0], [31500.0, 69.0], [30800.0, 38.0], [31400.0, 32.0], [31300.0, 57.0], [31600.0, 26.0], [31700.0, 4.0], [30900.0, 8.0], [31200.0, 29.0], [31000.0, 30.0], [31100.0, 23.0], [32600.0, 17.0], [32300.0, 8.0], [32400.0, 12.0], [31900.0, 10.0], [32500.0, 20.0], [32700.0, 4.0], [32100.0, 31.0], [32000.0, 7.0], [32200.0, 10.0], [32800.0, 82.0], [33200.0, 1.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 33300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2000.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2000.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1770.2196850393707, "minX": 1.57139382E12, "maxY": 1977.8575342465765, "series": [{"data": [[1.57139382E12, 1977.8575342465765], [1.57139388E12, 1770.2196850393707]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139388E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16027.333333333334, "minX": 3.0, "maxY": 32913.0, "series": [{"data": [[3.0, 16027.333333333334], [1766.0, 29515.0], [1788.0, 28246.0], [1791.0, 28234.5], [1760.0, 29513.0], [1762.0, 29396.0], [1761.0, 29508.5], [1765.0, 30135.5], [1763.0, 29520.0], [1767.0, 29404.0], [1770.0, 30937.0], [1769.0, 32910.0], [1773.0, 32905.0], [1771.0, 31609.5], [1775.0, 30754.0], [1774.0, 28804.5], [1790.0, 28166.0], [1789.0, 29304.0], [1787.0, 30662.0], [1786.0, 31255.0], [1784.0, 28771.5], [1782.0, 29303.0], [1781.0, 28677.5], [1780.0, 28095.0], [1779.0, 28772.5], [1776.0, 29428.333333333332], [1758.0, 30718.0], [1735.0, 30587.757865937045], [1737.0, 28814.409090909092], [1756.0, 30061.527027027023], [1757.0, 32913.0], [1845.0, 28784.0], [1830.0, 32247.333333333332], [1850.0, 32901.0], [1855.0, 32393.333333333332], [1825.0, 31914.333333333332], [1824.0, 31787.0], [1829.0, 31774.5], [1828.0, 30253.5], [1831.0, 30456.999999999996], [1835.0, 29856.5], [1834.0, 30904.0], [1837.0, 29934.0], [1836.0, 30613.0], [1839.0, 28238.0], [1838.0, 28114.0], [1852.0, 31520.833333333336], [1851.0, 31393.0], [1849.0, 30571.5], [1848.0, 28235.5], [1847.0, 28792.75], [1843.0, 28237.0], [1842.0, 28356.833333333332], [1840.0, 28865.0], [1807.0, 29226.0], [1805.0, 30905.333333333332], [1803.0, 31401.0], [1802.0, 30408.666666666668], [1800.0, 28157.0], [1799.0, 31122.0], [1797.0, 31514.0], [1796.0, 30234.5], [1795.0, 28629.5], [1794.0, 30309.5], [1792.0, 29014.0], [1823.0, 30360.333333333332], [1822.0, 31723.0], [1821.0, 30585.0], [1820.0, 30084.5], [1819.0, 30884.5], [1818.0, 30533.25], [1817.0, 30865.0], [1816.0, 30864.0], [1813.0, 31926.0], [1812.0, 30865.5], [1809.0, 30891.0], [1808.0, 30219.166666666664], [1893.0, 29038.0], [1908.0, 30036.75], [1912.0, 29748.169354838705], [1889.0, 30692.333333333332], [1888.0, 28050.0], [1892.0, 30255.666666666668], [1890.0, 29708.5], [1894.0, 32895.0], [1896.0, 28071.0], [1895.0, 32176.0], [1911.0, 28969.0], [1910.0, 29930.5], [1907.0, 29781.5], [1906.0, 29449.25], [1905.0, 28684.5], [1904.0, 29914.5], [1886.0, 31438.333333333332], [1856.0, 29419.0], [1860.0, 28155.0], [1857.0, 32337.25], [1863.0, 31612.0], [1862.0, 28117.0], [1867.0, 28106.0], [1865.0, 29594.333333333332], [1869.0, 28073.333333333332], [1868.0, 29198.666666666668], [1871.0, 28077.333333333332], [1870.0, 30328.666666666668], [1884.0, 29247.0], [1883.0, 29293.666666666668], [1882.0, 28046.0], [1881.0, 30335.0], [1880.0, 29233.0], [1877.0, 30004.333333333332], [1874.0, 29212.5], [1902.0, 28606.0], [1901.0, 29030.0], [1899.0, 29133.0], [1897.0, 30967.5], [1964.0, 25670.61915367482], [2000.0, 23239.45907473311]], "isOverall": false, "label": "Access Movies Page", "isController": false}, {"data": [[1846.0064999999984, 28253.5025]], "isOverall": false, "label": "Access Movies Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2725.3333333333335, "minX": 1.57139382E12, "maxY": 139168.48333333334, "series": [{"data": [[1.57139382E12, 79994.31666666667], [1.57139388E12, 139168.48333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57139382E12, 2725.3333333333335], [1.57139388E12, 4741.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139388E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 24734.789041095868, "minX": 1.57139382E12, "maxY": 30276.070078740137, "series": [{"data": [[1.57139382E12, 24734.789041095868], [1.57139388E12, 30276.070078740137]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139388E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 24298.30547945204, "minX": 1.57139382E12, "maxY": 28245.89763779529, "series": [{"data": [[1.57139382E12, 24298.30547945204], [1.57139388E12, 28245.89763779529]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139388E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9321.312328767135, "minX": 1.57139382E12, "maxY": 9690.643307086615, "series": [{"data": [[1.57139382E12, 9321.312328767135], [1.57139388E12, 9690.643307086615]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139388E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16027.0, "minX": 1.57139382E12, "maxY": 33397.0, "series": [{"data": [[1.57139382E12, 28076.0], [1.57139388E12, 33397.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57139382E12, 20658.0], [1.57139388E12, 16027.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57139382E12, 27688.0], [1.57139388E12, 32759.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57139382E12, 28060.0], [1.57139388E12, 32917.87]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57139382E12, 28028.45], [1.57139388E12, 32892.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139388E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16027.0, "minX": 3.0, "maxY": 30591.0, "series": [{"data": [[281.0, 23830.0], [140.0, 24067.5], [1267.0, 30591.0], [3.0, 16027.0], [101.0, 26515.0], [208.0, 26643.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1267.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 15979.0, "minX": 3.0, "maxY": 28461.0, "series": [{"data": [[281.0, 22564.0], [140.0, 23673.0], [1267.0, 28461.0], [3.0, 15979.0], [101.0, 26026.0], [208.0, 26643.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1267.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.57139382E12, "maxY": 33.333333333333336, "series": [{"data": [[1.57139382E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139382E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.166666666666666, "minX": 1.57139382E12, "maxY": 21.166666666666668, "series": [{"data": [[1.57139382E12, 12.166666666666666], [1.57139388E12, 21.166666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139388E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.166666666666666, "minX": 1.57139382E12, "maxY": 21.166666666666668, "series": [{"data": [[1.57139382E12, 12.166666666666666], [1.57139388E12, 21.166666666666668]], "isOverall": false, "label": "Access Movies Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139388E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.166666666666666, "minX": 1.57139382E12, "maxY": 21.166666666666668, "series": [{"data": [[1.57139382E12, 12.166666666666666], [1.57139388E12, 21.166666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139388E12, "title": "Total Transactions Per Second"}},
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

