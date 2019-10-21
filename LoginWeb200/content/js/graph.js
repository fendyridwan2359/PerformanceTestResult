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
        data: {"result": {"minY": 8866.0, "minX": 0.0, "maxY": 33506.0, "series": [{"data": [[0.0, 8866.0], [0.1, 8866.0], [0.2, 8866.0], [0.3, 8866.0], [0.4, 8866.0], [0.5, 8904.0], [0.6, 8904.0], [0.7, 8904.0], [0.8, 8904.0], [0.9, 8904.0], [1.0, 9119.0], [1.1, 9119.0], [1.2, 9119.0], [1.3, 9119.0], [1.4, 9119.0], [1.5, 9161.0], [1.6, 9161.0], [1.7, 9161.0], [1.8, 9161.0], [1.9, 9161.0], [2.0, 9367.0], [2.1, 9367.0], [2.2, 9367.0], [2.3, 9367.0], [2.4, 9367.0], [2.5, 10558.0], [2.6, 10558.0], [2.7, 10558.0], [2.8, 10558.0], [2.9, 10558.0], [3.0, 10636.0], [3.1, 10636.0], [3.2, 10636.0], [3.3, 10636.0], [3.4, 10636.0], [3.5, 10829.0], [3.6, 10829.0], [3.7, 10829.0], [3.8, 10829.0], [3.9, 10829.0], [4.0, 10833.0], [4.1, 10833.0], [4.2, 10833.0], [4.3, 10833.0], [4.4, 10833.0], [4.5, 11068.0], [4.6, 11068.0], [4.7, 11068.0], [4.8, 11068.0], [4.9, 11068.0], [5.0, 12672.0], [5.1, 12672.0], [5.2, 12672.0], [5.3, 12672.0], [5.4, 12672.0], [5.5, 12714.0], [5.6, 12714.0], [5.7, 12714.0], [5.8, 12714.0], [5.9, 12714.0], [6.0, 12956.0], [6.1, 12956.0], [6.2, 12956.0], [6.3, 12956.0], [6.4, 12956.0], [6.5, 12967.0], [6.6, 12967.0], [6.7, 12967.0], [6.8, 12967.0], [6.9, 12967.0], [7.0, 13110.0], [7.1, 13110.0], [7.2, 13110.0], [7.3, 13110.0], [7.4, 13110.0], [7.5, 14810.0], [7.6, 14810.0], [7.7, 14810.0], [7.8, 14810.0], [7.9, 14810.0], [8.0, 14854.0], [8.1, 14854.0], [8.2, 14854.0], [8.3, 14854.0], [8.4, 14854.0], [8.5, 15274.0], [8.6, 15274.0], [8.7, 15274.0], [8.8, 15274.0], [8.9, 15274.0], [9.0, 15292.0], [9.1, 15292.0], [9.2, 15292.0], [9.3, 15292.0], [9.4, 15292.0], [9.5, 15300.0], [9.6, 15300.0], [9.7, 15300.0], [9.8, 15300.0], [9.9, 15300.0], [10.0, 16966.0], [10.1, 16966.0], [10.2, 16966.0], [10.3, 16966.0], [10.4, 16966.0], [10.5, 16992.0], [10.6, 16992.0], [10.7, 16992.0], [10.8, 16992.0], [10.9, 16992.0], [11.0, 17211.0], [11.1, 17211.0], [11.2, 17211.0], [11.3, 17211.0], [11.4, 17211.0], [11.5, 17259.0], [11.6, 17259.0], [11.7, 17259.0], [11.8, 17259.0], [11.9, 17259.0], [12.0, 17327.0], [12.1, 17327.0], [12.2, 17327.0], [12.3, 17327.0], [12.4, 17327.0], [12.5, 19138.0], [12.6, 19138.0], [12.7, 19138.0], [12.8, 19138.0], [12.9, 19138.0], [13.0, 19141.0], [13.1, 19141.0], [13.2, 19141.0], [13.3, 19141.0], [13.4, 19141.0], [13.5, 19347.0], [13.6, 19347.0], [13.7, 19347.0], [13.8, 19347.0], [13.9, 19347.0], [14.0, 19358.0], [14.1, 19358.0], [14.2, 19358.0], [14.3, 19358.0], [14.4, 19358.0], [14.5, 19381.0], [14.6, 19381.0], [14.7, 19381.0], [14.8, 19381.0], [14.9, 19381.0], [15.0, 21167.0], [15.1, 21167.0], [15.2, 21167.0], [15.3, 21167.0], [15.4, 21167.0], [15.5, 21173.0], [15.6, 21173.0], [15.7, 21173.0], [15.8, 21173.0], [15.9, 21173.0], [16.0, 21516.0], [16.1, 21516.0], [16.2, 21516.0], [16.3, 21516.0], [16.4, 21516.0], [16.5, 21546.0], [16.6, 21546.0], [16.7, 21546.0], [16.8, 21546.0], [16.9, 21546.0], [17.0, 21554.0], [17.1, 21554.0], [17.2, 21554.0], [17.3, 21554.0], [17.4, 21554.0], [17.5, 23258.0], [17.6, 23258.0], [17.7, 23258.0], [17.8, 23258.0], [17.9, 23258.0], [18.0, 23260.0], [18.1, 23260.0], [18.2, 23260.0], [18.3, 23260.0], [18.4, 23260.0], [18.5, 23610.0], [18.6, 23610.0], [18.7, 23610.0], [18.8, 23610.0], [18.9, 23610.0], [19.0, 23762.0], [19.1, 23762.0], [19.2, 23762.0], [19.3, 23762.0], [19.4, 23762.0], [19.5, 23774.0], [19.6, 23774.0], [19.7, 23774.0], [19.8, 23774.0], [19.9, 23774.0], [20.0, 25436.0], [20.1, 25436.0], [20.2, 25436.0], [20.3, 25436.0], [20.4, 25436.0], [20.5, 25479.0], [20.6, 25479.0], [20.7, 25479.0], [20.8, 25479.0], [20.9, 25479.0], [21.0, 25721.0], [21.1, 25721.0], [21.2, 25721.0], [21.3, 25721.0], [21.4, 25721.0], [21.5, 25874.0], [21.6, 25874.0], [21.7, 25874.0], [21.8, 25874.0], [21.9, 25874.0], [22.0, 25914.0], [22.1, 25914.0], [22.2, 25914.0], [22.3, 25914.0], [22.4, 25914.0], [22.5, 27530.0], [22.6, 27530.0], [22.7, 27530.0], [22.8, 27530.0], [22.9, 27530.0], [23.0, 27548.0], [23.1, 27548.0], [23.2, 27548.0], [23.3, 27548.0], [23.4, 27548.0], [23.5, 27816.0], [23.6, 27816.0], [23.7, 27816.0], [23.8, 27816.0], [23.9, 27816.0], [24.0, 27818.0], [24.1, 27818.0], [24.2, 27818.0], [24.3, 27818.0], [24.4, 27818.0], [24.5, 27824.0], [24.6, 27824.0], [24.7, 27824.0], [24.8, 27824.0], [24.9, 27824.0], [25.0, 27829.0], [25.1, 27829.0], [25.2, 27829.0], [25.3, 27829.0], [25.4, 27829.0], [25.5, 27830.0], [25.6, 27830.0], [25.7, 27830.0], [25.8, 27830.0], [25.9, 27830.0], [26.0, 27834.0], [26.1, 27834.0], [26.2, 27834.0], [26.3, 27834.0], [26.4, 27834.0], [26.5, 27852.0], [26.6, 27852.0], [26.7, 27852.0], [26.8, 27852.0], [26.9, 27852.0], [27.0, 27855.0], [27.1, 27855.0], [27.2, 27855.0], [27.3, 27855.0], [27.4, 27855.0], [27.5, 28056.0], [27.6, 28056.0], [27.7, 28056.0], [27.8, 28056.0], [27.9, 28056.0], [28.0, 28074.0], [28.1, 28074.0], [28.2, 28074.0], [28.3, 28074.0], [28.4, 28074.0], [28.5, 28102.0], [28.6, 28102.0], [28.7, 28102.0], [28.8, 28102.0], [28.9, 28102.0], [29.0, 28193.0], [29.1, 28193.0], [29.2, 28193.0], [29.3, 28193.0], [29.4, 28193.0], [29.5, 28204.0], [29.6, 28204.0], [29.7, 28204.0], [29.8, 28204.0], [29.9, 28204.0], [30.0, 28240.0], [30.1, 28240.0], [30.2, 28240.0], [30.3, 28240.0], [30.4, 28240.0], [30.5, 28381.0], [30.6, 28381.0], [30.7, 28381.0], [30.8, 28381.0], [30.9, 28381.0], [31.0, 28423.0], [31.1, 28423.0], [31.2, 28423.0], [31.3, 28423.0], [31.4, 28423.0], [31.5, 28436.0], [31.6, 28436.0], [31.7, 28436.0], [31.8, 28436.0], [31.9, 28436.0], [32.0, 28528.0], [32.1, 28528.0], [32.2, 28528.0], [32.3, 28528.0], [32.4, 28528.0], [32.5, 28568.0], [32.6, 28568.0], [32.7, 28568.0], [32.8, 28568.0], [32.9, 28568.0], [33.0, 28614.0], [33.1, 28614.0], [33.2, 28614.0], [33.3, 28614.0], [33.4, 28614.0], [33.5, 28784.0], [33.6, 28784.0], [33.7, 28784.0], [33.8, 28784.0], [33.9, 28784.0], [34.0, 28793.0], [34.1, 28793.0], [34.2, 28793.0], [34.3, 28793.0], [34.4, 28793.0], [34.5, 28808.0], [34.6, 28808.0], [34.7, 28808.0], [34.8, 28808.0], [34.9, 28808.0], [35.0, 28938.0], [35.1, 28938.0], [35.2, 28938.0], [35.3, 28938.0], [35.4, 28938.0], [35.5, 28952.0], [35.6, 28952.0], [35.7, 28952.0], [35.8, 28952.0], [35.9, 28952.0], [36.0, 28965.0], [36.1, 28965.0], [36.2, 28965.0], [36.3, 28965.0], [36.4, 28965.0], [36.5, 28969.0], [36.6, 28969.0], [36.7, 28969.0], [36.8, 28969.0], [36.9, 28969.0], [37.0, 29123.0], [37.1, 29123.0], [37.2, 29123.0], [37.3, 29123.0], [37.4, 29123.0], [37.5, 29171.0], [37.6, 29171.0], [37.7, 29171.0], [37.8, 29171.0], [37.9, 29171.0], [38.0, 29202.0], [38.1, 29202.0], [38.2, 29202.0], [38.3, 29202.0], [38.4, 29202.0], [38.5, 29233.0], [38.6, 29233.0], [38.7, 29233.0], [38.8, 29233.0], [38.9, 29233.0], [39.0, 29332.0], [39.1, 29332.0], [39.2, 29332.0], [39.3, 29332.0], [39.4, 29332.0], [39.5, 29399.0], [39.6, 29399.0], [39.7, 29399.0], [39.8, 29399.0], [39.9, 29399.0], [40.0, 29422.0], [40.1, 29422.0], [40.2, 29422.0], [40.3, 29422.0], [40.4, 29422.0], [40.5, 29482.0], [40.6, 29482.0], [40.7, 29482.0], [40.8, 29482.0], [40.9, 29482.0], [41.0, 29493.0], [41.1, 29493.0], [41.2, 29493.0], [41.3, 29493.0], [41.4, 29493.0], [41.5, 29528.0], [41.6, 29528.0], [41.7, 29528.0], [41.8, 29528.0], [41.9, 29528.0], [42.0, 29682.0], [42.1, 29682.0], [42.2, 29682.0], [42.3, 29682.0], [42.4, 29682.0], [42.5, 29694.0], [42.6, 29694.0], [42.7, 29694.0], [42.8, 29694.0], [42.9, 29694.0], [43.0, 29722.0], [43.1, 29722.0], [43.2, 29722.0], [43.3, 29722.0], [43.4, 29722.0], [43.5, 29800.0], [43.6, 29800.0], [43.7, 29800.0], [43.8, 29800.0], [43.9, 29800.0], [44.0, 29867.0], [44.1, 29867.0], [44.2, 29867.0], [44.3, 29867.0], [44.4, 29867.0], [44.5, 29869.0], [44.6, 29869.0], [44.7, 29869.0], [44.8, 29869.0], [44.9, 29869.0], [45.0, 30024.0], [45.1, 30024.0], [45.2, 30024.0], [45.3, 30024.0], [45.4, 30024.0], [45.5, 30087.0], [45.6, 30087.0], [45.7, 30087.0], [45.8, 30087.0], [45.9, 30087.0], [46.0, 30113.0], [46.1, 30113.0], [46.2, 30113.0], [46.3, 30113.0], [46.4, 30113.0], [46.5, 30205.0], [46.6, 30205.0], [46.7, 30205.0], [46.8, 30205.0], [46.9, 30205.0], [47.0, 30206.0], [47.1, 30206.0], [47.2, 30206.0], [47.3, 30206.0], [47.4, 30206.0], [47.5, 30323.0], [47.6, 30323.0], [47.7, 30323.0], [47.8, 30323.0], [47.9, 30323.0], [48.0, 30339.0], [48.1, 30339.0], [48.2, 30339.0], [48.3, 30339.0], [48.4, 30339.0], [48.5, 30367.0], [48.6, 30367.0], [48.7, 30367.0], [48.8, 30367.0], [48.9, 30367.0], [49.0, 30435.0], [49.1, 30435.0], [49.2, 30435.0], [49.3, 30435.0], [49.4, 30435.0], [49.5, 30495.0], [49.6, 30495.0], [49.7, 30495.0], [49.8, 30495.0], [49.9, 30495.0], [50.0, 30533.0], [50.1, 30533.0], [50.2, 30533.0], [50.3, 30533.0], [50.4, 30533.0], [50.5, 30618.0], [50.6, 30618.0], [50.7, 30618.0], [50.8, 30618.0], [50.9, 30618.0], [51.0, 30658.0], [51.1, 30658.0], [51.2, 30658.0], [51.3, 30658.0], [51.4, 30658.0], [51.5, 30661.0], [51.6, 30661.0], [51.7, 30661.0], [51.8, 30661.0], [51.9, 30661.0], [52.0, 30715.0], [52.1, 30715.0], [52.2, 30715.0], [52.3, 30715.0], [52.4, 30715.0], [52.5, 30840.0], [52.6, 30840.0], [52.7, 30840.0], [52.8, 30840.0], [52.9, 30840.0], [53.0, 30864.0], [53.1, 30864.0], [53.2, 30864.0], [53.3, 30864.0], [53.4, 30864.0], [53.5, 30905.0], [53.6, 30905.0], [53.7, 30905.0], [53.8, 30905.0], [53.9, 30905.0], [54.0, 30985.0], [54.1, 30985.0], [54.2, 30985.0], [54.3, 30985.0], [54.4, 30985.0], [54.5, 31075.0], [54.6, 31075.0], [54.7, 31075.0], [54.8, 31075.0], [54.9, 31075.0], [55.0, 31142.0], [55.1, 31142.0], [55.2, 31142.0], [55.3, 31142.0], [55.4, 31142.0], [55.5, 31147.0], [55.6, 31147.0], [55.7, 31147.0], [55.8, 31147.0], [55.9, 31147.0], [56.0, 31160.0], [56.1, 31160.0], [56.2, 31160.0], [56.3, 31160.0], [56.4, 31160.0], [56.5, 31254.0], [56.6, 31254.0], [56.7, 31254.0], [56.8, 31254.0], [56.9, 31254.0], [57.0, 31269.0], [57.1, 31269.0], [57.2, 31269.0], [57.3, 31269.0], [57.4, 31269.0], [57.5, 31313.0], [57.6, 31313.0], [57.7, 31313.0], [57.8, 31313.0], [57.9, 31313.0], [58.0, 31425.0], [58.1, 31425.0], [58.2, 31425.0], [58.3, 31425.0], [58.4, 31425.0], [58.5, 31431.0], [58.6, 31431.0], [58.7, 31431.0], [58.8, 31431.0], [58.9, 31431.0], [59.0, 31493.0], [59.1, 31493.0], [59.2, 31493.0], [59.3, 31493.0], [59.4, 31493.0], [59.5, 31575.0], [59.6, 31575.0], [59.7, 31575.0], [59.8, 31575.0], [59.9, 31575.0], [60.0, 31588.0], [60.1, 31588.0], [60.2, 31588.0], [60.3, 31588.0], [60.4, 31588.0], [60.5, 31722.0], [60.6, 31722.0], [60.7, 31722.0], [60.8, 31722.0], [60.9, 31722.0], [61.0, 31753.0], [61.1, 31753.0], [61.2, 31753.0], [61.3, 31753.0], [61.4, 31753.0], [61.5, 31929.0], [61.6, 31929.0], [61.7, 31929.0], [61.8, 31929.0], [61.9, 31929.0], [62.0, 32010.0], [62.1, 32010.0], [62.2, 32010.0], [62.3, 32010.0], [62.4, 32010.0], [62.5, 32012.0], [62.6, 32012.0], [62.7, 32012.0], [62.8, 32012.0], [62.9, 32012.0], [63.0, 32021.0], [63.1, 32021.0], [63.2, 32021.0], [63.3, 32021.0], [63.4, 32021.0], [63.5, 32054.0], [63.6, 32054.0], [63.7, 32054.0], [63.8, 32054.0], [63.9, 32054.0], [64.0, 32113.0], [64.1, 32113.0], [64.2, 32113.0], [64.3, 32113.0], [64.4, 32113.0], [64.5, 32232.0], [64.6, 32232.0], [64.7, 32232.0], [64.8, 32232.0], [64.9, 32232.0], [65.0, 32303.0], [65.1, 32303.0], [65.2, 32303.0], [65.3, 32303.0], [65.4, 32303.0], [65.5, 32308.0], [65.6, 32308.0], [65.7, 32308.0], [65.8, 32308.0], [65.9, 32308.0], [66.0, 32316.0], [66.1, 32316.0], [66.2, 32316.0], [66.3, 32316.0], [66.4, 32316.0], [66.5, 32384.0], [66.6, 32384.0], [66.7, 32384.0], [66.8, 32384.0], [66.9, 32384.0], [67.0, 32485.0], [67.1, 32485.0], [67.2, 32485.0], [67.3, 32485.0], [67.4, 32485.0], [67.5, 32555.0], [67.6, 32555.0], [67.7, 32555.0], [67.8, 32555.0], [67.9, 32555.0], [68.0, 32563.0], [68.1, 32563.0], [68.2, 32563.0], [68.3, 32563.0], [68.4, 32563.0], [68.5, 32595.0], [68.6, 32595.0], [68.7, 32595.0], [68.8, 32595.0], [68.9, 32595.0], [69.0, 32670.0], [69.1, 32670.0], [69.2, 32670.0], [69.3, 32670.0], [69.4, 32670.0], [69.5, 32786.0], [69.6, 32786.0], [69.7, 32786.0], [69.8, 32786.0], [69.9, 32786.0], [70.0, 32788.0], [70.1, 32788.0], [70.2, 32788.0], [70.3, 32788.0], [70.4, 32788.0], [70.5, 32876.0], [70.6, 32876.0], [70.7, 32876.0], [70.8, 32876.0], [70.9, 32876.0], [71.0, 32882.0], [71.1, 32882.0], [71.2, 32882.0], [71.3, 32882.0], [71.4, 32882.0], [71.5, 33012.0], [71.6, 33012.0], [71.7, 33012.0], [71.8, 33012.0], [71.9, 33012.0], [72.0, 33029.0], [72.1, 33029.0], [72.2, 33029.0], [72.3, 33029.0], [72.4, 33029.0], [72.5, 33127.0], [72.6, 33127.0], [72.7, 33127.0], [72.8, 33127.0], [72.9, 33127.0], [73.0, 33158.0], [73.1, 33158.0], [73.2, 33158.0], [73.3, 33158.0], [73.4, 33158.0], [73.5, 33188.0], [73.6, 33188.0], [73.7, 33188.0], [73.8, 33188.0], [73.9, 33188.0], [74.0, 33200.0], [74.1, 33200.0], [74.2, 33200.0], [74.3, 33200.0], [74.4, 33200.0], [74.5, 33202.0], [74.6, 33202.0], [74.7, 33202.0], [74.8, 33202.0], [74.9, 33202.0], [75.0, 33204.0], [75.1, 33204.0], [75.2, 33204.0], [75.3, 33204.0], [75.4, 33204.0], [75.5, 33206.0], [75.6, 33206.0], [75.7, 33206.0], [75.8, 33206.0], [75.9, 33206.0], [76.0, 33206.0], [76.1, 33206.0], [76.2, 33206.0], [76.3, 33206.0], [76.4, 33206.0], [76.5, 33206.0], [76.6, 33206.0], [76.7, 33206.0], [76.8, 33206.0], [76.9, 33206.0], [77.0, 33208.0], [77.1, 33208.0], [77.2, 33208.0], [77.3, 33208.0], [77.4, 33208.0], [77.5, 33212.0], [77.6, 33212.0], [77.7, 33212.0], [77.8, 33212.0], [77.9, 33212.0], [78.0, 33213.0], [78.1, 33213.0], [78.2, 33213.0], [78.3, 33213.0], [78.4, 33213.0], [78.5, 33214.0], [78.6, 33214.0], [78.7, 33214.0], [78.8, 33214.0], [78.9, 33214.0], [79.0, 33214.0], [79.1, 33214.0], [79.2, 33214.0], [79.3, 33214.0], [79.4, 33214.0], [79.5, 33215.0], [79.6, 33215.0], [79.7, 33215.0], [79.8, 33215.0], [79.9, 33215.0], [80.0, 33216.0], [80.1, 33216.0], [80.2, 33216.0], [80.3, 33216.0], [80.4, 33216.0], [80.5, 33216.0], [80.6, 33216.0], [80.7, 33216.0], [80.8, 33216.0], [80.9, 33216.0], [81.0, 33217.0], [81.1, 33217.0], [81.2, 33217.0], [81.3, 33217.0], [81.4, 33217.0], [81.5, 33217.0], [81.6, 33217.0], [81.7, 33217.0], [81.8, 33217.0], [81.9, 33217.0], [82.0, 33218.0], [82.1, 33218.0], [82.2, 33218.0], [82.3, 33218.0], [82.4, 33218.0], [82.5, 33221.0], [82.6, 33221.0], [82.7, 33221.0], [82.8, 33221.0], [82.9, 33221.0], [83.0, 33225.0], [83.1, 33225.0], [83.2, 33225.0], [83.3, 33225.0], [83.4, 33225.0], [83.5, 33231.0], [83.6, 33231.0], [83.7, 33231.0], [83.8, 33231.0], [83.9, 33231.0], [84.0, 33231.0], [84.1, 33231.0], [84.2, 33231.0], [84.3, 33231.0], [84.4, 33231.0], [84.5, 33235.0], [84.6, 33235.0], [84.7, 33235.0], [84.8, 33235.0], [84.9, 33235.0], [85.0, 33238.0], [85.1, 33238.0], [85.2, 33238.0], [85.3, 33238.0], [85.4, 33238.0], [85.5, 33239.0], [85.6, 33239.0], [85.7, 33239.0], [85.8, 33239.0], [85.9, 33239.0], [86.0, 33240.0], [86.1, 33240.0], [86.2, 33240.0], [86.3, 33240.0], [86.4, 33240.0], [86.5, 33240.0], [86.6, 33240.0], [86.7, 33240.0], [86.8, 33240.0], [86.9, 33240.0], [87.0, 33241.0], [87.1, 33241.0], [87.2, 33241.0], [87.3, 33241.0], [87.4, 33241.0], [87.5, 33242.0], [87.6, 33242.0], [87.7, 33242.0], [87.8, 33242.0], [87.9, 33242.0], [88.0, 33247.0], [88.1, 33247.0], [88.2, 33247.0], [88.3, 33247.0], [88.4, 33247.0], [88.5, 33248.0], [88.6, 33248.0], [88.7, 33248.0], [88.8, 33248.0], [88.9, 33248.0], [89.0, 33248.0], [89.1, 33248.0], [89.2, 33248.0], [89.3, 33248.0], [89.4, 33248.0], [89.5, 33250.0], [89.6, 33250.0], [89.7, 33250.0], [89.8, 33250.0], [89.9, 33250.0], [90.0, 33250.0], [90.1, 33250.0], [90.2, 33250.0], [90.3, 33250.0], [90.4, 33250.0], [90.5, 33250.0], [90.6, 33250.0], [90.7, 33250.0], [90.8, 33250.0], [90.9, 33250.0], [91.0, 33250.0], [91.1, 33250.0], [91.2, 33250.0], [91.3, 33250.0], [91.4, 33250.0], [91.5, 33250.0], [91.6, 33250.0], [91.7, 33250.0], [91.8, 33250.0], [91.9, 33250.0], [92.0, 33253.0], [92.1, 33253.0], [92.2, 33253.0], [92.3, 33253.0], [92.4, 33253.0], [92.5, 33253.0], [92.6, 33253.0], [92.7, 33253.0], [92.8, 33253.0], [92.9, 33253.0], [93.0, 33253.0], [93.1, 33253.0], [93.2, 33253.0], [93.3, 33253.0], [93.4, 33253.0], [93.5, 33256.0], [93.6, 33256.0], [93.7, 33256.0], [93.8, 33256.0], [93.9, 33256.0], [94.0, 33270.0], [94.1, 33270.0], [94.2, 33270.0], [94.3, 33270.0], [94.4, 33270.0], [94.5, 33281.0], [94.6, 33281.0], [94.7, 33281.0], [94.8, 33281.0], [94.9, 33281.0], [95.0, 33284.0], [95.1, 33284.0], [95.2, 33284.0], [95.3, 33284.0], [95.4, 33284.0], [95.5, 33285.0], [95.6, 33285.0], [95.7, 33285.0], [95.8, 33285.0], [95.9, 33285.0], [96.0, 33288.0], [96.1, 33288.0], [96.2, 33288.0], [96.3, 33288.0], [96.4, 33288.0], [96.5, 33290.0], [96.6, 33290.0], [96.7, 33290.0], [96.8, 33290.0], [96.9, 33290.0], [97.0, 33296.0], [97.1, 33296.0], [97.2, 33296.0], [97.3, 33296.0], [97.4, 33296.0], [97.5, 33296.0], [97.6, 33296.0], [97.7, 33296.0], [97.8, 33296.0], [97.9, 33296.0], [98.0, 33299.0], [98.1, 33299.0], [98.2, 33299.0], [98.3, 33299.0], [98.4, 33299.0], [98.5, 33301.0], [98.6, 33301.0], [98.7, 33301.0], [98.8, 33301.0], [98.9, 33301.0], [99.0, 33333.0], [99.1, 33333.0], [99.2, 33333.0], [99.3, 33333.0], [99.4, 33333.0], [99.5, 33506.0], [99.6, 33506.0], [99.7, 33506.0], [99.8, 33506.0], [99.9, 33506.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 8800.0, "maxY": 49.0, "series": [{"data": [[8900.0, 1.0], [8800.0, 1.0], [9100.0, 2.0], [9300.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10800.0, 2.0], [11000.0, 1.0], [12600.0, 1.0], [12700.0, 1.0], [12900.0, 2.0], [13100.0, 1.0], [14800.0, 2.0], [15200.0, 2.0], [15300.0, 1.0], [16900.0, 2.0], [17200.0, 2.0], [17300.0, 1.0], [19100.0, 2.0], [19300.0, 3.0], [21100.0, 2.0], [21500.0, 3.0], [23200.0, 2.0], [23600.0, 1.0], [23700.0, 2.0], [25400.0, 2.0], [25700.0, 1.0], [25900.0, 1.0], [25800.0, 1.0], [27500.0, 2.0], [27800.0, 8.0], [28000.0, 2.0], [28100.0, 2.0], [28200.0, 2.0], [28300.0, 1.0], [28400.0, 2.0], [28500.0, 2.0], [28600.0, 1.0], [28800.0, 1.0], [28700.0, 2.0], [28900.0, 4.0], [29100.0, 2.0], [29200.0, 2.0], [29300.0, 2.0], [29400.0, 3.0], [29500.0, 1.0], [29600.0, 2.0], [30500.0, 1.0], [29700.0, 1.0], [29800.0, 3.0], [30000.0, 2.0], [30100.0, 1.0], [30200.0, 2.0], [30300.0, 3.0], [30400.0, 2.0], [30600.0, 3.0], [30700.0, 1.0], [30800.0, 2.0], [30900.0, 2.0], [31000.0, 1.0], [31100.0, 3.0], [31200.0, 2.0], [31300.0, 1.0], [31400.0, 3.0], [31500.0, 2.0], [31700.0, 2.0], [31900.0, 1.0], [32000.0, 4.0], [32100.0, 1.0], [32200.0, 1.0], [32300.0, 4.0], [32400.0, 1.0], [32500.0, 3.0], [32600.0, 1.0], [32700.0, 2.0], [32800.0, 2.0], [33000.0, 2.0], [33100.0, 3.0], [33200.0, 49.0], [33300.0, 2.0], [33500.0, 1.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 33500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 150.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 150.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 50.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.58461538461543, "minX": 1.57164114E12, "maxY": 198.2, "series": [{"data": [[1.57164114E12, 198.2], [1.5716412E12, 100.58461538461543]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5716412E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8885.0, "minX": 1.0, "maxY": 33506.0, "series": [{"data": [[2.0, 33333.0], [3.0, 33270.0], [23.0, 33227.0], [24.0, 33253.0], [25.0, 33221.0], [26.0, 33251.25], [30.0, 33264.0], [31.0, 33242.0], [33.0, 33301.0], [35.0, 33228.0], [34.0, 33233.5], [36.0, 33227.0], [39.0, 33231.5], [41.0, 33223.75], [40.0, 33215.0], [45.0, 33254.5], [44.0, 33230.666666666664], [46.0, 33231.2], [49.0, 33261.25], [53.0, 33158.0], [52.0, 33239.25], [55.0, 33127.0], [54.0, 33200.0], [57.0, 33012.0], [56.0, 33029.0], [59.0, 32876.0], [58.0, 32882.0], [61.0, 32788.0], [60.0, 32786.0], [62.0, 32670.0], [67.0, 32384.0], [66.0, 32485.0], [65.0, 32563.0], [64.0, 32575.0], [71.0, 32232.0], [70.0, 32308.0], [69.0, 32316.0], [68.0, 32303.0], [75.0, 32025.333333333332], [72.0, 32113.0], [79.0, 31722.0], [78.0, 31753.0], [77.0, 31929.0], [76.0, 32021.0], [83.0, 31425.0], [82.0, 31493.0], [81.0, 31575.0], [80.0, 31588.0], [87.0, 31269.0], [86.0, 31254.0], [85.0, 31313.0], [84.0, 31431.0], [91.0, 31075.0], [90.0, 31160.0], [89.0, 31142.0], [88.0, 31147.0], [95.0, 30884.5], [93.0, 30840.0], [92.0, 30985.0], [98.0, 30661.0], [97.0, 30658.0], [96.0, 30715.0], [103.0, 30435.0], [102.0, 30367.0], [101.0, 30495.0], [100.0, 30575.5], [107.0, 30205.5], [105.0, 30339.0], [104.0, 30323.0], [111.0, 29867.0], [110.0, 30024.0], [109.0, 30087.0], [108.0, 30113.0], [115.0, 29694.0], [114.0, 29722.0], [113.0, 29800.0], [112.0, 29869.0], [119.0, 29422.0], [118.0, 29493.0], [117.0, 29528.0], [116.0, 29682.0], [123.0, 29233.0], [122.0, 29332.0], [121.0, 29399.0], [120.0, 29482.0], [127.0, 28965.0], [126.0, 29123.0], [125.0, 29171.0], [124.0, 29202.0], [135.0, 28568.0], [134.0, 28614.0], [133.0, 28793.0], [132.0, 28808.0], [131.0, 28784.0], [130.0, 28952.0], [129.0, 28969.0], [128.0, 28938.0], [143.0, 28102.0], [142.0, 28193.0], [141.0, 28204.0], [140.0, 28240.0], [139.0, 28381.0], [138.0, 28423.0], [137.0, 28436.0], [136.0, 28528.0], [150.0, 27824.0], [149.0, 27827.75], [145.0, 28056.0], [144.0, 28074.0], [159.0, 25436.0], [158.0, 25721.0], [157.0, 25894.0], [155.0, 27539.0], [153.0, 27816.0], [152.0, 27853.5], [166.0, 21546.0], [165.0, 23258.0], [164.0, 23260.0], [163.0, 23610.0], [162.0, 23774.0], [161.0, 23762.0], [160.0, 25479.0], [175.0, 19138.0], [174.0, 19141.0], [173.0, 19358.0], [172.0, 19347.0], [171.0, 19381.0], [170.0, 21170.0], [168.0, 21535.0], [183.0, 15283.0], [181.0, 15300.0], [180.0, 16979.0], [178.0, 17211.0], [177.0, 17259.0], [176.0, 17327.0], [191.0, 11068.0], [190.0, 12672.0], [189.0, 12714.0], [188.0, 12967.0], [187.0, 12956.0], [186.0, 13110.0], [185.0, 14832.0], [198.0, 9119.0], [197.0, 9161.0], [196.0, 9367.0], [195.0, 10597.0], [193.0, 10829.0], [192.0, 10833.0], [200.0, 8885.0], [1.0, 33506.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[103.02499999999998, 28136.28500000001]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 43.1, "minX": 1.57164114E12, "maxY": 4660.15, "series": [{"data": [[1.57164114E12, 135.13333333333333], [1.5716412E12, 4660.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57164114E12, 43.1], [1.5716412E12, 1680.7833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5716412E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9083.4, "minX": 1.57164114E12, "maxY": 28624.820512820515, "series": [{"data": [[1.57164114E12, 9083.4], [1.5716412E12, 28624.820512820515]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5716412E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8990.8, "minX": 1.57164114E12, "maxY": 28553.06666666666, "series": [{"data": [[1.57164114E12, 8990.8], [1.5716412E12, 28553.06666666666]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5716412E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2770.4, "minX": 1.57164114E12, "maxY": 2893.3743589743613, "series": [{"data": [[1.57164114E12, 2770.4], [1.5716412E12, 2893.3743589743613]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5716412E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8866.0, "minX": 1.57164114E12, "maxY": 33333.0, "series": [{"data": [[1.57164114E12, 9367.0], [1.5716412E12, 33333.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57164114E12, 8866.0], [1.5716412E12, 10558.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57164114E12, 9367.0], [1.5716412E12, 32558.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57164114E12, 9367.0], [1.5716412E12, 33304.02]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57164114E12, 9367.0], [1.5716412E12, 32973.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5716412E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16133.0, "minX": 2.0, "maxY": 33240.0, "series": [{"data": [[2.0, 24348.0], [18.0, 30638.0], [19.0, 28074.0], [5.0, 16133.0], [3.0, 23762.0], [62.0, 33020.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[62.0, 33240.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16071.0, "minX": 2.0, "maxY": 33240.0, "series": [{"data": [[2.0, 24257.5], [18.0, 30538.5], [19.0, 27975.0], [5.0, 16071.0], [3.0, 23663.0], [62.0, 32920.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[62.0, 33240.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57164114E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57164114E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57164114E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.57164114E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.57164114E12, 0.08333333333333333], [1.5716412E12, 2.4166666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.5716412E12, 0.8333333333333334]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5716412E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.57164114E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.5716412E12, 0.8333333333333334]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57164114E12, 0.08333333333333333], [1.5716412E12, 2.4166666666666665]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5716412E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.57164114E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.57164114E12, 0.08333333333333333], [1.5716412E12, 2.4166666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.5716412E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5716412E12, "title": "Total Transactions Per Second"}},
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

