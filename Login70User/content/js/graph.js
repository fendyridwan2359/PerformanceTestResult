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
        data: {"result": {"minY": 4743.0, "minX": 0.0, "maxY": 8366.0, "series": [{"data": [[0.0, 4743.0], [0.1, 4743.0], [0.2, 4743.0], [0.3, 4743.0], [0.4, 4743.0], [0.5, 4743.0], [0.6, 4743.0], [0.7, 4743.0], [0.8, 4743.0], [0.9, 4743.0], [1.0, 4743.0], [1.1, 4743.0], [1.2, 4743.0], [1.3, 4743.0], [1.4, 4743.0], [1.5, 4783.0], [1.6, 4783.0], [1.7, 4783.0], [1.8, 4783.0], [1.9, 4783.0], [2.0, 4783.0], [2.1, 4783.0], [2.2, 4783.0], [2.3, 4783.0], [2.4, 4783.0], [2.5, 4783.0], [2.6, 4783.0], [2.7, 4783.0], [2.8, 4783.0], [2.9, 4841.0], [3.0, 4841.0], [3.1, 4841.0], [3.2, 4841.0], [3.3, 4841.0], [3.4, 4841.0], [3.5, 4841.0], [3.6, 4841.0], [3.7, 4841.0], [3.8, 4841.0], [3.9, 4841.0], [4.0, 4841.0], [4.1, 4841.0], [4.2, 4841.0], [4.3, 4931.0], [4.4, 4931.0], [4.5, 4931.0], [4.6, 4931.0], [4.7, 4931.0], [4.8, 4931.0], [4.9, 4931.0], [5.0, 4931.0], [5.1, 4931.0], [5.2, 4931.0], [5.3, 4931.0], [5.4, 4931.0], [5.5, 4931.0], [5.6, 4931.0], [5.7, 4931.0], [5.8, 5006.0], [5.9, 5006.0], [6.0, 5006.0], [6.1, 5006.0], [6.2, 5006.0], [6.3, 5006.0], [6.4, 5006.0], [6.5, 5006.0], [6.6, 5006.0], [6.7, 5006.0], [6.8, 5006.0], [6.9, 5006.0], [7.0, 5006.0], [7.1, 5006.0], [7.2, 5052.0], [7.3, 5052.0], [7.4, 5052.0], [7.5, 5052.0], [7.6, 5052.0], [7.7, 5052.0], [7.8, 5052.0], [7.9, 5052.0], [8.0, 5052.0], [8.1, 5052.0], [8.2, 5052.0], [8.3, 5052.0], [8.4, 5052.0], [8.5, 5052.0], [8.6, 5061.0], [8.7, 5061.0], [8.8, 5061.0], [8.9, 5061.0], [9.0, 5061.0], [9.1, 5061.0], [9.2, 5061.0], [9.3, 5061.0], [9.4, 5061.0], [9.5, 5061.0], [9.6, 5061.0], [9.7, 5061.0], [9.8, 5061.0], [9.9, 5061.0], [10.0, 5131.0], [10.1, 5131.0], [10.2, 5131.0], [10.3, 5131.0], [10.4, 5131.0], [10.5, 5131.0], [10.6, 5131.0], [10.7, 5131.0], [10.8, 5131.0], [10.9, 5131.0], [11.0, 5131.0], [11.1, 5131.0], [11.2, 5131.0], [11.3, 5131.0], [11.4, 5131.0], [11.5, 5133.0], [11.6, 5133.0], [11.7, 5133.0], [11.8, 5133.0], [11.9, 5133.0], [12.0, 5133.0], [12.1, 5133.0], [12.2, 5133.0], [12.3, 5133.0], [12.4, 5133.0], [12.5, 5133.0], [12.6, 5133.0], [12.7, 5133.0], [12.8, 5133.0], [12.9, 5261.0], [13.0, 5261.0], [13.1, 5261.0], [13.2, 5261.0], [13.3, 5261.0], [13.4, 5261.0], [13.5, 5261.0], [13.6, 5261.0], [13.7, 5261.0], [13.8, 5261.0], [13.9, 5261.0], [14.0, 5261.0], [14.1, 5261.0], [14.2, 5261.0], [14.3, 5345.0], [14.4, 5345.0], [14.5, 5345.0], [14.6, 5345.0], [14.7, 5345.0], [14.8, 5345.0], [14.9, 5345.0], [15.0, 5345.0], [15.1, 5345.0], [15.2, 5345.0], [15.3, 5345.0], [15.4, 5345.0], [15.5, 5345.0], [15.6, 5345.0], [15.7, 5345.0], [15.8, 5395.0], [15.9, 5395.0], [16.0, 5395.0], [16.1, 5395.0], [16.2, 5395.0], [16.3, 5395.0], [16.4, 5395.0], [16.5, 5395.0], [16.6, 5395.0], [16.7, 5395.0], [16.8, 5395.0], [16.9, 5395.0], [17.0, 5395.0], [17.1, 5395.0], [17.2, 5471.0], [17.3, 5471.0], [17.4, 5471.0], [17.5, 5471.0], [17.6, 5471.0], [17.7, 5471.0], [17.8, 5471.0], [17.9, 5471.0], [18.0, 5471.0], [18.1, 5471.0], [18.2, 5471.0], [18.3, 5471.0], [18.4, 5471.0], [18.5, 5471.0], [18.6, 5520.0], [18.7, 5520.0], [18.8, 5520.0], [18.9, 5520.0], [19.0, 5520.0], [19.1, 5520.0], [19.2, 5520.0], [19.3, 5520.0], [19.4, 5520.0], [19.5, 5520.0], [19.6, 5520.0], [19.7, 5520.0], [19.8, 5520.0], [19.9, 5520.0], [20.0, 5543.0], [20.1, 5543.0], [20.2, 5543.0], [20.3, 5543.0], [20.4, 5543.0], [20.5, 5543.0], [20.6, 5543.0], [20.7, 5543.0], [20.8, 5543.0], [20.9, 5543.0], [21.0, 5543.0], [21.1, 5543.0], [21.2, 5543.0], [21.3, 5543.0], [21.4, 5543.0], [21.5, 5563.0], [21.6, 5563.0], [21.7, 5563.0], [21.8, 5563.0], [21.9, 5563.0], [22.0, 5563.0], [22.1, 5563.0], [22.2, 5563.0], [22.3, 5563.0], [22.4, 5563.0], [22.5, 5563.0], [22.6, 5563.0], [22.7, 5563.0], [22.8, 5563.0], [22.9, 5715.0], [23.0, 5715.0], [23.1, 5715.0], [23.2, 5715.0], [23.3, 5715.0], [23.4, 5715.0], [23.5, 5715.0], [23.6, 5715.0], [23.7, 5715.0], [23.8, 5715.0], [23.9, 5715.0], [24.0, 5715.0], [24.1, 5715.0], [24.2, 5715.0], [24.3, 5716.0], [24.4, 5716.0], [24.5, 5716.0], [24.6, 5716.0], [24.7, 5716.0], [24.8, 5716.0], [24.9, 5716.0], [25.0, 5716.0], [25.1, 5716.0], [25.2, 5716.0], [25.3, 5716.0], [25.4, 5716.0], [25.5, 5716.0], [25.6, 5716.0], [25.7, 5716.0], [25.8, 5827.0], [25.9, 5827.0], [26.0, 5827.0], [26.1, 5827.0], [26.2, 5827.0], [26.3, 5827.0], [26.4, 5827.0], [26.5, 5827.0], [26.6, 5827.0], [26.7, 5827.0], [26.8, 5827.0], [26.9, 5827.0], [27.0, 5827.0], [27.1, 5827.0], [27.2, 5856.0], [27.3, 5856.0], [27.4, 5856.0], [27.5, 5856.0], [27.6, 5856.0], [27.7, 5856.0], [27.8, 5856.0], [27.9, 5856.0], [28.0, 5856.0], [28.1, 5856.0], [28.2, 5856.0], [28.3, 5856.0], [28.4, 5856.0], [28.5, 5856.0], [28.6, 5869.0], [28.7, 5869.0], [28.8, 5869.0], [28.9, 5869.0], [29.0, 5869.0], [29.1, 5869.0], [29.2, 5869.0], [29.3, 5869.0], [29.4, 5869.0], [29.5, 5869.0], [29.6, 5869.0], [29.7, 5869.0], [29.8, 5869.0], [29.9, 5869.0], [30.0, 5876.0], [30.1, 5876.0], [30.2, 5876.0], [30.3, 5876.0], [30.4, 5876.0], [30.5, 5876.0], [30.6, 5876.0], [30.7, 5876.0], [30.8, 5876.0], [30.9, 5876.0], [31.0, 5876.0], [31.1, 5876.0], [31.2, 5876.0], [31.3, 5876.0], [31.4, 5876.0], [31.5, 5877.0], [31.6, 5877.0], [31.7, 5877.0], [31.8, 5877.0], [31.9, 5877.0], [32.0, 5877.0], [32.1, 5877.0], [32.2, 5877.0], [32.3, 5877.0], [32.4, 5877.0], [32.5, 5877.0], [32.6, 5877.0], [32.7, 5877.0], [32.8, 5877.0], [32.9, 5905.0], [33.0, 5905.0], [33.1, 5905.0], [33.2, 5905.0], [33.3, 5905.0], [33.4, 5905.0], [33.5, 5905.0], [33.6, 5905.0], [33.7, 5905.0], [33.8, 5905.0], [33.9, 5905.0], [34.0, 5905.0], [34.1, 5905.0], [34.2, 5905.0], [34.3, 6016.0], [34.4, 6016.0], [34.5, 6016.0], [34.6, 6016.0], [34.7, 6016.0], [34.8, 6016.0], [34.9, 6016.0], [35.0, 6016.0], [35.1, 6016.0], [35.2, 6016.0], [35.3, 6016.0], [35.4, 6016.0], [35.5, 6016.0], [35.6, 6016.0], [35.7, 6016.0], [35.8, 6026.0], [35.9, 6026.0], [36.0, 6026.0], [36.1, 6026.0], [36.2, 6026.0], [36.3, 6026.0], [36.4, 6026.0], [36.5, 6026.0], [36.6, 6026.0], [36.7, 6026.0], [36.8, 6026.0], [36.9, 6026.0], [37.0, 6026.0], [37.1, 6026.0], [37.2, 6094.0], [37.3, 6094.0], [37.4, 6094.0], [37.5, 6094.0], [37.6, 6094.0], [37.7, 6094.0], [37.8, 6094.0], [37.9, 6094.0], [38.0, 6094.0], [38.1, 6094.0], [38.2, 6094.0], [38.3, 6094.0], [38.4, 6094.0], [38.5, 6094.0], [38.6, 6165.0], [38.7, 6165.0], [38.8, 6165.0], [38.9, 6165.0], [39.0, 6165.0], [39.1, 6165.0], [39.2, 6165.0], [39.3, 6165.0], [39.4, 6165.0], [39.5, 6165.0], [39.6, 6165.0], [39.7, 6165.0], [39.8, 6165.0], [39.9, 6165.0], [40.0, 6209.0], [40.1, 6209.0], [40.2, 6209.0], [40.3, 6209.0], [40.4, 6209.0], [40.5, 6209.0], [40.6, 6209.0], [40.7, 6209.0], [40.8, 6209.0], [40.9, 6209.0], [41.0, 6209.0], [41.1, 6209.0], [41.2, 6209.0], [41.3, 6209.0], [41.4, 6209.0], [41.5, 6210.0], [41.6, 6210.0], [41.7, 6210.0], [41.8, 6210.0], [41.9, 6210.0], [42.0, 6210.0], [42.1, 6210.0], [42.2, 6210.0], [42.3, 6210.0], [42.4, 6210.0], [42.5, 6210.0], [42.6, 6210.0], [42.7, 6210.0], [42.8, 6210.0], [42.9, 6213.0], [43.0, 6213.0], [43.1, 6213.0], [43.2, 6213.0], [43.3, 6213.0], [43.4, 6213.0], [43.5, 6213.0], [43.6, 6213.0], [43.7, 6213.0], [43.8, 6213.0], [43.9, 6213.0], [44.0, 6213.0], [44.1, 6213.0], [44.2, 6213.0], [44.3, 6430.0], [44.4, 6430.0], [44.5, 6430.0], [44.6, 6430.0], [44.7, 6430.0], [44.8, 6430.0], [44.9, 6430.0], [45.0, 6430.0], [45.1, 6430.0], [45.2, 6430.0], [45.3, 6430.0], [45.4, 6430.0], [45.5, 6430.0], [45.6, 6430.0], [45.7, 6430.0], [45.8, 6597.0], [45.9, 6597.0], [46.0, 6597.0], [46.1, 6597.0], [46.2, 6597.0], [46.3, 6597.0], [46.4, 6597.0], [46.5, 6597.0], [46.6, 6597.0], [46.7, 6597.0], [46.8, 6597.0], [46.9, 6597.0], [47.0, 6597.0], [47.1, 6597.0], [47.2, 6605.0], [47.3, 6605.0], [47.4, 6605.0], [47.5, 6605.0], [47.6, 6605.0], [47.7, 6605.0], [47.8, 6605.0], [47.9, 6605.0], [48.0, 6605.0], [48.1, 6605.0], [48.2, 6605.0], [48.3, 6605.0], [48.4, 6605.0], [48.5, 6605.0], [48.6, 6608.0], [48.7, 6608.0], [48.8, 6608.0], [48.9, 6608.0], [49.0, 6608.0], [49.1, 6608.0], [49.2, 6608.0], [49.3, 6608.0], [49.4, 6608.0], [49.5, 6608.0], [49.6, 6608.0], [49.7, 6608.0], [49.8, 6608.0], [49.9, 6608.0], [50.0, 6608.0], [50.1, 6618.0], [50.2, 6618.0], [50.3, 6618.0], [50.4, 6618.0], [50.5, 6618.0], [50.6, 6618.0], [50.7, 6618.0], [50.8, 6618.0], [50.9, 6618.0], [51.0, 6618.0], [51.1, 6618.0], [51.2, 6618.0], [51.3, 6618.0], [51.4, 6618.0], [51.5, 6622.0], [51.6, 6622.0], [51.7, 6622.0], [51.8, 6622.0], [51.9, 6622.0], [52.0, 6622.0], [52.1, 6622.0], [52.2, 6622.0], [52.3, 6622.0], [52.4, 6622.0], [52.5, 6622.0], [52.6, 6622.0], [52.7, 6622.0], [52.8, 6622.0], [52.9, 6699.0], [53.0, 6699.0], [53.1, 6699.0], [53.2, 6699.0], [53.3, 6699.0], [53.4, 6699.0], [53.5, 6699.0], [53.6, 6699.0], [53.7, 6699.0], [53.8, 6699.0], [53.9, 6699.0], [54.0, 6699.0], [54.1, 6699.0], [54.2, 6699.0], [54.3, 6768.0], [54.4, 6768.0], [54.5, 6768.0], [54.6, 6768.0], [54.7, 6768.0], [54.8, 6768.0], [54.9, 6768.0], [55.0, 6768.0], [55.1, 6768.0], [55.2, 6768.0], [55.3, 6768.0], [55.4, 6768.0], [55.5, 6768.0], [55.6, 6768.0], [55.7, 6768.0], [55.8, 6804.0], [55.9, 6804.0], [56.0, 6804.0], [56.1, 6804.0], [56.2, 6804.0], [56.3, 6804.0], [56.4, 6804.0], [56.5, 6804.0], [56.6, 6804.0], [56.7, 6804.0], [56.8, 6804.0], [56.9, 6804.0], [57.0, 6804.0], [57.1, 6804.0], [57.2, 6818.0], [57.3, 6818.0], [57.4, 6818.0], [57.5, 6818.0], [57.6, 6818.0], [57.7, 6818.0], [57.8, 6818.0], [57.9, 6818.0], [58.0, 6818.0], [58.1, 6818.0], [58.2, 6818.0], [58.3, 6818.0], [58.4, 6818.0], [58.5, 6818.0], [58.6, 6920.0], [58.7, 6920.0], [58.8, 6920.0], [58.9, 6920.0], [59.0, 6920.0], [59.1, 6920.0], [59.2, 6920.0], [59.3, 6920.0], [59.4, 6920.0], [59.5, 6920.0], [59.6, 6920.0], [59.7, 6920.0], [59.8, 6920.0], [59.9, 6920.0], [60.0, 6920.0], [60.1, 6959.0], [60.2, 6959.0], [60.3, 6959.0], [60.4, 6959.0], [60.5, 6959.0], [60.6, 6959.0], [60.7, 6959.0], [60.8, 6959.0], [60.9, 6959.0], [61.0, 6959.0], [61.1, 6959.0], [61.2, 6959.0], [61.3, 6959.0], [61.4, 6959.0], [61.5, 6960.0], [61.6, 6960.0], [61.7, 6960.0], [61.8, 6960.0], [61.9, 6960.0], [62.0, 6960.0], [62.1, 6960.0], [62.2, 6960.0], [62.3, 6960.0], [62.4, 6960.0], [62.5, 6960.0], [62.6, 6960.0], [62.7, 6960.0], [62.8, 6960.0], [62.9, 6980.0], [63.0, 6980.0], [63.1, 6980.0], [63.2, 6980.0], [63.3, 6980.0], [63.4, 6980.0], [63.5, 6980.0], [63.6, 6980.0], [63.7, 6980.0], [63.8, 6980.0], [63.9, 6980.0], [64.0, 6980.0], [64.1, 6980.0], [64.2, 6980.0], [64.3, 7001.0], [64.4, 7001.0], [64.5, 7001.0], [64.6, 7001.0], [64.7, 7001.0], [64.8, 7001.0], [64.9, 7001.0], [65.0, 7001.0], [65.1, 7001.0], [65.2, 7001.0], [65.3, 7001.0], [65.4, 7001.0], [65.5, 7001.0], [65.6, 7001.0], [65.7, 7001.0], [65.8, 7016.0], [65.9, 7016.0], [66.0, 7016.0], [66.1, 7016.0], [66.2, 7016.0], [66.3, 7016.0], [66.4, 7016.0], [66.5, 7016.0], [66.6, 7016.0], [66.7, 7016.0], [66.8, 7016.0], [66.9, 7016.0], [67.0, 7016.0], [67.1, 7016.0], [67.2, 7042.0], [67.3, 7042.0], [67.4, 7042.0], [67.5, 7042.0], [67.6, 7042.0], [67.7, 7042.0], [67.8, 7042.0], [67.9, 7042.0], [68.0, 7042.0], [68.1, 7042.0], [68.2, 7042.0], [68.3, 7042.0], [68.4, 7042.0], [68.5, 7042.0], [68.6, 7185.0], [68.7, 7185.0], [68.8, 7185.0], [68.9, 7185.0], [69.0, 7185.0], [69.1, 7185.0], [69.2, 7185.0], [69.3, 7185.0], [69.4, 7185.0], [69.5, 7185.0], [69.6, 7185.0], [69.7, 7185.0], [69.8, 7185.0], [69.9, 7185.0], [70.0, 7185.0], [70.1, 7206.0], [70.2, 7206.0], [70.3, 7206.0], [70.4, 7206.0], [70.5, 7206.0], [70.6, 7206.0], [70.7, 7206.0], [70.8, 7206.0], [70.9, 7206.0], [71.0, 7206.0], [71.1, 7206.0], [71.2, 7206.0], [71.3, 7206.0], [71.4, 7206.0], [71.5, 7228.0], [71.6, 7228.0], [71.7, 7228.0], [71.8, 7228.0], [71.9, 7228.0], [72.0, 7228.0], [72.1, 7228.0], [72.2, 7228.0], [72.3, 7228.0], [72.4, 7228.0], [72.5, 7228.0], [72.6, 7228.0], [72.7, 7228.0], [72.8, 7228.0], [72.9, 7259.0], [73.0, 7259.0], [73.1, 7259.0], [73.2, 7259.0], [73.3, 7259.0], [73.4, 7259.0], [73.5, 7259.0], [73.6, 7259.0], [73.7, 7259.0], [73.8, 7259.0], [73.9, 7259.0], [74.0, 7259.0], [74.1, 7259.0], [74.2, 7259.0], [74.3, 7322.0], [74.4, 7322.0], [74.5, 7322.0], [74.6, 7322.0], [74.7, 7322.0], [74.8, 7322.0], [74.9, 7322.0], [75.0, 7322.0], [75.1, 7322.0], [75.2, 7322.0], [75.3, 7322.0], [75.4, 7322.0], [75.5, 7322.0], [75.6, 7322.0], [75.7, 7322.0], [75.8, 7322.0], [75.9, 7322.0], [76.0, 7322.0], [76.1, 7322.0], [76.2, 7322.0], [76.3, 7322.0], [76.4, 7322.0], [76.5, 7322.0], [76.6, 7322.0], [76.7, 7322.0], [76.8, 7322.0], [76.9, 7322.0], [77.0, 7322.0], [77.1, 7322.0], [77.2, 7331.0], [77.3, 7331.0], [77.4, 7331.0], [77.5, 7331.0], [77.6, 7331.0], [77.7, 7331.0], [77.8, 7331.0], [77.9, 7331.0], [78.0, 7331.0], [78.1, 7331.0], [78.2, 7331.0], [78.3, 7331.0], [78.4, 7331.0], [78.5, 7331.0], [78.6, 7346.0], [78.7, 7346.0], [78.8, 7346.0], [78.9, 7346.0], [79.0, 7346.0], [79.1, 7346.0], [79.2, 7346.0], [79.3, 7346.0], [79.4, 7346.0], [79.5, 7346.0], [79.6, 7346.0], [79.7, 7346.0], [79.8, 7346.0], [79.9, 7346.0], [80.0, 7346.0], [80.1, 7406.0], [80.2, 7406.0], [80.3, 7406.0], [80.4, 7406.0], [80.5, 7406.0], [80.6, 7406.0], [80.7, 7406.0], [80.8, 7406.0], [80.9, 7406.0], [81.0, 7406.0], [81.1, 7406.0], [81.2, 7406.0], [81.3, 7406.0], [81.4, 7406.0], [81.5, 7479.0], [81.6, 7479.0], [81.7, 7479.0], [81.8, 7479.0], [81.9, 7479.0], [82.0, 7479.0], [82.1, 7479.0], [82.2, 7479.0], [82.3, 7479.0], [82.4, 7479.0], [82.5, 7479.0], [82.6, 7479.0], [82.7, 7479.0], [82.8, 7479.0], [82.9, 7590.0], [83.0, 7590.0], [83.1, 7590.0], [83.2, 7590.0], [83.3, 7590.0], [83.4, 7590.0], [83.5, 7590.0], [83.6, 7590.0], [83.7, 7590.0], [83.8, 7590.0], [83.9, 7590.0], [84.0, 7590.0], [84.1, 7590.0], [84.2, 7590.0], [84.3, 7659.0], [84.4, 7659.0], [84.5, 7659.0], [84.6, 7659.0], [84.7, 7659.0], [84.8, 7659.0], [84.9, 7659.0], [85.0, 7659.0], [85.1, 7659.0], [85.2, 7659.0], [85.3, 7659.0], [85.4, 7659.0], [85.5, 7659.0], [85.6, 7659.0], [85.7, 7659.0], [85.8, 7733.0], [85.9, 7733.0], [86.0, 7733.0], [86.1, 7733.0], [86.2, 7733.0], [86.3, 7733.0], [86.4, 7733.0], [86.5, 7733.0], [86.6, 7733.0], [86.7, 7733.0], [86.8, 7733.0], [86.9, 7733.0], [87.0, 7733.0], [87.1, 7733.0], [87.2, 7758.0], [87.3, 7758.0], [87.4, 7758.0], [87.5, 7758.0], [87.6, 7758.0], [87.7, 7758.0], [87.8, 7758.0], [87.9, 7758.0], [88.0, 7758.0], [88.1, 7758.0], [88.2, 7758.0], [88.3, 7758.0], [88.4, 7758.0], [88.5, 7758.0], [88.6, 7893.0], [88.7, 7893.0], [88.8, 7893.0], [88.9, 7893.0], [89.0, 7893.0], [89.1, 7893.0], [89.2, 7893.0], [89.3, 7893.0], [89.4, 7893.0], [89.5, 7893.0], [89.6, 7893.0], [89.7, 7893.0], [89.8, 7893.0], [89.9, 7893.0], [90.0, 7893.0], [90.1, 7895.0], [90.2, 7895.0], [90.3, 7895.0], [90.4, 7895.0], [90.5, 7895.0], [90.6, 7895.0], [90.7, 7895.0], [90.8, 7895.0], [90.9, 7895.0], [91.0, 7895.0], [91.1, 7895.0], [91.2, 7895.0], [91.3, 7895.0], [91.4, 7895.0], [91.5, 8011.0], [91.6, 8011.0], [91.7, 8011.0], [91.8, 8011.0], [91.9, 8011.0], [92.0, 8011.0], [92.1, 8011.0], [92.2, 8011.0], [92.3, 8011.0], [92.4, 8011.0], [92.5, 8011.0], [92.6, 8011.0], [92.7, 8011.0], [92.8, 8011.0], [92.9, 8013.0], [93.0, 8013.0], [93.1, 8013.0], [93.2, 8013.0], [93.3, 8013.0], [93.4, 8013.0], [93.5, 8013.0], [93.6, 8013.0], [93.7, 8013.0], [93.8, 8013.0], [93.9, 8013.0], [94.0, 8013.0], [94.1, 8013.0], [94.2, 8013.0], [94.3, 8197.0], [94.4, 8197.0], [94.5, 8197.0], [94.6, 8197.0], [94.7, 8197.0], [94.8, 8197.0], [94.9, 8197.0], [95.0, 8197.0], [95.1, 8197.0], [95.2, 8197.0], [95.3, 8197.0], [95.4, 8197.0], [95.5, 8197.0], [95.6, 8197.0], [95.7, 8197.0], [95.8, 8200.0], [95.9, 8200.0], [96.0, 8200.0], [96.1, 8200.0], [96.2, 8200.0], [96.3, 8200.0], [96.4, 8200.0], [96.5, 8200.0], [96.6, 8200.0], [96.7, 8200.0], [96.8, 8200.0], [96.9, 8200.0], [97.0, 8200.0], [97.1, 8200.0], [97.2, 8252.0], [97.3, 8252.0], [97.4, 8252.0], [97.5, 8252.0], [97.6, 8252.0], [97.7, 8252.0], [97.8, 8252.0], [97.9, 8252.0], [98.0, 8252.0], [98.1, 8252.0], [98.2, 8252.0], [98.3, 8252.0], [98.4, 8252.0], [98.5, 8252.0], [98.6, 8366.0], [98.7, 8366.0], [98.8, 8366.0], [98.9, 8366.0], [99.0, 8366.0], [99.1, 8366.0], [99.2, 8366.0], [99.3, 8366.0], [99.4, 8366.0], [99.5, 8366.0], [99.6, 8366.0], [99.7, 8366.0], [99.8, 8366.0], [99.9, 8366.0], [100.0, 8366.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4700.0, "maxY": 5.0, "series": [{"data": [[8200.0, 2.0], [8300.0, 1.0], [4800.0, 1.0], [4700.0, 2.0], [5000.0, 3.0], [5100.0, 2.0], [4900.0, 1.0], [5200.0, 1.0], [5300.0, 2.0], [5500.0, 3.0], [5400.0, 1.0], [5700.0, 2.0], [5800.0, 5.0], [6000.0, 3.0], [5900.0, 1.0], [6100.0, 1.0], [6200.0, 3.0], [6400.0, 1.0], [6600.0, 5.0], [6500.0, 1.0], [6700.0, 1.0], [6800.0, 2.0], [6900.0, 4.0], [7000.0, 3.0], [7100.0, 1.0], [7200.0, 3.0], [7300.0, 4.0], [7400.0, 2.0], [7500.0, 1.0], [7600.0, 1.0], [7700.0, 2.0], [7800.0, 2.0], [8000.0, 2.0], [8100.0, 1.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 70.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 70.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 70.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 35.60000000000001, "minX": 1.57171764E12, "maxY": 35.60000000000001, "series": [{"data": [[1.57171764E12, 35.60000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171764E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4743.0, "minX": 1.0, "maxY": 8366.0, "series": [{"data": [[2.0, 8200.0], [3.0, 8011.0], [4.0, 8252.0], [5.0, 8197.0], [6.0, 7895.0], [7.0, 7758.0], [8.0, 8013.0], [9.0, 7893.0], [10.0, 7659.0], [11.0, 7733.0], [12.0, 7590.0], [13.0, 7479.0], [14.0, 7346.0], [16.0, 7275.0], [17.0, 7322.0], [18.0, 7016.0], [19.0, 7001.0], [20.0, 7406.0], [21.0, 7331.0], [22.0, 7259.0], [23.0, 6980.0], [24.0, 7206.0], [25.0, 7185.0], [26.0, 7042.0], [27.0, 6818.0], [29.0, 6959.5], [30.0, 6920.0], [31.0, 6804.0], [33.0, 6699.0], [32.0, 6768.0], [35.0, 6622.0], [34.0, 6597.0], [36.0, 6618.0], [39.0, 6430.0], [38.0, 6606.5], [41.0, 6209.0], [40.0, 6165.0], [43.0, 6094.0], [42.0, 6016.0], [45.0, 5869.0], [44.0, 6213.0], [46.0, 6210.0], [49.0, 6026.0], [48.0, 5810.0], [51.0, 5856.0], [50.0, 5877.0], [53.0, 5543.0], [52.0, 5876.0], [54.0, 5471.0], [57.0, 5716.0], [56.0, 5586.0], [59.0, 5520.0], [58.0, 5563.0], [61.0, 5395.0], [60.0, 4931.0], [63.0, 4743.0], [62.0, 5261.0], [67.0, 5061.0], [66.0, 5132.0], [64.0, 5052.0], [70.0, 4812.0], [68.0, 5006.0], [1.0, 8366.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[35.60000000000001, 6520.728571428571]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 70.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 603.3666666666667, "minX": 1.57171764E12, "maxY": 1876.1166666666666, "series": [{"data": [[1.57171764E12, 1876.1166666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57171764E12, 603.3666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171764E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6520.728571428571, "minX": 1.57171764E12, "maxY": 6520.728571428571, "series": [{"data": [[1.57171764E12, 6520.728571428571]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171764E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6407.571428571427, "minX": 1.57171764E12, "maxY": 6407.571428571427, "series": [{"data": [[1.57171764E12, 6407.571428571427]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171764E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 623.3000000000002, "minX": 1.57171764E12, "maxY": 623.3000000000002, "series": [{"data": [[1.57171764E12, 623.3000000000002]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171764E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4743.0, "minX": 1.57171764E12, "maxY": 8366.0, "series": [{"data": [[1.57171764E12, 8366.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57171764E12, 4743.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57171764E12, 7894.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57171764E12, 8366.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57171764E12, 8198.35]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171764E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5052.0, "minX": 11.0, "maxY": 7758.0, "series": [{"data": [[17.0, 7758.0], [18.0, 5862.5], [11.0, 5052.0], [24.0, 6869.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4953.0, "minX": 11.0, "maxY": 7659.0, "series": [{"data": [[17.0, 7659.0], [18.0, 5763.0], [11.0, 4953.0], [24.0, 6769.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.57171758E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.57171758E12, 1.1666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171758E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.57171764E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.57171764E12, 1.1666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171764E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.57171764E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.57171764E12, 1.1666666666666667]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171764E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.57171764E12, "maxY": 1.1666666666666667, "series": [{"data": [[1.57171764E12, 1.1666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171764E12, "title": "Total Transactions Per Second"}},
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

