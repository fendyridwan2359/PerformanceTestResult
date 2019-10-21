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
        data: {"result": {"minY": 11388.0, "minX": 0.0, "maxY": 39950.0, "series": [{"data": [[0.0, 11388.0], [0.1, 11388.0], [0.2, 14400.0], [0.3, 14400.0], [0.4, 15028.0], [0.5, 15028.0], [0.6, 15028.0], [0.7, 15211.0], [0.8, 15214.0], [0.9, 15214.0], [1.0, 15456.0], [1.1, 15456.0], [1.2, 15569.0], [1.3, 15569.0], [1.4, 16735.0], [1.5, 16735.0], [1.6, 16770.0], [1.7, 16770.0], [1.8, 16917.0], [1.9, 16917.0], [2.0, 17166.0], [2.1, 17166.0], [2.2, 17281.0], [2.3, 17281.0], [2.4, 19105.0], [2.5, 19105.0], [2.6, 19169.0], [2.7, 19169.0], [2.8, 19169.0], [2.9, 19250.0], [3.0, 19250.0], [3.1, 19251.0], [3.2, 19251.0], [3.3, 19575.0], [3.4, 19575.0], [3.5, 21124.0], [3.6, 21124.0], [3.7, 21426.0], [3.8, 21426.0], [3.9, 21493.0], [4.0, 21493.0], [4.1, 21513.0], [4.2, 21513.0], [4.3, 21607.0], [4.4, 21607.0], [4.5, 21657.0], [4.6, 21657.0], [4.7, 21659.0], [4.8, 21659.0], [4.9, 21667.0], [5.0, 21667.0], [5.1, 21671.0], [5.2, 21671.0], [5.3, 21751.0], [5.4, 21751.0], [5.5, 21806.0], [5.6, 21806.0], [5.7, 21806.0], [5.8, 21806.0], [5.9, 23327.0], [6.0, 23327.0], [6.1, 23445.0], [6.2, 23445.0], [6.3, 23610.0], [6.4, 23610.0], [6.5, 23796.0], [6.6, 23796.0], [6.7, 23803.0], [6.8, 23803.0], [6.9, 25358.0], [7.0, 25358.0], [7.1, 25470.0], [7.2, 25470.0], [7.3, 25773.0], [7.4, 25773.0], [7.5, 25953.0], [7.6, 25953.0], [7.7, 25955.0], [7.8, 25955.0], [7.9, 27385.0], [8.0, 27385.0], [8.1, 27497.0], [8.2, 27497.0], [8.3, 27943.0], [8.4, 27943.0], [8.5, 28114.0], [8.6, 28114.0], [8.7, 28126.0], [8.8, 29426.0], [8.9, 29426.0], [9.0, 29550.0], [9.1, 29550.0], [9.2, 30076.0], [9.3, 30076.0], [9.4, 30261.0], [9.5, 30261.0], [9.6, 30266.0], [9.7, 30266.0], [9.8, 31326.0], [9.9, 31326.0], [10.0, 31485.0], [10.1, 31485.0], [10.2, 32221.0], [10.3, 32221.0], [10.4, 32261.0], [10.5, 32261.0], [10.6, 32408.0], [10.7, 32408.0], [10.8, 33566.0], [10.9, 33566.0], [11.0, 33787.0], [11.1, 33787.0], [11.2, 34491.0], [11.3, 34491.0], [11.4, 34626.0], [11.5, 34626.0], [11.6, 34626.0], [11.7, 34626.0], [11.8, 35381.0], [11.9, 35381.0], [12.0, 35611.0], [12.1, 35611.0], [12.2, 35801.0], [12.3, 35801.0], [12.4, 36524.0], [12.5, 36524.0], [12.6, 36762.0], [12.7, 36762.0], [12.8, 36769.0], [12.9, 36769.0], [13.0, 36774.0], [13.1, 36774.0], [13.2, 36778.0], [13.3, 36778.0], [13.4, 37458.0], [13.5, 37458.0], [13.6, 37666.0], [13.7, 37666.0], [13.8, 38748.0], [13.9, 38748.0], [14.0, 38893.0], [14.1, 38893.0], [14.2, 38896.0], [14.3, 38896.0], [14.4, 39108.0], [14.5, 39108.0], [14.6, 39113.0], [14.7, 39113.0], [14.8, 39145.0], [14.9, 39145.0], [15.0, 39146.0], [15.1, 39146.0], [15.2, 39146.0], [15.3, 39146.0], [15.4, 39146.0], [15.5, 39146.0], [15.6, 39146.0], [15.7, 39146.0], [15.8, 39146.0], [15.9, 39146.0], [16.0, 39146.0], [16.1, 39146.0], [16.2, 39148.0], [16.3, 39148.0], [16.4, 39149.0], [16.5, 39149.0], [16.6, 39149.0], [16.7, 39149.0], [16.8, 39149.0], [16.9, 39149.0], [17.0, 39150.0], [17.1, 39150.0], [17.2, 39150.0], [17.3, 39150.0], [17.4, 39151.0], [17.5, 39151.0], [17.6, 39153.0], [17.7, 39153.0], [17.8, 39154.0], [17.9, 39154.0], [18.0, 39154.0], [18.1, 39154.0], [18.2, 39156.0], [18.3, 39156.0], [18.4, 39159.0], [18.5, 39159.0], [18.6, 39161.0], [18.7, 39161.0], [18.8, 39163.0], [18.9, 39163.0], [19.0, 39164.0], [19.1, 39164.0], [19.2, 39186.0], [19.3, 39186.0], [19.4, 39187.0], [19.5, 39187.0], [19.6, 39187.0], [19.7, 39187.0], [19.8, 39187.0], [19.9, 39187.0], [20.0, 39188.0], [20.1, 39188.0], [20.2, 39190.0], [20.3, 39190.0], [20.4, 39190.0], [20.5, 39190.0], [20.6, 39191.0], [20.7, 39191.0], [20.8, 39191.0], [20.9, 39191.0], [21.0, 39191.0], [21.1, 39191.0], [21.2, 39193.0], [21.3, 39193.0], [21.4, 39193.0], [21.5, 39193.0], [21.6, 39194.0], [21.7, 39194.0], [21.8, 39194.0], [21.9, 39194.0], [22.0, 39198.0], [22.1, 39198.0], [22.2, 39199.0], [22.3, 39199.0], [22.4, 39200.0], [22.5, 39200.0], [22.6, 39201.0], [22.7, 39201.0], [22.8, 39201.0], [22.9, 39201.0], [23.0, 39201.0], [23.1, 39201.0], [23.2, 39210.0], [23.3, 39210.0], [23.4, 39214.0], [23.5, 39214.0], [23.6, 39216.0], [23.7, 39216.0], [23.8, 39216.0], [23.9, 39216.0], [24.0, 39220.0], [24.1, 39220.0], [24.2, 39221.0], [24.3, 39221.0], [24.4, 39221.0], [24.5, 39221.0], [24.6, 39223.0], [24.7, 39223.0], [24.8, 39224.0], [24.9, 39224.0], [25.0, 39225.0], [25.1, 39225.0], [25.2, 39226.0], [25.3, 39226.0], [25.4, 39226.0], [25.5, 39226.0], [25.6, 39228.0], [25.7, 39228.0], [25.8, 39229.0], [25.9, 39229.0], [26.0, 39229.0], [26.1, 39229.0], [26.2, 39251.0], [26.3, 39251.0], [26.4, 39252.0], [26.5, 39252.0], [26.6, 39253.0], [26.7, 39253.0], [26.8, 39259.0], [26.9, 39259.0], [27.0, 39259.0], [27.1, 39259.0], [27.2, 39265.0], [27.3, 39265.0], [27.4, 39265.0], [27.5, 39265.0], [27.6, 39266.0], [27.7, 39266.0], [27.8, 39266.0], [27.9, 39266.0], [28.0, 39266.0], [28.1, 39266.0], [28.2, 39267.0], [28.3, 39267.0], [28.4, 39289.0], [28.5, 39289.0], [28.6, 39292.0], [28.7, 39292.0], [28.8, 39292.0], [28.9, 39292.0], [29.0, 39293.0], [29.1, 39293.0], [29.2, 39294.0], [29.3, 39294.0], [29.4, 39295.0], [29.5, 39295.0], [29.6, 39295.0], [29.7, 39295.0], [29.8, 39295.0], [29.9, 39295.0], [30.0, 39296.0], [30.1, 39296.0], [30.2, 39309.0], [30.3, 39309.0], [30.4, 39318.0], [30.5, 39318.0], [30.6, 39324.0], [30.7, 39324.0], [30.8, 39326.0], [30.9, 39326.0], [31.0, 39326.0], [31.1, 39326.0], [31.2, 39328.0], [31.3, 39328.0], [31.4, 39330.0], [31.5, 39330.0], [31.6, 39331.0], [31.7, 39331.0], [31.8, 39333.0], [31.9, 39333.0], [32.0, 39333.0], [32.1, 39333.0], [32.2, 39333.0], [32.3, 39333.0], [32.4, 39333.0], [32.5, 39333.0], [32.6, 39333.0], [32.7, 39333.0], [32.8, 39334.0], [32.9, 39334.0], [33.0, 39335.0], [33.1, 39335.0], [33.2, 39335.0], [33.3, 39335.0], [33.4, 39336.0], [33.5, 39336.0], [33.6, 39336.0], [33.7, 39336.0], [33.8, 39336.0], [33.9, 39336.0], [34.0, 39336.0], [34.1, 39336.0], [34.2, 39337.0], [34.3, 39337.0], [34.4, 39337.0], [34.5, 39337.0], [34.6, 39337.0], [34.7, 39337.0], [34.8, 39337.0], [34.9, 39337.0], [35.0, 39338.0], [35.1, 39338.0], [35.2, 39338.0], [35.3, 39338.0], [35.4, 39338.0], [35.5, 39338.0], [35.6, 39339.0], [35.7, 39339.0], [35.8, 39340.0], [35.9, 39340.0], [36.0, 39340.0], [36.1, 39340.0], [36.2, 39340.0], [36.3, 39340.0], [36.4, 39340.0], [36.5, 39340.0], [36.6, 39341.0], [36.7, 39341.0], [36.8, 39341.0], [36.9, 39341.0], [37.0, 39342.0], [37.1, 39342.0], [37.2, 39343.0], [37.3, 39343.0], [37.4, 39343.0], [37.5, 39343.0], [37.6, 39343.0], [37.7, 39343.0], [37.8, 39345.0], [37.9, 39345.0], [38.0, 39345.0], [38.1, 39345.0], [38.2, 39345.0], [38.3, 39345.0], [38.4, 39350.0], [38.5, 39350.0], [38.6, 39350.0], [38.7, 39350.0], [38.8, 39378.0], [38.9, 39378.0], [39.0, 39379.0], [39.1, 39379.0], [39.2, 39380.0], [39.3, 39380.0], [39.4, 39380.0], [39.5, 39380.0], [39.6, 39388.0], [39.7, 39388.0], [39.8, 39392.0], [39.9, 39392.0], [40.0, 39395.0], [40.1, 39395.0], [40.2, 39398.0], [40.3, 39398.0], [40.4, 39400.0], [40.5, 39400.0], [40.6, 39400.0], [40.7, 39400.0], [40.8, 39401.0], [40.9, 39401.0], [41.0, 39404.0], [41.1, 39404.0], [41.2, 39406.0], [41.3, 39406.0], [41.4, 39407.0], [41.5, 39407.0], [41.6, 39408.0], [41.7, 39408.0], [41.8, 39409.0], [41.9, 39409.0], [42.0, 39410.0], [42.1, 39410.0], [42.2, 39411.0], [42.3, 39411.0], [42.4, 39411.0], [42.5, 39411.0], [42.6, 39412.0], [42.7, 39412.0], [42.8, 39412.0], [42.9, 39412.0], [43.0, 39412.0], [43.1, 39412.0], [43.2, 39412.0], [43.3, 39412.0], [43.4, 39413.0], [43.5, 39413.0], [43.6, 39413.0], [43.7, 39413.0], [43.8, 39413.0], [43.9, 39413.0], [44.0, 39414.0], [44.1, 39414.0], [44.2, 39415.0], [44.3, 39415.0], [44.4, 39416.0], [44.5, 39416.0], [44.6, 39416.0], [44.7, 39416.0], [44.8, 39416.0], [44.9, 39416.0], [45.0, 39417.0], [45.1, 39417.0], [45.2, 39417.0], [45.3, 39417.0], [45.4, 39444.0], [45.5, 39444.0], [45.6, 39446.0], [45.7, 39446.0], [45.8, 39446.0], [45.9, 39446.0], [46.0, 39446.0], [46.1, 39446.0], [46.2, 39478.0], [46.3, 39478.0], [46.4, 39479.0], [46.5, 39479.0], [46.6, 39511.0], [46.7, 39511.0], [46.8, 39512.0], [46.9, 39512.0], [47.0, 39513.0], [47.1, 39513.0], [47.2, 39514.0], [47.3, 39514.0], [47.4, 39514.0], [47.5, 39520.0], [47.6, 39520.0], [47.7, 39522.0], [47.8, 39522.0], [47.9, 39523.0], [48.0, 39523.0], [48.1, 39525.0], [48.2, 39525.0], [48.3, 39526.0], [48.4, 39526.0], [48.5, 39527.0], [48.6, 39527.0], [48.7, 39528.0], [48.8, 39528.0], [48.9, 39528.0], [49.0, 39528.0], [49.1, 39528.0], [49.2, 39528.0], [49.3, 39528.0], [49.4, 39528.0], [49.5, 39528.0], [49.6, 39528.0], [49.7, 39529.0], [49.8, 39529.0], [49.9, 39533.0], [50.0, 39533.0], [50.1, 39546.0], [50.2, 39546.0], [50.3, 39546.0], [50.4, 39546.0], [50.5, 39548.0], [50.6, 39548.0], [50.7, 39548.0], [50.8, 39548.0], [50.9, 39548.0], [51.0, 39548.0], [51.1, 39576.0], [51.2, 39576.0], [51.3, 39578.0], [51.4, 39578.0], [51.5, 39578.0], [51.6, 39578.0], [51.7, 39581.0], [51.8, 39581.0], [51.9, 39582.0], [52.0, 39582.0], [52.1, 39583.0], [52.2, 39583.0], [52.3, 39583.0], [52.4, 39583.0], [52.5, 39586.0], [52.6, 39586.0], [52.7, 39591.0], [52.8, 39591.0], [52.9, 39593.0], [53.0, 39593.0], [53.1, 39594.0], [53.2, 39594.0], [53.3, 39594.0], [53.4, 39594.0], [53.5, 39594.0], [53.6, 39594.0], [53.7, 39594.0], [53.8, 39594.0], [53.9, 39594.0], [54.0, 39594.0], [54.1, 39597.0], [54.2, 39597.0], [54.3, 39597.0], [54.4, 39597.0], [54.5, 39598.0], [54.6, 39598.0], [54.7, 39599.0], [54.8, 39599.0], [54.9, 39608.0], [55.0, 39608.0], [55.1, 39609.0], [55.2, 39609.0], [55.3, 39609.0], [55.4, 39609.0], [55.5, 39611.0], [55.6, 39611.0], [55.7, 39618.0], [55.8, 39618.0], [55.9, 39619.0], [56.0, 39619.0], [56.1, 39619.0], [56.2, 39619.0], [56.3, 39620.0], [56.4, 39620.0], [56.5, 39621.0], [56.6, 39621.0], [56.7, 39623.0], [56.8, 39623.0], [56.9, 39623.0], [57.0, 39623.0], [57.1, 39624.0], [57.2, 39624.0], [57.3, 39625.0], [57.4, 39625.0], [57.5, 39625.0], [57.6, 39625.0], [57.7, 39640.0], [57.8, 39640.0], [57.9, 39640.0], [58.0, 39640.0], [58.1, 39640.0], [58.2, 39640.0], [58.3, 39641.0], [58.4, 39641.0], [58.5, 39641.0], [58.6, 39641.0], [58.7, 39642.0], [58.8, 39642.0], [58.9, 39643.0], [59.0, 39643.0], [59.1, 39645.0], [59.2, 39645.0], [59.3, 39645.0], [59.4, 39645.0], [59.5, 39646.0], [59.6, 39646.0], [59.7, 39655.0], [59.8, 39655.0], [59.9, 39656.0], [60.0, 39656.0], [60.1, 39657.0], [60.2, 39657.0], [60.3, 39657.0], [60.4, 39657.0], [60.5, 39657.0], [60.6, 39657.0], [60.7, 39658.0], [60.8, 39658.0], [60.9, 39658.0], [61.0, 39658.0], [61.1, 39658.0], [61.2, 39658.0], [61.3, 39659.0], [61.4, 39659.0], [61.5, 39659.0], [61.6, 39659.0], [61.7, 39660.0], [61.8, 39660.0], [61.9, 39661.0], [62.0, 39661.0], [62.1, 39662.0], [62.2, 39662.0], [62.3, 39664.0], [62.4, 39664.0], [62.5, 39673.0], [62.6, 39673.0], [62.7, 39676.0], [62.8, 39676.0], [62.9, 39704.0], [63.0, 39704.0], [63.1, 39704.0], [63.2, 39704.0], [63.3, 39710.0], [63.4, 39710.0], [63.5, 39710.0], [63.6, 39710.0], [63.7, 39710.0], [63.8, 39710.0], [63.9, 39711.0], [64.0, 39711.0], [64.1, 39715.0], [64.2, 39715.0], [64.3, 39724.0], [64.4, 39724.0], [64.5, 39726.0], [64.6, 39726.0], [64.7, 39728.0], [64.8, 39728.0], [64.9, 39729.0], [65.0, 39729.0], [65.1, 39730.0], [65.2, 39730.0], [65.3, 39731.0], [65.4, 39731.0], [65.5, 39732.0], [65.6, 39732.0], [65.7, 39732.0], [65.8, 39732.0], [65.9, 39732.0], [66.0, 39732.0], [66.1, 39736.0], [66.2, 39736.0], [66.3, 39741.0], [66.4, 39741.0], [66.5, 39742.0], [66.6, 39742.0], [66.7, 39742.0], [66.8, 39742.0], [66.9, 39744.0], [67.0, 39744.0], [67.1, 39744.0], [67.2, 39744.0], [67.3, 39744.0], [67.4, 39744.0], [67.5, 39744.0], [67.6, 39744.0], [67.7, 39744.0], [67.8, 39744.0], [67.9, 39745.0], [68.0, 39745.0], [68.1, 39745.0], [68.2, 39745.0], [68.3, 39745.0], [68.4, 39745.0], [68.5, 39745.0], [68.6, 39745.0], [68.7, 39746.0], [68.8, 39746.0], [68.9, 39746.0], [69.0, 39746.0], [69.1, 39746.0], [69.2, 39746.0], [69.3, 39746.0], [69.4, 39746.0], [69.5, 39748.0], [69.6, 39748.0], [69.7, 39751.0], [69.8, 39751.0], [69.9, 39752.0], [70.0, 39752.0], [70.1, 39752.0], [70.2, 39752.0], [70.3, 39757.0], [70.4, 39757.0], [70.5, 39757.0], [70.6, 39757.0], [70.7, 39757.0], [70.8, 39757.0], [70.9, 39757.0], [71.0, 39757.0], [71.1, 39757.0], [71.2, 39757.0], [71.3, 39757.0], [71.4, 39757.0], [71.5, 39758.0], [71.6, 39758.0], [71.7, 39758.0], [71.8, 39758.0], [71.9, 39775.0], [72.0, 39775.0], [72.1, 39776.0], [72.2, 39776.0], [72.3, 39776.0], [72.4, 39776.0], [72.5, 39777.0], [72.6, 39777.0], [72.7, 39778.0], [72.8, 39778.0], [72.9, 39785.0], [73.0, 39785.0], [73.1, 39787.0], [73.2, 39787.0], [73.3, 39787.0], [73.4, 39787.0], [73.5, 39787.0], [73.6, 39787.0], [73.7, 39787.0], [73.8, 39787.0], [73.9, 39788.0], [74.0, 39788.0], [74.1, 39788.0], [74.2, 39788.0], [74.3, 39788.0], [74.4, 39788.0], [74.5, 39789.0], [74.6, 39789.0], [74.7, 39789.0], [74.8, 39789.0], [74.9, 39790.0], [75.0, 39790.0], [75.1, 39790.0], [75.2, 39790.0], [75.3, 39790.0], [75.4, 39790.0], [75.5, 39790.0], [75.6, 39790.0], [75.7, 39790.0], [75.8, 39790.0], [75.9, 39790.0], [76.0, 39790.0], [76.1, 39790.0], [76.2, 39790.0], [76.3, 39790.0], [76.4, 39790.0], [76.5, 39790.0], [76.6, 39790.0], [76.7, 39790.0], [76.8, 39790.0], [76.9, 39790.0], [77.0, 39790.0], [77.1, 39791.0], [77.2, 39791.0], [77.3, 39791.0], [77.4, 39791.0], [77.5, 39791.0], [77.6, 39791.0], [77.7, 39791.0], [77.8, 39791.0], [77.9, 39792.0], [78.0, 39792.0], [78.1, 39792.0], [78.2, 39792.0], [78.3, 39792.0], [78.4, 39792.0], [78.5, 39792.0], [78.6, 39792.0], [78.7, 39792.0], [78.8, 39792.0], [78.9, 39792.0], [79.0, 39792.0], [79.1, 39793.0], [79.2, 39793.0], [79.3, 39793.0], [79.4, 39793.0], [79.5, 39793.0], [79.6, 39793.0], [79.7, 39793.0], [79.8, 39793.0], [79.9, 39793.0], [80.0, 39793.0], [80.1, 39793.0], [80.2, 39793.0], [80.3, 39793.0], [80.4, 39793.0], [80.5, 39793.0], [80.6, 39793.0], [80.7, 39793.0], [80.8, 39793.0], [80.9, 39793.0], [81.0, 39793.0], [81.1, 39793.0], [81.2, 39793.0], [81.3, 39795.0], [81.4, 39795.0], [81.5, 39795.0], [81.6, 39795.0], [81.7, 39799.0], [81.8, 39799.0], [81.9, 39800.0], [82.0, 39800.0], [82.1, 39800.0], [82.2, 39800.0], [82.3, 39801.0], [82.4, 39801.0], [82.5, 39801.0], [82.6, 39801.0], [82.7, 39801.0], [82.8, 39801.0], [82.9, 39802.0], [83.0, 39802.0], [83.1, 39802.0], [83.2, 39802.0], [83.3, 39803.0], [83.4, 39803.0], [83.5, 39804.0], [83.6, 39804.0], [83.7, 39804.0], [83.8, 39804.0], [83.9, 39805.0], [84.0, 39805.0], [84.1, 39805.0], [84.2, 39805.0], [84.3, 39806.0], [84.4, 39806.0], [84.5, 39807.0], [84.6, 39807.0], [84.7, 39807.0], [84.8, 39807.0], [84.9, 39807.0], [85.0, 39807.0], [85.1, 39808.0], [85.2, 39808.0], [85.3, 39808.0], [85.4, 39808.0], [85.5, 39813.0], [85.6, 39813.0], [85.7, 39815.0], [85.8, 39815.0], [85.9, 39818.0], [86.0, 39818.0], [86.1, 39860.0], [86.2, 39860.0], [86.3, 39876.0], [86.4, 39876.0], [86.5, 39877.0], [86.6, 39877.0], [86.7, 39880.0], [86.8, 39880.0], [86.9, 39888.0], [87.0, 39888.0], [87.1, 39889.0], [87.2, 39889.0], [87.3, 39890.0], [87.4, 39890.0], [87.5, 39890.0], [87.6, 39890.0], [87.7, 39890.0], [87.8, 39890.0], [87.9, 39890.0], [88.0, 39890.0], [88.1, 39890.0], [88.2, 39890.0], [88.3, 39890.0], [88.4, 39890.0], [88.5, 39891.0], [88.6, 39891.0], [88.7, 39891.0], [88.8, 39891.0], [88.9, 39892.0], [89.0, 39892.0], [89.1, 39892.0], [89.2, 39892.0], [89.3, 39892.0], [89.4, 39892.0], [89.5, 39892.0], [89.6, 39892.0], [89.7, 39892.0], [89.8, 39892.0], [89.9, 39892.0], [90.0, 39892.0], [90.1, 39892.0], [90.2, 39892.0], [90.3, 39892.0], [90.4, 39892.0], [90.5, 39892.0], [90.6, 39892.0], [90.7, 39892.0], [90.8, 39892.0], [90.9, 39892.0], [91.0, 39892.0], [91.1, 39892.0], [91.2, 39892.0], [91.3, 39893.0], [91.4, 39893.0], [91.5, 39893.0], [91.6, 39893.0], [91.7, 39894.0], [91.8, 39894.0], [91.9, 39894.0], [92.0, 39894.0], [92.1, 39894.0], [92.2, 39894.0], [92.3, 39894.0], [92.4, 39894.0], [92.5, 39894.0], [92.6, 39894.0], [92.7, 39906.0], [92.8, 39906.0], [92.9, 39925.0], [93.0, 39925.0], [93.1, 39925.0], [93.2, 39925.0], [93.3, 39926.0], [93.4, 39926.0], [93.5, 39926.0], [93.6, 39926.0], [93.7, 39927.0], [93.8, 39927.0], [93.9, 39935.0], [94.0, 39935.0], [94.1, 39935.0], [94.2, 39935.0], [94.3, 39935.0], [94.4, 39935.0], [94.5, 39935.0], [94.6, 39935.0], [94.7, 39935.0], [94.8, 39935.0], [94.9, 39936.0], [95.0, 39936.0], [95.1, 39936.0], [95.2, 39936.0], [95.3, 39936.0], [95.4, 39936.0], [95.5, 39937.0], [95.6, 39937.0], [95.7, 39937.0], [95.8, 39937.0], [95.9, 39937.0], [96.0, 39937.0], [96.1, 39937.0], [96.2, 39937.0], [96.3, 39937.0], [96.4, 39937.0], [96.5, 39937.0], [96.6, 39937.0], [96.7, 39937.0], [96.8, 39937.0], [96.9, 39937.0], [97.0, 39937.0], [97.1, 39938.0], [97.2, 39938.0], [97.3, 39938.0], [97.4, 39938.0], [97.5, 39938.0], [97.6, 39938.0], [97.7, 39938.0], [97.8, 39938.0], [97.9, 39938.0], [98.0, 39938.0], [98.1, 39938.0], [98.2, 39938.0], [98.3, 39938.0], [98.4, 39938.0], [98.5, 39939.0], [98.6, 39939.0], [98.7, 39940.0], [98.8, 39940.0], [98.9, 39940.0], [99.0, 39940.0], [99.1, 39941.0], [99.2, 39941.0], [99.3, 39941.0], [99.4, 39941.0], [99.5, 39945.0], [99.6, 39945.0], [99.7, 39946.0], [99.8, 39946.0], [99.9, 39950.0], [100.0, 39950.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 11300.0, "maxY": 95.0, "series": [{"data": [[11300.0, 1.0], [14400.0, 1.0], [15200.0, 2.0], [15000.0, 1.0], [15400.0, 1.0], [15500.0, 1.0], [16700.0, 2.0], [16900.0, 1.0], [17100.0, 1.0], [17200.0, 1.0], [19100.0, 2.0], [19200.0, 2.0], [19500.0, 1.0], [21100.0, 1.0], [21400.0, 2.0], [21500.0, 1.0], [21600.0, 5.0], [21700.0, 1.0], [21800.0, 2.0], [23300.0, 1.0], [23400.0, 1.0], [23700.0, 1.0], [23800.0, 1.0], [23600.0, 1.0], [25300.0, 1.0], [25400.0, 1.0], [25900.0, 2.0], [25700.0, 1.0], [27300.0, 1.0], [27400.0, 1.0], [27900.0, 1.0], [28100.0, 2.0], [29400.0, 1.0], [29500.0, 1.0], [30200.0, 2.0], [30000.0, 1.0], [31300.0, 1.0], [31400.0, 1.0], [32200.0, 2.0], [32400.0, 1.0], [33500.0, 1.0], [33700.0, 1.0], [34600.0, 2.0], [34400.0, 1.0], [35300.0, 1.0], [35600.0, 1.0], [35800.0, 1.0], [36500.0, 1.0], [36700.0, 4.0], [37400.0, 1.0], [37600.0, 1.0], [38800.0, 2.0], [38700.0, 1.0], [39800.0, 54.0], [39200.0, 39.0], [39100.0, 40.0], [39300.0, 51.0], [39400.0, 31.0], [39500.0, 41.0], [39600.0, 40.0], [39700.0, 95.0], [39900.0, 37.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 39900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 60.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 440.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 60.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 440.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 271.6492985971946, "minX": 1.57164192E12, "maxY": 500.0, "series": [{"data": [[1.57164198E12, 271.6492985971946], [1.57164192E12, 500.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164198E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11388.0, "minX": 63.0, "maxY": 39941.0, "series": [{"data": [[63.0, 39941.0], [67.0, 39863.83333333333], [66.0, 39869.68750000001], [120.0, 39826.228070175435], [143.0, 39790.0], [142.0, 39692.333333333336], [140.0, 39805.0], [139.0, 39800.0], [138.0, 39802.0], [137.0, 39804.0], [136.0, 39800.0], [150.0, 39618.0], [148.0, 39657.0], [158.0, 39619.0], [155.0, 39803.5], [166.0, 39732.28124999999], [207.0, 39738.46341463415], [215.0, 39684.333333333336], [223.0, 39583.0], [222.0, 39607.666666666664], [221.0, 39620.333333333336], [218.0, 39670.0], [217.0, 39742.0], [231.0, 39676.0], [230.0, 39675.333333333336], [228.0, 39649.75], [225.0, 39640.0], [240.0, 39601.444444444445], [261.0, 39530.380952380954], [283.0, 39481.272727272735], [348.0, 39323.18], [409.0, 39260.1447368421], [431.0, 38845.666666666664], [428.0, 39228.0], [427.0, 39218.5], [424.0, 39296.0], [423.0, 39113.0], [422.0, 39292.0], [421.0, 39183.25], [419.0, 39248.85714285714], [434.0, 36769.0], [445.0, 33787.0], [446.0, 33566.0], [444.0, 34581.0], [441.0, 35381.0], [440.0, 35611.0], [439.0, 35801.0], [438.0, 36524.0], [437.0, 36771.333333333336], [433.0, 37458.0], [432.0, 37666.0], [451.0, 31326.0], [461.0, 27385.0], [460.0, 27497.0], [459.0, 28061.0], [456.0, 29426.0], [455.0, 29550.0], [454.0, 30261.0], [453.0, 30171.0], [450.0, 31485.0], [449.0, 32296.666666666668], [466.0, 25358.0], [477.0, 21679.0], [475.0, 21667.0], [474.0, 21761.0], [471.0, 23327.0], [470.0, 23445.0], [469.0, 23736.333333333332], [465.0, 25470.0], [464.0, 25893.666666666668], [494.0, 15569.0], [495.0, 15456.0], [493.0, 16807.333333333332], [490.0, 17166.0], [489.0, 17281.0], [488.0, 19169.0], [487.0, 19105.0], [486.0, 19250.5], [484.0, 19575.0], [483.0, 21124.0], [482.0, 21426.0], [481.0, 21493.0], [480.0, 21609.666666666668], [500.0, 11388.0], [499.0, 14400.0], [498.0, 15151.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[272.1060000000003, 37663.05400000002]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8.616666666666667, "minX": 1.57164192E12, "maxY": 8487.2, "series": [{"data": [[1.57164198E12, 8487.2], [1.57164192E12, 9.116666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57164198E12, 4240.466666666666], [1.57164192E12, 8.616666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164198E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11388.0, "minX": 1.57164192E12, "maxY": 37715.70941883767, "series": [{"data": [[1.57164198E12, 37715.70941883767], [1.57164192E12, 11388.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164198E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11388.0, "minX": 1.57164192E12, "maxY": 37395.525050100216, "series": [{"data": [[1.57164198E12, 37395.525050100216], [1.57164192E12, 11388.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164198E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8257.0, "minX": 1.57164192E12, "maxY": 8577.78557114227, "series": [{"data": [[1.57164198E12, 8577.78557114227], [1.57164192E12, 8257.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164198E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15028.0, "minX": 1.57164198E12, "maxY": 38896.0, "series": [{"data": [[1.57164198E12, 38896.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57164198E12, 15028.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57164198E12, 36777.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57164198E12, 38896.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57164198E12, 38693.899999999994]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164198E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11388.0, "minX": 1.0, "maxY": 39758.0, "series": [{"data": [[1.0, 24500.5], [4.0, 30266.0], [2.0, 30531.5], [9.0, 21657.0], [148.0, 38893.0], [5.0, 16843.5], [3.0, 25773.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 11388.0], [4.0, 35381.0], [283.0, 39758.0], [9.0, 21711.0], [148.0, 39292.0], [5.0, 36524.0], [3.0, 21426.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 283.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 39756.0, "series": [{"data": [[1.0, 24379.5], [4.0, 30166.0], [2.0, 30432.0], [9.0, 21561.0], [148.0, 38792.0], [5.0, 16744.5], [3.0, 25670.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 11388.0], [4.0, 35381.0], [283.0, 39756.0], [9.0, 0.0], [148.0, 39292.0], [5.0, 36524.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 283.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57164192E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57164192E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164192E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57164192E12, "maxY": 7.133333333333334, "series": [{"data": [[1.57164198E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57164198E12, 0.06666666666666667], [1.57164192E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.57164198E12, 7.133333333333334]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.57164198E12, 0.11666666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164198E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57164192E12, "maxY": 7.316666666666666, "series": [{"data": [[1.57164198E12, 7.316666666666666], [1.57164192E12, 0.016666666666666666]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57164198E12, 1.0]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164198E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57164192E12, "maxY": 7.316666666666666, "series": [{"data": [[1.57164198E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57164198E12, 7.316666666666666], [1.57164192E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164198E12, "title": "Total Transactions Per Second"}},
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

