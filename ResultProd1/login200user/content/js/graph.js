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
        data: {"result": {"minY": 7346.0, "minX": 0.0, "maxY": 18005.0, "series": [{"data": [[0.0, 7346.0], [0.1, 7346.0], [0.2, 7346.0], [0.3, 7346.0], [0.4, 7346.0], [0.5, 7670.0], [0.6, 7670.0], [0.7, 7670.0], [0.8, 7670.0], [0.9, 7670.0], [1.0, 7759.0], [1.1, 7759.0], [1.2, 7759.0], [1.3, 7759.0], [1.4, 7759.0], [1.5, 7763.0], [1.6, 7763.0], [1.7, 7763.0], [1.8, 7763.0], [1.9, 7763.0], [2.0, 7936.0], [2.1, 7936.0], [2.2, 7936.0], [2.3, 7936.0], [2.4, 7936.0], [2.5, 7995.0], [2.6, 7995.0], [2.7, 7995.0], [2.8, 7995.0], [2.9, 7995.0], [3.0, 8085.0], [3.1, 8085.0], [3.2, 8085.0], [3.3, 8085.0], [3.4, 8085.0], [3.5, 8122.0], [3.6, 8122.0], [3.7, 8122.0], [3.8, 8122.0], [3.9, 8122.0], [4.0, 8194.0], [4.1, 8194.0], [4.2, 8194.0], [4.3, 8194.0], [4.4, 8194.0], [4.5, 8424.0], [4.6, 8424.0], [4.7, 8424.0], [4.8, 8424.0], [4.9, 8424.0], [5.0, 8524.0], [5.1, 8524.0], [5.2, 8524.0], [5.3, 8524.0], [5.4, 8524.0], [5.5, 8574.0], [5.6, 8574.0], [5.7, 8574.0], [5.8, 8574.0], [5.9, 8574.0], [6.0, 8636.0], [6.1, 8636.0], [6.2, 8636.0], [6.3, 8636.0], [6.4, 8636.0], [6.5, 8645.0], [6.6, 8645.0], [6.7, 8645.0], [6.8, 8645.0], [6.9, 8645.0], [7.0, 9057.0], [7.1, 9057.0], [7.2, 9057.0], [7.3, 9057.0], [7.4, 9057.0], [7.5, 9093.0], [7.6, 9093.0], [7.7, 9093.0], [7.8, 9093.0], [7.9, 9093.0], [8.0, 9120.0], [8.1, 9120.0], [8.2, 9120.0], [8.3, 9120.0], [8.4, 9120.0], [8.5, 9132.0], [8.6, 9132.0], [8.7, 9132.0], [8.8, 9132.0], [8.9, 9132.0], [9.0, 9133.0], [9.1, 9133.0], [9.2, 9133.0], [9.3, 9133.0], [9.4, 9133.0], [9.5, 9161.0], [9.6, 9161.0], [9.7, 9161.0], [9.8, 9161.0], [9.9, 9161.0], [10.0, 9177.0], [10.1, 9177.0], [10.2, 9177.0], [10.3, 9177.0], [10.4, 9177.0], [10.5, 9196.0], [10.6, 9196.0], [10.7, 9196.0], [10.8, 9196.0], [10.9, 9196.0], [11.0, 9199.0], [11.1, 9199.0], [11.2, 9199.0], [11.3, 9199.0], [11.4, 9199.0], [11.5, 9215.0], [11.6, 9215.0], [11.7, 9215.0], [11.8, 9215.0], [11.9, 9215.0], [12.0, 9216.0], [12.1, 9216.0], [12.2, 9216.0], [12.3, 9216.0], [12.4, 9216.0], [12.5, 9225.0], [12.6, 9225.0], [12.7, 9225.0], [12.8, 9225.0], [12.9, 9225.0], [13.0, 9249.0], [13.1, 9249.0], [13.2, 9249.0], [13.3, 9249.0], [13.4, 9249.0], [13.5, 9249.0], [13.6, 9249.0], [13.7, 9249.0], [13.8, 9249.0], [13.9, 9249.0], [14.0, 9254.0], [14.1, 9254.0], [14.2, 9254.0], [14.3, 9254.0], [14.4, 9254.0], [14.5, 9256.0], [14.6, 9256.0], [14.7, 9256.0], [14.8, 9256.0], [14.9, 9256.0], [15.0, 9292.0], [15.1, 9292.0], [15.2, 9292.0], [15.3, 9292.0], [15.4, 9292.0], [15.5, 9300.0], [15.6, 9300.0], [15.7, 9300.0], [15.8, 9300.0], [15.9, 9300.0], [16.0, 9304.0], [16.1, 9304.0], [16.2, 9304.0], [16.3, 9304.0], [16.4, 9304.0], [16.5, 9310.0], [16.6, 9310.0], [16.7, 9310.0], [16.8, 9310.0], [16.9, 9310.0], [17.0, 9338.0], [17.1, 9338.0], [17.2, 9338.0], [17.3, 9338.0], [17.4, 9338.0], [17.5, 9340.0], [17.6, 9340.0], [17.7, 9340.0], [17.8, 9340.0], [17.9, 9340.0], [18.0, 9340.0], [18.1, 9340.0], [18.2, 9340.0], [18.3, 9340.0], [18.4, 9340.0], [18.5, 9377.0], [18.6, 9377.0], [18.7, 9377.0], [18.8, 9377.0], [18.9, 9377.0], [19.0, 9407.0], [19.1, 9407.0], [19.2, 9407.0], [19.3, 9407.0], [19.4, 9407.0], [19.5, 9418.0], [19.6, 9418.0], [19.7, 9418.0], [19.8, 9418.0], [19.9, 9418.0], [20.0, 9431.0], [20.1, 9431.0], [20.2, 9431.0], [20.3, 9431.0], [20.4, 9431.0], [20.5, 9433.0], [20.6, 9433.0], [20.7, 9433.0], [20.8, 9433.0], [20.9, 9433.0], [21.0, 9436.0], [21.1, 9436.0], [21.2, 9436.0], [21.3, 9436.0], [21.4, 9436.0], [21.5, 9454.0], [21.6, 9454.0], [21.7, 9454.0], [21.8, 9454.0], [21.9, 9454.0], [22.0, 9498.0], [22.1, 9498.0], [22.2, 9498.0], [22.3, 9498.0], [22.4, 9498.0], [22.5, 9498.0], [22.6, 9498.0], [22.7, 9498.0], [22.8, 9498.0], [22.9, 9498.0], [23.0, 9501.0], [23.1, 9501.0], [23.2, 9501.0], [23.3, 9501.0], [23.4, 9501.0], [23.5, 9860.0], [23.6, 9860.0], [23.7, 9860.0], [23.8, 9860.0], [23.9, 9860.0], [24.0, 10044.0], [24.1, 10044.0], [24.2, 10044.0], [24.3, 10044.0], [24.4, 10044.0], [24.5, 10109.0], [24.6, 10109.0], [24.7, 10109.0], [24.8, 10109.0], [24.9, 10109.0], [25.0, 10155.0], [25.1, 10155.0], [25.2, 10155.0], [25.3, 10155.0], [25.4, 10155.0], [25.5, 10157.0], [25.6, 10157.0], [25.7, 10157.0], [25.8, 10157.0], [25.9, 10157.0], [26.0, 10190.0], [26.1, 10190.0], [26.2, 10190.0], [26.3, 10190.0], [26.4, 10190.0], [26.5, 10258.0], [26.6, 10258.0], [26.7, 10258.0], [26.8, 10258.0], [26.9, 10258.0], [27.0, 10269.0], [27.1, 10269.0], [27.2, 10269.0], [27.3, 10269.0], [27.4, 10269.0], [27.5, 10339.0], [27.6, 10339.0], [27.7, 10339.0], [27.8, 10339.0], [27.9, 10339.0], [28.0, 10385.0], [28.1, 10385.0], [28.2, 10385.0], [28.3, 10385.0], [28.4, 10385.0], [28.5, 10407.0], [28.6, 10407.0], [28.7, 10407.0], [28.8, 10407.0], [28.9, 10407.0], [29.0, 10426.0], [29.1, 10426.0], [29.2, 10426.0], [29.3, 10426.0], [29.4, 10426.0], [29.5, 10483.0], [29.6, 10483.0], [29.7, 10483.0], [29.8, 10483.0], [29.9, 10483.0], [30.0, 10541.0], [30.1, 10541.0], [30.2, 10541.0], [30.3, 10541.0], [30.4, 10541.0], [30.5, 10543.0], [30.6, 10543.0], [30.7, 10543.0], [30.8, 10543.0], [30.9, 10543.0], [31.0, 10545.0], [31.1, 10545.0], [31.2, 10545.0], [31.3, 10545.0], [31.4, 10545.0], [31.5, 10581.0], [31.6, 10581.0], [31.7, 10581.0], [31.8, 10581.0], [31.9, 10581.0], [32.0, 10604.0], [32.1, 10604.0], [32.2, 10604.0], [32.3, 10604.0], [32.4, 10604.0], [32.5, 10620.0], [32.6, 10620.0], [32.7, 10620.0], [32.8, 10620.0], [32.9, 10620.0], [33.0, 10677.0], [33.1, 10677.0], [33.2, 10677.0], [33.3, 10677.0], [33.4, 10677.0], [33.5, 11034.0], [33.6, 11034.0], [33.7, 11034.0], [33.8, 11034.0], [33.9, 11034.0], [34.0, 11047.0], [34.1, 11047.0], [34.2, 11047.0], [34.3, 11047.0], [34.4, 11047.0], [34.5, 11060.0], [34.6, 11060.0], [34.7, 11060.0], [34.8, 11060.0], [34.9, 11060.0], [35.0, 11227.0], [35.1, 11227.0], [35.2, 11227.0], [35.3, 11227.0], [35.4, 11227.0], [35.5, 11327.0], [35.6, 11327.0], [35.7, 11327.0], [35.8, 11327.0], [35.9, 11327.0], [36.0, 11346.0], [36.1, 11346.0], [36.2, 11346.0], [36.3, 11346.0], [36.4, 11346.0], [36.5, 11374.0], [36.6, 11374.0], [36.7, 11374.0], [36.8, 11374.0], [36.9, 11374.0], [37.0, 11405.0], [37.1, 11405.0], [37.2, 11405.0], [37.3, 11405.0], [37.4, 11405.0], [37.5, 11476.0], [37.6, 11476.0], [37.7, 11476.0], [37.8, 11476.0], [37.9, 11476.0], [38.0, 11494.0], [38.1, 11494.0], [38.2, 11494.0], [38.3, 11494.0], [38.4, 11494.0], [38.5, 11519.0], [38.6, 11519.0], [38.7, 11519.0], [38.8, 11519.0], [38.9, 11519.0], [39.0, 11548.0], [39.1, 11548.0], [39.2, 11548.0], [39.3, 11548.0], [39.4, 11548.0], [39.5, 11578.0], [39.6, 11578.0], [39.7, 11578.0], [39.8, 11578.0], [39.9, 11578.0], [40.0, 11670.0], [40.1, 11670.0], [40.2, 11670.0], [40.3, 11670.0], [40.4, 11670.0], [40.5, 11704.0], [40.6, 11704.0], [40.7, 11704.0], [40.8, 11704.0], [40.9, 11704.0], [41.0, 11733.0], [41.1, 11733.0], [41.2, 11733.0], [41.3, 11733.0], [41.4, 11733.0], [41.5, 11753.0], [41.6, 11753.0], [41.7, 11753.0], [41.8, 11753.0], [41.9, 11753.0], [42.0, 11764.0], [42.1, 11764.0], [42.2, 11764.0], [42.3, 11764.0], [42.4, 11764.0], [42.5, 11810.0], [42.6, 11810.0], [42.7, 11810.0], [42.8, 11810.0], [42.9, 11810.0], [43.0, 11815.0], [43.1, 11815.0], [43.2, 11815.0], [43.3, 11815.0], [43.4, 11815.0], [43.5, 11951.0], [43.6, 11951.0], [43.7, 11951.0], [43.8, 11951.0], [43.9, 11951.0], [44.0, 11974.0], [44.1, 11974.0], [44.2, 11974.0], [44.3, 11974.0], [44.4, 11974.0], [44.5, 12208.0], [44.6, 12208.0], [44.7, 12208.0], [44.8, 12208.0], [44.9, 12208.0], [45.0, 12345.0], [45.1, 12345.0], [45.2, 12345.0], [45.3, 12345.0], [45.4, 12345.0], [45.5, 12424.0], [45.6, 12424.0], [45.7, 12424.0], [45.8, 12424.0], [45.9, 12424.0], [46.0, 12466.0], [46.1, 12466.0], [46.2, 12466.0], [46.3, 12466.0], [46.4, 12466.0], [46.5, 12484.0], [46.6, 12484.0], [46.7, 12484.0], [46.8, 12484.0], [46.9, 12484.0], [47.0, 12499.0], [47.1, 12499.0], [47.2, 12499.0], [47.3, 12499.0], [47.4, 12499.0], [47.5, 12690.0], [47.6, 12690.0], [47.7, 12690.0], [47.8, 12690.0], [47.9, 12690.0], [48.0, 12714.0], [48.1, 12714.0], [48.2, 12714.0], [48.3, 12714.0], [48.4, 12714.0], [48.5, 12758.0], [48.6, 12758.0], [48.7, 12758.0], [48.8, 12758.0], [48.9, 12758.0], [49.0, 12835.0], [49.1, 12835.0], [49.2, 12835.0], [49.3, 12835.0], [49.4, 12835.0], [49.5, 12857.0], [49.6, 12857.0], [49.7, 12857.0], [49.8, 12857.0], [49.9, 12857.0], [50.0, 12937.0], [50.1, 12937.0], [50.2, 12937.0], [50.3, 12937.0], [50.4, 12937.0], [50.5, 12937.0], [50.6, 12937.0], [50.7, 12937.0], [50.8, 12937.0], [50.9, 12937.0], [51.0, 12943.0], [51.1, 12943.0], [51.2, 12943.0], [51.3, 12943.0], [51.4, 12943.0], [51.5, 12943.0], [51.6, 12943.0], [51.7, 12943.0], [51.8, 12943.0], [51.9, 12943.0], [52.0, 12945.0], [52.1, 12945.0], [52.2, 12945.0], [52.3, 12945.0], [52.4, 12945.0], [52.5, 12951.0], [52.6, 12951.0], [52.7, 12951.0], [52.8, 12951.0], [52.9, 12951.0], [53.0, 13208.0], [53.1, 13208.0], [53.2, 13208.0], [53.3, 13208.0], [53.4, 13208.0], [53.5, 13305.0], [53.6, 13305.0], [53.7, 13305.0], [53.8, 13305.0], [53.9, 13305.0], [54.0, 13389.0], [54.1, 13389.0], [54.2, 13389.0], [54.3, 13389.0], [54.4, 13389.0], [54.5, 13452.0], [54.6, 13452.0], [54.7, 13452.0], [54.8, 13452.0], [54.9, 13452.0], [55.0, 13460.0], [55.1, 13460.0], [55.2, 13460.0], [55.3, 13460.0], [55.4, 13460.0], [55.5, 13491.0], [55.6, 13491.0], [55.7, 13491.0], [55.8, 13491.0], [55.9, 13491.0], [56.0, 13670.0], [56.1, 13670.0], [56.2, 13670.0], [56.3, 13670.0], [56.4, 13670.0], [56.5, 13674.0], [56.6, 13674.0], [56.7, 13674.0], [56.8, 13674.0], [56.9, 13674.0], [57.0, 13688.0], [57.1, 13688.0], [57.2, 13688.0], [57.3, 13688.0], [57.4, 13688.0], [57.5, 13719.0], [57.6, 13719.0], [57.7, 13719.0], [57.8, 13719.0], [57.9, 13719.0], [58.0, 13736.0], [58.1, 13736.0], [58.2, 13736.0], [58.3, 13736.0], [58.4, 13736.0], [58.5, 13891.0], [58.6, 13891.0], [58.7, 13891.0], [58.8, 13891.0], [58.9, 13891.0], [59.0, 13915.0], [59.1, 13915.0], [59.2, 13915.0], [59.3, 13915.0], [59.4, 13915.0], [59.5, 13920.0], [59.6, 13920.0], [59.7, 13920.0], [59.8, 13920.0], [59.9, 13920.0], [60.0, 13934.0], [60.1, 13934.0], [60.2, 13934.0], [60.3, 13934.0], [60.4, 13934.0], [60.5, 13962.0], [60.6, 13962.0], [60.7, 13962.0], [60.8, 13962.0], [60.9, 13962.0], [61.0, 14095.0], [61.1, 14095.0], [61.2, 14095.0], [61.3, 14095.0], [61.4, 14095.0], [61.5, 14096.0], [61.6, 14096.0], [61.7, 14096.0], [61.8, 14096.0], [61.9, 14096.0], [62.0, 14107.0], [62.1, 14107.0], [62.2, 14107.0], [62.3, 14107.0], [62.4, 14107.0], [62.5, 14113.0], [62.6, 14113.0], [62.7, 14113.0], [62.8, 14113.0], [62.9, 14113.0], [63.0, 14153.0], [63.1, 14153.0], [63.2, 14153.0], [63.3, 14153.0], [63.4, 14153.0], [63.5, 14397.0], [63.6, 14397.0], [63.7, 14397.0], [63.8, 14397.0], [63.9, 14397.0], [64.0, 14448.0], [64.1, 14448.0], [64.2, 14448.0], [64.3, 14448.0], [64.4, 14448.0], [64.5, 14484.0], [64.6, 14484.0], [64.7, 14484.0], [64.8, 14484.0], [64.9, 14484.0], [65.0, 14670.0], [65.1, 14670.0], [65.2, 14670.0], [65.3, 14670.0], [65.4, 14670.0], [65.5, 14691.0], [65.6, 14691.0], [65.7, 14691.0], [65.8, 14691.0], [65.9, 14691.0], [66.0, 14720.0], [66.1, 14720.0], [66.2, 14720.0], [66.3, 14720.0], [66.4, 14720.0], [66.5, 14837.0], [66.6, 14837.0], [66.7, 14837.0], [66.8, 14837.0], [66.9, 14837.0], [67.0, 14837.0], [67.1, 14837.0], [67.2, 14837.0], [67.3, 14837.0], [67.4, 14837.0], [67.5, 14894.0], [67.6, 14894.0], [67.7, 14894.0], [67.8, 14894.0], [67.9, 14894.0], [68.0, 14896.0], [68.1, 14896.0], [68.2, 14896.0], [68.3, 14896.0], [68.4, 14896.0], [68.5, 14939.0], [68.6, 14939.0], [68.7, 14939.0], [68.8, 14939.0], [68.9, 14939.0], [69.0, 14980.0], [69.1, 14980.0], [69.2, 14980.0], [69.3, 14980.0], [69.4, 14980.0], [69.5, 15034.0], [69.6, 15034.0], [69.7, 15034.0], [69.8, 15034.0], [69.9, 15034.0], [70.0, 15057.0], [70.1, 15057.0], [70.2, 15057.0], [70.3, 15057.0], [70.4, 15057.0], [70.5, 15078.0], [70.6, 15078.0], [70.7, 15078.0], [70.8, 15078.0], [70.9, 15078.0], [71.0, 15088.0], [71.1, 15088.0], [71.2, 15088.0], [71.3, 15088.0], [71.4, 15088.0], [71.5, 15152.0], [71.6, 15152.0], [71.7, 15152.0], [71.8, 15152.0], [71.9, 15152.0], [72.0, 15185.0], [72.1, 15185.0], [72.2, 15185.0], [72.3, 15185.0], [72.4, 15185.0], [72.5, 15220.0], [72.6, 15220.0], [72.7, 15220.0], [72.8, 15220.0], [72.9, 15220.0], [73.0, 15253.0], [73.1, 15253.0], [73.2, 15253.0], [73.3, 15253.0], [73.4, 15253.0], [73.5, 15314.0], [73.6, 15314.0], [73.7, 15314.0], [73.8, 15314.0], [73.9, 15314.0], [74.0, 15342.0], [74.1, 15342.0], [74.2, 15342.0], [74.3, 15342.0], [74.4, 15342.0], [74.5, 15496.0], [74.6, 15496.0], [74.7, 15496.0], [74.8, 15496.0], [74.9, 15496.0], [75.0, 15514.0], [75.1, 15514.0], [75.2, 15514.0], [75.3, 15514.0], [75.4, 15514.0], [75.5, 15517.0], [75.6, 15517.0], [75.7, 15517.0], [75.8, 15517.0], [75.9, 15517.0], [76.0, 15645.0], [76.1, 15645.0], [76.2, 15645.0], [76.3, 15645.0], [76.4, 15645.0], [76.5, 15693.0], [76.6, 15693.0], [76.7, 15693.0], [76.8, 15693.0], [76.9, 15693.0], [77.0, 15735.0], [77.1, 15735.0], [77.2, 15735.0], [77.3, 15735.0], [77.4, 15735.0], [77.5, 15958.0], [77.6, 15958.0], [77.7, 15958.0], [77.8, 15958.0], [77.9, 15958.0], [78.0, 15966.0], [78.1, 15966.0], [78.2, 15966.0], [78.3, 15966.0], [78.4, 15966.0], [78.5, 16021.0], [78.6, 16021.0], [78.7, 16021.0], [78.8, 16021.0], [78.9, 16021.0], [79.0, 16117.0], [79.1, 16117.0], [79.2, 16117.0], [79.3, 16117.0], [79.4, 16117.0], [79.5, 16117.0], [79.6, 16117.0], [79.7, 16117.0], [79.8, 16117.0], [79.9, 16117.0], [80.0, 16281.0], [80.1, 16281.0], [80.2, 16281.0], [80.3, 16281.0], [80.4, 16281.0], [80.5, 16343.0], [80.6, 16343.0], [80.7, 16343.0], [80.8, 16343.0], [80.9, 16343.0], [81.0, 16345.0], [81.1, 16345.0], [81.2, 16345.0], [81.3, 16345.0], [81.4, 16345.0], [81.5, 16349.0], [81.6, 16349.0], [81.7, 16349.0], [81.8, 16349.0], [81.9, 16349.0], [82.0, 16365.0], [82.1, 16365.0], [82.2, 16365.0], [82.3, 16365.0], [82.4, 16365.0], [82.5, 16372.0], [82.6, 16372.0], [82.7, 16372.0], [82.8, 16372.0], [82.9, 16372.0], [83.0, 16401.0], [83.1, 16401.0], [83.2, 16401.0], [83.3, 16401.0], [83.4, 16401.0], [83.5, 16410.0], [83.6, 16410.0], [83.7, 16410.0], [83.8, 16410.0], [83.9, 16410.0], [84.0, 16440.0], [84.1, 16440.0], [84.2, 16440.0], [84.3, 16440.0], [84.4, 16440.0], [84.5, 16459.0], [84.6, 16459.0], [84.7, 16459.0], [84.8, 16459.0], [84.9, 16459.0], [85.0, 16464.0], [85.1, 16464.0], [85.2, 16464.0], [85.3, 16464.0], [85.4, 16464.0], [85.5, 16528.0], [85.6, 16528.0], [85.7, 16528.0], [85.8, 16528.0], [85.9, 16528.0], [86.0, 16599.0], [86.1, 16599.0], [86.2, 16599.0], [86.3, 16599.0], [86.4, 16599.0], [86.5, 16727.0], [86.6, 16727.0], [86.7, 16727.0], [86.8, 16727.0], [86.9, 16727.0], [87.0, 16749.0], [87.1, 16749.0], [87.2, 16749.0], [87.3, 16749.0], [87.4, 16749.0], [87.5, 16774.0], [87.6, 16774.0], [87.7, 16774.0], [87.8, 16774.0], [87.9, 16774.0], [88.0, 16824.0], [88.1, 16824.0], [88.2, 16824.0], [88.3, 16824.0], [88.4, 16824.0], [88.5, 16857.0], [88.6, 16857.0], [88.7, 16857.0], [88.8, 16857.0], [88.9, 16857.0], [89.0, 16984.0], [89.1, 16984.0], [89.2, 16984.0], [89.3, 16984.0], [89.4, 16984.0], [89.5, 17052.0], [89.6, 17052.0], [89.7, 17052.0], [89.8, 17052.0], [89.9, 17052.0], [90.0, 17082.0], [90.1, 17082.0], [90.2, 17082.0], [90.3, 17082.0], [90.4, 17082.0], [90.5, 17089.0], [90.6, 17089.0], [90.7, 17089.0], [90.8, 17089.0], [90.9, 17089.0], [91.0, 17183.0], [91.1, 17183.0], [91.2, 17183.0], [91.3, 17183.0], [91.4, 17183.0], [91.5, 17241.0], [91.6, 17241.0], [91.7, 17241.0], [91.8, 17241.0], [91.9, 17241.0], [92.0, 17313.0], [92.1, 17313.0], [92.2, 17313.0], [92.3, 17313.0], [92.4, 17313.0], [92.5, 17329.0], [92.6, 17329.0], [92.7, 17329.0], [92.8, 17329.0], [92.9, 17329.0], [93.0, 17331.0], [93.1, 17331.0], [93.2, 17331.0], [93.3, 17331.0], [93.4, 17331.0], [93.5, 17378.0], [93.6, 17378.0], [93.7, 17378.0], [93.8, 17378.0], [93.9, 17378.0], [94.0, 17411.0], [94.1, 17411.0], [94.2, 17411.0], [94.3, 17411.0], [94.4, 17411.0], [94.5, 17530.0], [94.6, 17530.0], [94.7, 17530.0], [94.8, 17530.0], [94.9, 17530.0], [95.0, 17562.0], [95.1, 17562.0], [95.2, 17562.0], [95.3, 17562.0], [95.4, 17562.0], [95.5, 17566.0], [95.6, 17566.0], [95.7, 17566.0], [95.8, 17566.0], [95.9, 17566.0], [96.0, 17581.0], [96.1, 17581.0], [96.2, 17581.0], [96.3, 17581.0], [96.4, 17581.0], [96.5, 17593.0], [96.6, 17593.0], [96.7, 17593.0], [96.8, 17593.0], [96.9, 17593.0], [97.0, 17821.0], [97.1, 17821.0], [97.2, 17821.0], [97.3, 17821.0], [97.4, 17821.0], [97.5, 17849.0], [97.6, 17849.0], [97.7, 17849.0], [97.8, 17849.0], [97.9, 17849.0], [98.0, 17865.0], [98.1, 17865.0], [98.2, 17865.0], [98.3, 17865.0], [98.4, 17865.0], [98.5, 17964.0], [98.6, 17964.0], [98.7, 17964.0], [98.8, 17964.0], [98.9, 17964.0], [99.0, 17967.0], [99.1, 17967.0], [99.2, 17967.0], [99.3, 17967.0], [99.4, 17967.0], [99.5, 18005.0], [99.6, 18005.0], [99.7, 18005.0], [99.8, 18005.0], [99.9, 18005.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7300.0, "maxY": 8.0, "series": [{"data": [[7300.0, 1.0], [7600.0, 1.0], [7700.0, 2.0], [7900.0, 2.0], [8100.0, 2.0], [8000.0, 1.0], [8400.0, 1.0], [8500.0, 2.0], [8600.0, 2.0], [9000.0, 2.0], [9100.0, 7.0], [9200.0, 8.0], [9300.0, 7.0], [9400.0, 8.0], [9500.0, 1.0], [9800.0, 1.0], [10100.0, 4.0], [10000.0, 1.0], [10200.0, 2.0], [10300.0, 2.0], [10400.0, 3.0], [10500.0, 4.0], [10600.0, 3.0], [11000.0, 3.0], [11200.0, 1.0], [11300.0, 3.0], [11400.0, 3.0], [11500.0, 3.0], [11700.0, 4.0], [11600.0, 1.0], [11800.0, 2.0], [11900.0, 2.0], [12200.0, 1.0], [12400.0, 4.0], [12300.0, 1.0], [12600.0, 1.0], [12700.0, 2.0], [12800.0, 2.0], [12900.0, 6.0], [13200.0, 1.0], [13300.0, 2.0], [13400.0, 3.0], [13600.0, 3.0], [13700.0, 2.0], [13800.0, 1.0], [13900.0, 4.0], [14000.0, 2.0], [14100.0, 3.0], [14300.0, 1.0], [14400.0, 2.0], [14600.0, 2.0], [14800.0, 4.0], [14700.0, 1.0], [15000.0, 4.0], [15100.0, 2.0], [15200.0, 2.0], [14900.0, 2.0], [15300.0, 2.0], [15600.0, 2.0], [15400.0, 1.0], [15500.0, 2.0], [15700.0, 1.0], [16000.0, 1.0], [16100.0, 2.0], [15900.0, 2.0], [16200.0, 1.0], [16300.0, 5.0], [17400.0, 1.0], [16500.0, 2.0], [16400.0, 5.0], [17000.0, 3.0], [16700.0, 3.0], [17100.0, 1.0], [16800.0, 2.0], [16900.0, 1.0], [17300.0, 4.0], [17200.0, 1.0], [17500.0, 5.0], [17800.0, 3.0], [17900.0, 2.0], [18000.0, 1.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 199.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 199.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.66000000000001, "minX": 1.57233126E12, "maxY": 100.66000000000001, "series": [{"data": [[1.57233126E12, 100.66000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57233126E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7346.0, "minX": 1.0, "maxY": 18005.0, "series": [{"data": [[2.0, 17581.0], [3.0, 17967.0], [4.0, 18005.0], [5.0, 17562.0], [6.0, 17964.0], [7.0, 17566.0], [8.0, 17530.0], [9.0, 17849.0], [10.0, 17821.0], [11.0, 17241.0], [12.0, 17593.0], [13.0, 17089.0], [14.0, 17082.0], [15.0, 17411.0], [16.0, 17378.0], [17.0, 17331.0], [18.0, 17329.0], [19.0, 17313.0], [20.0, 16984.0], [21.0, 16824.0], [22.0, 16857.0], [23.0, 17183.0], [25.0, 16750.5], [26.0, 16749.0], [27.0, 17052.0], [28.0, 16599.0], [29.0, 16528.0], [30.0, 16464.0], [31.0, 16365.0], [33.0, 16459.0], [32.0, 16349.0], [35.0, 16440.0], [34.0, 16372.0], [37.0, 16401.0], [36.0, 16410.0], [38.0, 15958.0], [41.0, 16281.0], [40.0, 16344.0], [43.0, 16117.0], [42.0, 15966.0], [45.0, 15735.0], [44.0, 16117.0], [47.0, 15693.0], [46.0, 16021.0], [49.0, 15517.0], [48.0, 15514.0], [51.0, 15645.0], [50.0, 15496.0], [53.0, 15188.0], [55.0, 15314.0], [54.0, 14980.0], [56.0, 14939.0], [59.0, 15220.0], [58.0, 15219.0], [61.0, 15078.0], [60.0, 15152.0], [63.0, 15057.0], [62.0, 15088.0], [66.0, 14894.0], [65.0, 14896.0], [64.0, 14720.0], [71.0, 14397.0], [70.0, 14670.0], [69.0, 14691.0], [68.0, 14837.0], [75.0, 14153.0], [74.0, 13934.0], [73.0, 14484.0], [72.0, 14448.0], [79.0, 14096.0], [78.0, 14107.0], [77.0, 14113.0], [76.0, 13920.0], [83.0, 13915.0], [82.0, 13962.0], [81.0, 13736.0], [80.0, 14095.0], [87.0, 13719.0], [86.0, 13460.0], [85.0, 13670.0], [84.0, 13891.0], [91.0, 13491.0], [90.0, 13305.0], [89.0, 13674.0], [88.0, 13688.0], [95.0, 12951.0], [94.0, 13208.0], [93.0, 13389.0], [92.0, 13452.0], [98.0, 12943.0], [97.0, 12945.0], [103.0, 12758.0], [102.0, 12835.0], [101.0, 12910.333333333334], [107.0, 12499.0], [106.0, 12424.0], [105.0, 12690.0], [104.0, 12714.0], [111.0, 11974.0], [110.0, 12466.0], [109.0, 12484.0], [108.0, 12345.0], [115.0, 11810.0], [114.0, 11815.0], [113.0, 11951.0], [112.0, 12208.0], [119.0, 11733.0], [118.0, 11753.0], [117.0, 11764.0], [116.0, 11670.0], [123.0, 11578.0], [122.0, 11374.0], [121.0, 11476.0], [120.0, 11704.0], [127.0, 11346.0], [126.0, 11494.0], [125.0, 11519.0], [124.0, 11548.0], [135.0, 10611.0], [133.0, 11047.0], [132.0, 11034.0], [131.0, 11227.0], [130.0, 11060.0], [129.0, 11327.0], [128.0, 11405.0], [143.0, 10426.0], [142.0, 10269.0], [141.0, 10541.0], [140.0, 10543.0], [139.0, 10483.0], [138.0, 10581.0], [137.0, 10604.0], [136.0, 10620.0], [151.0, 10044.0], [150.0, 10190.0], [149.0, 10258.0], [148.0, 10247.0], [146.0, 10271.0], [144.0, 10407.0], [158.0, 9340.0], [157.0, 9377.0], [156.0, 9499.0], [153.0, 9860.0], [152.0, 10109.0], [166.0, 9133.0], [164.0, 9407.0], [163.0, 9418.0], [162.0, 9432.0], [160.0, 9445.0], [175.0, 9109.0], [173.0, 9296.0], [171.0, 9251.5], [169.0, 9310.0], [168.0, 9297.666666666666], [183.0, 9196.0], [182.0, 9187.0], [179.0, 9249.0], [177.0, 9255.0], [191.0, 8085.0], [190.0, 8580.0], [188.0, 8574.0], [187.0, 8645.0], [186.0, 9093.0], [185.0, 9132.0], [184.0, 9177.0], [199.0, 7761.0], [197.0, 7670.0], [196.0, 7995.0], [195.0, 8122.0], [194.0, 7936.0], [193.0, 8194.0], [192.0, 8424.0], [200.0, 7346.0], [1.0, 17865.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[100.66000000000001, 12851.38]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1718.5833333333333, "minX": 1.57233126E12, "maxY": 5386.333333333333, "series": [{"data": [[1.57233126E12, 5386.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57233126E12, 1718.5833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57233126E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 12851.38, "minX": 1.57233126E12, "maxY": 12851.38, "series": [{"data": [[1.57233126E12, 12851.38]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57233126E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 12677.730000000003, "minX": 1.57233126E12, "maxY": 12677.730000000003, "series": [{"data": [[1.57233126E12, 12677.730000000003]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57233126E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2523.255000000001, "minX": 1.57233126E12, "maxY": 2523.255000000001, "series": [{"data": [[1.57233126E12, 2523.255000000001]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57233126E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7346.0, "minX": 1.57233126E12, "maxY": 18005.0, "series": [{"data": [[1.57233126E12, 18005.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57233126E12, 7346.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57233126E12, 17082.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57233126E12, 17967.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57233126E12, 17562.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57233126E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7763.0, "minX": 7.0, "maxY": 17378.0, "series": [{"data": [[34.0, 9307.0], [17.0, 15342.0], [9.0, 8574.0], [18.0, 12736.0], [19.0, 13719.0], [20.0, 11533.5], [25.0, 17378.0], [7.0, 7763.0], [15.0, 14764.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 14720.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 7.0, "maxY": 17278.0, "series": [{"data": [[34.0, 9223.0], [17.0, 15241.0], [9.0, 8497.0], [18.0, 12636.5], [19.0, 13588.0], [20.0, 11434.0], [25.0, 17278.0], [7.0, 7662.0], [15.0, 14665.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57233126E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57233126E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57233126E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57233126E12, "maxY": 3.316666666666667, "series": [{"data": [[1.57233126E12, 3.316666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57233126E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57233126E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57233126E12, "maxY": 3.316666666666667, "series": [{"data": [[1.57233126E12, 0.016666666666666666]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57233126E12, 3.316666666666667]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57233126E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57233126E12, "maxY": 3.316666666666667, "series": [{"data": [[1.57233126E12, 3.316666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57233126E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57233126E12, "title": "Total Transactions Per Second"}},
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

