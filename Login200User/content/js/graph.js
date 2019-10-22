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
        data: {"result": {"minY": 10402.0, "minX": 0.0, "maxY": 24533.0, "series": [{"data": [[0.0, 10402.0], [0.1, 10402.0], [0.2, 10402.0], [0.3, 10402.0], [0.4, 10402.0], [0.5, 10473.0], [0.6, 10473.0], [0.7, 10473.0], [0.8, 10473.0], [0.9, 10473.0], [1.0, 10632.0], [1.1, 10632.0], [1.2, 10632.0], [1.3, 10632.0], [1.4, 10632.0], [1.5, 10769.0], [1.6, 10769.0], [1.7, 10769.0], [1.8, 10769.0], [1.9, 10769.0], [2.0, 10770.0], [2.1, 10770.0], [2.2, 10770.0], [2.3, 10770.0], [2.4, 10770.0], [2.5, 11228.0], [2.6, 11228.0], [2.7, 11228.0], [2.8, 11228.0], [2.9, 11228.0], [3.0, 11229.0], [3.1, 11229.0], [3.2, 11229.0], [3.3, 11229.0], [3.4, 11229.0], [3.5, 11310.0], [3.6, 11310.0], [3.7, 11310.0], [3.8, 11310.0], [3.9, 11310.0], [4.0, 11311.0], [4.1, 11311.0], [4.2, 11311.0], [4.3, 11311.0], [4.4, 11311.0], [4.5, 11319.0], [4.6, 11319.0], [4.7, 11319.0], [4.8, 11319.0], [4.9, 11319.0], [5.0, 12286.0], [5.1, 12286.0], [5.2, 12286.0], [5.3, 12286.0], [5.4, 12286.0], [5.5, 12399.0], [5.6, 12399.0], [5.7, 12399.0], [5.8, 12399.0], [5.9, 12399.0], [6.0, 12551.0], [6.1, 12551.0], [6.2, 12551.0], [6.3, 12551.0], [6.4, 12551.0], [6.5, 12679.0], [6.6, 12679.0], [6.7, 12679.0], [6.8, 12679.0], [6.9, 12679.0], [7.0, 12679.0], [7.1, 12679.0], [7.2, 12679.0], [7.3, 12679.0], [7.4, 12679.0], [7.5, 13042.0], [7.6, 13042.0], [7.7, 13042.0], [7.8, 13042.0], [7.9, 13042.0], [8.0, 13042.0], [8.1, 13042.0], [8.2, 13042.0], [8.3, 13042.0], [8.4, 13042.0], [8.5, 13170.0], [8.6, 13170.0], [8.7, 13170.0], [8.8, 13170.0], [8.9, 13170.0], [9.0, 13170.0], [9.1, 13170.0], [9.2, 13170.0], [9.3, 13170.0], [9.4, 13170.0], [9.5, 13173.0], [9.6, 13173.0], [9.7, 13173.0], [9.8, 13173.0], [9.9, 13173.0], [10.0, 14324.0], [10.1, 14324.0], [10.2, 14324.0], [10.3, 14324.0], [10.4, 14324.0], [10.5, 14712.0], [10.6, 14712.0], [10.7, 14712.0], [10.8, 14712.0], [10.9, 14712.0], [11.0, 14712.0], [11.1, 14712.0], [11.2, 14712.0], [11.3, 14712.0], [11.4, 14712.0], [11.5, 14783.0], [11.6, 14783.0], [11.7, 14783.0], [11.8, 14783.0], [11.9, 14783.0], [12.0, 14823.0], [12.1, 14823.0], [12.2, 14823.0], [12.3, 14823.0], [12.4, 14823.0], [12.5, 14823.0], [12.6, 14823.0], [12.7, 14823.0], [12.8, 14823.0], [12.9, 14823.0], [13.0, 14833.0], [13.1, 14833.0], [13.2, 14833.0], [13.3, 14833.0], [13.4, 14833.0], [13.5, 14843.0], [13.6, 14843.0], [13.7, 14843.0], [13.8, 14843.0], [13.9, 14843.0], [14.0, 15164.0], [14.1, 15164.0], [14.2, 15164.0], [14.3, 15164.0], [14.4, 15164.0], [14.5, 15212.0], [14.6, 15212.0], [14.7, 15212.0], [14.8, 15212.0], [14.9, 15212.0], [15.0, 15227.0], [15.1, 15227.0], [15.2, 15227.0], [15.3, 15227.0], [15.4, 15227.0], [15.5, 15489.0], [15.6, 15489.0], [15.7, 15489.0], [15.8, 15489.0], [15.9, 15489.0], [16.0, 15493.0], [16.1, 15493.0], [16.2, 15493.0], [16.3, 15493.0], [16.4, 15493.0], [16.5, 15875.0], [16.6, 15875.0], [16.7, 15875.0], [16.8, 15875.0], [16.9, 15875.0], [17.0, 16008.0], [17.1, 16008.0], [17.2, 16008.0], [17.3, 16008.0], [17.4, 16008.0], [17.5, 16018.0], [17.6, 16018.0], [17.7, 16018.0], [17.8, 16018.0], [17.9, 16018.0], [18.0, 16081.0], [18.1, 16081.0], [18.2, 16081.0], [18.3, 16081.0], [18.4, 16081.0], [18.5, 16115.0], [18.6, 16115.0], [18.7, 16115.0], [18.8, 16115.0], [18.9, 16115.0], [19.0, 16142.0], [19.1, 16142.0], [19.2, 16142.0], [19.3, 16142.0], [19.4, 16142.0], [19.5, 16217.0], [19.6, 16217.0], [19.7, 16217.0], [19.8, 16217.0], [19.9, 16217.0], [20.0, 16226.0], [20.1, 16226.0], [20.2, 16226.0], [20.3, 16226.0], [20.4, 16226.0], [20.5, 16227.0], [20.6, 16227.0], [20.7, 16227.0], [20.8, 16227.0], [20.9, 16227.0], [21.0, 16227.0], [21.1, 16227.0], [21.2, 16227.0], [21.3, 16227.0], [21.4, 16227.0], [21.5, 16285.0], [21.6, 16285.0], [21.7, 16285.0], [21.8, 16285.0], [21.9, 16285.0], [22.0, 16286.0], [22.1, 16286.0], [22.2, 16286.0], [22.3, 16286.0], [22.4, 16286.0], [22.5, 16286.0], [22.6, 16286.0], [22.7, 16286.0], [22.8, 16286.0], [22.9, 16286.0], [23.0, 16293.0], [23.1, 16293.0], [23.2, 16293.0], [23.3, 16293.0], [23.4, 16293.0], [23.5, 16294.0], [23.6, 16294.0], [23.7, 16294.0], [23.8, 16294.0], [23.9, 16294.0], [24.0, 16448.0], [24.1, 16448.0], [24.2, 16448.0], [24.3, 16448.0], [24.4, 16448.0], [24.5, 16475.0], [24.6, 16475.0], [24.7, 16475.0], [24.8, 16475.0], [24.9, 16475.0], [25.0, 16494.0], [25.1, 16494.0], [25.2, 16494.0], [25.3, 16494.0], [25.4, 16494.0], [25.5, 16577.0], [25.6, 16577.0], [25.7, 16577.0], [25.8, 16577.0], [25.9, 16577.0], [26.0, 16661.0], [26.1, 16661.0], [26.2, 16661.0], [26.3, 16661.0], [26.4, 16661.0], [26.5, 16668.0], [26.6, 16668.0], [26.7, 16668.0], [26.8, 16668.0], [26.9, 16668.0], [27.0, 16692.0], [27.1, 16692.0], [27.2, 16692.0], [27.3, 16692.0], [27.4, 16692.0], [27.5, 16791.0], [27.6, 16791.0], [27.7, 16791.0], [27.8, 16791.0], [27.9, 16791.0], [28.0, 16863.0], [28.1, 16863.0], [28.2, 16863.0], [28.3, 16863.0], [28.4, 16863.0], [28.5, 16897.0], [28.6, 16897.0], [28.7, 16897.0], [28.8, 16897.0], [28.9, 16897.0], [29.0, 16939.0], [29.1, 16939.0], [29.2, 16939.0], [29.3, 16939.0], [29.4, 16939.0], [29.5, 16941.0], [29.6, 16941.0], [29.7, 16941.0], [29.8, 16941.0], [29.9, 16941.0], [30.0, 17318.0], [30.1, 17318.0], [30.2, 17318.0], [30.3, 17318.0], [30.4, 17318.0], [30.5, 17328.0], [30.6, 17328.0], [30.7, 17328.0], [30.8, 17328.0], [30.9, 17328.0], [31.0, 17328.0], [31.1, 17328.0], [31.2, 17328.0], [31.3, 17328.0], [31.4, 17328.0], [31.5, 17329.0], [31.6, 17329.0], [31.7, 17329.0], [31.8, 17329.0], [31.9, 17329.0], [32.0, 17338.0], [32.1, 17338.0], [32.2, 17338.0], [32.3, 17338.0], [32.4, 17338.0], [32.5, 17350.0], [32.6, 17350.0], [32.7, 17350.0], [32.8, 17350.0], [32.9, 17350.0], [33.0, 17406.0], [33.1, 17406.0], [33.2, 17406.0], [33.3, 17406.0], [33.4, 17406.0], [33.5, 17422.0], [33.6, 17422.0], [33.7, 17422.0], [33.8, 17422.0], [33.9, 17422.0], [34.0, 17425.0], [34.1, 17425.0], [34.2, 17425.0], [34.3, 17425.0], [34.4, 17425.0], [34.5, 17489.0], [34.6, 17489.0], [34.7, 17489.0], [34.8, 17489.0], [34.9, 17489.0], [35.0, 17716.0], [35.1, 17716.0], [35.2, 17716.0], [35.3, 17716.0], [35.4, 17716.0], [35.5, 17772.0], [35.6, 17772.0], [35.7, 17772.0], [35.8, 17772.0], [35.9, 17772.0], [36.0, 17803.0], [36.1, 17803.0], [36.2, 17803.0], [36.3, 17803.0], [36.4, 17803.0], [36.5, 17809.0], [36.6, 17809.0], [36.7, 17809.0], [36.8, 17809.0], [36.9, 17809.0], [37.0, 17842.0], [37.1, 17842.0], [37.2, 17842.0], [37.3, 17842.0], [37.4, 17842.0], [37.5, 17906.0], [37.6, 17906.0], [37.7, 17906.0], [37.8, 17906.0], [37.9, 17906.0], [38.0, 17908.0], [38.1, 17908.0], [38.2, 17908.0], [38.3, 17908.0], [38.4, 17908.0], [38.5, 17926.0], [38.6, 17926.0], [38.7, 17926.0], [38.8, 17926.0], [38.9, 17926.0], [39.0, 17972.0], [39.1, 17972.0], [39.2, 17972.0], [39.3, 17972.0], [39.4, 17972.0], [39.5, 18062.0], [39.6, 18062.0], [39.7, 18062.0], [39.8, 18062.0], [39.9, 18062.0], [40.0, 18256.0], [40.1, 18256.0], [40.2, 18256.0], [40.3, 18256.0], [40.4, 18256.0], [40.5, 18310.0], [40.6, 18310.0], [40.7, 18310.0], [40.8, 18310.0], [40.9, 18310.0], [41.0, 18429.0], [41.1, 18429.0], [41.2, 18429.0], [41.3, 18429.0], [41.4, 18429.0], [41.5, 18430.0], [41.6, 18430.0], [41.7, 18430.0], [41.8, 18430.0], [41.9, 18430.0], [42.0, 18435.0], [42.1, 18435.0], [42.2, 18435.0], [42.3, 18435.0], [42.4, 18435.0], [42.5, 18443.0], [42.6, 18443.0], [42.7, 18443.0], [42.8, 18443.0], [42.9, 18443.0], [43.0, 18484.0], [43.1, 18484.0], [43.2, 18484.0], [43.3, 18484.0], [43.4, 18484.0], [43.5, 18555.0], [43.6, 18555.0], [43.7, 18555.0], [43.8, 18555.0], [43.9, 18555.0], [44.0, 18561.0], [44.1, 18561.0], [44.2, 18561.0], [44.3, 18561.0], [44.4, 18561.0], [44.5, 18627.0], [44.6, 18627.0], [44.7, 18627.0], [44.8, 18627.0], [44.9, 18627.0], [45.0, 18845.0], [45.1, 18845.0], [45.2, 18845.0], [45.3, 18845.0], [45.4, 18845.0], [45.5, 18873.0], [45.6, 18873.0], [45.7, 18873.0], [45.8, 18873.0], [45.9, 18873.0], [46.0, 18925.0], [46.1, 18925.0], [46.2, 18925.0], [46.3, 18925.0], [46.4, 18925.0], [46.5, 18936.0], [46.6, 18936.0], [46.7, 18936.0], [46.8, 18936.0], [46.9, 18936.0], [47.0, 19029.0], [47.1, 19029.0], [47.2, 19029.0], [47.3, 19029.0], [47.4, 19029.0], [47.5, 19032.0], [47.6, 19032.0], [47.7, 19032.0], [47.8, 19032.0], [47.9, 19032.0], [48.0, 19037.0], [48.1, 19037.0], [48.2, 19037.0], [48.3, 19037.0], [48.4, 19037.0], [48.5, 19091.0], [48.6, 19091.0], [48.7, 19091.0], [48.8, 19091.0], [48.9, 19091.0], [49.0, 19124.0], [49.1, 19124.0], [49.2, 19124.0], [49.3, 19124.0], [49.4, 19124.0], [49.5, 19227.0], [49.6, 19227.0], [49.7, 19227.0], [49.8, 19227.0], [49.9, 19227.0], [50.0, 19241.0], [50.1, 19241.0], [50.2, 19241.0], [50.3, 19241.0], [50.4, 19241.0], [50.5, 19436.0], [50.6, 19436.0], [50.7, 19436.0], [50.8, 19436.0], [50.9, 19436.0], [51.0, 19450.0], [51.1, 19450.0], [51.2, 19450.0], [51.3, 19450.0], [51.4, 19450.0], [51.5, 19484.0], [51.6, 19484.0], [51.7, 19484.0], [51.8, 19484.0], [51.9, 19484.0], [52.0, 19489.0], [52.1, 19489.0], [52.2, 19489.0], [52.3, 19489.0], [52.4, 19489.0], [52.5, 19582.0], [52.6, 19582.0], [52.7, 19582.0], [52.8, 19582.0], [52.9, 19582.0], [53.0, 19583.0], [53.1, 19583.0], [53.2, 19583.0], [53.3, 19583.0], [53.4, 19583.0], [53.5, 19608.0], [53.6, 19608.0], [53.7, 19608.0], [53.8, 19608.0], [53.9, 19608.0], [54.0, 19646.0], [54.1, 19646.0], [54.2, 19646.0], [54.3, 19646.0], [54.4, 19646.0], [54.5, 19768.0], [54.6, 19768.0], [54.7, 19768.0], [54.8, 19768.0], [54.9, 19768.0], [55.0, 19969.0], [55.1, 19969.0], [55.2, 19969.0], [55.3, 19969.0], [55.4, 19969.0], [55.5, 19981.0], [55.6, 19981.0], [55.7, 19981.0], [55.8, 19981.0], [55.9, 19981.0], [56.0, 20029.0], [56.1, 20029.0], [56.2, 20029.0], [56.3, 20029.0], [56.4, 20029.0], [56.5, 20032.0], [56.6, 20032.0], [56.7, 20032.0], [56.8, 20032.0], [56.9, 20032.0], [57.0, 20042.0], [57.1, 20042.0], [57.2, 20042.0], [57.3, 20042.0], [57.4, 20042.0], [57.5, 20057.0], [57.6, 20057.0], [57.7, 20057.0], [57.8, 20057.0], [57.9, 20057.0], [58.0, 20076.0], [58.1, 20076.0], [58.2, 20076.0], [58.3, 20076.0], [58.4, 20076.0], [58.5, 20169.0], [58.6, 20169.0], [58.7, 20169.0], [58.8, 20169.0], [58.9, 20169.0], [59.0, 20217.0], [59.1, 20217.0], [59.2, 20217.0], [59.3, 20217.0], [59.4, 20217.0], [59.5, 20356.0], [59.6, 20356.0], [59.7, 20356.0], [59.8, 20356.0], [59.9, 20356.0], [60.0, 20361.0], [60.1, 20361.0], [60.2, 20361.0], [60.3, 20361.0], [60.4, 20361.0], [60.5, 20494.0], [60.6, 20494.0], [60.7, 20494.0], [60.8, 20494.0], [60.9, 20494.0], [61.0, 20572.0], [61.1, 20572.0], [61.2, 20572.0], [61.3, 20572.0], [61.4, 20572.0], [61.5, 20575.0], [61.6, 20575.0], [61.7, 20575.0], [61.8, 20575.0], [61.9, 20575.0], [62.0, 20577.0], [62.1, 20577.0], [62.2, 20577.0], [62.3, 20577.0], [62.4, 20577.0], [62.5, 20612.0], [62.6, 20612.0], [62.7, 20612.0], [62.8, 20612.0], [62.9, 20612.0], [63.0, 20680.0], [63.1, 20680.0], [63.2, 20680.0], [63.3, 20680.0], [63.4, 20680.0], [63.5, 20695.0], [63.6, 20695.0], [63.7, 20695.0], [63.8, 20695.0], [63.9, 20695.0], [64.0, 20741.0], [64.1, 20741.0], [64.2, 20741.0], [64.3, 20741.0], [64.4, 20741.0], [64.5, 21017.0], [64.6, 21017.0], [64.7, 21017.0], [64.8, 21017.0], [64.9, 21017.0], [65.0, 21018.0], [65.1, 21018.0], [65.2, 21018.0], [65.3, 21018.0], [65.4, 21018.0], [65.5, 21068.0], [65.6, 21068.0], [65.7, 21068.0], [65.8, 21068.0], [65.9, 21068.0], [66.0, 21164.0], [66.1, 21164.0], [66.2, 21164.0], [66.3, 21164.0], [66.4, 21164.0], [66.5, 21165.0], [66.6, 21165.0], [66.7, 21165.0], [66.8, 21165.0], [66.9, 21165.0], [67.0, 21171.0], [67.1, 21171.0], [67.2, 21171.0], [67.3, 21171.0], [67.4, 21171.0], [67.5, 21228.0], [67.6, 21228.0], [67.7, 21228.0], [67.8, 21228.0], [67.9, 21228.0], [68.0, 21236.0], [68.1, 21236.0], [68.2, 21236.0], [68.3, 21236.0], [68.4, 21236.0], [68.5, 21292.0], [68.6, 21292.0], [68.7, 21292.0], [68.8, 21292.0], [68.9, 21292.0], [69.0, 21322.0], [69.1, 21322.0], [69.2, 21322.0], [69.3, 21322.0], [69.4, 21322.0], [69.5, 21350.0], [69.6, 21350.0], [69.7, 21350.0], [69.8, 21350.0], [69.9, 21350.0], [70.0, 21358.0], [70.1, 21358.0], [70.2, 21358.0], [70.3, 21358.0], [70.4, 21358.0], [70.5, 21507.0], [70.6, 21507.0], [70.7, 21507.0], [70.8, 21507.0], [70.9, 21507.0], [71.0, 21668.0], [71.1, 21668.0], [71.2, 21668.0], [71.3, 21668.0], [71.4, 21668.0], [71.5, 21707.0], [71.6, 21707.0], [71.7, 21707.0], [71.8, 21707.0], [71.9, 21707.0], [72.0, 21723.0], [72.1, 21723.0], [72.2, 21723.0], [72.3, 21723.0], [72.4, 21723.0], [72.5, 21790.0], [72.6, 21790.0], [72.7, 21790.0], [72.8, 21790.0], [72.9, 21790.0], [73.0, 21859.0], [73.1, 21859.0], [73.2, 21859.0], [73.3, 21859.0], [73.4, 21859.0], [73.5, 21868.0], [73.6, 21868.0], [73.7, 21868.0], [73.8, 21868.0], [73.9, 21868.0], [74.0, 21881.0], [74.1, 21881.0], [74.2, 21881.0], [74.3, 21881.0], [74.4, 21881.0], [74.5, 21916.0], [74.6, 21916.0], [74.7, 21916.0], [74.8, 21916.0], [74.9, 21916.0], [75.0, 21962.0], [75.1, 21962.0], [75.2, 21962.0], [75.3, 21962.0], [75.4, 21962.0], [75.5, 22192.0], [75.6, 22192.0], [75.7, 22192.0], [75.8, 22192.0], [75.9, 22192.0], [76.0, 22267.0], [76.1, 22267.0], [76.2, 22267.0], [76.3, 22267.0], [76.4, 22267.0], [76.5, 22282.0], [76.6, 22282.0], [76.7, 22282.0], [76.8, 22282.0], [76.9, 22282.0], [77.0, 22306.0], [77.1, 22306.0], [77.2, 22306.0], [77.3, 22306.0], [77.4, 22306.0], [77.5, 22359.0], [77.6, 22359.0], [77.7, 22359.0], [77.8, 22359.0], [77.9, 22359.0], [78.0, 22393.0], [78.1, 22393.0], [78.2, 22393.0], [78.3, 22393.0], [78.4, 22393.0], [78.5, 22400.0], [78.6, 22400.0], [78.7, 22400.0], [78.8, 22400.0], [78.9, 22400.0], [79.0, 22440.0], [79.1, 22440.0], [79.2, 22440.0], [79.3, 22440.0], [79.4, 22440.0], [79.5, 22453.0], [79.6, 22453.0], [79.7, 22453.0], [79.8, 22453.0], [79.9, 22453.0], [80.0, 22526.0], [80.1, 22526.0], [80.2, 22526.0], [80.3, 22526.0], [80.4, 22526.0], [80.5, 22647.0], [80.6, 22647.0], [80.7, 22647.0], [80.8, 22647.0], [80.9, 22647.0], [81.0, 22733.0], [81.1, 22733.0], [81.2, 22733.0], [81.3, 22733.0], [81.4, 22733.0], [81.5, 22803.0], [81.6, 22803.0], [81.7, 22803.0], [81.8, 22803.0], [81.9, 22803.0], [82.0, 22822.0], [82.1, 22822.0], [82.2, 22822.0], [82.3, 22822.0], [82.4, 22822.0], [82.5, 22829.0], [82.6, 22829.0], [82.7, 22829.0], [82.8, 22829.0], [82.9, 22829.0], [83.0, 22836.0], [83.1, 22836.0], [83.2, 22836.0], [83.3, 22836.0], [83.4, 22836.0], [83.5, 22855.0], [83.6, 22855.0], [83.7, 22855.0], [83.8, 22855.0], [83.9, 22855.0], [84.0, 22907.0], [84.1, 22907.0], [84.2, 22907.0], [84.3, 22907.0], [84.4, 22907.0], [84.5, 22976.0], [84.6, 22976.0], [84.7, 22976.0], [84.8, 22976.0], [84.9, 22976.0], [85.0, 22977.0], [85.1, 22977.0], [85.2, 22977.0], [85.3, 22977.0], [85.4, 22977.0], [85.5, 23360.0], [85.6, 23360.0], [85.7, 23360.0], [85.8, 23360.0], [85.9, 23360.0], [86.0, 23367.0], [86.1, 23367.0], [86.2, 23367.0], [86.3, 23367.0], [86.4, 23367.0], [86.5, 23381.0], [86.6, 23381.0], [86.7, 23381.0], [86.8, 23381.0], [86.9, 23381.0], [87.0, 23408.0], [87.1, 23408.0], [87.2, 23408.0], [87.3, 23408.0], [87.4, 23408.0], [87.5, 23449.0], [87.6, 23449.0], [87.7, 23449.0], [87.8, 23449.0], [87.9, 23449.0], [88.0, 23480.0], [88.1, 23480.0], [88.2, 23480.0], [88.3, 23480.0], [88.4, 23480.0], [88.5, 23489.0], [88.6, 23489.0], [88.7, 23489.0], [88.8, 23489.0], [88.9, 23489.0], [89.0, 23490.0], [89.1, 23490.0], [89.2, 23490.0], [89.3, 23490.0], [89.4, 23490.0], [89.5, 23520.0], [89.6, 23520.0], [89.7, 23520.0], [89.8, 23520.0], [89.9, 23520.0], [90.0, 23528.0], [90.1, 23528.0], [90.2, 23528.0], [90.3, 23528.0], [90.4, 23528.0], [90.5, 23639.0], [90.6, 23639.0], [90.7, 23639.0], [90.8, 23639.0], [90.9, 23639.0], [91.0, 23882.0], [91.1, 23882.0], [91.2, 23882.0], [91.3, 23882.0], [91.4, 23882.0], [91.5, 23925.0], [91.6, 23925.0], [91.7, 23925.0], [91.8, 23925.0], [91.9, 23925.0], [92.0, 24026.0], [92.1, 24026.0], [92.2, 24026.0], [92.3, 24026.0], [92.4, 24026.0], [92.5, 24068.0], [92.6, 24068.0], [92.7, 24068.0], [92.8, 24068.0], [92.9, 24068.0], [93.0, 24070.0], [93.1, 24070.0], [93.2, 24070.0], [93.3, 24070.0], [93.4, 24070.0], [93.5, 24107.0], [93.6, 24107.0], [93.7, 24107.0], [93.8, 24107.0], [93.9, 24107.0], [94.0, 24147.0], [94.1, 24147.0], [94.2, 24147.0], [94.3, 24147.0], [94.4, 24147.0], [94.5, 24149.0], [94.6, 24149.0], [94.7, 24149.0], [94.8, 24149.0], [94.9, 24149.0], [95.0, 24170.0], [95.1, 24170.0], [95.2, 24170.0], [95.3, 24170.0], [95.4, 24170.0], [95.5, 24189.0], [95.6, 24189.0], [95.7, 24189.0], [95.8, 24189.0], [95.9, 24189.0], [96.0, 24306.0], [96.1, 24306.0], [96.2, 24306.0], [96.3, 24306.0], [96.4, 24306.0], [96.5, 24324.0], [96.6, 24324.0], [96.7, 24324.0], [96.8, 24324.0], [96.9, 24324.0], [97.0, 24359.0], [97.1, 24359.0], [97.2, 24359.0], [97.3, 24359.0], [97.4, 24359.0], [97.5, 24364.0], [97.6, 24364.0], [97.7, 24364.0], [97.8, 24364.0], [97.9, 24364.0], [98.0, 24372.0], [98.1, 24372.0], [98.2, 24372.0], [98.3, 24372.0], [98.4, 24372.0], [98.5, 24428.0], [98.6, 24428.0], [98.7, 24428.0], [98.8, 24428.0], [98.9, 24428.0], [99.0, 24442.0], [99.1, 24442.0], [99.2, 24442.0], [99.3, 24442.0], [99.4, 24442.0], [99.5, 24533.0], [99.6, 24533.0], [99.7, 24533.0], [99.8, 24533.0], [99.9, 24533.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 10400.0, "maxY": 9.0, "series": [{"data": [[10400.0, 2.0], [10600.0, 1.0], [10700.0, 2.0], [11200.0, 2.0], [11300.0, 3.0], [12200.0, 1.0], [12300.0, 1.0], [12500.0, 1.0], [12600.0, 2.0], [13000.0, 2.0], [13100.0, 3.0], [14300.0, 1.0], [14700.0, 3.0], [14800.0, 4.0], [15200.0, 2.0], [15100.0, 1.0], [15400.0, 2.0], [15800.0, 1.0], [16100.0, 2.0], [16000.0, 3.0], [16200.0, 9.0], [16400.0, 3.0], [16600.0, 3.0], [16500.0, 1.0], [16700.0, 1.0], [16800.0, 2.0], [16900.0, 2.0], [17300.0, 6.0], [17400.0, 4.0], [17800.0, 3.0], [17900.0, 4.0], [17700.0, 2.0], [18000.0, 1.0], [18300.0, 1.0], [18400.0, 5.0], [18200.0, 1.0], [18500.0, 2.0], [18600.0, 1.0], [18800.0, 2.0], [18900.0, 2.0], [19000.0, 4.0], [19100.0, 1.0], [19200.0, 2.0], [19400.0, 4.0], [19600.0, 2.0], [19500.0, 2.0], [19700.0, 1.0], [20000.0, 5.0], [19900.0, 2.0], [20100.0, 1.0], [20200.0, 1.0], [20300.0, 2.0], [20400.0, 1.0], [20500.0, 3.0], [20600.0, 3.0], [20700.0, 1.0], [21000.0, 3.0], [21100.0, 3.0], [21200.0, 3.0], [21300.0, 3.0], [21500.0, 1.0], [22300.0, 3.0], [21600.0, 1.0], [21700.0, 3.0], [21800.0, 3.0], [21900.0, 2.0], [22200.0, 2.0], [22100.0, 1.0], [22400.0, 3.0], [22500.0, 1.0], [22700.0, 1.0], [22800.0, 5.0], [22600.0, 1.0], [22900.0, 3.0], [23300.0, 3.0], [23400.0, 5.0], [23500.0, 2.0], [23600.0, 1.0], [23800.0, 1.0], [24000.0, 3.0], [23900.0, 1.0], [24100.0, 5.0], [24300.0, 5.0], [24400.0, 2.0], [24500.0, 1.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 197.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 197.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.64500000000002, "minX": 1.57171968E12, "maxY": 100.64500000000002, "series": [{"data": [[1.57171968E12, 100.64500000000002]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171968E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10402.0, "minX": 1.0, "maxY": 24533.0, "series": [{"data": [[2.0, 24533.0], [3.0, 24359.0], [4.0, 24442.0], [5.0, 24428.0], [6.0, 24306.0], [7.0, 24372.0], [8.0, 24364.0], [9.0, 24189.0], [10.0, 24170.0], [11.0, 24107.0], [12.0, 24149.0], [13.0, 24147.0], [14.0, 23925.0], [15.0, 24070.0], [16.0, 24068.0], [17.0, 24026.0], [18.0, 23882.0], [19.0, 23639.0], [20.0, 23528.0], [21.0, 23520.0], [23.0, 23425.0], [24.0, 23489.0], [25.0, 23480.0], [26.0, 23449.0], [27.0, 23408.0], [28.0, 23381.0], [29.0, 23367.0], [30.0, 22907.0], [33.0, 22822.0], [32.0, 22976.5], [35.0, 22855.0], [34.0, 22836.0], [37.0, 22829.0], [36.0, 22647.0], [39.0, 22733.0], [38.0, 22803.0], [41.0, 22453.0], [40.0, 22526.0], [43.0, 22400.0], [42.0, 22440.0], [45.0, 22282.0], [44.0, 22393.0], [47.0, 22306.0], [46.0, 22359.0], [49.0, 22267.0], [48.0, 22192.0], [51.0, 21962.0], [50.0, 21881.0], [53.0, 21868.0], [52.0, 21916.0], [55.0, 21790.0], [54.0, 21859.0], [57.0, 21507.0], [56.0, 21723.0], [59.0, 21668.0], [58.0, 21707.0], [61.0, 21292.0], [60.0, 21350.0], [63.0, 21322.0], [62.0, 21358.0], [67.0, 21171.0], [66.0, 21068.0], [65.0, 21228.0], [64.0, 21236.0], [71.0, 21017.5], [69.0, 21164.5], [75.0, 20612.0], [74.0, 20680.0], [73.0, 20695.0], [72.0, 20741.0], [79.0, 20572.0], [78.0, 20575.0], [77.0, 20577.0], [76.0, 20494.0], [83.0, 20169.0], [82.0, 20217.0], [81.0, 20361.0], [80.0, 20356.0], [87.0, 20057.0], [86.0, 19981.0], [85.0, 20076.0], [84.0, 19969.0], [91.0, 19768.0], [90.0, 20029.0], [89.0, 20032.0], [88.0, 20042.0], [95.0, 19582.0], [94.0, 19583.0], [93.0, 19608.0], [92.0, 19646.0], [99.0, 19450.0], [98.0, 19484.0], [97.0, 19241.0], [96.0, 19489.0], [103.0, 19091.0], [102.0, 19124.0], [101.0, 19227.0], [100.0, 19436.0], [107.0, 18845.0], [106.0, 19029.0], [105.0, 19032.0], [104.0, 19037.0], [111.0, 18627.0], [110.0, 18873.0], [109.0, 18925.0], [108.0, 18936.0], [115.0, 18443.0], [114.0, 18484.0], [113.0, 18555.0], [112.0, 18561.0], [119.0, 18429.5], [117.0, 18345.5], [123.0, 17772.0], [122.0, 17972.0], [121.0, 18062.0], [120.0, 18310.0], [127.0, 17842.0], [126.0, 17803.0], [125.0, 17908.0], [124.0, 17716.0], [135.0, 17350.0], [134.0, 17406.0], [133.0, 17422.0], [132.0, 17425.0], [131.0, 17489.0], [130.0, 17809.0], [129.0, 17906.0], [128.0, 17926.0], [143.0, 16897.0], [142.0, 16939.0], [141.0, 16941.0], [140.0, 17318.0], [139.0, 17328.0], [137.0, 17329.0], [136.0, 17338.0], [151.0, 16581.0], [149.0, 16692.0], [148.0, 16526.0], [146.0, 16661.0], [145.0, 16791.0], [144.0, 16863.0], [157.0, 16285.666666666666], [154.0, 16293.5], [152.0, 16448.0], [167.0, 16115.0], [166.0, 16142.0], [165.0, 15875.0], [164.0, 16044.5], [162.0, 16217.0], [161.0, 16018.0], [160.0, 16226.666666666666], [175.0, 14823.0], [174.0, 14838.0], [172.0, 15219.5], [170.0, 15164.0], [169.0, 15491.0], [183.0, 13170.0], [181.0, 13173.0], [180.0, 14324.0], [179.0, 14712.0], [177.0, 14783.0], [176.0, 14823.0], [191.0, 11319.0], [190.0, 12286.0], [189.0, 12475.0], [187.0, 12679.0], [185.0, 13042.0], [199.0, 10552.5], [197.0, 10769.5], [195.0, 11228.5], [193.0, 11310.5], [200.0, 10402.0], [1.0, 24324.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[100.64500000000002, 19009.815000000002]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1698.0333333333333, "minX": 1.57171968E12, "maxY": 5421.766666666666, "series": [{"data": [[1.57171968E12, 5421.766666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57171968E12, 1698.0333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171968E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 19009.815000000002, "minX": 1.57171968E12, "maxY": 19009.815000000002, "series": [{"data": [[1.57171968E12, 19009.815000000002]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171968E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 18694.05500000001, "minX": 1.57171968E12, "maxY": 18694.05500000001, "series": [{"data": [[1.57171968E12, 18694.05500000001]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171968E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2420.88, "minX": 1.57171968E12, "maxY": 2420.88, "series": [{"data": [[1.57171968E12, 2420.88]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171968E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10402.0, "minX": 1.57171968E12, "maxY": 24533.0, "series": [{"data": [[1.57171968E12, 24533.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57171968E12, 10402.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57171968E12, 23550.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57171968E12, 24443.82]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57171968E12, 24171.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171968E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11459.0, "minX": 1.0, "maxY": 22077.0, "series": [{"data": [[1.0, 14324.0], [16.0, 16226.5], [17.0, 20169.0], [19.0, 21642.5], [20.0, 22077.0], [21.0, 16941.0], [3.0, 11459.0], [12.0, 15164.0], [7.0, 11999.0], [15.0, 21165.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 14823.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 21978.0, "series": [{"data": [[1.0, 14292.0], [16.0, 16126.5], [17.0, 20070.0], [19.0, 21543.0], [20.0, 21978.0], [21.0, 16843.0], [3.0, 11388.5], [12.0, 15065.0], [7.0, 11904.5], [15.0, 21084.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57171962E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57171962E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171962E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.57171968E12, "maxY": 3.283333333333333, "series": [{"data": [[1.57171968E12, 3.283333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57171968E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171968E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.57171968E12, "maxY": 3.283333333333333, "series": [{"data": [[1.57171968E12, 0.05]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57171968E12, 3.283333333333333]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171968E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.57171968E12, "maxY": 3.283333333333333, "series": [{"data": [[1.57171968E12, 3.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57171968E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171968E12, "title": "Total Transactions Per Second"}},
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

