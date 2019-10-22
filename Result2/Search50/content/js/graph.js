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
        data: {"result": {"minY": 230.0, "minX": 0.0, "maxY": 946.0, "series": [{"data": [[0.0, 230.0], [0.1, 230.0], [0.2, 230.0], [0.3, 230.0], [0.4, 230.0], [0.5, 230.0], [0.6, 230.0], [0.7, 230.0], [0.8, 230.0], [0.9, 230.0], [1.0, 230.0], [1.1, 230.0], [1.2, 230.0], [1.3, 230.0], [1.4, 230.0], [1.5, 230.0], [1.6, 230.0], [1.7, 230.0], [1.8, 230.0], [1.9, 230.0], [2.0, 243.0], [2.1, 243.0], [2.2, 243.0], [2.3, 243.0], [2.4, 243.0], [2.5, 243.0], [2.6, 243.0], [2.7, 243.0], [2.8, 243.0], [2.9, 243.0], [3.0, 243.0], [3.1, 243.0], [3.2, 243.0], [3.3, 243.0], [3.4, 243.0], [3.5, 243.0], [3.6, 243.0], [3.7, 243.0], [3.8, 243.0], [3.9, 243.0], [4.0, 263.0], [4.1, 263.0], [4.2, 263.0], [4.3, 263.0], [4.4, 263.0], [4.5, 263.0], [4.6, 263.0], [4.7, 263.0], [4.8, 263.0], [4.9, 263.0], [5.0, 263.0], [5.1, 263.0], [5.2, 263.0], [5.3, 263.0], [5.4, 263.0], [5.5, 263.0], [5.6, 263.0], [5.7, 263.0], [5.8, 263.0], [5.9, 263.0], [6.0, 282.0], [6.1, 282.0], [6.2, 282.0], [6.3, 282.0], [6.4, 282.0], [6.5, 282.0], [6.6, 282.0], [6.7, 282.0], [6.8, 282.0], [6.9, 282.0], [7.0, 282.0], [7.1, 282.0], [7.2, 282.0], [7.3, 282.0], [7.4, 282.0], [7.5, 282.0], [7.6, 282.0], [7.7, 282.0], [7.8, 282.0], [7.9, 282.0], [8.0, 304.0], [8.1, 304.0], [8.2, 304.0], [8.3, 304.0], [8.4, 304.0], [8.5, 304.0], [8.6, 304.0], [8.7, 304.0], [8.8, 304.0], [8.9, 304.0], [9.0, 304.0], [9.1, 304.0], [9.2, 304.0], [9.3, 304.0], [9.4, 304.0], [9.5, 304.0], [9.6, 304.0], [9.7, 304.0], [9.8, 304.0], [9.9, 304.0], [10.0, 337.0], [10.1, 337.0], [10.2, 337.0], [10.3, 337.0], [10.4, 337.0], [10.5, 337.0], [10.6, 337.0], [10.7, 337.0], [10.8, 337.0], [10.9, 337.0], [11.0, 337.0], [11.1, 337.0], [11.2, 337.0], [11.3, 337.0], [11.4, 337.0], [11.5, 337.0], [11.6, 337.0], [11.7, 337.0], [11.8, 337.0], [11.9, 337.0], [12.0, 345.0], [12.1, 345.0], [12.2, 345.0], [12.3, 345.0], [12.4, 345.0], [12.5, 345.0], [12.6, 345.0], [12.7, 345.0], [12.8, 345.0], [12.9, 345.0], [13.0, 345.0], [13.1, 345.0], [13.2, 345.0], [13.3, 345.0], [13.4, 345.0], [13.5, 345.0], [13.6, 345.0], [13.7, 345.0], [13.8, 345.0], [13.9, 345.0], [14.0, 362.0], [14.1, 362.0], [14.2, 362.0], [14.3, 362.0], [14.4, 362.0], [14.5, 362.0], [14.6, 362.0], [14.7, 362.0], [14.8, 362.0], [14.9, 362.0], [15.0, 362.0], [15.1, 362.0], [15.2, 362.0], [15.3, 362.0], [15.4, 362.0], [15.5, 362.0], [15.6, 362.0], [15.7, 362.0], [15.8, 362.0], [15.9, 362.0], [16.0, 387.0], [16.1, 387.0], [16.2, 387.0], [16.3, 387.0], [16.4, 387.0], [16.5, 387.0], [16.6, 387.0], [16.7, 387.0], [16.8, 387.0], [16.9, 387.0], [17.0, 387.0], [17.1, 387.0], [17.2, 387.0], [17.3, 387.0], [17.4, 387.0], [17.5, 387.0], [17.6, 387.0], [17.7, 387.0], [17.8, 387.0], [17.9, 387.0], [18.0, 405.0], [18.1, 405.0], [18.2, 405.0], [18.3, 405.0], [18.4, 405.0], [18.5, 405.0], [18.6, 405.0], [18.7, 405.0], [18.8, 405.0], [18.9, 405.0], [19.0, 405.0], [19.1, 405.0], [19.2, 405.0], [19.3, 405.0], [19.4, 405.0], [19.5, 405.0], [19.6, 405.0], [19.7, 405.0], [19.8, 405.0], [19.9, 405.0], [20.0, 424.0], [20.1, 424.0], [20.2, 424.0], [20.3, 424.0], [20.4, 424.0], [20.5, 424.0], [20.6, 424.0], [20.7, 424.0], [20.8, 424.0], [20.9, 424.0], [21.0, 424.0], [21.1, 424.0], [21.2, 424.0], [21.3, 424.0], [21.4, 424.0], [21.5, 424.0], [21.6, 424.0], [21.7, 424.0], [21.8, 424.0], [21.9, 424.0], [22.0, 443.0], [22.1, 443.0], [22.2, 443.0], [22.3, 443.0], [22.4, 443.0], [22.5, 443.0], [22.6, 443.0], [22.7, 443.0], [22.8, 443.0], [22.9, 443.0], [23.0, 443.0], [23.1, 443.0], [23.2, 443.0], [23.3, 443.0], [23.4, 443.0], [23.5, 443.0], [23.6, 443.0], [23.7, 443.0], [23.8, 443.0], [23.9, 443.0], [24.0, 461.0], [24.1, 461.0], [24.2, 461.0], [24.3, 461.0], [24.4, 461.0], [24.5, 461.0], [24.6, 461.0], [24.7, 461.0], [24.8, 461.0], [24.9, 461.0], [25.0, 461.0], [25.1, 461.0], [25.2, 461.0], [25.3, 461.0], [25.4, 461.0], [25.5, 461.0], [25.6, 461.0], [25.7, 461.0], [25.8, 461.0], [25.9, 461.0], [26.0, 481.0], [26.1, 481.0], [26.2, 481.0], [26.3, 481.0], [26.4, 481.0], [26.5, 481.0], [26.6, 481.0], [26.7, 481.0], [26.8, 481.0], [26.9, 481.0], [27.0, 481.0], [27.1, 481.0], [27.2, 481.0], [27.3, 481.0], [27.4, 481.0], [27.5, 481.0], [27.6, 481.0], [27.7, 481.0], [27.8, 481.0], [27.9, 481.0], [28.0, 501.0], [28.1, 501.0], [28.2, 501.0], [28.3, 501.0], [28.4, 501.0], [28.5, 501.0], [28.6, 501.0], [28.7, 501.0], [28.8, 501.0], [28.9, 501.0], [29.0, 501.0], [29.1, 501.0], [29.2, 501.0], [29.3, 501.0], [29.4, 501.0], [29.5, 501.0], [29.6, 501.0], [29.7, 501.0], [29.8, 501.0], [29.9, 501.0], [30.0, 521.0], [30.1, 521.0], [30.2, 521.0], [30.3, 521.0], [30.4, 521.0], [30.5, 521.0], [30.6, 521.0], [30.7, 521.0], [30.8, 521.0], [30.9, 521.0], [31.0, 521.0], [31.1, 521.0], [31.2, 521.0], [31.3, 521.0], [31.4, 521.0], [31.5, 521.0], [31.6, 521.0], [31.7, 521.0], [31.8, 521.0], [31.9, 521.0], [32.0, 541.0], [32.1, 541.0], [32.2, 541.0], [32.3, 541.0], [32.4, 541.0], [32.5, 541.0], [32.6, 541.0], [32.7, 541.0], [32.8, 541.0], [32.9, 541.0], [33.0, 541.0], [33.1, 541.0], [33.2, 541.0], [33.3, 541.0], [33.4, 541.0], [33.5, 541.0], [33.6, 541.0], [33.7, 541.0], [33.8, 541.0], [33.9, 541.0], [34.0, 562.0], [34.1, 562.0], [34.2, 562.0], [34.3, 562.0], [34.4, 562.0], [34.5, 562.0], [34.6, 562.0], [34.7, 562.0], [34.8, 562.0], [34.9, 562.0], [35.0, 562.0], [35.1, 562.0], [35.2, 562.0], [35.3, 562.0], [35.4, 562.0], [35.5, 562.0], [35.6, 562.0], [35.7, 562.0], [35.8, 562.0], [35.9, 562.0], [36.0, 583.0], [36.1, 583.0], [36.2, 583.0], [36.3, 583.0], [36.4, 583.0], [36.5, 583.0], [36.6, 583.0], [36.7, 583.0], [36.8, 583.0], [36.9, 583.0], [37.0, 583.0], [37.1, 583.0], [37.2, 583.0], [37.3, 583.0], [37.4, 583.0], [37.5, 583.0], [37.6, 583.0], [37.7, 583.0], [37.8, 583.0], [37.9, 583.0], [38.0, 601.0], [38.1, 601.0], [38.2, 601.0], [38.3, 601.0], [38.4, 601.0], [38.5, 601.0], [38.6, 601.0], [38.7, 601.0], [38.8, 601.0], [38.9, 601.0], [39.0, 601.0], [39.1, 601.0], [39.2, 601.0], [39.3, 601.0], [39.4, 601.0], [39.5, 601.0], [39.6, 601.0], [39.7, 601.0], [39.8, 601.0], [39.9, 601.0], [40.0, 626.0], [40.1, 626.0], [40.2, 626.0], [40.3, 626.0], [40.4, 626.0], [40.5, 626.0], [40.6, 626.0], [40.7, 626.0], [40.8, 626.0], [40.9, 626.0], [41.0, 626.0], [41.1, 626.0], [41.2, 626.0], [41.3, 626.0], [41.4, 626.0], [41.5, 626.0], [41.6, 626.0], [41.7, 626.0], [41.8, 626.0], [41.9, 626.0], [42.0, 656.0], [42.1, 656.0], [42.2, 656.0], [42.3, 656.0], [42.4, 656.0], [42.5, 656.0], [42.6, 656.0], [42.7, 656.0], [42.8, 656.0], [42.9, 656.0], [43.0, 656.0], [43.1, 656.0], [43.2, 656.0], [43.3, 656.0], [43.4, 656.0], [43.5, 656.0], [43.6, 656.0], [43.7, 656.0], [43.8, 656.0], [43.9, 656.0], [44.0, 664.0], [44.1, 664.0], [44.2, 664.0], [44.3, 664.0], [44.4, 664.0], [44.5, 664.0], [44.6, 664.0], [44.7, 664.0], [44.8, 664.0], [44.9, 664.0], [45.0, 664.0], [45.1, 664.0], [45.2, 664.0], [45.3, 664.0], [45.4, 664.0], [45.5, 664.0], [45.6, 664.0], [45.7, 664.0], [45.8, 664.0], [45.9, 664.0], [46.0, 698.0], [46.1, 698.0], [46.2, 698.0], [46.3, 698.0], [46.4, 698.0], [46.5, 698.0], [46.6, 698.0], [46.7, 698.0], [46.8, 698.0], [46.9, 698.0], [47.0, 698.0], [47.1, 698.0], [47.2, 698.0], [47.3, 698.0], [47.4, 698.0], [47.5, 698.0], [47.6, 698.0], [47.7, 698.0], [47.8, 698.0], [47.9, 698.0], [48.0, 699.0], [48.1, 699.0], [48.2, 699.0], [48.3, 699.0], [48.4, 699.0], [48.5, 699.0], [48.6, 699.0], [48.7, 699.0], [48.8, 699.0], [48.9, 699.0], [49.0, 699.0], [49.1, 699.0], [49.2, 699.0], [49.3, 699.0], [49.4, 699.0], [49.5, 699.0], [49.6, 699.0], [49.7, 699.0], [49.8, 699.0], [49.9, 699.0], [50.0, 721.0], [50.1, 721.0], [50.2, 721.0], [50.3, 721.0], [50.4, 721.0], [50.5, 721.0], [50.6, 721.0], [50.7, 721.0], [50.8, 721.0], [50.9, 721.0], [51.0, 721.0], [51.1, 721.0], [51.2, 721.0], [51.3, 721.0], [51.4, 721.0], [51.5, 721.0], [51.6, 721.0], [51.7, 721.0], [51.8, 721.0], [51.9, 721.0], [52.0, 742.0], [52.1, 742.0], [52.2, 742.0], [52.3, 742.0], [52.4, 742.0], [52.5, 742.0], [52.6, 742.0], [52.7, 742.0], [52.8, 742.0], [52.9, 742.0], [53.0, 742.0], [53.1, 742.0], [53.2, 742.0], [53.3, 742.0], [53.4, 742.0], [53.5, 742.0], [53.6, 742.0], [53.7, 742.0], [53.8, 742.0], [53.9, 742.0], [54.0, 764.0], [54.1, 764.0], [54.2, 764.0], [54.3, 764.0], [54.4, 764.0], [54.5, 764.0], [54.6, 764.0], [54.7, 764.0], [54.8, 764.0], [54.9, 764.0], [55.0, 764.0], [55.1, 764.0], [55.2, 764.0], [55.3, 764.0], [55.4, 764.0], [55.5, 764.0], [55.6, 764.0], [55.7, 764.0], [55.8, 764.0], [55.9, 764.0], [56.0, 782.0], [56.1, 782.0], [56.2, 782.0], [56.3, 782.0], [56.4, 782.0], [56.5, 782.0], [56.6, 782.0], [56.7, 782.0], [56.8, 782.0], [56.9, 782.0], [57.0, 782.0], [57.1, 782.0], [57.2, 782.0], [57.3, 782.0], [57.4, 782.0], [57.5, 782.0], [57.6, 782.0], [57.7, 782.0], [57.8, 782.0], [57.9, 782.0], [58.0, 808.0], [58.1, 808.0], [58.2, 808.0], [58.3, 808.0], [58.4, 808.0], [58.5, 808.0], [58.6, 808.0], [58.7, 808.0], [58.8, 808.0], [58.9, 808.0], [59.0, 808.0], [59.1, 808.0], [59.2, 808.0], [59.3, 808.0], [59.4, 808.0], [59.5, 808.0], [59.6, 808.0], [59.7, 808.0], [59.8, 808.0], [59.9, 808.0], [60.0, 827.0], [60.1, 827.0], [60.2, 827.0], [60.3, 827.0], [60.4, 827.0], [60.5, 827.0], [60.6, 827.0], [60.7, 827.0], [60.8, 827.0], [60.9, 827.0], [61.0, 827.0], [61.1, 827.0], [61.2, 827.0], [61.3, 827.0], [61.4, 827.0], [61.5, 827.0], [61.6, 827.0], [61.7, 827.0], [61.8, 827.0], [61.9, 827.0], [62.0, 844.0], [62.1, 844.0], [62.2, 844.0], [62.3, 844.0], [62.4, 844.0], [62.5, 844.0], [62.6, 844.0], [62.7, 844.0], [62.8, 844.0], [62.9, 844.0], [63.0, 844.0], [63.1, 844.0], [63.2, 844.0], [63.3, 844.0], [63.4, 844.0], [63.5, 844.0], [63.6, 844.0], [63.7, 844.0], [63.8, 844.0], [63.9, 844.0], [64.0, 862.0], [64.1, 862.0], [64.2, 862.0], [64.3, 862.0], [64.4, 862.0], [64.5, 862.0], [64.6, 862.0], [64.7, 862.0], [64.8, 862.0], [64.9, 862.0], [65.0, 862.0], [65.1, 862.0], [65.2, 862.0], [65.3, 862.0], [65.4, 862.0], [65.5, 862.0], [65.6, 862.0], [65.7, 862.0], [65.8, 862.0], [65.9, 862.0], [66.0, 879.0], [66.1, 879.0], [66.2, 879.0], [66.3, 879.0], [66.4, 879.0], [66.5, 879.0], [66.6, 879.0], [66.7, 879.0], [66.8, 879.0], [66.9, 879.0], [67.0, 879.0], [67.1, 879.0], [67.2, 879.0], [67.3, 879.0], [67.4, 879.0], [67.5, 879.0], [67.6, 879.0], [67.7, 879.0], [67.8, 879.0], [67.9, 879.0], [68.0, 920.0], [68.1, 920.0], [68.2, 920.0], [68.3, 920.0], [68.4, 920.0], [68.5, 920.0], [68.6, 920.0], [68.7, 920.0], [68.8, 920.0], [68.9, 920.0], [69.0, 920.0], [69.1, 920.0], [69.2, 920.0], [69.3, 920.0], [69.4, 920.0], [69.5, 920.0], [69.6, 920.0], [69.7, 920.0], [69.8, 920.0], [69.9, 920.0], [70.0, 923.0], [70.1, 923.0], [70.2, 923.0], [70.3, 923.0], [70.4, 923.0], [70.5, 923.0], [70.6, 923.0], [70.7, 923.0], [70.8, 923.0], [70.9, 923.0], [71.0, 923.0], [71.1, 923.0], [71.2, 923.0], [71.3, 923.0], [71.4, 923.0], [71.5, 923.0], [71.6, 923.0], [71.7, 923.0], [71.8, 923.0], [71.9, 923.0], [72.0, 930.0], [72.1, 930.0], [72.2, 930.0], [72.3, 930.0], [72.4, 930.0], [72.5, 930.0], [72.6, 930.0], [72.7, 930.0], [72.8, 930.0], [72.9, 930.0], [73.0, 930.0], [73.1, 930.0], [73.2, 930.0], [73.3, 930.0], [73.4, 930.0], [73.5, 930.0], [73.6, 930.0], [73.7, 930.0], [73.8, 930.0], [73.9, 930.0], [74.0, 930.0], [74.1, 930.0], [74.2, 930.0], [74.3, 930.0], [74.4, 930.0], [74.5, 930.0], [74.6, 930.0], [74.7, 930.0], [74.8, 930.0], [74.9, 930.0], [75.0, 930.0], [75.1, 930.0], [75.2, 930.0], [75.3, 930.0], [75.4, 930.0], [75.5, 930.0], [75.6, 930.0], [75.7, 930.0], [75.8, 930.0], [75.9, 930.0], [76.0, 930.0], [76.1, 930.0], [76.2, 930.0], [76.3, 930.0], [76.4, 930.0], [76.5, 930.0], [76.6, 930.0], [76.7, 930.0], [76.8, 930.0], [76.9, 930.0], [77.0, 930.0], [77.1, 930.0], [77.2, 930.0], [77.3, 930.0], [77.4, 930.0], [77.5, 930.0], [77.6, 930.0], [77.7, 930.0], [77.8, 930.0], [77.9, 930.0], [78.0, 930.0], [78.1, 930.0], [78.2, 930.0], [78.3, 930.0], [78.4, 930.0], [78.5, 930.0], [78.6, 930.0], [78.7, 930.0], [78.8, 930.0], [78.9, 930.0], [79.0, 930.0], [79.1, 930.0], [79.2, 930.0], [79.3, 930.0], [79.4, 930.0], [79.5, 930.0], [79.6, 930.0], [79.7, 930.0], [79.8, 930.0], [79.9, 930.0], [80.0, 931.0], [80.1, 931.0], [80.2, 931.0], [80.3, 931.0], [80.4, 931.0], [80.5, 931.0], [80.6, 931.0], [80.7, 931.0], [80.8, 931.0], [80.9, 931.0], [81.0, 931.0], [81.1, 931.0], [81.2, 931.0], [81.3, 931.0], [81.4, 931.0], [81.5, 931.0], [81.6, 931.0], [81.7, 931.0], [81.8, 931.0], [81.9, 931.0], [82.0, 931.0], [82.1, 931.0], [82.2, 931.0], [82.3, 931.0], [82.4, 931.0], [82.5, 931.0], [82.6, 931.0], [82.7, 931.0], [82.8, 931.0], [82.9, 931.0], [83.0, 931.0], [83.1, 931.0], [83.2, 931.0], [83.3, 931.0], [83.4, 931.0], [83.5, 931.0], [83.6, 931.0], [83.7, 931.0], [83.8, 931.0], [83.9, 931.0], [84.0, 932.0], [84.1, 932.0], [84.2, 932.0], [84.3, 932.0], [84.4, 932.0], [84.5, 932.0], [84.6, 932.0], [84.7, 932.0], [84.8, 932.0], [84.9, 932.0], [85.0, 932.0], [85.1, 932.0], [85.2, 932.0], [85.3, 932.0], [85.4, 932.0], [85.5, 932.0], [85.6, 932.0], [85.7, 932.0], [85.8, 932.0], [85.9, 932.0], [86.0, 936.0], [86.1, 936.0], [86.2, 936.0], [86.3, 936.0], [86.4, 936.0], [86.5, 936.0], [86.6, 936.0], [86.7, 936.0], [86.8, 936.0], [86.9, 936.0], [87.0, 936.0], [87.1, 936.0], [87.2, 936.0], [87.3, 936.0], [87.4, 936.0], [87.5, 936.0], [87.6, 936.0], [87.7, 936.0], [87.8, 936.0], [87.9, 936.0], [88.0, 938.0], [88.1, 938.0], [88.2, 938.0], [88.3, 938.0], [88.4, 938.0], [88.5, 938.0], [88.6, 938.0], [88.7, 938.0], [88.8, 938.0], [88.9, 938.0], [89.0, 938.0], [89.1, 938.0], [89.2, 938.0], [89.3, 938.0], [89.4, 938.0], [89.5, 938.0], [89.6, 938.0], [89.7, 938.0], [89.8, 938.0], [89.9, 938.0], [90.0, 938.0], [90.1, 938.0], [90.2, 938.0], [90.3, 938.0], [90.4, 938.0], [90.5, 938.0], [90.6, 938.0], [90.7, 938.0], [90.8, 938.0], [90.9, 938.0], [91.0, 938.0], [91.1, 938.0], [91.2, 938.0], [91.3, 938.0], [91.4, 938.0], [91.5, 938.0], [91.6, 938.0], [91.7, 938.0], [91.8, 938.0], [91.9, 938.0], [92.0, 940.0], [92.1, 940.0], [92.2, 940.0], [92.3, 940.0], [92.4, 940.0], [92.5, 940.0], [92.6, 940.0], [92.7, 940.0], [92.8, 940.0], [92.9, 940.0], [93.0, 940.0], [93.1, 940.0], [93.2, 940.0], [93.3, 940.0], [93.4, 940.0], [93.5, 940.0], [93.6, 940.0], [93.7, 940.0], [93.8, 940.0], [93.9, 940.0], [94.0, 942.0], [94.1, 942.0], [94.2, 942.0], [94.3, 942.0], [94.4, 942.0], [94.5, 942.0], [94.6, 942.0], [94.7, 942.0], [94.8, 942.0], [94.9, 942.0], [95.0, 942.0], [95.1, 942.0], [95.2, 942.0], [95.3, 942.0], [95.4, 942.0], [95.5, 942.0], [95.6, 942.0], [95.7, 942.0], [95.8, 942.0], [95.9, 942.0], [96.0, 944.0], [96.1, 944.0], [96.2, 944.0], [96.3, 944.0], [96.4, 944.0], [96.5, 944.0], [96.6, 944.0], [96.7, 944.0], [96.8, 944.0], [96.9, 944.0], [97.0, 944.0], [97.1, 944.0], [97.2, 944.0], [97.3, 944.0], [97.4, 944.0], [97.5, 944.0], [97.6, 944.0], [97.7, 944.0], [97.8, 944.0], [97.9, 944.0], [98.0, 946.0], [98.1, 946.0], [98.2, 946.0], [98.3, 946.0], [98.4, 946.0], [98.5, 946.0], [98.6, 946.0], [98.7, 946.0], [98.8, 946.0], [98.9, 946.0], [99.0, 946.0], [99.1, 946.0], [99.2, 946.0], [99.3, 946.0], [99.4, 946.0], [99.5, 946.0], [99.6, 946.0], [99.7, 946.0], [99.8, 946.0], [99.9, 946.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 200.0, "maxY": 16.0, "series": [{"data": [[300.0, 5.0], [600.0, 6.0], [700.0, 4.0], [200.0, 4.0], [800.0, 5.0], [400.0, 5.0], [900.0, 16.0], [500.0, 5.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 36.0, "series": [{"data": [[0.0, 14.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.571727E12, "maxY": 50.0, "series": [{"data": [[1.571727E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571727E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 675.78, "minX": 50.0, "maxY": 675.78, "series": [{"data": [[50.0, 675.78]], "isOverall": false, "label": "Search Video", "isController": false}, {"data": [[50.0, 675.78]], "isOverall": false, "label": "Search Video-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 255.0, "minX": 1.571727E12, "maxY": 6653.333333333333, "series": [{"data": [[1.571727E12, 6653.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.571727E12, 255.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571727E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 675.78, "minX": 1.571727E12, "maxY": 675.78, "series": [{"data": [[1.571727E12, 675.78]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571727E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 662.4800000000001, "minX": 1.571727E12, "maxY": 662.4800000000001, "series": [{"data": [[1.571727E12, 662.4800000000001]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571727E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 406.56000000000006, "minX": 1.571727E12, "maxY": 406.56000000000006, "series": [{"data": [[1.571727E12, 406.56000000000006]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571727E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 230.0, "minX": 1.571727E12, "maxY": 946.0, "series": [{"data": [[1.571727E12, 946.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.571727E12, 230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.571727E12, 938.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.571727E12, 946.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.571727E12, 942.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571727E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 710.0, "minX": 50.0, "maxY": 710.0, "series": [{"data": [[50.0, 710.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 700.0, "minX": 50.0, "maxY": 700.0, "series": [{"data": [[50.0, 700.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.571727E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.571727E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571727E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.571727E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.571727E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.571727E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.571727E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.571727E12, 0.8333333333333334]], "isOverall": false, "label": "Search Video-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571727E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.571727E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.571727E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.571727E12, "title": "Total Transactions Per Second"}},
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

