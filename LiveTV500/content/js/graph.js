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
        data: {"result": {"minY": 5405.0, "minX": 0.0, "maxY": 6208.0, "series": [{"data": [[0.0, 5405.0], [0.1, 5405.0], [0.2, 5421.0], [0.3, 5421.0], [0.4, 5424.0], [0.5, 5424.0], [0.6, 5424.0], [0.7, 5427.0], [0.8, 5430.0], [0.9, 5430.0], [1.0, 5431.0], [1.1, 5431.0], [1.2, 5431.0], [1.3, 5431.0], [1.4, 5431.0], [1.5, 5431.0], [1.6, 5435.0], [1.7, 5435.0], [1.8, 5436.0], [1.9, 5436.0], [2.0, 5436.0], [2.1, 5436.0], [2.2, 5437.0], [2.3, 5437.0], [2.4, 5437.0], [2.5, 5438.0], [2.6, 5438.0], [2.7, 5438.0], [2.8, 5438.0], [2.9, 5439.0], [3.0, 5439.0], [3.1, 5439.0], [3.2, 5439.0], [3.3, 5439.0], [3.4, 5439.0], [3.5, 5440.0], [3.6, 5440.0], [3.7, 5440.0], [3.8, 5440.0], [3.9, 5440.0], [4.0, 5441.0], [4.1, 5441.0], [4.2, 5441.0], [4.3, 5441.0], [4.4, 5442.0], [4.5, 5442.0], [4.6, 5442.0], [4.7, 5442.0], [4.8, 5442.0], [4.9, 5442.0], [5.0, 5443.0], [5.1, 5443.0], [5.2, 5443.0], [5.3, 5443.0], [5.4, 5445.0], [5.5, 5445.0], [5.6, 5445.0], [5.7, 5445.0], [5.8, 5445.0], [5.9, 5445.0], [6.0, 5445.0], [6.1, 5445.0], [6.2, 5445.0], [6.3, 5445.0], [6.4, 5445.0], [6.5, 5445.0], [6.6, 5445.0], [6.7, 5446.0], [6.8, 5446.0], [6.9, 5446.0], [7.0, 5446.0], [7.1, 5447.0], [7.2, 5447.0], [7.3, 5448.0], [7.4, 5448.0], [7.5, 5448.0], [7.6, 5448.0], [7.7, 5448.0], [7.8, 5448.0], [7.9, 5449.0], [8.0, 5449.0], [8.1, 5449.0], [8.2, 5449.0], [8.3, 5449.0], [8.4, 5451.0], [8.5, 5451.0], [8.6, 5451.0], [8.7, 5451.0], [8.8, 5451.0], [8.9, 5451.0], [9.0, 5451.0], [9.1, 5451.0], [9.2, 5451.0], [9.3, 5451.0], [9.4, 5452.0], [9.5, 5452.0], [9.6, 5452.0], [9.7, 5452.0], [9.8, 5453.0], [9.9, 5453.0], [10.0, 5453.0], [10.1, 5453.0], [10.2, 5453.0], [10.3, 5453.0], [10.4, 5453.0], [10.5, 5453.0], [10.6, 5453.0], [10.7, 5454.0], [10.8, 5454.0], [10.9, 5454.0], [11.0, 5454.0], [11.1, 5454.0], [11.2, 5454.0], [11.3, 5454.0], [11.4, 5454.0], [11.5, 5455.0], [11.6, 5455.0], [11.7, 5456.0], [11.8, 5456.0], [11.9, 5456.0], [12.0, 5456.0], [12.1, 5457.0], [12.2, 5457.0], [12.3, 5457.0], [12.4, 5457.0], [12.5, 5458.0], [12.6, 5458.0], [12.7, 5458.0], [12.8, 5458.0], [12.9, 5458.0], [13.0, 5458.0], [13.1, 5459.0], [13.2, 5459.0], [13.3, 5459.0], [13.4, 5459.0], [13.5, 5459.0], [13.6, 5459.0], [13.7, 5460.0], [13.8, 5460.0], [13.9, 5460.0], [14.0, 5460.0], [14.1, 5460.0], [14.2, 5460.0], [14.3, 5463.0], [14.4, 5463.0], [14.5, 5463.0], [14.6, 5463.0], [14.7, 5464.0], [14.8, 5466.0], [14.9, 5466.0], [15.0, 5466.0], [15.1, 5466.0], [15.2, 5466.0], [15.3, 5469.0], [15.4, 5470.0], [15.5, 5470.0], [15.6, 5470.0], [15.7, 5470.0], [15.8, 5471.0], [15.9, 5471.0], [16.0, 5471.0], [16.1, 5471.0], [16.2, 5471.0], [16.3, 5471.0], [16.4, 5471.0], [16.5, 5474.0], [16.6, 5475.0], [16.7, 5475.0], [16.8, 5475.0], [16.9, 5475.0], [17.0, 5476.0], [17.1, 5476.0], [17.2, 5476.0], [17.3, 5476.0], [17.4, 5476.0], [17.5, 5476.0], [17.6, 5476.0], [17.7, 5476.0], [17.8, 5477.0], [17.9, 5477.0], [18.0, 5477.0], [18.1, 5477.0], [18.2, 5477.0], [18.3, 5477.0], [18.4, 5477.0], [18.5, 5478.0], [18.6, 5483.0], [18.7, 5483.0], [18.8, 5483.0], [18.9, 5483.0], [19.0, 5485.0], [19.1, 5485.0], [19.2, 5486.0], [19.3, 5486.0], [19.4, 5487.0], [19.5, 5487.0], [19.6, 5489.0], [19.7, 5489.0], [19.8, 5490.0], [19.9, 5490.0], [20.0, 5491.0], [20.1, 5491.0], [20.2, 5491.0], [20.3, 5491.0], [20.4, 5654.0], [20.5, 5654.0], [20.6, 5681.0], [20.7, 5681.0], [20.8, 5682.0], [20.9, 5682.0], [21.0, 5682.0], [21.1, 5682.0], [21.2, 5683.0], [21.3, 5683.0], [21.4, 5683.0], [21.5, 5683.0], [21.6, 5684.0], [21.7, 5684.0], [21.8, 5684.0], [21.9, 5684.0], [22.0, 5684.0], [22.1, 5684.0], [22.2, 5685.0], [22.3, 5685.0], [22.4, 5685.0], [22.5, 5685.0], [22.6, 5686.0], [22.7, 5686.0], [22.8, 5686.0], [22.9, 5686.0], [23.0, 5688.0], [23.1, 5688.0], [23.2, 5688.0], [23.3, 5688.0], [23.4, 5689.0], [23.5, 5689.0], [23.6, 5696.0], [23.7, 5696.0], [23.8, 5696.0], [23.9, 5696.0], [24.0, 5697.0], [24.1, 5697.0], [24.2, 5698.0], [24.3, 5698.0], [24.4, 5698.0], [24.5, 5698.0], [24.6, 5699.0], [24.7, 5699.0], [24.8, 5701.0], [24.9, 5701.0], [25.0, 5709.0], [25.1, 5709.0], [25.2, 5714.0], [25.3, 5714.0], [25.4, 5715.0], [25.5, 5715.0], [25.6, 5715.0], [25.7, 5715.0], [25.8, 5716.0], [25.9, 5716.0], [26.0, 5716.0], [26.1, 5716.0], [26.2, 5718.0], [26.3, 5718.0], [26.4, 5718.0], [26.5, 5718.0], [26.6, 5718.0], [26.7, 5718.0], [26.8, 5721.0], [26.9, 5721.0], [27.0, 5722.0], [27.1, 5722.0], [27.2, 5726.0], [27.3, 5726.0], [27.4, 5729.0], [27.5, 5729.0], [27.6, 5740.0], [27.7, 5740.0], [27.8, 5741.0], [27.9, 5741.0], [28.0, 5742.0], [28.1, 5742.0], [28.2, 5744.0], [28.3, 5744.0], [28.4, 5744.0], [28.5, 5744.0], [28.6, 5744.0], [28.7, 5744.0], [28.8, 5744.0], [28.9, 5744.0], [29.0, 5745.0], [29.1, 5745.0], [29.2, 5746.0], [29.3, 5746.0], [29.4, 5746.0], [29.5, 5746.0], [29.6, 5747.0], [29.7, 5747.0], [29.8, 5747.0], [29.9, 5747.0], [30.0, 5747.0], [30.1, 5747.0], [30.2, 5748.0], [30.3, 5748.0], [30.4, 5748.0], [30.5, 5748.0], [30.6, 5749.0], [30.7, 5749.0], [30.8, 5751.0], [30.9, 5751.0], [31.0, 5751.0], [31.1, 5751.0], [31.2, 5753.0], [31.3, 5753.0], [31.4, 5755.0], [31.5, 5755.0], [31.6, 5756.0], [31.7, 5756.0], [31.8, 5756.0], [31.9, 5756.0], [32.0, 5756.0], [32.1, 5756.0], [32.2, 5757.0], [32.3, 5757.0], [32.4, 5758.0], [32.5, 5758.0], [32.6, 5758.0], [32.7, 5758.0], [32.8, 5759.0], [32.9, 5759.0], [33.0, 5759.0], [33.1, 5759.0], [33.2, 5761.0], [33.3, 5761.0], [33.4, 5761.0], [33.5, 5761.0], [33.6, 5770.0], [33.7, 5770.0], [33.8, 5771.0], [33.9, 5771.0], [34.0, 5773.0], [34.1, 5773.0], [34.2, 5773.0], [34.3, 5773.0], [34.4, 5773.0], [34.5, 5773.0], [34.6, 5773.0], [34.7, 5773.0], [34.8, 5774.0], [34.9, 5774.0], [35.0, 5775.0], [35.1, 5775.0], [35.2, 5776.0], [35.3, 5776.0], [35.4, 5777.0], [35.5, 5777.0], [35.6, 5777.0], [35.7, 5777.0], [35.8, 5778.0], [35.9, 5778.0], [36.0, 5779.0], [36.1, 5779.0], [36.2, 5781.0], [36.3, 5781.0], [36.4, 5783.0], [36.5, 5783.0], [36.6, 5783.0], [36.7, 5783.0], [36.8, 5783.0], [36.9, 5783.0], [37.0, 5784.0], [37.1, 5784.0], [37.2, 5785.0], [37.3, 5785.0], [37.4, 5786.0], [37.5, 5786.0], [37.6, 5786.0], [37.7, 5786.0], [37.8, 5787.0], [37.9, 5787.0], [38.0, 5787.0], [38.1, 5787.0], [38.2, 5787.0], [38.3, 5787.0], [38.4, 5791.0], [38.5, 5791.0], [38.6, 5791.0], [38.7, 5791.0], [38.8, 5799.0], [38.9, 5799.0], [39.0, 5805.0], [39.1, 5805.0], [39.2, 5806.0], [39.3, 5806.0], [39.4, 5806.0], [39.5, 5806.0], [39.6, 5813.0], [39.7, 5813.0], [39.8, 5813.0], [39.9, 5813.0], [40.0, 5821.0], [40.1, 5821.0], [40.2, 5851.0], [40.3, 5851.0], [40.4, 5852.0], [40.5, 5852.0], [40.6, 5853.0], [40.7, 5853.0], [40.8, 5853.0], [40.9, 5857.0], [41.0, 5857.0], [41.1, 5857.0], [41.2, 5858.0], [41.3, 5858.0], [41.4, 5858.0], [41.5, 5858.0], [41.6, 5860.0], [41.7, 5860.0], [41.8, 5860.0], [41.9, 5870.0], [42.0, 5870.0], [42.1, 5871.0], [42.2, 5871.0], [42.3, 5872.0], [42.4, 5872.0], [42.5, 5872.0], [42.6, 5872.0], [42.7, 5874.0], [42.8, 5874.0], [42.9, 5874.0], [43.0, 5874.0], [43.1, 5875.0], [43.2, 5875.0], [43.3, 5875.0], [43.4, 5875.0], [43.5, 5876.0], [43.6, 5876.0], [43.7, 5876.0], [43.8, 5876.0], [43.9, 5877.0], [44.0, 5877.0], [44.1, 5877.0], [44.2, 5878.0], [44.3, 5878.0], [44.4, 5878.0], [44.5, 5878.0], [44.6, 5879.0], [44.7, 5879.0], [44.8, 5879.0], [44.9, 5879.0], [45.0, 5879.0], [45.1, 5879.0], [45.2, 5879.0], [45.3, 5879.0], [45.4, 5879.0], [45.5, 5879.0], [45.6, 5880.0], [45.7, 5880.0], [45.8, 5880.0], [45.9, 5880.0], [46.0, 5880.0], [46.1, 5880.0], [46.2, 5881.0], [46.3, 5881.0], [46.4, 5881.0], [46.5, 5881.0], [46.6, 5881.0], [46.7, 5881.0], [46.8, 5881.0], [46.9, 5883.0], [47.0, 5883.0], [47.1, 5885.0], [47.2, 5885.0], [47.3, 5886.0], [47.4, 5886.0], [47.5, 5886.0], [47.6, 5886.0], [47.7, 5886.0], [47.8, 5886.0], [47.9, 5887.0], [48.0, 5887.0], [48.1, 5888.0], [48.2, 5888.0], [48.3, 5888.0], [48.4, 5888.0], [48.5, 5888.0], [48.6, 5888.0], [48.7, 5889.0], [48.8, 5889.0], [48.9, 5891.0], [49.0, 5891.0], [49.1, 5892.0], [49.2, 5892.0], [49.3, 5892.0], [49.4, 5892.0], [49.5, 5893.0], [49.6, 5893.0], [49.7, 5893.0], [49.8, 5893.0], [49.9, 5896.0], [50.0, 5896.0], [50.1, 5896.0], [50.2, 5896.0], [50.3, 5897.0], [50.4, 5897.0], [50.5, 5897.0], [50.6, 5897.0], [50.7, 5898.0], [50.8, 5898.0], [50.9, 5900.0], [51.0, 5900.0], [51.1, 5900.0], [51.2, 5900.0], [51.3, 5901.0], [51.4, 5901.0], [51.5, 5904.0], [51.6, 5904.0], [51.7, 5905.0], [51.8, 5905.0], [51.9, 5905.0], [52.0, 5905.0], [52.1, 5906.0], [52.2, 5906.0], [52.3, 5906.0], [52.4, 5906.0], [52.5, 5907.0], [52.6, 5907.0], [52.7, 5907.0], [52.8, 5907.0], [52.9, 5908.0], [53.0, 5908.0], [53.1, 5908.0], [53.2, 5908.0], [53.3, 5908.0], [53.4, 5908.0], [53.5, 5908.0], [53.6, 5908.0], [53.7, 5909.0], [53.8, 5909.0], [53.9, 5909.0], [54.0, 5909.0], [54.1, 5909.0], [54.2, 5909.0], [54.3, 5909.0], [54.4, 5909.0], [54.5, 5910.0], [54.6, 5910.0], [54.7, 5910.0], [54.8, 5910.0], [54.9, 5912.0], [55.0, 5912.0], [55.1, 5913.0], [55.2, 5913.0], [55.3, 5913.0], [55.4, 5913.0], [55.5, 5913.0], [55.6, 5913.0], [55.7, 5914.0], [55.8, 5914.0], [55.9, 5917.0], [56.0, 5917.0], [56.1, 5917.0], [56.2, 5917.0], [56.3, 5930.0], [56.4, 5930.0], [56.5, 5932.0], [56.6, 5932.0], [56.7, 5934.0], [56.8, 5934.0], [56.9, 5934.0], [57.0, 5934.0], [57.1, 5934.0], [57.2, 5934.0], [57.3, 5935.0], [57.4, 5935.0], [57.5, 5937.0], [57.6, 5937.0], [57.7, 5938.0], [57.8, 5938.0], [57.9, 5939.0], [58.0, 5939.0], [58.1, 5945.0], [58.2, 5945.0], [58.3, 5945.0], [58.4, 5945.0], [58.5, 5947.0], [58.6, 5947.0], [58.7, 5948.0], [58.8, 5948.0], [58.9, 5967.0], [59.0, 5967.0], [59.1, 5973.0], [59.2, 5973.0], [59.3, 6012.0], [59.4, 6012.0], [59.5, 6019.0], [59.6, 6019.0], [59.7, 6020.0], [59.8, 6020.0], [59.9, 6020.0], [60.0, 6020.0], [60.1, 6020.0], [60.2, 6020.0], [60.3, 6022.0], [60.4, 6022.0], [60.5, 6022.0], [60.6, 6022.0], [60.7, 6023.0], [60.8, 6023.0], [60.9, 6023.0], [61.0, 6023.0], [61.1, 6024.0], [61.2, 6024.0], [61.3, 6024.0], [61.4, 6024.0], [61.5, 6024.0], [61.6, 6024.0], [61.7, 6025.0], [61.8, 6025.0], [61.9, 6025.0], [62.0, 6025.0], [62.1, 6025.0], [62.2, 6025.0], [62.3, 6026.0], [62.4, 6026.0], [62.5, 6027.0], [62.6, 6027.0], [62.7, 6027.0], [62.8, 6027.0], [62.9, 6027.0], [63.0, 6027.0], [63.1, 6028.0], [63.2, 6028.0], [63.3, 6028.0], [63.4, 6028.0], [63.5, 6028.0], [63.6, 6028.0], [63.7, 6028.0], [63.8, 6028.0], [63.9, 6028.0], [64.0, 6028.0], [64.1, 6029.0], [64.2, 6029.0], [64.3, 6029.0], [64.4, 6029.0], [64.5, 6029.0], [64.6, 6029.0], [64.7, 6030.0], [64.8, 6030.0], [64.9, 6030.0], [65.0, 6030.0], [65.1, 6031.0], [65.2, 6031.0], [65.3, 6031.0], [65.4, 6031.0], [65.5, 6031.0], [65.6, 6031.0], [65.7, 6031.0], [65.8, 6031.0], [65.9, 6031.0], [66.0, 6031.0], [66.1, 6031.0], [66.2, 6031.0], [66.3, 6031.0], [66.4, 6031.0], [66.5, 6032.0], [66.6, 6032.0], [66.7, 6032.0], [66.8, 6032.0], [66.9, 6033.0], [67.0, 6033.0], [67.1, 6033.0], [67.2, 6033.0], [67.3, 6034.0], [67.4, 6034.0], [67.5, 6034.0], [67.6, 6034.0], [67.7, 6034.0], [67.8, 6034.0], [67.9, 6034.0], [68.0, 6034.0], [68.1, 6035.0], [68.2, 6035.0], [68.3, 6035.0], [68.4, 6035.0], [68.5, 6035.0], [68.6, 6035.0], [68.7, 6035.0], [68.8, 6035.0], [68.9, 6037.0], [69.0, 6037.0], [69.1, 6037.0], [69.2, 6037.0], [69.3, 6037.0], [69.4, 6037.0], [69.5, 6038.0], [69.6, 6038.0], [69.7, 6038.0], [69.8, 6038.0], [69.9, 6038.0], [70.0, 6038.0], [70.1, 6038.0], [70.2, 6038.0], [70.3, 6039.0], [70.4, 6039.0], [70.5, 6039.0], [70.6, 6039.0], [70.7, 6039.0], [70.8, 6039.0], [70.9, 6040.0], [71.0, 6040.0], [71.1, 6040.0], [71.2, 6040.0], [71.3, 6040.0], [71.4, 6040.0], [71.5, 6041.0], [71.6, 6041.0], [71.7, 6042.0], [71.8, 6042.0], [71.9, 6044.0], [72.0, 6044.0], [72.1, 6054.0], [72.2, 6054.0], [72.3, 6055.0], [72.4, 6055.0], [72.5, 6056.0], [72.6, 6056.0], [72.7, 6057.0], [72.8, 6057.0], [72.9, 6057.0], [73.0, 6057.0], [73.1, 6058.0], [73.2, 6058.0], [73.3, 6058.0], [73.4, 6058.0], [73.5, 6059.0], [73.6, 6059.0], [73.7, 6059.0], [73.8, 6059.0], [73.9, 6060.0], [74.0, 6060.0], [74.1, 6060.0], [74.2, 6060.0], [74.3, 6061.0], [74.4, 6061.0], [74.5, 6061.0], [74.6, 6061.0], [74.7, 6061.0], [74.8, 6061.0], [74.9, 6061.0], [75.0, 6061.0], [75.1, 6062.0], [75.2, 6062.0], [75.3, 6062.0], [75.4, 6062.0], [75.5, 6063.0], [75.6, 6063.0], [75.7, 6063.0], [75.8, 6063.0], [75.9, 6063.0], [76.0, 6063.0], [76.1, 6065.0], [76.2, 6065.0], [76.3, 6065.0], [76.4, 6065.0], [76.5, 6067.0], [76.6, 6067.0], [76.7, 6067.0], [76.8, 6067.0], [76.9, 6070.0], [77.0, 6070.0], [77.1, 6071.0], [77.2, 6071.0], [77.3, 6072.0], [77.4, 6072.0], [77.5, 6072.0], [77.6, 6072.0], [77.7, 6074.0], [77.8, 6074.0], [77.9, 6074.0], [78.0, 6074.0], [78.1, 6079.0], [78.2, 6079.0], [78.3, 6084.0], [78.4, 6084.0], [78.5, 6091.0], [78.6, 6091.0], [78.7, 6122.0], [78.8, 6122.0], [78.9, 6138.0], [79.0, 6138.0], [79.1, 6138.0], [79.2, 6138.0], [79.3, 6138.0], [79.4, 6138.0], [79.5, 6139.0], [79.6, 6139.0], [79.7, 6139.0], [79.8, 6139.0], [79.9, 6139.0], [80.0, 6139.0], [80.1, 6139.0], [80.2, 6139.0], [80.3, 6139.0], [80.4, 6139.0], [80.5, 6140.0], [80.6, 6140.0], [80.7, 6140.0], [80.8, 6140.0], [80.9, 6140.0], [81.0, 6140.0], [81.1, 6140.0], [81.2, 6140.0], [81.3, 6141.0], [81.4, 6141.0], [81.5, 6142.0], [81.6, 6142.0], [81.7, 6142.0], [81.8, 6142.0], [81.9, 6142.0], [82.0, 6142.0], [82.1, 6142.0], [82.2, 6142.0], [82.3, 6142.0], [82.4, 6142.0], [82.5, 6142.0], [82.6, 6142.0], [82.7, 6142.0], [82.8, 6142.0], [82.9, 6143.0], [83.0, 6143.0], [83.1, 6143.0], [83.2, 6143.0], [83.3, 6143.0], [83.4, 6143.0], [83.5, 6143.0], [83.6, 6143.0], [83.7, 6143.0], [83.8, 6143.0], [83.9, 6144.0], [84.0, 6144.0], [84.1, 6144.0], [84.2, 6144.0], [84.3, 6144.0], [84.4, 6144.0], [84.5, 6144.0], [84.6, 6144.0], [84.7, 6144.0], [84.8, 6144.0], [84.9, 6144.0], [85.0, 6144.0], [85.1, 6144.0], [85.2, 6144.0], [85.3, 6144.0], [85.4, 6144.0], [85.5, 6145.0], [85.6, 6145.0], [85.7, 6146.0], [85.8, 6146.0], [85.9, 6146.0], [86.0, 6146.0], [86.1, 6146.0], [86.2, 6146.0], [86.3, 6147.0], [86.4, 6147.0], [86.5, 6147.0], [86.6, 6147.0], [86.7, 6147.0], [86.8, 6147.0], [86.9, 6148.0], [87.0, 6148.0], [87.1, 6150.0], [87.2, 6150.0], [87.3, 6153.0], [87.4, 6153.0], [87.5, 6155.0], [87.6, 6155.0], [87.7, 6155.0], [87.8, 6155.0], [87.9, 6155.0], [88.0, 6155.0], [88.1, 6155.0], [88.2, 6155.0], [88.3, 6155.0], [88.4, 6155.0], [88.5, 6155.0], [88.6, 6155.0], [88.7, 6156.0], [88.8, 6156.0], [88.9, 6156.0], [89.0, 6156.0], [89.1, 6156.0], [89.2, 6156.0], [89.3, 6157.0], [89.4, 6157.0], [89.5, 6157.0], [89.6, 6157.0], [89.7, 6157.0], [89.8, 6157.0], [89.9, 6157.0], [90.0, 6157.0], [90.1, 6157.0], [90.2, 6157.0], [90.3, 6158.0], [90.4, 6158.0], [90.5, 6158.0], [90.6, 6158.0], [90.7, 6158.0], [90.8, 6158.0], [90.9, 6159.0], [91.0, 6159.0], [91.1, 6159.0], [91.2, 6159.0], [91.3, 6159.0], [91.4, 6159.0], [91.5, 6160.0], [91.6, 6160.0], [91.7, 6161.0], [91.8, 6161.0], [91.9, 6162.0], [92.0, 6162.0], [92.1, 6163.0], [92.2, 6163.0], [92.3, 6163.0], [92.4, 6163.0], [92.5, 6164.0], [92.6, 6164.0], [92.7, 6166.0], [92.8, 6166.0], [92.9, 6169.0], [93.0, 6169.0], [93.1, 6170.0], [93.2, 6170.0], [93.3, 6171.0], [93.4, 6171.0], [93.5, 6172.0], [93.6, 6172.0], [93.7, 6173.0], [93.8, 6173.0], [93.9, 6173.0], [94.0, 6173.0], [94.1, 6174.0], [94.2, 6174.0], [94.3, 6174.0], [94.4, 6174.0], [94.5, 6175.0], [94.6, 6175.0], [94.7, 6175.0], [94.8, 6175.0], [94.9, 6176.0], [95.0, 6176.0], [95.1, 6176.0], [95.2, 6176.0], [95.3, 6176.0], [95.4, 6176.0], [95.5, 6177.0], [95.6, 6177.0], [95.7, 6177.0], [95.8, 6177.0], [95.9, 6177.0], [96.0, 6177.0], [96.1, 6177.0], [96.2, 6177.0], [96.3, 6177.0], [96.4, 6177.0], [96.5, 6178.0], [96.6, 6178.0], [96.7, 6180.0], [96.8, 6180.0], [96.9, 6180.0], [97.0, 6180.0], [97.1, 6182.0], [97.2, 6182.0], [97.3, 6183.0], [97.4, 6183.0], [97.5, 6184.0], [97.6, 6184.0], [97.7, 6185.0], [97.8, 6185.0], [97.9, 6185.0], [98.0, 6185.0], [98.1, 6185.0], [98.2, 6185.0], [98.3, 6186.0], [98.4, 6186.0], [98.5, 6189.0], [98.6, 6189.0], [98.7, 6190.0], [98.8, 6190.0], [98.9, 6190.0], [99.0, 6190.0], [99.1, 6192.0], [99.2, 6192.0], [99.3, 6196.0], [99.4, 6196.0], [99.5, 6196.0], [99.6, 6196.0], [99.7, 6207.0], [99.8, 6207.0], [99.9, 6208.0], [100.0, 6208.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 5400.0, "maxY": 105.0, "series": [{"data": [[5400.0, 102.0], [5600.0, 22.0], [5700.0, 71.0], [5800.0, 59.0], [5900.0, 42.0], [6000.0, 97.0], [6100.0, 105.0], [6200.0, 2.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 500.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 500.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 500.0, "minX": 1.57139478E12, "maxY": 500.0, "series": [{"data": [[1.57139478E12, 500.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139478E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5860.911999999996, "minX": 500.0, "maxY": 5860.911999999996, "series": [{"data": [[500.0, 5860.911999999996]], "isOverall": false, "label": "Access Live TV Page", "isController": false}, {"data": [[500.0, 5860.911999999996]], "isOverall": false, "label": "Access Live TV Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1850.0, "minX": 1.57139478E12, "maxY": 54791.666666666664, "series": [{"data": [[1.57139478E12, 54791.666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57139478E12, 1850.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139478E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5860.911999999996, "minX": 1.57139478E12, "maxY": 5860.911999999996, "series": [{"data": [[1.57139478E12, 5860.911999999996]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139478E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5775.652000000004, "minX": 1.57139478E12, "maxY": 5775.652000000004, "series": [{"data": [[1.57139478E12, 5775.652000000004]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139478E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4185.864000000005, "minX": 1.57139478E12, "maxY": 4185.864000000005, "series": [{"data": [[1.57139478E12, 4185.864000000005]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139478E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5405.0, "minX": 1.57139478E12, "maxY": 6208.0, "series": [{"data": [[1.57139478E12, 6208.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57139478E12, 5405.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57139478E12, 6157.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57139478E12, 6191.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57139478E12, 6176.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139478E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5896.0, "minX": 500.0, "maxY": 5896.0, "series": [{"data": [[500.0, 5896.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 500.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5850.5, "minX": 500.0, "maxY": 5850.5, "series": [{"data": [[500.0, 5850.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 500.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57139478E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57139478E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139478E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57139478E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57139478E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139478E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57139478E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57139478E12, 8.333333333333334]], "isOverall": false, "label": "Access Live TV Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139478E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57139478E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57139478E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139478E12, "title": "Total Transactions Per Second"}},
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

