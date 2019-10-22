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
        data: {"result": {"minY": 100.0, "minX": 0.0, "maxY": 3028.0, "series": [{"data": [[0.0, 100.0], [0.1, 100.0], [0.2, 100.0], [0.3, 100.0], [0.4, 114.0], [0.5, 114.0], [0.6, 114.0], [0.7, 119.0], [0.8, 119.0], [0.9, 119.0], [1.0, 125.0], [1.1, 125.0], [1.2, 125.0], [1.3, 125.0], [1.4, 126.0], [1.5, 126.0], [1.6, 126.0], [1.7, 127.0], [1.8, 127.0], [1.9, 127.0], [2.0, 129.0], [2.1, 129.0], [2.2, 129.0], [2.3, 129.0], [2.4, 131.0], [2.5, 131.0], [2.6, 131.0], [2.7, 149.0], [2.8, 149.0], [2.9, 149.0], [3.0, 151.0], [3.1, 151.0], [3.2, 151.0], [3.3, 151.0], [3.4, 154.0], [3.5, 154.0], [3.6, 154.0], [3.7, 160.0], [3.8, 160.0], [3.9, 160.0], [4.0, 162.0], [4.1, 162.0], [4.2, 162.0], [4.3, 162.0], [4.4, 162.0], [4.5, 162.0], [4.6, 162.0], [4.7, 163.0], [4.8, 163.0], [4.9, 163.0], [5.0, 175.0], [5.1, 175.0], [5.2, 175.0], [5.3, 175.0], [5.4, 176.0], [5.5, 176.0], [5.6, 176.0], [5.7, 180.0], [5.8, 180.0], [5.9, 180.0], [6.0, 184.0], [6.1, 184.0], [6.2, 184.0], [6.3, 184.0], [6.4, 185.0], [6.5, 185.0], [6.6, 185.0], [6.7, 187.0], [6.8, 187.0], [6.9, 187.0], [7.0, 187.0], [7.1, 187.0], [7.2, 187.0], [7.3, 187.0], [7.4, 188.0], [7.5, 188.0], [7.6, 188.0], [7.7, 190.0], [7.8, 190.0], [7.9, 190.0], [8.0, 191.0], [8.1, 191.0], [8.2, 191.0], [8.3, 191.0], [8.4, 193.0], [8.5, 193.0], [8.6, 193.0], [8.7, 195.0], [8.8, 195.0], [8.9, 195.0], [9.0, 196.0], [9.1, 196.0], [9.2, 196.0], [9.3, 196.0], [9.4, 199.0], [9.5, 199.0], [9.6, 199.0], [9.7, 201.0], [9.8, 201.0], [9.9, 201.0], [10.0, 201.0], [10.1, 201.0], [10.2, 201.0], [10.3, 201.0], [10.4, 202.0], [10.5, 202.0], [10.6, 202.0], [10.7, 202.0], [10.8, 202.0], [10.9, 202.0], [11.0, 202.0], [11.1, 202.0], [11.2, 202.0], [11.3, 202.0], [11.4, 205.0], [11.5, 205.0], [11.6, 205.0], [11.7, 205.0], [11.8, 205.0], [11.9, 205.0], [12.0, 205.0], [12.1, 205.0], [12.2, 205.0], [12.3, 205.0], [12.4, 206.0], [12.5, 206.0], [12.6, 206.0], [12.7, 207.0], [12.8, 207.0], [12.9, 207.0], [13.0, 207.0], [13.1, 207.0], [13.2, 207.0], [13.3, 207.0], [13.4, 209.0], [13.5, 209.0], [13.6, 209.0], [13.7, 209.0], [13.8, 209.0], [13.9, 209.0], [14.0, 210.0], [14.1, 210.0], [14.2, 210.0], [14.3, 210.0], [14.4, 212.0], [14.5, 212.0], [14.6, 212.0], [14.7, 215.0], [14.8, 215.0], [14.9, 215.0], [15.0, 215.0], [15.1, 217.0], [15.2, 217.0], [15.3, 217.0], [15.4, 220.0], [15.5, 220.0], [15.6, 220.0], [15.7, 220.0], [15.8, 220.0], [15.9, 220.0], [16.0, 220.0], [16.1, 220.0], [16.2, 220.0], [16.3, 220.0], [16.4, 222.0], [16.5, 222.0], [16.6, 222.0], [16.7, 222.0], [16.8, 222.0], [16.9, 222.0], [17.0, 222.0], [17.1, 223.0], [17.2, 223.0], [17.3, 223.0], [17.4, 223.0], [17.5, 223.0], [17.6, 223.0], [17.7, 223.0], [17.8, 223.0], [17.9, 223.0], [18.0, 223.0], [18.1, 223.0], [18.2, 223.0], [18.3, 223.0], [18.4, 223.0], [18.5, 223.0], [18.6, 223.0], [18.7, 224.0], [18.8, 224.0], [18.9, 224.0], [19.0, 224.0], [19.1, 225.0], [19.2, 225.0], [19.3, 225.0], [19.4, 225.0], [19.5, 225.0], [19.6, 225.0], [19.7, 226.0], [19.8, 226.0], [19.9, 226.0], [20.0, 226.0], [20.1, 226.0], [20.2, 226.0], [20.3, 226.0], [20.4, 227.0], [20.5, 227.0], [20.6, 227.0], [20.7, 228.0], [20.8, 228.0], [20.9, 228.0], [21.0, 228.0], [21.1, 228.0], [21.2, 228.0], [21.3, 228.0], [21.4, 229.0], [21.5, 229.0], [21.6, 229.0], [21.7, 229.0], [21.8, 229.0], [21.9, 229.0], [22.0, 229.0], [22.1, 229.0], [22.2, 229.0], [22.3, 229.0], [22.4, 229.0], [22.5, 229.0], [22.6, 229.0], [22.7, 229.0], [22.8, 229.0], [22.9, 229.0], [23.0, 229.0], [23.1, 229.0], [23.2, 229.0], [23.3, 229.0], [23.4, 230.0], [23.5, 230.0], [23.6, 230.0], [23.7, 230.0], [23.8, 230.0], [23.9, 230.0], [24.0, 230.0], [24.1, 230.0], [24.2, 230.0], [24.3, 230.0], [24.4, 230.0], [24.5, 230.0], [24.6, 230.0], [24.7, 230.0], [24.8, 230.0], [24.9, 230.0], [25.0, 230.0], [25.1, 231.0], [25.2, 231.0], [25.3, 231.0], [25.4, 232.0], [25.5, 232.0], [25.6, 232.0], [25.7, 233.0], [25.8, 233.0], [25.9, 233.0], [26.0, 233.0], [26.1, 233.0], [26.2, 233.0], [26.3, 233.0], [26.4, 233.0], [26.5, 233.0], [26.6, 233.0], [26.7, 235.0], [26.8, 235.0], [26.9, 235.0], [27.0, 235.0], [27.1, 235.0], [27.2, 235.0], [27.3, 235.0], [27.4, 236.0], [27.5, 236.0], [27.6, 236.0], [27.7, 238.0], [27.8, 238.0], [27.9, 238.0], [28.0, 238.0], [28.1, 238.0], [28.2, 238.0], [28.3, 238.0], [28.4, 239.0], [28.5, 239.0], [28.6, 239.0], [28.7, 239.0], [28.8, 239.0], [28.9, 239.0], [29.0, 239.0], [29.1, 239.0], [29.2, 239.0], [29.3, 239.0], [29.4, 241.0], [29.5, 241.0], [29.6, 241.0], [29.7, 242.0], [29.8, 242.0], [29.9, 242.0], [30.0, 242.0], [30.1, 243.0], [30.2, 243.0], [30.3, 243.0], [30.4, 244.0], [30.5, 244.0], [30.6, 244.0], [30.7, 244.0], [30.8, 244.0], [30.9, 244.0], [31.0, 244.0], [31.1, 244.0], [31.2, 244.0], [31.3, 244.0], [31.4, 244.0], [31.5, 244.0], [31.6, 244.0], [31.7, 245.0], [31.8, 245.0], [31.9, 245.0], [32.0, 245.0], [32.1, 245.0], [32.2, 245.0], [32.3, 245.0], [32.4, 247.0], [32.5, 247.0], [32.6, 247.0], [32.7, 248.0], [32.8, 248.0], [32.9, 248.0], [33.0, 248.0], [33.1, 248.0], [33.2, 248.0], [33.3, 248.0], [33.4, 250.0], [33.5, 250.0], [33.6, 250.0], [33.7, 252.0], [33.8, 252.0], [33.9, 252.0], [34.0, 252.0], [34.1, 253.0], [34.2, 253.0], [34.3, 253.0], [34.4, 254.0], [34.5, 254.0], [34.6, 254.0], [34.7, 254.0], [34.8, 254.0], [34.9, 254.0], [35.0, 254.0], [35.1, 255.0], [35.2, 255.0], [35.3, 255.0], [35.4, 256.0], [35.5, 256.0], [35.6, 256.0], [35.7, 257.0], [35.8, 257.0], [35.9, 257.0], [36.0, 257.0], [36.1, 258.0], [36.2, 258.0], [36.3, 258.0], [36.4, 261.0], [36.5, 261.0], [36.6, 261.0], [36.7, 261.0], [36.8, 261.0], [36.9, 261.0], [37.0, 261.0], [37.1, 264.0], [37.2, 264.0], [37.3, 264.0], [37.4, 264.0], [37.5, 264.0], [37.6, 264.0], [37.7, 265.0], [37.8, 265.0], [37.9, 265.0], [38.0, 265.0], [38.1, 266.0], [38.2, 266.0], [38.3, 266.0], [38.4, 267.0], [38.5, 267.0], [38.6, 267.0], [38.7, 269.0], [38.8, 269.0], [38.9, 269.0], [39.0, 269.0], [39.1, 269.0], [39.2, 269.0], [39.3, 269.0], [39.4, 270.0], [39.5, 270.0], [39.6, 270.0], [39.7, 270.0], [39.8, 270.0], [39.9, 270.0], [40.0, 270.0], [40.1, 271.0], [40.2, 271.0], [40.3, 271.0], [40.4, 271.0], [40.5, 271.0], [40.6, 271.0], [40.7, 272.0], [40.8, 272.0], [40.9, 272.0], [41.0, 272.0], [41.1, 272.0], [41.2, 272.0], [41.3, 272.0], [41.4, 272.0], [41.5, 272.0], [41.6, 272.0], [41.7, 272.0], [41.8, 272.0], [41.9, 272.0], [42.0, 272.0], [42.1, 273.0], [42.2, 273.0], [42.3, 273.0], [42.4, 273.0], [42.5, 273.0], [42.6, 273.0], [42.7, 274.0], [42.8, 274.0], [42.9, 274.0], [43.0, 274.0], [43.1, 274.0], [43.2, 274.0], [43.3, 274.0], [43.4, 277.0], [43.5, 277.0], [43.6, 277.0], [43.7, 280.0], [43.8, 280.0], [43.9, 280.0], [44.0, 280.0], [44.1, 281.0], [44.2, 281.0], [44.3, 281.0], [44.4, 284.0], [44.5, 284.0], [44.6, 284.0], [44.7, 294.0], [44.8, 294.0], [44.9, 294.0], [45.0, 294.0], [45.1, 294.0], [45.2, 294.0], [45.3, 294.0], [45.4, 318.0], [45.5, 318.0], [45.6, 318.0], [45.7, 320.0], [45.8, 320.0], [45.9, 320.0], [46.0, 320.0], [46.1, 326.0], [46.2, 326.0], [46.3, 326.0], [46.4, 326.0], [46.5, 326.0], [46.6, 326.0], [46.7, 328.0], [46.8, 328.0], [46.9, 328.0], [47.0, 328.0], [47.1, 329.0], [47.2, 329.0], [47.3, 329.0], [47.4, 330.0], [47.5, 330.0], [47.6, 330.0], [47.7, 330.0], [47.8, 330.0], [47.9, 330.0], [48.0, 330.0], [48.1, 345.0], [48.2, 345.0], [48.3, 345.0], [48.4, 352.0], [48.5, 352.0], [48.6, 352.0], [48.7, 355.0], [48.8, 355.0], [48.9, 355.0], [49.0, 355.0], [49.1, 357.0], [49.2, 357.0], [49.3, 357.0], [49.4, 357.0], [49.5, 357.0], [49.6, 357.0], [49.7, 358.0], [49.8, 358.0], [49.9, 358.0], [50.0, 358.0], [50.1, 358.0], [50.2, 358.0], [50.3, 358.0], [50.4, 361.0], [50.5, 361.0], [50.6, 361.0], [50.7, 362.0], [50.8, 362.0], [50.9, 362.0], [51.0, 362.0], [51.1, 364.0], [51.2, 364.0], [51.3, 364.0], [51.4, 375.0], [51.5, 375.0], [51.6, 375.0], [51.7, 375.0], [51.8, 375.0], [51.9, 375.0], [52.0, 375.0], [52.1, 379.0], [52.2, 379.0], [52.3, 379.0], [52.4, 380.0], [52.5, 380.0], [52.6, 380.0], [52.7, 389.0], [52.8, 389.0], [52.9, 389.0], [53.0, 389.0], [53.1, 391.0], [53.2, 391.0], [53.3, 391.0], [53.4, 391.0], [53.5, 391.0], [53.6, 391.0], [53.7, 392.0], [53.8, 392.0], [53.9, 392.0], [54.0, 392.0], [54.1, 394.0], [54.2, 394.0], [54.3, 394.0], [54.4, 395.0], [54.5, 395.0], [54.6, 395.0], [54.7, 395.0], [54.8, 395.0], [54.9, 395.0], [55.0, 395.0], [55.1, 396.0], [55.2, 396.0], [55.3, 396.0], [55.4, 396.0], [55.5, 396.0], [55.6, 396.0], [55.7, 396.0], [55.8, 396.0], [55.9, 396.0], [56.0, 396.0], [56.1, 398.0], [56.2, 398.0], [56.3, 398.0], [56.4, 399.0], [56.5, 399.0], [56.6, 399.0], [56.7, 400.0], [56.8, 400.0], [56.9, 400.0], [57.0, 400.0], [57.1, 403.0], [57.2, 403.0], [57.3, 403.0], [57.4, 403.0], [57.5, 403.0], [57.6, 403.0], [57.7, 411.0], [57.8, 411.0], [57.9, 411.0], [58.0, 411.0], [58.1, 412.0], [58.2, 412.0], [58.3, 412.0], [58.4, 425.0], [58.5, 425.0], [58.6, 425.0], [58.7, 426.0], [58.8, 426.0], [58.9, 426.0], [59.0, 426.0], [59.1, 433.0], [59.2, 433.0], [59.3, 433.0], [59.4, 438.0], [59.5, 438.0], [59.6, 438.0], [59.7, 439.0], [59.8, 439.0], [59.9, 439.0], [60.0, 439.0], [60.1, 441.0], [60.2, 441.0], [60.3, 441.0], [60.4, 443.0], [60.5, 443.0], [60.6, 443.0], [60.7, 462.0], [60.8, 462.0], [60.9, 462.0], [61.0, 462.0], [61.1, 487.0], [61.2, 487.0], [61.3, 487.0], [61.4, 488.0], [61.5, 488.0], [61.6, 488.0], [61.7, 495.0], [61.8, 495.0], [61.9, 495.0], [62.0, 495.0], [62.1, 496.0], [62.2, 496.0], [62.3, 496.0], [62.4, 519.0], [62.5, 519.0], [62.6, 519.0], [62.7, 523.0], [62.8, 523.0], [62.9, 523.0], [63.0, 523.0], [63.1, 527.0], [63.2, 527.0], [63.3, 527.0], [63.4, 537.0], [63.5, 537.0], [63.6, 537.0], [63.7, 538.0], [63.8, 538.0], [63.9, 538.0], [64.0, 538.0], [64.1, 544.0], [64.2, 544.0], [64.3, 544.0], [64.4, 559.0], [64.5, 559.0], [64.6, 559.0], [64.7, 568.0], [64.8, 568.0], [64.9, 568.0], [65.0, 568.0], [65.1, 587.0], [65.2, 587.0], [65.3, 587.0], [65.4, 590.0], [65.5, 590.0], [65.6, 590.0], [65.7, 624.0], [65.8, 624.0], [65.9, 624.0], [66.0, 624.0], [66.1, 624.0], [66.2, 624.0], [66.3, 624.0], [66.4, 644.0], [66.5, 644.0], [66.6, 644.0], [66.7, 647.0], [66.8, 647.0], [66.9, 647.0], [67.0, 647.0], [67.1, 649.0], [67.2, 649.0], [67.3, 649.0], [67.4, 651.0], [67.5, 651.0], [67.6, 651.0], [67.7, 656.0], [67.8, 656.0], [67.9, 656.0], [68.0, 656.0], [68.1, 657.0], [68.2, 657.0], [68.3, 657.0], [68.4, 657.0], [68.5, 657.0], [68.6, 657.0], [68.7, 661.0], [68.8, 661.0], [68.9, 661.0], [69.0, 661.0], [69.1, 1108.0], [69.2, 1108.0], [69.3, 1108.0], [69.4, 1157.0], [69.5, 1157.0], [69.6, 1157.0], [69.7, 1226.0], [69.8, 1226.0], [69.9, 1226.0], [70.0, 1226.0], [70.1, 1226.0], [70.2, 1226.0], [70.3, 1226.0], [70.4, 1228.0], [70.5, 1228.0], [70.6, 1228.0], [70.7, 1228.0], [70.8, 1228.0], [70.9, 1228.0], [71.0, 1228.0], [71.1, 1234.0], [71.2, 1234.0], [71.3, 1234.0], [71.4, 1235.0], [71.5, 1235.0], [71.6, 1235.0], [71.7, 1235.0], [71.8, 1235.0], [71.9, 1235.0], [72.0, 1235.0], [72.1, 1235.0], [72.2, 1235.0], [72.3, 1235.0], [72.4, 1236.0], [72.5, 1236.0], [72.6, 1236.0], [72.7, 1252.0], [72.8, 1252.0], [72.9, 1252.0], [73.0, 1252.0], [73.1, 1254.0], [73.2, 1254.0], [73.3, 1254.0], [73.4, 1256.0], [73.5, 1256.0], [73.6, 1256.0], [73.7, 1265.0], [73.8, 1265.0], [73.9, 1265.0], [74.0, 1265.0], [74.1, 1267.0], [74.2, 1267.0], [74.3, 1267.0], [74.4, 1273.0], [74.5, 1273.0], [74.6, 1273.0], [74.7, 1279.0], [74.8, 1279.0], [74.9, 1279.0], [75.0, 1286.0], [75.1, 1286.0], [75.2, 1286.0], [75.3, 1286.0], [75.4, 1286.0], [75.5, 1286.0], [75.6, 1286.0], [75.7, 1297.0], [75.8, 1297.0], [75.9, 1297.0], [76.0, 1299.0], [76.1, 1299.0], [76.2, 1299.0], [76.3, 1299.0], [76.4, 1307.0], [76.5, 1307.0], [76.6, 1307.0], [76.7, 1310.0], [76.8, 1310.0], [76.9, 1310.0], [77.0, 1317.0], [77.1, 1317.0], [77.2, 1317.0], [77.3, 1317.0], [77.4, 1321.0], [77.5, 1321.0], [77.6, 1321.0], [77.7, 1328.0], [77.8, 1328.0], [77.9, 1328.0], [78.0, 1331.0], [78.1, 1331.0], [78.2, 1331.0], [78.3, 1331.0], [78.4, 1331.0], [78.5, 1331.0], [78.6, 1331.0], [78.7, 1336.0], [78.8, 1336.0], [78.9, 1336.0], [79.0, 1338.0], [79.1, 1338.0], [79.2, 1338.0], [79.3, 1338.0], [79.4, 1345.0], [79.5, 1345.0], [79.6, 1345.0], [79.7, 1347.0], [79.8, 1347.0], [79.9, 1347.0], [80.0, 1351.0], [80.1, 1351.0], [80.2, 1351.0], [80.3, 1351.0], [80.4, 1351.0], [80.5, 1351.0], [80.6, 1351.0], [80.7, 1352.0], [80.8, 1352.0], [80.9, 1352.0], [81.0, 1356.0], [81.1, 1356.0], [81.2, 1356.0], [81.3, 1356.0], [81.4, 1360.0], [81.5, 1360.0], [81.6, 1360.0], [81.7, 1364.0], [81.8, 1364.0], [81.9, 1364.0], [82.0, 1364.0], [82.1, 1364.0], [82.2, 1364.0], [82.3, 1364.0], [82.4, 1365.0], [82.5, 1365.0], [82.6, 1365.0], [82.7, 1366.0], [82.8, 1366.0], [82.9, 1366.0], [83.0, 1367.0], [83.1, 1367.0], [83.2, 1367.0], [83.3, 1367.0], [83.4, 1368.0], [83.5, 1368.0], [83.6, 1368.0], [83.7, 1369.0], [83.8, 1369.0], [83.9, 1369.0], [84.0, 1371.0], [84.1, 1371.0], [84.2, 1371.0], [84.3, 1371.0], [84.4, 1374.0], [84.5, 1374.0], [84.6, 1374.0], [84.7, 1374.0], [84.8, 1374.0], [84.9, 1374.0], [85.0, 1377.0], [85.1, 1377.0], [85.2, 1377.0], [85.3, 1377.0], [85.4, 1378.0], [85.5, 1378.0], [85.6, 1378.0], [85.7, 1378.0], [85.8, 1378.0], [85.9, 1378.0], [86.0, 1378.0], [86.1, 1378.0], [86.2, 1378.0], [86.3, 1378.0], [86.4, 1378.0], [86.5, 1378.0], [86.6, 1378.0], [86.7, 1382.0], [86.8, 1382.0], [86.9, 1382.0], [87.0, 1384.0], [87.1, 1384.0], [87.2, 1384.0], [87.3, 1384.0], [87.4, 1385.0], [87.5, 1385.0], [87.6, 1385.0], [87.7, 1387.0], [87.8, 1387.0], [87.9, 1387.0], [88.0, 1390.0], [88.1, 1390.0], [88.2, 1390.0], [88.3, 1390.0], [88.4, 1392.0], [88.5, 1392.0], [88.6, 1392.0], [88.7, 1394.0], [88.8, 1394.0], [88.9, 1394.0], [89.0, 1394.0], [89.1, 1394.0], [89.2, 1394.0], [89.3, 1394.0], [89.4, 1394.0], [89.5, 1394.0], [89.6, 1394.0], [89.7, 1396.0], [89.8, 1396.0], [89.9, 1396.0], [90.0, 1397.0], [90.1, 1397.0], [90.2, 1397.0], [90.3, 1397.0], [90.4, 1397.0], [90.5, 1397.0], [90.6, 1397.0], [90.7, 1397.0], [90.8, 1397.0], [90.9, 1397.0], [91.0, 1399.0], [91.1, 1399.0], [91.2, 1399.0], [91.3, 1399.0], [91.4, 1400.0], [91.5, 1400.0], [91.6, 1400.0], [91.7, 1407.0], [91.8, 1407.0], [91.9, 1407.0], [92.0, 1426.0], [92.1, 1426.0], [92.2, 1426.0], [92.3, 1426.0], [92.4, 1429.0], [92.5, 1429.0], [92.6, 1429.0], [92.7, 1429.0], [92.8, 1429.0], [92.9, 1429.0], [93.0, 1430.0], [93.1, 1430.0], [93.2, 1430.0], [93.3, 1430.0], [93.4, 1441.0], [93.5, 1441.0], [93.6, 1441.0], [93.7, 1457.0], [93.8, 1457.0], [93.9, 1457.0], [94.0, 1477.0], [94.1, 1477.0], [94.2, 1477.0], [94.3, 1477.0], [94.4, 1493.0], [94.5, 1493.0], [94.6, 1493.0], [94.7, 1499.0], [94.8, 1499.0], [94.9, 1499.0], [95.0, 1507.0], [95.1, 1507.0], [95.2, 1507.0], [95.3, 1507.0], [95.4, 1524.0], [95.5, 1524.0], [95.6, 1524.0], [95.7, 1544.0], [95.8, 1544.0], [95.9, 1544.0], [96.0, 3012.0], [96.1, 3012.0], [96.2, 3012.0], [96.3, 3012.0], [96.4, 3013.0], [96.5, 3013.0], [96.6, 3013.0], [96.7, 3015.0], [96.8, 3015.0], [96.9, 3015.0], [97.0, 3016.0], [97.1, 3016.0], [97.2, 3016.0], [97.3, 3016.0], [97.4, 3016.0], [97.5, 3016.0], [97.6, 3016.0], [97.7, 3016.0], [97.8, 3016.0], [97.9, 3016.0], [98.0, 3017.0], [98.1, 3017.0], [98.2, 3017.0], [98.3, 3017.0], [98.4, 3017.0], [98.5, 3017.0], [98.6, 3017.0], [98.7, 3019.0], [98.8, 3019.0], [98.9, 3019.0], [99.0, 3023.0], [99.1, 3023.0], [99.2, 3023.0], [99.3, 3023.0], [99.4, 3027.0], [99.5, 3027.0], [99.6, 3027.0], [99.7, 3028.0], [99.8, 3028.0], [99.9, 3028.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 107.0, "series": [{"data": [[1100.0, 2.0], [300.0, 34.0], [600.0, 10.0], [1200.0, 20.0], [1300.0, 45.0], [1400.0, 11.0], [1500.0, 3.0], [3000.0, 12.0], [200.0, 107.0], [100.0, 29.0], [400.0, 17.0], [500.0, 10.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 187.0, "series": [{"data": [[0.0, 187.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 98.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 139.39333333333332, "minX": 1.57173582E12, "maxY": 139.39333333333332, "series": [{"data": [[1.57173582E12, 139.39333333333332]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173582E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 163.0, "minX": 1.0, "maxY": 3028.0, "series": [{"data": [[2.0, 3023.0], [3.0, 3015.0], [4.0, 3013.0], [5.0, 3017.0], [6.0, 3027.0], [7.0, 3012.0], [8.0, 3019.0], [10.0, 3016.5], [11.0, 3028.0], [12.0, 3016.0], [13.0, 1286.0], [14.0, 1544.0], [15.0, 1477.0], [16.0, 1524.0], [17.0, 1507.0], [18.0, 1499.0], [19.0, 1265.0], [20.0, 1493.0], [21.0, 1273.0], [22.0, 1457.0], [23.0, 1299.0], [24.0, 1441.0], [25.0, 1426.0], [29.0, 1412.0], [31.0, 1337.0], [32.0, 1279.0], [45.0, 1252.0], [47.0, 1364.0], [48.0, 1361.0], [51.0, 1378.0], [50.0, 1387.0], [52.0, 1327.0], [55.0, 1397.0], [54.0, 1399.0], [57.0, 1338.6666666666667], [58.0, 1392.0], [61.0, 1227.0], [60.0, 1327.3333333333333], [63.0, 1382.142857142857], [62.0, 1355.5], [67.0, 1377.0], [66.0, 1367.3333333333333], [68.0, 1368.0], [75.0, 1365.0], [74.0, 1361.0], [79.0, 1366.0], [78.0, 1323.8333333333333], [77.0, 1351.0], [83.0, 1331.0], [81.0, 1336.0], [80.0, 1352.0], [87.0, 1291.5], [85.0, 1157.0], [84.0, 1307.0], [91.0, 1231.5], [89.0, 1235.0], [88.0, 1256.0], [94.0, 624.0], [93.0, 1108.0], [92.0, 1235.0], [99.0, 364.5], [101.0, 655.0], [107.0, 624.0], [105.0, 163.0], [111.0, 338.0], [108.0, 477.6], [115.0, 356.5], [113.0, 252.5], [119.0, 227.75], [123.0, 195.0], [122.0, 184.0], [121.0, 188.0], [126.0, 193.0], [125.0, 192.0], [135.0, 207.0], [133.0, 203.0], [131.0, 205.0], [130.0, 199.0], [129.0, 265.0], [142.0, 223.0], [141.0, 214.5], [139.0, 213.0], [137.0, 215.0], [151.0, 588.5], [147.0, 228.0], [146.0, 229.0], [145.0, 223.33333333333334], [158.0, 559.0], [157.0, 228.0], [155.0, 399.0], [153.0, 227.0], [152.0, 230.0], [164.0, 386.5], [162.0, 229.5], [160.0, 229.5], [175.0, 248.0], [174.0, 431.5], [172.0, 243.0], [170.0, 232.0], [168.0, 380.0], [183.0, 274.0], [182.0, 250.0], [181.0, 261.5], [179.0, 256.0], [178.0, 244.0], [177.0, 345.0], [176.0, 247.0], [191.0, 318.3333333333333], [189.0, 382.5], [187.0, 342.6666666666667], [185.0, 272.0], [197.0, 366.8], [198.0, 278.5], [193.0, 358.5714285714286], [194.0, 382.5], [195.0, 401.77777777777777], [196.0, 321.25], [200.0, 344.5], [201.0, 369.6666666666667], [203.0, 383.1666666666667], [204.0, 373.6], [202.0, 396.0], [222.0, 230.2], [223.0, 210.59999999999997], [221.0, 273.5], [226.0, 178.75], [227.0, 234.0], [228.0, 231.83333333333331], [229.0, 221.0], [230.0, 241.33333333333331], [224.0, 165.5], [225.0, 265.0], [1.0, 3016.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}, {"data": [[139.39333333333332, 692.5833333333329]], "isOverall": false, "label": "Access Detail Movie-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 230.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1320.0, "minX": 1.57173582E12, "maxY": 39638.53333333333, "series": [{"data": [[1.57173582E12, 39638.53333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57173582E12, 1320.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173582E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 692.5833333333329, "minX": 1.57173582E12, "maxY": 692.5833333333329, "series": [{"data": [[1.57173582E12, 692.5833333333329]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173582E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 492.99, "minX": 1.57173582E12, "maxY": 492.99, "series": [{"data": [[1.57173582E12, 492.99]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173582E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 258.4466666666667, "minX": 1.57173582E12, "maxY": 258.4466666666667, "series": [{"data": [[1.57173582E12, 258.4466666666667]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173582E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.57173582E12, "maxY": 3028.0, "series": [{"data": [[1.57173582E12, 3028.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57173582E12, 100.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57173582E12, 1396.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57173582E12, 3022.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57173582E12, 1506.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173582E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 230.5, "minX": 5.0, "maxY": 3017.0, "series": [{"data": [[75.0, 1368.0], [165.0, 277.0], [5.0, 3017.0], [48.0, 230.5], [7.0, 3016.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 165.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 188.0, "minX": 5.0, "maxY": 3013.0, "series": [{"data": [[75.0, 1113.0], [165.0, 201.0], [5.0, 3013.0], [48.0, 188.0], [7.0, 3011.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 165.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173582E12, "maxY": 5.0, "series": [{"data": [[1.57173582E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173582E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173582E12, "maxY": 5.0, "series": [{"data": [[1.57173582E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173582E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173582E12, "maxY": 5.0, "series": [{"data": [[1.57173582E12, 5.0]], "isOverall": false, "label": "Access Detail Movie-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173582E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173582E12, "maxY": 5.0, "series": [{"data": [[1.57173582E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173582E12, "title": "Total Transactions Per Second"}},
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

