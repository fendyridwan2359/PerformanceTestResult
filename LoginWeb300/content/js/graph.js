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
        data: {"result": {"minY": 11234.0, "minX": 0.0, "maxY": 35303.0, "series": [{"data": [[0.0, 11234.0], [0.1, 11234.0], [0.2, 11234.0], [0.3, 11234.0], [0.4, 11241.0], [0.5, 11241.0], [0.6, 11241.0], [0.7, 11244.0], [0.8, 11244.0], [0.9, 11244.0], [1.0, 11245.0], [1.1, 11245.0], [1.2, 11245.0], [1.3, 11245.0], [1.4, 11247.0], [1.5, 11247.0], [1.6, 11247.0], [1.7, 12946.0], [1.8, 12946.0], [1.9, 12946.0], [2.0, 12946.0], [2.1, 12946.0], [2.2, 12946.0], [2.3, 12946.0], [2.4, 12946.0], [2.5, 12946.0], [2.6, 12946.0], [2.7, 12949.0], [2.8, 12949.0], [2.9, 12949.0], [3.0, 12952.0], [3.1, 12952.0], [3.2, 12952.0], [3.3, 12952.0], [3.4, 15178.0], [3.5, 15178.0], [3.6, 15178.0], [3.7, 15298.0], [3.8, 15298.0], [3.9, 15298.0], [4.0, 15300.0], [4.1, 15300.0], [4.2, 15300.0], [4.3, 15300.0], [4.4, 15300.0], [4.5, 15300.0], [4.6, 15300.0], [4.7, 15302.0], [4.8, 15302.0], [4.9, 15302.0], [5.0, 17207.0], [5.1, 17207.0], [5.2, 17207.0], [5.3, 17207.0], [5.4, 17303.0], [5.5, 17303.0], [5.6, 17303.0], [5.7, 17415.0], [5.8, 17415.0], [5.9, 17415.0], [6.0, 17538.0], [6.1, 17538.0], [6.2, 17538.0], [6.3, 17538.0], [6.4, 17540.0], [6.5, 17540.0], [6.6, 17540.0], [6.7, 17544.0], [6.8, 17544.0], [6.9, 17544.0], [7.0, 19318.0], [7.1, 19318.0], [7.2, 19318.0], [7.3, 19318.0], [7.4, 19450.0], [7.5, 19450.0], [7.6, 19450.0], [7.7, 19686.0], [7.8, 19686.0], [7.9, 19686.0], [8.0, 19694.0], [8.1, 19694.0], [8.2, 19694.0], [8.3, 19694.0], [8.4, 19694.0], [8.5, 19694.0], [8.6, 19694.0], [8.7, 21346.0], [8.8, 21346.0], [8.9, 21346.0], [9.0, 21512.0], [9.1, 21512.0], [9.2, 21512.0], [9.3, 21512.0], [9.4, 21877.0], [9.5, 21877.0], [9.6, 21877.0], [9.7, 21879.0], [9.8, 21879.0], [9.9, 21879.0], [10.0, 21883.0], [10.1, 21883.0], [10.2, 21883.0], [10.3, 21883.0], [10.4, 23411.0], [10.5, 23411.0], [10.6, 23411.0], [10.7, 23531.0], [10.8, 23531.0], [10.9, 23531.0], [11.0, 23531.0], [11.1, 23999.0], [11.2, 23999.0], [11.3, 23999.0], [11.4, 24006.0], [11.5, 24006.0], [11.6, 24006.0], [11.7, 24007.0], [11.8, 24007.0], [11.9, 24007.0], [12.0, 24007.0], [12.1, 25465.0], [12.2, 25465.0], [12.3, 25465.0], [12.4, 25577.0], [12.5, 25577.0], [12.6, 25577.0], [12.7, 26181.0], [12.8, 26181.0], [12.9, 26181.0], [13.0, 26181.0], [13.1, 26183.0], [13.2, 26183.0], [13.3, 26183.0], [13.4, 26183.0], [13.5, 26183.0], [13.6, 26183.0], [13.7, 27503.0], [13.8, 27503.0], [13.9, 27503.0], [14.0, 27503.0], [14.1, 27624.0], [14.2, 27624.0], [14.3, 27624.0], [14.4, 28336.0], [14.5, 28336.0], [14.6, 28336.0], [14.7, 28337.0], [14.8, 28337.0], [14.9, 28337.0], [15.0, 28337.0], [15.1, 28339.0], [15.2, 28339.0], [15.3, 28339.0], [15.4, 29612.0], [15.5, 29612.0], [15.6, 29612.0], [15.7, 29728.0], [15.8, 29728.0], [15.9, 29728.0], [16.0, 29728.0], [16.1, 30582.0], [16.2, 30582.0], [16.3, 30582.0], [16.4, 30583.0], [16.5, 30583.0], [16.6, 30583.0], [16.7, 30583.0], [16.8, 30583.0], [16.9, 30583.0], [17.0, 30583.0], [17.1, 31690.0], [17.2, 31690.0], [17.3, 31690.0], [17.4, 31805.0], [17.5, 31805.0], [17.6, 31805.0], [17.7, 32745.0], [17.8, 32745.0], [17.9, 32745.0], [18.0, 32745.0], [18.1, 32746.0], [18.2, 32746.0], [18.3, 32746.0], [18.4, 32748.0], [18.5, 32748.0], [18.6, 32748.0], [18.7, 33688.0], [18.8, 33688.0], [18.9, 33688.0], [19.0, 33806.0], [19.1, 33806.0], [19.2, 33806.0], [19.3, 33806.0], [19.4, 34865.0], [19.5, 34865.0], [19.6, 34865.0], [19.7, 34867.0], [19.8, 34867.0], [19.9, 34867.0], [20.0, 34867.0], [20.1, 34867.0], [20.2, 34867.0], [20.3, 34867.0], [20.4, 35052.0], [20.5, 35052.0], [20.6, 35052.0], [20.7, 35053.0], [20.8, 35053.0], [20.9, 35053.0], [21.0, 35054.0], [21.1, 35054.0], [21.2, 35054.0], [21.3, 35054.0], [21.4, 35054.0], [21.5, 35054.0], [21.6, 35054.0], [21.7, 35054.0], [21.8, 35054.0], [21.9, 35054.0], [22.0, 35055.0], [22.1, 35055.0], [22.2, 35055.0], [22.3, 35055.0], [22.4, 35055.0], [22.5, 35055.0], [22.6, 35055.0], [22.7, 35055.0], [22.8, 35055.0], [22.9, 35055.0], [23.0, 35055.0], [23.1, 35055.0], [23.2, 35055.0], [23.3, 35055.0], [23.4, 35055.0], [23.5, 35055.0], [23.6, 35055.0], [23.7, 35055.0], [23.8, 35055.0], [23.9, 35055.0], [24.0, 35056.0], [24.1, 35056.0], [24.2, 35056.0], [24.3, 35056.0], [24.4, 35056.0], [24.5, 35056.0], [24.6, 35056.0], [24.7, 35057.0], [24.8, 35057.0], [24.9, 35057.0], [25.0, 35057.0], [25.1, 35057.0], [25.2, 35057.0], [25.3, 35057.0], [25.4, 35057.0], [25.5, 35057.0], [25.6, 35057.0], [25.7, 35058.0], [25.8, 35058.0], [25.9, 35058.0], [26.0, 35059.0], [26.1, 35059.0], [26.2, 35059.0], [26.3, 35059.0], [26.4, 35060.0], [26.5, 35060.0], [26.6, 35060.0], [26.7, 35064.0], [26.8, 35064.0], [26.9, 35064.0], [27.0, 35065.0], [27.1, 35065.0], [27.2, 35065.0], [27.3, 35065.0], [27.4, 35065.0], [27.5, 35065.0], [27.6, 35065.0], [27.7, 35065.0], [27.8, 35065.0], [27.9, 35065.0], [28.0, 35065.0], [28.1, 35065.0], [28.2, 35065.0], [28.3, 35065.0], [28.4, 35066.0], [28.5, 35066.0], [28.6, 35066.0], [28.7, 35066.0], [28.8, 35066.0], [28.9, 35066.0], [29.0, 35066.0], [29.1, 35066.0], [29.2, 35066.0], [29.3, 35066.0], [29.4, 35067.0], [29.5, 35067.0], [29.6, 35067.0], [29.7, 35067.0], [29.8, 35067.0], [29.9, 35067.0], [30.0, 35067.0], [30.1, 35067.0], [30.2, 35067.0], [30.3, 35067.0], [30.4, 35068.0], [30.5, 35068.0], [30.6, 35068.0], [30.7, 35068.0], [30.8, 35068.0], [30.9, 35068.0], [31.0, 35069.0], [31.1, 35069.0], [31.2, 35069.0], [31.3, 35069.0], [31.4, 35069.0], [31.5, 35069.0], [31.6, 35069.0], [31.7, 35069.0], [31.8, 35069.0], [31.9, 35069.0], [32.0, 35070.0], [32.1, 35070.0], [32.2, 35070.0], [32.3, 35070.0], [32.4, 35070.0], [32.5, 35070.0], [32.6, 35070.0], [32.7, 35070.0], [32.8, 35070.0], [32.9, 35070.0], [33.0, 35070.0], [33.1, 35070.0], [33.2, 35070.0], [33.3, 35070.0], [33.4, 35070.0], [33.5, 35070.0], [33.6, 35070.0], [33.7, 35070.0], [33.8, 35070.0], [33.9, 35070.0], [34.0, 35071.0], [34.1, 35071.0], [34.2, 35071.0], [34.3, 35071.0], [34.4, 35071.0], [34.5, 35071.0], [34.6, 35071.0], [34.7, 35071.0], [34.8, 35071.0], [34.9, 35071.0], [35.0, 35072.0], [35.1, 35072.0], [35.2, 35072.0], [35.3, 35072.0], [35.4, 35072.0], [35.5, 35072.0], [35.6, 35072.0], [35.7, 35072.0], [35.8, 35072.0], [35.9, 35072.0], [36.0, 35072.0], [36.1, 35072.0], [36.2, 35072.0], [36.3, 35072.0], [36.4, 35072.0], [36.5, 35072.0], [36.6, 35072.0], [36.7, 35072.0], [36.8, 35072.0], [36.9, 35072.0], [37.0, 35072.0], [37.1, 35072.0], [37.2, 35072.0], [37.3, 35072.0], [37.4, 35073.0], [37.5, 35073.0], [37.6, 35073.0], [37.7, 35073.0], [37.8, 35073.0], [37.9, 35073.0], [38.0, 35073.0], [38.1, 35073.0], [38.2, 35073.0], [38.3, 35073.0], [38.4, 35073.0], [38.5, 35073.0], [38.6, 35073.0], [38.7, 35073.0], [38.8, 35073.0], [38.9, 35073.0], [39.0, 35074.0], [39.1, 35074.0], [39.2, 35074.0], [39.3, 35074.0], [39.4, 35074.0], [39.5, 35074.0], [39.6, 35074.0], [39.7, 35074.0], [39.8, 35074.0], [39.9, 35074.0], [40.0, 35074.0], [40.1, 35074.0], [40.2, 35074.0], [40.3, 35074.0], [40.4, 35074.0], [40.5, 35074.0], [40.6, 35074.0], [40.7, 35074.0], [40.8, 35074.0], [40.9, 35074.0], [41.0, 35075.0], [41.1, 35075.0], [41.2, 35075.0], [41.3, 35075.0], [41.4, 35075.0], [41.5, 35075.0], [41.6, 35075.0], [41.7, 35075.0], [41.8, 35075.0], [41.9, 35075.0], [42.0, 35075.0], [42.1, 35075.0], [42.2, 35075.0], [42.3, 35075.0], [42.4, 35075.0], [42.5, 35075.0], [42.6, 35075.0], [42.7, 35076.0], [42.8, 35076.0], [42.9, 35076.0], [43.0, 35076.0], [43.1, 35076.0], [43.2, 35076.0], [43.3, 35076.0], [43.4, 35076.0], [43.5, 35076.0], [43.6, 35076.0], [43.7, 35076.0], [43.8, 35076.0], [43.9, 35076.0], [44.0, 35077.0], [44.1, 35077.0], [44.2, 35077.0], [44.3, 35077.0], [44.4, 35077.0], [44.5, 35077.0], [44.6, 35077.0], [44.7, 35077.0], [44.8, 35077.0], [44.9, 35077.0], [45.0, 35077.0], [45.1, 35077.0], [45.2, 35077.0], [45.3, 35077.0], [45.4, 35077.0], [45.5, 35077.0], [45.6, 35077.0], [45.7, 35078.0], [45.8, 35078.0], [45.9, 35078.0], [46.0, 35078.0], [46.1, 35078.0], [46.2, 35078.0], [46.3, 35078.0], [46.4, 35078.0], [46.5, 35078.0], [46.6, 35078.0], [46.7, 35078.0], [46.8, 35078.0], [46.9, 35078.0], [47.0, 35079.0], [47.1, 35079.0], [47.2, 35079.0], [47.3, 35079.0], [47.4, 35079.0], [47.5, 35079.0], [47.6, 35079.0], [47.7, 35079.0], [47.8, 35079.0], [47.9, 35079.0], [48.0, 35079.0], [48.1, 35079.0], [48.2, 35079.0], [48.3, 35079.0], [48.4, 35080.0], [48.5, 35080.0], [48.6, 35080.0], [48.7, 35080.0], [48.8, 35080.0], [48.9, 35080.0], [49.0, 35080.0], [49.1, 35080.0], [49.2, 35080.0], [49.3, 35080.0], [49.4, 35080.0], [49.5, 35080.0], [49.6, 35080.0], [49.7, 35081.0], [49.8, 35081.0], [49.9, 35081.0], [50.0, 35081.0], [50.1, 35081.0], [50.2, 35081.0], [50.3, 35081.0], [50.4, 35081.0], [50.5, 35081.0], [50.6, 35081.0], [50.7, 35081.0], [50.8, 35081.0], [50.9, 35081.0], [51.0, 35081.0], [51.1, 35081.0], [51.2, 35081.0], [51.3, 35081.0], [51.4, 35081.0], [51.5, 35081.0], [51.6, 35081.0], [51.7, 35082.0], [51.8, 35082.0], [51.9, 35082.0], [52.0, 35082.0], [52.1, 35082.0], [52.2, 35082.0], [52.3, 35082.0], [52.4, 35082.0], [52.5, 35082.0], [52.6, 35082.0], [52.7, 35086.0], [52.8, 35086.0], [52.9, 35086.0], [53.0, 35088.0], [53.1, 35088.0], [53.2, 35088.0], [53.3, 35088.0], [53.4, 35089.0], [53.5, 35089.0], [53.6, 35089.0], [53.7, 35090.0], [53.8, 35090.0], [53.9, 35090.0], [54.0, 35090.0], [54.1, 35090.0], [54.2, 35090.0], [54.3, 35090.0], [54.4, 35092.0], [54.5, 35092.0], [54.6, 35092.0], [54.7, 35093.0], [54.8, 35093.0], [54.9, 35093.0], [55.0, 35093.0], [55.1, 35124.0], [55.2, 35124.0], [55.3, 35124.0], [55.4, 35125.0], [55.5, 35125.0], [55.6, 35125.0], [55.7, 35129.0], [55.8, 35129.0], [55.9, 35129.0], [56.0, 35129.0], [56.1, 35130.0], [56.2, 35130.0], [56.3, 35130.0], [56.4, 35131.0], [56.5, 35131.0], [56.6, 35131.0], [56.7, 35133.0], [56.8, 35133.0], [56.9, 35133.0], [57.0, 35133.0], [57.1, 35134.0], [57.2, 35134.0], [57.3, 35134.0], [57.4, 35135.0], [57.5, 35135.0], [57.6, 35135.0], [57.7, 35135.0], [57.8, 35135.0], [57.9, 35135.0], [58.0, 35135.0], [58.1, 35135.0], [58.2, 35135.0], [58.3, 35135.0], [58.4, 35135.0], [58.5, 35135.0], [58.6, 35135.0], [58.7, 35135.0], [58.8, 35135.0], [58.9, 35135.0], [59.0, 35135.0], [59.1, 35136.0], [59.2, 35136.0], [59.3, 35136.0], [59.4, 35136.0], [59.5, 35136.0], [59.6, 35136.0], [59.7, 35137.0], [59.8, 35137.0], [59.9, 35137.0], [60.0, 35137.0], [60.1, 35137.0], [60.2, 35137.0], [60.3, 35137.0], [60.4, 35137.0], [60.5, 35137.0], [60.6, 35137.0], [60.7, 35137.0], [60.8, 35137.0], [60.9, 35137.0], [61.0, 35137.0], [61.1, 35138.0], [61.2, 35138.0], [61.3, 35138.0], [61.4, 35138.0], [61.5, 35138.0], [61.6, 35138.0], [61.7, 35138.0], [61.8, 35138.0], [61.9, 35138.0], [62.0, 35138.0], [62.1, 35139.0], [62.2, 35139.0], [62.3, 35139.0], [62.4, 35139.0], [62.5, 35139.0], [62.6, 35139.0], [62.7, 35139.0], [62.8, 35139.0], [62.9, 35139.0], [63.0, 35139.0], [63.1, 35140.0], [63.2, 35140.0], [63.3, 35140.0], [63.4, 35140.0], [63.5, 35140.0], [63.6, 35140.0], [63.7, 35141.0], [63.8, 35141.0], [63.9, 35141.0], [64.0, 35141.0], [64.1, 35142.0], [64.2, 35142.0], [64.3, 35142.0], [64.4, 35142.0], [64.5, 35142.0], [64.6, 35142.0], [64.7, 35142.0], [64.8, 35142.0], [64.9, 35142.0], [65.0, 35142.0], [65.1, 35143.0], [65.2, 35143.0], [65.3, 35143.0], [65.4, 35143.0], [65.5, 35143.0], [65.6, 35143.0], [65.7, 35143.0], [65.8, 35143.0], [65.9, 35143.0], [66.0, 35143.0], [66.1, 35143.0], [66.2, 35143.0], [66.3, 35143.0], [66.4, 35143.0], [66.5, 35143.0], [66.6, 35143.0], [66.7, 35143.0], [66.8, 35143.0], [66.9, 35143.0], [67.0, 35143.0], [67.1, 35143.0], [67.2, 35143.0], [67.3, 35143.0], [67.4, 35144.0], [67.5, 35144.0], [67.6, 35144.0], [67.7, 35144.0], [67.8, 35144.0], [67.9, 35144.0], [68.0, 35144.0], [68.1, 35144.0], [68.2, 35144.0], [68.3, 35144.0], [68.4, 35145.0], [68.5, 35145.0], [68.6, 35145.0], [68.7, 35146.0], [68.8, 35146.0], [68.9, 35146.0], [69.0, 35146.0], [69.1, 35146.0], [69.2, 35146.0], [69.3, 35146.0], [69.4, 35149.0], [69.5, 35149.0], [69.6, 35149.0], [69.7, 35149.0], [69.8, 35149.0], [69.9, 35149.0], [70.0, 35149.0], [70.1, 35151.0], [70.2, 35151.0], [70.3, 35151.0], [70.4, 35169.0], [70.5, 35169.0], [70.6, 35169.0], [70.7, 35171.0], [70.8, 35171.0], [70.9, 35171.0], [71.0, 35171.0], [71.1, 35171.0], [71.2, 35171.0], [71.3, 35171.0], [71.4, 35171.0], [71.5, 35171.0], [71.6, 35171.0], [71.7, 35171.0], [71.8, 35171.0], [71.9, 35171.0], [72.0, 35171.0], [72.1, 35171.0], [72.2, 35171.0], [72.3, 35171.0], [72.4, 35172.0], [72.5, 35172.0], [72.6, 35172.0], [72.7, 35172.0], [72.8, 35172.0], [72.9, 35172.0], [73.0, 35172.0], [73.1, 35172.0], [73.2, 35172.0], [73.3, 35172.0], [73.4, 35172.0], [73.5, 35172.0], [73.6, 35172.0], [73.7, 35173.0], [73.8, 35173.0], [73.9, 35173.0], [74.0, 35173.0], [74.1, 35173.0], [74.2, 35173.0], [74.3, 35173.0], [74.4, 35173.0], [74.5, 35173.0], [74.6, 35173.0], [74.7, 35173.0], [74.8, 35173.0], [74.9, 35173.0], [75.0, 35173.0], [75.1, 35173.0], [75.2, 35173.0], [75.3, 35173.0], [75.4, 35174.0], [75.5, 35174.0], [75.6, 35174.0], [75.7, 35174.0], [75.8, 35174.0], [75.9, 35174.0], [76.0, 35174.0], [76.1, 35175.0], [76.2, 35175.0], [76.3, 35175.0], [76.4, 35175.0], [76.5, 35175.0], [76.6, 35175.0], [76.7, 35175.0], [76.8, 35175.0], [76.9, 35175.0], [77.0, 35175.0], [77.1, 35175.0], [77.2, 35175.0], [77.3, 35175.0], [77.4, 35175.0], [77.5, 35175.0], [77.6, 35175.0], [77.7, 35175.0], [77.8, 35175.0], [77.9, 35175.0], [78.0, 35175.0], [78.1, 35175.0], [78.2, 35175.0], [78.3, 35175.0], [78.4, 35175.0], [78.5, 35175.0], [78.6, 35175.0], [78.7, 35175.0], [78.8, 35175.0], [78.9, 35175.0], [79.0, 35175.0], [79.1, 35175.0], [79.2, 35175.0], [79.3, 35175.0], [79.4, 35175.0], [79.5, 35175.0], [79.6, 35175.0], [79.7, 35176.0], [79.8, 35176.0], [79.9, 35176.0], [80.0, 35176.0], [80.1, 35176.0], [80.2, 35176.0], [80.3, 35176.0], [80.4, 35176.0], [80.5, 35176.0], [80.6, 35176.0], [80.7, 35176.0], [80.8, 35176.0], [80.9, 35176.0], [81.0, 35176.0], [81.1, 35177.0], [81.2, 35177.0], [81.3, 35177.0], [81.4, 35177.0], [81.5, 35177.0], [81.6, 35177.0], [81.7, 35177.0], [81.8, 35177.0], [81.9, 35177.0], [82.0, 35177.0], [82.1, 35177.0], [82.2, 35177.0], [82.3, 35177.0], [82.4, 35178.0], [82.5, 35178.0], [82.6, 35178.0], [82.7, 35178.0], [82.8, 35178.0], [82.9, 35178.0], [83.0, 35178.0], [83.1, 35178.0], [83.2, 35178.0], [83.3, 35178.0], [83.4, 35178.0], [83.5, 35178.0], [83.6, 35178.0], [83.7, 35178.0], [83.8, 35178.0], [83.9, 35178.0], [84.0, 35178.0], [84.1, 35178.0], [84.2, 35178.0], [84.3, 35178.0], [84.4, 35178.0], [84.5, 35178.0], [84.6, 35178.0], [84.7, 35178.0], [84.8, 35178.0], [84.9, 35178.0], [85.0, 35178.0], [85.1, 35179.0], [85.2, 35179.0], [85.3, 35179.0], [85.4, 35179.0], [85.5, 35179.0], [85.6, 35179.0], [85.7, 35179.0], [85.8, 35179.0], [85.9, 35179.0], [86.0, 35179.0], [86.1, 35179.0], [86.2, 35179.0], [86.3, 35179.0], [86.4, 35179.0], [86.5, 35179.0], [86.6, 35179.0], [86.7, 35180.0], [86.8, 35180.0], [86.9, 35180.0], [87.0, 35180.0], [87.1, 35180.0], [87.2, 35180.0], [87.3, 35180.0], [87.4, 35180.0], [87.5, 35180.0], [87.6, 35180.0], [87.7, 35180.0], [87.8, 35180.0], [87.9, 35180.0], [88.0, 35180.0], [88.1, 35180.0], [88.2, 35180.0], [88.3, 35180.0], [88.4, 35180.0], [88.5, 35180.0], [88.6, 35180.0], [88.7, 35180.0], [88.8, 35180.0], [88.9, 35180.0], [89.0, 35180.0], [89.1, 35181.0], [89.2, 35181.0], [89.3, 35181.0], [89.4, 35181.0], [89.5, 35181.0], [89.6, 35181.0], [89.7, 35181.0], [89.8, 35181.0], [89.9, 35181.0], [90.0, 35181.0], [90.1, 35181.0], [90.2, 35181.0], [90.3, 35181.0], [90.4, 35181.0], [90.5, 35181.0], [90.6, 35181.0], [90.7, 35181.0], [90.8, 35181.0], [90.9, 35181.0], [91.0, 35181.0], [91.1, 35181.0], [91.2, 35181.0], [91.3, 35181.0], [91.4, 35181.0], [91.5, 35181.0], [91.6, 35181.0], [91.7, 35182.0], [91.8, 35182.0], [91.9, 35182.0], [92.0, 35182.0], [92.1, 35182.0], [92.2, 35182.0], [92.3, 35182.0], [92.4, 35182.0], [92.5, 35182.0], [92.6, 35182.0], [92.7, 35183.0], [92.8, 35183.0], [92.9, 35183.0], [93.0, 35183.0], [93.1, 35183.0], [93.2, 35183.0], [93.3, 35183.0], [93.4, 35183.0], [93.5, 35183.0], [93.6, 35183.0], [93.7, 35184.0], [93.8, 35184.0], [93.9, 35184.0], [94.0, 35184.0], [94.1, 35184.0], [94.2, 35184.0], [94.3, 35184.0], [94.4, 35184.0], [94.5, 35184.0], [94.6, 35184.0], [94.7, 35185.0], [94.8, 35185.0], [94.9, 35185.0], [95.0, 35185.0], [95.1, 35185.0], [95.2, 35185.0], [95.3, 35185.0], [95.4, 35186.0], [95.5, 35186.0], [95.6, 35186.0], [95.7, 35186.0], [95.8, 35186.0], [95.9, 35186.0], [96.0, 35186.0], [96.1, 35186.0], [96.2, 35186.0], [96.3, 35186.0], [96.4, 35205.0], [96.5, 35205.0], [96.6, 35205.0], [96.7, 35207.0], [96.8, 35207.0], [96.9, 35207.0], [97.0, 35207.0], [97.1, 35208.0], [97.2, 35208.0], [97.3, 35208.0], [97.4, 35209.0], [97.5, 35209.0], [97.6, 35209.0], [97.7, 35210.0], [97.8, 35210.0], [97.9, 35210.0], [98.0, 35210.0], [98.1, 35210.0], [98.2, 35210.0], [98.3, 35210.0], [98.4, 35211.0], [98.5, 35211.0], [98.6, 35211.0], [98.7, 35214.0], [98.8, 35214.0], [98.9, 35214.0], [99.0, 35215.0], [99.1, 35215.0], [99.2, 35215.0], [99.3, 35215.0], [99.4, 35303.0], [99.5, 35303.0], [99.6, 35303.0], [99.7, 35303.0], [99.8, 35303.0], [99.9, 35303.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 11200.0, "maxY": 124.0, "series": [{"data": [[11200.0, 5.0], [12900.0, 5.0], [15100.0, 1.0], [15300.0, 3.0], [15200.0, 1.0], [17200.0, 1.0], [17300.0, 1.0], [17400.0, 1.0], [17500.0, 3.0], [19300.0, 1.0], [19400.0, 1.0], [19600.0, 3.0], [21300.0, 1.0], [21500.0, 1.0], [21800.0, 3.0], [23400.0, 1.0], [23500.0, 1.0], [23900.0, 1.0], [24000.0, 2.0], [25400.0, 1.0], [25500.0, 1.0], [26100.0, 3.0], [27500.0, 1.0], [27600.0, 1.0], [28300.0, 3.0], [29600.0, 1.0], [29700.0, 1.0], [30500.0, 3.0], [31600.0, 1.0], [31800.0, 1.0], [32700.0, 3.0], [33600.0, 1.0], [33800.0, 1.0], [34800.0, 3.0], [35000.0, 104.0], [35100.0, 124.0], [35200.0, 9.0], [35300.0, 2.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 35300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 60.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 240.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 60.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 240.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 174.77666666666664, "minX": 1.57164174E12, "maxY": 174.77666666666664, "series": [{"data": [[1.57164174E12, 174.77666666666664]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164174E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11242.2, "minX": 2.0, "maxY": 35303.0, "series": [{"data": [[2.0, 35303.0], [7.0, 35215.0], [8.0, 35209.0], [11.0, 35209.333333333336], [89.0, 35177.743589743586], [98.0, 35140.0], [102.0, 35151.0], [100.0, 35149.0], [106.0, 35149.0], [109.0, 35146.0], [114.0, 35143.0], [113.0, 35137.0], [112.0, 35145.0], [119.0, 35142.666666666664], [118.0, 35139.0], [116.0, 35142.9], [123.0, 35138.0], [122.0, 35136.5], [121.0, 35140.25], [127.0, 35136.25], [125.0, 35135.5], [124.0, 35139.0], [135.0, 35126.333333333336], [132.0, 35131.5], [131.0, 35133.0], [129.0, 35134.0], [204.0, 35089.0], [208.0, 35090.6], [215.0, 35078.0], [220.0, 35079.666666666664], [217.0, 35080.333333333336], [222.0, 35075.852941176476], [221.0, 35078.75], [218.0, 35081.0], [223.0, 35071.0], [225.0, 35068.46153846154], [224.0, 35071.5], [239.0, 35055.33333333333], [238.0, 35055.6], [237.0, 35057.5], [247.0, 32745.0], [246.0, 32747.0], [244.0, 33688.0], [243.0, 33806.0], [242.0, 34866.333333333336], [255.0, 28339.0], [254.0, 29612.0], [253.0, 29728.0], [252.0, 30582.666666666668], [249.0, 31690.0], [248.0, 31805.0], [259.0, 27503.0], [269.0, 23411.0], [268.0, 23531.0], [267.0, 24003.0], [265.0, 24006.0], [264.0, 25465.0], [263.0, 25577.0], [262.0, 26182.333333333332], [258.0, 27624.0], [257.0, 28336.5], [275.0, 19694.0], [285.0, 17207.0], [284.0, 17303.0], [283.0, 17415.0], [282.0, 17538.0], [281.0, 17542.0], [279.0, 19318.0], [278.0, 19450.0], [277.0, 19686.0], [276.0, 19694.0], [274.0, 21346.0], [273.0, 21512.0], [272.0, 21879.666666666668], [300.0, 11242.2], [295.0, 12946.0], [294.0, 12946.0], [293.0, 12950.5], [290.0, 15178.0], [289.0, 15300.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[174.77666666666664, 32590.03]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2577.15, "minX": 1.57164174E12, "maxY": 5298.416666666667, "series": [{"data": [[1.57164174E12, 5298.416666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57164174E12, 2577.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164174E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 32590.03, "minX": 1.57164174E12, "maxY": 32590.03, "series": [{"data": [[1.57164174E12, 32590.03]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164174E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 32513.129999999997, "minX": 1.57164174E12, "maxY": 32513.129999999997, "series": [{"data": [[1.57164174E12, 32513.129999999997]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164174E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4592.166666666666, "minX": 1.57164174E12, "maxY": 4592.166666666666, "series": [{"data": [[1.57164174E12, 4592.166666666666]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164174E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11234.0, "minX": 1.57164174E12, "maxY": 34867.0, "series": [{"data": [[1.57164174E12, 34867.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57164174E12, 11234.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57164174E12, 32747.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57164174E12, 34867.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57164174E12, 34812.049999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164174E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 15178.0, "minX": 1.0, "maxY": 35210.0, "series": [{"data": [[1.0, 15178.0], [4.0, 15300.0], [2.0, 30709.0], [5.0, 20520.0], [6.0, 17538.0], [3.0, 30583.0], [231.0, 34867.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 35210.0], [6.0, 17207.0], [231.0, 35135.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 231.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 35210.0, "series": [{"data": [[1.0, 15172.0], [4.0, 15201.0], [2.0, 30608.5], [5.0, 20419.0], [6.0, 17444.0], [3.0, 30484.0], [231.0, 34768.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 35210.0], [6.0, 0.0], [231.0, 35135.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 231.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57164168E12, "maxY": 5.0, "series": [{"data": [[1.57164168E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164168E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57164174E12, "maxY": 3.9833333333333334, "series": [{"data": [[1.57164174E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57164174E12, 3.9833333333333334]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.57164174E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164174E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.57164174E12, "maxY": 4.0, "series": [{"data": [[1.57164174E12, 4.0]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57164174E12, 1.0]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164174E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.57164174E12, "maxY": 4.0, "series": [{"data": [[1.57164174E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57164174E12, 4.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57164174E12, "title": "Total Transactions Per Second"}},
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

