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
        data: {"result": {"minY": 15052.0, "minX": 0.0, "maxY": 36109.0, "series": [{"data": [[0.0, 15052.0], [0.1, 15212.0], [0.2, 15242.0], [0.3, 15400.0], [0.4, 15526.0], [0.5, 15529.0], [0.6, 15657.0], [0.7, 15703.0], [0.8, 15731.0], [0.9, 15789.0], [1.0, 15943.0], [1.1, 15997.0], [1.2, 16107.0], [1.3, 16110.0], [1.4, 16159.0], [1.5, 16183.0], [1.6, 16283.0], [1.7, 16312.0], [1.8, 16351.0], [1.9, 16372.0], [2.0, 16390.0], [2.1, 16397.0], [2.2, 16423.0], [2.3, 16435.0], [2.4, 16483.0], [2.5, 16559.0], [2.6, 16594.0], [2.7, 16596.0], [2.8, 16630.0], [2.9, 16677.0], [3.0, 16695.0], [3.1, 16722.0], [3.2, 16730.0], [3.3, 16734.0], [3.4, 16744.0], [3.5, 16777.0], [3.6, 16800.0], [3.7, 16809.0], [3.8, 16823.0], [3.9, 16884.0], [4.0, 16891.0], [4.1, 16934.0], [4.2, 16986.0], [4.3, 16993.0], [4.4, 17011.0], [4.5, 17030.0], [4.6, 17037.0], [4.7, 17082.0], [4.8, 17109.0], [4.9, 17135.0], [5.0, 17255.0], [5.1, 17286.0], [5.2, 17302.0], [5.3, 17339.0], [5.4, 17342.0], [5.5, 17367.0], [5.6, 17401.0], [5.7, 17405.0], [5.8, 17414.0], [5.9, 17428.0], [6.0, 17453.0], [6.1, 17458.0], [6.2, 17476.0], [6.3, 17478.0], [6.4, 17488.0], [6.5, 17502.0], [6.6, 17510.0], [6.7, 17526.0], [6.8, 17540.0], [6.9, 17547.0], [7.0, 17553.0], [7.1, 17568.0], [7.2, 17569.0], [7.3, 17574.0], [7.4, 17587.0], [7.5, 17589.0], [7.6, 17596.0], [7.7, 17603.0], [7.8, 17604.0], [7.9, 17608.0], [8.0, 17610.0], [8.1, 17616.0], [8.2, 17636.0], [8.3, 17647.0], [8.4, 17654.0], [8.5, 17658.0], [8.6, 17667.0], [8.7, 17721.0], [8.8, 17733.0], [8.9, 17750.0], [9.0, 17761.0], [9.1, 17783.0], [9.2, 17845.0], [9.3, 17862.0], [9.4, 17872.0], [9.5, 17893.0], [9.6, 17899.0], [9.7, 17919.0], [9.8, 17941.0], [9.9, 17957.0], [10.0, 17960.0], [10.1, 17991.0], [10.2, 18008.0], [10.3, 18024.0], [10.4, 18038.0], [10.5, 18042.0], [10.6, 18054.0], [10.7, 18105.0], [10.8, 18122.0], [10.9, 18130.0], [11.0, 18136.0], [11.1, 18139.0], [11.2, 18156.0], [11.3, 18177.0], [11.4, 18180.0], [11.5, 18205.0], [11.6, 18215.0], [11.7, 18228.0], [11.8, 18237.0], [11.9, 18248.0], [12.0, 18251.0], [12.1, 18268.0], [12.2, 18288.0], [12.3, 18311.0], [12.4, 18316.0], [12.5, 18317.0], [12.6, 18327.0], [12.7, 18333.0], [12.8, 18351.0], [12.9, 18360.0], [13.0, 18377.0], [13.1, 18391.0], [13.2, 18395.0], [13.3, 18398.0], [13.4, 18402.0], [13.5, 18404.0], [13.6, 18416.0], [13.7, 18419.0], [13.8, 18423.0], [13.9, 18431.0], [14.0, 18432.0], [14.1, 18434.0], [14.2, 18438.0], [14.3, 18438.0], [14.4, 18445.0], [14.5, 18451.0], [14.6, 18453.0], [14.7, 18465.0], [14.8, 18467.0], [14.9, 18469.0], [15.0, 18472.0], [15.1, 18475.0], [15.2, 18478.0], [15.3, 18484.0], [15.4, 18491.0], [15.5, 18519.0], [15.6, 18532.0], [15.7, 18537.0], [15.8, 18559.0], [15.9, 18563.0], [16.0, 18575.0], [16.1, 18575.0], [16.2, 18575.0], [16.3, 18580.0], [16.4, 18582.0], [16.5, 18598.0], [16.6, 18607.0], [16.7, 18612.0], [16.8, 18613.0], [16.9, 18625.0], [17.0, 18630.0], [17.1, 18637.0], [17.2, 18647.0], [17.3, 18659.0], [17.4, 18671.0], [17.5, 18676.0], [17.6, 18679.0], [17.7, 18685.0], [17.8, 18695.0], [17.9, 18702.0], [18.0, 18711.0], [18.1, 18723.0], [18.2, 18724.0], [18.3, 18728.0], [18.4, 18733.0], [18.5, 18753.0], [18.6, 18773.0], [18.7, 18791.0], [18.8, 18802.0], [18.9, 18843.0], [19.0, 18856.0], [19.1, 18862.0], [19.2, 18867.0], [19.3, 18882.0], [19.4, 18907.0], [19.5, 18913.0], [19.6, 18919.0], [19.7, 18935.0], [19.8, 18965.0], [19.9, 19004.0], [20.0, 19020.0], [20.1, 19040.0], [20.2, 19048.0], [20.3, 19055.0], [20.4, 19066.0], [20.5, 19072.0], [20.6, 19092.0], [20.7, 19098.0], [20.8, 19117.0], [20.9, 19123.0], [21.0, 19149.0], [21.1, 19161.0], [21.2, 19164.0], [21.3, 19166.0], [21.4, 19174.0], [21.5, 19199.0], [21.6, 19201.0], [21.7, 19208.0], [21.8, 19213.0], [21.9, 19216.0], [22.0, 19221.0], [22.1, 19226.0], [22.2, 19229.0], [22.3, 19233.0], [22.4, 19234.0], [22.5, 19236.0], [22.6, 19257.0], [22.7, 19277.0], [22.8, 19282.0], [22.9, 19294.0], [23.0, 19303.0], [23.1, 19311.0], [23.2, 19327.0], [23.3, 19339.0], [23.4, 19348.0], [23.5, 19356.0], [23.6, 19376.0], [23.7, 19379.0], [23.8, 19384.0], [23.9, 19395.0], [24.0, 19412.0], [24.1, 19437.0], [24.2, 19443.0], [24.3, 19454.0], [24.4, 19466.0], [24.5, 19486.0], [24.6, 19494.0], [24.7, 19514.0], [24.8, 19517.0], [24.9, 19522.0], [25.0, 19525.0], [25.1, 19536.0], [25.2, 19537.0], [25.3, 19545.0], [25.4, 19550.0], [25.5, 19551.0], [25.6, 19564.0], [25.7, 19570.0], [25.8, 19575.0], [25.9, 19579.0], [26.0, 19582.0], [26.1, 19595.0], [26.2, 19644.0], [26.3, 19654.0], [26.4, 19669.0], [26.5, 19681.0], [26.6, 19686.0], [26.7, 19690.0], [26.8, 19698.0], [26.9, 19706.0], [27.0, 19739.0], [27.1, 19745.0], [27.2, 19756.0], [27.3, 19772.0], [27.4, 19787.0], [27.5, 19796.0], [27.6, 19806.0], [27.7, 19812.0], [27.8, 19820.0], [27.9, 19825.0], [28.0, 19840.0], [28.1, 19852.0], [28.2, 19868.0], [28.3, 19877.0], [28.4, 19879.0], [28.5, 19883.0], [28.6, 19884.0], [28.7, 19892.0], [28.8, 19907.0], [28.9, 19915.0], [29.0, 19918.0], [29.1, 19920.0], [29.2, 19925.0], [29.3, 19926.0], [29.4, 19927.0], [29.5, 19931.0], [29.6, 19942.0], [29.7, 19945.0], [29.8, 19952.0], [29.9, 19957.0], [30.0, 19984.0], [30.1, 19992.0], [30.2, 20003.0], [30.3, 20008.0], [30.4, 20014.0], [30.5, 20020.0], [30.6, 20021.0], [30.7, 20038.0], [30.8, 20044.0], [30.9, 20053.0], [31.0, 20054.0], [31.1, 20067.0], [31.2, 20070.0], [31.3, 20074.0], [31.4, 20081.0], [31.5, 20083.0], [31.6, 20085.0], [31.7, 20091.0], [31.8, 20094.0], [31.9, 20099.0], [32.0, 20101.0], [32.1, 20101.0], [32.2, 20104.0], [32.3, 20105.0], [32.4, 20108.0], [32.5, 20113.0], [32.6, 20117.0], [32.7, 20125.0], [32.8, 20127.0], [32.9, 20130.0], [33.0, 20135.0], [33.1, 20136.0], [33.2, 20139.0], [33.3, 20142.0], [33.4, 20145.0], [33.5, 20149.0], [33.6, 20159.0], [33.7, 20165.0], [33.8, 20168.0], [33.9, 20173.0], [34.0, 20177.0], [34.1, 20187.0], [34.2, 20195.0], [34.3, 20197.0], [34.4, 20209.0], [34.5, 20215.0], [34.6, 20217.0], [34.7, 20218.0], [34.8, 20242.0], [34.9, 20250.0], [35.0, 20257.0], [35.1, 20264.0], [35.2, 20268.0], [35.3, 20274.0], [35.4, 20275.0], [35.5, 20277.0], [35.6, 20278.0], [35.7, 20288.0], [35.8, 20318.0], [35.9, 20334.0], [36.0, 20359.0], [36.1, 20388.0], [36.2, 20396.0], [36.3, 20415.0], [36.4, 20425.0], [36.5, 20431.0], [36.6, 20450.0], [36.7, 20489.0], [36.8, 20508.0], [36.9, 20515.0], [37.0, 20516.0], [37.1, 20525.0], [37.2, 20544.0], [37.3, 20544.0], [37.4, 20545.0], [37.5, 20558.0], [37.6, 20564.0], [37.7, 20569.0], [37.8, 20576.0], [37.9, 20577.0], [38.0, 20585.0], [38.1, 20587.0], [38.2, 20589.0], [38.3, 20589.0], [38.4, 20590.0], [38.5, 20594.0], [38.6, 20597.0], [38.7, 20607.0], [38.8, 20610.0], [38.9, 20614.0], [39.0, 20614.0], [39.1, 20632.0], [39.2, 20640.0], [39.3, 20644.0], [39.4, 20647.0], [39.5, 20660.0], [39.6, 20664.0], [39.7, 20668.0], [39.8, 20674.0], [39.9, 20693.0], [40.0, 20728.0], [40.1, 20744.0], [40.2, 20762.0], [40.3, 20778.0], [40.4, 20811.0], [40.5, 20832.0], [40.6, 20837.0], [40.7, 20855.0], [40.8, 20858.0], [40.9, 20865.0], [41.0, 20878.0], [41.1, 20885.0], [41.2, 20890.0], [41.3, 20903.0], [41.4, 20908.0], [41.5, 20909.0], [41.6, 20911.0], [41.7, 20921.0], [41.8, 20925.0], [41.9, 20935.0], [42.0, 20946.0], [42.1, 20953.0], [42.2, 20958.0], [42.3, 20961.0], [42.4, 20965.0], [42.5, 20968.0], [42.6, 20974.0], [42.7, 20985.0], [42.8, 20994.0], [42.9, 21004.0], [43.0, 21037.0], [43.1, 21043.0], [43.2, 21053.0], [43.3, 21054.0], [43.4, 21063.0], [43.5, 21074.0], [43.6, 21098.0], [43.7, 21109.0], [43.8, 21162.0], [43.9, 21169.0], [44.0, 21181.0], [44.1, 21203.0], [44.2, 21214.0], [44.3, 21259.0], [44.4, 21272.0], [44.5, 21276.0], [44.6, 21294.0], [44.7, 21295.0], [44.8, 21318.0], [44.9, 21332.0], [45.0, 21339.0], [45.1, 21342.0], [45.2, 21354.0], [45.3, 21361.0], [45.4, 21382.0], [45.5, 21389.0], [45.6, 21404.0], [45.7, 21417.0], [45.8, 21433.0], [45.9, 21445.0], [46.0, 21460.0], [46.1, 21478.0], [46.2, 21502.0], [46.3, 21555.0], [46.4, 21580.0], [46.5, 21586.0], [46.6, 21652.0], [46.7, 21678.0], [46.8, 21690.0], [46.9, 21714.0], [47.0, 21727.0], [47.1, 21731.0], [47.2, 21754.0], [47.3, 21769.0], [47.4, 21775.0], [47.5, 21782.0], [47.6, 21789.0], [47.7, 21792.0], [47.8, 21820.0], [47.9, 21826.0], [48.0, 21857.0], [48.1, 21874.0], [48.2, 21884.0], [48.3, 21892.0], [48.4, 21908.0], [48.5, 21945.0], [48.6, 21969.0], [48.7, 21974.0], [48.8, 21979.0], [48.9, 21993.0], [49.0, 22006.0], [49.1, 22024.0], [49.2, 22031.0], [49.3, 22075.0], [49.4, 22092.0], [49.5, 22116.0], [49.6, 22133.0], [49.7, 22144.0], [49.8, 22165.0], [49.9, 22168.0], [50.0, 22179.0], [50.1, 22199.0], [50.2, 22224.0], [50.3, 22239.0], [50.4, 22256.0], [50.5, 22280.0], [50.6, 22297.0], [50.7, 22318.0], [50.8, 22322.0], [50.9, 22336.0], [51.0, 22344.0], [51.1, 22354.0], [51.2, 22366.0], [51.3, 22375.0], [51.4, 22390.0], [51.5, 22401.0], [51.6, 22499.0], [51.7, 22508.0], [51.8, 22543.0], [51.9, 22547.0], [52.0, 22569.0], [52.1, 22571.0], [52.2, 22574.0], [52.3, 22589.0], [52.4, 22589.0], [52.5, 22590.0], [52.6, 22629.0], [52.7, 22631.0], [52.8, 22641.0], [52.9, 22652.0], [53.0, 22680.0], [53.1, 22714.0], [53.2, 22724.0], [53.3, 22729.0], [53.4, 22739.0], [53.5, 22758.0], [53.6, 22782.0], [53.7, 22810.0], [53.8, 22817.0], [53.9, 22854.0], [54.0, 22858.0], [54.1, 22859.0], [54.2, 22866.0], [54.3, 22870.0], [54.4, 22881.0], [54.5, 22894.0], [54.6, 22922.0], [54.7, 22939.0], [54.8, 22952.0], [54.9, 22959.0], [55.0, 22969.0], [55.1, 22989.0], [55.2, 22992.0], [55.3, 23016.0], [55.4, 23021.0], [55.5, 23028.0], [55.6, 23034.0], [55.7, 23042.0], [55.8, 23072.0], [55.9, 23093.0], [56.0, 23101.0], [56.1, 23110.0], [56.2, 23135.0], [56.3, 23147.0], [56.4, 23155.0], [56.5, 23161.0], [56.6, 23183.0], [56.7, 23218.0], [56.8, 23222.0], [56.9, 23238.0], [57.0, 23249.0], [57.1, 23261.0], [57.2, 23268.0], [57.3, 23274.0], [57.4, 23279.0], [57.5, 23288.0], [57.6, 23292.0], [57.7, 23298.0], [57.8, 23301.0], [57.9, 23307.0], [58.0, 23312.0], [58.1, 23315.0], [58.2, 23320.0], [58.3, 23332.0], [58.4, 23334.0], [58.5, 23345.0], [58.6, 23350.0], [58.7, 23360.0], [58.8, 23368.0], [58.9, 23369.0], [59.0, 23371.0], [59.1, 23382.0], [59.2, 23390.0], [59.3, 23399.0], [59.4, 23419.0], [59.5, 23482.0], [59.6, 23525.0], [59.7, 23553.0], [59.8, 23566.0], [59.9, 23570.0], [60.0, 23575.0], [60.1, 23598.0], [60.2, 23602.0], [60.3, 23606.0], [60.4, 23610.0], [60.5, 23614.0], [60.6, 23620.0], [60.7, 23624.0], [60.8, 23630.0], [60.9, 23635.0], [61.0, 23678.0], [61.1, 23709.0], [61.2, 23717.0], [61.3, 23730.0], [61.4, 23758.0], [61.5, 23769.0], [61.6, 23795.0], [61.7, 23824.0], [61.8, 23856.0], [61.9, 23911.0], [62.0, 23931.0], [62.1, 23966.0], [62.2, 24012.0], [62.3, 24024.0], [62.4, 24029.0], [62.5, 24032.0], [62.6, 24052.0], [62.7, 24054.0], [62.8, 24058.0], [62.9, 24064.0], [63.0, 24070.0], [63.1, 24075.0], [63.2, 24086.0], [63.3, 24094.0], [63.4, 24108.0], [63.5, 24117.0], [63.6, 24119.0], [63.7, 24121.0], [63.8, 24124.0], [63.9, 24162.0], [64.0, 24175.0], [64.1, 24223.0], [64.2, 24228.0], [64.3, 24258.0], [64.4, 24261.0], [64.5, 24270.0], [64.6, 24279.0], [64.7, 24345.0], [64.8, 24357.0], [64.9, 24387.0], [65.0, 24409.0], [65.1, 24436.0], [65.2, 24444.0], [65.3, 24476.0], [65.4, 24488.0], [65.5, 24493.0], [65.6, 24520.0], [65.7, 24530.0], [65.8, 24575.0], [65.9, 24618.0], [66.0, 24638.0], [66.1, 24647.0], [66.2, 24661.0], [66.3, 24680.0], [66.4, 24708.0], [66.5, 24740.0], [66.6, 24775.0], [66.7, 24787.0], [66.8, 24793.0], [66.9, 24823.0], [67.0, 24867.0], [67.1, 24884.0], [67.2, 24918.0], [67.3, 24927.0], [67.4, 24949.0], [67.5, 24991.0], [67.6, 24999.0], [67.7, 25032.0], [67.8, 25038.0], [67.9, 25048.0], [68.0, 25048.0], [68.1, 25054.0], [68.2, 25056.0], [68.3, 25073.0], [68.4, 25095.0], [68.5, 25098.0], [68.6, 25107.0], [68.7, 25121.0], [68.8, 25138.0], [68.9, 25144.0], [69.0, 25170.0], [69.1, 25173.0], [69.2, 25184.0], [69.3, 25189.0], [69.4, 25191.0], [69.5, 25192.0], [69.6, 25204.0], [69.7, 25209.0], [69.8, 25210.0], [69.9, 25220.0], [70.0, 25228.0], [70.1, 25231.0], [70.2, 25233.0], [70.3, 25256.0], [70.4, 25289.0], [70.5, 25330.0], [70.6, 25364.0], [70.7, 25406.0], [70.8, 25418.0], [70.9, 25431.0], [71.0, 25456.0], [71.1, 25468.0], [71.2, 25497.0], [71.3, 25504.0], [71.4, 25514.0], [71.5, 25580.0], [71.6, 25600.0], [71.7, 25675.0], [71.8, 25710.0], [71.9, 25735.0], [72.0, 25738.0], [72.1, 25753.0], [72.2, 25833.0], [72.3, 25893.0], [72.4, 25903.0], [72.5, 25911.0], [72.6, 25920.0], [72.7, 25937.0], [72.8, 25961.0], [72.9, 25968.0], [73.0, 25974.0], [73.1, 25988.0], [73.2, 26088.0], [73.3, 26102.0], [73.4, 26109.0], [73.5, 26124.0], [73.6, 26145.0], [73.7, 26158.0], [73.8, 26183.0], [73.9, 26226.0], [74.0, 26240.0], [74.1, 26251.0], [74.2, 26265.0], [74.3, 26271.0], [74.4, 26276.0], [74.5, 26282.0], [74.6, 26295.0], [74.7, 26344.0], [74.8, 26358.0], [74.9, 26375.0], [75.0, 26410.0], [75.1, 26414.0], [75.2, 26422.0], [75.3, 26426.0], [75.4, 26434.0], [75.5, 26457.0], [75.6, 26470.0], [75.7, 26481.0], [75.8, 26492.0], [75.9, 26520.0], [76.0, 26529.0], [76.1, 26542.0], [76.2, 26554.0], [76.3, 26561.0], [76.4, 26579.0], [76.5, 26586.0], [76.6, 26601.0], [76.7, 26607.0], [76.8, 26630.0], [76.9, 26646.0], [77.0, 26661.0], [77.1, 26665.0], [77.2, 26670.0], [77.3, 26681.0], [77.4, 26684.0], [77.5, 26689.0], [77.6, 26708.0], [77.7, 26723.0], [77.8, 26733.0], [77.9, 26765.0], [78.0, 26783.0], [78.1, 26830.0], [78.2, 26840.0], [78.3, 26847.0], [78.4, 26848.0], [78.5, 26851.0], [78.6, 26858.0], [78.7, 26887.0], [78.8, 26902.0], [78.9, 26922.0], [79.0, 26977.0], [79.1, 27006.0], [79.2, 27025.0], [79.3, 27045.0], [79.4, 27047.0], [79.5, 27049.0], [79.6, 27050.0], [79.7, 27051.0], [79.8, 27052.0], [79.9, 27053.0], [80.0, 27056.0], [80.1, 27059.0], [80.2, 27062.0], [80.3, 27064.0], [80.4, 27065.0], [80.5, 27066.0], [80.6, 27067.0], [80.7, 27069.0], [80.8, 27076.0], [80.9, 27085.0], [81.0, 27109.0], [81.1, 27147.0], [81.2, 27188.0], [81.3, 27294.0], [81.4, 27297.0], [81.5, 27299.0], [81.6, 27303.0], [81.7, 27307.0], [81.8, 27322.0], [81.9, 27347.0], [82.0, 27360.0], [82.1, 27372.0], [82.2, 27389.0], [82.3, 27522.0], [82.4, 27540.0], [82.5, 27543.0], [82.6, 27564.0], [82.7, 27604.0], [82.8, 27645.0], [82.9, 27673.0], [83.0, 27757.0], [83.1, 27780.0], [83.2, 27784.0], [83.3, 27789.0], [83.4, 27807.0], [83.5, 27809.0], [83.6, 27820.0], [83.7, 27839.0], [83.8, 27898.0], [83.9, 27971.0], [84.0, 28034.0], [84.1, 28110.0], [84.2, 28114.0], [84.3, 28126.0], [84.4, 28154.0], [84.5, 28161.0], [84.6, 28169.0], [84.7, 28173.0], [84.8, 28177.0], [84.9, 28182.0], [85.0, 28200.0], [85.1, 28202.0], [85.2, 28208.0], [85.3, 28260.0], [85.4, 28335.0], [85.5, 28350.0], [85.6, 28355.0], [85.7, 28427.0], [85.8, 28484.0], [85.9, 28523.0], [86.0, 28632.0], [86.1, 28671.0], [86.2, 28790.0], [86.3, 28807.0], [86.4, 28833.0], [86.5, 28839.0], [86.6, 28884.0], [86.7, 28894.0], [86.8, 28903.0], [86.9, 28931.0], [87.0, 28946.0], [87.1, 28994.0], [87.2, 29055.0], [87.3, 29121.0], [87.4, 29202.0], [87.5, 29230.0], [87.6, 29324.0], [87.7, 29330.0], [87.8, 29431.0], [87.9, 29432.0], [88.0, 29439.0], [88.1, 29482.0], [88.2, 29495.0], [88.3, 29529.0], [88.4, 29552.0], [88.5, 29577.0], [88.6, 29586.0], [88.7, 29694.0], [88.8, 29788.0], [88.9, 29896.0], [89.0, 29980.0], [89.1, 30061.0], [89.2, 30087.0], [89.3, 30093.0], [89.4, 30105.0], [89.5, 30114.0], [89.6, 30123.0], [89.7, 30141.0], [89.8, 30151.0], [89.9, 30181.0], [90.0, 30206.0], [90.1, 30238.0], [90.2, 30271.0], [90.3, 30276.0], [90.4, 30311.0], [90.5, 30321.0], [90.6, 30397.0], [90.7, 30470.0], [90.8, 30519.0], [90.9, 30573.0], [91.0, 30596.0], [91.1, 30624.0], [91.2, 30636.0], [91.3, 30697.0], [91.4, 30704.0], [91.5, 30780.0], [91.6, 30791.0], [91.7, 30797.0], [91.8, 30821.0], [91.9, 30875.0], [92.0, 30877.0], [92.1, 30880.0], [92.2, 30883.0], [92.3, 30885.0], [92.4, 30887.0], [92.5, 30892.0], [92.6, 30895.0], [92.7, 30898.0], [92.8, 30903.0], [92.9, 30911.0], [93.0, 30912.0], [93.1, 30914.0], [93.2, 30917.0], [93.3, 30920.0], [93.4, 30925.0], [93.5, 30927.0], [93.6, 30928.0], [93.7, 30930.0], [93.8, 30932.0], [93.9, 30938.0], [94.0, 30948.0], [94.1, 30954.0], [94.2, 30976.0], [94.3, 31004.0], [94.4, 31017.0], [94.5, 31018.0], [94.6, 31023.0], [94.7, 31026.0], [94.8, 31031.0], [94.9, 31073.0], [95.0, 31110.0], [95.1, 31114.0], [95.2, 31145.0], [95.3, 31155.0], [95.4, 31184.0], [95.5, 31187.0], [95.6, 31234.0], [95.7, 31336.0], [95.8, 31437.0], [95.9, 31476.0], [96.0, 31492.0], [96.1, 31536.0], [96.2, 31577.0], [96.3, 31579.0], [96.4, 31592.0], [96.5, 31600.0], [96.6, 31614.0], [96.7, 31651.0], [96.8, 31808.0], [96.9, 31876.0], [97.0, 31895.0], [97.1, 31909.0], [97.2, 31985.0], [97.3, 32118.0], [97.4, 32194.0], [97.5, 32222.0], [97.6, 32249.0], [97.7, 32401.0], [97.8, 32451.0], [97.9, 32460.0], [98.0, 32491.0], [98.1, 32655.0], [98.2, 32684.0], [98.3, 32688.0], [98.4, 32722.0], [98.5, 32778.0], [98.6, 32814.0], [98.7, 32841.0], [98.8, 32858.0], [98.9, 33037.0], [99.0, 33049.0], [99.1, 33101.0], [99.2, 33545.0], [99.3, 33787.0], [99.4, 33975.0], [99.5, 34524.0], [99.6, 34568.0], [99.7, 34617.0], [99.8, 34701.0], [99.9, 34975.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 15000.0, "maxY": 48.0, "series": [{"data": [[33500.0, 1.0], [33100.0, 2.0], [33700.0, 1.0], [34500.0, 3.0], [34700.0, 1.0], [33900.0, 2.0], [34100.0, 1.0], [34900.0, 2.0], [36100.0, 1.0], [15200.0, 3.0], [15300.0, 1.0], [15100.0, 1.0], [15000.0, 1.0], [15400.0, 2.0], [15500.0, 4.0], [15800.0, 1.0], [15700.0, 5.0], [15600.0, 1.0], [16100.0, 7.0], [16000.0, 1.0], [15900.0, 3.0], [16300.0, 9.0], [16200.0, 3.0], [17200.0, 5.0], [17400.0, 18.0], [17000.0, 8.0], [16700.0, 11.0], [16900.0, 6.0], [16800.0, 9.0], [17100.0, 4.0], [16500.0, 6.0], [16600.0, 6.0], [16400.0, 7.0], [17300.0, 8.0], [17600.0, 20.0], [18400.0, 41.0], [18000.0, 11.0], [18300.0, 23.0], [17700.0, 9.0], [17800.0, 9.0], [17900.0, 10.0], [18100.0, 15.0], [17500.0, 24.0], [18200.0, 16.0], [19300.0, 20.0], [18500.0, 23.0], [19000.0, 17.0], [18900.0, 10.0], [19200.0, 28.0], [18600.0, 25.0], [19100.0, 16.0], [19400.0, 14.0], [18800.0, 12.0], [18700.0, 19.0], [19700.0, 14.0], [19500.0, 31.0], [19800.0, 24.0], [19900.0, 28.0], [20100.0, 48.0], [20000.0, 35.0], [20300.0, 10.0], [20400.0, 11.0], [20200.0, 28.0], [19600.0, 14.0], [21300.0, 16.0], [20600.0, 25.0], [20500.0, 38.0], [21400.0, 13.0], [21500.0, 7.0], [20900.0, 31.0], [21200.0, 14.0], [21000.0, 16.0], [20800.0, 18.0], [21100.0, 8.0], [20700.0, 10.0], [22500.0, 18.0], [22100.0, 13.0], [22000.0, 11.0], [21600.0, 7.0], [21700.0, 18.0], [21900.0, 12.0], [21800.0, 11.0], [22200.0, 10.0], [22300.0, 17.0], [22400.0, 3.0], [23300.0, 32.0], [22600.0, 11.0], [23400.0, 5.0], [23500.0, 11.0], [23000.0, 13.0], [23100.0, 15.0], [23200.0, 21.0], [22900.0, 15.0], [22800.0, 17.0], [22700.0, 12.0], [23800.0, 4.0], [23900.0, 7.0], [23600.0, 19.0], [23700.0, 11.0], [24100.0, 13.0], [24000.0, 24.0], [24400.0, 11.0], [24500.0, 6.0], [24200.0, 12.0], [24300.0, 7.0], [25400.0, 11.0], [24600.0, 11.0], [25000.0, 18.0], [24700.0, 10.0], [24800.0, 5.0], [24900.0, 10.0], [25100.0, 20.0], [25200.0, 19.0], [25300.0, 4.0], [25500.0, 7.0], [25700.0, 8.0], [25900.0, 15.0], [26000.0, 3.0], [26100.0, 11.0], [25800.0, 5.0], [25600.0, 3.0], [26200.0, 16.0], [26300.0, 6.0], [26600.0, 20.0], [26500.0, 14.0], [26400.0, 19.0], [26700.0, 9.0], [26800.0, 15.0], [27000.0, 38.0], [27500.0, 9.0], [27300.0, 14.0], [27100.0, 5.0], [27200.0, 6.0], [26900.0, 6.0], [27600.0, 5.0], [27800.0, 9.0], [27700.0, 9.0], [27900.0, 2.0], [28000.0, 3.0], [28300.0, 6.0], [28400.0, 3.0], [28200.0, 8.0], [28500.0, 3.0], [28100.0, 18.0], [28600.0, 3.0], [29500.0, 8.0], [28800.0, 10.0], [29100.0, 2.0], [29400.0, 10.0], [29300.0, 3.0], [28900.0, 8.0], [29000.0, 3.0], [28700.0, 2.0], [29600.0, 3.0], [29200.0, 4.0], [29800.0, 2.0], [30200.0, 8.0], [30500.0, 5.0], [29900.0, 2.0], [30100.0, 12.0], [30000.0, 7.0], [30700.0, 7.0], [30600.0, 7.0], [30300.0, 6.0], [29700.0, 1.0], [30400.0, 2.0], [30800.0, 20.0], [30900.0, 31.0], [31000.0, 14.0], [31100.0, 12.0], [31400.0, 6.0], [31200.0, 2.0], [31300.0, 1.0], [31600.0, 6.0], [31500.0, 9.0], [32600.0, 6.0], [31800.0, 5.0], [31900.0, 4.0], [32100.0, 3.0], [32200.0, 4.0], [32000.0, 1.0], [32400.0, 7.0], [32300.0, 1.0], [32700.0, 3.0], [32500.0, 1.0], [32800.0, 6.0], [33000.0, 5.0], [33600.0, 1.0], [34600.0, 3.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 36100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1904.5430000000015, "minX": 1.57141128E12, "maxY": 1904.5430000000015, "series": [{"data": [[1.57141128E12, 1904.5430000000015]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57141128E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 21640.726950354616, "minX": 1.0, "maxY": 36109.0, "series": [{"data": [[527.0, 31862.2], [526.0, 32401.0], [523.0, 33037.0], [2.0, 34910.0], [603.0, 31752.333333333332], [601.0, 32443.0], [636.0, 31194.5], [622.0, 29330.0], [615.0, 32131.0], [612.0, 32451.0], [850.0, 31651.0], [894.0, 32460.0], [1021.0, 29202.0], [4.0, 34578.0], [1223.0, 30954.0], [1342.0, 30283.0], [5.0, 32814.0], [1421.0, 31073.0], [1593.0, 30565.9], [6.0, 32830.0], [1650.0, 30100.5], [1649.0, 28203.0], [1660.0, 30093.0], [1723.0, 30086.581395348847], [1710.0, 31876.0], [1721.0, 30125.0], [1789.0, 30177.666666666664], [1787.0, 29252.5], [1783.0, 29432.0], [1761.0, 29431.0], [1759.0, 30017.117021276594], [1728.0, 30861.571428571428], [2000.0, 21640.726950354616], [9.0, 32840.0], [10.0, 31031.0], [12.0, 30958.0], [13.0, 32722.0], [14.0, 32741.0], [15.0, 30883.0], [16.0, 32778.0], [17.0, 32674.0], [18.0, 33969.0], [19.0, 33975.0], [20.0, 32655.0], [21.0, 32592.0], [22.0, 34701.0], [23.0, 34633.0], [24.0, 34617.0], [25.0, 34607.0], [26.0, 34568.0], [28.0, 34525.0], [29.0, 33787.0], [30.0, 31536.0], [31.0, 33114.0], [32.0, 30147.0], [35.0, 33054.0], [34.0, 31540.5], [38.0, 31176.333333333332], [40.0, 32959.5], [55.0, 31565.5], [1.0, 36109.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}, {"data": [[1904.5430000000015, 23036.069]], "isOverall": false, "label": "Access Detail Movie-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8666.666666666666, "minX": 1.57141128E12, "maxY": 219133.33333333334, "series": [{"data": [[1.57141128E12, 219133.33333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57141128E12, 8666.666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57141128E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 23036.069, "minX": 1.57141128E12, "maxY": 23036.069, "series": [{"data": [[1.57141128E12, 23036.069]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57141128E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 22311.51850000001, "minX": 1.57141128E12, "maxY": 22311.51850000001, "series": [{"data": [[1.57141128E12, 22311.51850000001]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57141128E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10651.078999999963, "minX": 1.57141128E12, "maxY": 10651.078999999963, "series": [{"data": [[1.57141128E12, 10651.078999999963]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57141128E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15052.0, "minX": 1.57141128E12, "maxY": 36109.0, "series": [{"data": [[1.57141128E12, 36109.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57141128E12, 15052.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57141128E12, 30204.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57141128E12, 33048.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57141128E12, 31108.699999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57141128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18009.5, "minX": 1.0, "maxY": 36109.0, "series": [{"data": [[136.0, 30566.5], [166.0, 18009.5], [183.0, 22260.0], [215.0, 19011.0], [52.0, 26845.0], [57.0, 31529.0], [235.0, 26102.0], [64.0, 24574.0], [16.0, 33329.5], [1.0, 36109.0], [77.0, 30519.0], [82.0, 20408.5], [85.0, 26431.0], [21.0, 32805.0], [383.0, 19926.0], [110.0, 23778.0], [117.0, 22391.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 383.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 17716.0, "minX": 1.0, "maxY": 33026.0, "series": [{"data": [[136.0, 29988.5], [166.0, 17716.0], [183.0, 21701.0], [215.0, 18520.0], [52.0, 26803.5], [57.0, 31259.0], [235.0, 25846.0], [64.0, 22748.0], [16.0, 25970.5], [1.0, 33026.0], [77.0, 30519.0], [82.0, 19724.5], [85.0, 26380.0], [21.0, 32770.0], [383.0, 19390.0], [110.0, 21114.0], [117.0, 20829.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 383.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.57141128E12, "maxY": 33.333333333333336, "series": [{"data": [[1.57141128E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57141128E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.57141128E12, "maxY": 33.333333333333336, "series": [{"data": [[1.57141128E12, 33.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57141128E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.57141128E12, "maxY": 33.333333333333336, "series": [{"data": [[1.57141128E12, 33.333333333333336]], "isOverall": false, "label": "Access Detail Movie-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57141128E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 33.333333333333336, "minX": 1.57141128E12, "maxY": 33.333333333333336, "series": [{"data": [[1.57141128E12, 33.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57141128E12, "title": "Total Transactions Per Second"}},
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

