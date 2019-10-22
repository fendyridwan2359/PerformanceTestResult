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
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 824.0, "series": [{"data": [[0.0, 10.0], [0.1, 10.0], [0.2, 10.0], [0.3, 10.0], [0.4, 10.0], [0.5, 10.0], [0.6, 10.0], [0.7, 10.0], [0.8, 10.0], [0.9, 10.0], [1.0, 10.0], [1.1, 10.0], [1.2, 10.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 10.0], [1.7, 10.0], [1.8, 10.0], [1.9, 10.0], [2.0, 11.0], [2.1, 11.0], [2.2, 11.0], [2.3, 11.0], [2.4, 11.0], [2.5, 11.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 11.0], [3.8, 11.0], [3.9, 11.0], [4.0, 22.0], [4.1, 22.0], [4.2, 22.0], [4.3, 22.0], [4.4, 22.0], [4.5, 22.0], [4.6, 22.0], [4.7, 22.0], [4.8, 22.0], [4.9, 22.0], [5.0, 22.0], [5.1, 22.0], [5.2, 22.0], [5.3, 22.0], [5.4, 22.0], [5.5, 22.0], [5.6, 22.0], [5.7, 22.0], [5.8, 22.0], [5.9, 22.0], [6.0, 48.0], [6.1, 48.0], [6.2, 48.0], [6.3, 48.0], [6.4, 48.0], [6.5, 48.0], [6.6, 48.0], [6.7, 48.0], [6.8, 48.0], [6.9, 48.0], [7.0, 48.0], [7.1, 48.0], [7.2, 48.0], [7.3, 48.0], [7.4, 48.0], [7.5, 48.0], [7.6, 48.0], [7.7, 48.0], [7.8, 48.0], [7.9, 48.0], [8.0, 70.0], [8.1, 70.0], [8.2, 70.0], [8.3, 70.0], [8.4, 70.0], [8.5, 70.0], [8.6, 70.0], [8.7, 70.0], [8.8, 70.0], [8.9, 70.0], [9.0, 70.0], [9.1, 70.0], [9.2, 70.0], [9.3, 70.0], [9.4, 70.0], [9.5, 70.0], [9.6, 70.0], [9.7, 70.0], [9.8, 70.0], [9.9, 70.0], [10.0, 86.0], [10.1, 86.0], [10.2, 86.0], [10.3, 86.0], [10.4, 86.0], [10.5, 86.0], [10.6, 86.0], [10.7, 86.0], [10.8, 86.0], [10.9, 86.0], [11.0, 86.0], [11.1, 86.0], [11.2, 86.0], [11.3, 86.0], [11.4, 86.0], [11.5, 86.0], [11.6, 86.0], [11.7, 86.0], [11.8, 86.0], [11.9, 86.0], [12.0, 108.0], [12.1, 108.0], [12.2, 108.0], [12.3, 108.0], [12.4, 108.0], [12.5, 108.0], [12.6, 108.0], [12.7, 108.0], [12.8, 108.0], [12.9, 108.0], [13.0, 108.0], [13.1, 108.0], [13.2, 108.0], [13.3, 108.0], [13.4, 108.0], [13.5, 108.0], [13.6, 108.0], [13.7, 108.0], [13.8, 108.0], [13.9, 108.0], [14.0, 123.0], [14.1, 123.0], [14.2, 123.0], [14.3, 123.0], [14.4, 123.0], [14.5, 123.0], [14.6, 123.0], [14.7, 123.0], [14.8, 123.0], [14.9, 123.0], [15.0, 123.0], [15.1, 123.0], [15.2, 123.0], [15.3, 123.0], [15.4, 123.0], [15.5, 123.0], [15.6, 123.0], [15.7, 123.0], [15.8, 123.0], [15.9, 123.0], [16.0, 144.0], [16.1, 144.0], [16.2, 144.0], [16.3, 144.0], [16.4, 144.0], [16.5, 144.0], [16.6, 144.0], [16.7, 144.0], [16.8, 144.0], [16.9, 144.0], [17.0, 144.0], [17.1, 144.0], [17.2, 144.0], [17.3, 144.0], [17.4, 144.0], [17.5, 144.0], [17.6, 144.0], [17.7, 144.0], [17.8, 144.0], [17.9, 144.0], [18.0, 168.0], [18.1, 168.0], [18.2, 168.0], [18.3, 168.0], [18.4, 168.0], [18.5, 168.0], [18.6, 168.0], [18.7, 168.0], [18.8, 168.0], [18.9, 168.0], [19.0, 168.0], [19.1, 168.0], [19.2, 168.0], [19.3, 168.0], [19.4, 168.0], [19.5, 168.0], [19.6, 168.0], [19.7, 168.0], [19.8, 168.0], [19.9, 168.0], [20.0, 188.0], [20.1, 188.0], [20.2, 188.0], [20.3, 188.0], [20.4, 188.0], [20.5, 188.0], [20.6, 188.0], [20.7, 188.0], [20.8, 188.0], [20.9, 188.0], [21.0, 188.0], [21.1, 188.0], [21.2, 188.0], [21.3, 188.0], [21.4, 188.0], [21.5, 188.0], [21.6, 188.0], [21.7, 188.0], [21.8, 188.0], [21.9, 188.0], [22.0, 204.0], [22.1, 204.0], [22.2, 204.0], [22.3, 204.0], [22.4, 204.0], [22.5, 204.0], [22.6, 204.0], [22.7, 204.0], [22.8, 204.0], [22.9, 204.0], [23.0, 204.0], [23.1, 204.0], [23.2, 204.0], [23.3, 204.0], [23.4, 204.0], [23.5, 204.0], [23.6, 204.0], [23.7, 204.0], [23.8, 204.0], [23.9, 204.0], [24.0, 222.0], [24.1, 222.0], [24.2, 222.0], [24.3, 222.0], [24.4, 222.0], [24.5, 222.0], [24.6, 222.0], [24.7, 222.0], [24.8, 222.0], [24.9, 222.0], [25.0, 222.0], [25.1, 222.0], [25.2, 222.0], [25.3, 222.0], [25.4, 222.0], [25.5, 222.0], [25.6, 222.0], [25.7, 222.0], [25.8, 222.0], [25.9, 222.0], [26.0, 243.0], [26.1, 243.0], [26.2, 243.0], [26.3, 243.0], [26.4, 243.0], [26.5, 243.0], [26.6, 243.0], [26.7, 243.0], [26.8, 243.0], [26.9, 243.0], [27.0, 243.0], [27.1, 243.0], [27.2, 243.0], [27.3, 243.0], [27.4, 243.0], [27.5, 243.0], [27.6, 243.0], [27.7, 243.0], [27.8, 243.0], [27.9, 243.0], [28.0, 264.0], [28.1, 264.0], [28.2, 264.0], [28.3, 264.0], [28.4, 264.0], [28.5, 264.0], [28.6, 264.0], [28.7, 264.0], [28.8, 264.0], [28.9, 264.0], [29.0, 264.0], [29.1, 264.0], [29.2, 264.0], [29.3, 264.0], [29.4, 264.0], [29.5, 264.0], [29.6, 264.0], [29.7, 264.0], [29.8, 264.0], [29.9, 264.0], [30.0, 283.0], [30.1, 283.0], [30.2, 283.0], [30.3, 283.0], [30.4, 283.0], [30.5, 283.0], [30.6, 283.0], [30.7, 283.0], [30.8, 283.0], [30.9, 283.0], [31.0, 283.0], [31.1, 283.0], [31.2, 283.0], [31.3, 283.0], [31.4, 283.0], [31.5, 283.0], [31.6, 283.0], [31.7, 283.0], [31.8, 283.0], [31.9, 283.0], [32.0, 305.0], [32.1, 305.0], [32.2, 305.0], [32.3, 305.0], [32.4, 305.0], [32.5, 305.0], [32.6, 305.0], [32.7, 305.0], [32.8, 305.0], [32.9, 305.0], [33.0, 305.0], [33.1, 305.0], [33.2, 305.0], [33.3, 305.0], [33.4, 305.0], [33.5, 305.0], [33.6, 305.0], [33.7, 305.0], [33.8, 305.0], [33.9, 305.0], [34.0, 327.0], [34.1, 327.0], [34.2, 327.0], [34.3, 327.0], [34.4, 327.0], [34.5, 327.0], [34.6, 327.0], [34.7, 327.0], [34.8, 327.0], [34.9, 327.0], [35.0, 327.0], [35.1, 327.0], [35.2, 327.0], [35.3, 327.0], [35.4, 327.0], [35.5, 327.0], [35.6, 327.0], [35.7, 327.0], [35.8, 327.0], [35.9, 327.0], [36.0, 447.0], [36.1, 447.0], [36.2, 447.0], [36.3, 447.0], [36.4, 447.0], [36.5, 447.0], [36.6, 447.0], [36.7, 447.0], [36.8, 447.0], [36.9, 447.0], [37.0, 447.0], [37.1, 447.0], [37.2, 447.0], [37.3, 447.0], [37.4, 447.0], [37.5, 447.0], [37.6, 447.0], [37.7, 447.0], [37.8, 447.0], [37.9, 447.0], [38.0, 455.0], [38.1, 455.0], [38.2, 455.0], [38.3, 455.0], [38.4, 455.0], [38.5, 455.0], [38.6, 455.0], [38.7, 455.0], [38.8, 455.0], [38.9, 455.0], [39.0, 455.0], [39.1, 455.0], [39.2, 455.0], [39.3, 455.0], [39.4, 455.0], [39.5, 455.0], [39.6, 455.0], [39.7, 455.0], [39.8, 455.0], [39.9, 455.0], [40.0, 480.0], [40.1, 480.0], [40.2, 480.0], [40.3, 480.0], [40.4, 480.0], [40.5, 480.0], [40.6, 480.0], [40.7, 480.0], [40.8, 480.0], [40.9, 480.0], [41.0, 480.0], [41.1, 480.0], [41.2, 480.0], [41.3, 480.0], [41.4, 480.0], [41.5, 480.0], [41.6, 480.0], [41.7, 480.0], [41.8, 480.0], [41.9, 480.0], [42.0, 493.0], [42.1, 493.0], [42.2, 493.0], [42.3, 493.0], [42.4, 493.0], [42.5, 493.0], [42.6, 493.0], [42.7, 493.0], [42.8, 493.0], [42.9, 493.0], [43.0, 493.0], [43.1, 493.0], [43.2, 493.0], [43.3, 493.0], [43.4, 493.0], [43.5, 493.0], [43.6, 493.0], [43.7, 493.0], [43.8, 493.0], [43.9, 493.0], [44.0, 514.0], [44.1, 514.0], [44.2, 514.0], [44.3, 514.0], [44.4, 514.0], [44.5, 514.0], [44.6, 514.0], [44.7, 514.0], [44.8, 514.0], [44.9, 514.0], [45.0, 514.0], [45.1, 514.0], [45.2, 514.0], [45.3, 514.0], [45.4, 514.0], [45.5, 514.0], [45.6, 514.0], [45.7, 514.0], [45.8, 514.0], [45.9, 514.0], [46.0, 529.0], [46.1, 529.0], [46.2, 529.0], [46.3, 529.0], [46.4, 529.0], [46.5, 529.0], [46.6, 529.0], [46.7, 529.0], [46.8, 529.0], [46.9, 529.0], [47.0, 529.0], [47.1, 529.0], [47.2, 529.0], [47.3, 529.0], [47.4, 529.0], [47.5, 529.0], [47.6, 529.0], [47.7, 529.0], [47.8, 529.0], [47.9, 529.0], [48.0, 565.0], [48.1, 565.0], [48.2, 565.0], [48.3, 565.0], [48.4, 565.0], [48.5, 565.0], [48.6, 565.0], [48.7, 565.0], [48.8, 565.0], [48.9, 565.0], [49.0, 565.0], [49.1, 565.0], [49.2, 565.0], [49.3, 565.0], [49.4, 565.0], [49.5, 565.0], [49.6, 565.0], [49.7, 565.0], [49.8, 565.0], [49.9, 565.0], [50.0, 578.0], [50.1, 578.0], [50.2, 578.0], [50.3, 578.0], [50.4, 578.0], [50.5, 578.0], [50.6, 578.0], [50.7, 578.0], [50.8, 578.0], [50.9, 578.0], [51.0, 578.0], [51.1, 578.0], [51.2, 578.0], [51.3, 578.0], [51.4, 578.0], [51.5, 578.0], [51.6, 578.0], [51.7, 578.0], [51.8, 578.0], [51.9, 578.0], [52.0, 601.0], [52.1, 601.0], [52.2, 601.0], [52.3, 601.0], [52.4, 601.0], [52.5, 601.0], [52.6, 601.0], [52.7, 601.0], [52.8, 601.0], [52.9, 601.0], [53.0, 601.0], [53.1, 601.0], [53.2, 601.0], [53.3, 601.0], [53.4, 601.0], [53.5, 601.0], [53.6, 601.0], [53.7, 601.0], [53.8, 601.0], [53.9, 601.0], [54.0, 608.0], [54.1, 608.0], [54.2, 608.0], [54.3, 608.0], [54.4, 608.0], [54.5, 608.0], [54.6, 608.0], [54.7, 608.0], [54.8, 608.0], [54.9, 608.0], [55.0, 608.0], [55.1, 608.0], [55.2, 608.0], [55.3, 608.0], [55.4, 608.0], [55.5, 608.0], [55.6, 608.0], [55.7, 608.0], [55.8, 608.0], [55.9, 608.0], [56.0, 642.0], [56.1, 642.0], [56.2, 642.0], [56.3, 642.0], [56.4, 642.0], [56.5, 642.0], [56.6, 642.0], [56.7, 642.0], [56.8, 642.0], [56.9, 642.0], [57.0, 642.0], [57.1, 642.0], [57.2, 642.0], [57.3, 642.0], [57.4, 642.0], [57.5, 642.0], [57.6, 642.0], [57.7, 642.0], [57.8, 642.0], [57.9, 642.0], [58.0, 665.0], [58.1, 665.0], [58.2, 665.0], [58.3, 665.0], [58.4, 665.0], [58.5, 665.0], [58.6, 665.0], [58.7, 665.0], [58.8, 665.0], [58.9, 665.0], [59.0, 665.0], [59.1, 665.0], [59.2, 665.0], [59.3, 665.0], [59.4, 665.0], [59.5, 665.0], [59.6, 665.0], [59.7, 665.0], [59.8, 665.0], [59.9, 665.0], [60.0, 676.0], [60.1, 676.0], [60.2, 676.0], [60.3, 676.0], [60.4, 676.0], [60.5, 676.0], [60.6, 676.0], [60.7, 676.0], [60.8, 676.0], [60.9, 676.0], [61.0, 676.0], [61.1, 676.0], [61.2, 676.0], [61.3, 676.0], [61.4, 676.0], [61.5, 676.0], [61.6, 676.0], [61.7, 676.0], [61.8, 676.0], [61.9, 676.0], [62.0, 702.0], [62.1, 702.0], [62.2, 702.0], [62.3, 702.0], [62.4, 702.0], [62.5, 702.0], [62.6, 702.0], [62.7, 702.0], [62.8, 702.0], [62.9, 702.0], [63.0, 702.0], [63.1, 702.0], [63.2, 702.0], [63.3, 702.0], [63.4, 702.0], [63.5, 702.0], [63.6, 702.0], [63.7, 702.0], [63.8, 702.0], [63.9, 702.0], [64.0, 702.0], [64.1, 702.0], [64.2, 702.0], [64.3, 702.0], [64.4, 702.0], [64.5, 702.0], [64.6, 702.0], [64.7, 702.0], [64.8, 702.0], [64.9, 702.0], [65.0, 702.0], [65.1, 702.0], [65.2, 702.0], [65.3, 702.0], [65.4, 702.0], [65.5, 702.0], [65.6, 702.0], [65.7, 702.0], [65.8, 702.0], [65.9, 702.0], [66.0, 732.0], [66.1, 732.0], [66.2, 732.0], [66.3, 732.0], [66.4, 732.0], [66.5, 732.0], [66.6, 732.0], [66.7, 732.0], [66.8, 732.0], [66.9, 732.0], [67.0, 732.0], [67.1, 732.0], [67.2, 732.0], [67.3, 732.0], [67.4, 732.0], [67.5, 732.0], [67.6, 732.0], [67.7, 732.0], [67.8, 732.0], [67.9, 732.0], [68.0, 751.0], [68.1, 751.0], [68.2, 751.0], [68.3, 751.0], [68.4, 751.0], [68.5, 751.0], [68.6, 751.0], [68.7, 751.0], [68.8, 751.0], [68.9, 751.0], [69.0, 751.0], [69.1, 751.0], [69.2, 751.0], [69.3, 751.0], [69.4, 751.0], [69.5, 751.0], [69.6, 751.0], [69.7, 751.0], [69.8, 751.0], [69.9, 751.0], [70.0, 776.0], [70.1, 776.0], [70.2, 776.0], [70.3, 776.0], [70.4, 776.0], [70.5, 776.0], [70.6, 776.0], [70.7, 776.0], [70.8, 776.0], [70.9, 776.0], [71.0, 776.0], [71.1, 776.0], [71.2, 776.0], [71.3, 776.0], [71.4, 776.0], [71.5, 776.0], [71.6, 776.0], [71.7, 776.0], [71.8, 776.0], [71.9, 776.0], [72.0, 803.0], [72.1, 803.0], [72.2, 803.0], [72.3, 803.0], [72.4, 803.0], [72.5, 803.0], [72.6, 803.0], [72.7, 803.0], [72.8, 803.0], [72.9, 803.0], [73.0, 803.0], [73.1, 803.0], [73.2, 803.0], [73.3, 803.0], [73.4, 803.0], [73.5, 803.0], [73.6, 803.0], [73.7, 803.0], [73.8, 803.0], [73.9, 803.0], [74.0, 804.0], [74.1, 804.0], [74.2, 804.0], [74.3, 804.0], [74.4, 804.0], [74.5, 804.0], [74.6, 804.0], [74.7, 804.0], [74.8, 804.0], [74.9, 804.0], [75.0, 804.0], [75.1, 804.0], [75.2, 804.0], [75.3, 804.0], [75.4, 804.0], [75.5, 804.0], [75.6, 804.0], [75.7, 804.0], [75.8, 804.0], [75.9, 804.0], [76.0, 804.0], [76.1, 804.0], [76.2, 804.0], [76.3, 804.0], [76.4, 804.0], [76.5, 804.0], [76.6, 804.0], [76.7, 804.0], [76.8, 804.0], [76.9, 804.0], [77.0, 804.0], [77.1, 804.0], [77.2, 804.0], [77.3, 804.0], [77.4, 804.0], [77.5, 804.0], [77.6, 804.0], [77.7, 804.0], [77.8, 804.0], [77.9, 804.0], [78.0, 806.0], [78.1, 806.0], [78.2, 806.0], [78.3, 806.0], [78.4, 806.0], [78.5, 806.0], [78.6, 806.0], [78.7, 806.0], [78.8, 806.0], [78.9, 806.0], [79.0, 806.0], [79.1, 806.0], [79.2, 806.0], [79.3, 806.0], [79.4, 806.0], [79.5, 806.0], [79.6, 806.0], [79.7, 806.0], [79.8, 806.0], [79.9, 806.0], [80.0, 811.0], [80.1, 811.0], [80.2, 811.0], [80.3, 811.0], [80.4, 811.0], [80.5, 811.0], [80.6, 811.0], [80.7, 811.0], [80.8, 811.0], [80.9, 811.0], [81.0, 811.0], [81.1, 811.0], [81.2, 811.0], [81.3, 811.0], [81.4, 811.0], [81.5, 811.0], [81.6, 811.0], [81.7, 811.0], [81.8, 811.0], [81.9, 811.0], [82.0, 811.0], [82.1, 811.0], [82.2, 811.0], [82.3, 811.0], [82.4, 811.0], [82.5, 811.0], [82.6, 811.0], [82.7, 811.0], [82.8, 811.0], [82.9, 811.0], [83.0, 811.0], [83.1, 811.0], [83.2, 811.0], [83.3, 811.0], [83.4, 811.0], [83.5, 811.0], [83.6, 811.0], [83.7, 811.0], [83.8, 811.0], [83.9, 811.0], [84.0, 812.0], [84.1, 812.0], [84.2, 812.0], [84.3, 812.0], [84.4, 812.0], [84.5, 812.0], [84.6, 812.0], [84.7, 812.0], [84.8, 812.0], [84.9, 812.0], [85.0, 812.0], [85.1, 812.0], [85.2, 812.0], [85.3, 812.0], [85.4, 812.0], [85.5, 812.0], [85.6, 812.0], [85.7, 812.0], [85.8, 812.0], [85.9, 812.0], [86.0, 815.0], [86.1, 815.0], [86.2, 815.0], [86.3, 815.0], [86.4, 815.0], [86.5, 815.0], [86.6, 815.0], [86.7, 815.0], [86.8, 815.0], [86.9, 815.0], [87.0, 815.0], [87.1, 815.0], [87.2, 815.0], [87.3, 815.0], [87.4, 815.0], [87.5, 815.0], [87.6, 815.0], [87.7, 815.0], [87.8, 815.0], [87.9, 815.0], [88.0, 815.0], [88.1, 815.0], [88.2, 815.0], [88.3, 815.0], [88.4, 815.0], [88.5, 815.0], [88.6, 815.0], [88.7, 815.0], [88.8, 815.0], [88.9, 815.0], [89.0, 815.0], [89.1, 815.0], [89.2, 815.0], [89.3, 815.0], [89.4, 815.0], [89.5, 815.0], [89.6, 815.0], [89.7, 815.0], [89.8, 815.0], [89.9, 815.0], [90.0, 820.0], [90.1, 820.0], [90.2, 820.0], [90.3, 820.0], [90.4, 820.0], [90.5, 820.0], [90.6, 820.0], [90.7, 820.0], [90.8, 820.0], [90.9, 820.0], [91.0, 820.0], [91.1, 820.0], [91.2, 820.0], [91.3, 820.0], [91.4, 820.0], [91.5, 820.0], [91.6, 820.0], [91.7, 820.0], [91.8, 820.0], [91.9, 820.0], [92.0, 822.0], [92.1, 822.0], [92.2, 822.0], [92.3, 822.0], [92.4, 822.0], [92.5, 822.0], [92.6, 822.0], [92.7, 822.0], [92.8, 822.0], [92.9, 822.0], [93.0, 822.0], [93.1, 822.0], [93.2, 822.0], [93.3, 822.0], [93.4, 822.0], [93.5, 822.0], [93.6, 822.0], [93.7, 822.0], [93.8, 822.0], [93.9, 822.0], [94.0, 822.0], [94.1, 822.0], [94.2, 822.0], [94.3, 822.0], [94.4, 822.0], [94.5, 822.0], [94.6, 822.0], [94.7, 822.0], [94.8, 822.0], [94.9, 822.0], [95.0, 822.0], [95.1, 822.0], [95.2, 822.0], [95.3, 822.0], [95.4, 822.0], [95.5, 822.0], [95.6, 822.0], [95.7, 822.0], [95.8, 822.0], [95.9, 822.0], [96.0, 823.0], [96.1, 823.0], [96.2, 823.0], [96.3, 823.0], [96.4, 823.0], [96.5, 823.0], [96.6, 823.0], [96.7, 823.0], [96.8, 823.0], [96.9, 823.0], [97.0, 823.0], [97.1, 823.0], [97.2, 823.0], [97.3, 823.0], [97.4, 823.0], [97.5, 823.0], [97.6, 823.0], [97.7, 823.0], [97.8, 823.0], [97.9, 823.0], [98.0, 824.0], [98.1, 824.0], [98.2, 824.0], [98.3, 824.0], [98.4, 824.0], [98.5, 824.0], [98.6, 824.0], [98.7, 824.0], [98.8, 824.0], [98.9, 824.0], [99.0, 824.0], [99.1, 824.0], [99.2, 824.0], [99.3, 824.0], [99.4, 824.0], [99.5, 824.0], [99.6, 824.0], [99.7, 824.0], [99.8, 824.0], [99.9, 824.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 14.0, "series": [{"data": [[0.0, 6.0], [300.0, 2.0], [600.0, 5.0], [700.0, 5.0], [200.0, 5.0], [100.0, 5.0], [800.0, 14.0], [400.0, 4.0], [500.0, 4.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 22.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 28.0, "series": [{"data": [[0.0, 22.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 28.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 29.459999999999987, "minX": 1.57172736E12, "maxY": 29.459999999999987, "series": [{"data": [[1.57172736E12, 29.459999999999987]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 6.0, "maxY": 823.5, "series": [{"data": [[33.0, 10.0], [32.0, 702.0], [8.0, 822.0], [9.0, 822.0], [43.0, 11.0], [11.0, 506.0], [49.0, 165.0], [48.0, 247.5], [12.0, 820.0], [13.0, 740.0], [15.0, 688.5], [16.0, 659.0], [18.0, 640.0], [21.0, 703.3333333333334], [22.0, 633.5], [24.0, 811.0], [6.0, 823.5], [25.0, 811.0], [26.0, 493.0], [27.0, 591.6666666666666], [29.0, 707.0], [31.0, 803.5]], "isOverall": false, "label": "Access Live TV Page", "isController": false}, {"data": [[29.459999999999987, 502.68]], "isOverall": false, "label": "Access Live TV Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 49.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 188.33333333333334, "minX": 1.57172736E12, "maxY": 6578.333333333333, "series": [{"data": [[1.57172736E12, 6578.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57172736E12, 188.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 502.68, "minX": 1.57172736E12, "maxY": 502.68, "series": [{"data": [[1.57172736E12, 502.68]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 492.79999999999995, "minX": 1.57172736E12, "maxY": 492.79999999999995, "series": [{"data": [[1.57172736E12, 492.79999999999995]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 129.66, "minX": 1.57172736E12, "maxY": 129.66, "series": [{"data": [[1.57172736E12, 129.66]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.57172736E12, "maxY": 824.0, "series": [{"data": [[1.57172736E12, 824.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57172736E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57172736E12, 819.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57172736E12, 824.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57172736E12, 822.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 571.5, "minX": 50.0, "maxY": 571.5, "series": [{"data": [[50.0, 571.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 553.0, "minX": 50.0, "maxY": 553.0, "series": [{"data": [[50.0, 553.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 50.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57172736E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57172736E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57172736E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57172736E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57172736E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57172736E12, 0.8333333333333334]], "isOverall": false, "label": "Access Live TV Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.57172736E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.57172736E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Total Transactions Per Second"}},
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

