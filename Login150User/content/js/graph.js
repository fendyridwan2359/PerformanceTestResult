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
        data: {"result": {"minY": 10354.0, "minX": 0.0, "maxY": 19147.0, "series": [{"data": [[0.0, 10354.0], [0.1, 10354.0], [0.2, 10354.0], [0.3, 10354.0], [0.4, 10354.0], [0.5, 10354.0], [0.6, 10354.0], [0.7, 10631.0], [0.8, 10631.0], [0.9, 10631.0], [1.0, 10631.0], [1.1, 10631.0], [1.2, 10631.0], [1.3, 10631.0], [1.4, 11055.0], [1.5, 11055.0], [1.6, 11055.0], [1.7, 11055.0], [1.8, 11055.0], [1.9, 11055.0], [2.0, 11318.0], [2.1, 11318.0], [2.2, 11318.0], [2.3, 11318.0], [2.4, 11318.0], [2.5, 11318.0], [2.6, 11318.0], [2.7, 11324.0], [2.8, 11324.0], [2.9, 11324.0], [3.0, 11324.0], [3.1, 11324.0], [3.2, 11324.0], [3.3, 11324.0], [3.4, 11409.0], [3.5, 11409.0], [3.6, 11409.0], [3.7, 11409.0], [3.8, 11409.0], [3.9, 11409.0], [4.0, 11449.0], [4.1, 11449.0], [4.2, 11449.0], [4.3, 11449.0], [4.4, 11449.0], [4.5, 11449.0], [4.6, 11449.0], [4.7, 11593.0], [4.8, 11593.0], [4.9, 11593.0], [5.0, 11593.0], [5.1, 11593.0], [5.2, 11593.0], [5.3, 11593.0], [5.4, 11594.0], [5.5, 11594.0], [5.6, 11594.0], [5.7, 11594.0], [5.8, 11594.0], [5.9, 11594.0], [6.0, 11728.0], [6.1, 11728.0], [6.2, 11728.0], [6.3, 11728.0], [6.4, 11728.0], [6.5, 11728.0], [6.6, 11728.0], [6.7, 12224.0], [6.8, 12224.0], [6.9, 12224.0], [7.0, 12224.0], [7.1, 12224.0], [7.2, 12224.0], [7.3, 12224.0], [7.4, 12348.0], [7.5, 12348.0], [7.6, 12348.0], [7.7, 12348.0], [7.8, 12348.0], [7.9, 12348.0], [8.0, 12355.0], [8.1, 12355.0], [8.2, 12355.0], [8.3, 12355.0], [8.4, 12355.0], [8.5, 12355.0], [8.6, 12355.0], [8.7, 12410.0], [8.8, 12410.0], [8.9, 12410.0], [9.0, 12410.0], [9.1, 12410.0], [9.2, 12410.0], [9.3, 12410.0], [9.4, 12529.0], [9.5, 12529.0], [9.6, 12529.0], [9.7, 12529.0], [9.8, 12529.0], [9.9, 12529.0], [10.0, 12548.0], [10.1, 12548.0], [10.2, 12548.0], [10.3, 12548.0], [10.4, 12548.0], [10.5, 12548.0], [10.6, 12548.0], [10.7, 12563.0], [10.8, 12563.0], [10.9, 12563.0], [11.0, 12563.0], [11.1, 12563.0], [11.2, 12563.0], [11.3, 12563.0], [11.4, 12569.0], [11.5, 12569.0], [11.6, 12569.0], [11.7, 12569.0], [11.8, 12569.0], [11.9, 12569.0], [12.0, 12571.0], [12.1, 12571.0], [12.2, 12571.0], [12.3, 12571.0], [12.4, 12571.0], [12.5, 12571.0], [12.6, 12571.0], [12.7, 12572.0], [12.8, 12572.0], [12.9, 12572.0], [13.0, 12572.0], [13.1, 12572.0], [13.2, 12572.0], [13.3, 12572.0], [13.4, 12579.0], [13.5, 12579.0], [13.6, 12579.0], [13.7, 12579.0], [13.8, 12579.0], [13.9, 12579.0], [14.0, 12606.0], [14.1, 12606.0], [14.2, 12606.0], [14.3, 12606.0], [14.4, 12606.0], [14.5, 12606.0], [14.6, 12606.0], [14.7, 12613.0], [14.8, 12613.0], [14.9, 12613.0], [15.0, 12613.0], [15.1, 12613.0], [15.2, 12613.0], [15.3, 12613.0], [15.4, 12614.0], [15.5, 12614.0], [15.6, 12614.0], [15.7, 12614.0], [15.8, 12614.0], [15.9, 12614.0], [16.0, 12691.0], [16.1, 12691.0], [16.2, 12691.0], [16.3, 12691.0], [16.4, 12691.0], [16.5, 12691.0], [16.6, 12691.0], [16.7, 12720.0], [16.8, 12720.0], [16.9, 12720.0], [17.0, 12720.0], [17.1, 12720.0], [17.2, 12720.0], [17.3, 12720.0], [17.4, 12724.0], [17.5, 12724.0], [17.6, 12724.0], [17.7, 12724.0], [17.8, 12724.0], [17.9, 12724.0], [18.0, 12740.0], [18.1, 12740.0], [18.2, 12740.0], [18.3, 12740.0], [18.4, 12740.0], [18.5, 12740.0], [18.6, 12740.0], [18.7, 12741.0], [18.8, 12741.0], [18.9, 12741.0], [19.0, 12741.0], [19.1, 12741.0], [19.2, 12741.0], [19.3, 12741.0], [19.4, 12747.0], [19.5, 12747.0], [19.6, 12747.0], [19.7, 12747.0], [19.8, 12747.0], [19.9, 12747.0], [20.0, 12748.0], [20.1, 12748.0], [20.2, 12748.0], [20.3, 12748.0], [20.4, 12748.0], [20.5, 12748.0], [20.6, 12748.0], [20.7, 12750.0], [20.8, 12750.0], [20.9, 12750.0], [21.0, 12750.0], [21.1, 12750.0], [21.2, 12750.0], [21.3, 12750.0], [21.4, 12844.0], [21.5, 12844.0], [21.6, 12844.0], [21.7, 12844.0], [21.8, 12844.0], [21.9, 12844.0], [22.0, 12844.0], [22.1, 12898.0], [22.2, 12898.0], [22.3, 12898.0], [22.4, 12898.0], [22.5, 12898.0], [22.6, 12898.0], [22.7, 12977.0], [22.8, 12977.0], [22.9, 12977.0], [23.0, 12977.0], [23.1, 12977.0], [23.2, 12977.0], [23.3, 12977.0], [23.4, 13008.0], [23.5, 13008.0], [23.6, 13008.0], [23.7, 13008.0], [23.8, 13008.0], [23.9, 13008.0], [24.0, 13008.0], [24.1, 13083.0], [24.2, 13083.0], [24.3, 13083.0], [24.4, 13083.0], [24.5, 13083.0], [24.6, 13083.0], [24.7, 13236.0], [24.8, 13236.0], [24.9, 13236.0], [25.0, 13236.0], [25.1, 13236.0], [25.2, 13236.0], [25.3, 13236.0], [25.4, 13278.0], [25.5, 13278.0], [25.6, 13278.0], [25.7, 13278.0], [25.8, 13278.0], [25.9, 13278.0], [26.0, 13278.0], [26.1, 13313.0], [26.2, 13313.0], [26.3, 13313.0], [26.4, 13313.0], [26.5, 13313.0], [26.6, 13313.0], [26.7, 13313.0], [26.8, 13313.0], [26.9, 13313.0], [27.0, 13313.0], [27.1, 13313.0], [27.2, 13313.0], [27.3, 13313.0], [27.4, 13363.0], [27.5, 13363.0], [27.6, 13363.0], [27.7, 13363.0], [27.8, 13363.0], [27.9, 13363.0], [28.0, 13363.0], [28.1, 13558.0], [28.2, 13558.0], [28.3, 13558.0], [28.4, 13558.0], [28.5, 13558.0], [28.6, 13558.0], [28.7, 13561.0], [28.8, 13561.0], [28.9, 13561.0], [29.0, 13561.0], [29.1, 13561.0], [29.2, 13561.0], [29.3, 13561.0], [29.4, 13570.0], [29.5, 13570.0], [29.6, 13570.0], [29.7, 13570.0], [29.8, 13570.0], [29.9, 13570.0], [30.0, 13570.0], [30.1, 13571.0], [30.2, 13571.0], [30.3, 13571.0], [30.4, 13571.0], [30.5, 13571.0], [30.6, 13571.0], [30.7, 13655.0], [30.8, 13655.0], [30.9, 13655.0], [31.0, 13655.0], [31.1, 13655.0], [31.2, 13655.0], [31.3, 13655.0], [31.4, 13681.0], [31.5, 13681.0], [31.6, 13681.0], [31.7, 13681.0], [31.8, 13681.0], [31.9, 13681.0], [32.0, 13681.0], [32.1, 13741.0], [32.2, 13741.0], [32.3, 13741.0], [32.4, 13741.0], [32.5, 13741.0], [32.6, 13741.0], [32.7, 13852.0], [32.8, 13852.0], [32.9, 13852.0], [33.0, 13852.0], [33.1, 13852.0], [33.2, 13852.0], [33.3, 13852.0], [33.4, 13864.0], [33.5, 13864.0], [33.6, 13864.0], [33.7, 13864.0], [33.8, 13864.0], [33.9, 13864.0], [34.0, 13864.0], [34.1, 13871.0], [34.2, 13871.0], [34.3, 13871.0], [34.4, 13871.0], [34.5, 13871.0], [34.6, 13871.0], [34.7, 14004.0], [34.8, 14004.0], [34.9, 14004.0], [35.0, 14004.0], [35.1, 14004.0], [35.2, 14004.0], [35.3, 14004.0], [35.4, 14109.0], [35.5, 14109.0], [35.6, 14109.0], [35.7, 14109.0], [35.8, 14109.0], [35.9, 14109.0], [36.0, 14146.0], [36.1, 14146.0], [36.2, 14146.0], [36.3, 14146.0], [36.4, 14146.0], [36.5, 14146.0], [36.6, 14146.0], [36.7, 14160.0], [36.8, 14160.0], [36.9, 14160.0], [37.0, 14160.0], [37.1, 14160.0], [37.2, 14160.0], [37.3, 14160.0], [37.4, 14197.0], [37.5, 14197.0], [37.6, 14197.0], [37.7, 14197.0], [37.8, 14197.0], [37.9, 14197.0], [38.0, 14204.0], [38.1, 14204.0], [38.2, 14204.0], [38.3, 14204.0], [38.4, 14204.0], [38.5, 14204.0], [38.6, 14204.0], [38.7, 14204.0], [38.8, 14204.0], [38.9, 14204.0], [39.0, 14204.0], [39.1, 14204.0], [39.2, 14204.0], [39.3, 14204.0], [39.4, 14309.0], [39.5, 14309.0], [39.6, 14309.0], [39.7, 14309.0], [39.8, 14309.0], [39.9, 14309.0], [40.0, 14358.0], [40.1, 14358.0], [40.2, 14358.0], [40.3, 14358.0], [40.4, 14358.0], [40.5, 14358.0], [40.6, 14358.0], [40.7, 14379.0], [40.8, 14379.0], [40.9, 14379.0], [41.0, 14379.0], [41.1, 14379.0], [41.2, 14379.0], [41.3, 14379.0], [41.4, 14395.0], [41.5, 14395.0], [41.6, 14395.0], [41.7, 14395.0], [41.8, 14395.0], [41.9, 14395.0], [42.0, 14447.0], [42.1, 14447.0], [42.2, 14447.0], [42.3, 14447.0], [42.4, 14447.0], [42.5, 14447.0], [42.6, 14447.0], [42.7, 14501.0], [42.8, 14501.0], [42.9, 14501.0], [43.0, 14501.0], [43.1, 14501.0], [43.2, 14501.0], [43.3, 14501.0], [43.4, 14552.0], [43.5, 14552.0], [43.6, 14552.0], [43.7, 14552.0], [43.8, 14552.0], [43.9, 14552.0], [44.0, 14795.0], [44.1, 14795.0], [44.2, 14795.0], [44.3, 14795.0], [44.4, 14795.0], [44.5, 14795.0], [44.6, 14795.0], [44.7, 14832.0], [44.8, 14832.0], [44.9, 14832.0], [45.0, 14832.0], [45.1, 14832.0], [45.2, 14832.0], [45.3, 14832.0], [45.4, 14856.0], [45.5, 14856.0], [45.6, 14856.0], [45.7, 14856.0], [45.8, 14856.0], [45.9, 14856.0], [46.0, 14986.0], [46.1, 14986.0], [46.2, 14986.0], [46.3, 14986.0], [46.4, 14986.0], [46.5, 14986.0], [46.6, 14986.0], [46.7, 15047.0], [46.8, 15047.0], [46.9, 15047.0], [47.0, 15047.0], [47.1, 15047.0], [47.2, 15047.0], [47.3, 15047.0], [47.4, 15074.0], [47.5, 15074.0], [47.6, 15074.0], [47.7, 15074.0], [47.8, 15074.0], [47.9, 15074.0], [48.0, 15076.0], [48.1, 15076.0], [48.2, 15076.0], [48.3, 15076.0], [48.4, 15076.0], [48.5, 15076.0], [48.6, 15076.0], [48.7, 15209.0], [48.8, 15209.0], [48.9, 15209.0], [49.0, 15209.0], [49.1, 15209.0], [49.2, 15209.0], [49.3, 15209.0], [49.4, 15211.0], [49.5, 15211.0], [49.6, 15211.0], [49.7, 15211.0], [49.8, 15211.0], [49.9, 15211.0], [50.0, 15213.0], [50.1, 15213.0], [50.2, 15213.0], [50.3, 15213.0], [50.4, 15213.0], [50.5, 15213.0], [50.6, 15213.0], [50.7, 15245.0], [50.8, 15245.0], [50.9, 15245.0], [51.0, 15245.0], [51.1, 15245.0], [51.2, 15245.0], [51.3, 15245.0], [51.4, 15251.0], [51.5, 15251.0], [51.6, 15251.0], [51.7, 15251.0], [51.8, 15251.0], [51.9, 15251.0], [52.0, 15353.0], [52.1, 15353.0], [52.2, 15353.0], [52.3, 15353.0], [52.4, 15353.0], [52.5, 15353.0], [52.6, 15353.0], [52.7, 15529.0], [52.8, 15529.0], [52.9, 15529.0], [53.0, 15529.0], [53.1, 15529.0], [53.2, 15529.0], [53.3, 15529.0], [53.4, 15529.0], [53.5, 15529.0], [53.6, 15529.0], [53.7, 15529.0], [53.8, 15529.0], [53.9, 15529.0], [54.0, 15536.0], [54.1, 15536.0], [54.2, 15536.0], [54.3, 15536.0], [54.4, 15536.0], [54.5, 15536.0], [54.6, 15536.0], [54.7, 15664.0], [54.8, 15664.0], [54.9, 15664.0], [55.0, 15664.0], [55.1, 15664.0], [55.2, 15664.0], [55.3, 15664.0], [55.4, 15736.0], [55.5, 15736.0], [55.6, 15736.0], [55.7, 15736.0], [55.8, 15736.0], [55.9, 15736.0], [56.0, 15749.0], [56.1, 15749.0], [56.2, 15749.0], [56.3, 15749.0], [56.4, 15749.0], [56.5, 15749.0], [56.6, 15749.0], [56.7, 15812.0], [56.8, 15812.0], [56.9, 15812.0], [57.0, 15812.0], [57.1, 15812.0], [57.2, 15812.0], [57.3, 15812.0], [57.4, 15990.0], [57.5, 15990.0], [57.6, 15990.0], [57.7, 15990.0], [57.8, 15990.0], [57.9, 15990.0], [58.0, 15997.0], [58.1, 15997.0], [58.2, 15997.0], [58.3, 15997.0], [58.4, 15997.0], [58.5, 15997.0], [58.6, 15997.0], [58.7, 16007.0], [58.8, 16007.0], [58.9, 16007.0], [59.0, 16007.0], [59.1, 16007.0], [59.2, 16007.0], [59.3, 16007.0], [59.4, 16076.0], [59.5, 16076.0], [59.6, 16076.0], [59.7, 16076.0], [59.8, 16076.0], [59.9, 16076.0], [60.0, 16086.0], [60.1, 16086.0], [60.2, 16086.0], [60.3, 16086.0], [60.4, 16086.0], [60.5, 16086.0], [60.6, 16086.0], [60.7, 16104.0], [60.8, 16104.0], [60.9, 16104.0], [61.0, 16104.0], [61.1, 16104.0], [61.2, 16104.0], [61.3, 16104.0], [61.4, 16140.0], [61.5, 16140.0], [61.6, 16140.0], [61.7, 16140.0], [61.8, 16140.0], [61.9, 16140.0], [62.0, 16158.0], [62.1, 16158.0], [62.2, 16158.0], [62.3, 16158.0], [62.4, 16158.0], [62.5, 16158.0], [62.6, 16158.0], [62.7, 16218.0], [62.8, 16218.0], [62.9, 16218.0], [63.0, 16218.0], [63.1, 16218.0], [63.2, 16218.0], [63.3, 16218.0], [63.4, 16405.0], [63.5, 16405.0], [63.6, 16405.0], [63.7, 16405.0], [63.8, 16405.0], [63.9, 16405.0], [64.0, 16433.0], [64.1, 16433.0], [64.2, 16433.0], [64.3, 16433.0], [64.4, 16433.0], [64.5, 16433.0], [64.6, 16433.0], [64.7, 16486.0], [64.8, 16486.0], [64.9, 16486.0], [65.0, 16486.0], [65.1, 16486.0], [65.2, 16486.0], [65.3, 16486.0], [65.4, 16540.0], [65.5, 16540.0], [65.6, 16540.0], [65.7, 16540.0], [65.8, 16540.0], [65.9, 16540.0], [66.0, 16629.0], [66.1, 16629.0], [66.2, 16629.0], [66.3, 16629.0], [66.4, 16629.0], [66.5, 16629.0], [66.6, 16629.0], [66.7, 16660.0], [66.8, 16660.0], [66.9, 16660.0], [67.0, 16660.0], [67.1, 16660.0], [67.2, 16660.0], [67.3, 16660.0], [67.4, 16717.0], [67.5, 16717.0], [67.6, 16717.0], [67.7, 16717.0], [67.8, 16717.0], [67.9, 16717.0], [68.0, 16741.0], [68.1, 16741.0], [68.2, 16741.0], [68.3, 16741.0], [68.4, 16741.0], [68.5, 16741.0], [68.6, 16741.0], [68.7, 16744.0], [68.8, 16744.0], [68.9, 16744.0], [69.0, 16744.0], [69.1, 16744.0], [69.2, 16744.0], [69.3, 16744.0], [69.4, 16803.0], [69.5, 16803.0], [69.6, 16803.0], [69.7, 16803.0], [69.8, 16803.0], [69.9, 16803.0], [70.0, 16882.0], [70.1, 16882.0], [70.2, 16882.0], [70.3, 16882.0], [70.4, 16882.0], [70.5, 16882.0], [70.6, 16882.0], [70.7, 17025.0], [70.8, 17025.0], [70.9, 17025.0], [71.0, 17025.0], [71.1, 17025.0], [71.2, 17025.0], [71.3, 17025.0], [71.4, 17118.0], [71.5, 17118.0], [71.6, 17118.0], [71.7, 17118.0], [71.8, 17118.0], [71.9, 17118.0], [72.0, 17152.0], [72.1, 17152.0], [72.2, 17152.0], [72.3, 17152.0], [72.4, 17152.0], [72.5, 17152.0], [72.6, 17152.0], [72.7, 17161.0], [72.8, 17161.0], [72.9, 17161.0], [73.0, 17161.0], [73.1, 17161.0], [73.2, 17161.0], [73.3, 17161.0], [73.4, 17182.0], [73.5, 17182.0], [73.6, 17182.0], [73.7, 17182.0], [73.8, 17182.0], [73.9, 17182.0], [74.0, 17235.0], [74.1, 17235.0], [74.2, 17235.0], [74.3, 17235.0], [74.4, 17235.0], [74.5, 17235.0], [74.6, 17235.0], [74.7, 17353.0], [74.8, 17353.0], [74.9, 17353.0], [75.0, 17353.0], [75.1, 17353.0], [75.2, 17353.0], [75.3, 17353.0], [75.4, 17359.0], [75.5, 17359.0], [75.6, 17359.0], [75.7, 17359.0], [75.8, 17359.0], [75.9, 17359.0], [76.0, 17413.0], [76.1, 17413.0], [76.2, 17413.0], [76.3, 17413.0], [76.4, 17413.0], [76.5, 17413.0], [76.6, 17413.0], [76.7, 17415.0], [76.8, 17415.0], [76.9, 17415.0], [77.0, 17415.0], [77.1, 17415.0], [77.2, 17415.0], [77.3, 17415.0], [77.4, 17522.0], [77.5, 17522.0], [77.6, 17522.0], [77.7, 17522.0], [77.8, 17522.0], [77.9, 17522.0], [78.0, 17522.0], [78.1, 17556.0], [78.2, 17556.0], [78.3, 17556.0], [78.4, 17556.0], [78.5, 17556.0], [78.6, 17556.0], [78.7, 17589.0], [78.8, 17589.0], [78.9, 17589.0], [79.0, 17589.0], [79.1, 17589.0], [79.2, 17589.0], [79.3, 17589.0], [79.4, 17615.0], [79.5, 17615.0], [79.6, 17615.0], [79.7, 17615.0], [79.8, 17615.0], [79.9, 17615.0], [80.0, 17615.0], [80.1, 17658.0], [80.2, 17658.0], [80.3, 17658.0], [80.4, 17658.0], [80.5, 17658.0], [80.6, 17658.0], [80.7, 17832.0], [80.8, 17832.0], [80.9, 17832.0], [81.0, 17832.0], [81.1, 17832.0], [81.2, 17832.0], [81.3, 17832.0], [81.4, 17882.0], [81.5, 17882.0], [81.6, 17882.0], [81.7, 17882.0], [81.8, 17882.0], [81.9, 17882.0], [82.0, 17882.0], [82.1, 17893.0], [82.2, 17893.0], [82.3, 17893.0], [82.4, 17893.0], [82.5, 17893.0], [82.6, 17893.0], [82.7, 17975.0], [82.8, 17975.0], [82.9, 17975.0], [83.0, 17975.0], [83.1, 17975.0], [83.2, 17975.0], [83.3, 17975.0], [83.4, 18055.0], [83.5, 18055.0], [83.6, 18055.0], [83.7, 18055.0], [83.8, 18055.0], [83.9, 18055.0], [84.0, 18055.0], [84.1, 18083.0], [84.2, 18083.0], [84.3, 18083.0], [84.4, 18083.0], [84.5, 18083.0], [84.6, 18083.0], [84.7, 18118.0], [84.8, 18118.0], [84.9, 18118.0], [85.0, 18118.0], [85.1, 18118.0], [85.2, 18118.0], [85.3, 18118.0], [85.4, 18173.0], [85.5, 18173.0], [85.6, 18173.0], [85.7, 18173.0], [85.8, 18173.0], [85.9, 18173.0], [86.0, 18173.0], [86.1, 18284.0], [86.2, 18284.0], [86.3, 18284.0], [86.4, 18284.0], [86.5, 18284.0], [86.6, 18284.0], [86.7, 18284.0], [86.8, 18284.0], [86.9, 18284.0], [87.0, 18284.0], [87.1, 18284.0], [87.2, 18284.0], [87.3, 18284.0], [87.4, 18354.0], [87.5, 18354.0], [87.6, 18354.0], [87.7, 18354.0], [87.8, 18354.0], [87.9, 18354.0], [88.0, 18354.0], [88.1, 18451.0], [88.2, 18451.0], [88.3, 18451.0], [88.4, 18451.0], [88.5, 18451.0], [88.6, 18451.0], [88.7, 18462.0], [88.8, 18462.0], [88.9, 18462.0], [89.0, 18462.0], [89.1, 18462.0], [89.2, 18462.0], [89.3, 18462.0], [89.4, 18471.0], [89.5, 18471.0], [89.6, 18471.0], [89.7, 18471.0], [89.8, 18471.0], [89.9, 18471.0], [90.0, 18471.0], [90.1, 18528.0], [90.2, 18528.0], [90.3, 18528.0], [90.4, 18528.0], [90.5, 18528.0], [90.6, 18528.0], [90.7, 18635.0], [90.8, 18635.0], [90.9, 18635.0], [91.0, 18635.0], [91.1, 18635.0], [91.2, 18635.0], [91.3, 18635.0], [91.4, 18684.0], [91.5, 18684.0], [91.6, 18684.0], [91.7, 18684.0], [91.8, 18684.0], [91.9, 18684.0], [92.0, 18684.0], [92.1, 18691.0], [92.2, 18691.0], [92.3, 18691.0], [92.4, 18691.0], [92.5, 18691.0], [92.6, 18691.0], [92.7, 18758.0], [92.8, 18758.0], [92.9, 18758.0], [93.0, 18758.0], [93.1, 18758.0], [93.2, 18758.0], [93.3, 18758.0], [93.4, 18834.0], [93.5, 18834.0], [93.6, 18834.0], [93.7, 18834.0], [93.8, 18834.0], [93.9, 18834.0], [94.0, 18834.0], [94.1, 18894.0], [94.2, 18894.0], [94.3, 18894.0], [94.4, 18894.0], [94.5, 18894.0], [94.6, 18894.0], [94.7, 18936.0], [94.8, 18936.0], [94.9, 18936.0], [95.0, 18936.0], [95.1, 18936.0], [95.2, 18936.0], [95.3, 18936.0], [95.4, 18982.0], [95.5, 18982.0], [95.6, 18982.0], [95.7, 18982.0], [95.8, 18982.0], [95.9, 18982.0], [96.0, 18982.0], [96.1, 19058.0], [96.2, 19058.0], [96.3, 19058.0], [96.4, 19058.0], [96.5, 19058.0], [96.6, 19058.0], [96.7, 19090.0], [96.8, 19090.0], [96.9, 19090.0], [97.0, 19090.0], [97.1, 19090.0], [97.2, 19090.0], [97.3, 19090.0], [97.4, 19110.0], [97.5, 19110.0], [97.6, 19110.0], [97.7, 19110.0], [97.8, 19110.0], [97.9, 19110.0], [98.0, 19110.0], [98.1, 19132.0], [98.2, 19132.0], [98.3, 19132.0], [98.4, 19132.0], [98.5, 19132.0], [98.6, 19132.0], [98.7, 19143.0], [98.8, 19143.0], [98.9, 19143.0], [99.0, 19143.0], [99.1, 19143.0], [99.2, 19143.0], [99.3, 19143.0], [99.4, 19147.0], [99.5, 19147.0], [99.6, 19147.0], [99.7, 19147.0], [99.8, 19147.0], [99.9, 19147.0], [100.0, 19147.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 10300.0, "maxY": 7.0, "series": [{"data": [[10300.0, 1.0], [10600.0, 1.0], [11000.0, 1.0], [11300.0, 2.0], [11400.0, 2.0], [11500.0, 2.0], [11700.0, 1.0], [12200.0, 1.0], [12400.0, 1.0], [12500.0, 7.0], [12600.0, 4.0], [12300.0, 2.0], [12700.0, 7.0], [12800.0, 2.0], [13000.0, 2.0], [13300.0, 3.0], [12900.0, 1.0], [13200.0, 2.0], [13500.0, 4.0], [13600.0, 2.0], [13800.0, 3.0], [13700.0, 1.0], [14000.0, 1.0], [14200.0, 2.0], [14100.0, 4.0], [14300.0, 4.0], [14400.0, 1.0], [14500.0, 2.0], [14800.0, 2.0], [14700.0, 1.0], [14900.0, 1.0], [15000.0, 3.0], [15200.0, 5.0], [15300.0, 1.0], [15500.0, 3.0], [15600.0, 1.0], [15700.0, 2.0], [15800.0, 1.0], [15900.0, 2.0], [16100.0, 3.0], [16000.0, 3.0], [16200.0, 1.0], [17200.0, 1.0], [16500.0, 1.0], [16400.0, 3.0], [16600.0, 2.0], [16700.0, 3.0], [16800.0, 2.0], [17100.0, 4.0], [17000.0, 1.0], [17300.0, 2.0], [17400.0, 2.0], [18200.0, 2.0], [17500.0, 3.0], [17600.0, 2.0], [17800.0, 3.0], [17900.0, 1.0], [18000.0, 2.0], [18100.0, 2.0], [18300.0, 1.0], [18400.0, 3.0], [18500.0, 1.0], [18600.0, 3.0], [18800.0, 2.0], [18900.0, 2.0], [19000.0, 2.0], [18700.0, 1.0], [19100.0, 4.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 149.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 149.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 75.66666666666667, "minX": 1.57171824E12, "maxY": 75.66666666666667, "series": [{"data": [[1.57171824E12, 75.66666666666667]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171824E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10354.0, "minX": 1.0, "maxY": 19147.0, "series": [{"data": [[2.0, 19147.0], [3.0, 19132.0], [4.0, 19110.0], [5.0, 19090.0], [6.0, 18758.0], [7.0, 19058.0], [8.0, 18982.0], [9.0, 18936.0], [10.0, 18894.0], [11.0, 18691.0], [12.0, 18834.0], [13.0, 18462.0], [14.0, 18684.0], [15.0, 18635.0], [16.0, 18528.0], [17.0, 18471.0], [18.0, 18451.0], [19.0, 18354.0], [20.0, 18173.0], [22.0, 18284.0], [23.0, 18083.0], [24.0, 18118.0], [25.0, 18055.0], [26.0, 17975.0], [27.0, 17893.0], [28.0, 17882.0], [29.0, 17832.0], [30.0, 17413.0], [31.0, 17589.0], [33.0, 17658.0], [32.0, 17556.0], [35.0, 17522.0], [34.0, 17615.0], [37.0, 17359.0], [36.0, 17415.0], [39.0, 17161.0], [38.0, 17353.0], [41.0, 17182.0], [40.0, 17235.0], [43.0, 17152.0], [42.0, 16882.0], [45.0, 17118.0], [44.0, 17025.0], [47.0, 16660.0], [46.0, 16803.0], [49.0, 16744.0], [48.0, 16741.0], [51.0, 16561.0], [53.0, 16540.0], [52.0, 16629.0], [55.0, 16433.0], [54.0, 16486.0], [57.0, 16076.0], [56.0, 16218.0], [59.0, 16158.0], [58.0, 16086.0], [61.0, 16140.0], [60.0, 16007.0], [63.0, 15997.0], [62.0, 16104.0], [67.0, 15749.0], [66.0, 15812.0], [65.0, 15736.0], [64.0, 15990.0], [70.0, 15245.0], [69.0, 15536.0], [68.0, 15664.0], [75.0, 15353.0], [74.0, 15047.0], [73.0, 15251.0], [72.0, 15529.0], [79.0, 15076.0], [78.0, 15209.0], [77.0, 15211.0], [76.0, 15213.0], [83.0, 14856.0], [82.0, 14890.5], [80.0, 15074.0], [87.0, 14358.0], [86.0, 14379.0], [85.0, 14832.0], [84.0, 14501.0], [91.0, 14447.0], [90.0, 14309.0], [89.0, 14552.0], [88.0, 14395.0], [95.0, 14150.666666666666], [92.0, 14160.0], [99.0, 14004.0], [98.0, 13741.0], [97.0, 14204.0], [103.0, 13864.0], [102.0, 13721.0], [100.0, 13681.0], [107.0, 13655.0], [106.0, 13558.0], [105.0, 13711.0], [109.0, 13419.5], [115.0, 13313.0], [113.0, 13146.0], [119.0, 12898.0], [118.0, 12724.0], [117.0, 13083.0], [116.0, 12844.0], [123.0, 12747.5], [121.0, 12750.0], [120.0, 12741.0], [126.0, 12569.0], [125.0, 12720.0], [124.0, 12740.0], [135.0, 12606.0], [134.0, 12355.0], [133.0, 12613.5], [132.0, 12548.0], [130.0, 12348.0], [129.0, 12572.0], [128.0, 12610.0], [143.0, 11593.5], [141.0, 11728.0], [140.0, 12410.0], [139.0, 12563.0], [138.0, 12571.0], [137.0, 12401.5], [150.0, 10354.0], [149.0, 10631.0], [148.0, 11055.0], [147.0, 11318.0], [146.0, 11324.0], [145.0, 11449.0], [144.0, 11409.0], [1.0, 19143.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[75.65999999999995, 15262.866666666667]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1284.2666666666667, "minX": 1.57171824E12, "maxY": 4043.383333333333, "series": [{"data": [[1.57171824E12, 4043.383333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57171824E12, 1284.2666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171824E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15262.866666666667, "minX": 1.57171824E12, "maxY": 15262.866666666667, "series": [{"data": [[1.57171824E12, 15262.866666666667]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171824E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 15069.826666666664, "minX": 1.57171824E12, "maxY": 15069.826666666664, "series": [{"data": [[1.57171824E12, 15069.826666666664]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171824E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2214.793333333336, "minX": 1.57171824E12, "maxY": 2214.793333333336, "series": [{"data": [[1.57171824E12, 2214.793333333336]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171824E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10354.0, "minX": 1.57171824E12, "maxY": 19147.0, "series": [{"data": [[1.57171824E12, 19147.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57171824E12, 10354.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57171824E12, 18528.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57171824E12, 19145.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57171824E12, 18959.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171824E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11366.5, "minX": 5.0, "maxY": 17887.5, "series": [{"data": [[18.0, 17887.5], [5.0, 11366.5], [20.0, 16773.5], [21.0, 14648.0], [30.0, 12705.5], [15.0, 13681.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 14552.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 5.0, "maxY": 17787.5, "series": [{"data": [[18.0, 17787.5], [5.0, 11267.5], [20.0, 16674.5], [21.0, 14548.5], [30.0, 12609.0], [15.0, 13581.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.57171824E12, "maxY": 2.5, "series": [{"data": [[1.57171824E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171824E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57171824E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.57171824E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57171824E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171824E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57171824E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.57171824E12, 0.016666666666666666]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57171824E12, 2.4833333333333334]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171824E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57171824E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.57171824E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57171824E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171824E12, "title": "Total Transactions Per Second"}},
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

