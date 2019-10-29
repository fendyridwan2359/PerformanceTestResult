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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 238.0, "series": [{"data": [[0.0, 47.0], [0.1, 47.0], [0.2, 47.0], [0.3, 47.0], [0.4, 47.0], [0.5, 47.0], [0.6, 47.0], [0.7, 47.0], [0.8, 47.0], [0.9, 47.0], [1.0, 48.0], [1.1, 48.0], [1.2, 48.0], [1.3, 48.0], [1.4, 48.0], [1.5, 49.0], [1.6, 49.0], [1.7, 49.0], [1.8, 49.0], [1.9, 49.0], [2.0, 49.0], [2.1, 49.0], [2.2, 49.0], [2.3, 49.0], [2.4, 49.0], [2.5, 49.0], [2.6, 49.0], [2.7, 49.0], [2.8, 49.0], [2.9, 49.0], [3.0, 49.0], [3.1, 49.0], [3.2, 49.0], [3.3, 49.0], [3.4, 49.0], [3.5, 50.0], [3.6, 50.0], [3.7, 50.0], [3.8, 50.0], [3.9, 50.0], [4.0, 50.0], [4.1, 50.0], [4.2, 50.0], [4.3, 50.0], [4.4, 50.0], [4.5, 50.0], [4.6, 50.0], [4.7, 50.0], [4.8, 50.0], [4.9, 50.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 50.0], [5.4, 50.0], [5.5, 51.0], [5.6, 51.0], [5.7, 51.0], [5.8, 51.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 51.0], [6.6, 51.0], [6.7, 51.0], [6.8, 51.0], [6.9, 51.0], [7.0, 51.0], [7.1, 51.0], [7.2, 51.0], [7.3, 51.0], [7.4, 51.0], [7.5, 52.0], [7.6, 52.0], [7.7, 52.0], [7.8, 52.0], [7.9, 52.0], [8.0, 52.0], [8.1, 52.0], [8.2, 52.0], [8.3, 52.0], [8.4, 52.0], [8.5, 52.0], [8.6, 52.0], [8.7, 52.0], [8.8, 52.0], [8.9, 52.0], [9.0, 52.0], [9.1, 52.0], [9.2, 52.0], [9.3, 52.0], [9.4, 52.0], [9.5, 53.0], [9.6, 53.0], [9.7, 53.0], [9.8, 53.0], [9.9, 53.0], [10.0, 53.0], [10.1, 53.0], [10.2, 53.0], [10.3, 53.0], [10.4, 53.0], [10.5, 53.0], [10.6, 53.0], [10.7, 53.0], [10.8, 53.0], [10.9, 53.0], [11.0, 53.0], [11.1, 53.0], [11.2, 53.0], [11.3, 53.0], [11.4, 53.0], [11.5, 53.0], [11.6, 53.0], [11.7, 53.0], [11.8, 53.0], [11.9, 53.0], [12.0, 53.0], [12.1, 53.0], [12.2, 53.0], [12.3, 53.0], [12.4, 53.0], [12.5, 53.0], [12.6, 53.0], [12.7, 53.0], [12.8, 53.0], [12.9, 53.0], [13.0, 53.0], [13.1, 53.0], [13.2, 53.0], [13.3, 53.0], [13.4, 53.0], [13.5, 53.0], [13.6, 53.0], [13.7, 53.0], [13.8, 53.0], [13.9, 53.0], [14.0, 53.0], [14.1, 53.0], [14.2, 53.0], [14.3, 53.0], [14.4, 53.0], [14.5, 53.0], [14.6, 53.0], [14.7, 53.0], [14.8, 53.0], [14.9, 53.0], [15.0, 53.0], [15.1, 53.0], [15.2, 53.0], [15.3, 53.0], [15.4, 53.0], [15.5, 53.0], [15.6, 53.0], [15.7, 53.0], [15.8, 53.0], [15.9, 53.0], [16.0, 54.0], [16.1, 54.0], [16.2, 54.0], [16.3, 54.0], [16.4, 54.0], [16.5, 54.0], [16.6, 54.0], [16.7, 54.0], [16.8, 54.0], [16.9, 54.0], [17.0, 54.0], [17.1, 54.0], [17.2, 54.0], [17.3, 54.0], [17.4, 54.0], [17.5, 54.0], [17.6, 54.0], [17.7, 54.0], [17.8, 54.0], [17.9, 54.0], [18.0, 54.0], [18.1, 54.0], [18.2, 54.0], [18.3, 54.0], [18.4, 54.0], [18.5, 54.0], [18.6, 54.0], [18.7, 54.0], [18.8, 54.0], [18.9, 54.0], [19.0, 54.0], [19.1, 54.0], [19.2, 54.0], [19.3, 54.0], [19.4, 54.0], [19.5, 54.0], [19.6, 54.0], [19.7, 54.0], [19.8, 54.0], [19.9, 54.0], [20.0, 55.0], [20.1, 55.0], [20.2, 55.0], [20.3, 55.0], [20.4, 55.0], [20.5, 55.0], [20.6, 55.0], [20.7, 55.0], [20.8, 55.0], [20.9, 55.0], [21.0, 55.0], [21.1, 55.0], [21.2, 55.0], [21.3, 55.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 55.0], [21.8, 55.0], [21.9, 55.0], [22.0, 55.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 55.0], [22.7, 55.0], [22.8, 55.0], [22.9, 55.0], [23.0, 56.0], [23.1, 56.0], [23.2, 56.0], [23.3, 56.0], [23.4, 56.0], [23.5, 56.0], [23.6, 56.0], [23.7, 56.0], [23.8, 56.0], [23.9, 56.0], [24.0, 56.0], [24.1, 56.0], [24.2, 56.0], [24.3, 56.0], [24.4, 56.0], [24.5, 56.0], [24.6, 56.0], [24.7, 56.0], [24.8, 56.0], [24.9, 56.0], [25.0, 56.0], [25.1, 56.0], [25.2, 56.0], [25.3, 56.0], [25.4, 56.0], [25.5, 56.0], [25.6, 56.0], [25.7, 56.0], [25.8, 56.0], [25.9, 56.0], [26.0, 56.0], [26.1, 56.0], [26.2, 56.0], [26.3, 56.0], [26.4, 56.0], [26.5, 56.0], [26.6, 56.0], [26.7, 56.0], [26.8, 56.0], [26.9, 56.0], [27.0, 56.0], [27.1, 56.0], [27.2, 56.0], [27.3, 56.0], [27.4, 56.0], [27.5, 56.0], [27.6, 56.0], [27.7, 56.0], [27.8, 56.0], [27.9, 56.0], [28.0, 57.0], [28.1, 57.0], [28.2, 57.0], [28.3, 57.0], [28.4, 57.0], [28.5, 57.0], [28.6, 57.0], [28.7, 57.0], [28.8, 57.0], [28.9, 57.0], [29.0, 57.0], [29.1, 57.0], [29.2, 57.0], [29.3, 57.0], [29.4, 57.0], [29.5, 57.0], [29.6, 57.0], [29.7, 57.0], [29.8, 57.0], [29.9, 57.0], [30.0, 57.0], [30.1, 57.0], [30.2, 57.0], [30.3, 57.0], [30.4, 57.0], [30.5, 57.0], [30.6, 57.0], [30.7, 57.0], [30.8, 57.0], [30.9, 57.0], [31.0, 57.0], [31.1, 57.0], [31.2, 57.0], [31.3, 57.0], [31.4, 57.0], [31.5, 58.0], [31.6, 58.0], [31.7, 58.0], [31.8, 58.0], [31.9, 58.0], [32.0, 58.0], [32.1, 58.0], [32.2, 58.0], [32.3, 58.0], [32.4, 58.0], [32.5, 58.0], [32.6, 58.0], [32.7, 58.0], [32.8, 58.0], [32.9, 58.0], [33.0, 58.0], [33.1, 58.0], [33.2, 58.0], [33.3, 58.0], [33.4, 58.0], [33.5, 58.0], [33.6, 58.0], [33.7, 58.0], [33.8, 58.0], [33.9, 58.0], [34.0, 58.0], [34.1, 58.0], [34.2, 58.0], [34.3, 58.0], [34.4, 58.0], [34.5, 58.0], [34.6, 58.0], [34.7, 58.0], [34.8, 58.0], [34.9, 58.0], [35.0, 58.0], [35.1, 58.0], [35.2, 58.0], [35.3, 58.0], [35.4, 58.0], [35.5, 59.0], [35.6, 59.0], [35.7, 59.0], [35.8, 59.0], [35.9, 59.0], [36.0, 59.0], [36.1, 59.0], [36.2, 59.0], [36.3, 59.0], [36.4, 59.0], [36.5, 60.0], [36.6, 60.0], [36.7, 60.0], [36.8, 60.0], [36.9, 60.0], [37.0, 60.0], [37.1, 60.0], [37.2, 60.0], [37.3, 60.0], [37.4, 60.0], [37.5, 60.0], [37.6, 60.0], [37.7, 60.0], [37.8, 60.0], [37.9, 60.0], [38.0, 61.0], [38.1, 61.0], [38.2, 61.0], [38.3, 61.0], [38.4, 61.0], [38.5, 61.0], [38.6, 61.0], [38.7, 61.0], [38.8, 61.0], [38.9, 61.0], [39.0, 61.0], [39.1, 61.0], [39.2, 61.0], [39.3, 61.0], [39.4, 61.0], [39.5, 61.0], [39.6, 61.0], [39.7, 61.0], [39.8, 61.0], [39.9, 61.0], [40.0, 62.0], [40.1, 62.0], [40.2, 62.0], [40.3, 62.0], [40.4, 62.0], [40.5, 62.0], [40.6, 62.0], [40.7, 62.0], [40.8, 62.0], [40.9, 62.0], [41.0, 62.0], [41.1, 62.0], [41.2, 62.0], [41.3, 62.0], [41.4, 62.0], [41.5, 62.0], [41.6, 62.0], [41.7, 62.0], [41.8, 62.0], [41.9, 62.0], [42.0, 62.0], [42.1, 62.0], [42.2, 62.0], [42.3, 62.0], [42.4, 62.0], [42.5, 63.0], [42.6, 63.0], [42.7, 63.0], [42.8, 63.0], [42.9, 63.0], [43.0, 64.0], [43.1, 64.0], [43.2, 64.0], [43.3, 64.0], [43.4, 64.0], [43.5, 65.0], [43.6, 65.0], [43.7, 65.0], [43.8, 65.0], [43.9, 65.0], [44.0, 66.0], [44.1, 66.0], [44.2, 66.0], [44.3, 66.0], [44.4, 66.0], [44.5, 67.0], [44.6, 67.0], [44.7, 67.0], [44.8, 67.0], [44.9, 67.0], [45.0, 67.0], [45.1, 67.0], [45.2, 67.0], [45.3, 67.0], [45.4, 67.0], [45.5, 67.0], [45.6, 67.0], [45.7, 67.0], [45.8, 67.0], [45.9, 67.0], [46.0, 67.0], [46.1, 67.0], [46.2, 67.0], [46.3, 67.0], [46.4, 67.0], [46.5, 68.0], [46.6, 68.0], [46.7, 68.0], [46.8, 68.0], [46.9, 68.0], [47.0, 70.0], [47.1, 70.0], [47.2, 70.0], [47.3, 70.0], [47.4, 70.0], [47.5, 71.0], [47.6, 71.0], [47.7, 71.0], [47.8, 71.0], [47.9, 71.0], [48.0, 72.0], [48.1, 72.0], [48.2, 72.0], [48.3, 72.0], [48.4, 72.0], [48.5, 75.0], [48.6, 75.0], [48.7, 75.0], [48.8, 75.0], [48.9, 75.0], [49.0, 75.0], [49.1, 75.0], [49.2, 75.0], [49.3, 75.0], [49.4, 75.0], [49.5, 79.0], [49.6, 79.0], [49.7, 79.0], [49.8, 79.0], [49.9, 79.0], [50.0, 81.0], [50.1, 81.0], [50.2, 81.0], [50.3, 81.0], [50.4, 81.0], [50.5, 82.0], [50.6, 82.0], [50.7, 82.0], [50.8, 82.0], [50.9, 82.0], [51.0, 82.0], [51.1, 82.0], [51.2, 82.0], [51.3, 82.0], [51.4, 82.0], [51.5, 84.0], [51.6, 84.0], [51.7, 84.0], [51.8, 84.0], [51.9, 84.0], [52.0, 89.0], [52.1, 89.0], [52.2, 89.0], [52.3, 89.0], [52.4, 89.0], [52.5, 90.0], [52.6, 90.0], [52.7, 90.0], [52.8, 90.0], [52.9, 90.0], [53.0, 92.0], [53.1, 92.0], [53.2, 92.0], [53.3, 92.0], [53.4, 92.0], [53.5, 92.0], [53.6, 92.0], [53.7, 92.0], [53.8, 92.0], [53.9, 92.0], [54.0, 92.0], [54.1, 92.0], [54.2, 92.0], [54.3, 92.0], [54.4, 92.0], [54.5, 93.0], [54.6, 93.0], [54.7, 93.0], [54.8, 93.0], [54.9, 93.0], [55.0, 93.0], [55.1, 93.0], [55.2, 93.0], [55.3, 93.0], [55.4, 93.0], [55.5, 95.0], [55.6, 95.0], [55.7, 95.0], [55.8, 95.0], [55.9, 95.0], [56.0, 95.0], [56.1, 95.0], [56.2, 95.0], [56.3, 95.0], [56.4, 95.0], [56.5, 95.0], [56.6, 95.0], [56.7, 95.0], [56.8, 95.0], [56.9, 95.0], [57.0, 97.0], [57.1, 97.0], [57.2, 97.0], [57.3, 97.0], [57.4, 97.0], [57.5, 98.0], [57.6, 98.0], [57.7, 98.0], [57.8, 98.0], [57.9, 98.0], [58.0, 98.0], [58.1, 98.0], [58.2, 98.0], [58.3, 98.0], [58.4, 98.0], [58.5, 99.0], [58.6, 99.0], [58.7, 99.0], [58.8, 99.0], [58.9, 99.0], [59.0, 100.0], [59.1, 100.0], [59.2, 100.0], [59.3, 100.0], [59.4, 100.0], [59.5, 101.0], [59.6, 101.0], [59.7, 101.0], [59.8, 101.0], [59.9, 101.0], [60.0, 104.0], [60.1, 104.0], [60.2, 104.0], [60.3, 104.0], [60.4, 104.0], [60.5, 106.0], [60.6, 106.0], [60.7, 106.0], [60.8, 106.0], [60.9, 106.0], [61.0, 111.0], [61.1, 111.0], [61.2, 111.0], [61.3, 111.0], [61.4, 111.0], [61.5, 112.0], [61.6, 112.0], [61.7, 112.0], [61.8, 112.0], [61.9, 112.0], [62.0, 115.0], [62.1, 115.0], [62.2, 115.0], [62.3, 115.0], [62.4, 115.0], [62.5, 118.0], [62.6, 118.0], [62.7, 118.0], [62.8, 118.0], [62.9, 118.0], [63.0, 118.0], [63.1, 118.0], [63.2, 118.0], [63.3, 118.0], [63.4, 118.0], [63.5, 119.0], [63.6, 119.0], [63.7, 119.0], [63.8, 119.0], [63.9, 119.0], [64.0, 119.0], [64.1, 119.0], [64.2, 119.0], [64.3, 119.0], [64.4, 119.0], [64.5, 119.0], [64.6, 119.0], [64.7, 119.0], [64.8, 119.0], [64.9, 119.0], [65.0, 120.0], [65.1, 120.0], [65.2, 120.0], [65.3, 120.0], [65.4, 120.0], [65.5, 121.0], [65.6, 121.0], [65.7, 121.0], [65.8, 121.0], [65.9, 121.0], [66.0, 128.0], [66.1, 128.0], [66.2, 128.0], [66.3, 128.0], [66.4, 128.0], [66.5, 134.0], [66.6, 134.0], [66.7, 134.0], [66.8, 134.0], [66.9, 134.0], [67.0, 141.0], [67.1, 141.0], [67.2, 141.0], [67.3, 141.0], [67.4, 141.0], [67.5, 141.0], [67.6, 141.0], [67.7, 141.0], [67.8, 141.0], [67.9, 141.0], [68.0, 142.0], [68.1, 142.0], [68.2, 142.0], [68.3, 142.0], [68.4, 142.0], [68.5, 150.0], [68.6, 150.0], [68.7, 150.0], [68.8, 150.0], [68.9, 150.0], [69.0, 150.0], [69.1, 150.0], [69.2, 150.0], [69.3, 150.0], [69.4, 150.0], [69.5, 152.0], [69.6, 152.0], [69.7, 152.0], [69.8, 152.0], [69.9, 152.0], [70.0, 153.0], [70.1, 153.0], [70.2, 153.0], [70.3, 153.0], [70.4, 153.0], [70.5, 153.0], [70.6, 153.0], [70.7, 153.0], [70.8, 153.0], [70.9, 153.0], [71.0, 156.0], [71.1, 156.0], [71.2, 156.0], [71.3, 156.0], [71.4, 156.0], [71.5, 159.0], [71.6, 159.0], [71.7, 159.0], [71.8, 159.0], [71.9, 159.0], [72.0, 160.0], [72.1, 160.0], [72.2, 160.0], [72.3, 160.0], [72.4, 160.0], [72.5, 160.0], [72.6, 160.0], [72.7, 160.0], [72.8, 160.0], [72.9, 160.0], [73.0, 160.0], [73.1, 160.0], [73.2, 160.0], [73.3, 160.0], [73.4, 160.0], [73.5, 162.0], [73.6, 162.0], [73.7, 162.0], [73.8, 162.0], [73.9, 162.0], [74.0, 163.0], [74.1, 163.0], [74.2, 163.0], [74.3, 163.0], [74.4, 163.0], [74.5, 164.0], [74.6, 164.0], [74.7, 164.0], [74.8, 164.0], [74.9, 164.0], [75.0, 165.0], [75.1, 165.0], [75.2, 165.0], [75.3, 165.0], [75.4, 165.0], [75.5, 166.0], [75.6, 166.0], [75.7, 166.0], [75.8, 166.0], [75.9, 166.0], [76.0, 166.0], [76.1, 166.0], [76.2, 166.0], [76.3, 166.0], [76.4, 166.0], [76.5, 173.0], [76.6, 173.0], [76.7, 173.0], [76.8, 173.0], [76.9, 173.0], [77.0, 174.0], [77.1, 174.0], [77.2, 174.0], [77.3, 174.0], [77.4, 174.0], [77.5, 174.0], [77.6, 174.0], [77.7, 174.0], [77.8, 174.0], [77.9, 174.0], [78.0, 175.0], [78.1, 175.0], [78.2, 175.0], [78.3, 175.0], [78.4, 175.0], [78.5, 175.0], [78.6, 175.0], [78.7, 175.0], [78.8, 175.0], [78.9, 175.0], [79.0, 175.0], [79.1, 175.0], [79.2, 175.0], [79.3, 175.0], [79.4, 175.0], [79.5, 175.0], [79.6, 175.0], [79.7, 175.0], [79.8, 175.0], [79.9, 175.0], [80.0, 180.0], [80.1, 180.0], [80.2, 180.0], [80.3, 180.0], [80.4, 180.0], [80.5, 184.0], [80.6, 184.0], [80.7, 184.0], [80.8, 184.0], [80.9, 184.0], [81.0, 185.0], [81.1, 185.0], [81.2, 185.0], [81.3, 185.0], [81.4, 185.0], [81.5, 185.0], [81.6, 185.0], [81.7, 185.0], [81.8, 185.0], [81.9, 185.0], [82.0, 185.0], [82.1, 185.0], [82.2, 185.0], [82.3, 185.0], [82.4, 185.0], [82.5, 186.0], [82.6, 186.0], [82.7, 186.0], [82.8, 186.0], [82.9, 186.0], [83.0, 189.0], [83.1, 189.0], [83.2, 189.0], [83.3, 189.0], [83.4, 189.0], [83.5, 191.0], [83.6, 191.0], [83.7, 191.0], [83.8, 191.0], [83.9, 191.0], [84.0, 191.0], [84.1, 191.0], [84.2, 191.0], [84.3, 191.0], [84.4, 191.0], [84.5, 192.0], [84.6, 192.0], [84.7, 192.0], [84.8, 192.0], [84.9, 192.0], [85.0, 193.0], [85.1, 193.0], [85.2, 193.0], [85.3, 193.0], [85.4, 193.0], [85.5, 195.0], [85.6, 195.0], [85.7, 195.0], [85.8, 195.0], [85.9, 195.0], [86.0, 200.0], [86.1, 200.0], [86.2, 200.0], [86.3, 200.0], [86.4, 200.0], [86.5, 200.0], [86.6, 200.0], [86.7, 200.0], [86.8, 200.0], [86.9, 200.0], [87.0, 201.0], [87.1, 201.0], [87.2, 201.0], [87.3, 201.0], [87.4, 201.0], [87.5, 205.0], [87.6, 205.0], [87.7, 205.0], [87.8, 205.0], [87.9, 205.0], [88.0, 209.0], [88.1, 209.0], [88.2, 209.0], [88.3, 209.0], [88.4, 209.0], [88.5, 210.0], [88.6, 210.0], [88.7, 210.0], [88.8, 210.0], [88.9, 210.0], [89.0, 213.0], [89.1, 213.0], [89.2, 213.0], [89.3, 213.0], [89.4, 213.0], [89.5, 214.0], [89.6, 214.0], [89.7, 214.0], [89.8, 214.0], [89.9, 214.0], [90.0, 218.0], [90.1, 218.0], [90.2, 218.0], [90.3, 218.0], [90.4, 218.0], [90.5, 218.0], [90.6, 218.0], [90.7, 218.0], [90.8, 218.0], [90.9, 218.0], [91.0, 219.0], [91.1, 219.0], [91.2, 219.0], [91.3, 219.0], [91.4, 219.0], [91.5, 221.0], [91.6, 221.0], [91.7, 221.0], [91.8, 221.0], [91.9, 221.0], [92.0, 222.0], [92.1, 222.0], [92.2, 222.0], [92.3, 222.0], [92.4, 222.0], [92.5, 222.0], [92.6, 222.0], [92.7, 222.0], [92.8, 222.0], [92.9, 222.0], [93.0, 223.0], [93.1, 223.0], [93.2, 223.0], [93.3, 223.0], [93.4, 223.0], [93.5, 223.0], [93.6, 223.0], [93.7, 223.0], [93.8, 223.0], [93.9, 223.0], [94.0, 223.0], [94.1, 223.0], [94.2, 223.0], [94.3, 223.0], [94.4, 223.0], [94.5, 224.0], [94.6, 224.0], [94.7, 224.0], [94.8, 224.0], [94.9, 224.0], [95.0, 224.0], [95.1, 224.0], [95.2, 224.0], [95.3, 224.0], [95.4, 224.0], [95.5, 225.0], [95.6, 225.0], [95.7, 225.0], [95.8, 225.0], [95.9, 225.0], [96.0, 225.0], [96.1, 225.0], [96.2, 225.0], [96.3, 225.0], [96.4, 225.0], [96.5, 226.0], [96.6, 226.0], [96.7, 226.0], [96.8, 226.0], [96.9, 226.0], [97.0, 226.0], [97.1, 226.0], [97.2, 226.0], [97.3, 226.0], [97.4, 226.0], [97.5, 227.0], [97.6, 227.0], [97.7, 227.0], [97.8, 227.0], [97.9, 227.0], [98.0, 227.0], [98.1, 227.0], [98.2, 227.0], [98.3, 227.0], [98.4, 227.0], [98.5, 228.0], [98.6, 228.0], [98.7, 228.0], [98.8, 228.0], [98.9, 228.0], [99.0, 234.0], [99.1, 234.0], [99.2, 234.0], [99.3, 234.0], [99.4, 234.0], [99.5, 238.0], [99.6, 238.0], [99.7, 238.0], [99.8, 238.0], [99.9, 238.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 118.0, "series": [{"data": [[0.0, 118.0], [100.0, 54.0], [200.0, 28.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [[0.0, 200.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.31999999999999, "minX": 1.57232124E12, "maxY": 31.31999999999999, "series": [{"data": [[1.57232124E12, 31.31999999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 224.5, "series": [{"data": [[2.0, 52.0], [3.0, 56.0], [4.0, 55.0], [5.0, 56.0], [6.0, 54.0], [7.0, 55.0], [9.0, 64.0], [11.0, 54.519999999999996], [12.0, 56.02777777777778], [13.0, 60.04545454545454], [14.0, 54.0], [15.0, 62.0], [16.0, 72.66666666666667], [18.0, 85.6], [19.0, 93.0], [20.0, 138.25], [22.0, 88.66666666666667], [23.0, 111.0], [25.0, 92.0], [28.0, 150.66666666666666], [29.0, 98.0], [31.0, 106.0], [32.0, 131.0], [34.0, 224.5], [36.0, 172.0], [41.0, 219.83333333333331], [40.0, 224.33333333333334], [42.0, 221.0], [45.0, 206.0], [47.0, 216.0], [49.0, 121.0], [48.0, 218.0], [50.0, 209.0], [52.0, 179.8], [55.0, 181.0], [57.0, 192.5], [56.0, 195.0], [58.0, 119.0], [60.0, 188.66666666666666], [63.0, 144.5], [66.0, 177.0], [65.0, 109.0], [64.0, 184.66666666666666], [71.0, 172.0], [70.0, 169.33333333333334], [75.0, 165.0], [74.0, 162.5], [79.0, 162.75], [78.0, 141.0], [77.0, 92.0], [87.0, 135.5], [85.0, 134.0], [84.0, 95.0], [88.0, 154.0], [1.0, 61.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}, {"data": [[31.31999999999999, 108.94500000000005]], "isOverall": false, "label": "Access Movies Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 88.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 770.0, "minX": 1.57232124E12, "maxY": 21913.333333333332, "series": [{"data": [[1.57232124E12, 21913.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232124E12, 770.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 108.94500000000005, "minX": 1.57232124E12, "maxY": 108.94500000000005, "series": [{"data": [[1.57232124E12, 108.94500000000005]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 108.36499999999997, "minX": 1.57232124E12, "maxY": 108.36499999999997, "series": [{"data": [[1.57232124E12, 108.36499999999997]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 48.36500000000001, "minX": 1.57232124E12, "maxY": 48.36500000000001, "series": [{"data": [[1.57232124E12, 48.36500000000001]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232124E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.57232124E12, "maxY": 238.0, "series": [{"data": [[1.57232124E12, 238.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232124E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232124E12, 217.60000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232124E12, 233.94000000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232124E12, 224.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232124E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 78.0, "maxY": 151.0, "series": [{"data": [[78.0, 55.0], [122.0, 151.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 122.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.0, "minX": 78.0, "maxY": 151.0, "series": [{"data": [[78.0, 55.0], [122.0, 151.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 122.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232124E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232124E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232124E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232124E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232124E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232124E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232124E12, 3.3333333333333335]], "isOverall": false, "label": "Access Movies Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232124E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232124E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232124E12, "title": "Total Transactions Per Second"}},
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

