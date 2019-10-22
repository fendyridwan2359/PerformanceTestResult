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
        data: {"result": {"minY": 8261.0, "minX": 0.0, "maxY": 17301.0, "series": [{"data": [[0.0, 8261.0], [0.1, 8261.0], [0.2, 8261.0], [0.3, 8261.0], [0.4, 8261.0], [0.5, 8261.0], [0.6, 8289.0], [0.7, 8289.0], [0.8, 8289.0], [0.9, 8289.0], [1.0, 8289.0], [1.1, 8289.0], [1.2, 8337.0], [1.3, 8337.0], [1.4, 8337.0], [1.5, 8337.0], [1.6, 8337.0], [1.7, 8379.0], [1.8, 8379.0], [1.9, 8379.0], [2.0, 8379.0], [2.1, 8379.0], [2.2, 8379.0], [2.3, 8403.0], [2.4, 8403.0], [2.5, 8403.0], [2.6, 8403.0], [2.7, 8403.0], [2.8, 8446.0], [2.9, 8446.0], [3.0, 8446.0], [3.1, 8446.0], [3.2, 8446.0], [3.3, 8446.0], [3.4, 8455.0], [3.5, 8455.0], [3.6, 8455.0], [3.7, 8455.0], [3.8, 8455.0], [3.9, 8494.0], [4.0, 8494.0], [4.1, 8494.0], [4.2, 8494.0], [4.3, 8494.0], [4.4, 8494.0], [4.5, 8529.0], [4.6, 8529.0], [4.7, 8529.0], [4.8, 8529.0], [4.9, 8529.0], [5.0, 8573.0], [5.1, 8573.0], [5.2, 8573.0], [5.3, 8573.0], [5.4, 8573.0], [5.5, 8573.0], [5.6, 8574.0], [5.7, 8574.0], [5.8, 8574.0], [5.9, 8574.0], [6.0, 8574.0], [6.1, 8574.0], [6.2, 8592.0], [6.3, 8592.0], [6.4, 8592.0], [6.5, 8592.0], [6.6, 8592.0], [6.7, 8627.0], [6.8, 8627.0], [6.9, 8627.0], [7.0, 8627.0], [7.1, 8627.0], [7.2, 8627.0], [7.3, 8640.0], [7.4, 8640.0], [7.5, 8640.0], [7.6, 8640.0], [7.7, 8640.0], [7.8, 8655.0], [7.9, 8655.0], [8.0, 8655.0], [8.1, 8655.0], [8.2, 8655.0], [8.3, 8655.0], [8.4, 8718.0], [8.5, 8718.0], [8.6, 8718.0], [8.7, 8718.0], [8.8, 8718.0], [8.9, 8737.0], [9.0, 8737.0], [9.1, 8737.0], [9.2, 8737.0], [9.3, 8737.0], [9.4, 8737.0], [9.5, 8780.0], [9.6, 8780.0], [9.7, 8780.0], [9.8, 8780.0], [9.9, 8780.0], [10.0, 8788.0], [10.1, 8788.0], [10.2, 8788.0], [10.3, 8788.0], [10.4, 8788.0], [10.5, 8788.0], [10.6, 8846.0], [10.7, 8846.0], [10.8, 8846.0], [10.9, 8846.0], [11.0, 8846.0], [11.1, 8846.0], [11.2, 8923.0], [11.3, 8923.0], [11.4, 8923.0], [11.5, 8923.0], [11.6, 8923.0], [11.7, 9107.0], [11.8, 9107.0], [11.9, 9107.0], [12.0, 9107.0], [12.1, 9107.0], [12.2, 9107.0], [12.3, 9134.0], [12.4, 9134.0], [12.5, 9134.0], [12.6, 9134.0], [12.7, 9134.0], [12.8, 9181.0], [12.9, 9181.0], [13.0, 9181.0], [13.1, 9181.0], [13.2, 9181.0], [13.3, 9181.0], [13.4, 9212.0], [13.5, 9212.0], [13.6, 9212.0], [13.7, 9212.0], [13.8, 9212.0], [13.9, 9297.0], [14.0, 9297.0], [14.1, 9297.0], [14.2, 9297.0], [14.3, 9297.0], [14.4, 9297.0], [14.5, 9378.0], [14.6, 9378.0], [14.7, 9378.0], [14.8, 9378.0], [14.9, 9378.0], [15.0, 9390.0], [15.1, 9390.0], [15.2, 9390.0], [15.3, 9390.0], [15.4, 9390.0], [15.5, 9390.0], [15.6, 9390.0], [15.7, 9390.0], [15.8, 9390.0], [15.9, 9390.0], [16.0, 9390.0], [16.1, 9390.0], [16.2, 9391.0], [16.3, 9391.0], [16.4, 9391.0], [16.5, 9391.0], [16.6, 9391.0], [16.7, 9396.0], [16.8, 9396.0], [16.9, 9396.0], [17.0, 9396.0], [17.1, 9396.0], [17.2, 9396.0], [17.3, 9404.0], [17.4, 9404.0], [17.5, 9404.0], [17.6, 9404.0], [17.7, 9404.0], [17.8, 9435.0], [17.9, 9435.0], [18.0, 9435.0], [18.1, 9435.0], [18.2, 9435.0], [18.3, 9435.0], [18.4, 9446.0], [18.5, 9446.0], [18.6, 9446.0], [18.7, 9446.0], [18.8, 9446.0], [18.9, 9490.0], [19.0, 9490.0], [19.1, 9490.0], [19.2, 9490.0], [19.3, 9490.0], [19.4, 9490.0], [19.5, 9492.0], [19.6, 9492.0], [19.7, 9492.0], [19.8, 9492.0], [19.9, 9492.0], [20.0, 9492.0], [20.1, 9536.0], [20.2, 9536.0], [20.3, 9536.0], [20.4, 9536.0], [20.5, 9536.0], [20.6, 9626.0], [20.7, 9626.0], [20.8, 9626.0], [20.9, 9626.0], [21.0, 9626.0], [21.1, 9626.0], [21.2, 9971.0], [21.3, 9971.0], [21.4, 9971.0], [21.5, 9971.0], [21.6, 9971.0], [21.7, 10114.0], [21.8, 10114.0], [21.9, 10114.0], [22.0, 10114.0], [22.1, 10114.0], [22.2, 10114.0], [22.3, 10163.0], [22.4, 10163.0], [22.5, 10163.0], [22.6, 10163.0], [22.7, 10163.0], [22.8, 10184.0], [22.9, 10184.0], [23.0, 10184.0], [23.1, 10184.0], [23.2, 10184.0], [23.3, 10184.0], [23.4, 10228.0], [23.5, 10228.0], [23.6, 10228.0], [23.7, 10228.0], [23.8, 10228.0], [23.9, 10258.0], [24.0, 10258.0], [24.1, 10258.0], [24.2, 10258.0], [24.3, 10258.0], [24.4, 10258.0], [24.5, 10383.0], [24.6, 10383.0], [24.7, 10383.0], [24.8, 10383.0], [24.9, 10383.0], [25.0, 10383.0], [25.1, 10399.0], [25.2, 10399.0], [25.3, 10399.0], [25.4, 10399.0], [25.5, 10399.0], [25.6, 10431.0], [25.7, 10431.0], [25.8, 10431.0], [25.9, 10431.0], [26.0, 10431.0], [26.1, 10431.0], [26.2, 10499.0], [26.3, 10499.0], [26.4, 10499.0], [26.5, 10499.0], [26.6, 10499.0], [26.7, 10501.0], [26.8, 10501.0], [26.9, 10501.0], [27.0, 10501.0], [27.1, 10501.0], [27.2, 10501.0], [27.3, 10537.0], [27.4, 10537.0], [27.5, 10537.0], [27.6, 10537.0], [27.7, 10537.0], [27.8, 10591.0], [27.9, 10591.0], [28.0, 10591.0], [28.1, 10591.0], [28.2, 10591.0], [28.3, 10591.0], [28.4, 10613.0], [28.5, 10613.0], [28.6, 10613.0], [28.7, 10613.0], [28.8, 10613.0], [28.9, 10630.0], [29.0, 10630.0], [29.1, 10630.0], [29.2, 10630.0], [29.3, 10630.0], [29.4, 10630.0], [29.5, 10631.0], [29.6, 10631.0], [29.7, 10631.0], [29.8, 10631.0], [29.9, 10631.0], [30.0, 10631.0], [30.1, 10665.0], [30.2, 10665.0], [30.3, 10665.0], [30.4, 10665.0], [30.5, 10665.0], [30.6, 10705.0], [30.7, 10705.0], [30.8, 10705.0], [30.9, 10705.0], [31.0, 10705.0], [31.1, 10705.0], [31.2, 10705.0], [31.3, 10705.0], [31.4, 10705.0], [31.5, 10705.0], [31.6, 10705.0], [31.7, 10806.0], [31.8, 10806.0], [31.9, 10806.0], [32.0, 10806.0], [32.1, 10806.0], [32.2, 10806.0], [32.3, 11054.0], [32.4, 11054.0], [32.5, 11054.0], [32.6, 11054.0], [32.7, 11054.0], [32.8, 11070.0], [32.9, 11070.0], [33.0, 11070.0], [33.1, 11070.0], [33.2, 11070.0], [33.3, 11070.0], [33.4, 11186.0], [33.5, 11186.0], [33.6, 11186.0], [33.7, 11186.0], [33.8, 11186.0], [33.9, 11203.0], [34.0, 11203.0], [34.1, 11203.0], [34.2, 11203.0], [34.3, 11203.0], [34.4, 11203.0], [34.5, 11212.0], [34.6, 11212.0], [34.7, 11212.0], [34.8, 11212.0], [34.9, 11212.0], [35.0, 11212.0], [35.1, 11285.0], [35.2, 11285.0], [35.3, 11285.0], [35.4, 11285.0], [35.5, 11285.0], [35.6, 11321.0], [35.7, 11321.0], [35.8, 11321.0], [35.9, 11321.0], [36.0, 11321.0], [36.1, 11321.0], [36.2, 11339.0], [36.3, 11339.0], [36.4, 11339.0], [36.5, 11339.0], [36.6, 11339.0], [36.7, 11467.0], [36.8, 11467.0], [36.9, 11467.0], [37.0, 11467.0], [37.1, 11467.0], [37.2, 11467.0], [37.3, 11493.0], [37.4, 11493.0], [37.5, 11493.0], [37.6, 11493.0], [37.7, 11493.0], [37.8, 11526.0], [37.9, 11526.0], [38.0, 11526.0], [38.1, 11526.0], [38.2, 11526.0], [38.3, 11526.0], [38.4, 11599.0], [38.5, 11599.0], [38.6, 11599.0], [38.7, 11599.0], [38.8, 11599.0], [38.9, 11603.0], [39.0, 11603.0], [39.1, 11603.0], [39.2, 11603.0], [39.3, 11603.0], [39.4, 11603.0], [39.5, 11603.0], [39.6, 11603.0], [39.7, 11603.0], [39.8, 11603.0], [39.9, 11603.0], [40.0, 11603.0], [40.1, 11605.0], [40.2, 11605.0], [40.3, 11605.0], [40.4, 11605.0], [40.5, 11605.0], [40.6, 11606.0], [40.7, 11606.0], [40.8, 11606.0], [40.9, 11606.0], [41.0, 11606.0], [41.1, 11606.0], [41.2, 11675.0], [41.3, 11675.0], [41.4, 11675.0], [41.5, 11675.0], [41.6, 11675.0], [41.7, 11695.0], [41.8, 11695.0], [41.9, 11695.0], [42.0, 11695.0], [42.1, 11695.0], [42.2, 11695.0], [42.3, 11710.0], [42.4, 11710.0], [42.5, 11710.0], [42.6, 11710.0], [42.7, 11710.0], [42.8, 11718.0], [42.9, 11718.0], [43.0, 11718.0], [43.1, 11718.0], [43.2, 11718.0], [43.3, 11718.0], [43.4, 11883.0], [43.5, 11883.0], [43.6, 11883.0], [43.7, 11883.0], [43.8, 11883.0], [43.9, 12255.0], [44.0, 12255.0], [44.1, 12255.0], [44.2, 12255.0], [44.3, 12255.0], [44.4, 12255.0], [44.5, 12336.0], [44.6, 12336.0], [44.7, 12336.0], [44.8, 12336.0], [44.9, 12336.0], [45.0, 12336.0], [45.1, 12360.0], [45.2, 12360.0], [45.3, 12360.0], [45.4, 12360.0], [45.5, 12360.0], [45.6, 12416.0], [45.7, 12416.0], [45.8, 12416.0], [45.9, 12416.0], [46.0, 12416.0], [46.1, 12416.0], [46.2, 12416.0], [46.3, 12416.0], [46.4, 12416.0], [46.5, 12416.0], [46.6, 12416.0], [46.7, 12437.0], [46.8, 12437.0], [46.9, 12437.0], [47.0, 12437.0], [47.1, 12437.0], [47.2, 12437.0], [47.3, 12585.0], [47.4, 12585.0], [47.5, 12585.0], [47.6, 12585.0], [47.7, 12585.0], [47.8, 12632.0], [47.9, 12632.0], [48.0, 12632.0], [48.1, 12632.0], [48.2, 12632.0], [48.3, 12632.0], [48.4, 12643.0], [48.5, 12643.0], [48.6, 12643.0], [48.7, 12643.0], [48.8, 12643.0], [48.9, 12647.0], [49.0, 12647.0], [49.1, 12647.0], [49.2, 12647.0], [49.3, 12647.0], [49.4, 12647.0], [49.5, 12659.0], [49.6, 12659.0], [49.7, 12659.0], [49.8, 12659.0], [49.9, 12659.0], [50.0, 12659.0], [50.1, 12662.0], [50.2, 12662.0], [50.3, 12662.0], [50.4, 12662.0], [50.5, 12662.0], [50.6, 12666.0], [50.7, 12666.0], [50.8, 12666.0], [50.9, 12666.0], [51.0, 12666.0], [51.1, 12666.0], [51.2, 12667.0], [51.3, 12667.0], [51.4, 12667.0], [51.5, 12667.0], [51.6, 12667.0], [51.7, 12681.0], [51.8, 12681.0], [51.9, 12681.0], [52.0, 12681.0], [52.1, 12681.0], [52.2, 12681.0], [52.3, 12784.0], [52.4, 12784.0], [52.5, 12784.0], [52.6, 12784.0], [52.7, 12784.0], [52.8, 12799.0], [52.9, 12799.0], [53.0, 12799.0], [53.1, 12799.0], [53.2, 12799.0], [53.3, 12799.0], [53.4, 12803.0], [53.5, 12803.0], [53.6, 12803.0], [53.7, 12803.0], [53.8, 12803.0], [53.9, 12861.0], [54.0, 12861.0], [54.1, 12861.0], [54.2, 12861.0], [54.3, 12861.0], [54.4, 12861.0], [54.5, 13288.0], [54.6, 13288.0], [54.7, 13288.0], [54.8, 13288.0], [54.9, 13288.0], [55.0, 13288.0], [55.1, 13486.0], [55.2, 13486.0], [55.3, 13486.0], [55.4, 13486.0], [55.5, 13486.0], [55.6, 13527.0], [55.7, 13527.0], [55.8, 13527.0], [55.9, 13527.0], [56.0, 13527.0], [56.1, 13527.0], [56.2, 13550.0], [56.3, 13550.0], [56.4, 13550.0], [56.5, 13550.0], [56.6, 13550.0], [56.7, 13561.0], [56.8, 13561.0], [56.9, 13561.0], [57.0, 13561.0], [57.1, 13561.0], [57.2, 13561.0], [57.3, 13592.0], [57.4, 13592.0], [57.5, 13592.0], [57.6, 13592.0], [57.7, 13592.0], [57.8, 13643.0], [57.9, 13643.0], [58.0, 13643.0], [58.1, 13643.0], [58.2, 13643.0], [58.3, 13643.0], [58.4, 13685.0], [58.5, 13685.0], [58.6, 13685.0], [58.7, 13685.0], [58.8, 13685.0], [58.9, 13694.0], [59.0, 13694.0], [59.1, 13694.0], [59.2, 13694.0], [59.3, 13694.0], [59.4, 13694.0], [59.5, 13713.0], [59.6, 13713.0], [59.7, 13713.0], [59.8, 13713.0], [59.9, 13713.0], [60.0, 13713.0], [60.1, 13813.0], [60.2, 13813.0], [60.3, 13813.0], [60.4, 13813.0], [60.5, 13813.0], [60.6, 13824.0], [60.7, 13824.0], [60.8, 13824.0], [60.9, 13824.0], [61.0, 13824.0], [61.1, 13824.0], [61.2, 13830.0], [61.3, 13830.0], [61.4, 13830.0], [61.5, 13830.0], [61.6, 13830.0], [61.7, 13933.0], [61.8, 13933.0], [61.9, 13933.0], [62.0, 13933.0], [62.1, 13933.0], [62.2, 13933.0], [62.3, 13934.0], [62.4, 13934.0], [62.5, 13934.0], [62.6, 13934.0], [62.7, 13934.0], [62.8, 13943.0], [62.9, 13943.0], [63.0, 13943.0], [63.1, 13943.0], [63.2, 13943.0], [63.3, 13943.0], [63.4, 13993.0], [63.5, 13993.0], [63.6, 13993.0], [63.7, 13993.0], [63.8, 13993.0], [63.9, 14112.0], [64.0, 14112.0], [64.1, 14112.0], [64.2, 14112.0], [64.3, 14112.0], [64.4, 14112.0], [64.5, 14117.0], [64.6, 14117.0], [64.7, 14117.0], [64.8, 14117.0], [64.9, 14117.0], [65.0, 14117.0], [65.1, 14194.0], [65.2, 14194.0], [65.3, 14194.0], [65.4, 14194.0], [65.5, 14194.0], [65.6, 14260.0], [65.7, 14260.0], [65.8, 14260.0], [65.9, 14260.0], [66.0, 14260.0], [66.1, 14260.0], [66.2, 14311.0], [66.3, 14311.0], [66.4, 14311.0], [66.5, 14311.0], [66.6, 14311.0], [66.7, 14358.0], [66.8, 14358.0], [66.9, 14358.0], [67.0, 14358.0], [67.1, 14358.0], [67.2, 14358.0], [67.3, 14382.0], [67.4, 14382.0], [67.5, 14382.0], [67.6, 14382.0], [67.7, 14382.0], [67.8, 14559.0], [67.9, 14559.0], [68.0, 14559.0], [68.1, 14559.0], [68.2, 14559.0], [68.3, 14559.0], [68.4, 14837.0], [68.5, 14837.0], [68.6, 14837.0], [68.7, 14837.0], [68.8, 14837.0], [68.9, 14867.0], [69.0, 14867.0], [69.1, 14867.0], [69.2, 14867.0], [69.3, 14867.0], [69.4, 14867.0], [69.5, 14886.0], [69.6, 14886.0], [69.7, 14886.0], [69.8, 14886.0], [69.9, 14886.0], [70.0, 14886.0], [70.1, 14906.0], [70.2, 14906.0], [70.3, 14906.0], [70.4, 14906.0], [70.5, 14906.0], [70.6, 14915.0], [70.7, 14915.0], [70.8, 14915.0], [70.9, 14915.0], [71.0, 14915.0], [71.1, 14915.0], [71.2, 14972.0], [71.3, 14972.0], [71.4, 14972.0], [71.5, 14972.0], [71.6, 14972.0], [71.7, 14976.0], [71.8, 14976.0], [71.9, 14976.0], [72.0, 14976.0], [72.1, 14976.0], [72.2, 14976.0], [72.3, 14982.0], [72.4, 14982.0], [72.5, 14982.0], [72.6, 14982.0], [72.7, 14982.0], [72.8, 14992.0], [72.9, 14992.0], [73.0, 14992.0], [73.1, 14992.0], [73.2, 14992.0], [73.3, 14992.0], [73.4, 15035.0], [73.5, 15035.0], [73.6, 15035.0], [73.7, 15035.0], [73.8, 15035.0], [73.9, 15083.0], [74.0, 15083.0], [74.1, 15083.0], [74.2, 15083.0], [74.3, 15083.0], [74.4, 15083.0], [74.5, 15145.0], [74.6, 15145.0], [74.7, 15145.0], [74.8, 15145.0], [74.9, 15145.0], [75.0, 15145.0], [75.1, 15148.0], [75.2, 15148.0], [75.3, 15148.0], [75.4, 15148.0], [75.5, 15148.0], [75.6, 15152.0], [75.7, 15152.0], [75.8, 15152.0], [75.9, 15152.0], [76.0, 15152.0], [76.1, 15152.0], [76.2, 15240.0], [76.3, 15240.0], [76.4, 15240.0], [76.5, 15240.0], [76.6, 15240.0], [76.7, 15380.0], [76.8, 15380.0], [76.9, 15380.0], [77.0, 15380.0], [77.1, 15380.0], [77.2, 15380.0], [77.3, 15398.0], [77.4, 15398.0], [77.5, 15398.0], [77.6, 15398.0], [77.7, 15398.0], [77.8, 15449.0], [77.9, 15449.0], [78.0, 15449.0], [78.1, 15449.0], [78.2, 15449.0], [78.3, 15449.0], [78.4, 15453.0], [78.5, 15453.0], [78.6, 15453.0], [78.7, 15453.0], [78.8, 15453.0], [78.9, 15686.0], [79.0, 15686.0], [79.1, 15686.0], [79.2, 15686.0], [79.3, 15686.0], [79.4, 15686.0], [79.5, 15717.0], [79.6, 15717.0], [79.7, 15717.0], [79.8, 15717.0], [79.9, 15717.0], [80.0, 15717.0], [80.1, 15804.0], [80.2, 15804.0], [80.3, 15804.0], [80.4, 15804.0], [80.5, 15804.0], [80.6, 15909.0], [80.7, 15909.0], [80.8, 15909.0], [80.9, 15909.0], [81.0, 15909.0], [81.1, 15909.0], [81.2, 15986.0], [81.3, 15986.0], [81.4, 15986.0], [81.5, 15986.0], [81.6, 15986.0], [81.7, 16036.0], [81.8, 16036.0], [81.9, 16036.0], [82.0, 16036.0], [82.1, 16036.0], [82.2, 16036.0], [82.3, 16041.0], [82.4, 16041.0], [82.5, 16041.0], [82.6, 16041.0], [82.7, 16041.0], [82.8, 16067.0], [82.9, 16067.0], [83.0, 16067.0], [83.1, 16067.0], [83.2, 16067.0], [83.3, 16067.0], [83.4, 16085.0], [83.5, 16085.0], [83.6, 16085.0], [83.7, 16085.0], [83.8, 16085.0], [83.9, 16086.0], [84.0, 16086.0], [84.1, 16086.0], [84.2, 16086.0], [84.3, 16086.0], [84.4, 16086.0], [84.5, 16109.0], [84.6, 16109.0], [84.7, 16109.0], [84.8, 16109.0], [84.9, 16109.0], [85.0, 16109.0], [85.1, 16114.0], [85.2, 16114.0], [85.3, 16114.0], [85.4, 16114.0], [85.5, 16114.0], [85.6, 16117.0], [85.7, 16117.0], [85.8, 16117.0], [85.9, 16117.0], [86.0, 16117.0], [86.1, 16117.0], [86.2, 16136.0], [86.3, 16136.0], [86.4, 16136.0], [86.5, 16136.0], [86.6, 16136.0], [86.7, 16173.0], [86.8, 16173.0], [86.9, 16173.0], [87.0, 16173.0], [87.1, 16173.0], [87.2, 16173.0], [87.3, 16245.0], [87.4, 16245.0], [87.5, 16245.0], [87.6, 16245.0], [87.7, 16245.0], [87.8, 16263.0], [87.9, 16263.0], [88.0, 16263.0], [88.1, 16263.0], [88.2, 16263.0], [88.3, 16263.0], [88.4, 16394.0], [88.5, 16394.0], [88.6, 16394.0], [88.7, 16394.0], [88.8, 16394.0], [88.9, 16414.0], [89.0, 16414.0], [89.1, 16414.0], [89.2, 16414.0], [89.3, 16414.0], [89.4, 16414.0], [89.5, 16415.0], [89.6, 16415.0], [89.7, 16415.0], [89.8, 16415.0], [89.9, 16415.0], [90.0, 16415.0], [90.1, 16417.0], [90.2, 16417.0], [90.3, 16417.0], [90.4, 16417.0], [90.5, 16417.0], [90.6, 16461.0], [90.7, 16461.0], [90.8, 16461.0], [90.9, 16461.0], [91.0, 16461.0], [91.1, 16461.0], [91.2, 16614.0], [91.3, 16614.0], [91.4, 16614.0], [91.5, 16614.0], [91.6, 16614.0], [91.7, 16653.0], [91.8, 16653.0], [91.9, 16653.0], [92.0, 16653.0], [92.1, 16653.0], [92.2, 16653.0], [92.3, 16673.0], [92.4, 16673.0], [92.5, 16673.0], [92.6, 16673.0], [92.7, 16673.0], [92.8, 16677.0], [92.9, 16677.0], [93.0, 16677.0], [93.1, 16677.0], [93.2, 16677.0], [93.3, 16677.0], [93.4, 16710.0], [93.5, 16710.0], [93.6, 16710.0], [93.7, 16710.0], [93.8, 16710.0], [93.9, 16738.0], [94.0, 16738.0], [94.1, 16738.0], [94.2, 16738.0], [94.3, 16738.0], [94.4, 16738.0], [94.5, 16745.0], [94.6, 16745.0], [94.7, 16745.0], [94.8, 16745.0], [94.9, 16745.0], [95.0, 16745.0], [95.1, 16908.0], [95.2, 16908.0], [95.3, 16908.0], [95.4, 16908.0], [95.5, 16908.0], [95.6, 16908.0], [95.7, 16908.0], [95.8, 16908.0], [95.9, 16908.0], [96.0, 16908.0], [96.1, 16908.0], [96.2, 16938.0], [96.3, 16938.0], [96.4, 16938.0], [96.5, 16938.0], [96.6, 16938.0], [96.7, 16979.0], [96.8, 16979.0], [96.9, 16979.0], [97.0, 16979.0], [97.1, 16979.0], [97.2, 16979.0], [97.3, 16999.0], [97.4, 16999.0], [97.5, 16999.0], [97.6, 16999.0], [97.7, 16999.0], [97.8, 17041.0], [97.9, 17041.0], [98.0, 17041.0], [98.1, 17041.0], [98.2, 17041.0], [98.3, 17041.0], [98.4, 17102.0], [98.5, 17102.0], [98.6, 17102.0], [98.7, 17102.0], [98.8, 17102.0], [98.9, 17223.0], [99.0, 17223.0], [99.1, 17223.0], [99.2, 17223.0], [99.3, 17223.0], [99.4, 17223.0], [99.5, 17301.0], [99.6, 17301.0], [99.7, 17301.0], [99.8, 17301.0], [99.9, 17301.0], [100.0, 17301.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 8200.0, "maxY": 8.0, "series": [{"data": [[8500.0, 4.0], [8200.0, 2.0], [8300.0, 2.0], [8400.0, 4.0], [8600.0, 3.0], [8700.0, 4.0], [9100.0, 3.0], [8800.0, 1.0], [8900.0, 1.0], [9200.0, 2.0], [9300.0, 5.0], [9400.0, 5.0], [9500.0, 1.0], [9600.0, 1.0], [9900.0, 1.0], [10100.0, 3.0], [10200.0, 2.0], [10600.0, 4.0], [10500.0, 3.0], [10300.0, 2.0], [10400.0, 2.0], [10700.0, 2.0], [10800.0, 1.0], [11000.0, 2.0], [11200.0, 3.0], [11100.0, 1.0], [11400.0, 2.0], [11300.0, 2.0], [11600.0, 6.0], [11700.0, 2.0], [11500.0, 2.0], [11800.0, 1.0], [12200.0, 1.0], [12400.0, 3.0], [12300.0, 2.0], [12500.0, 1.0], [12600.0, 8.0], [12700.0, 2.0], [12800.0, 2.0], [13200.0, 1.0], [13400.0, 1.0], [13500.0, 4.0], [13600.0, 3.0], [13800.0, 3.0], [13700.0, 1.0], [13900.0, 4.0], [14100.0, 3.0], [14200.0, 1.0], [14300.0, 3.0], [14500.0, 1.0], [14800.0, 3.0], [14900.0, 6.0], [15000.0, 2.0], [15100.0, 3.0], [15200.0, 1.0], [15300.0, 2.0], [15400.0, 2.0], [15600.0, 1.0], [15700.0, 1.0], [15800.0, 1.0], [16000.0, 5.0], [16100.0, 5.0], [15900.0, 2.0], [16200.0, 2.0], [16300.0, 1.0], [16600.0, 4.0], [16700.0, 3.0], [16400.0, 4.0], [16900.0, 5.0], [17200.0, 1.0], [17000.0, 1.0], [17100.0, 1.0], [17300.0, 1.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 180.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 180.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 180.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 90.97777777777782, "minX": 1.57171932E12, "maxY": 90.97777777777782, "series": [{"data": [[1.57171932E12, 90.97777777777782]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171932E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8403.0, "minX": 1.0, "maxY": 17301.0, "series": [{"data": [[3.0, 17071.5], [4.0, 16938.0], [5.0, 17223.0], [6.0, 16908.0], [7.0, 16999.0], [8.0, 16908.0], [9.0, 16979.0], [10.0, 16677.0], [11.0, 16745.0], [12.0, 16461.0], [13.0, 16738.0], [14.0, 16415.0], [15.0, 16417.0], [16.0, 16414.0], [17.0, 16710.0], [18.0, 16673.0], [19.0, 16653.0], [20.0, 16614.0], [21.0, 16394.0], [22.0, 16067.0], [23.0, 16263.0], [24.0, 16245.0], [25.0, 16173.0], [26.0, 15986.0], [27.0, 15909.0], [28.0, 16136.0], [29.0, 16086.0], [31.0, 16076.5], [33.0, 16109.0], [32.0, 16114.0], [35.0, 16041.0], [34.0, 16085.0], [37.0, 15760.5], [39.0, 15398.0], [38.0, 15686.0], [41.0, 15451.0], [43.0, 15380.0], [42.0, 15083.0], [45.0, 15240.0], [44.0, 14992.0], [47.0, 14982.0], [46.0, 14915.0], [49.0, 14867.0], [48.0, 14906.0], [51.0, 15150.0], [53.0, 14991.0], [55.0, 15035.0], [54.0, 14886.0], [57.0, 14972.0], [56.0, 14976.0], [59.0, 14311.0], [58.0, 14559.0], [61.0, 14247.0], [63.0, 14117.0], [62.0, 14358.0], [66.0, 13934.0], [65.0, 14194.0], [64.0, 14260.0], [71.0, 13713.0], [70.0, 13943.0], [69.0, 13993.0], [68.0, 13809.0], [75.0, 13561.0], [74.0, 13759.0], [72.0, 13830.0], [79.0, 13571.0], [77.0, 13643.0], [76.0, 13813.0], [83.0, 12667.0], [82.0, 13288.0], [81.0, 13486.0], [80.0, 13527.0], [87.0, 12799.0], [86.0, 12803.0], [85.0, 12861.0], [84.0, 12632.0], [91.0, 12662.0], [90.0, 12666.0], [89.0, 12681.0], [88.0, 12784.0], [95.0, 12647.0], [94.0, 12437.0], [93.0, 12336.0], [92.0, 12659.0], [99.0, 12416.0], [98.0, 12360.0], [97.0, 12585.0], [96.0, 12643.0], [103.0, 11718.0], [102.0, 11883.0], [101.0, 12255.0], [100.0, 12416.0], [107.0, 11695.0], [106.0, 11710.0], [105.0, 11526.0], [104.0, 11599.0], [108.0, 11675.0], [115.0, 11502.285714285714], [119.0, 11186.0], [118.0, 11467.0], [117.0, 11212.0], [116.0, 11339.0], [123.0, 10806.0], [122.0, 11070.0], [121.0, 11203.0], [120.0, 11054.0], [135.0, 10537.0], [134.0, 10553.333333333334], [131.0, 10560.0], [143.0, 9626.0], [142.0, 9971.0], [141.0, 10163.0], [140.0, 10114.0], [139.0, 10184.0], [138.0, 10228.0], [137.0, 10435.5], [150.0, 9181.0], [149.0, 9412.0], [147.0, 9490.0], [146.0, 9492.0], [145.0, 9212.0], [144.0, 9536.0], [159.0, 8923.0], [158.0, 9390.333333333334], [155.0, 9404.0], [154.0, 9346.5], [152.0, 9271.0], [167.0, 8607.5], [163.0, 8780.0], [162.0, 8788.0], [161.0, 9134.0], [160.0, 8846.0], [175.0, 8403.0], [174.0, 8482.0], [172.0, 8640.0], [171.0, 8494.0], [170.0, 8455.0], [169.0, 8573.0], [168.0, 8655.0], [180.0, 8419.0], [1.0, 17301.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[90.97777777777782, 12708.494444444448]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 180.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1551.4666666666667, "minX": 1.57171932E12, "maxY": 4829.833333333333, "series": [{"data": [[1.57171932E12, 4829.833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57171932E12, 1551.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171932E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 12708.494444444448, "minX": 1.57171932E12, "maxY": 12708.494444444448, "series": [{"data": [[1.57171932E12, 12708.494444444448]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171932E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 12607.483333333337, "minX": 1.57171932E12, "maxY": 12607.483333333337, "series": [{"data": [[1.57171932E12, 12607.483333333337]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171932E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2268.1888888888893, "minX": 1.57171932E12, "maxY": 2268.1888888888893, "series": [{"data": [[1.57171932E12, 2268.1888888888893]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171932E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8261.0, "minX": 1.57171932E12, "maxY": 17301.0, "series": [{"data": [[1.57171932E12, 17301.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57171932E12, 8261.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57171932E12, 16416.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57171932E12, 17237.82]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57171932E12, 16899.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171932E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9419.5, "minX": 1.0, "maxY": 17301.0, "series": [{"data": [[1.0, 17301.0], [18.0, 10602.0], [19.0, 13074.5], [20.0, 9419.5], [21.0, 16710.0], [22.0, 12063.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9320.5, "minX": 1.0, "maxY": 17202.0, "series": [{"data": [[1.0, 17202.0], [18.0, 10454.0], [19.0, 12975.0], [20.0, 9320.5], [21.0, 16611.0], [22.0, 11964.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.57171926E12, "maxY": 3.0, "series": [{"data": [[1.57171926E12, 3.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171926E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.57171932E12, "maxY": 3.0, "series": [{"data": [[1.57171932E12, 3.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171932E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.57171932E12, "maxY": 3.0, "series": [{"data": [[1.57171932E12, 3.0]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171932E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.57171932E12, "maxY": 3.0, "series": [{"data": [[1.57171932E12, 3.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171932E12, "title": "Total Transactions Per Second"}},
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

