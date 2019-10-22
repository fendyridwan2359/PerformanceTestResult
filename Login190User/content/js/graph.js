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
        data: {"result": {"minY": 9158.0, "minX": 0.0, "maxY": 17878.0, "series": [{"data": [[0.0, 9158.0], [0.1, 9158.0], [0.2, 9158.0], [0.3, 9158.0], [0.4, 9158.0], [0.5, 9158.0], [0.6, 9266.0], [0.7, 9266.0], [0.8, 9266.0], [0.9, 9266.0], [1.0, 9266.0], [1.1, 9361.0], [1.2, 9361.0], [1.3, 9361.0], [1.4, 9361.0], [1.5, 9361.0], [1.6, 9422.0], [1.7, 9422.0], [1.8, 9422.0], [1.9, 9422.0], [2.0, 9422.0], [2.1, 9422.0], [2.2, 9603.0], [2.3, 9603.0], [2.4, 9603.0], [2.5, 9603.0], [2.6, 9603.0], [2.7, 9655.0], [2.8, 9655.0], [2.9, 9655.0], [3.0, 9655.0], [3.1, 9655.0], [3.2, 9670.0], [3.3, 9670.0], [3.4, 9670.0], [3.5, 9670.0], [3.6, 9670.0], [3.7, 9671.0], [3.8, 9671.0], [3.9, 9671.0], [4.0, 9671.0], [4.1, 9671.0], [4.2, 9671.0], [4.3, 9684.0], [4.4, 9684.0], [4.5, 9684.0], [4.6, 9684.0], [4.7, 9684.0], [4.8, 9738.0], [4.9, 9738.0], [5.0, 9738.0], [5.1, 9738.0], [5.2, 9738.0], [5.3, 9743.0], [5.4, 9743.0], [5.5, 9743.0], [5.6, 9743.0], [5.7, 9743.0], [5.8, 9750.0], [5.9, 9750.0], [6.0, 9750.0], [6.1, 9750.0], [6.2, 9750.0], [6.3, 9750.0], [6.4, 9752.0], [6.5, 9752.0], [6.6, 9752.0], [6.7, 9752.0], [6.8, 9752.0], [6.9, 9775.0], [7.0, 9775.0], [7.1, 9775.0], [7.2, 9775.0], [7.3, 9775.0], [7.4, 9780.0], [7.5, 9780.0], [7.6, 9780.0], [7.7, 9780.0], [7.8, 9780.0], [7.9, 9782.0], [8.0, 9782.0], [8.1, 9782.0], [8.2, 9782.0], [8.3, 9782.0], [8.4, 9782.0], [8.5, 9797.0], [8.6, 9797.0], [8.7, 9797.0], [8.8, 9797.0], [8.9, 9797.0], [9.0, 9802.0], [9.1, 9802.0], [9.2, 9802.0], [9.3, 9802.0], [9.4, 9802.0], [9.5, 9802.0], [9.6, 9802.0], [9.7, 9802.0], [9.8, 9802.0], [9.9, 9802.0], [10.0, 9820.0], [10.1, 9820.0], [10.2, 9820.0], [10.3, 9820.0], [10.4, 9820.0], [10.5, 9820.0], [10.6, 9820.0], [10.7, 9820.0], [10.8, 9820.0], [10.9, 9820.0], [11.0, 9820.0], [11.1, 9824.0], [11.2, 9824.0], [11.3, 9824.0], [11.4, 9824.0], [11.5, 9824.0], [11.6, 9836.0], [11.7, 9836.0], [11.8, 9836.0], [11.9, 9836.0], [12.0, 9836.0], [12.1, 9836.0], [12.2, 9836.0], [12.3, 9836.0], [12.4, 9836.0], [12.5, 9836.0], [12.6, 9836.0], [12.7, 9841.0], [12.8, 9841.0], [12.9, 9841.0], [13.0, 9841.0], [13.1, 9841.0], [13.2, 9841.0], [13.3, 9841.0], [13.4, 9841.0], [13.5, 9841.0], [13.6, 9841.0], [13.7, 9842.0], [13.8, 9842.0], [13.9, 9842.0], [14.0, 9842.0], [14.1, 9842.0], [14.2, 9842.0], [14.3, 9842.0], [14.4, 9842.0], [14.5, 9842.0], [14.6, 9842.0], [14.7, 9842.0], [14.8, 9842.0], [14.9, 9842.0], [15.0, 9842.0], [15.1, 9842.0], [15.2, 9842.0], [15.3, 9843.0], [15.4, 9843.0], [15.5, 9843.0], [15.6, 9843.0], [15.7, 9843.0], [15.8, 9843.0], [15.9, 9843.0], [16.0, 9843.0], [16.1, 9843.0], [16.2, 9843.0], [16.3, 9843.0], [16.4, 9848.0], [16.5, 9848.0], [16.6, 9848.0], [16.7, 9848.0], [16.8, 9848.0], [16.9, 9855.0], [17.0, 9855.0], [17.1, 9855.0], [17.2, 9855.0], [17.3, 9855.0], [17.4, 9862.0], [17.5, 9862.0], [17.6, 9862.0], [17.7, 9862.0], [17.8, 9862.0], [17.9, 9865.0], [18.0, 9865.0], [18.1, 9865.0], [18.2, 9865.0], [18.3, 9865.0], [18.4, 9865.0], [18.5, 9871.0], [18.6, 9871.0], [18.7, 9871.0], [18.8, 9871.0], [18.9, 9871.0], [19.0, 9925.0], [19.1, 9925.0], [19.2, 9925.0], [19.3, 9925.0], [19.4, 9925.0], [19.5, 9926.0], [19.6, 9926.0], [19.7, 9926.0], [19.8, 9926.0], [19.9, 9926.0], [20.0, 9926.0], [20.1, 9932.0], [20.2, 9932.0], [20.3, 9932.0], [20.4, 9932.0], [20.5, 9932.0], [20.6, 9941.0], [20.7, 9941.0], [20.8, 9941.0], [20.9, 9941.0], [21.0, 9941.0], [21.1, 9958.0], [21.2, 9958.0], [21.3, 9958.0], [21.4, 9958.0], [21.5, 9958.0], [21.6, 9961.0], [21.7, 9961.0], [21.8, 9961.0], [21.9, 9961.0], [22.0, 9961.0], [22.1, 9961.0], [22.2, 10019.0], [22.3, 10019.0], [22.4, 10019.0], [22.5, 10019.0], [22.6, 10019.0], [22.7, 10435.0], [22.8, 10435.0], [22.9, 10435.0], [23.0, 10435.0], [23.1, 10435.0], [23.2, 10508.0], [23.3, 10508.0], [23.4, 10508.0], [23.5, 10508.0], [23.6, 10508.0], [23.7, 10636.0], [23.8, 10636.0], [23.9, 10636.0], [24.0, 10636.0], [24.1, 10636.0], [24.2, 10636.0], [24.3, 10727.0], [24.4, 10727.0], [24.5, 10727.0], [24.6, 10727.0], [24.7, 10727.0], [24.8, 10816.0], [24.9, 10816.0], [25.0, 10816.0], [25.1, 10816.0], [25.2, 10816.0], [25.3, 10827.0], [25.4, 10827.0], [25.5, 10827.0], [25.6, 10827.0], [25.7, 10827.0], [25.8, 10832.0], [25.9, 10832.0], [26.0, 10832.0], [26.1, 10832.0], [26.2, 10832.0], [26.3, 10832.0], [26.4, 10839.0], [26.5, 10839.0], [26.6, 10839.0], [26.7, 10839.0], [26.8, 10839.0], [26.9, 10919.0], [27.0, 10919.0], [27.1, 10919.0], [27.2, 10919.0], [27.3, 10919.0], [27.4, 10937.0], [27.5, 10937.0], [27.6, 10937.0], [27.7, 10937.0], [27.8, 10937.0], [27.9, 10987.0], [28.0, 10987.0], [28.1, 10987.0], [28.2, 10987.0], [28.3, 10987.0], [28.4, 10987.0], [28.5, 10993.0], [28.6, 10993.0], [28.7, 10993.0], [28.8, 10993.0], [28.9, 10993.0], [29.0, 11035.0], [29.1, 11035.0], [29.2, 11035.0], [29.3, 11035.0], [29.4, 11035.0], [29.5, 11038.0], [29.6, 11038.0], [29.7, 11038.0], [29.8, 11038.0], [29.9, 11038.0], [30.0, 11038.0], [30.1, 11064.0], [30.2, 11064.0], [30.3, 11064.0], [30.4, 11064.0], [30.5, 11064.0], [30.6, 11070.0], [30.7, 11070.0], [30.8, 11070.0], [30.9, 11070.0], [31.0, 11070.0], [31.1, 11071.0], [31.2, 11071.0], [31.3, 11071.0], [31.4, 11071.0], [31.5, 11071.0], [31.6, 11100.0], [31.7, 11100.0], [31.8, 11100.0], [31.9, 11100.0], [32.0, 11100.0], [32.1, 11100.0], [32.2, 11114.0], [32.3, 11114.0], [32.4, 11114.0], [32.5, 11114.0], [32.6, 11114.0], [32.7, 11117.0], [32.8, 11117.0], [32.9, 11117.0], [33.0, 11117.0], [33.1, 11117.0], [33.2, 11540.0], [33.3, 11540.0], [33.4, 11540.0], [33.5, 11540.0], [33.6, 11540.0], [33.7, 11598.0], [33.8, 11598.0], [33.9, 11598.0], [34.0, 11598.0], [34.1, 11598.0], [34.2, 11598.0], [34.3, 11666.0], [34.4, 11666.0], [34.5, 11666.0], [34.6, 11666.0], [34.7, 11666.0], [34.8, 11862.0], [34.9, 11862.0], [35.0, 11862.0], [35.1, 11862.0], [35.2, 11862.0], [35.3, 11883.0], [35.4, 11883.0], [35.5, 11883.0], [35.6, 11883.0], [35.7, 11883.0], [35.8, 11909.0], [35.9, 11909.0], [36.0, 11909.0], [36.1, 11909.0], [36.2, 11909.0], [36.3, 11909.0], [36.4, 11915.0], [36.5, 11915.0], [36.6, 11915.0], [36.7, 11915.0], [36.8, 11915.0], [36.9, 11920.0], [37.0, 11920.0], [37.1, 11920.0], [37.2, 11920.0], [37.3, 11920.0], [37.4, 11973.0], [37.5, 11973.0], [37.6, 11973.0], [37.7, 11973.0], [37.8, 11973.0], [37.9, 12030.0], [38.0, 12030.0], [38.1, 12030.0], [38.2, 12030.0], [38.3, 12030.0], [38.4, 12030.0], [38.5, 12040.0], [38.6, 12040.0], [38.7, 12040.0], [38.8, 12040.0], [38.9, 12040.0], [39.0, 12048.0], [39.1, 12048.0], [39.2, 12048.0], [39.3, 12048.0], [39.4, 12048.0], [39.5, 12058.0], [39.6, 12058.0], [39.7, 12058.0], [39.8, 12058.0], [39.9, 12058.0], [40.0, 12058.0], [40.1, 12071.0], [40.2, 12071.0], [40.3, 12071.0], [40.4, 12071.0], [40.5, 12071.0], [40.6, 12076.0], [40.7, 12076.0], [40.8, 12076.0], [40.9, 12076.0], [41.0, 12076.0], [41.1, 12119.0], [41.2, 12119.0], [41.3, 12119.0], [41.4, 12119.0], [41.5, 12119.0], [41.6, 12200.0], [41.7, 12200.0], [41.8, 12200.0], [41.9, 12200.0], [42.0, 12200.0], [42.1, 12200.0], [42.2, 12219.0], [42.3, 12219.0], [42.4, 12219.0], [42.5, 12219.0], [42.6, 12219.0], [42.7, 12244.0], [42.8, 12244.0], [42.9, 12244.0], [43.0, 12244.0], [43.1, 12244.0], [43.2, 12249.0], [43.3, 12249.0], [43.4, 12249.0], [43.5, 12249.0], [43.6, 12249.0], [43.7, 12687.0], [43.8, 12687.0], [43.9, 12687.0], [44.0, 12687.0], [44.1, 12687.0], [44.2, 12687.0], [44.3, 12720.0], [44.4, 12720.0], [44.5, 12720.0], [44.6, 12720.0], [44.7, 12720.0], [44.8, 12811.0], [44.9, 12811.0], [45.0, 12811.0], [45.1, 12811.0], [45.2, 12811.0], [45.3, 13001.0], [45.4, 13001.0], [45.5, 13001.0], [45.6, 13001.0], [45.7, 13001.0], [45.8, 13036.0], [45.9, 13036.0], [46.0, 13036.0], [46.1, 13036.0], [46.2, 13036.0], [46.3, 13036.0], [46.4, 13036.0], [46.5, 13036.0], [46.6, 13036.0], [46.7, 13036.0], [46.8, 13036.0], [46.9, 13058.0], [47.0, 13058.0], [47.1, 13058.0], [47.2, 13058.0], [47.3, 13058.0], [47.4, 13073.0], [47.5, 13073.0], [47.6, 13073.0], [47.7, 13073.0], [47.8, 13073.0], [47.9, 13127.0], [48.0, 13127.0], [48.1, 13127.0], [48.2, 13127.0], [48.3, 13127.0], [48.4, 13127.0], [48.5, 13173.0], [48.6, 13173.0], [48.7, 13173.0], [48.8, 13173.0], [48.9, 13173.0], [49.0, 13189.0], [49.1, 13189.0], [49.2, 13189.0], [49.3, 13189.0], [49.4, 13189.0], [49.5, 13190.0], [49.6, 13190.0], [49.7, 13190.0], [49.8, 13190.0], [49.9, 13190.0], [50.0, 13190.0], [50.1, 13216.0], [50.2, 13216.0], [50.3, 13216.0], [50.4, 13216.0], [50.5, 13216.0], [50.6, 13231.0], [50.7, 13231.0], [50.8, 13231.0], [50.9, 13231.0], [51.0, 13231.0], [51.1, 13274.0], [51.2, 13274.0], [51.3, 13274.0], [51.4, 13274.0], [51.5, 13274.0], [51.6, 13274.0], [51.7, 13274.0], [51.8, 13274.0], [51.9, 13274.0], [52.0, 13274.0], [52.1, 13274.0], [52.2, 13287.0], [52.3, 13287.0], [52.4, 13287.0], [52.5, 13287.0], [52.6, 13287.0], [52.7, 13293.0], [52.8, 13293.0], [52.9, 13293.0], [53.0, 13293.0], [53.1, 13293.0], [53.2, 13314.0], [53.3, 13314.0], [53.4, 13314.0], [53.5, 13314.0], [53.6, 13314.0], [53.7, 13316.0], [53.8, 13316.0], [53.9, 13316.0], [54.0, 13316.0], [54.1, 13316.0], [54.2, 13316.0], [54.3, 13763.0], [54.4, 13763.0], [54.5, 13763.0], [54.6, 13763.0], [54.7, 13763.0], [54.8, 13794.0], [54.9, 13794.0], [55.0, 13794.0], [55.1, 13794.0], [55.2, 13794.0], [55.3, 13884.0], [55.4, 13884.0], [55.5, 13884.0], [55.6, 13884.0], [55.7, 13884.0], [55.8, 13957.0], [55.9, 13957.0], [56.0, 13957.0], [56.1, 13957.0], [56.2, 13957.0], [56.3, 13957.0], [56.4, 13976.0], [56.5, 13976.0], [56.6, 13976.0], [56.7, 13976.0], [56.8, 13976.0], [56.9, 14023.0], [57.0, 14023.0], [57.1, 14023.0], [57.2, 14023.0], [57.3, 14023.0], [57.4, 14061.0], [57.5, 14061.0], [57.6, 14061.0], [57.7, 14061.0], [57.8, 14061.0], [57.9, 14176.0], [58.0, 14176.0], [58.1, 14176.0], [58.2, 14176.0], [58.3, 14176.0], [58.4, 14176.0], [58.5, 14214.0], [58.6, 14214.0], [58.7, 14214.0], [58.8, 14214.0], [58.9, 14214.0], [59.0, 14251.0], [59.1, 14251.0], [59.2, 14251.0], [59.3, 14251.0], [59.4, 14251.0], [59.5, 14284.0], [59.6, 14284.0], [59.7, 14284.0], [59.8, 14284.0], [59.9, 14284.0], [60.0, 14284.0], [60.1, 14295.0], [60.2, 14295.0], [60.3, 14295.0], [60.4, 14295.0], [60.5, 14295.0], [60.6, 14314.0], [60.7, 14314.0], [60.8, 14314.0], [60.9, 14314.0], [61.0, 14314.0], [61.1, 14316.0], [61.2, 14316.0], [61.3, 14316.0], [61.4, 14316.0], [61.5, 14316.0], [61.6, 14319.0], [61.7, 14319.0], [61.8, 14319.0], [61.9, 14319.0], [62.0, 14319.0], [62.1, 14319.0], [62.2, 14338.0], [62.3, 14338.0], [62.4, 14338.0], [62.5, 14338.0], [62.6, 14338.0], [62.7, 14385.0], [62.8, 14385.0], [62.9, 14385.0], [63.0, 14385.0], [63.1, 14385.0], [63.2, 14395.0], [63.3, 14395.0], [63.4, 14395.0], [63.5, 14395.0], [63.6, 14395.0], [63.7, 14399.0], [63.8, 14399.0], [63.9, 14399.0], [64.0, 14399.0], [64.1, 14399.0], [64.2, 14399.0], [64.3, 14419.0], [64.4, 14419.0], [64.5, 14419.0], [64.6, 14419.0], [64.7, 14419.0], [64.8, 14669.0], [64.9, 14669.0], [65.0, 14669.0], [65.1, 14669.0], [65.2, 14669.0], [65.3, 14756.0], [65.4, 14756.0], [65.5, 14756.0], [65.6, 14756.0], [65.7, 14756.0], [65.8, 14966.0], [65.9, 14966.0], [66.0, 14966.0], [66.1, 14966.0], [66.2, 14966.0], [66.3, 14966.0], [66.4, 15060.0], [66.5, 15060.0], [66.6, 15060.0], [66.7, 15060.0], [66.8, 15060.0], [66.9, 15082.0], [67.0, 15082.0], [67.1, 15082.0], [67.2, 15082.0], [67.3, 15082.0], [67.4, 15116.0], [67.5, 15116.0], [67.6, 15116.0], [67.7, 15116.0], [67.8, 15116.0], [67.9, 15251.0], [68.0, 15251.0], [68.1, 15251.0], [68.2, 15251.0], [68.3, 15251.0], [68.4, 15251.0], [68.5, 15288.0], [68.6, 15288.0], [68.7, 15288.0], [68.8, 15288.0], [68.9, 15288.0], [69.0, 15329.0], [69.1, 15329.0], [69.2, 15329.0], [69.3, 15329.0], [69.4, 15329.0], [69.5, 15337.0], [69.6, 15337.0], [69.7, 15337.0], [69.8, 15337.0], [69.9, 15337.0], [70.0, 15337.0], [70.1, 15364.0], [70.2, 15364.0], [70.3, 15364.0], [70.4, 15364.0], [70.5, 15364.0], [70.6, 15391.0], [70.7, 15391.0], [70.8, 15391.0], [70.9, 15391.0], [71.0, 15391.0], [71.1, 15398.0], [71.2, 15398.0], [71.3, 15398.0], [71.4, 15398.0], [71.5, 15398.0], [71.6, 15423.0], [71.7, 15423.0], [71.8, 15423.0], [71.9, 15423.0], [72.0, 15423.0], [72.1, 15423.0], [72.2, 15426.0], [72.3, 15426.0], [72.4, 15426.0], [72.5, 15426.0], [72.6, 15426.0], [72.7, 15426.0], [72.8, 15426.0], [72.9, 15426.0], [73.0, 15426.0], [73.1, 15426.0], [73.2, 15462.0], [73.3, 15462.0], [73.4, 15462.0], [73.5, 15462.0], [73.6, 15462.0], [73.7, 15495.0], [73.8, 15495.0], [73.9, 15495.0], [74.0, 15495.0], [74.1, 15495.0], [74.2, 15495.0], [74.3, 15537.0], [74.4, 15537.0], [74.5, 15537.0], [74.6, 15537.0], [74.7, 15537.0], [74.8, 15539.0], [74.9, 15539.0], [75.0, 15539.0], [75.1, 15539.0], [75.2, 15539.0], [75.3, 15964.0], [75.4, 15964.0], [75.5, 15964.0], [75.6, 15964.0], [75.7, 15964.0], [75.8, 16025.0], [75.9, 16025.0], [76.0, 16025.0], [76.1, 16025.0], [76.2, 16025.0], [76.3, 16025.0], [76.4, 16056.0], [76.5, 16056.0], [76.6, 16056.0], [76.7, 16056.0], [76.8, 16056.0], [76.9, 16090.0], [77.0, 16090.0], [77.1, 16090.0], [77.2, 16090.0], [77.3, 16090.0], [77.4, 16173.0], [77.5, 16173.0], [77.6, 16173.0], [77.7, 16173.0], [77.8, 16173.0], [77.9, 16176.0], [78.0, 16176.0], [78.1, 16176.0], [78.2, 16176.0], [78.3, 16176.0], [78.4, 16176.0], [78.5, 16333.0], [78.6, 16333.0], [78.7, 16333.0], [78.8, 16333.0], [78.9, 16333.0], [79.0, 16348.0], [79.1, 16348.0], [79.2, 16348.0], [79.3, 16348.0], [79.4, 16348.0], [79.5, 16396.0], [79.6, 16396.0], [79.7, 16396.0], [79.8, 16396.0], [79.9, 16396.0], [80.0, 16396.0], [80.1, 16401.0], [80.2, 16401.0], [80.3, 16401.0], [80.4, 16401.0], [80.5, 16401.0], [80.6, 16418.0], [80.7, 16418.0], [80.8, 16418.0], [80.9, 16418.0], [81.0, 16418.0], [81.1, 16464.0], [81.2, 16464.0], [81.3, 16464.0], [81.4, 16464.0], [81.5, 16464.0], [81.6, 16515.0], [81.7, 16515.0], [81.8, 16515.0], [81.9, 16515.0], [82.0, 16515.0], [82.1, 16515.0], [82.2, 16555.0], [82.3, 16555.0], [82.4, 16555.0], [82.5, 16555.0], [82.6, 16555.0], [82.7, 16556.0], [82.8, 16556.0], [82.9, 16556.0], [83.0, 16556.0], [83.1, 16556.0], [83.2, 16564.0], [83.3, 16564.0], [83.4, 16564.0], [83.5, 16564.0], [83.6, 16564.0], [83.7, 16574.0], [83.8, 16574.0], [83.9, 16574.0], [84.0, 16574.0], [84.1, 16574.0], [84.2, 16574.0], [84.3, 16652.0], [84.4, 16652.0], [84.5, 16652.0], [84.6, 16652.0], [84.7, 16652.0], [84.8, 16685.0], [84.9, 16685.0], [85.0, 16685.0], [85.1, 16685.0], [85.2, 16685.0], [85.3, 16687.0], [85.4, 16687.0], [85.5, 16687.0], [85.6, 16687.0], [85.7, 16687.0], [85.8, 16945.0], [85.9, 16945.0], [86.0, 16945.0], [86.1, 16945.0], [86.2, 16945.0], [86.3, 16945.0], [86.4, 17094.0], [86.5, 17094.0], [86.6, 17094.0], [86.7, 17094.0], [86.8, 17094.0], [86.9, 17238.0], [87.0, 17238.0], [87.1, 17238.0], [87.2, 17238.0], [87.3, 17238.0], [87.4, 17266.0], [87.5, 17266.0], [87.6, 17266.0], [87.7, 17266.0], [87.8, 17266.0], [87.9, 17268.0], [88.0, 17268.0], [88.1, 17268.0], [88.2, 17268.0], [88.3, 17268.0], [88.4, 17268.0], [88.5, 17311.0], [88.6, 17311.0], [88.7, 17311.0], [88.8, 17311.0], [88.9, 17311.0], [89.0, 17383.0], [89.1, 17383.0], [89.2, 17383.0], [89.3, 17383.0], [89.4, 17383.0], [89.5, 17439.0], [89.6, 17439.0], [89.7, 17439.0], [89.8, 17439.0], [89.9, 17439.0], [90.0, 17439.0], [90.1, 17449.0], [90.2, 17449.0], [90.3, 17449.0], [90.4, 17449.0], [90.5, 17449.0], [90.6, 17489.0], [90.7, 17489.0], [90.8, 17489.0], [90.9, 17489.0], [91.0, 17489.0], [91.1, 17507.0], [91.2, 17507.0], [91.3, 17507.0], [91.4, 17507.0], [91.5, 17507.0], [91.6, 17508.0], [91.7, 17508.0], [91.8, 17508.0], [91.9, 17508.0], [92.0, 17508.0], [92.1, 17508.0], [92.2, 17511.0], [92.3, 17511.0], [92.4, 17511.0], [92.5, 17511.0], [92.6, 17511.0], [92.7, 17532.0], [92.8, 17532.0], [92.9, 17532.0], [93.0, 17532.0], [93.1, 17532.0], [93.2, 17536.0], [93.3, 17536.0], [93.4, 17536.0], [93.5, 17536.0], [93.6, 17536.0], [93.7, 17549.0], [93.8, 17549.0], [93.9, 17549.0], [94.0, 17549.0], [94.1, 17549.0], [94.2, 17549.0], [94.3, 17599.0], [94.4, 17599.0], [94.5, 17599.0], [94.6, 17599.0], [94.7, 17599.0], [94.8, 17613.0], [94.9, 17613.0], [95.0, 17613.0], [95.1, 17613.0], [95.2, 17613.0], [95.3, 17618.0], [95.4, 17618.0], [95.5, 17618.0], [95.6, 17618.0], [95.7, 17618.0], [95.8, 17652.0], [95.9, 17652.0], [96.0, 17652.0], [96.1, 17652.0], [96.2, 17652.0], [96.3, 17652.0], [96.4, 17655.0], [96.5, 17655.0], [96.6, 17655.0], [96.7, 17655.0], [96.8, 17655.0], [96.9, 17755.0], [97.0, 17755.0], [97.1, 17755.0], [97.2, 17755.0], [97.3, 17755.0], [97.4, 17790.0], [97.5, 17790.0], [97.6, 17790.0], [97.7, 17790.0], [97.8, 17790.0], [97.9, 17845.0], [98.0, 17845.0], [98.1, 17845.0], [98.2, 17845.0], [98.3, 17845.0], [98.4, 17845.0], [98.5, 17848.0], [98.6, 17848.0], [98.7, 17848.0], [98.8, 17848.0], [98.9, 17848.0], [99.0, 17870.0], [99.1, 17870.0], [99.2, 17870.0], [99.3, 17870.0], [99.4, 17870.0], [99.5, 17878.0], [99.6, 17878.0], [99.7, 17878.0], [99.8, 17878.0], [99.9, 17878.0], [100.0, 17878.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 9100.0, "maxY": 19.0, "series": [{"data": [[9100.0, 1.0], [9200.0, 1.0], [9400.0, 1.0], [9300.0, 1.0], [9600.0, 5.0], [9700.0, 8.0], [9800.0, 19.0], [9900.0, 6.0], [10000.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10700.0, 1.0], [10800.0, 4.0], [10900.0, 4.0], [11000.0, 5.0], [11100.0, 3.0], [11500.0, 2.0], [11600.0, 1.0], [11800.0, 2.0], [11900.0, 4.0], [12000.0, 6.0], [12100.0, 1.0], [12200.0, 4.0], [12600.0, 1.0], [12700.0, 1.0], [12800.0, 1.0], [13000.0, 5.0], [13100.0, 4.0], [13200.0, 6.0], [13300.0, 2.0], [13700.0, 2.0], [13800.0, 1.0], [13900.0, 2.0], [14000.0, 2.0], [14100.0, 1.0], [14200.0, 4.0], [14300.0, 7.0], [14400.0, 1.0], [14600.0, 1.0], [14700.0, 1.0], [14900.0, 1.0], [15000.0, 2.0], [15100.0, 1.0], [15200.0, 2.0], [15300.0, 5.0], [15400.0, 5.0], [15500.0, 2.0], [15900.0, 1.0], [16000.0, 3.0], [16100.0, 2.0], [16300.0, 3.0], [16400.0, 3.0], [16500.0, 5.0], [16600.0, 3.0], [17000.0, 1.0], [16900.0, 1.0], [17200.0, 3.0], [17300.0, 2.0], [17400.0, 3.0], [17500.0, 7.0], [17600.0, 4.0], [17700.0, 2.0], [17800.0, 4.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 190.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 190.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 190.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 95.77894736842104, "minX": 1.57171938E12, "maxY": 95.77894736842104, "series": [{"data": [[1.57171938E12, 95.77894736842104]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171938E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9158.0, "minX": 2.0, "maxY": 17870.0, "series": [{"data": [[2.0, 17816.5], [3.0, 17848.0], [4.0, 17870.0], [5.0, 17845.0], [6.0, 17790.0], [7.0, 17652.0], [8.0, 17655.0], [9.0, 17536.0], [10.0, 17508.0], [11.0, 17618.0], [13.0, 17581.0], [14.0, 17439.0], [15.0, 17599.0], [16.0, 17532.0], [17.0, 17511.0], [18.0, 17507.0], [19.0, 17489.0], [20.0, 17449.0], [21.0, 17383.0], [22.0, 17238.0], [23.0, 17311.0], [24.0, 17268.0], [25.0, 17266.0], [26.0, 16945.0], [27.0, 17094.0], [28.0, 16687.0], [29.0, 16685.0], [30.0, 16652.0], [31.0, 16574.0], [33.0, 16564.0], [32.0, 16515.0], [35.0, 16555.5], [37.0, 16333.0], [36.0, 16464.0], [39.0, 16396.0], [38.0, 16418.0], [41.0, 16348.0], [40.0, 16401.0], [43.0, 16056.0], [42.0, 16173.0], [45.0, 16090.0], [44.0, 16176.0], [47.0, 15964.0], [46.0, 16025.0], [49.0, 15537.0], [48.0, 15539.0], [50.0, 15495.0], [52.0, 15413.0], [55.0, 15423.0], [54.0, 15426.0], [57.0, 15398.0], [56.0, 15288.0], [59.0, 15337.0], [58.0, 15391.0], [61.0, 15251.0], [60.0, 15329.0], [63.0, 15116.0], [62.0, 15060.0], [67.0, 14669.0], [66.0, 14756.0], [65.0, 14966.0], [64.0, 15082.0], [71.0, 14385.0], [70.0, 14395.0], [69.0, 14399.0], [68.0, 14419.0], [73.0, 14338.0], [72.0, 14319.0], [79.0, 14284.0], [78.0, 14214.0], [77.0, 14295.0], [76.0, 14293.666666666666], [83.0, 13884.0], [82.0, 14061.0], [81.0, 13976.0], [80.0, 14176.0], [87.0, 13763.0], [86.0, 13794.0], [85.0, 13957.0], [84.0, 14023.0], [91.0, 13287.0], [90.0, 13314.0], [89.0, 13304.5], [95.0, 13216.0], [94.0, 13231.0], [93.0, 13274.0], [92.0, 13274.0], [99.0, 13173.0], [98.0, 13189.0], [97.0, 13190.0], [96.0, 13127.0], [103.0, 13036.0], [101.0, 13058.0], [100.0, 13073.0], [107.0, 12687.0], [106.0, 12720.0], [105.0, 12811.0], [104.0, 13001.0], [111.0, 12219.0], [110.0, 12200.0], [109.0, 12244.0], [108.0, 12249.0], [115.0, 12076.0], [114.0, 11920.0], [113.0, 12119.0], [112.0, 12040.0], [119.0, 11973.0], [118.0, 12048.0], [117.0, 12058.0], [116.0, 12071.0], [123.0, 11883.0], [122.0, 11909.0], [121.0, 11915.0], [120.0, 12030.0], [127.0, 11540.0], [126.0, 11598.0], [125.0, 11666.0], [124.0, 11862.0], [135.0, 10987.0], [134.0, 11064.0], [133.0, 11070.0], [132.0, 11071.0], [131.0, 11100.0], [130.0, 11114.0], [129.0, 11076.0], [143.0, 10816.0], [142.0, 10832.0], [141.0, 10839.0], [140.0, 10827.0], [139.0, 10993.0], [138.0, 10928.0], [136.0, 11038.0], [151.0, 9836.0], [150.0, 9913.0], [148.0, 10019.0], [147.0, 10435.0], [146.0, 10508.0], [145.0, 10636.0], [144.0, 10727.0], [159.0, 9891.666666666666], [156.0, 9932.0], [155.0, 9836.0], [154.0, 9941.0], [153.0, 9910.0], [163.0, 9750.0], [162.0, 9848.0], [161.0, 9855.0], [160.0, 9871.0], [175.0, 9802.0], [174.0, 9802.0], [173.0, 9830.5], [171.0, 9842.4], [170.0, 9684.0], [183.0, 9743.0], [182.0, 9752.0], [181.0, 9655.0], [180.0, 9738.0], [179.0, 9775.0], [178.0, 9781.0], [176.0, 9797.0], [190.0, 9158.0], [189.0, 9266.0], [188.0, 9391.5], [186.0, 9603.0], [185.0, 9670.5]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[95.77368421052633, 13315.015789473686]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 190.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1637.6833333333334, "minX": 1.57171938E12, "maxY": 5098.583333333333, "series": [{"data": [[1.57171938E12, 5098.583333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57171938E12, 1637.6833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171938E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13315.015789473686, "minX": 1.57171938E12, "maxY": 13315.015789473686, "series": [{"data": [[1.57171938E12, 13315.015789473686]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171938E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13218.15263157895, "minX": 1.57171938E12, "maxY": 13218.15263157895, "series": [{"data": [[1.57171938E12, 13218.15263157895]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171938E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2960.1368421052653, "minX": 1.57171938E12, "maxY": 2960.1368421052653, "series": [{"data": [[1.57171938E12, 2960.1368421052653]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171938E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9158.0, "minX": 1.57171938E12, "maxY": 17878.0, "series": [{"data": [[1.57171938E12, 17878.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57171938E12, 9158.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57171938E12, 17448.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57171938E12, 17870.72]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57171938E12, 17615.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171938E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 9512.5, "minX": 7.0, "maxY": 17845.0, "series": [{"data": [[8.0, 9512.5], [18.0, 13189.5], [38.0, 9842.0], [19.0, 12058.0], [20.0, 15350.5], [7.0, 17845.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 9413.5, "minX": 7.0, "maxY": 17745.0, "series": [{"data": [[8.0, 9413.5], [18.0, 13091.0], [38.0, 9736.0], [19.0, 11961.0], [20.0, 15260.0], [7.0, 17745.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.57171938E12, "maxY": 3.1666666666666665, "series": [{"data": [[1.57171938E12, 3.1666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171938E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.57171938E12, "maxY": 3.1666666666666665, "series": [{"data": [[1.57171938E12, 3.1666666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171938E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.57171938E12, "maxY": 3.1666666666666665, "series": [{"data": [[1.57171938E12, 3.1666666666666665]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171938E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.1666666666666665, "minX": 1.57171938E12, "maxY": 3.1666666666666665, "series": [{"data": [[1.57171938E12, 3.1666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171938E12, "title": "Total Transactions Per Second"}},
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

