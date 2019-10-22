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
        data: {"result": {"minY": 3208.0, "minX": 0.0, "maxY": 7374.0, "series": [{"data": [[0.0, 3208.0], [0.1, 3208.0], [0.2, 3208.0], [0.3, 3208.0], [0.4, 3208.0], [0.5, 3208.0], [0.6, 3208.0], [0.7, 3208.0], [0.8, 3208.0], [0.9, 3208.0], [1.0, 3208.0], [1.1, 3208.0], [1.2, 3208.0], [1.3, 3208.0], [1.4, 3326.0], [1.5, 3326.0], [1.6, 3326.0], [1.7, 3326.0], [1.8, 3326.0], [1.9, 3326.0], [2.0, 3326.0], [2.1, 3326.0], [2.2, 3326.0], [2.3, 3326.0], [2.4, 3326.0], [2.5, 3326.0], [2.6, 3326.0], [2.7, 3599.0], [2.8, 3599.0], [2.9, 3599.0], [3.0, 3599.0], [3.1, 3599.0], [3.2, 3599.0], [3.3, 3599.0], [3.4, 3599.0], [3.5, 3599.0], [3.6, 3599.0], [3.7, 3599.0], [3.8, 3599.0], [3.9, 3599.0], [4.0, 3965.0], [4.1, 3965.0], [4.2, 3965.0], [4.3, 3965.0], [4.4, 3965.0], [4.5, 3965.0], [4.6, 3965.0], [4.7, 3965.0], [4.8, 3965.0], [4.9, 3965.0], [5.0, 3965.0], [5.1, 3965.0], [5.2, 3965.0], [5.3, 3965.0], [5.4, 4175.0], [5.5, 4175.0], [5.6, 4175.0], [5.7, 4175.0], [5.8, 4175.0], [5.9, 4175.0], [6.0, 4175.0], [6.1, 4175.0], [6.2, 4175.0], [6.3, 4175.0], [6.4, 4175.0], [6.5, 4175.0], [6.6, 4175.0], [6.7, 4191.0], [6.8, 4191.0], [6.9, 4191.0], [7.0, 4191.0], [7.1, 4191.0], [7.2, 4191.0], [7.3, 4191.0], [7.4, 4191.0], [7.5, 4191.0], [7.6, 4191.0], [7.7, 4191.0], [7.8, 4191.0], [7.9, 4191.0], [8.0, 4252.0], [8.1, 4252.0], [8.2, 4252.0], [8.3, 4252.0], [8.4, 4252.0], [8.5, 4252.0], [8.6, 4252.0], [8.7, 4252.0], [8.8, 4252.0], [8.9, 4252.0], [9.0, 4252.0], [9.1, 4252.0], [9.2, 4252.0], [9.3, 4252.0], [9.4, 4258.0], [9.5, 4258.0], [9.6, 4258.0], [9.7, 4258.0], [9.8, 4258.0], [9.9, 4258.0], [10.0, 4258.0], [10.1, 4258.0], [10.2, 4258.0], [10.3, 4258.0], [10.4, 4258.0], [10.5, 4258.0], [10.6, 4258.0], [10.7, 4483.0], [10.8, 4483.0], [10.9, 4483.0], [11.0, 4483.0], [11.1, 4483.0], [11.2, 4483.0], [11.3, 4483.0], [11.4, 4483.0], [11.5, 4483.0], [11.6, 4483.0], [11.7, 4483.0], [11.8, 4483.0], [11.9, 4483.0], [12.0, 4488.0], [12.1, 4488.0], [12.2, 4488.0], [12.3, 4488.0], [12.4, 4488.0], [12.5, 4488.0], [12.6, 4488.0], [12.7, 4488.0], [12.8, 4488.0], [12.9, 4488.0], [13.0, 4488.0], [13.1, 4488.0], [13.2, 4488.0], [13.3, 4488.0], [13.4, 4507.0], [13.5, 4507.0], [13.6, 4507.0], [13.7, 4507.0], [13.8, 4507.0], [13.9, 4507.0], [14.0, 4507.0], [14.1, 4507.0], [14.2, 4507.0], [14.3, 4507.0], [14.4, 4507.0], [14.5, 4507.0], [14.6, 4507.0], [14.7, 4548.0], [14.8, 4548.0], [14.9, 4548.0], [15.0, 4548.0], [15.1, 4548.0], [15.2, 4548.0], [15.3, 4548.0], [15.4, 4548.0], [15.5, 4548.0], [15.6, 4548.0], [15.7, 4548.0], [15.8, 4548.0], [15.9, 4548.0], [16.0, 4568.0], [16.1, 4568.0], [16.2, 4568.0], [16.3, 4568.0], [16.4, 4568.0], [16.5, 4568.0], [16.6, 4568.0], [16.7, 4568.0], [16.8, 4568.0], [16.9, 4568.0], [17.0, 4568.0], [17.1, 4568.0], [17.2, 4568.0], [17.3, 4568.0], [17.4, 4608.0], [17.5, 4608.0], [17.6, 4608.0], [17.7, 4608.0], [17.8, 4608.0], [17.9, 4608.0], [18.0, 4608.0], [18.1, 4608.0], [18.2, 4608.0], [18.3, 4608.0], [18.4, 4608.0], [18.5, 4608.0], [18.6, 4608.0], [18.7, 4622.0], [18.8, 4622.0], [18.9, 4622.0], [19.0, 4622.0], [19.1, 4622.0], [19.2, 4622.0], [19.3, 4622.0], [19.4, 4622.0], [19.5, 4622.0], [19.6, 4622.0], [19.7, 4622.0], [19.8, 4622.0], [19.9, 4622.0], [20.0, 4672.0], [20.1, 4672.0], [20.2, 4672.0], [20.3, 4672.0], [20.4, 4672.0], [20.5, 4672.0], [20.6, 4672.0], [20.7, 4672.0], [20.8, 4672.0], [20.9, 4672.0], [21.0, 4672.0], [21.1, 4672.0], [21.2, 4672.0], [21.3, 4672.0], [21.4, 4739.0], [21.5, 4739.0], [21.6, 4739.0], [21.7, 4739.0], [21.8, 4739.0], [21.9, 4739.0], [22.0, 4739.0], [22.1, 4739.0], [22.2, 4739.0], [22.3, 4739.0], [22.4, 4739.0], [22.5, 4739.0], [22.6, 4739.0], [22.7, 4791.0], [22.8, 4791.0], [22.9, 4791.0], [23.0, 4791.0], [23.1, 4791.0], [23.2, 4791.0], [23.3, 4791.0], [23.4, 4791.0], [23.5, 4791.0], [23.6, 4791.0], [23.7, 4791.0], [23.8, 4791.0], [23.9, 4791.0], [24.0, 4897.0], [24.1, 4897.0], [24.2, 4897.0], [24.3, 4897.0], [24.4, 4897.0], [24.5, 4897.0], [24.6, 4897.0], [24.7, 4897.0], [24.8, 4897.0], [24.9, 4897.0], [25.0, 4897.0], [25.1, 4897.0], [25.2, 4897.0], [25.3, 4897.0], [25.4, 4921.0], [25.5, 4921.0], [25.6, 4921.0], [25.7, 4921.0], [25.8, 4921.0], [25.9, 4921.0], [26.0, 4921.0], [26.1, 4921.0], [26.2, 4921.0], [26.3, 4921.0], [26.4, 4921.0], [26.5, 4921.0], [26.6, 4921.0], [26.7, 4981.0], [26.8, 4981.0], [26.9, 4981.0], [27.0, 4981.0], [27.1, 4981.0], [27.2, 4981.0], [27.3, 4981.0], [27.4, 4981.0], [27.5, 4981.0], [27.6, 4981.0], [27.7, 4981.0], [27.8, 4981.0], [27.9, 4981.0], [28.0, 4998.0], [28.1, 4998.0], [28.2, 4998.0], [28.3, 4998.0], [28.4, 4998.0], [28.5, 4998.0], [28.6, 4998.0], [28.7, 4998.0], [28.8, 4998.0], [28.9, 4998.0], [29.0, 4998.0], [29.1, 4998.0], [29.2, 4998.0], [29.3, 4998.0], [29.4, 5092.0], [29.5, 5092.0], [29.6, 5092.0], [29.7, 5092.0], [29.8, 5092.0], [29.9, 5092.0], [30.0, 5092.0], [30.1, 5092.0], [30.2, 5092.0], [30.3, 5092.0], [30.4, 5092.0], [30.5, 5092.0], [30.6, 5092.0], [30.7, 5102.0], [30.8, 5102.0], [30.9, 5102.0], [31.0, 5102.0], [31.1, 5102.0], [31.2, 5102.0], [31.3, 5102.0], [31.4, 5102.0], [31.5, 5102.0], [31.6, 5102.0], [31.7, 5102.0], [31.8, 5102.0], [31.9, 5102.0], [32.0, 5254.0], [32.1, 5254.0], [32.2, 5254.0], [32.3, 5254.0], [32.4, 5254.0], [32.5, 5254.0], [32.6, 5254.0], [32.7, 5254.0], [32.8, 5254.0], [32.9, 5254.0], [33.0, 5254.0], [33.1, 5254.0], [33.2, 5254.0], [33.3, 5254.0], [33.4, 5290.0], [33.5, 5290.0], [33.6, 5290.0], [33.7, 5290.0], [33.8, 5290.0], [33.9, 5290.0], [34.0, 5290.0], [34.1, 5290.0], [34.2, 5290.0], [34.3, 5290.0], [34.4, 5290.0], [34.5, 5290.0], [34.6, 5290.0], [34.7, 5293.0], [34.8, 5293.0], [34.9, 5293.0], [35.0, 5293.0], [35.1, 5293.0], [35.2, 5293.0], [35.3, 5293.0], [35.4, 5293.0], [35.5, 5293.0], [35.6, 5293.0], [35.7, 5293.0], [35.8, 5293.0], [35.9, 5293.0], [36.0, 5297.0], [36.1, 5297.0], [36.2, 5297.0], [36.3, 5297.0], [36.4, 5297.0], [36.5, 5297.0], [36.6, 5297.0], [36.7, 5297.0], [36.8, 5297.0], [36.9, 5297.0], [37.0, 5297.0], [37.1, 5297.0], [37.2, 5297.0], [37.3, 5297.0], [37.4, 5311.0], [37.5, 5311.0], [37.6, 5311.0], [37.7, 5311.0], [37.8, 5311.0], [37.9, 5311.0], [38.0, 5311.0], [38.1, 5311.0], [38.2, 5311.0], [38.3, 5311.0], [38.4, 5311.0], [38.5, 5311.0], [38.6, 5311.0], [38.7, 5354.0], [38.8, 5354.0], [38.9, 5354.0], [39.0, 5354.0], [39.1, 5354.0], [39.2, 5354.0], [39.3, 5354.0], [39.4, 5354.0], [39.5, 5354.0], [39.6, 5354.0], [39.7, 5354.0], [39.8, 5354.0], [39.9, 5354.0], [40.0, 5401.0], [40.1, 5401.0], [40.2, 5401.0], [40.3, 5401.0], [40.4, 5401.0], [40.5, 5401.0], [40.6, 5401.0], [40.7, 5401.0], [40.8, 5401.0], [40.9, 5401.0], [41.0, 5401.0], [41.1, 5401.0], [41.2, 5401.0], [41.3, 5401.0], [41.4, 5458.0], [41.5, 5458.0], [41.6, 5458.0], [41.7, 5458.0], [41.8, 5458.0], [41.9, 5458.0], [42.0, 5458.0], [42.1, 5458.0], [42.2, 5458.0], [42.3, 5458.0], [42.4, 5458.0], [42.5, 5458.0], [42.6, 5458.0], [42.7, 5524.0], [42.8, 5524.0], [42.9, 5524.0], [43.0, 5524.0], [43.1, 5524.0], [43.2, 5524.0], [43.3, 5524.0], [43.4, 5524.0], [43.5, 5524.0], [43.6, 5524.0], [43.7, 5524.0], [43.8, 5524.0], [43.9, 5524.0], [44.0, 5524.0], [44.1, 5545.0], [44.2, 5545.0], [44.3, 5545.0], [44.4, 5545.0], [44.5, 5545.0], [44.6, 5545.0], [44.7, 5545.0], [44.8, 5545.0], [44.9, 5545.0], [45.0, 5545.0], [45.1, 5545.0], [45.2, 5545.0], [45.3, 5545.0], [45.4, 5671.0], [45.5, 5671.0], [45.6, 5671.0], [45.7, 5671.0], [45.8, 5671.0], [45.9, 5671.0], [46.0, 5671.0], [46.1, 5671.0], [46.2, 5671.0], [46.3, 5671.0], [46.4, 5671.0], [46.5, 5671.0], [46.6, 5671.0], [46.7, 5757.0], [46.8, 5757.0], [46.9, 5757.0], [47.0, 5757.0], [47.1, 5757.0], [47.2, 5757.0], [47.3, 5757.0], [47.4, 5757.0], [47.5, 5757.0], [47.6, 5757.0], [47.7, 5757.0], [47.8, 5757.0], [47.9, 5757.0], [48.0, 5757.0], [48.1, 5783.0], [48.2, 5783.0], [48.3, 5783.0], [48.4, 5783.0], [48.5, 5783.0], [48.6, 5783.0], [48.7, 5783.0], [48.8, 5783.0], [48.9, 5783.0], [49.0, 5783.0], [49.1, 5783.0], [49.2, 5783.0], [49.3, 5783.0], [49.4, 5920.0], [49.5, 5920.0], [49.6, 5920.0], [49.7, 5920.0], [49.8, 5920.0], [49.9, 5920.0], [50.0, 5920.0], [50.1, 5920.0], [50.2, 5920.0], [50.3, 5920.0], [50.4, 5920.0], [50.5, 5920.0], [50.6, 5920.0], [50.7, 5935.0], [50.8, 5935.0], [50.9, 5935.0], [51.0, 5935.0], [51.1, 5935.0], [51.2, 5935.0], [51.3, 5935.0], [51.4, 5935.0], [51.5, 5935.0], [51.6, 5935.0], [51.7, 5935.0], [51.8, 5935.0], [51.9, 5935.0], [52.0, 5935.0], [52.1, 5938.0], [52.2, 5938.0], [52.3, 5938.0], [52.4, 5938.0], [52.5, 5938.0], [52.6, 5938.0], [52.7, 5938.0], [52.8, 5938.0], [52.9, 5938.0], [53.0, 5938.0], [53.1, 5938.0], [53.2, 5938.0], [53.3, 5938.0], [53.4, 5941.0], [53.5, 5941.0], [53.6, 5941.0], [53.7, 5941.0], [53.8, 5941.0], [53.9, 5941.0], [54.0, 5941.0], [54.1, 5941.0], [54.2, 5941.0], [54.3, 5941.0], [54.4, 5941.0], [54.5, 5941.0], [54.6, 5941.0], [54.7, 5966.0], [54.8, 5966.0], [54.9, 5966.0], [55.0, 5966.0], [55.1, 5966.0], [55.2, 5966.0], [55.3, 5966.0], [55.4, 5966.0], [55.5, 5966.0], [55.6, 5966.0], [55.7, 5966.0], [55.8, 5966.0], [55.9, 5966.0], [56.0, 5966.0], [56.1, 5968.0], [56.2, 5968.0], [56.3, 5968.0], [56.4, 5968.0], [56.5, 5968.0], [56.6, 5968.0], [56.7, 5968.0], [56.8, 5968.0], [56.9, 5968.0], [57.0, 5968.0], [57.1, 5968.0], [57.2, 5968.0], [57.3, 5968.0], [57.4, 5989.0], [57.5, 5989.0], [57.6, 5989.0], [57.7, 5989.0], [57.8, 5989.0], [57.9, 5989.0], [58.0, 5989.0], [58.1, 5989.0], [58.2, 5989.0], [58.3, 5989.0], [58.4, 5989.0], [58.5, 5989.0], [58.6, 5989.0], [58.7, 6101.0], [58.8, 6101.0], [58.9, 6101.0], [59.0, 6101.0], [59.1, 6101.0], [59.2, 6101.0], [59.3, 6101.0], [59.4, 6101.0], [59.5, 6101.0], [59.6, 6101.0], [59.7, 6101.0], [59.8, 6101.0], [59.9, 6101.0], [60.0, 6101.0], [60.1, 6109.0], [60.2, 6109.0], [60.3, 6109.0], [60.4, 6109.0], [60.5, 6109.0], [60.6, 6109.0], [60.7, 6109.0], [60.8, 6109.0], [60.9, 6109.0], [61.0, 6109.0], [61.1, 6109.0], [61.2, 6109.0], [61.3, 6109.0], [61.4, 6141.0], [61.5, 6141.0], [61.6, 6141.0], [61.7, 6141.0], [61.8, 6141.0], [61.9, 6141.0], [62.0, 6141.0], [62.1, 6141.0], [62.2, 6141.0], [62.3, 6141.0], [62.4, 6141.0], [62.5, 6141.0], [62.6, 6141.0], [62.7, 6185.0], [62.8, 6185.0], [62.9, 6185.0], [63.0, 6185.0], [63.1, 6185.0], [63.2, 6185.0], [63.3, 6185.0], [63.4, 6185.0], [63.5, 6185.0], [63.6, 6185.0], [63.7, 6185.0], [63.8, 6185.0], [63.9, 6185.0], [64.0, 6185.0], [64.1, 6207.0], [64.2, 6207.0], [64.3, 6207.0], [64.4, 6207.0], [64.5, 6207.0], [64.6, 6207.0], [64.7, 6207.0], [64.8, 6207.0], [64.9, 6207.0], [65.0, 6207.0], [65.1, 6207.0], [65.2, 6207.0], [65.3, 6207.0], [65.4, 6210.0], [65.5, 6210.0], [65.6, 6210.0], [65.7, 6210.0], [65.8, 6210.0], [65.9, 6210.0], [66.0, 6210.0], [66.1, 6210.0], [66.2, 6210.0], [66.3, 6210.0], [66.4, 6210.0], [66.5, 6210.0], [66.6, 6210.0], [66.7, 6346.0], [66.8, 6346.0], [66.9, 6346.0], [67.0, 6346.0], [67.1, 6346.0], [67.2, 6346.0], [67.3, 6346.0], [67.4, 6346.0], [67.5, 6346.0], [67.6, 6346.0], [67.7, 6346.0], [67.8, 6346.0], [67.9, 6346.0], [68.0, 6346.0], [68.1, 6390.0], [68.2, 6390.0], [68.3, 6390.0], [68.4, 6390.0], [68.5, 6390.0], [68.6, 6390.0], [68.7, 6390.0], [68.8, 6390.0], [68.9, 6390.0], [69.0, 6390.0], [69.1, 6390.0], [69.2, 6390.0], [69.3, 6390.0], [69.4, 6392.0], [69.5, 6392.0], [69.6, 6392.0], [69.7, 6392.0], [69.8, 6392.0], [69.9, 6392.0], [70.0, 6392.0], [70.1, 6392.0], [70.2, 6392.0], [70.3, 6392.0], [70.4, 6392.0], [70.5, 6392.0], [70.6, 6392.0], [70.7, 6401.0], [70.8, 6401.0], [70.9, 6401.0], [71.0, 6401.0], [71.1, 6401.0], [71.2, 6401.0], [71.3, 6401.0], [71.4, 6401.0], [71.5, 6401.0], [71.6, 6401.0], [71.7, 6401.0], [71.8, 6401.0], [71.9, 6401.0], [72.0, 6401.0], [72.1, 6490.0], [72.2, 6490.0], [72.3, 6490.0], [72.4, 6490.0], [72.5, 6490.0], [72.6, 6490.0], [72.7, 6490.0], [72.8, 6490.0], [72.9, 6490.0], [73.0, 6490.0], [73.1, 6490.0], [73.2, 6490.0], [73.3, 6490.0], [73.4, 6503.0], [73.5, 6503.0], [73.6, 6503.0], [73.7, 6503.0], [73.8, 6503.0], [73.9, 6503.0], [74.0, 6503.0], [74.1, 6503.0], [74.2, 6503.0], [74.3, 6503.0], [74.4, 6503.0], [74.5, 6503.0], [74.6, 6503.0], [74.7, 6586.0], [74.8, 6586.0], [74.9, 6586.0], [75.0, 6586.0], [75.1, 6586.0], [75.2, 6586.0], [75.3, 6586.0], [75.4, 6586.0], [75.5, 6586.0], [75.6, 6586.0], [75.7, 6586.0], [75.8, 6586.0], [75.9, 6586.0], [76.0, 6594.0], [76.1, 6594.0], [76.2, 6594.0], [76.3, 6594.0], [76.4, 6594.0], [76.5, 6594.0], [76.6, 6594.0], [76.7, 6594.0], [76.8, 6594.0], [76.9, 6594.0], [77.0, 6594.0], [77.1, 6594.0], [77.2, 6594.0], [77.3, 6594.0], [77.4, 6697.0], [77.5, 6697.0], [77.6, 6697.0], [77.7, 6697.0], [77.8, 6697.0], [77.9, 6697.0], [78.0, 6697.0], [78.1, 6697.0], [78.2, 6697.0], [78.3, 6697.0], [78.4, 6697.0], [78.5, 6697.0], [78.6, 6697.0], [78.7, 6715.0], [78.8, 6715.0], [78.9, 6715.0], [79.0, 6715.0], [79.1, 6715.0], [79.2, 6715.0], [79.3, 6715.0], [79.4, 6715.0], [79.5, 6715.0], [79.6, 6715.0], [79.7, 6715.0], [79.8, 6715.0], [79.9, 6715.0], [80.0, 6777.0], [80.1, 6777.0], [80.2, 6777.0], [80.3, 6777.0], [80.4, 6777.0], [80.5, 6777.0], [80.6, 6777.0], [80.7, 6777.0], [80.8, 6777.0], [80.9, 6777.0], [81.0, 6777.0], [81.1, 6777.0], [81.2, 6777.0], [81.3, 6777.0], [81.4, 6777.0], [81.5, 6777.0], [81.6, 6777.0], [81.7, 6777.0], [81.8, 6777.0], [81.9, 6777.0], [82.0, 6777.0], [82.1, 6777.0], [82.2, 6777.0], [82.3, 6777.0], [82.4, 6777.0], [82.5, 6777.0], [82.6, 6777.0], [82.7, 6795.0], [82.8, 6795.0], [82.9, 6795.0], [83.0, 6795.0], [83.1, 6795.0], [83.2, 6795.0], [83.3, 6795.0], [83.4, 6795.0], [83.5, 6795.0], [83.6, 6795.0], [83.7, 6795.0], [83.8, 6795.0], [83.9, 6795.0], [84.0, 6832.0], [84.1, 6832.0], [84.2, 6832.0], [84.3, 6832.0], [84.4, 6832.0], [84.5, 6832.0], [84.6, 6832.0], [84.7, 6832.0], [84.8, 6832.0], [84.9, 6832.0], [85.0, 6832.0], [85.1, 6832.0], [85.2, 6832.0], [85.3, 6832.0], [85.4, 6843.0], [85.5, 6843.0], [85.6, 6843.0], [85.7, 6843.0], [85.8, 6843.0], [85.9, 6843.0], [86.0, 6843.0], [86.1, 6843.0], [86.2, 6843.0], [86.3, 6843.0], [86.4, 6843.0], [86.5, 6843.0], [86.6, 6843.0], [86.7, 6914.0], [86.8, 6914.0], [86.9, 6914.0], [87.0, 6914.0], [87.1, 6914.0], [87.2, 6914.0], [87.3, 6914.0], [87.4, 6914.0], [87.5, 6914.0], [87.6, 6914.0], [87.7, 6914.0], [87.8, 6914.0], [87.9, 6914.0], [88.0, 6916.0], [88.1, 6916.0], [88.2, 6916.0], [88.3, 6916.0], [88.4, 6916.0], [88.5, 6916.0], [88.6, 6916.0], [88.7, 6916.0], [88.8, 6916.0], [88.9, 6916.0], [89.0, 6916.0], [89.1, 6916.0], [89.2, 6916.0], [89.3, 6916.0], [89.4, 6916.0], [89.5, 6916.0], [89.6, 6916.0], [89.7, 6916.0], [89.8, 6916.0], [89.9, 6916.0], [90.0, 6916.0], [90.1, 6916.0], [90.2, 6916.0], [90.3, 6916.0], [90.4, 6916.0], [90.5, 6916.0], [90.6, 6916.0], [90.7, 7030.0], [90.8, 7030.0], [90.9, 7030.0], [91.0, 7030.0], [91.1, 7030.0], [91.2, 7030.0], [91.3, 7030.0], [91.4, 7030.0], [91.5, 7030.0], [91.6, 7030.0], [91.7, 7030.0], [91.8, 7030.0], [91.9, 7030.0], [92.0, 7113.0], [92.1, 7113.0], [92.2, 7113.0], [92.3, 7113.0], [92.4, 7113.0], [92.5, 7113.0], [92.6, 7113.0], [92.7, 7113.0], [92.8, 7113.0], [92.9, 7113.0], [93.0, 7113.0], [93.1, 7113.0], [93.2, 7113.0], [93.3, 7113.0], [93.4, 7199.0], [93.5, 7199.0], [93.6, 7199.0], [93.7, 7199.0], [93.8, 7199.0], [93.9, 7199.0], [94.0, 7199.0], [94.1, 7199.0], [94.2, 7199.0], [94.3, 7199.0], [94.4, 7199.0], [94.5, 7199.0], [94.6, 7199.0], [94.7, 7251.0], [94.8, 7251.0], [94.9, 7251.0], [95.0, 7251.0], [95.1, 7251.0], [95.2, 7251.0], [95.3, 7251.0], [95.4, 7251.0], [95.5, 7251.0], [95.6, 7251.0], [95.7, 7251.0], [95.8, 7251.0], [95.9, 7251.0], [96.0, 7320.0], [96.1, 7320.0], [96.2, 7320.0], [96.3, 7320.0], [96.4, 7320.0], [96.5, 7320.0], [96.6, 7320.0], [96.7, 7320.0], [96.8, 7320.0], [96.9, 7320.0], [97.0, 7320.0], [97.1, 7320.0], [97.2, 7320.0], [97.3, 7320.0], [97.4, 7330.0], [97.5, 7330.0], [97.6, 7330.0], [97.7, 7330.0], [97.8, 7330.0], [97.9, 7330.0], [98.0, 7330.0], [98.1, 7330.0], [98.2, 7330.0], [98.3, 7330.0], [98.4, 7330.0], [98.5, 7330.0], [98.6, 7330.0], [98.7, 7374.0], [98.8, 7374.0], [98.9, 7374.0], [99.0, 7374.0], [99.1, 7374.0], [99.2, 7374.0], [99.3, 7374.0], [99.4, 7374.0], [99.5, 7374.0], [99.6, 7374.0], [99.7, 7374.0], [99.8, 7374.0], [99.9, 7374.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3200.0, "maxY": 7.0, "series": [{"data": [[3200.0, 1.0], [3300.0, 1.0], [3500.0, 1.0], [3900.0, 1.0], [4100.0, 2.0], [4200.0, 2.0], [4400.0, 2.0], [4500.0, 3.0], [4600.0, 3.0], [4700.0, 2.0], [4800.0, 1.0], [4900.0, 3.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 4.0], [5300.0, 2.0], [5500.0, 2.0], [5400.0, 2.0], [5600.0, 1.0], [5700.0, 2.0], [5900.0, 7.0], [6100.0, 4.0], [6200.0, 2.0], [6300.0, 3.0], [6400.0, 2.0], [6500.0, 3.0], [6600.0, 1.0], [6700.0, 4.0], [6800.0, 2.0], [6900.0, 3.0], [7000.0, 1.0], [7100.0, 2.0], [7200.0, 1.0], [7300.0, 3.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 74.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 74.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 38.15999999999999, "minX": 1.57172532E12, "maxY": 38.15999999999999, "series": [{"data": [[1.57172532E12, 38.15999999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172532E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3267.0, "minX": 1.0, "maxY": 7374.0, "series": [{"data": [[2.0, 7374.0], [3.0, 6916.0], [4.0, 7113.0], [5.0, 7330.0], [6.0, 6914.0], [7.0, 7320.0], [8.0, 7251.0], [10.0, 7114.5], [11.0, 6503.0], [12.0, 6594.0], [13.0, 6715.0], [14.0, 6795.0], [15.0, 6697.0], [16.0, 6586.0], [17.0, 6843.0], [18.0, 6832.0], [20.0, 6777.0], [21.0, 6390.0], [23.0, 6154.0], [25.0, 6299.5], [26.0, 6392.0], [27.0, 6346.0], [28.0, 6401.0], [29.0, 5968.0], [30.0, 5920.0], [31.0, 5989.0], [33.0, 6210.0], [32.0, 5935.0], [35.0, 6163.0], [37.0, 5966.0], [36.0, 5757.0], [39.0, 5938.0], [38.0, 5941.0], [41.0, 5671.0], [40.0, 5783.0], [45.0, 5311.0], [44.0, 5404.333333333333], [47.0, 5524.0], [46.0, 5545.0], [49.0, 5297.0], [48.0, 4998.0], [51.0, 5290.0], [50.0, 5293.0], [53.0, 5254.0], [52.0, 4921.0], [55.0, 5092.0], [54.0, 5102.0], [57.0, 4981.0], [56.0, 4897.0], [59.0, 4649.0], [61.0, 4613.5], [63.0, 4622.0], [62.0, 4672.0], [67.0, 4252.0], [66.0, 4548.0], [65.0, 4588.0], [71.0, 4258.0], [70.0, 3965.0], [69.0, 4191.0], [68.0, 4483.0], [75.0, 3267.0], [73.0, 3599.0], [72.0, 4175.0], [1.0, 6916.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[38.15999999999999, 5693.866666666667]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 75.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 637.85, "minX": 1.57172532E12, "maxY": 2027.7333333333333, "series": [{"data": [[1.57172532E12, 2027.7333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57172532E12, 637.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172532E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5693.866666666667, "minX": 1.57172532E12, "maxY": 5693.866666666667, "series": [{"data": [[1.57172532E12, 5693.866666666667]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172532E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5531.76, "minX": 1.57172532E12, "maxY": 5531.76, "series": [{"data": [[1.57172532E12, 5531.76]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172532E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1068.9866666666674, "minX": 1.57172532E12, "maxY": 1068.9866666666674, "series": [{"data": [[1.57172532E12, 1068.9866666666674]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172532E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3208.0, "minX": 1.57172532E12, "maxY": 7374.0, "series": [{"data": [[1.57172532E12, 7374.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57172532E12, 3208.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57172532E12, 6973.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57172532E12, 7374.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57172532E12, 7268.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172532E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3326.0, "minX": 3.0, "maxY": 7156.0, "series": [{"data": [[18.0, 5458.0], [19.0, 4568.0], [10.0, 7156.0], [3.0, 3326.0], [25.0, 6392.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 4998.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 7058.0, "series": [{"data": [[18.0, 5358.0], [19.0, 4470.0], [10.0, 7058.0], [3.0, 3325.0], [25.0, 6292.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[18.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.57172532E12, "maxY": 1.25, "series": [{"data": [[1.57172532E12, 1.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172532E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57172532E12, "maxY": 1.2333333333333334, "series": [{"data": [[1.57172532E12, 1.2333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57172532E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172532E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57172532E12, "maxY": 1.2333333333333334, "series": [{"data": [[1.57172532E12, 0.016666666666666666]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57172532E12, 1.2333333333333334]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172532E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57172532E12, "maxY": 1.2333333333333334, "series": [{"data": [[1.57172532E12, 1.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57172532E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172532E12, "title": "Total Transactions Per Second"}},
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

