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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 453.0, "series": [{"data": [[0.0, 13.0], [0.1, 13.0], [0.2, 13.0], [0.3, 13.0], [0.4, 13.0], [0.5, 14.0], [0.6, 14.0], [0.7, 14.0], [0.8, 14.0], [0.9, 14.0], [1.0, 14.0], [1.1, 14.0], [1.2, 14.0], [1.3, 14.0], [1.4, 14.0], [1.5, 14.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 15.0], [2.1, 15.0], [2.2, 15.0], [2.3, 15.0], [2.4, 15.0], [2.5, 16.0], [2.6, 16.0], [2.7, 16.0], [2.8, 16.0], [2.9, 16.0], [3.0, 17.0], [3.1, 17.0], [3.2, 17.0], [3.3, 17.0], [3.4, 17.0], [3.5, 17.0], [3.6, 17.0], [3.7, 17.0], [3.8, 17.0], [3.9, 17.0], [4.0, 17.0], [4.1, 17.0], [4.2, 17.0], [4.3, 17.0], [4.4, 17.0], [4.5, 19.0], [4.6, 19.0], [4.7, 19.0], [4.8, 19.0], [4.9, 19.0], [5.0, 19.0], [5.1, 19.0], [5.2, 19.0], [5.3, 19.0], [5.4, 19.0], [5.5, 19.0], [5.6, 19.0], [5.7, 19.0], [5.8, 19.0], [5.9, 19.0], [6.0, 21.0], [6.1, 21.0], [6.2, 21.0], [6.3, 21.0], [6.4, 21.0], [6.5, 21.0], [6.6, 21.0], [6.7, 21.0], [6.8, 21.0], [6.9, 21.0], [7.0, 23.0], [7.1, 23.0], [7.2, 23.0], [7.3, 23.0], [7.4, 23.0], [7.5, 23.0], [7.6, 23.0], [7.7, 23.0], [7.8, 23.0], [7.9, 23.0], [8.0, 26.0], [8.1, 26.0], [8.2, 26.0], [8.3, 26.0], [8.4, 26.0], [8.5, 26.0], [8.6, 26.0], [8.7, 26.0], [8.8, 26.0], [8.9, 26.0], [9.0, 28.0], [9.1, 28.0], [9.2, 28.0], [9.3, 28.0], [9.4, 28.0], [9.5, 29.0], [9.6, 29.0], [9.7, 29.0], [9.8, 29.0], [9.9, 29.0], [10.0, 29.0], [10.1, 29.0], [10.2, 29.0], [10.3, 29.0], [10.4, 29.0], [10.5, 30.0], [10.6, 30.0], [10.7, 30.0], [10.8, 30.0], [10.9, 30.0], [11.0, 33.0], [11.1, 33.0], [11.2, 33.0], [11.3, 33.0], [11.4, 33.0], [11.5, 39.0], [11.6, 39.0], [11.7, 39.0], [11.8, 39.0], [11.9, 39.0], [12.0, 44.0], [12.1, 44.0], [12.2, 44.0], [12.3, 44.0], [12.4, 44.0], [12.5, 44.0], [12.6, 44.0], [12.7, 44.0], [12.8, 44.0], [12.9, 44.0], [13.0, 46.0], [13.1, 46.0], [13.2, 46.0], [13.3, 46.0], [13.4, 46.0], [13.5, 52.0], [13.6, 52.0], [13.7, 52.0], [13.8, 52.0], [13.9, 52.0], [14.0, 55.0], [14.1, 55.0], [14.2, 55.0], [14.3, 55.0], [14.4, 55.0], [14.5, 61.0], [14.6, 61.0], [14.7, 61.0], [14.8, 61.0], [14.9, 61.0], [15.0, 63.0], [15.1, 63.0], [15.2, 63.0], [15.3, 63.0], [15.4, 63.0], [15.5, 65.0], [15.6, 65.0], [15.7, 65.0], [15.8, 65.0], [15.9, 65.0], [16.0, 70.0], [16.1, 70.0], [16.2, 70.0], [16.3, 70.0], [16.4, 70.0], [16.5, 74.0], [16.6, 74.0], [16.7, 74.0], [16.8, 74.0], [16.9, 74.0], [17.0, 80.0], [17.1, 80.0], [17.2, 80.0], [17.3, 80.0], [17.4, 80.0], [17.5, 85.0], [17.6, 85.0], [17.7, 85.0], [17.8, 85.0], [17.9, 85.0], [18.0, 86.0], [18.1, 86.0], [18.2, 86.0], [18.3, 86.0], [18.4, 86.0], [18.5, 89.0], [18.6, 89.0], [18.7, 89.0], [18.8, 89.0], [18.9, 89.0], [19.0, 89.0], [19.1, 89.0], [19.2, 89.0], [19.3, 89.0], [19.4, 89.0], [19.5, 95.0], [19.6, 95.0], [19.7, 95.0], [19.8, 95.0], [19.9, 95.0], [20.0, 95.0], [20.1, 95.0], [20.2, 95.0], [20.3, 95.0], [20.4, 95.0], [20.5, 100.0], [20.6, 100.0], [20.7, 100.0], [20.8, 100.0], [20.9, 100.0], [21.0, 101.0], [21.1, 101.0], [21.2, 101.0], [21.3, 101.0], [21.4, 101.0], [21.5, 104.0], [21.6, 104.0], [21.7, 104.0], [21.8, 104.0], [21.9, 104.0], [22.0, 107.0], [22.1, 107.0], [22.2, 107.0], [22.3, 107.0], [22.4, 107.0], [22.5, 110.0], [22.6, 110.0], [22.7, 110.0], [22.8, 110.0], [22.9, 110.0], [23.0, 112.0], [23.1, 112.0], [23.2, 112.0], [23.3, 112.0], [23.4, 112.0], [23.5, 113.0], [23.6, 113.0], [23.7, 113.0], [23.8, 113.0], [23.9, 113.0], [24.0, 114.0], [24.1, 114.0], [24.2, 114.0], [24.3, 114.0], [24.4, 114.0], [24.5, 131.0], [24.6, 131.0], [24.7, 131.0], [24.8, 131.0], [24.9, 131.0], [25.0, 132.0], [25.1, 132.0], [25.2, 132.0], [25.3, 132.0], [25.4, 132.0], [25.5, 133.0], [25.6, 133.0], [25.7, 133.0], [25.8, 133.0], [25.9, 133.0], [26.0, 139.0], [26.1, 139.0], [26.2, 139.0], [26.3, 139.0], [26.4, 139.0], [26.5, 151.0], [26.6, 151.0], [26.7, 151.0], [26.8, 151.0], [26.9, 151.0], [27.0, 155.0], [27.1, 155.0], [27.2, 155.0], [27.3, 155.0], [27.4, 155.0], [27.5, 166.0], [27.6, 166.0], [27.7, 166.0], [27.8, 166.0], [27.9, 166.0], [28.0, 167.0], [28.1, 167.0], [28.2, 167.0], [28.3, 167.0], [28.4, 167.0], [28.5, 172.0], [28.6, 172.0], [28.7, 172.0], [28.8, 172.0], [28.9, 172.0], [29.0, 173.0], [29.1, 173.0], [29.2, 173.0], [29.3, 173.0], [29.4, 173.0], [29.5, 177.0], [29.6, 177.0], [29.7, 177.0], [29.8, 177.0], [29.9, 177.0], [30.0, 180.0], [30.1, 180.0], [30.2, 180.0], [30.3, 180.0], [30.4, 180.0], [30.5, 187.0], [30.6, 187.0], [30.7, 187.0], [30.8, 187.0], [30.9, 187.0], [31.0, 192.0], [31.1, 192.0], [31.2, 192.0], [31.3, 192.0], [31.4, 192.0], [31.5, 194.0], [31.6, 194.0], [31.7, 194.0], [31.8, 194.0], [31.9, 194.0], [32.0, 197.0], [32.1, 197.0], [32.2, 197.0], [32.3, 197.0], [32.4, 197.0], [32.5, 199.0], [32.6, 199.0], [32.7, 199.0], [32.8, 199.0], [32.9, 199.0], [33.0, 200.0], [33.1, 200.0], [33.2, 200.0], [33.3, 200.0], [33.4, 200.0], [33.5, 201.0], [33.6, 201.0], [33.7, 201.0], [33.8, 201.0], [33.9, 201.0], [34.0, 206.0], [34.1, 206.0], [34.2, 206.0], [34.3, 206.0], [34.4, 206.0], [34.5, 209.0], [34.6, 209.0], [34.7, 209.0], [34.8, 209.0], [34.9, 209.0], [35.0, 210.0], [35.1, 210.0], [35.2, 210.0], [35.3, 210.0], [35.4, 210.0], [35.5, 210.0], [35.6, 210.0], [35.7, 210.0], [35.8, 210.0], [35.9, 210.0], [36.0, 210.0], [36.1, 210.0], [36.2, 210.0], [36.3, 210.0], [36.4, 210.0], [36.5, 210.0], [36.6, 210.0], [36.7, 210.0], [36.8, 210.0], [36.9, 210.0], [37.0, 214.0], [37.1, 214.0], [37.2, 214.0], [37.3, 214.0], [37.4, 214.0], [37.5, 214.0], [37.6, 214.0], [37.7, 214.0], [37.8, 214.0], [37.9, 214.0], [38.0, 217.0], [38.1, 217.0], [38.2, 217.0], [38.3, 217.0], [38.4, 217.0], [38.5, 217.0], [38.6, 217.0], [38.7, 217.0], [38.8, 217.0], [38.9, 217.0], [39.0, 219.0], [39.1, 219.0], [39.2, 219.0], [39.3, 219.0], [39.4, 219.0], [39.5, 220.0], [39.6, 220.0], [39.7, 220.0], [39.8, 220.0], [39.9, 220.0], [40.0, 222.0], [40.1, 222.0], [40.2, 222.0], [40.3, 222.0], [40.4, 222.0], [40.5, 223.0], [40.6, 223.0], [40.7, 223.0], [40.8, 223.0], [40.9, 223.0], [41.0, 226.0], [41.1, 226.0], [41.2, 226.0], [41.3, 226.0], [41.4, 226.0], [41.5, 227.0], [41.6, 227.0], [41.7, 227.0], [41.8, 227.0], [41.9, 227.0], [42.0, 227.0], [42.1, 227.0], [42.2, 227.0], [42.3, 227.0], [42.4, 227.0], [42.5, 230.0], [42.6, 230.0], [42.7, 230.0], [42.8, 230.0], [42.9, 230.0], [43.0, 232.0], [43.1, 232.0], [43.2, 232.0], [43.3, 232.0], [43.4, 232.0], [43.5, 234.0], [43.6, 234.0], [43.7, 234.0], [43.8, 234.0], [43.9, 234.0], [44.0, 234.0], [44.1, 234.0], [44.2, 234.0], [44.3, 234.0], [44.4, 234.0], [44.5, 235.0], [44.6, 235.0], [44.7, 235.0], [44.8, 235.0], [44.9, 235.0], [45.0, 237.0], [45.1, 237.0], [45.2, 237.0], [45.3, 237.0], [45.4, 237.0], [45.5, 240.0], [45.6, 240.0], [45.7, 240.0], [45.8, 240.0], [45.9, 240.0], [46.0, 241.0], [46.1, 241.0], [46.2, 241.0], [46.3, 241.0], [46.4, 241.0], [46.5, 242.0], [46.6, 242.0], [46.7, 242.0], [46.8, 242.0], [46.9, 242.0], [47.0, 243.0], [47.1, 243.0], [47.2, 243.0], [47.3, 243.0], [47.4, 243.0], [47.5, 248.0], [47.6, 248.0], [47.7, 248.0], [47.8, 248.0], [47.9, 248.0], [48.0, 248.0], [48.1, 248.0], [48.2, 248.0], [48.3, 248.0], [48.4, 248.0], [48.5, 251.0], [48.6, 251.0], [48.7, 251.0], [48.8, 251.0], [48.9, 251.0], [49.0, 253.0], [49.1, 253.0], [49.2, 253.0], [49.3, 253.0], [49.4, 253.0], [49.5, 260.0], [49.6, 260.0], [49.7, 260.0], [49.8, 260.0], [49.9, 260.0], [50.0, 262.0], [50.1, 262.0], [50.2, 262.0], [50.3, 262.0], [50.4, 262.0], [50.5, 263.0], [50.6, 263.0], [50.7, 263.0], [50.8, 263.0], [50.9, 263.0], [51.0, 265.0], [51.1, 265.0], [51.2, 265.0], [51.3, 265.0], [51.4, 265.0], [51.5, 268.0], [51.6, 268.0], [51.7, 268.0], [51.8, 268.0], [51.9, 268.0], [52.0, 269.0], [52.1, 269.0], [52.2, 269.0], [52.3, 269.0], [52.4, 269.0], [52.5, 280.0], [52.6, 280.0], [52.7, 280.0], [52.8, 280.0], [52.9, 280.0], [53.0, 286.0], [53.1, 286.0], [53.2, 286.0], [53.3, 286.0], [53.4, 286.0], [53.5, 291.0], [53.6, 291.0], [53.7, 291.0], [53.8, 291.0], [53.9, 291.0], [54.0, 299.0], [54.1, 299.0], [54.2, 299.0], [54.3, 299.0], [54.4, 299.0], [54.5, 307.0], [54.6, 307.0], [54.7, 307.0], [54.8, 307.0], [54.9, 307.0], [55.0, 317.0], [55.1, 317.0], [55.2, 317.0], [55.3, 317.0], [55.4, 317.0], [55.5, 320.0], [55.6, 320.0], [55.7, 320.0], [55.8, 320.0], [55.9, 320.0], [56.0, 323.0], [56.1, 323.0], [56.2, 323.0], [56.3, 323.0], [56.4, 323.0], [56.5, 330.0], [56.6, 330.0], [56.7, 330.0], [56.8, 330.0], [56.9, 330.0], [57.0, 336.0], [57.1, 336.0], [57.2, 336.0], [57.3, 336.0], [57.4, 336.0], [57.5, 339.0], [57.6, 339.0], [57.7, 339.0], [57.8, 339.0], [57.9, 339.0], [58.0, 344.0], [58.1, 344.0], [58.2, 344.0], [58.3, 344.0], [58.4, 344.0], [58.5, 347.0], [58.6, 347.0], [58.7, 347.0], [58.8, 347.0], [58.9, 347.0], [59.0, 364.0], [59.1, 364.0], [59.2, 364.0], [59.3, 364.0], [59.4, 364.0], [59.5, 370.0], [59.6, 370.0], [59.7, 370.0], [59.8, 370.0], [59.9, 370.0], [60.0, 370.0], [60.1, 370.0], [60.2, 370.0], [60.3, 370.0], [60.4, 370.0], [60.5, 371.0], [60.6, 371.0], [60.7, 371.0], [60.8, 371.0], [60.9, 371.0], [61.0, 372.0], [61.1, 372.0], [61.2, 372.0], [61.3, 372.0], [61.4, 372.0], [61.5, 372.0], [61.6, 372.0], [61.7, 372.0], [61.8, 372.0], [61.9, 372.0], [62.0, 375.0], [62.1, 375.0], [62.2, 375.0], [62.3, 375.0], [62.4, 375.0], [62.5, 375.0], [62.6, 375.0], [62.7, 375.0], [62.8, 375.0], [62.9, 375.0], [63.0, 377.0], [63.1, 377.0], [63.2, 377.0], [63.3, 377.0], [63.4, 377.0], [63.5, 378.0], [63.6, 378.0], [63.7, 378.0], [63.8, 378.0], [63.9, 378.0], [64.0, 379.0], [64.1, 379.0], [64.2, 379.0], [64.3, 379.0], [64.4, 379.0], [64.5, 379.0], [64.6, 379.0], [64.7, 379.0], [64.8, 379.0], [64.9, 379.0], [65.0, 379.0], [65.1, 379.0], [65.2, 379.0], [65.3, 379.0], [65.4, 379.0], [65.5, 380.0], [65.6, 380.0], [65.7, 380.0], [65.8, 380.0], [65.9, 380.0], [66.0, 380.0], [66.1, 380.0], [66.2, 380.0], [66.3, 380.0], [66.4, 380.0], [66.5, 380.0], [66.6, 380.0], [66.7, 380.0], [66.8, 380.0], [66.9, 380.0], [67.0, 381.0], [67.1, 381.0], [67.2, 381.0], [67.3, 381.0], [67.4, 381.0], [67.5, 382.0], [67.6, 382.0], [67.7, 382.0], [67.8, 382.0], [67.9, 382.0], [68.0, 382.0], [68.1, 382.0], [68.2, 382.0], [68.3, 382.0], [68.4, 382.0], [68.5, 382.0], [68.6, 382.0], [68.7, 382.0], [68.8, 382.0], [68.9, 382.0], [69.0, 382.0], [69.1, 382.0], [69.2, 382.0], [69.3, 382.0], [69.4, 382.0], [69.5, 382.0], [69.6, 382.0], [69.7, 382.0], [69.8, 382.0], [69.9, 382.0], [70.0, 384.0], [70.1, 384.0], [70.2, 384.0], [70.3, 384.0], [70.4, 384.0], [70.5, 386.0], [70.6, 386.0], [70.7, 386.0], [70.8, 386.0], [70.9, 386.0], [71.0, 387.0], [71.1, 387.0], [71.2, 387.0], [71.3, 387.0], [71.4, 387.0], [71.5, 390.0], [71.6, 390.0], [71.7, 390.0], [71.8, 390.0], [71.9, 390.0], [72.0, 390.0], [72.1, 390.0], [72.2, 390.0], [72.3, 390.0], [72.4, 390.0], [72.5, 396.0], [72.6, 396.0], [72.7, 396.0], [72.8, 396.0], [72.9, 396.0], [73.0, 396.0], [73.1, 396.0], [73.2, 396.0], [73.3, 396.0], [73.4, 396.0], [73.5, 397.0], [73.6, 397.0], [73.7, 397.0], [73.8, 397.0], [73.9, 397.0], [74.0, 397.0], [74.1, 397.0], [74.2, 397.0], [74.3, 397.0], [74.4, 397.0], [74.5, 397.0], [74.6, 397.0], [74.7, 397.0], [74.8, 397.0], [74.9, 397.0], [75.0, 398.0], [75.1, 398.0], [75.2, 398.0], [75.3, 398.0], [75.4, 398.0], [75.5, 399.0], [75.6, 399.0], [75.7, 399.0], [75.8, 399.0], [75.9, 399.0], [76.0, 400.0], [76.1, 400.0], [76.2, 400.0], [76.3, 400.0], [76.4, 400.0], [76.5, 400.0], [76.6, 400.0], [76.7, 400.0], [76.8, 400.0], [76.9, 400.0], [77.0, 401.0], [77.1, 401.0], [77.2, 401.0], [77.3, 401.0], [77.4, 401.0], [77.5, 401.0], [77.6, 401.0], [77.7, 401.0], [77.8, 401.0], [77.9, 401.0], [78.0, 402.0], [78.1, 402.0], [78.2, 402.0], [78.3, 402.0], [78.4, 402.0], [78.5, 403.0], [78.6, 403.0], [78.7, 403.0], [78.8, 403.0], [78.9, 403.0], [79.0, 403.0], [79.1, 403.0], [79.2, 403.0], [79.3, 403.0], [79.4, 403.0], [79.5, 404.0], [79.6, 404.0], [79.7, 404.0], [79.8, 404.0], [79.9, 404.0], [80.0, 404.0], [80.1, 404.0], [80.2, 404.0], [80.3, 404.0], [80.4, 404.0], [80.5, 404.0], [80.6, 404.0], [80.7, 404.0], [80.8, 404.0], [80.9, 404.0], [81.0, 405.0], [81.1, 405.0], [81.2, 405.0], [81.3, 405.0], [81.4, 405.0], [81.5, 406.0], [81.6, 406.0], [81.7, 406.0], [81.8, 406.0], [81.9, 406.0], [82.0, 406.0], [82.1, 406.0], [82.2, 406.0], [82.3, 406.0], [82.4, 406.0], [82.5, 406.0], [82.6, 406.0], [82.7, 406.0], [82.8, 406.0], [82.9, 406.0], [83.0, 407.0], [83.1, 407.0], [83.2, 407.0], [83.3, 407.0], [83.4, 407.0], [83.5, 407.0], [83.6, 407.0], [83.7, 407.0], [83.8, 407.0], [83.9, 407.0], [84.0, 409.0], [84.1, 409.0], [84.2, 409.0], [84.3, 409.0], [84.4, 409.0], [84.5, 409.0], [84.6, 409.0], [84.7, 409.0], [84.8, 409.0], [84.9, 409.0], [85.0, 410.0], [85.1, 410.0], [85.2, 410.0], [85.3, 410.0], [85.4, 410.0], [85.5, 410.0], [85.6, 410.0], [85.7, 410.0], [85.8, 410.0], [85.9, 410.0], [86.0, 411.0], [86.1, 411.0], [86.2, 411.0], [86.3, 411.0], [86.4, 411.0], [86.5, 412.0], [86.6, 412.0], [86.7, 412.0], [86.8, 412.0], [86.9, 412.0], [87.0, 413.0], [87.1, 413.0], [87.2, 413.0], [87.3, 413.0], [87.4, 413.0], [87.5, 414.0], [87.6, 414.0], [87.7, 414.0], [87.8, 414.0], [87.9, 414.0], [88.0, 417.0], [88.1, 417.0], [88.2, 417.0], [88.3, 417.0], [88.4, 417.0], [88.5, 418.0], [88.6, 418.0], [88.7, 418.0], [88.8, 418.0], [88.9, 418.0], [89.0, 419.0], [89.1, 419.0], [89.2, 419.0], [89.3, 419.0], [89.4, 419.0], [89.5, 419.0], [89.6, 419.0], [89.7, 419.0], [89.8, 419.0], [89.9, 419.0], [90.0, 419.0], [90.1, 419.0], [90.2, 419.0], [90.3, 419.0], [90.4, 419.0], [90.5, 422.0], [90.6, 422.0], [90.7, 422.0], [90.8, 422.0], [90.9, 422.0], [91.0, 422.0], [91.1, 422.0], [91.2, 422.0], [91.3, 422.0], [91.4, 422.0], [91.5, 423.0], [91.6, 423.0], [91.7, 423.0], [91.8, 423.0], [91.9, 423.0], [92.0, 426.0], [92.1, 426.0], [92.2, 426.0], [92.3, 426.0], [92.4, 426.0], [92.5, 427.0], [92.6, 427.0], [92.7, 427.0], [92.8, 427.0], [92.9, 427.0], [93.0, 429.0], [93.1, 429.0], [93.2, 429.0], [93.3, 429.0], [93.4, 429.0], [93.5, 429.0], [93.6, 429.0], [93.7, 429.0], [93.8, 429.0], [93.9, 429.0], [94.0, 432.0], [94.1, 432.0], [94.2, 432.0], [94.3, 432.0], [94.4, 432.0], [94.5, 433.0], [94.6, 433.0], [94.7, 433.0], [94.8, 433.0], [94.9, 433.0], [95.0, 433.0], [95.1, 433.0], [95.2, 433.0], [95.3, 433.0], [95.4, 433.0], [95.5, 434.0], [95.6, 434.0], [95.7, 434.0], [95.8, 434.0], [95.9, 434.0], [96.0, 434.0], [96.1, 434.0], [96.2, 434.0], [96.3, 434.0], [96.4, 434.0], [96.5, 434.0], [96.6, 434.0], [96.7, 434.0], [96.8, 434.0], [96.9, 434.0], [97.0, 435.0], [97.1, 435.0], [97.2, 435.0], [97.3, 435.0], [97.4, 435.0], [97.5, 436.0], [97.6, 436.0], [97.7, 436.0], [97.8, 436.0], [97.9, 436.0], [98.0, 437.0], [98.1, 437.0], [98.2, 437.0], [98.3, 437.0], [98.4, 437.0], [98.5, 438.0], [98.6, 438.0], [98.7, 438.0], [98.8, 438.0], [98.9, 438.0], [99.0, 447.0], [99.1, 447.0], [99.2, 447.0], [99.3, 447.0], [99.4, 447.0], [99.5, 453.0], [99.6, 453.0], [99.7, 453.0], [99.8, 453.0], [99.9, 453.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 25.0, "minX": 0.0, "maxY": 48.0, "series": [{"data": [[0.0, 41.0], [300.0, 43.0], [200.0, 43.0], [400.0, 48.0], [100.0, 25.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 77.60500000000005, "minX": 1.57232298E12, "maxY": 77.60500000000005, "series": [{"data": [[1.57232298E12, 77.60500000000005]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232298E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.75, "minX": 1.0, "maxY": 447.0, "series": [{"data": [[2.0, 19.0], [3.0, 17.0], [4.0, 16.0], [5.0, 14.75], [6.0, 17.666666666666664], [7.0, 24.4], [8.0, 27.0], [10.0, 44.0], [11.0, 36.5], [12.0, 53.5], [14.0, 57.333333333333336], [15.0, 63.0], [16.0, 70.0], [17.0, 80.0], [18.0, 86.0], [19.0, 85.0], [20.0, 86.0], [21.0, 89.0], [22.0, 102.5], [24.0, 100.5], [28.0, 107.0], [29.0, 108.5], [30.0, 122.75], [31.0, 167.0], [34.0, 154.25], [37.0, 166.0], [39.0, 192.0], [38.0, 131.0], [43.0, 209.5], [42.0, 179.25], [44.0, 203.33333333333334], [45.0, 234.0], [47.0, 237.25], [46.0, 221.0], [48.0, 238.5], [49.0, 218.5], [76.0, 341.5], [83.0, 405.0], [82.0, 435.0], [85.0, 294.6666666666667], [84.0, 447.0], [95.0, 435.0], [94.0, 436.0], [93.0, 315.5], [99.0, 410.5], [97.0, 404.0], [96.0, 372.0], [102.0, 388.8333333333333], [106.0, 286.3333333333333], [105.0, 323.4], [104.0, 406.25], [111.0, 406.0], [109.0, 406.3333333333333], [108.0, 419.0], [115.0, 406.5], [114.0, 417.0], [119.0, 310.0], [118.0, 305.5], [117.0, 367.0], [116.0, 406.2], [123.0, 397.0], [122.0, 345.0], [121.0, 370.00000000000006], [120.0, 320.5], [125.0, 349.25], [124.0, 368.0], [126.0, 396.0], [143.0, 375.75], [144.0, 336.0], [145.0, 343.12500000000006], [1.0, 330.0]], "isOverall": false, "label": "Access Animation Page", "isController": false}, {"data": [[77.60500000000005, 258.245]], "isOverall": false, "label": "Access Animation Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 145.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 780.0, "minX": 1.57232298E12, "maxY": 26230.0, "series": [{"data": [[1.57232298E12, 26230.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232298E12, 780.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232298E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 258.245, "minX": 1.57232298E12, "maxY": 258.245, "series": [{"data": [[1.57232298E12, 258.245]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232298E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 202.0549999999999, "minX": 1.57232298E12, "maxY": 202.0549999999999, "series": [{"data": [[1.57232298E12, 202.0549999999999]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232298E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 115.855, "minX": 1.57232298E12, "maxY": 115.855, "series": [{"data": [[1.57232298E12, 115.855]], "isOverall": false, "label": "Access Animation Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232298E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.57232298E12, "maxY": 453.0, "series": [{"data": [[1.57232298E12, 453.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232298E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232298E12, 419.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232298E12, 446.9100000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232298E12, 433.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232298E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 107.0, "minX": 89.0, "maxY": 386.0, "series": [{"data": [[89.0, 107.0], [111.0, 386.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 111.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 88.0, "minX": 89.0, "maxY": 311.0, "series": [{"data": [[89.0, 88.0], [111.0, 311.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 111.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232298E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232298E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232298E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232298E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232298E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232298E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232298E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232298E12, 3.3333333333333335]], "isOverall": false, "label": "Access Animation Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232298E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.57232298E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.57232298E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232298E12, "title": "Total Transactions Per Second"}},
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

