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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 487.0, "series": [{"data": [[0.0, 28.0], [0.1, 28.0], [0.2, 28.0], [0.3, 28.0], [0.4, 28.0], [0.5, 29.0], [0.6, 29.0], [0.7, 29.0], [0.8, 29.0], [0.9, 29.0], [1.0, 30.0], [1.1, 30.0], [1.2, 30.0], [1.3, 30.0], [1.4, 30.0], [1.5, 31.0], [1.6, 31.0], [1.7, 31.0], [1.8, 31.0], [1.9, 31.0], [2.0, 31.0], [2.1, 31.0], [2.2, 31.0], [2.3, 31.0], [2.4, 31.0], [2.5, 32.0], [2.6, 32.0], [2.7, 32.0], [2.8, 32.0], [2.9, 32.0], [3.0, 34.0], [3.1, 34.0], [3.2, 34.0], [3.3, 34.0], [3.4, 34.0], [3.5, 34.0], [3.6, 34.0], [3.7, 34.0], [3.8, 34.0], [3.9, 34.0], [4.0, 35.0], [4.1, 35.0], [4.2, 35.0], [4.3, 35.0], [4.4, 35.0], [4.5, 37.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 37.0], [5.1, 37.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 38.0], [6.4, 38.0], [6.5, 38.0], [6.6, 38.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 39.0], [7.1, 39.0], [7.2, 39.0], [7.3, 39.0], [7.4, 39.0], [7.5, 40.0], [7.6, 40.0], [7.7, 40.0], [7.8, 40.0], [7.9, 40.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 46.0], [9.1, 46.0], [9.2, 46.0], [9.3, 46.0], [9.4, 46.0], [9.5, 49.0], [9.6, 49.0], [9.7, 49.0], [9.8, 49.0], [9.9, 49.0], [10.0, 50.0], [10.1, 50.0], [10.2, 50.0], [10.3, 50.0], [10.4, 50.0], [10.5, 52.0], [10.6, 52.0], [10.7, 52.0], [10.8, 52.0], [10.9, 52.0], [11.0, 54.0], [11.1, 54.0], [11.2, 54.0], [11.3, 54.0], [11.4, 54.0], [11.5, 58.0], [11.6, 58.0], [11.7, 58.0], [11.8, 58.0], [11.9, 58.0], [12.0, 59.0], [12.1, 59.0], [12.2, 59.0], [12.3, 59.0], [12.4, 59.0], [12.5, 61.0], [12.6, 61.0], [12.7, 61.0], [12.8, 61.0], [12.9, 61.0], [13.0, 62.0], [13.1, 62.0], [13.2, 62.0], [13.3, 62.0], [13.4, 62.0], [13.5, 63.0], [13.6, 63.0], [13.7, 63.0], [13.8, 63.0], [13.9, 63.0], [14.0, 63.0], [14.1, 63.0], [14.2, 63.0], [14.3, 63.0], [14.4, 63.0], [14.5, 64.0], [14.6, 64.0], [14.7, 64.0], [14.8, 64.0], [14.9, 64.0], [15.0, 64.0], [15.1, 64.0], [15.2, 64.0], [15.3, 64.0], [15.4, 64.0], [15.5, 65.0], [15.6, 65.0], [15.7, 65.0], [15.8, 65.0], [15.9, 65.0], [16.0, 68.0], [16.1, 68.0], [16.2, 68.0], [16.3, 68.0], [16.4, 68.0], [16.5, 70.0], [16.6, 70.0], [16.7, 70.0], [16.8, 70.0], [16.9, 70.0], [17.0, 70.0], [17.1, 70.0], [17.2, 70.0], [17.3, 70.0], [17.4, 70.0], [17.5, 71.0], [17.6, 71.0], [17.7, 71.0], [17.8, 71.0], [17.9, 71.0], [18.0, 71.0], [18.1, 71.0], [18.2, 71.0], [18.3, 71.0], [18.4, 71.0], [18.5, 71.0], [18.6, 71.0], [18.7, 71.0], [18.8, 71.0], [18.9, 71.0], [19.0, 72.0], [19.1, 72.0], [19.2, 72.0], [19.3, 72.0], [19.4, 72.0], [19.5, 73.0], [19.6, 73.0], [19.7, 73.0], [19.8, 73.0], [19.9, 73.0], [20.0, 73.0], [20.1, 73.0], [20.2, 73.0], [20.3, 73.0], [20.4, 73.0], [20.5, 74.0], [20.6, 74.0], [20.7, 74.0], [20.8, 74.0], [20.9, 74.0], [21.0, 75.0], [21.1, 75.0], [21.2, 75.0], [21.3, 75.0], [21.4, 75.0], [21.5, 79.0], [21.6, 79.0], [21.7, 79.0], [21.8, 79.0], [21.9, 79.0], [22.0, 79.0], [22.1, 79.0], [22.2, 79.0], [22.3, 79.0], [22.4, 79.0], [22.5, 79.0], [22.6, 79.0], [22.7, 79.0], [22.8, 79.0], [22.9, 79.0], [23.0, 79.0], [23.1, 79.0], [23.2, 79.0], [23.3, 79.0], [23.4, 79.0], [23.5, 80.0], [23.6, 80.0], [23.7, 80.0], [23.8, 80.0], [23.9, 80.0], [24.0, 80.0], [24.1, 80.0], [24.2, 80.0], [24.3, 80.0], [24.4, 80.0], [24.5, 85.0], [24.6, 85.0], [24.7, 85.0], [24.8, 85.0], [24.9, 85.0], [25.0, 86.0], [25.1, 86.0], [25.2, 86.0], [25.3, 86.0], [25.4, 86.0], [25.5, 86.0], [25.6, 86.0], [25.7, 86.0], [25.8, 86.0], [25.9, 86.0], [26.0, 88.0], [26.1, 88.0], [26.2, 88.0], [26.3, 88.0], [26.4, 88.0], [26.5, 89.0], [26.6, 89.0], [26.7, 89.0], [26.8, 89.0], [26.9, 89.0], [27.0, 92.0], [27.1, 92.0], [27.2, 92.0], [27.3, 92.0], [27.4, 92.0], [27.5, 93.0], [27.6, 93.0], [27.7, 93.0], [27.8, 93.0], [27.9, 93.0], [28.0, 94.0], [28.1, 94.0], [28.2, 94.0], [28.3, 94.0], [28.4, 94.0], [28.5, 94.0], [28.6, 94.0], [28.7, 94.0], [28.8, 94.0], [28.9, 94.0], [29.0, 95.0], [29.1, 95.0], [29.2, 95.0], [29.3, 95.0], [29.4, 95.0], [29.5, 95.0], [29.6, 95.0], [29.7, 95.0], [29.8, 95.0], [29.9, 95.0], [30.0, 98.0], [30.1, 98.0], [30.2, 98.0], [30.3, 98.0], [30.4, 98.0], [30.5, 98.0], [30.6, 98.0], [30.7, 98.0], [30.8, 98.0], [30.9, 98.0], [31.0, 99.0], [31.1, 99.0], [31.2, 99.0], [31.3, 99.0], [31.4, 99.0], [31.5, 115.0], [31.6, 115.0], [31.7, 115.0], [31.8, 115.0], [31.9, 115.0], [32.0, 116.0], [32.1, 116.0], [32.2, 116.0], [32.3, 116.0], [32.4, 116.0], [32.5, 117.0], [32.6, 117.0], [32.7, 117.0], [32.8, 117.0], [32.9, 117.0], [33.0, 118.0], [33.1, 118.0], [33.2, 118.0], [33.3, 118.0], [33.4, 118.0], [33.5, 121.0], [33.6, 121.0], [33.7, 121.0], [33.8, 121.0], [33.9, 121.0], [34.0, 126.0], [34.1, 126.0], [34.2, 126.0], [34.3, 126.0], [34.4, 126.0], [34.5, 126.0], [34.6, 126.0], [34.7, 126.0], [34.8, 126.0], [34.9, 126.0], [35.0, 128.0], [35.1, 128.0], [35.2, 128.0], [35.3, 128.0], [35.4, 128.0], [35.5, 136.0], [35.6, 136.0], [35.7, 136.0], [35.8, 136.0], [35.9, 136.0], [36.0, 139.0], [36.1, 139.0], [36.2, 139.0], [36.3, 139.0], [36.4, 139.0], [36.5, 140.0], [36.6, 140.0], [36.7, 140.0], [36.8, 140.0], [36.9, 140.0], [37.0, 151.0], [37.1, 151.0], [37.2, 151.0], [37.3, 151.0], [37.4, 151.0], [37.5, 158.0], [37.6, 158.0], [37.7, 158.0], [37.8, 158.0], [37.9, 158.0], [38.0, 176.0], [38.1, 176.0], [38.2, 176.0], [38.3, 176.0], [38.4, 176.0], [38.5, 177.0], [38.6, 177.0], [38.7, 177.0], [38.8, 177.0], [38.9, 177.0], [39.0, 179.0], [39.1, 179.0], [39.2, 179.0], [39.3, 179.0], [39.4, 179.0], [39.5, 183.0], [39.6, 183.0], [39.7, 183.0], [39.8, 183.0], [39.9, 183.0], [40.0, 200.0], [40.1, 200.0], [40.2, 200.0], [40.3, 200.0], [40.4, 200.0], [40.5, 202.0], [40.6, 202.0], [40.7, 202.0], [40.8, 202.0], [40.9, 202.0], [41.0, 203.0], [41.1, 203.0], [41.2, 203.0], [41.3, 203.0], [41.4, 203.0], [41.5, 209.0], [41.6, 209.0], [41.7, 209.0], [41.8, 209.0], [41.9, 209.0], [42.0, 213.0], [42.1, 213.0], [42.2, 213.0], [42.3, 213.0], [42.4, 213.0], [42.5, 213.0], [42.6, 213.0], [42.7, 213.0], [42.8, 213.0], [42.9, 213.0], [43.0, 217.0], [43.1, 217.0], [43.2, 217.0], [43.3, 217.0], [43.4, 217.0], [43.5, 218.0], [43.6, 218.0], [43.7, 218.0], [43.8, 218.0], [43.9, 218.0], [44.0, 245.0], [44.1, 245.0], [44.2, 245.0], [44.3, 245.0], [44.4, 245.0], [44.5, 247.0], [44.6, 247.0], [44.7, 247.0], [44.8, 247.0], [44.9, 247.0], [45.0, 248.0], [45.1, 248.0], [45.2, 248.0], [45.3, 248.0], [45.4, 248.0], [45.5, 255.0], [45.6, 255.0], [45.7, 255.0], [45.8, 255.0], [45.9, 255.0], [46.0, 262.0], [46.1, 262.0], [46.2, 262.0], [46.3, 262.0], [46.4, 262.0], [46.5, 267.0], [46.6, 267.0], [46.7, 267.0], [46.8, 267.0], [46.9, 267.0], [47.0, 268.0], [47.1, 268.0], [47.2, 268.0], [47.3, 268.0], [47.4, 268.0], [47.5, 278.0], [47.6, 278.0], [47.7, 278.0], [47.8, 278.0], [47.9, 278.0], [48.0, 278.0], [48.1, 278.0], [48.2, 278.0], [48.3, 278.0], [48.4, 278.0], [48.5, 282.0], [48.6, 282.0], [48.7, 282.0], [48.8, 282.0], [48.9, 282.0], [49.0, 292.0], [49.1, 292.0], [49.2, 292.0], [49.3, 292.0], [49.4, 292.0], [49.5, 305.0], [49.6, 305.0], [49.7, 305.0], [49.8, 305.0], [49.9, 305.0], [50.0, 305.0], [50.1, 305.0], [50.2, 305.0], [50.3, 305.0], [50.4, 305.0], [50.5, 314.0], [50.6, 314.0], [50.7, 314.0], [50.8, 314.0], [50.9, 314.0], [51.0, 314.0], [51.1, 314.0], [51.2, 314.0], [51.3, 314.0], [51.4, 314.0], [51.5, 322.0], [51.6, 322.0], [51.7, 322.0], [51.8, 322.0], [51.9, 322.0], [52.0, 332.0], [52.1, 332.0], [52.2, 332.0], [52.3, 332.0], [52.4, 332.0], [52.5, 336.0], [52.6, 336.0], [52.7, 336.0], [52.8, 336.0], [52.9, 336.0], [53.0, 342.0], [53.1, 342.0], [53.2, 342.0], [53.3, 342.0], [53.4, 342.0], [53.5, 346.0], [53.6, 346.0], [53.7, 346.0], [53.8, 346.0], [53.9, 346.0], [54.0, 353.0], [54.1, 353.0], [54.2, 353.0], [54.3, 353.0], [54.4, 353.0], [54.5, 357.0], [54.6, 357.0], [54.7, 357.0], [54.8, 357.0], [54.9, 357.0], [55.0, 359.0], [55.1, 359.0], [55.2, 359.0], [55.3, 359.0], [55.4, 359.0], [55.5, 367.0], [55.6, 367.0], [55.7, 367.0], [55.8, 367.0], [55.9, 367.0], [56.0, 374.0], [56.1, 374.0], [56.2, 374.0], [56.3, 374.0], [56.4, 374.0], [56.5, 375.0], [56.6, 375.0], [56.7, 375.0], [56.8, 375.0], [56.9, 375.0], [57.0, 380.0], [57.1, 380.0], [57.2, 380.0], [57.3, 380.0], [57.4, 380.0], [57.5, 388.0], [57.6, 388.0], [57.7, 388.0], [57.8, 388.0], [57.9, 388.0], [58.0, 399.0], [58.1, 399.0], [58.2, 399.0], [58.3, 399.0], [58.4, 399.0], [58.5, 401.0], [58.6, 401.0], [58.7, 401.0], [58.8, 401.0], [58.9, 401.0], [59.0, 403.0], [59.1, 403.0], [59.2, 403.0], [59.3, 403.0], [59.4, 403.0], [59.5, 405.0], [59.6, 405.0], [59.7, 405.0], [59.8, 405.0], [59.9, 405.0], [60.0, 407.0], [60.1, 407.0], [60.2, 407.0], [60.3, 407.0], [60.4, 407.0], [60.5, 407.0], [60.6, 407.0], [60.7, 407.0], [60.8, 407.0], [60.9, 407.0], [61.0, 408.0], [61.1, 408.0], [61.2, 408.0], [61.3, 408.0], [61.4, 408.0], [61.5, 409.0], [61.6, 409.0], [61.7, 409.0], [61.8, 409.0], [61.9, 409.0], [62.0, 414.0], [62.1, 414.0], [62.2, 414.0], [62.3, 414.0], [62.4, 414.0], [62.5, 421.0], [62.6, 421.0], [62.7, 421.0], [62.8, 421.0], [62.9, 421.0], [63.0, 425.0], [63.1, 425.0], [63.2, 425.0], [63.3, 425.0], [63.4, 425.0], [63.5, 427.0], [63.6, 427.0], [63.7, 427.0], [63.8, 427.0], [63.9, 427.0], [64.0, 428.0], [64.1, 428.0], [64.2, 428.0], [64.3, 428.0], [64.4, 428.0], [64.5, 431.0], [64.6, 431.0], [64.7, 431.0], [64.8, 431.0], [64.9, 431.0], [65.0, 431.0], [65.1, 431.0], [65.2, 431.0], [65.3, 431.0], [65.4, 431.0], [65.5, 433.0], [65.6, 433.0], [65.7, 433.0], [65.8, 433.0], [65.9, 433.0], [66.0, 434.0], [66.1, 434.0], [66.2, 434.0], [66.3, 434.0], [66.4, 434.0], [66.5, 434.0], [66.6, 434.0], [66.7, 434.0], [66.8, 434.0], [66.9, 434.0], [67.0, 435.0], [67.1, 435.0], [67.2, 435.0], [67.3, 435.0], [67.4, 435.0], [67.5, 437.0], [67.6, 437.0], [67.7, 437.0], [67.8, 437.0], [67.9, 437.0], [68.0, 439.0], [68.1, 439.0], [68.2, 439.0], [68.3, 439.0], [68.4, 439.0], [68.5, 439.0], [68.6, 439.0], [68.7, 439.0], [68.8, 439.0], [68.9, 439.0], [69.0, 441.0], [69.1, 441.0], [69.2, 441.0], [69.3, 441.0], [69.4, 441.0], [69.5, 442.0], [69.6, 442.0], [69.7, 442.0], [69.8, 442.0], [69.9, 442.0], [70.0, 442.0], [70.1, 442.0], [70.2, 442.0], [70.3, 442.0], [70.4, 442.0], [70.5, 444.0], [70.6, 444.0], [70.7, 444.0], [70.8, 444.0], [70.9, 444.0], [71.0, 444.0], [71.1, 444.0], [71.2, 444.0], [71.3, 444.0], [71.4, 444.0], [71.5, 445.0], [71.6, 445.0], [71.7, 445.0], [71.8, 445.0], [71.9, 445.0], [72.0, 446.0], [72.1, 446.0], [72.2, 446.0], [72.3, 446.0], [72.4, 446.0], [72.5, 447.0], [72.6, 447.0], [72.7, 447.0], [72.8, 447.0], [72.9, 447.0], [73.0, 447.0], [73.1, 447.0], [73.2, 447.0], [73.3, 447.0], [73.4, 447.0], [73.5, 447.0], [73.6, 447.0], [73.7, 447.0], [73.8, 447.0], [73.9, 447.0], [74.0, 449.0], [74.1, 449.0], [74.2, 449.0], [74.3, 449.0], [74.4, 449.0], [74.5, 456.0], [74.6, 456.0], [74.7, 456.0], [74.8, 456.0], [74.9, 456.0], [75.0, 458.0], [75.1, 458.0], [75.2, 458.0], [75.3, 458.0], [75.4, 458.0], [75.5, 463.0], [75.6, 463.0], [75.7, 463.0], [75.8, 463.0], [75.9, 463.0], [76.0, 465.0], [76.1, 465.0], [76.2, 465.0], [76.3, 465.0], [76.4, 465.0], [76.5, 467.0], [76.6, 467.0], [76.7, 467.0], [76.8, 467.0], [76.9, 467.0], [77.0, 467.0], [77.1, 467.0], [77.2, 467.0], [77.3, 467.0], [77.4, 467.0], [77.5, 467.0], [77.6, 467.0], [77.7, 467.0], [77.8, 467.0], [77.9, 467.0], [78.0, 469.0], [78.1, 469.0], [78.2, 469.0], [78.3, 469.0], [78.4, 469.0], [78.5, 469.0], [78.6, 469.0], [78.7, 469.0], [78.8, 469.0], [78.9, 469.0], [79.0, 470.0], [79.1, 470.0], [79.2, 470.0], [79.3, 470.0], [79.4, 470.0], [79.5, 471.0], [79.6, 471.0], [79.7, 471.0], [79.8, 471.0], [79.9, 471.0], [80.0, 471.0], [80.1, 471.0], [80.2, 471.0], [80.3, 471.0], [80.4, 471.0], [80.5, 472.0], [80.6, 472.0], [80.7, 472.0], [80.8, 472.0], [80.9, 472.0], [81.0, 472.0], [81.1, 472.0], [81.2, 472.0], [81.3, 472.0], [81.4, 472.0], [81.5, 473.0], [81.6, 473.0], [81.7, 473.0], [81.8, 473.0], [81.9, 473.0], [82.0, 473.0], [82.1, 473.0], [82.2, 473.0], [82.3, 473.0], [82.4, 473.0], [82.5, 474.0], [82.6, 474.0], [82.7, 474.0], [82.8, 474.0], [82.9, 474.0], [83.0, 474.0], [83.1, 474.0], [83.2, 474.0], [83.3, 474.0], [83.4, 474.0], [83.5, 475.0], [83.6, 475.0], [83.7, 475.0], [83.8, 475.0], [83.9, 475.0], [84.0, 475.0], [84.1, 475.0], [84.2, 475.0], [84.3, 475.0], [84.4, 475.0], [84.5, 475.0], [84.6, 475.0], [84.7, 475.0], [84.8, 475.0], [84.9, 475.0], [85.0, 476.0], [85.1, 476.0], [85.2, 476.0], [85.3, 476.0], [85.4, 476.0], [85.5, 476.0], [85.6, 476.0], [85.7, 476.0], [85.8, 476.0], [85.9, 476.0], [86.0, 476.0], [86.1, 476.0], [86.2, 476.0], [86.3, 476.0], [86.4, 476.0], [86.5, 476.0], [86.6, 476.0], [86.7, 476.0], [86.8, 476.0], [86.9, 476.0], [87.0, 476.0], [87.1, 476.0], [87.2, 476.0], [87.3, 476.0], [87.4, 476.0], [87.5, 476.0], [87.6, 476.0], [87.7, 476.0], [87.8, 476.0], [87.9, 476.0], [88.0, 477.0], [88.1, 477.0], [88.2, 477.0], [88.3, 477.0], [88.4, 477.0], [88.5, 477.0], [88.6, 477.0], [88.7, 477.0], [88.8, 477.0], [88.9, 477.0], [89.0, 477.0], [89.1, 477.0], [89.2, 477.0], [89.3, 477.0], [89.4, 477.0], [89.5, 477.0], [89.6, 477.0], [89.7, 477.0], [89.8, 477.0], [89.9, 477.0], [90.0, 478.0], [90.1, 478.0], [90.2, 478.0], [90.3, 478.0], [90.4, 478.0], [90.5, 478.0], [90.6, 478.0], [90.7, 478.0], [90.8, 478.0], [90.9, 478.0], [91.0, 478.0], [91.1, 478.0], [91.2, 478.0], [91.3, 478.0], [91.4, 478.0], [91.5, 478.0], [91.6, 478.0], [91.7, 478.0], [91.8, 478.0], [91.9, 478.0], [92.0, 479.0], [92.1, 479.0], [92.2, 479.0], [92.3, 479.0], [92.4, 479.0], [92.5, 480.0], [92.6, 480.0], [92.7, 480.0], [92.8, 480.0], [92.9, 480.0], [93.0, 480.0], [93.1, 480.0], [93.2, 480.0], [93.3, 480.0], [93.4, 480.0], [93.5, 481.0], [93.6, 481.0], [93.7, 481.0], [93.8, 481.0], [93.9, 481.0], [94.0, 482.0], [94.1, 482.0], [94.2, 482.0], [94.3, 482.0], [94.4, 482.0], [94.5, 482.0], [94.6, 482.0], [94.7, 482.0], [94.8, 482.0], [94.9, 482.0], [95.0, 483.0], [95.1, 483.0], [95.2, 483.0], [95.3, 483.0], [95.4, 483.0], [95.5, 483.0], [95.6, 483.0], [95.7, 483.0], [95.8, 483.0], [95.9, 483.0], [96.0, 483.0], [96.1, 483.0], [96.2, 483.0], [96.3, 483.0], [96.4, 483.0], [96.5, 483.0], [96.6, 483.0], [96.7, 483.0], [96.8, 483.0], [96.9, 483.0], [97.0, 484.0], [97.1, 484.0], [97.2, 484.0], [97.3, 484.0], [97.4, 484.0], [97.5, 485.0], [97.6, 485.0], [97.7, 485.0], [97.8, 485.0], [97.9, 485.0], [98.0, 485.0], [98.1, 485.0], [98.2, 485.0], [98.3, 485.0], [98.4, 485.0], [98.5, 486.0], [98.6, 486.0], [98.7, 486.0], [98.8, 486.0], [98.9, 486.0], [99.0, 486.0], [99.1, 486.0], [99.2, 486.0], [99.3, 486.0], [99.4, 486.0], [99.5, 487.0], [99.6, 487.0], [99.7, 487.0], [99.8, 487.0], [99.9, 487.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 83.0, "series": [{"data": [[0.0, 63.0], [300.0, 18.0], [400.0, 83.0], [100.0, 17.0], [200.0, 19.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 85.45999999999998, "minX": 1.57232418E12, "maxY": 85.45999999999998, "series": [{"data": [[1.57232418E12, 85.45999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232418E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 2.0, "maxY": 472.0, "series": [{"data": [[2.0, 124.5], [4.0, 30.0], [6.0, 40.25], [7.0, 35.0], [8.0, 37.0], [9.0, 34.0], [10.0, 38.0], [11.0, 38.333333333333336], [12.0, 80.0], [13.0, 31.0], [14.0, 58.0], [15.0, 69.5], [16.0, 63.166666666666664], [17.0, 65.83333333333333], [18.0, 71.75], [19.0, 63.0], [20.0, 79.25], [49.0, 80.0], [90.0, 417.95238095238096], [91.0, 85.0], [89.0, 422.1], [93.0, 336.3333333333333], [99.0, 346.0], [98.0, 456.0], [97.0, 472.0], [96.0, 313.3333333333333], [103.0, 117.0], [101.0, 374.5], [100.0, 378.6666666666667], [104.0, 268.25], [119.0, 392.25], [116.0, 286.5], [123.0, 445.0], [122.0, 439.0], [126.0, 291.5], [125.0, 397.0], [135.0, 86.0], [134.0, 437.0], [133.0, 296.0], [132.0, 441.0], [131.0, 440.5], [130.0, 401.0], [143.0, 115.0], [142.0, 307.0], [140.0, 256.75], [139.0, 265.5], [138.0, 158.0], [136.0, 369.0], [150.0, 409.5], [151.0, 147.5], [149.0, 140.375], [147.0, 101.66666666666667], [145.0, 203.5]], "isOverall": false, "label": "Search Video", "isController": false}, {"data": [[85.45999999999998, 276.48]], "isOverall": false, "label": "Search Video-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 151.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1036.6666666666667, "minX": 1.57232418E12, "maxY": 3659.1833333333334, "series": [{"data": [[1.57232418E12, 3659.1833333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232418E12, 1036.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232418E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 276.48, "minX": 1.57232418E12, "maxY": 276.48, "series": [{"data": [[1.57232418E12, 276.48]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232418E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 276.41, "minX": 1.57232418E12, "maxY": 276.41, "series": [{"data": [[1.57232418E12, 276.41]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232418E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 61.79999999999997, "minX": 1.57232418E12, "maxY": 61.79999999999997, "series": [{"data": [[1.57232418E12, 61.79999999999997]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232418E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.57232418E12, "maxY": 487.0, "series": [{"data": [[1.57232418E12, 487.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232418E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232418E12, 477.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232418E12, 486.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232418E12, 482.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232418E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 37.0, "minX": 17.0, "maxY": 353.0, "series": [{"data": [[17.0, 37.0], [183.0, 353.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 183.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 37.0, "minX": 17.0, "maxY": 353.0, "series": [{"data": [[17.0, 37.0], [183.0, 353.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 183.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232418E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232418E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232418E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232418E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232418E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232418E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232418E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232418E12, 3.3333333333333335]], "isOverall": false, "label": "Search Video-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232418E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232418E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232418E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232418E12, "title": "Total Transactions Per Second"}},
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

