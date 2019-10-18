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
        data: {"result": {"minY": 13944.0, "minX": 0.0, "maxY": 31957.0, "series": [{"data": [[0.0, 13944.0], [0.1, 13944.0], [0.2, 13944.0], [0.3, 13944.0], [0.4, 13944.0], [0.5, 16149.0], [0.6, 16149.0], [0.7, 16149.0], [0.8, 16149.0], [0.9, 16149.0], [1.0, 18408.0], [1.1, 18408.0], [1.2, 18408.0], [1.3, 18408.0], [1.4, 18408.0], [1.5, 20172.0], [1.6, 20172.0], [1.7, 20172.0], [1.8, 20172.0], [1.9, 20172.0], [2.0, 21258.0], [2.1, 21258.0], [2.2, 21258.0], [2.3, 21258.0], [2.4, 21258.0], [2.5, 22189.0], [2.6, 22189.0], [2.7, 22189.0], [2.8, 22189.0], [2.9, 22189.0], [3.0, 22729.0], [3.1, 22729.0], [3.2, 22729.0], [3.3, 22729.0], [3.4, 22729.0], [3.5, 24119.0], [3.6, 24119.0], [3.7, 24119.0], [3.8, 24119.0], [3.9, 24119.0], [4.0, 24159.0], [4.1, 24159.0], [4.2, 24159.0], [4.3, 24159.0], [4.4, 24159.0], [4.5, 24199.0], [4.6, 24199.0], [4.7, 24199.0], [4.8, 24199.0], [4.9, 24199.0], [5.0, 24209.0], [5.1, 24209.0], [5.2, 24209.0], [5.3, 24209.0], [5.4, 24209.0], [5.5, 24288.0], [5.6, 24288.0], [5.7, 24288.0], [5.8, 24288.0], [5.9, 24288.0], [6.0, 24376.0], [6.1, 24376.0], [6.2, 24376.0], [6.3, 24376.0], [6.4, 24376.0], [6.5, 24489.0], [6.6, 24489.0], [6.7, 24489.0], [6.8, 24489.0], [6.9, 24489.0], [7.0, 24499.0], [7.1, 24499.0], [7.2, 24499.0], [7.3, 24499.0], [7.4, 24499.0], [7.5, 24518.0], [7.6, 24518.0], [7.7, 24518.0], [7.8, 24518.0], [7.9, 24518.0], [8.0, 24557.0], [8.1, 24557.0], [8.2, 24557.0], [8.3, 24557.0], [8.4, 24557.0], [8.5, 24774.0], [8.6, 24774.0], [8.7, 24774.0], [8.8, 24774.0], [8.9, 24774.0], [9.0, 24922.0], [9.1, 24922.0], [9.2, 24922.0], [9.3, 24922.0], [9.4, 24922.0], [9.5, 24948.0], [9.6, 24948.0], [9.7, 24948.0], [9.8, 24948.0], [9.9, 24948.0], [10.0, 24953.0], [10.1, 24953.0], [10.2, 24953.0], [10.3, 24953.0], [10.4, 24953.0], [10.5, 24962.0], [10.6, 24962.0], [10.7, 24962.0], [10.8, 24962.0], [10.9, 24962.0], [11.0, 24971.0], [11.1, 24971.0], [11.2, 24971.0], [11.3, 24971.0], [11.4, 24971.0], [11.5, 25424.0], [11.6, 25424.0], [11.7, 25424.0], [11.8, 25424.0], [11.9, 25424.0], [12.0, 25437.0], [12.1, 25437.0], [12.2, 25437.0], [12.3, 25437.0], [12.4, 25437.0], [12.5, 25481.0], [12.6, 25481.0], [12.7, 25481.0], [12.8, 25481.0], [12.9, 25481.0], [13.0, 25542.0], [13.1, 25542.0], [13.2, 25542.0], [13.3, 25542.0], [13.4, 25542.0], [13.5, 25607.0], [13.6, 25607.0], [13.7, 25607.0], [13.8, 25607.0], [13.9, 25607.0], [14.0, 25628.0], [14.1, 25628.0], [14.2, 25628.0], [14.3, 25628.0], [14.4, 25628.0], [14.5, 25753.0], [14.6, 25753.0], [14.7, 25753.0], [14.8, 25753.0], [14.9, 25753.0], [15.0, 25785.0], [15.1, 25785.0], [15.2, 25785.0], [15.3, 25785.0], [15.4, 25785.0], [15.5, 25969.0], [15.6, 25969.0], [15.7, 25969.0], [15.8, 25969.0], [15.9, 25969.0], [16.0, 26069.0], [16.1, 26069.0], [16.2, 26069.0], [16.3, 26069.0], [16.4, 26069.0], [16.5, 26300.0], [16.6, 26300.0], [16.7, 26300.0], [16.8, 26300.0], [16.9, 26300.0], [17.0, 26327.0], [17.1, 26327.0], [17.2, 26327.0], [17.3, 26327.0], [17.4, 26327.0], [17.5, 26339.0], [17.6, 26339.0], [17.7, 26339.0], [17.8, 26339.0], [17.9, 26339.0], [18.0, 26434.0], [18.1, 26434.0], [18.2, 26434.0], [18.3, 26434.0], [18.4, 26434.0], [18.5, 26498.0], [18.6, 26498.0], [18.7, 26498.0], [18.8, 26498.0], [18.9, 26498.0], [19.0, 26553.0], [19.1, 26553.0], [19.2, 26553.0], [19.3, 26553.0], [19.4, 26553.0], [19.5, 26582.0], [19.6, 26582.0], [19.7, 26582.0], [19.8, 26582.0], [19.9, 26582.0], [20.0, 26627.0], [20.1, 26627.0], [20.2, 26627.0], [20.3, 26627.0], [20.4, 26627.0], [20.5, 26755.0], [20.6, 26755.0], [20.7, 26755.0], [20.8, 26755.0], [20.9, 26755.0], [21.0, 26773.0], [21.1, 26773.0], [21.2, 26773.0], [21.3, 26773.0], [21.4, 26773.0], [21.5, 26826.0], [21.6, 26826.0], [21.7, 26826.0], [21.8, 26826.0], [21.9, 26826.0], [22.0, 26877.0], [22.1, 26877.0], [22.2, 26877.0], [22.3, 26877.0], [22.4, 26877.0], [22.5, 26947.0], [22.6, 26947.0], [22.7, 26947.0], [22.8, 26947.0], [22.9, 26947.0], [23.0, 27022.0], [23.1, 27022.0], [23.2, 27022.0], [23.3, 27022.0], [23.4, 27022.0], [23.5, 27236.0], [23.6, 27236.0], [23.7, 27236.0], [23.8, 27236.0], [23.9, 27236.0], [24.0, 27402.0], [24.1, 27402.0], [24.2, 27402.0], [24.3, 27402.0], [24.4, 27402.0], [24.5, 27496.0], [24.6, 27496.0], [24.7, 27496.0], [24.8, 27496.0], [24.9, 27496.0], [25.0, 27557.0], [25.1, 27557.0], [25.2, 27557.0], [25.3, 27557.0], [25.4, 27557.0], [25.5, 27619.0], [25.6, 27619.0], [25.7, 27619.0], [25.8, 27619.0], [25.9, 27619.0], [26.0, 27699.0], [26.1, 27699.0], [26.2, 27699.0], [26.3, 27699.0], [26.4, 27699.0], [26.5, 27706.0], [26.6, 27706.0], [26.7, 27706.0], [26.8, 27706.0], [26.9, 27706.0], [27.0, 27835.0], [27.1, 27835.0], [27.2, 27835.0], [27.3, 27835.0], [27.4, 27835.0], [27.5, 27847.0], [27.6, 27847.0], [27.7, 27847.0], [27.8, 27847.0], [27.9, 27847.0], [28.0, 27936.0], [28.1, 27936.0], [28.2, 27936.0], [28.3, 27936.0], [28.4, 27936.0], [28.5, 28042.0], [28.6, 28042.0], [28.7, 28042.0], [28.8, 28042.0], [28.9, 28042.0], [29.0, 28095.0], [29.1, 28095.0], [29.2, 28095.0], [29.3, 28095.0], [29.4, 28095.0], [29.5, 28142.0], [29.6, 28142.0], [29.7, 28142.0], [29.8, 28142.0], [29.9, 28142.0], [30.0, 28233.0], [30.1, 28233.0], [30.2, 28233.0], [30.3, 28233.0], [30.4, 28233.0], [30.5, 28248.0], [30.6, 28248.0], [30.7, 28248.0], [30.8, 28248.0], [30.9, 28248.0], [31.0, 28282.0], [31.1, 28282.0], [31.2, 28282.0], [31.3, 28282.0], [31.4, 28282.0], [31.5, 28343.0], [31.6, 28343.0], [31.7, 28343.0], [31.8, 28343.0], [31.9, 28343.0], [32.0, 28673.0], [32.1, 28673.0], [32.2, 28673.0], [32.3, 28673.0], [32.4, 28673.0], [32.5, 28713.0], [32.6, 28713.0], [32.7, 28713.0], [32.8, 28713.0], [32.9, 28713.0], [33.0, 28804.0], [33.1, 28804.0], [33.2, 28804.0], [33.3, 28804.0], [33.4, 28804.0], [33.5, 28809.0], [33.6, 28809.0], [33.7, 28809.0], [33.8, 28809.0], [33.9, 28809.0], [34.0, 29003.0], [34.1, 29003.0], [34.2, 29003.0], [34.3, 29003.0], [34.4, 29003.0], [34.5, 29138.0], [34.6, 29138.0], [34.7, 29138.0], [34.8, 29138.0], [34.9, 29138.0], [35.0, 29163.0], [35.1, 29163.0], [35.2, 29163.0], [35.3, 29163.0], [35.4, 29163.0], [35.5, 29201.0], [35.6, 29201.0], [35.7, 29201.0], [35.8, 29201.0], [35.9, 29201.0], [36.0, 29233.0], [36.1, 29233.0], [36.2, 29233.0], [36.3, 29233.0], [36.4, 29233.0], [36.5, 29269.0], [36.6, 29269.0], [36.7, 29269.0], [36.8, 29269.0], [36.9, 29269.0], [37.0, 29285.0], [37.1, 29285.0], [37.2, 29285.0], [37.3, 29285.0], [37.4, 29285.0], [37.5, 29559.0], [37.6, 29559.0], [37.7, 29559.0], [37.8, 29559.0], [37.9, 29559.0], [38.0, 29565.0], [38.1, 29565.0], [38.2, 29565.0], [38.3, 29565.0], [38.4, 29565.0], [38.5, 29577.0], [38.6, 29577.0], [38.7, 29577.0], [38.8, 29577.0], [38.9, 29577.0], [39.0, 29604.0], [39.1, 29604.0], [39.2, 29604.0], [39.3, 29604.0], [39.4, 29604.0], [39.5, 29758.0], [39.6, 29758.0], [39.7, 29758.0], [39.8, 29758.0], [39.9, 29758.0], [40.0, 29838.0], [40.1, 29838.0], [40.2, 29838.0], [40.3, 29838.0], [40.4, 29838.0], [40.5, 29876.0], [40.6, 29876.0], [40.7, 29876.0], [40.8, 29876.0], [40.9, 29876.0], [41.0, 29982.0], [41.1, 29982.0], [41.2, 29982.0], [41.3, 29982.0], [41.4, 29982.0], [41.5, 30361.0], [41.6, 30361.0], [41.7, 30361.0], [41.8, 30361.0], [41.9, 30361.0], [42.0, 30448.0], [42.1, 30448.0], [42.2, 30448.0], [42.3, 30448.0], [42.4, 30448.0], [42.5, 30591.0], [42.6, 30591.0], [42.7, 30591.0], [42.8, 30591.0], [42.9, 30591.0], [43.0, 30654.0], [43.1, 30654.0], [43.2, 30654.0], [43.3, 30654.0], [43.4, 30654.0], [43.5, 30703.0], [43.6, 30703.0], [43.7, 30703.0], [43.8, 30703.0], [43.9, 30703.0], [44.0, 30817.0], [44.1, 30817.0], [44.2, 30817.0], [44.3, 30817.0], [44.4, 30817.0], [44.5, 30912.0], [44.6, 30912.0], [44.7, 30912.0], [44.8, 30912.0], [44.9, 30912.0], [45.0, 31049.0], [45.1, 31049.0], [45.2, 31049.0], [45.3, 31049.0], [45.4, 31049.0], [45.5, 31217.0], [45.6, 31217.0], [45.7, 31217.0], [45.8, 31217.0], [45.9, 31217.0], [46.0, 31244.0], [46.1, 31244.0], [46.2, 31244.0], [46.3, 31244.0], [46.4, 31244.0], [46.5, 31254.0], [46.6, 31254.0], [46.7, 31254.0], [46.8, 31254.0], [46.9, 31254.0], [47.0, 31257.0], [47.1, 31257.0], [47.2, 31257.0], [47.3, 31257.0], [47.4, 31257.0], [47.5, 31258.0], [47.6, 31258.0], [47.7, 31258.0], [47.8, 31258.0], [47.9, 31258.0], [48.0, 31260.0], [48.1, 31260.0], [48.2, 31260.0], [48.3, 31260.0], [48.4, 31260.0], [48.5, 31266.0], [48.6, 31266.0], [48.7, 31266.0], [48.8, 31266.0], [48.9, 31266.0], [49.0, 31274.0], [49.1, 31274.0], [49.2, 31274.0], [49.3, 31274.0], [49.4, 31274.0], [49.5, 31281.0], [49.6, 31281.0], [49.7, 31281.0], [49.8, 31281.0], [49.9, 31281.0], [50.0, 31308.0], [50.1, 31308.0], [50.2, 31308.0], [50.3, 31308.0], [50.4, 31308.0], [50.5, 31314.0], [50.6, 31314.0], [50.7, 31314.0], [50.8, 31314.0], [50.9, 31314.0], [51.0, 31421.0], [51.1, 31421.0], [51.2, 31421.0], [51.3, 31421.0], [51.4, 31421.0], [51.5, 31443.0], [51.6, 31443.0], [51.7, 31443.0], [51.8, 31443.0], [51.9, 31443.0], [52.0, 31462.0], [52.1, 31462.0], [52.2, 31462.0], [52.3, 31462.0], [52.4, 31462.0], [52.5, 31463.0], [52.6, 31463.0], [52.7, 31463.0], [52.8, 31463.0], [52.9, 31463.0], [53.0, 31463.0], [53.1, 31463.0], [53.2, 31463.0], [53.3, 31463.0], [53.4, 31463.0], [53.5, 31469.0], [53.6, 31469.0], [53.7, 31469.0], [53.8, 31469.0], [53.9, 31469.0], [54.0, 31475.0], [54.1, 31475.0], [54.2, 31475.0], [54.3, 31475.0], [54.4, 31475.0], [54.5, 31483.0], [54.6, 31483.0], [54.7, 31483.0], [54.8, 31483.0], [54.9, 31483.0], [55.0, 31490.0], [55.1, 31490.0], [55.2, 31490.0], [55.3, 31490.0], [55.4, 31490.0], [55.5, 31505.0], [55.6, 31505.0], [55.7, 31505.0], [55.8, 31505.0], [55.9, 31505.0], [56.0, 31510.0], [56.1, 31510.0], [56.2, 31510.0], [56.3, 31510.0], [56.4, 31510.0], [56.5, 31512.0], [56.6, 31512.0], [56.7, 31512.0], [56.8, 31512.0], [56.9, 31512.0], [57.0, 31516.0], [57.1, 31516.0], [57.2, 31516.0], [57.3, 31516.0], [57.4, 31516.0], [57.5, 31517.0], [57.6, 31517.0], [57.7, 31517.0], [57.8, 31517.0], [57.9, 31517.0], [58.0, 31533.0], [58.1, 31533.0], [58.2, 31533.0], [58.3, 31533.0], [58.4, 31533.0], [58.5, 31552.0], [58.6, 31552.0], [58.7, 31552.0], [58.8, 31552.0], [58.9, 31552.0], [59.0, 31558.0], [59.1, 31558.0], [59.2, 31558.0], [59.3, 31558.0], [59.4, 31558.0], [59.5, 31572.0], [59.6, 31572.0], [59.7, 31572.0], [59.8, 31572.0], [59.9, 31572.0], [60.0, 31574.0], [60.1, 31574.0], [60.2, 31574.0], [60.3, 31574.0], [60.4, 31574.0], [60.5, 31590.0], [60.6, 31590.0], [60.7, 31590.0], [60.8, 31590.0], [60.9, 31590.0], [61.0, 31599.0], [61.1, 31599.0], [61.2, 31599.0], [61.3, 31599.0], [61.4, 31599.0], [61.5, 31600.0], [61.6, 31600.0], [61.7, 31600.0], [61.8, 31600.0], [61.9, 31600.0], [62.0, 31600.0], [62.1, 31600.0], [62.2, 31600.0], [62.3, 31600.0], [62.4, 31600.0], [62.5, 31608.0], [62.6, 31608.0], [62.7, 31608.0], [62.8, 31608.0], [62.9, 31608.0], [63.0, 31620.0], [63.1, 31620.0], [63.2, 31620.0], [63.3, 31620.0], [63.4, 31620.0], [63.5, 31641.0], [63.6, 31641.0], [63.7, 31641.0], [63.8, 31641.0], [63.9, 31641.0], [64.0, 31647.0], [64.1, 31647.0], [64.2, 31647.0], [64.3, 31647.0], [64.4, 31647.0], [64.5, 31652.0], [64.6, 31652.0], [64.7, 31652.0], [64.8, 31652.0], [64.9, 31652.0], [65.0, 31652.0], [65.1, 31652.0], [65.2, 31652.0], [65.3, 31652.0], [65.4, 31652.0], [65.5, 31653.0], [65.6, 31653.0], [65.7, 31653.0], [65.8, 31653.0], [65.9, 31653.0], [66.0, 31677.0], [66.1, 31677.0], [66.2, 31677.0], [66.3, 31677.0], [66.4, 31677.0], [66.5, 31685.0], [66.6, 31685.0], [66.7, 31685.0], [66.8, 31685.0], [66.9, 31685.0], [67.0, 31685.0], [67.1, 31685.0], [67.2, 31685.0], [67.3, 31685.0], [67.4, 31685.0], [67.5, 31690.0], [67.6, 31690.0], [67.7, 31690.0], [67.8, 31690.0], [67.9, 31690.0], [68.0, 31697.0], [68.1, 31697.0], [68.2, 31697.0], [68.3, 31697.0], [68.4, 31697.0], [68.5, 31702.0], [68.6, 31702.0], [68.7, 31702.0], [68.8, 31702.0], [68.9, 31702.0], [69.0, 31713.0], [69.1, 31713.0], [69.2, 31713.0], [69.3, 31713.0], [69.4, 31713.0], [69.5, 31717.0], [69.6, 31717.0], [69.7, 31717.0], [69.8, 31717.0], [69.9, 31717.0], [70.0, 31747.0], [70.1, 31747.0], [70.2, 31747.0], [70.3, 31747.0], [70.4, 31747.0], [70.5, 31750.0], [70.6, 31750.0], [70.7, 31750.0], [70.8, 31750.0], [70.9, 31750.0], [71.0, 31751.0], [71.1, 31751.0], [71.2, 31751.0], [71.3, 31751.0], [71.4, 31751.0], [71.5, 31752.0], [71.6, 31752.0], [71.7, 31752.0], [71.8, 31752.0], [71.9, 31752.0], [72.0, 31761.0], [72.1, 31761.0], [72.2, 31761.0], [72.3, 31761.0], [72.4, 31761.0], [72.5, 31766.0], [72.6, 31766.0], [72.7, 31766.0], [72.8, 31766.0], [72.9, 31766.0], [73.0, 31794.0], [73.1, 31794.0], [73.2, 31794.0], [73.3, 31794.0], [73.4, 31794.0], [73.5, 31802.0], [73.6, 31802.0], [73.7, 31802.0], [73.8, 31802.0], [73.9, 31802.0], [74.0, 31806.0], [74.1, 31806.0], [74.2, 31806.0], [74.3, 31806.0], [74.4, 31806.0], [74.5, 31814.0], [74.6, 31814.0], [74.7, 31814.0], [74.8, 31814.0], [74.9, 31814.0], [75.0, 31823.0], [75.1, 31823.0], [75.2, 31823.0], [75.3, 31823.0], [75.4, 31823.0], [75.5, 31823.0], [75.6, 31823.0], [75.7, 31823.0], [75.8, 31823.0], [75.9, 31823.0], [76.0, 31825.0], [76.1, 31825.0], [76.2, 31825.0], [76.3, 31825.0], [76.4, 31825.0], [76.5, 31830.0], [76.6, 31830.0], [76.7, 31830.0], [76.8, 31830.0], [76.9, 31830.0], [77.0, 31836.0], [77.1, 31836.0], [77.2, 31836.0], [77.3, 31836.0], [77.4, 31836.0], [77.5, 31871.0], [77.6, 31871.0], [77.7, 31871.0], [77.8, 31871.0], [77.9, 31871.0], [78.0, 31872.0], [78.1, 31872.0], [78.2, 31872.0], [78.3, 31872.0], [78.4, 31872.0], [78.5, 31883.0], [78.6, 31883.0], [78.7, 31883.0], [78.8, 31883.0], [78.9, 31883.0], [79.0, 31886.0], [79.1, 31886.0], [79.2, 31886.0], [79.3, 31886.0], [79.4, 31886.0], [79.5, 31889.0], [79.6, 31889.0], [79.7, 31889.0], [79.8, 31889.0], [79.9, 31889.0], [80.0, 31891.0], [80.1, 31891.0], [80.2, 31891.0], [80.3, 31891.0], [80.4, 31891.0], [80.5, 31899.0], [80.6, 31899.0], [80.7, 31899.0], [80.8, 31899.0], [80.9, 31899.0], [81.0, 31906.0], [81.1, 31906.0], [81.2, 31906.0], [81.3, 31906.0], [81.4, 31906.0], [81.5, 31921.0], [81.6, 31921.0], [81.7, 31921.0], [81.8, 31921.0], [81.9, 31921.0], [82.0, 31927.0], [82.1, 31927.0], [82.2, 31927.0], [82.3, 31927.0], [82.4, 31927.0], [82.5, 31931.0], [82.6, 31931.0], [82.7, 31931.0], [82.8, 31931.0], [82.9, 31931.0], [83.0, 31932.0], [83.1, 31932.0], [83.2, 31932.0], [83.3, 31932.0], [83.4, 31932.0], [83.5, 31932.0], [83.6, 31932.0], [83.7, 31932.0], [83.8, 31932.0], [83.9, 31932.0], [84.0, 31932.0], [84.1, 31932.0], [84.2, 31932.0], [84.3, 31932.0], [84.4, 31932.0], [84.5, 31933.0], [84.6, 31933.0], [84.7, 31933.0], [84.8, 31933.0], [84.9, 31933.0], [85.0, 31933.0], [85.1, 31933.0], [85.2, 31933.0], [85.3, 31933.0], [85.4, 31933.0], [85.5, 31936.0], [85.6, 31936.0], [85.7, 31936.0], [85.8, 31936.0], [85.9, 31936.0], [86.0, 31936.0], [86.1, 31936.0], [86.2, 31936.0], [86.3, 31936.0], [86.4, 31936.0], [86.5, 31936.0], [86.6, 31936.0], [86.7, 31936.0], [86.8, 31936.0], [86.9, 31936.0], [87.0, 31937.0], [87.1, 31937.0], [87.2, 31937.0], [87.3, 31937.0], [87.4, 31937.0], [87.5, 31938.0], [87.6, 31938.0], [87.7, 31938.0], [87.8, 31938.0], [87.9, 31938.0], [88.0, 31938.0], [88.1, 31938.0], [88.2, 31938.0], [88.3, 31938.0], [88.4, 31938.0], [88.5, 31938.0], [88.6, 31938.0], [88.7, 31938.0], [88.8, 31938.0], [88.9, 31938.0], [89.0, 31938.0], [89.1, 31938.0], [89.2, 31938.0], [89.3, 31938.0], [89.4, 31938.0], [89.5, 31938.0], [89.6, 31938.0], [89.7, 31938.0], [89.8, 31938.0], [89.9, 31938.0], [90.0, 31938.0], [90.1, 31938.0], [90.2, 31938.0], [90.3, 31938.0], [90.4, 31938.0], [90.5, 31939.0], [90.6, 31939.0], [90.7, 31939.0], [90.8, 31939.0], [90.9, 31939.0], [91.0, 31939.0], [91.1, 31939.0], [91.2, 31939.0], [91.3, 31939.0], [91.4, 31939.0], [91.5, 31939.0], [91.6, 31939.0], [91.7, 31939.0], [91.8, 31939.0], [91.9, 31939.0], [92.0, 31939.0], [92.1, 31939.0], [92.2, 31939.0], [92.3, 31939.0], [92.4, 31939.0], [92.5, 31940.0], [92.6, 31940.0], [92.7, 31940.0], [92.8, 31940.0], [92.9, 31940.0], [93.0, 31940.0], [93.1, 31940.0], [93.2, 31940.0], [93.3, 31940.0], [93.4, 31940.0], [93.5, 31951.0], [93.6, 31951.0], [93.7, 31951.0], [93.8, 31951.0], [93.9, 31951.0], [94.0, 31952.0], [94.1, 31952.0], [94.2, 31952.0], [94.3, 31952.0], [94.4, 31952.0], [94.5, 31953.0], [94.6, 31953.0], [94.7, 31953.0], [94.8, 31953.0], [94.9, 31953.0], [95.0, 31953.0], [95.1, 31953.0], [95.2, 31953.0], [95.3, 31953.0], [95.4, 31953.0], [95.5, 31954.0], [95.6, 31954.0], [95.7, 31954.0], [95.8, 31954.0], [95.9, 31954.0], [96.0, 31954.0], [96.1, 31954.0], [96.2, 31954.0], [96.3, 31954.0], [96.4, 31954.0], [96.5, 31955.0], [96.6, 31955.0], [96.7, 31955.0], [96.8, 31955.0], [96.9, 31955.0], [97.0, 31955.0], [97.1, 31955.0], [97.2, 31955.0], [97.3, 31955.0], [97.4, 31955.0], [97.5, 31955.0], [97.6, 31955.0], [97.7, 31955.0], [97.8, 31955.0], [97.9, 31955.0], [98.0, 31956.0], [98.1, 31956.0], [98.2, 31956.0], [98.3, 31956.0], [98.4, 31956.0], [98.5, 31956.0], [98.6, 31956.0], [98.7, 31956.0], [98.8, 31956.0], [98.9, 31956.0], [99.0, 31956.0], [99.1, 31956.0], [99.2, 31956.0], [99.3, 31956.0], [99.4, 31956.0], [99.5, 31957.0], [99.6, 31957.0], [99.7, 31957.0], [99.8, 31957.0], [99.9, 31957.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 13900.0, "maxY": 38.0, "series": [{"data": [[13900.0, 1.0], [16100.0, 1.0], [18400.0, 1.0], [20100.0, 1.0], [21200.0, 1.0], [22100.0, 1.0], [22700.0, 1.0], [24400.0, 2.0], [24200.0, 2.0], [24100.0, 3.0], [24500.0, 2.0], [24300.0, 1.0], [24900.0, 5.0], [25400.0, 3.0], [24700.0, 1.0], [25500.0, 1.0], [25600.0, 2.0], [25700.0, 2.0], [26000.0, 1.0], [26300.0, 3.0], [25900.0, 1.0], [26400.0, 2.0], [26600.0, 1.0], [26500.0, 2.0], [26700.0, 2.0], [26900.0, 1.0], [26800.0, 2.0], [27000.0, 1.0], [27600.0, 2.0], [27400.0, 2.0], [27500.0, 1.0], [27200.0, 1.0], [27900.0, 1.0], [28000.0, 2.0], [28200.0, 3.0], [27700.0, 1.0], [27800.0, 2.0], [28100.0, 1.0], [28300.0, 1.0], [28600.0, 1.0], [28800.0, 2.0], [28700.0, 1.0], [29000.0, 1.0], [29200.0, 4.0], [29100.0, 2.0], [29500.0, 3.0], [29600.0, 1.0], [29700.0, 1.0], [30400.0, 1.0], [29800.0, 2.0], [29900.0, 1.0], [30700.0, 1.0], [30600.0, 1.0], [30300.0, 1.0], [30500.0, 1.0], [30800.0, 1.0], [31000.0, 1.0], [31300.0, 2.0], [31200.0, 9.0], [31600.0, 14.0], [30900.0, 1.0], [31700.0, 10.0], [31500.0, 12.0], [31400.0, 9.0], [31900.0, 38.0], [31800.0, 15.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 31900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 97.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 103.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 97.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 103.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 96.8245614035088, "minX": 1.57138494E12, "maxY": 157.593023255814, "series": [{"data": [[1.57138494E12, 157.593023255814], [1.571385E12, 96.8245614035088]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571385E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13944.0, "minX": 1.0, "maxY": 31906.0, "series": [{"data": [[8.0, 31447.571428571428], [103.0, 31758.723404255306], [100.0, 31314.0], [107.0, 30912.0], [106.0, 31641.0], [105.0, 31702.0], [104.0, 31906.0], [111.0, 30591.0], [110.0, 31308.0], [109.0, 31217.0], [108.0, 31600.0], [115.0, 30817.0], [114.0, 30654.0], [113.0, 31049.0], [112.0, 30361.0], [119.0, 29838.0], [118.0, 29876.0], [117.0, 29982.0], [116.0, 30703.0], [123.0, 29577.0], [122.0, 29604.0], [121.0, 29565.0], [120.0, 30448.0], [127.0, 29269.0], [126.0, 29559.0], [125.0, 29201.0], [124.0, 29758.0], [135.0, 28713.0], [134.0, 29003.0], [133.0, 29285.0], [132.0, 28809.0], [131.0, 28673.0], [130.0, 29233.0], [129.0, 29150.5], [143.0, 27971.0], [141.0, 27835.0], [140.0, 28248.0], [139.0, 28804.0], [138.0, 28142.0], [137.0, 28282.0], [136.0, 28343.0], [151.0, 27557.0], [150.0, 27236.0], [149.0, 27402.0], [148.0, 27936.0], [147.0, 28042.0], [146.0, 28233.0], [145.0, 27699.0], [144.0, 27706.0], [159.0, 26947.0], [158.0, 26773.0], [157.0, 26826.0], [156.0, 26582.0], [155.0, 27022.0], [154.0, 26877.0], [153.0, 27619.0], [152.0, 27496.0], [167.0, 26327.0], [166.0, 25969.0], [165.0, 26498.0], [164.0, 26339.0], [163.0, 26434.0], [162.0, 26627.0], [161.0, 26755.0], [160.0, 26553.0], [175.0, 25585.0], [173.0, 25611.0], [171.0, 25753.0], [170.0, 26069.0], [169.0, 25424.0], [168.0, 26300.0], [183.0, 24199.0], [182.0, 24466.5], [180.0, 24209.0], [179.0, 24518.0], [178.0, 25481.0], [177.0, 24774.0], [176.0, 25607.0], [191.0, 24119.0], [190.0, 24922.0], [189.0, 24535.333333333332], [186.0, 24953.0], [185.0, 24962.0], [184.0, 24971.0], [199.0, 16149.0], [198.0, 18408.0], [197.0, 20172.0], [196.0, 21258.0], [195.0, 22189.0], [194.0, 22729.0], [193.0, 24489.0], [192.0, 24288.0], [200.0, 13944.0], [1.0, 31572.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[122.95500000000007, 29456.814999999995]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 757.9166666666666, "minX": 1.57138494E12, "maxY": 2325.5666666666666, "series": [{"data": [[1.57138494E12, 2325.5666666666666], [1.571385E12, 1877.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57138494E12, 757.9166666666666], [1.571385E12, 1016.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571385E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 26512.59302325582, "minX": 1.57138494E12, "maxY": 31677.894736842092, "series": [{"data": [[1.57138494E12, 26512.59302325582], [1.571385E12, 31677.894736842092]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571385E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 26255.488372093012, "minX": 1.57138494E12, "maxY": 31667.61403508772, "series": [{"data": [[1.57138494E12, 26255.488372093012], [1.571385E12, 31667.61403508772]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571385E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1320.8488372093025, "minX": 1.57138494E12, "maxY": 1500.8157894736842, "series": [{"data": [[1.57138494E12, 1320.8488372093025], [1.571385E12, 1500.8157894736842]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571385E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16149.0, "minX": 1.57138494E12, "maxY": 31906.0, "series": [{"data": [[1.57138494E12, 30817.0], [1.571385E12, 31906.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57138494E12, 16149.0], [1.571385E12, 30361.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57138494E12, 29587.8], [1.571385E12, 30836.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57138494E12, 30817.0], [1.571385E12, 31906.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57138494E12, 29950.2], [1.571385E12, 31342.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571385E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 24499.0, "minX": 1000.0, "maxY": 31935.5, "series": [{"data": [[3000.0, 24499.0], [1000.0, 27588.0], [2000.0, 26202.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10000.0, 31935.5], [11000.0, 31787.5], [3000.0, 31730.0], [6000.0, 31848.0], [7000.0, 31861.0], [1000.0, 31572.0], [2000.0, 31753.5], [4000.0, 31494.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 11000.0, "title": "Response Time Vs Request"}},
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
        infos.create();
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
    data: {"result": {"minY": 24399.0, "minX": 1000.0, "maxY": 31935.5, "series": [{"data": [[3000.0, 24399.0], [1000.0, 27486.5], [2000.0, 26137.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10000.0, 31935.5], [11000.0, 31787.5], [3000.0, 31730.0], [6000.0, 31848.0], [7000.0, 31861.0], [1000.0, 31572.0], [2000.0, 31753.5], [4000.0, 31494.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 11000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57138494E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57138494E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138494E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57138494E12, "maxY": 1.7, "series": [{"data": [[1.57138494E12, 1.4166666666666667], [1.571385E12, 0.2]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.571385E12, 1.7]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.57138494E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571385E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57138494E12, "maxY": 1.7, "series": [{"data": [[1.57138494E12, 0.016666666666666666], [1.571385E12, 1.7]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57138494E12, 1.4166666666666667], [1.571385E12, 0.2]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571385E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57138494E12, "maxY": 1.7, "series": [{"data": [[1.57138494E12, 1.4166666666666667], [1.571385E12, 0.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57138494E12, 0.016666666666666666], [1.571385E12, 1.7]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571385E12, "title": "Total Transactions Per Second"}},
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
    } else if ( id == "responseTimePercentilesOverTime"){
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
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

