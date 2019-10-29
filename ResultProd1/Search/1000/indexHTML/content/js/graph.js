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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 2208.0, "series": [{"data": [[0.0, 34.0], [0.1, 36.0], [0.2, 36.0], [0.3, 36.0], [0.4, 38.0], [0.5, 39.0], [0.6, 39.0], [0.7, 39.0], [0.8, 39.0], [0.9, 40.0], [1.0, 41.0], [1.1, 42.0], [1.2, 42.0], [1.3, 42.0], [1.4, 42.0], [1.5, 43.0], [1.6, 44.0], [1.7, 44.0], [1.8, 45.0], [1.9, 45.0], [2.0, 46.0], [2.1, 46.0], [2.2, 46.0], [2.3, 47.0], [2.4, 47.0], [2.5, 47.0], [2.6, 47.0], [2.7, 47.0], [2.8, 47.0], [2.9, 47.0], [3.0, 47.0], [3.1, 48.0], [3.2, 48.0], [3.3, 48.0], [3.4, 48.0], [3.5, 48.0], [3.6, 48.0], [3.7, 48.0], [3.8, 48.0], [3.9, 48.0], [4.0, 48.0], [4.1, 48.0], [4.2, 49.0], [4.3, 49.0], [4.4, 49.0], [4.5, 50.0], [4.6, 50.0], [4.7, 50.0], [4.8, 50.0], [4.9, 50.0], [5.0, 50.0], [5.1, 50.0], [5.2, 51.0], [5.3, 51.0], [5.4, 51.0], [5.5, 51.0], [5.6, 51.0], [5.7, 51.0], [5.8, 51.0], [5.9, 51.0], [6.0, 52.0], [6.1, 52.0], [6.2, 52.0], [6.3, 52.0], [6.4, 52.0], [6.5, 52.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 52.0], [7.0, 52.0], [7.1, 52.0], [7.2, 52.0], [7.3, 52.0], [7.4, 53.0], [7.5, 53.0], [7.6, 53.0], [7.7, 53.0], [7.8, 53.0], [7.9, 53.0], [8.0, 54.0], [8.1, 54.0], [8.2, 54.0], [8.3, 54.0], [8.4, 54.0], [8.5, 54.0], [8.6, 54.0], [8.7, 54.0], [8.8, 54.0], [8.9, 55.0], [9.0, 55.0], [9.1, 55.0], [9.2, 55.0], [9.3, 55.0], [9.4, 55.0], [9.5, 56.0], [9.6, 56.0], [9.7, 56.0], [9.8, 56.0], [9.9, 56.0], [10.0, 56.0], [10.1, 56.0], [10.2, 56.0], [10.3, 57.0], [10.4, 57.0], [10.5, 57.0], [10.6, 57.0], [10.7, 58.0], [10.8, 58.0], [10.9, 58.0], [11.0, 58.0], [11.1, 58.0], [11.2, 58.0], [11.3, 59.0], [11.4, 59.0], [11.5, 59.0], [11.6, 59.0], [11.7, 59.0], [11.8, 60.0], [11.9, 60.0], [12.0, 60.0], [12.1, 60.0], [12.2, 60.0], [12.3, 61.0], [12.4, 61.0], [12.5, 61.0], [12.6, 61.0], [12.7, 61.0], [12.8, 61.0], [12.9, 61.0], [13.0, 61.0], [13.1, 61.0], [13.2, 61.0], [13.3, 61.0], [13.4, 61.0], [13.5, 62.0], [13.6, 62.0], [13.7, 62.0], [13.8, 62.0], [13.9, 62.0], [14.0, 62.0], [14.1, 62.0], [14.2, 62.0], [14.3, 62.0], [14.4, 62.0], [14.5, 62.0], [14.6, 63.0], [14.7, 63.0], [14.8, 63.0], [14.9, 63.0], [15.0, 63.0], [15.1, 63.0], [15.2, 63.0], [15.3, 64.0], [15.4, 64.0], [15.5, 64.0], [15.6, 64.0], [15.7, 64.0], [15.8, 64.0], [15.9, 64.0], [16.0, 64.0], [16.1, 64.0], [16.2, 64.0], [16.3, 64.0], [16.4, 64.0], [16.5, 64.0], [16.6, 64.0], [16.7, 64.0], [16.8, 64.0], [16.9, 64.0], [17.0, 65.0], [17.1, 65.0], [17.2, 65.0], [17.3, 65.0], [17.4, 65.0], [17.5, 65.0], [17.6, 65.0], [17.7, 65.0], [17.8, 66.0], [17.9, 66.0], [18.0, 66.0], [18.1, 66.0], [18.2, 66.0], [18.3, 66.0], [18.4, 66.0], [18.5, 66.0], [18.6, 67.0], [18.7, 67.0], [18.8, 67.0], [18.9, 67.0], [19.0, 67.0], [19.1, 67.0], [19.2, 67.0], [19.3, 67.0], [19.4, 67.0], [19.5, 67.0], [19.6, 67.0], [19.7, 68.0], [19.8, 68.0], [19.9, 68.0], [20.0, 68.0], [20.1, 68.0], [20.2, 68.0], [20.3, 68.0], [20.4, 68.0], [20.5, 68.0], [20.6, 69.0], [20.7, 69.0], [20.8, 69.0], [20.9, 69.0], [21.0, 69.0], [21.1, 69.0], [21.2, 70.0], [21.3, 70.0], [21.4, 70.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 70.0], [21.9, 70.0], [22.0, 70.0], [22.1, 71.0], [22.2, 71.0], [22.3, 71.0], [22.4, 71.0], [22.5, 71.0], [22.6, 71.0], [22.7, 71.0], [22.8, 72.0], [22.9, 72.0], [23.0, 72.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 72.0], [23.5, 72.0], [23.6, 72.0], [23.7, 73.0], [23.8, 73.0], [23.9, 73.0], [24.0, 73.0], [24.1, 73.0], [24.2, 73.0], [24.3, 73.0], [24.4, 74.0], [24.5, 74.0], [24.6, 74.0], [24.7, 74.0], [24.8, 74.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 75.0], [25.3, 75.0], [25.4, 75.0], [25.5, 75.0], [25.6, 75.0], [25.7, 76.0], [25.8, 76.0], [25.9, 76.0], [26.0, 77.0], [26.1, 77.0], [26.2, 77.0], [26.3, 77.0], [26.4, 78.0], [26.5, 78.0], [26.6, 78.0], [26.7, 78.0], [26.8, 79.0], [26.9, 79.0], [27.0, 79.0], [27.1, 79.0], [27.2, 79.0], [27.3, 80.0], [27.4, 80.0], [27.5, 80.0], [27.6, 80.0], [27.7, 80.0], [27.8, 81.0], [27.9, 81.0], [28.0, 81.0], [28.1, 81.0], [28.2, 81.0], [28.3, 83.0], [28.4, 83.0], [28.5, 83.0], [28.6, 83.0], [28.7, 84.0], [28.8, 84.0], [28.9, 84.0], [29.0, 84.0], [29.1, 85.0], [29.2, 85.0], [29.3, 86.0], [29.4, 86.0], [29.5, 86.0], [29.6, 86.0], [29.7, 86.0], [29.8, 86.0], [29.9, 87.0], [30.0, 87.0], [30.1, 87.0], [30.2, 87.0], [30.3, 88.0], [30.4, 88.0], [30.5, 88.0], [30.6, 88.0], [30.7, 88.0], [30.8, 88.0], [30.9, 88.0], [31.0, 89.0], [31.1, 89.0], [31.2, 89.0], [31.3, 90.0], [31.4, 90.0], [31.5, 90.0], [31.6, 90.0], [31.7, 91.0], [31.8, 91.0], [31.9, 91.0], [32.0, 91.0], [32.1, 91.0], [32.2, 91.0], [32.3, 91.0], [32.4, 91.0], [32.5, 92.0], [32.6, 92.0], [32.7, 92.0], [32.8, 92.0], [32.9, 93.0], [33.0, 93.0], [33.1, 93.0], [33.2, 93.0], [33.3, 93.0], [33.4, 93.0], [33.5, 93.0], [33.6, 93.0], [33.7, 93.0], [33.8, 93.0], [33.9, 93.0], [34.0, 94.0], [34.1, 94.0], [34.2, 94.0], [34.3, 94.0], [34.4, 95.0], [34.5, 95.0], [34.6, 95.0], [34.7, 95.0], [34.8, 96.0], [34.9, 96.0], [35.0, 96.0], [35.1, 96.0], [35.2, 96.0], [35.3, 96.0], [35.4, 96.0], [35.5, 96.0], [35.6, 96.0], [35.7, 97.0], [35.8, 97.0], [35.9, 97.0], [36.0, 97.0], [36.1, 98.0], [36.2, 98.0], [36.3, 98.0], [36.4, 98.0], [36.5, 98.0], [36.6, 98.0], [36.7, 98.0], [36.8, 99.0], [36.9, 99.0], [37.0, 99.0], [37.1, 99.0], [37.2, 99.0], [37.3, 99.0], [37.4, 99.0], [37.5, 100.0], [37.6, 100.0], [37.7, 100.0], [37.8, 100.0], [37.9, 100.0], [38.0, 100.0], [38.1, 100.0], [38.2, 101.0], [38.3, 101.0], [38.4, 102.0], [38.5, 103.0], [38.6, 103.0], [38.7, 103.0], [38.8, 103.0], [38.9, 103.0], [39.0, 103.0], [39.1, 103.0], [39.2, 103.0], [39.3, 104.0], [39.4, 104.0], [39.5, 104.0], [39.6, 104.0], [39.7, 104.0], [39.8, 105.0], [39.9, 105.0], [40.0, 105.0], [40.1, 105.0], [40.2, 106.0], [40.3, 106.0], [40.4, 106.0], [40.5, 106.0], [40.6, 106.0], [40.7, 107.0], [40.8, 107.0], [40.9, 107.0], [41.0, 107.0], [41.1, 107.0], [41.2, 108.0], [41.3, 108.0], [41.4, 108.0], [41.5, 108.0], [41.6, 109.0], [41.7, 109.0], [41.8, 109.0], [41.9, 110.0], [42.0, 110.0], [42.1, 110.0], [42.2, 110.0], [42.3, 111.0], [42.4, 111.0], [42.5, 111.0], [42.6, 112.0], [42.7, 112.0], [42.8, 112.0], [42.9, 112.0], [43.0, 113.0], [43.1, 113.0], [43.2, 113.0], [43.3, 113.0], [43.4, 113.0], [43.5, 114.0], [43.6, 115.0], [43.7, 115.0], [43.8, 115.0], [43.9, 115.0], [44.0, 115.0], [44.1, 116.0], [44.2, 116.0], [44.3, 116.0], [44.4, 116.0], [44.5, 116.0], [44.6, 117.0], [44.7, 118.0], [44.8, 118.0], [44.9, 119.0], [45.0, 119.0], [45.1, 119.0], [45.2, 120.0], [45.3, 120.0], [45.4, 121.0], [45.5, 122.0], [45.6, 122.0], [45.7, 123.0], [45.8, 123.0], [45.9, 124.0], [46.0, 125.0], [46.1, 127.0], [46.2, 127.0], [46.3, 128.0], [46.4, 128.0], [46.5, 128.0], [46.6, 128.0], [46.7, 129.0], [46.8, 129.0], [46.9, 129.0], [47.0, 129.0], [47.1, 129.0], [47.2, 129.0], [47.3, 130.0], [47.4, 131.0], [47.5, 131.0], [47.6, 131.0], [47.7, 132.0], [47.8, 132.0], [47.9, 134.0], [48.0, 134.0], [48.1, 134.0], [48.2, 134.0], [48.3, 134.0], [48.4, 136.0], [48.5, 136.0], [48.6, 136.0], [48.7, 137.0], [48.8, 138.0], [48.9, 138.0], [49.0, 139.0], [49.1, 139.0], [49.2, 140.0], [49.3, 140.0], [49.4, 141.0], [49.5, 141.0], [49.6, 142.0], [49.7, 143.0], [49.8, 143.0], [49.9, 146.0], [50.0, 146.0], [50.1, 147.0], [50.2, 147.0], [50.3, 147.0], [50.4, 149.0], [50.5, 151.0], [50.6, 152.0], [50.7, 153.0], [50.8, 154.0], [50.9, 155.0], [51.0, 155.0], [51.1, 155.0], [51.2, 155.0], [51.3, 159.0], [51.4, 160.0], [51.5, 162.0], [51.6, 166.0], [51.7, 168.0], [51.8, 171.0], [51.9, 174.0], [52.0, 177.0], [52.1, 181.0], [52.2, 181.0], [52.3, 181.0], [52.4, 182.0], [52.5, 185.0], [52.6, 186.0], [52.7, 188.0], [52.8, 189.0], [52.9, 190.0], [53.0, 191.0], [53.1, 192.0], [53.2, 195.0], [53.3, 195.0], [53.4, 195.0], [53.5, 199.0], [53.6, 204.0], [53.7, 204.0], [53.8, 205.0], [53.9, 208.0], [54.0, 212.0], [54.1, 214.0], [54.2, 223.0], [54.3, 226.0], [54.4, 231.0], [54.5, 233.0], [54.6, 250.0], [54.7, 251.0], [54.8, 253.0], [54.9, 257.0], [55.0, 264.0], [55.1, 274.0], [55.2, 275.0], [55.3, 279.0], [55.4, 282.0], [55.5, 283.0], [55.6, 291.0], [55.7, 291.0], [55.8, 294.0], [55.9, 295.0], [56.0, 299.0], [56.1, 300.0], [56.2, 304.0], [56.3, 306.0], [56.4, 306.0], [56.5, 309.0], [56.6, 309.0], [56.7, 317.0], [56.8, 321.0], [56.9, 323.0], [57.0, 326.0], [57.1, 328.0], [57.2, 328.0], [57.3, 330.0], [57.4, 333.0], [57.5, 335.0], [57.6, 335.0], [57.7, 337.0], [57.8, 338.0], [57.9, 341.0], [58.0, 344.0], [58.1, 346.0], [58.2, 347.0], [58.3, 350.0], [58.4, 355.0], [58.5, 362.0], [58.6, 362.0], [58.7, 362.0], [58.8, 362.0], [58.9, 363.0], [59.0, 365.0], [59.1, 367.0], [59.2, 368.0], [59.3, 369.0], [59.4, 372.0], [59.5, 373.0], [59.6, 380.0], [59.7, 380.0], [59.8, 382.0], [59.9, 384.0], [60.0, 386.0], [60.1, 387.0], [60.2, 388.0], [60.3, 388.0], [60.4, 388.0], [60.5, 390.0], [60.6, 391.0], [60.7, 392.0], [60.8, 393.0], [60.9, 395.0], [61.0, 395.0], [61.1, 396.0], [61.2, 397.0], [61.3, 399.0], [61.4, 400.0], [61.5, 401.0], [61.6, 402.0], [61.7, 402.0], [61.8, 404.0], [61.9, 404.0], [62.0, 406.0], [62.1, 407.0], [62.2, 413.0], [62.3, 413.0], [62.4, 413.0], [62.5, 415.0], [62.6, 419.0], [62.7, 419.0], [62.8, 422.0], [62.9, 422.0], [63.0, 425.0], [63.1, 426.0], [63.2, 427.0], [63.3, 429.0], [63.4, 430.0], [63.5, 434.0], [63.6, 435.0], [63.7, 437.0], [63.8, 442.0], [63.9, 446.0], [64.0, 447.0], [64.1, 449.0], [64.2, 451.0], [64.3, 451.0], [64.4, 460.0], [64.5, 465.0], [64.6, 467.0], [64.7, 470.0], [64.8, 478.0], [64.9, 481.0], [65.0, 482.0], [65.1, 487.0], [65.2, 490.0], [65.3, 495.0], [65.4, 501.0], [65.5, 506.0], [65.6, 511.0], [65.7, 513.0], [65.8, 519.0], [65.9, 524.0], [66.0, 528.0], [66.1, 533.0], [66.2, 534.0], [66.3, 536.0], [66.4, 537.0], [66.5, 538.0], [66.6, 539.0], [66.7, 539.0], [66.8, 543.0], [66.9, 543.0], [67.0, 543.0], [67.1, 543.0], [67.2, 544.0], [67.3, 545.0], [67.4, 545.0], [67.5, 546.0], [67.6, 546.0], [67.7, 546.0], [67.8, 546.0], [67.9, 547.0], [68.0, 548.0], [68.1, 548.0], [68.2, 548.0], [68.3, 549.0], [68.4, 549.0], [68.5, 549.0], [68.6, 550.0], [68.7, 550.0], [68.8, 551.0], [68.9, 551.0], [69.0, 552.0], [69.1, 553.0], [69.2, 553.0], [69.3, 554.0], [69.4, 554.0], [69.5, 555.0], [69.6, 555.0], [69.7, 555.0], [69.8, 556.0], [69.9, 556.0], [70.0, 556.0], [70.1, 557.0], [70.2, 557.0], [70.3, 557.0], [70.4, 558.0], [70.5, 560.0], [70.6, 560.0], [70.7, 560.0], [70.8, 561.0], [70.9, 561.0], [71.0, 561.0], [71.1, 562.0], [71.2, 563.0], [71.3, 563.0], [71.4, 563.0], [71.5, 563.0], [71.6, 564.0], [71.7, 564.0], [71.8, 564.0], [71.9, 564.0], [72.0, 565.0], [72.1, 566.0], [72.2, 566.0], [72.3, 566.0], [72.4, 567.0], [72.5, 567.0], [72.6, 567.0], [72.7, 568.0], [72.8, 568.0], [72.9, 568.0], [73.0, 568.0], [73.1, 568.0], [73.2, 568.0], [73.3, 568.0], [73.4, 569.0], [73.5, 569.0], [73.6, 569.0], [73.7, 570.0], [73.8, 570.0], [73.9, 570.0], [74.0, 570.0], [74.1, 570.0], [74.2, 571.0], [74.3, 571.0], [74.4, 571.0], [74.5, 572.0], [74.6, 572.0], [74.7, 573.0], [74.8, 573.0], [74.9, 573.0], [75.0, 573.0], [75.1, 573.0], [75.2, 574.0], [75.3, 574.0], [75.4, 574.0], [75.5, 574.0], [75.6, 574.0], [75.7, 574.0], [75.8, 574.0], [75.9, 574.0], [76.0, 574.0], [76.1, 574.0], [76.2, 574.0], [76.3, 574.0], [76.4, 575.0], [76.5, 575.0], [76.6, 575.0], [76.7, 575.0], [76.8, 575.0], [76.9, 576.0], [77.0, 576.0], [77.1, 576.0], [77.2, 576.0], [77.3, 576.0], [77.4, 577.0], [77.5, 578.0], [77.6, 578.0], [77.7, 579.0], [77.8, 579.0], [77.9, 579.0], [78.0, 579.0], [78.1, 579.0], [78.2, 580.0], [78.3, 580.0], [78.4, 581.0], [78.5, 581.0], [78.6, 581.0], [78.7, 581.0], [78.8, 581.0], [78.9, 582.0], [79.0, 582.0], [79.1, 582.0], [79.2, 582.0], [79.3, 582.0], [79.4, 582.0], [79.5, 582.0], [79.6, 582.0], [79.7, 583.0], [79.8, 583.0], [79.9, 583.0], [80.0, 583.0], [80.1, 584.0], [80.2, 584.0], [80.3, 584.0], [80.4, 584.0], [80.5, 584.0], [80.6, 584.0], [80.7, 584.0], [80.8, 584.0], [80.9, 584.0], [81.0, 585.0], [81.1, 585.0], [81.2, 585.0], [81.3, 585.0], [81.4, 585.0], [81.5, 586.0], [81.6, 587.0], [81.7, 587.0], [81.8, 587.0], [81.9, 588.0], [82.0, 588.0], [82.1, 589.0], [82.2, 589.0], [82.3, 589.0], [82.4, 589.0], [82.5, 589.0], [82.6, 590.0], [82.7, 590.0], [82.8, 591.0], [82.9, 591.0], [83.0, 591.0], [83.1, 591.0], [83.2, 592.0], [83.3, 592.0], [83.4, 593.0], [83.5, 593.0], [83.6, 593.0], [83.7, 594.0], [83.8, 594.0], [83.9, 595.0], [84.0, 595.0], [84.1, 595.0], [84.2, 595.0], [84.3, 595.0], [84.4, 596.0], [84.5, 596.0], [84.6, 596.0], [84.7, 596.0], [84.8, 597.0], [84.9, 597.0], [85.0, 597.0], [85.1, 598.0], [85.2, 598.0], [85.3, 598.0], [85.4, 598.0], [85.5, 598.0], [85.6, 598.0], [85.7, 598.0], [85.8, 600.0], [85.9, 600.0], [86.0, 600.0], [86.1, 601.0], [86.2, 602.0], [86.3, 602.0], [86.4, 602.0], [86.5, 602.0], [86.6, 602.0], [86.7, 603.0], [86.8, 603.0], [86.9, 603.0], [87.0, 603.0], [87.1, 604.0], [87.2, 604.0], [87.3, 605.0], [87.4, 605.0], [87.5, 605.0], [87.6, 605.0], [87.7, 605.0], [87.8, 605.0], [87.9, 606.0], [88.0, 606.0], [88.1, 606.0], [88.2, 606.0], [88.3, 607.0], [88.4, 607.0], [88.5, 607.0], [88.6, 607.0], [88.7, 608.0], [88.8, 608.0], [88.9, 609.0], [89.0, 609.0], [89.1, 610.0], [89.2, 610.0], [89.3, 610.0], [89.4, 611.0], [89.5, 611.0], [89.6, 611.0], [89.7, 612.0], [89.8, 612.0], [89.9, 613.0], [90.0, 613.0], [90.1, 614.0], [90.2, 614.0], [90.3, 614.0], [90.4, 614.0], [90.5, 615.0], [90.6, 615.0], [90.7, 615.0], [90.8, 615.0], [90.9, 616.0], [91.0, 616.0], [91.1, 616.0], [91.2, 616.0], [91.3, 616.0], [91.4, 616.0], [91.5, 617.0], [91.6, 618.0], [91.7, 618.0], [91.8, 618.0], [91.9, 619.0], [92.0, 619.0], [92.1, 620.0], [92.2, 620.0], [92.3, 620.0], [92.4, 620.0], [92.5, 621.0], [92.6, 621.0], [92.7, 621.0], [92.8, 621.0], [92.9, 622.0], [93.0, 622.0], [93.1, 622.0], [93.2, 622.0], [93.3, 623.0], [93.4, 623.0], [93.5, 623.0], [93.6, 623.0], [93.7, 624.0], [93.8, 624.0], [93.9, 624.0], [94.0, 624.0], [94.1, 624.0], [94.2, 625.0], [94.3, 625.0], [94.4, 625.0], [94.5, 625.0], [94.6, 626.0], [94.7, 626.0], [94.8, 626.0], [94.9, 628.0], [95.0, 628.0], [95.1, 628.0], [95.2, 628.0], [95.3, 629.0], [95.4, 629.0], [95.5, 630.0], [95.6, 630.0], [95.7, 631.0], [95.8, 631.0], [95.9, 631.0], [96.0, 631.0], [96.1, 631.0], [96.2, 632.0], [96.3, 632.0], [96.4, 632.0], [96.5, 633.0], [96.6, 633.0], [96.7, 633.0], [96.8, 633.0], [96.9, 633.0], [97.0, 633.0], [97.1, 633.0], [97.2, 634.0], [97.3, 634.0], [97.4, 634.0], [97.5, 635.0], [97.6, 636.0], [97.7, 636.0], [97.8, 638.0], [97.9, 639.0], [98.0, 639.0], [98.1, 640.0], [98.2, 651.0], [98.3, 678.0], [98.4, 1181.0], [98.5, 1186.0], [98.6, 1188.0], [98.7, 1190.0], [98.8, 1190.0], [98.9, 1191.0], [99.0, 1194.0], [99.1, 1195.0], [99.2, 1198.0], [99.3, 1199.0], [99.4, 1202.0], [99.5, 1202.0], [99.6, 1202.0], [99.7, 1597.0], [99.8, 1623.0], [99.9, 2208.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 375.0, "series": [{"data": [[0.0, 375.0], [1100.0, 10.0], [2200.0, 1.0], [300.0, 53.0], [600.0, 126.0], [1200.0, 4.0], [1500.0, 1.0], [200.0, 25.0], [100.0, 160.0], [400.0, 40.0], [1600.0, 1.0], [500.0, 204.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 653.0, "series": [{"data": [[0.0, 653.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 344.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 272.6929999999997, "minX": 1.57232394E12, "maxY": 272.6929999999997, "series": [{"data": [[1.57232394E12, 272.6929999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232394E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.0, "maxY": 2208.0, "series": [{"data": [[3.0, 1200.0], [4.0, 1202.0], [9.0, 1198.4], [11.0, 1190.0], [14.0, 1188.3333333333333], [15.0, 1181.0], [16.0, 73.0], [17.0, 75.0], [23.0, 65.5], [24.0, 68.0], [35.0, 62.0], [39.0, 55.166666666666664], [38.0, 64.0], [41.0, 73.0], [43.0, 238.44444444444446], [42.0, 309.66666666666663], [45.0, 66.0], [44.0, 56.5], [46.0, 68.16666666666667], [47.0, 66.25], [49.0, 70.5], [48.0, 54.25], [51.0, 61.46666666666667], [50.0, 60.111111111111114], [53.0, 54.0], [52.0, 63.0], [55.0, 62.5], [54.0, 51.22222222222222], [57.0, 91.0], [56.0, 58.0], [59.0, 124.2], [60.0, 86.0], [63.0, 70.69999999999999], [62.0, 86.0], [67.0, 76.79166666666666], [64.0, 78.44444444444446], [66.0, 72.71428571428571], [65.0, 71.0], [71.0, 80.15384615384615], [68.0, 92.2], [70.0, 61.4], [69.0, 65.11111111111113], [73.0, 61.75], [74.0, 70.0], [75.0, 78.375], [72.0, 82.3], [77.0, 82.99999999999999], [76.0, 77.45833333333333], [79.0, 102.5], [83.0, 116.0], [82.0, 120.96], [81.0, 106.66666666666667], [87.0, 82.2], [86.0, 91.5], [84.0, 128.0], [85.0, 78.0], [91.0, 84.0], [90.0, 91.6], [88.0, 64.0], [89.0, 89.66666666666667], [95.0, 84.0], [94.0, 97.33333333333333], [92.0, 118.85714285714286], [96.0, 96.75], [103.0, 171.25], [102.0, 147.0], [101.0, 170.0], [100.0, 102.0], [106.0, 155.75], [111.0, 166.5], [110.0, 141.0], [108.0, 155.33333333333334], [113.0, 163.5], [112.0, 155.0], [119.0, 128.25], [117.0, 136.6], [123.0, 143.0], [122.0, 140.0], [126.0, 111.5], [125.0, 129.0], [135.0, 107.14285714285714], [134.0, 116.0], [133.0, 118.66666666666667], [132.0, 109.0], [128.0, 114.5], [139.0, 113.75], [136.0, 103.0], [173.0, 67.0], [439.0, 47.0], [437.0, 356.0], [432.0, 48.0], [459.0, 451.2], [456.0, 552.8124999999997], [458.0, 516.6666666666666], [461.0, 610.0], [462.0, 388.5], [463.0, 554.0], [478.0, 579.0], [479.0, 377.0], [477.0, 558.0], [467.0, 507.44029850746307], [475.0, 534.3333333333334], [473.0, 399.0], [472.0, 381.6666666666667], [469.0, 556.0], [468.0, 362.1607142857142], [464.0, 596.0], [465.0, 558.2285714285715], [466.0, 521.1525423728813], [493.0, 459.0], [489.0, 390.3333333333333], [488.0, 339.0], [487.0, 437.5], [484.0, 282.5], [483.0, 249.25], [481.0, 180.0], [480.0, 204.0], [502.0, 190.75], [504.0, 126.1875], [505.0, 306.66666666666663], [506.0, 190.0], [503.0, 379.5], [500.0, 544.0], [499.0, 542.6666666666666], [496.0, 551.0], [1.0, 2208.0]], "isOverall": false, "label": "Search Video", "isController": false}, {"data": [[272.6899999999997, 305.6330000000001]], "isOverall": false, "label": "Search Video-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 506.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5183.333333333333, "minX": 1.57232394E12, "maxY": 18348.116666666665, "series": [{"data": [[1.57232394E12, 18348.116666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232394E12, 5183.333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232394E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 305.6330000000001, "minX": 1.57232394E12, "maxY": 305.6330000000001, "series": [{"data": [[1.57232394E12, 305.6330000000001]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232394E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 305.5939999999995, "minX": 1.57232394E12, "maxY": 305.5939999999995, "series": [{"data": [[1.57232394E12, 305.5939999999995]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232394E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 147.8920000000001, "minX": 1.57232394E12, "maxY": 147.8920000000001, "series": [{"data": [[1.57232394E12, 147.8920000000001]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232394E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.57232394E12, "maxY": 2208.0, "series": [{"data": [[1.57232394E12, 2208.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232394E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232394E12, 613.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232394E12, 1194.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232394E12, 628.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232394E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 76.5, "minX": 1.0, "maxY": 2208.0, "series": [{"data": [[1.0, 2208.0], [14.0, 1194.5], [476.0, 76.5], [509.0, 568.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 509.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 76.5, "minX": 1.0, "maxY": 2208.0, "series": [{"data": [[1.0, 2208.0], [14.0, 1194.5], [476.0, 76.5], [509.0, 568.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 509.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232394E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232394E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232394E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232394E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232394E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232394E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232394E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232394E12, 16.666666666666668]], "isOverall": false, "label": "Search Video-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232394E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57232394E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57232394E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232394E12, "title": "Total Transactions Per Second"}},
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

