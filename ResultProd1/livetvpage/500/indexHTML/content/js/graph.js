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
        data: {"result": {"minY": 67.0, "minX": 0.0, "maxY": 1110.0, "series": [{"data": [[0.0, 67.0], [0.1, 67.0], [0.2, 67.0], [0.3, 67.0], [0.4, 67.0], [0.5, 67.0], [0.6, 68.0], [0.7, 68.0], [0.8, 69.0], [0.9, 69.0], [1.0, 69.0], [1.1, 69.0], [1.2, 69.0], [1.3, 72.0], [1.4, 72.0], [1.5, 72.0], [1.6, 73.0], [1.7, 73.0], [1.8, 73.0], [1.9, 73.0], [2.0, 73.0], [2.1, 73.0], [2.2, 73.0], [2.3, 73.0], [2.4, 73.0], [2.5, 73.0], [2.6, 73.0], [2.7, 73.0], [2.8, 75.0], [2.9, 75.0], [3.0, 75.0], [3.1, 75.0], [3.2, 75.0], [3.3, 75.0], [3.4, 76.0], [3.5, 76.0], [3.6, 76.0], [3.7, 76.0], [3.8, 76.0], [3.9, 76.0], [4.0, 76.0], [4.1, 76.0], [4.2, 76.0], [4.3, 76.0], [4.4, 77.0], [4.5, 77.0], [4.6, 77.0], [4.7, 77.0], [4.8, 77.0], [4.9, 77.0], [5.0, 77.0], [5.1, 77.0], [5.2, 78.0], [5.3, 78.0], [5.4, 78.0], [5.5, 78.0], [5.6, 78.0], [5.7, 78.0], [5.8, 79.0], [5.9, 79.0], [6.0, 79.0], [6.1, 79.0], [6.2, 80.0], [6.3, 80.0], [6.4, 80.0], [6.5, 80.0], [6.6, 80.0], [6.7, 81.0], [6.8, 81.0], [6.9, 82.0], [7.0, 82.0], [7.1, 82.0], [7.2, 82.0], [7.3, 83.0], [7.4, 83.0], [7.5, 83.0], [7.6, 83.0], [7.7, 84.0], [7.8, 84.0], [7.9, 84.0], [8.0, 84.0], [8.1, 85.0], [8.2, 85.0], [8.3, 86.0], [8.4, 86.0], [8.5, 86.0], [8.6, 86.0], [8.7, 86.0], [8.8, 86.0], [8.9, 86.0], [9.0, 86.0], [9.1, 87.0], [9.2, 87.0], [9.3, 87.0], [9.4, 87.0], [9.5, 87.0], [9.6, 87.0], [9.7, 88.0], [9.8, 89.0], [9.9, 89.0], [10.0, 90.0], [10.1, 90.0], [10.2, 91.0], [10.3, 91.0], [10.4, 91.0], [10.5, 91.0], [10.6, 91.0], [10.7, 91.0], [10.8, 91.0], [10.9, 91.0], [11.0, 92.0], [11.1, 92.0], [11.2, 92.0], [11.3, 92.0], [11.4, 93.0], [11.5, 93.0], [11.6, 94.0], [11.7, 94.0], [11.8, 94.0], [11.9, 94.0], [12.0, 94.0], [12.1, 94.0], [12.2, 94.0], [12.3, 94.0], [12.4, 95.0], [12.5, 95.0], [12.6, 95.0], [12.7, 95.0], [12.8, 95.0], [12.9, 95.0], [13.0, 95.0], [13.1, 95.0], [13.2, 95.0], [13.3, 95.0], [13.4, 95.0], [13.5, 95.0], [13.6, 95.0], [13.7, 95.0], [13.8, 96.0], [13.9, 96.0], [14.0, 97.0], [14.1, 97.0], [14.2, 97.0], [14.3, 97.0], [14.4, 98.0], [14.5, 98.0], [14.6, 99.0], [14.7, 99.0], [14.8, 99.0], [14.9, 99.0], [15.0, 99.0], [15.1, 99.0], [15.2, 99.0], [15.3, 99.0], [15.4, 100.0], [15.5, 100.0], [15.6, 100.0], [15.7, 100.0], [15.8, 100.0], [15.9, 100.0], [16.0, 101.0], [16.1, 101.0], [16.2, 101.0], [16.3, 101.0], [16.4, 101.0], [16.5, 101.0], [16.6, 102.0], [16.7, 102.0], [16.8, 104.0], [16.9, 104.0], [17.0, 104.0], [17.1, 104.0], [17.2, 104.0], [17.3, 104.0], [17.4, 104.0], [17.5, 104.0], [17.6, 105.0], [17.7, 105.0], [17.8, 105.0], [17.9, 105.0], [18.0, 105.0], [18.1, 105.0], [18.2, 105.0], [18.3, 105.0], [18.4, 105.0], [18.5, 105.0], [18.6, 107.0], [18.7, 107.0], [18.8, 107.0], [18.9, 107.0], [19.0, 107.0], [19.1, 107.0], [19.2, 107.0], [19.3, 107.0], [19.4, 107.0], [19.5, 107.0], [19.6, 107.0], [19.7, 107.0], [19.8, 107.0], [19.9, 107.0], [20.0, 108.0], [20.1, 108.0], [20.2, 108.0], [20.3, 108.0], [20.4, 109.0], [20.5, 109.0], [20.6, 109.0], [20.7, 109.0], [20.8, 109.0], [20.9, 109.0], [21.0, 109.0], [21.1, 109.0], [21.2, 109.0], [21.3, 109.0], [21.4, 110.0], [21.5, 110.0], [21.6, 110.0], [21.7, 110.0], [21.8, 112.0], [21.9, 112.0], [22.0, 113.0], [22.1, 113.0], [22.2, 113.0], [22.3, 113.0], [22.4, 114.0], [22.5, 114.0], [22.6, 115.0], [22.7, 115.0], [22.8, 115.0], [22.9, 115.0], [23.0, 118.0], [23.1, 118.0], [23.2, 119.0], [23.3, 119.0], [23.4, 121.0], [23.5, 121.0], [23.6, 121.0], [23.7, 121.0], [23.8, 122.0], [23.9, 122.0], [24.0, 122.0], [24.1, 122.0], [24.2, 122.0], [24.3, 122.0], [24.4, 122.0], [24.5, 122.0], [24.6, 122.0], [24.7, 122.0], [24.8, 122.0], [24.9, 122.0], [25.0, 123.0], [25.1, 123.0], [25.2, 124.0], [25.3, 124.0], [25.4, 125.0], [25.5, 125.0], [25.6, 125.0], [25.7, 125.0], [25.8, 125.0], [25.9, 125.0], [26.0, 126.0], [26.1, 126.0], [26.2, 127.0], [26.3, 127.0], [26.4, 129.0], [26.5, 129.0], [26.6, 130.0], [26.7, 130.0], [26.8, 131.0], [26.9, 131.0], [27.0, 133.0], [27.1, 133.0], [27.2, 134.0], [27.3, 134.0], [27.4, 136.0], [27.5, 136.0], [27.6, 139.0], [27.7, 139.0], [27.8, 144.0], [27.9, 144.0], [28.0, 146.0], [28.1, 146.0], [28.2, 148.0], [28.3, 148.0], [28.4, 151.0], [28.5, 151.0], [28.6, 158.0], [28.7, 158.0], [28.8, 159.0], [28.9, 159.0], [29.0, 159.0], [29.1, 159.0], [29.2, 159.0], [29.3, 159.0], [29.4, 160.0], [29.5, 160.0], [29.6, 160.0], [29.7, 160.0], [29.8, 161.0], [29.9, 161.0], [30.0, 161.0], [30.1, 161.0], [30.2, 162.0], [30.3, 162.0], [30.4, 162.0], [30.5, 162.0], [30.6, 162.0], [30.7, 162.0], [30.8, 163.0], [30.9, 163.0], [31.0, 164.0], [31.1, 164.0], [31.2, 164.0], [31.3, 164.0], [31.4, 164.0], [31.5, 164.0], [31.6, 164.0], [31.7, 164.0], [31.8, 165.0], [31.9, 165.0], [32.0, 165.0], [32.1, 165.0], [32.2, 166.0], [32.3, 166.0], [32.4, 167.0], [32.5, 167.0], [32.6, 168.0], [32.7, 168.0], [32.8, 169.0], [32.9, 169.0], [33.0, 171.0], [33.1, 171.0], [33.2, 172.0], [33.3, 172.0], [33.4, 173.0], [33.5, 173.0], [33.6, 174.0], [33.7, 174.0], [33.8, 174.0], [33.9, 175.0], [34.0, 175.0], [34.1, 189.0], [34.2, 189.0], [34.3, 190.0], [34.4, 190.0], [34.5, 190.0], [34.6, 190.0], [34.7, 190.0], [34.8, 190.0], [34.9, 190.0], [35.0, 190.0], [35.1, 192.0], [35.2, 192.0], [35.3, 194.0], [35.4, 194.0], [35.5, 194.0], [35.6, 194.0], [35.7, 195.0], [35.8, 195.0], [35.9, 196.0], [36.0, 196.0], [36.1, 197.0], [36.2, 197.0], [36.3, 198.0], [36.4, 198.0], [36.5, 198.0], [36.6, 198.0], [36.7, 198.0], [36.8, 198.0], [36.9, 199.0], [37.0, 199.0], [37.1, 199.0], [37.2, 199.0], [37.3, 200.0], [37.4, 200.0], [37.5, 200.0], [37.6, 200.0], [37.7, 200.0], [37.8, 200.0], [37.9, 200.0], [38.0, 200.0], [38.1, 200.0], [38.2, 200.0], [38.3, 201.0], [38.4, 201.0], [38.5, 201.0], [38.6, 201.0], [38.7, 201.0], [38.8, 201.0], [38.9, 202.0], [39.0, 202.0], [39.1, 202.0], [39.2, 202.0], [39.3, 202.0], [39.4, 202.0], [39.5, 202.0], [39.6, 202.0], [39.7, 203.0], [39.8, 203.0], [39.9, 203.0], [40.0, 203.0], [40.1, 203.0], [40.2, 203.0], [40.3, 204.0], [40.4, 204.0], [40.5, 206.0], [40.6, 206.0], [40.7, 206.0], [40.8, 206.0], [40.9, 208.0], [41.0, 208.0], [41.1, 209.0], [41.2, 209.0], [41.3, 209.0], [41.4, 209.0], [41.5, 210.0], [41.6, 210.0], [41.7, 210.0], [41.8, 210.0], [41.9, 211.0], [42.0, 211.0], [42.1, 212.0], [42.2, 212.0], [42.3, 212.0], [42.4, 212.0], [42.5, 213.0], [42.6, 213.0], [42.7, 214.0], [42.8, 214.0], [42.9, 215.0], [43.0, 215.0], [43.1, 219.0], [43.2, 219.0], [43.3, 219.0], [43.4, 219.0], [43.5, 220.0], [43.6, 220.0], [43.7, 223.0], [43.8, 223.0], [43.9, 223.0], [44.0, 223.0], [44.1, 226.0], [44.2, 226.0], [44.3, 232.0], [44.4, 232.0], [44.5, 234.0], [44.6, 234.0], [44.7, 235.0], [44.8, 235.0], [44.9, 237.0], [45.0, 237.0], [45.1, 238.0], [45.2, 238.0], [45.3, 239.0], [45.4, 239.0], [45.5, 241.0], [45.6, 241.0], [45.7, 242.0], [45.8, 242.0], [45.9, 243.0], [46.0, 243.0], [46.1, 243.0], [46.2, 243.0], [46.3, 244.0], [46.4, 244.0], [46.5, 244.0], [46.6, 244.0], [46.7, 245.0], [46.8, 245.0], [46.9, 245.0], [47.0, 245.0], [47.1, 245.0], [47.2, 245.0], [47.3, 246.0], [47.4, 246.0], [47.5, 246.0], [47.6, 246.0], [47.7, 247.0], [47.8, 247.0], [47.9, 247.0], [48.0, 247.0], [48.1, 247.0], [48.2, 247.0], [48.3, 247.0], [48.4, 247.0], [48.5, 248.0], [48.6, 248.0], [48.7, 248.0], [48.8, 248.0], [48.9, 248.0], [49.0, 248.0], [49.1, 248.0], [49.2, 248.0], [49.3, 248.0], [49.4, 248.0], [49.5, 249.0], [49.6, 249.0], [49.7, 249.0], [49.8, 249.0], [49.9, 249.0], [50.0, 249.0], [50.1, 249.0], [50.2, 249.0], [50.3, 249.0], [50.4, 249.0], [50.5, 249.0], [50.6, 249.0], [50.7, 250.0], [50.8, 250.0], [50.9, 250.0], [51.0, 250.0], [51.1, 250.0], [51.2, 250.0], [51.3, 250.0], [51.4, 250.0], [51.5, 251.0], [51.6, 251.0], [51.7, 251.0], [51.8, 251.0], [51.9, 251.0], [52.0, 251.0], [52.1, 251.0], [52.2, 251.0], [52.3, 251.0], [52.4, 251.0], [52.5, 251.0], [52.6, 251.0], [52.7, 252.0], [52.8, 252.0], [52.9, 252.0], [53.0, 252.0], [53.1, 252.0], [53.2, 252.0], [53.3, 252.0], [53.4, 252.0], [53.5, 252.0], [53.6, 252.0], [53.7, 253.0], [53.8, 253.0], [53.9, 253.0], [54.0, 253.0], [54.1, 253.0], [54.2, 253.0], [54.3, 253.0], [54.4, 253.0], [54.5, 253.0], [54.6, 253.0], [54.7, 253.0], [54.8, 253.0], [54.9, 253.0], [55.0, 253.0], [55.1, 253.0], [55.2, 253.0], [55.3, 254.0], [55.4, 254.0], [55.5, 254.0], [55.6, 254.0], [55.7, 255.0], [55.8, 255.0], [55.9, 255.0], [56.0, 255.0], [56.1, 255.0], [56.2, 255.0], [56.3, 255.0], [56.4, 255.0], [56.5, 256.0], [56.6, 256.0], [56.7, 257.0], [56.8, 257.0], [56.9, 257.0], [57.0, 257.0], [57.1, 259.0], [57.2, 259.0], [57.3, 259.0], [57.4, 259.0], [57.5, 260.0], [57.6, 260.0], [57.7, 260.0], [57.8, 260.0], [57.9, 260.0], [58.0, 260.0], [58.1, 261.0], [58.2, 261.0], [58.3, 262.0], [58.4, 262.0], [58.5, 263.0], [58.6, 263.0], [58.7, 263.0], [58.8, 263.0], [58.9, 265.0], [59.0, 265.0], [59.1, 266.0], [59.2, 266.0], [59.3, 269.0], [59.4, 269.0], [59.5, 271.0], [59.6, 271.0], [59.7, 271.0], [59.8, 271.0], [59.9, 274.0], [60.0, 274.0], [60.1, 274.0], [60.2, 274.0], [60.3, 275.0], [60.4, 275.0], [60.5, 275.0], [60.6, 275.0], [60.7, 277.0], [60.8, 277.0], [60.9, 277.0], [61.0, 277.0], [61.1, 277.0], [61.2, 277.0], [61.3, 277.0], [61.4, 277.0], [61.5, 277.0], [61.6, 277.0], [61.7, 278.0], [61.8, 278.0], [61.9, 278.0], [62.0, 278.0], [62.1, 279.0], [62.2, 279.0], [62.3, 279.0], [62.4, 279.0], [62.5, 279.0], [62.6, 279.0], [62.7, 280.0], [62.8, 280.0], [62.9, 280.0], [63.0, 280.0], [63.1, 280.0], [63.2, 280.0], [63.3, 280.0], [63.4, 280.0], [63.5, 283.0], [63.6, 283.0], [63.7, 283.0], [63.8, 283.0], [63.9, 285.0], [64.0, 285.0], [64.1, 285.0], [64.2, 285.0], [64.3, 285.0], [64.4, 285.0], [64.5, 285.0], [64.6, 285.0], [64.7, 285.0], [64.8, 285.0], [64.9, 288.0], [65.0, 288.0], [65.1, 294.0], [65.2, 294.0], [65.3, 295.0], [65.4, 295.0], [65.5, 296.0], [65.6, 296.0], [65.7, 297.0], [65.8, 297.0], [65.9, 298.0], [66.0, 298.0], [66.1, 299.0], [66.2, 299.0], [66.3, 299.0], [66.4, 299.0], [66.5, 300.0], [66.6, 300.0], [66.7, 301.0], [66.8, 301.0], [66.9, 304.0], [67.0, 304.0], [67.1, 304.0], [67.2, 304.0], [67.3, 306.0], [67.4, 306.0], [67.5, 306.0], [67.6, 306.0], [67.7, 307.0], [67.8, 307.0], [67.9, 307.0], [68.0, 307.0], [68.1, 307.0], [68.2, 307.0], [68.3, 308.0], [68.4, 308.0], [68.5, 312.0], [68.6, 312.0], [68.7, 313.0], [68.8, 313.0], [68.9, 314.0], [69.0, 314.0], [69.1, 325.0], [69.2, 325.0], [69.3, 326.0], [69.4, 326.0], [69.5, 328.0], [69.6, 328.0], [69.7, 328.0], [69.8, 328.0], [69.9, 329.0], [70.0, 329.0], [70.1, 330.0], [70.2, 330.0], [70.3, 330.0], [70.4, 330.0], [70.5, 331.0], [70.6, 331.0], [70.7, 331.0], [70.8, 331.0], [70.9, 332.0], [71.0, 332.0], [71.1, 333.0], [71.2, 333.0], [71.3, 333.0], [71.4, 333.0], [71.5, 333.0], [71.6, 333.0], [71.7, 346.0], [71.8, 346.0], [71.9, 348.0], [72.0, 348.0], [72.1, 352.0], [72.2, 352.0], [72.3, 372.0], [72.4, 372.0], [72.5, 375.0], [72.6, 375.0], [72.7, 383.0], [72.8, 383.0], [72.9, 384.0], [73.0, 384.0], [73.1, 385.0], [73.2, 385.0], [73.3, 386.0], [73.4, 386.0], [73.5, 386.0], [73.6, 386.0], [73.7, 386.0], [73.8, 386.0], [73.9, 387.0], [74.0, 387.0], [74.1, 387.0], [74.2, 387.0], [74.3, 387.0], [74.4, 387.0], [74.5, 387.0], [74.6, 387.0], [74.7, 388.0], [74.8, 388.0], [74.9, 389.0], [75.0, 389.0], [75.1, 389.0], [75.2, 389.0], [75.3, 389.0], [75.4, 389.0], [75.5, 389.0], [75.6, 389.0], [75.7, 389.0], [75.8, 389.0], [75.9, 389.0], [76.0, 389.0], [76.1, 390.0], [76.2, 390.0], [76.3, 390.0], [76.4, 390.0], [76.5, 390.0], [76.6, 390.0], [76.7, 390.0], [76.8, 390.0], [76.9, 391.0], [77.0, 391.0], [77.1, 391.0], [77.2, 391.0], [77.3, 392.0], [77.4, 392.0], [77.5, 392.0], [77.6, 392.0], [77.7, 393.0], [77.8, 393.0], [77.9, 395.0], [78.0, 395.0], [78.1, 395.0], [78.2, 395.0], [78.3, 398.0], [78.4, 398.0], [78.5, 398.0], [78.6, 398.0], [78.7, 398.0], [78.8, 398.0], [78.9, 399.0], [79.0, 399.0], [79.1, 400.0], [79.2, 400.0], [79.3, 400.0], [79.4, 400.0], [79.5, 401.0], [79.6, 401.0], [79.7, 401.0], [79.8, 401.0], [79.9, 401.0], [80.0, 401.0], [80.1, 401.0], [80.2, 401.0], [80.3, 401.0], [80.4, 401.0], [80.5, 402.0], [80.6, 402.0], [80.7, 405.0], [80.8, 405.0], [80.9, 405.0], [81.0, 405.0], [81.1, 405.0], [81.2, 405.0], [81.3, 407.0], [81.4, 407.0], [81.5, 408.0], [81.6, 408.0], [81.7, 409.0], [81.8, 409.0], [81.9, 409.0], [82.0, 409.0], [82.1, 412.0], [82.2, 412.0], [82.3, 413.0], [82.4, 413.0], [82.5, 413.0], [82.6, 413.0], [82.7, 413.0], [82.8, 413.0], [82.9, 414.0], [83.0, 414.0], [83.1, 415.0], [83.2, 415.0], [83.3, 415.0], [83.4, 415.0], [83.5, 416.0], [83.6, 416.0], [83.7, 416.0], [83.8, 416.0], [83.9, 416.0], [84.0, 416.0], [84.1, 417.0], [84.2, 417.0], [84.3, 417.0], [84.4, 417.0], [84.5, 417.0], [84.6, 417.0], [84.7, 417.0], [84.8, 417.0], [84.9, 418.0], [85.0, 418.0], [85.1, 418.0], [85.2, 418.0], [85.3, 418.0], [85.4, 418.0], [85.5, 419.0], [85.6, 419.0], [85.7, 420.0], [85.8, 420.0], [85.9, 420.0], [86.0, 420.0], [86.1, 420.0], [86.2, 420.0], [86.3, 421.0], [86.4, 421.0], [86.5, 421.0], [86.6, 421.0], [86.7, 421.0], [86.8, 421.0], [86.9, 421.0], [87.0, 421.0], [87.1, 421.0], [87.2, 421.0], [87.3, 423.0], [87.4, 423.0], [87.5, 423.0], [87.6, 423.0], [87.7, 423.0], [87.8, 423.0], [87.9, 424.0], [88.0, 424.0], [88.1, 425.0], [88.2, 425.0], [88.3, 427.0], [88.4, 427.0], [88.5, 427.0], [88.6, 427.0], [88.7, 428.0], [88.8, 428.0], [88.9, 428.0], [89.0, 428.0], [89.1, 428.0], [89.2, 428.0], [89.3, 428.0], [89.4, 428.0], [89.5, 429.0], [89.6, 429.0], [89.7, 429.0], [89.8, 429.0], [89.9, 429.0], [90.0, 429.0], [90.1, 429.0], [90.2, 429.0], [90.3, 430.0], [90.4, 430.0], [90.5, 431.0], [90.6, 431.0], [90.7, 432.0], [90.8, 432.0], [90.9, 432.0], [91.0, 432.0], [91.1, 432.0], [91.2, 432.0], [91.3, 432.0], [91.4, 432.0], [91.5, 435.0], [91.6, 435.0], [91.7, 436.0], [91.8, 436.0], [91.9, 438.0], [92.0, 438.0], [92.1, 438.0], [92.2, 438.0], [92.3, 439.0], [92.4, 439.0], [92.5, 439.0], [92.6, 439.0], [92.7, 440.0], [92.8, 440.0], [92.9, 440.0], [93.0, 440.0], [93.1, 442.0], [93.2, 442.0], [93.3, 444.0], [93.4, 444.0], [93.5, 448.0], [93.6, 448.0], [93.7, 450.0], [93.8, 450.0], [93.9, 452.0], [94.0, 452.0], [94.1, 454.0], [94.2, 454.0], [94.3, 470.0], [94.4, 470.0], [94.5, 473.0], [94.6, 473.0], [94.7, 493.0], [94.8, 493.0], [94.9, 493.0], [95.0, 493.0], [95.1, 502.0], [95.2, 502.0], [95.3, 533.0], [95.4, 533.0], [95.5, 549.0], [95.6, 549.0], [95.7, 1085.0], [95.8, 1085.0], [95.9, 1086.0], [96.0, 1086.0], [96.1, 1087.0], [96.2, 1087.0], [96.3, 1088.0], [96.4, 1088.0], [96.5, 1088.0], [96.6, 1088.0], [96.7, 1088.0], [96.8, 1088.0], [96.9, 1088.0], [97.0, 1088.0], [97.1, 1090.0], [97.2, 1090.0], [97.3, 1090.0], [97.4, 1090.0], [97.5, 1093.0], [97.6, 1093.0], [97.7, 1100.0], [97.8, 1100.0], [97.9, 1101.0], [98.0, 1101.0], [98.1, 1102.0], [98.2, 1102.0], [98.3, 1103.0], [98.4, 1103.0], [98.5, 1104.0], [98.6, 1104.0], [98.7, 1105.0], [98.8, 1105.0], [98.9, 1105.0], [99.0, 1105.0], [99.1, 1107.0], [99.2, 1107.0], [99.3, 1108.0], [99.4, 1108.0], [99.5, 1108.0], [99.6, 1108.0], [99.7, 1109.0], [99.8, 1109.0], [99.9, 1110.0], [100.0, 1110.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 146.0, "series": [{"data": [[0.0, 77.0], [1100.0, 12.0], [300.0, 63.0], [200.0, 146.0], [100.0, 109.0], [400.0, 80.0], [500.0, 3.0], [1000.0, 10.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 25.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 475.0, "series": [{"data": [[0.0, 475.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 25.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 141.12399999999997, "minX": 1.57232334E12, "maxY": 141.12399999999997, "series": [{"data": [[1.57232334E12, 141.12399999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232334E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 79.8, "minX": 2.0, "maxY": 1110.0, "series": [{"data": [[2.0, 1108.0], [3.0, 1110.0], [4.0, 1108.0], [5.0, 1105.0], [6.0, 1103.0], [9.0, 1105.0], [11.0, 1103.3333333333333], [12.0, 1100.0], [15.0, 1091.0], [17.0, 1087.5], [19.0, 1088.0], [20.0, 1088.0], [21.0, 1086.0], [22.0, 1085.0], [23.0, 533.0], [24.0, 502.0], [26.0, 493.0], [27.0, 473.0], [32.0, 105.4], [34.0, 105.0], [36.0, 105.0], [39.0, 106.8], [45.0, 100.0], [44.0, 101.0], [46.0, 99.4], [48.0, 94.5], [51.0, 444.0], [50.0, 91.5], [52.0, 87.0], [57.0, 428.0], [56.0, 428.0], [58.0, 80.5], [61.0, 156.16666666666669], [60.0, 100.5], [62.0, 95.0], [65.0, 163.4], [68.0, 79.8], [75.0, 115.0], [74.0, 113.25000000000001], [73.0, 139.85714285714286], [72.0, 83.42857142857143], [78.0, 205.25], [77.0, 114.44444444444444], [76.0, 130.0], [79.0, 83.22222222222223], [83.0, 155.0], [82.0, 166.4], [80.0, 114.11111111111111], [81.0, 107.33333333333334], [87.0, 194.44444444444446], [86.0, 205.33333333333334], [85.0, 207.0], [84.0, 174.0], [90.0, 452.0], [88.0, 242.4], [91.0, 114.5], [95.0, 308.25], [94.0, 217.0], [93.0, 190.5], [92.0, 212.4], [98.0, 343.0], [97.0, 400.2], [96.0, 287.0], [99.0, 136.0], [102.0, 255.4], [101.0, 275.5], [100.0, 189.0], [104.0, 237.8], [107.0, 203.25], [106.0, 169.33333333333334], [111.0, 348.2], [108.0, 198.25], [109.0, 196.0], [115.0, 172.0], [113.0, 174.0], [114.0, 99.5], [119.0, 333.9090909090909], [117.0, 429.0], [116.0, 261.5], [118.0, 159.57142857142858], [123.0, 438.0], [122.0, 330.0], [121.0, 297.2], [120.0, 426.5], [135.0, 389.0], [133.0, 381.5], [130.0, 410.5], [141.0, 415.875], [139.0, 423.0], [138.0, 418.5], [136.0, 418.0], [151.0, 413.5], [150.0, 415.0], [149.0, 413.25], [148.0, 416.0], [147.0, 416.5], [145.0, 420.0], [159.0, 397.0], [156.0, 409.0], [154.0, 407.0], [153.0, 420.5], [152.0, 423.0], [166.0, 397.5], [163.0, 409.0], [161.0, 409.0], [160.0, 391.5], [174.0, 396.0], [171.0, 402.0], [170.0, 402.0], [169.0, 397.0], [168.0, 390.0], [181.0, 338.8333333333333], [178.0, 272.0], [177.0, 335.2727272727273], [183.0, 384.0], [180.0, 389.0], [176.0, 394.75], [185.0, 338.0], [186.0, 391.3333333333333], [238.0, 304.0], [255.0, 306.0], [268.0, 307.0], [267.0, 274.0], [266.0, 298.0], [264.0, 303.0], [263.0, 305.0], [259.0, 295.0], [258.0, 309.5], [257.0, 308.0], [280.0, 206.0], [285.0, 235.45054945054946], [279.0, 213.66666666666666]], "isOverall": false, "label": "Access Live TV Page", "isController": false}, {"data": [[141.12199999999996, 280.43199999999985]], "isOverall": false, "label": "Access Live TV Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 285.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1908.3333333333333, "minX": 1.57232334E12, "maxY": 65571.86666666667, "series": [{"data": [[1.57232334E12, 65571.86666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232334E12, 1908.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232334E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 280.43199999999985, "minX": 1.57232334E12, "maxY": 280.43199999999985, "series": [{"data": [[1.57232334E12, 280.43199999999985]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232334E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 231.60399999999998, "minX": 1.57232334E12, "maxY": 231.60399999999998, "series": [{"data": [[1.57232334E12, 231.60399999999998]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232334E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 146.8460000000001, "minX": 1.57232334E12, "maxY": 146.8460000000001, "series": [{"data": [[1.57232334E12, 146.8460000000001]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232334E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 67.0, "minX": 1.57232334E12, "maxY": 1110.0, "series": [{"data": [[1.57232334E12, 1110.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232334E12, 67.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232334E12, 429.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232334E12, 1106.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232334E12, 501.5499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232334E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 123.0, "minX": 22.0, "maxY": 1100.5, "series": [{"data": [[22.0, 1100.5], [227.0, 307.0], [251.0, 123.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 251.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 84.0, "minX": 22.0, "maxY": 1091.0, "series": [{"data": [[22.0, 1091.0], [227.0, 250.0], [251.0, 84.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 251.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232334E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232334E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232334E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232334E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232334E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232334E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232334E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232334E12, 8.333333333333334]], "isOverall": false, "label": "Access Live TV Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232334E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232334E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232334E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232334E12, "title": "Total Transactions Per Second"}},
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

