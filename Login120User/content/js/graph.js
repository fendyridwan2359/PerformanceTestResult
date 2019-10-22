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
        data: {"result": {"minY": 7654.0, "minX": 0.0, "maxY": 14943.0, "series": [{"data": [[0.0, 7654.0], [0.1, 7654.0], [0.2, 7654.0], [0.3, 7654.0], [0.4, 7654.0], [0.5, 7654.0], [0.6, 7654.0], [0.7, 7654.0], [0.8, 7654.0], [0.9, 7925.0], [1.0, 7925.0], [1.1, 7925.0], [1.2, 7925.0], [1.3, 7925.0], [1.4, 7925.0], [1.5, 7925.0], [1.6, 7925.0], [1.7, 8125.0], [1.8, 8125.0], [1.9, 8125.0], [2.0, 8125.0], [2.1, 8125.0], [2.2, 8125.0], [2.3, 8125.0], [2.4, 8125.0], [2.5, 8313.0], [2.6, 8313.0], [2.7, 8313.0], [2.8, 8313.0], [2.9, 8313.0], [3.0, 8313.0], [3.1, 8313.0], [3.2, 8313.0], [3.3, 8313.0], [3.4, 8358.0], [3.5, 8358.0], [3.6, 8358.0], [3.7, 8358.0], [3.8, 8358.0], [3.9, 8358.0], [4.0, 8358.0], [4.1, 8358.0], [4.2, 8531.0], [4.3, 8531.0], [4.4, 8531.0], [4.5, 8531.0], [4.6, 8531.0], [4.7, 8531.0], [4.8, 8531.0], [4.9, 8531.0], [5.0, 8599.0], [5.1, 8599.0], [5.2, 8599.0], [5.3, 8599.0], [5.4, 8599.0], [5.5, 8599.0], [5.6, 8599.0], [5.7, 8599.0], [5.8, 8599.0], [5.9, 8816.0], [6.0, 8816.0], [6.1, 8816.0], [6.2, 8816.0], [6.3, 8816.0], [6.4, 8816.0], [6.5, 8816.0], [6.6, 8816.0], [6.7, 8920.0], [6.8, 8920.0], [6.9, 8920.0], [7.0, 8920.0], [7.1, 8920.0], [7.2, 8920.0], [7.3, 8920.0], [7.4, 8920.0], [7.5, 8966.0], [7.6, 8966.0], [7.7, 8966.0], [7.8, 8966.0], [7.9, 8966.0], [8.0, 8966.0], [8.1, 8966.0], [8.2, 8966.0], [8.3, 8966.0], [8.4, 9613.0], [8.5, 9613.0], [8.6, 9613.0], [8.7, 9613.0], [8.8, 9613.0], [8.9, 9613.0], [9.0, 9613.0], [9.1, 9613.0], [9.2, 9733.0], [9.3, 9733.0], [9.4, 9733.0], [9.5, 9733.0], [9.6, 9733.0], [9.7, 9733.0], [9.8, 9733.0], [9.9, 9733.0], [10.0, 9825.0], [10.1, 9825.0], [10.2, 9825.0], [10.3, 9825.0], [10.4, 9825.0], [10.5, 9825.0], [10.6, 9825.0], [10.7, 9825.0], [10.8, 9825.0], [10.9, 9877.0], [11.0, 9877.0], [11.1, 9877.0], [11.2, 9877.0], [11.3, 9877.0], [11.4, 9877.0], [11.5, 9877.0], [11.6, 9877.0], [11.7, 9882.0], [11.8, 9882.0], [11.9, 9882.0], [12.0, 9882.0], [12.1, 9882.0], [12.2, 9882.0], [12.3, 9882.0], [12.4, 9882.0], [12.5, 9882.0], [12.6, 9929.0], [12.7, 9929.0], [12.8, 9929.0], [12.9, 9929.0], [13.0, 9929.0], [13.1, 9929.0], [13.2, 9929.0], [13.3, 9929.0], [13.4, 9941.0], [13.5, 9941.0], [13.6, 9941.0], [13.7, 9941.0], [13.8, 9941.0], [13.9, 9941.0], [14.0, 9941.0], [14.1, 9941.0], [14.2, 9942.0], [14.3, 9942.0], [14.4, 9942.0], [14.5, 9942.0], [14.6, 9942.0], [14.7, 9942.0], [14.8, 9942.0], [14.9, 9942.0], [15.0, 9942.0], [15.1, 9949.0], [15.2, 9949.0], [15.3, 9949.0], [15.4, 9949.0], [15.5, 9949.0], [15.6, 9949.0], [15.7, 9949.0], [15.8, 9949.0], [15.9, 9955.0], [16.0, 9955.0], [16.1, 9955.0], [16.2, 9955.0], [16.3, 9955.0], [16.4, 9955.0], [16.5, 9955.0], [16.6, 9955.0], [16.7, 9962.0], [16.8, 9962.0], [16.9, 9962.0], [17.0, 9962.0], [17.1, 9962.0], [17.2, 9962.0], [17.3, 9962.0], [17.4, 9962.0], [17.5, 9962.0], [17.6, 9964.0], [17.7, 9964.0], [17.8, 9964.0], [17.9, 9964.0], [18.0, 9964.0], [18.1, 9964.0], [18.2, 9964.0], [18.3, 9964.0], [18.4, 9997.0], [18.5, 9997.0], [18.6, 9997.0], [18.7, 9997.0], [18.8, 9997.0], [18.9, 9997.0], [19.0, 9997.0], [19.1, 9997.0], [19.2, 9999.0], [19.3, 9999.0], [19.4, 9999.0], [19.5, 9999.0], [19.6, 9999.0], [19.7, 9999.0], [19.8, 9999.0], [19.9, 9999.0], [20.0, 10001.0], [20.1, 10001.0], [20.2, 10001.0], [20.3, 10001.0], [20.4, 10001.0], [20.5, 10001.0], [20.6, 10001.0], [20.7, 10001.0], [20.8, 10001.0], [20.9, 10023.0], [21.0, 10023.0], [21.1, 10023.0], [21.2, 10023.0], [21.3, 10023.0], [21.4, 10023.0], [21.5, 10023.0], [21.6, 10023.0], [21.7, 10025.0], [21.8, 10025.0], [21.9, 10025.0], [22.0, 10025.0], [22.1, 10025.0], [22.2, 10025.0], [22.3, 10025.0], [22.4, 10025.0], [22.5, 10029.0], [22.6, 10029.0], [22.7, 10029.0], [22.8, 10029.0], [22.9, 10029.0], [23.0, 10029.0], [23.1, 10029.0], [23.2, 10029.0], [23.3, 10029.0], [23.4, 10057.0], [23.5, 10057.0], [23.6, 10057.0], [23.7, 10057.0], [23.8, 10057.0], [23.9, 10057.0], [24.0, 10057.0], [24.1, 10057.0], [24.2, 10061.0], [24.3, 10061.0], [24.4, 10061.0], [24.5, 10061.0], [24.6, 10061.0], [24.7, 10061.0], [24.8, 10061.0], [24.9, 10061.0], [25.0, 10127.0], [25.1, 10127.0], [25.2, 10127.0], [25.3, 10127.0], [25.4, 10127.0], [25.5, 10127.0], [25.6, 10127.0], [25.7, 10127.0], [25.8, 10127.0], [25.9, 10347.0], [26.0, 10347.0], [26.1, 10347.0], [26.2, 10347.0], [26.3, 10347.0], [26.4, 10347.0], [26.5, 10347.0], [26.6, 10347.0], [26.7, 10359.0], [26.8, 10359.0], [26.9, 10359.0], [27.0, 10359.0], [27.1, 10359.0], [27.2, 10359.0], [27.3, 10359.0], [27.4, 10359.0], [27.5, 10543.0], [27.6, 10543.0], [27.7, 10543.0], [27.8, 10543.0], [27.9, 10543.0], [28.0, 10543.0], [28.1, 10543.0], [28.2, 10543.0], [28.3, 10543.0], [28.4, 10567.0], [28.5, 10567.0], [28.6, 10567.0], [28.7, 10567.0], [28.8, 10567.0], [28.9, 10567.0], [29.0, 10567.0], [29.1, 10567.0], [29.2, 10574.0], [29.3, 10574.0], [29.4, 10574.0], [29.5, 10574.0], [29.6, 10574.0], [29.7, 10574.0], [29.8, 10574.0], [29.9, 10574.0], [30.0, 10580.0], [30.1, 10580.0], [30.2, 10580.0], [30.3, 10580.0], [30.4, 10580.0], [30.5, 10580.0], [30.6, 10580.0], [30.7, 10580.0], [30.8, 10580.0], [30.9, 10676.0], [31.0, 10676.0], [31.1, 10676.0], [31.2, 10676.0], [31.3, 10676.0], [31.4, 10676.0], [31.5, 10676.0], [31.6, 10676.0], [31.7, 10691.0], [31.8, 10691.0], [31.9, 10691.0], [32.0, 10691.0], [32.1, 10691.0], [32.2, 10691.0], [32.3, 10691.0], [32.4, 10691.0], [32.5, 10695.0], [32.6, 10695.0], [32.7, 10695.0], [32.8, 10695.0], [32.9, 10695.0], [33.0, 10695.0], [33.1, 10695.0], [33.2, 10695.0], [33.3, 10695.0], [33.4, 10746.0], [33.5, 10746.0], [33.6, 10746.0], [33.7, 10746.0], [33.8, 10746.0], [33.9, 10746.0], [34.0, 10746.0], [34.1, 10746.0], [34.2, 10870.0], [34.3, 10870.0], [34.4, 10870.0], [34.5, 10870.0], [34.6, 10870.0], [34.7, 10870.0], [34.8, 10870.0], [34.9, 10870.0], [35.0, 10994.0], [35.1, 10994.0], [35.2, 10994.0], [35.3, 10994.0], [35.4, 10994.0], [35.5, 10994.0], [35.6, 10994.0], [35.7, 10994.0], [35.8, 10994.0], [35.9, 11043.0], [36.0, 11043.0], [36.1, 11043.0], [36.2, 11043.0], [36.3, 11043.0], [36.4, 11043.0], [36.5, 11043.0], [36.6, 11043.0], [36.7, 11071.0], [36.8, 11071.0], [36.9, 11071.0], [37.0, 11071.0], [37.1, 11071.0], [37.2, 11071.0], [37.3, 11071.0], [37.4, 11071.0], [37.5, 11102.0], [37.6, 11102.0], [37.7, 11102.0], [37.8, 11102.0], [37.9, 11102.0], [38.0, 11102.0], [38.1, 11102.0], [38.2, 11102.0], [38.3, 11102.0], [38.4, 11193.0], [38.5, 11193.0], [38.6, 11193.0], [38.7, 11193.0], [38.8, 11193.0], [38.9, 11193.0], [39.0, 11193.0], [39.1, 11193.0], [39.2, 11197.0], [39.3, 11197.0], [39.4, 11197.0], [39.5, 11197.0], [39.6, 11197.0], [39.7, 11197.0], [39.8, 11197.0], [39.9, 11197.0], [40.0, 11197.0], [40.1, 11202.0], [40.2, 11202.0], [40.3, 11202.0], [40.4, 11202.0], [40.5, 11202.0], [40.6, 11202.0], [40.7, 11202.0], [40.8, 11202.0], [40.9, 11255.0], [41.0, 11255.0], [41.1, 11255.0], [41.2, 11255.0], [41.3, 11255.0], [41.4, 11255.0], [41.5, 11255.0], [41.6, 11255.0], [41.7, 11271.0], [41.8, 11271.0], [41.9, 11271.0], [42.0, 11271.0], [42.1, 11271.0], [42.2, 11271.0], [42.3, 11271.0], [42.4, 11271.0], [42.5, 11271.0], [42.6, 11382.0], [42.7, 11382.0], [42.8, 11382.0], [42.9, 11382.0], [43.0, 11382.0], [43.1, 11382.0], [43.2, 11382.0], [43.3, 11382.0], [43.4, 11423.0], [43.5, 11423.0], [43.6, 11423.0], [43.7, 11423.0], [43.8, 11423.0], [43.9, 11423.0], [44.0, 11423.0], [44.1, 11423.0], [44.2, 11572.0], [44.3, 11572.0], [44.4, 11572.0], [44.5, 11572.0], [44.6, 11572.0], [44.7, 11572.0], [44.8, 11572.0], [44.9, 11572.0], [45.0, 11572.0], [45.1, 11585.0], [45.2, 11585.0], [45.3, 11585.0], [45.4, 11585.0], [45.5, 11585.0], [45.6, 11585.0], [45.7, 11585.0], [45.8, 11585.0], [45.9, 11733.0], [46.0, 11733.0], [46.1, 11733.0], [46.2, 11733.0], [46.3, 11733.0], [46.4, 11733.0], [46.5, 11733.0], [46.6, 11733.0], [46.7, 11789.0], [46.8, 11789.0], [46.9, 11789.0], [47.0, 11789.0], [47.1, 11789.0], [47.2, 11789.0], [47.3, 11789.0], [47.4, 11789.0], [47.5, 11789.0], [47.6, 11794.0], [47.7, 11794.0], [47.8, 11794.0], [47.9, 11794.0], [48.0, 11794.0], [48.1, 11794.0], [48.2, 11794.0], [48.3, 11794.0], [48.4, 11805.0], [48.5, 11805.0], [48.6, 11805.0], [48.7, 11805.0], [48.8, 11805.0], [48.9, 11805.0], [49.0, 11805.0], [49.1, 11805.0], [49.2, 11839.0], [49.3, 11839.0], [49.4, 11839.0], [49.5, 11839.0], [49.6, 11839.0], [49.7, 11839.0], [49.8, 11839.0], [49.9, 11839.0], [50.0, 11839.0], [50.1, 11839.0], [50.2, 11839.0], [50.3, 11839.0], [50.4, 11839.0], [50.5, 11839.0], [50.6, 11839.0], [50.7, 11839.0], [50.8, 11839.0], [50.9, 11839.0], [51.0, 11839.0], [51.1, 11839.0], [51.2, 11839.0], [51.3, 11839.0], [51.4, 11839.0], [51.5, 11839.0], [51.6, 11839.0], [51.7, 12089.0], [51.8, 12089.0], [51.9, 12089.0], [52.0, 12089.0], [52.1, 12089.0], [52.2, 12089.0], [52.3, 12089.0], [52.4, 12089.0], [52.5, 12089.0], [52.6, 12102.0], [52.7, 12102.0], [52.8, 12102.0], [52.9, 12102.0], [53.0, 12102.0], [53.1, 12102.0], [53.2, 12102.0], [53.3, 12102.0], [53.4, 12115.0], [53.5, 12115.0], [53.6, 12115.0], [53.7, 12115.0], [53.8, 12115.0], [53.9, 12115.0], [54.0, 12115.0], [54.1, 12115.0], [54.2, 12116.0], [54.3, 12116.0], [54.4, 12116.0], [54.5, 12116.0], [54.6, 12116.0], [54.7, 12116.0], [54.8, 12116.0], [54.9, 12116.0], [55.0, 12116.0], [55.1, 12167.0], [55.2, 12167.0], [55.3, 12167.0], [55.4, 12167.0], [55.5, 12167.0], [55.6, 12167.0], [55.7, 12167.0], [55.8, 12167.0], [55.9, 12169.0], [56.0, 12169.0], [56.1, 12169.0], [56.2, 12169.0], [56.3, 12169.0], [56.4, 12169.0], [56.5, 12169.0], [56.6, 12169.0], [56.7, 12197.0], [56.8, 12197.0], [56.9, 12197.0], [57.0, 12197.0], [57.1, 12197.0], [57.2, 12197.0], [57.3, 12197.0], [57.4, 12197.0], [57.5, 12197.0], [57.6, 12323.0], [57.7, 12323.0], [57.8, 12323.0], [57.9, 12323.0], [58.0, 12323.0], [58.1, 12323.0], [58.2, 12323.0], [58.3, 12323.0], [58.4, 12339.0], [58.5, 12339.0], [58.6, 12339.0], [58.7, 12339.0], [58.8, 12339.0], [58.9, 12339.0], [59.0, 12339.0], [59.1, 12339.0], [59.2, 12402.0], [59.3, 12402.0], [59.4, 12402.0], [59.5, 12402.0], [59.6, 12402.0], [59.7, 12402.0], [59.8, 12402.0], [59.9, 12402.0], [60.0, 12402.0], [60.1, 12422.0], [60.2, 12422.0], [60.3, 12422.0], [60.4, 12422.0], [60.5, 12422.0], [60.6, 12422.0], [60.7, 12422.0], [60.8, 12422.0], [60.9, 12443.0], [61.0, 12443.0], [61.1, 12443.0], [61.2, 12443.0], [61.3, 12443.0], [61.4, 12443.0], [61.5, 12443.0], [61.6, 12443.0], [61.7, 12446.0], [61.8, 12446.0], [61.9, 12446.0], [62.0, 12446.0], [62.1, 12446.0], [62.2, 12446.0], [62.3, 12446.0], [62.4, 12446.0], [62.5, 12446.0], [62.6, 12542.0], [62.7, 12542.0], [62.8, 12542.0], [62.9, 12542.0], [63.0, 12542.0], [63.1, 12542.0], [63.2, 12542.0], [63.3, 12542.0], [63.4, 12686.0], [63.5, 12686.0], [63.6, 12686.0], [63.7, 12686.0], [63.8, 12686.0], [63.9, 12686.0], [64.0, 12686.0], [64.1, 12686.0], [64.2, 12720.0], [64.3, 12720.0], [64.4, 12720.0], [64.5, 12720.0], [64.6, 12720.0], [64.7, 12720.0], [64.8, 12720.0], [64.9, 12720.0], [65.0, 12720.0], [65.1, 12765.0], [65.2, 12765.0], [65.3, 12765.0], [65.4, 12765.0], [65.5, 12765.0], [65.6, 12765.0], [65.7, 12765.0], [65.8, 12765.0], [65.9, 12774.0], [66.0, 12774.0], [66.1, 12774.0], [66.2, 12774.0], [66.3, 12774.0], [66.4, 12774.0], [66.5, 12774.0], [66.6, 12774.0], [66.7, 12781.0], [66.8, 12781.0], [66.9, 12781.0], [67.0, 12781.0], [67.1, 12781.0], [67.2, 12781.0], [67.3, 12781.0], [67.4, 12781.0], [67.5, 12781.0], [67.6, 12791.0], [67.7, 12791.0], [67.8, 12791.0], [67.9, 12791.0], [68.0, 12791.0], [68.1, 12791.0], [68.2, 12791.0], [68.3, 12791.0], [68.4, 12870.0], [68.5, 12870.0], [68.6, 12870.0], [68.7, 12870.0], [68.8, 12870.0], [68.9, 12870.0], [69.0, 12870.0], [69.1, 12870.0], [69.2, 12874.0], [69.3, 12874.0], [69.4, 12874.0], [69.5, 12874.0], [69.6, 12874.0], [69.7, 12874.0], [69.8, 12874.0], [69.9, 12874.0], [70.0, 12874.0], [70.1, 13000.0], [70.2, 13000.0], [70.3, 13000.0], [70.4, 13000.0], [70.5, 13000.0], [70.6, 13000.0], [70.7, 13000.0], [70.8, 13000.0], [70.9, 13009.0], [71.0, 13009.0], [71.1, 13009.0], [71.2, 13009.0], [71.3, 13009.0], [71.4, 13009.0], [71.5, 13009.0], [71.6, 13009.0], [71.7, 13013.0], [71.8, 13013.0], [71.9, 13013.0], [72.0, 13013.0], [72.1, 13013.0], [72.2, 13013.0], [72.3, 13013.0], [72.4, 13013.0], [72.5, 13013.0], [72.6, 13201.0], [72.7, 13201.0], [72.8, 13201.0], [72.9, 13201.0], [73.0, 13201.0], [73.1, 13201.0], [73.2, 13201.0], [73.3, 13201.0], [73.4, 13323.0], [73.5, 13323.0], [73.6, 13323.0], [73.7, 13323.0], [73.8, 13323.0], [73.9, 13323.0], [74.0, 13323.0], [74.1, 13323.0], [74.2, 13371.0], [74.3, 13371.0], [74.4, 13371.0], [74.5, 13371.0], [74.6, 13371.0], [74.7, 13371.0], [74.8, 13371.0], [74.9, 13371.0], [75.0, 13498.0], [75.1, 13498.0], [75.2, 13498.0], [75.3, 13498.0], [75.4, 13498.0], [75.5, 13498.0], [75.6, 13498.0], [75.7, 13498.0], [75.8, 13498.0], [75.9, 13566.0], [76.0, 13566.0], [76.1, 13566.0], [76.2, 13566.0], [76.3, 13566.0], [76.4, 13566.0], [76.5, 13566.0], [76.6, 13566.0], [76.7, 13567.0], [76.8, 13567.0], [76.9, 13567.0], [77.0, 13567.0], [77.1, 13567.0], [77.2, 13567.0], [77.3, 13567.0], [77.4, 13567.0], [77.5, 13583.0], [77.6, 13583.0], [77.7, 13583.0], [77.8, 13583.0], [77.9, 13583.0], [78.0, 13583.0], [78.1, 13583.0], [78.2, 13583.0], [78.3, 13583.0], [78.4, 13769.0], [78.5, 13769.0], [78.6, 13769.0], [78.7, 13769.0], [78.8, 13769.0], [78.9, 13769.0], [79.0, 13769.0], [79.1, 13769.0], [79.2, 13805.0], [79.3, 13805.0], [79.4, 13805.0], [79.5, 13805.0], [79.6, 13805.0], [79.7, 13805.0], [79.8, 13805.0], [79.9, 13805.0], [80.0, 13852.0], [80.1, 13852.0], [80.2, 13852.0], [80.3, 13852.0], [80.4, 13852.0], [80.5, 13852.0], [80.6, 13852.0], [80.7, 13852.0], [80.8, 13852.0], [80.9, 13872.0], [81.0, 13872.0], [81.1, 13872.0], [81.2, 13872.0], [81.3, 13872.0], [81.4, 13872.0], [81.5, 13872.0], [81.6, 13872.0], [81.7, 13886.0], [81.8, 13886.0], [81.9, 13886.0], [82.0, 13886.0], [82.1, 13886.0], [82.2, 13886.0], [82.3, 13886.0], [82.4, 13886.0], [82.5, 14099.0], [82.6, 14099.0], [82.7, 14099.0], [82.8, 14099.0], [82.9, 14099.0], [83.0, 14099.0], [83.1, 14099.0], [83.2, 14099.0], [83.3, 14099.0], [83.4, 14140.0], [83.5, 14140.0], [83.6, 14140.0], [83.7, 14140.0], [83.8, 14140.0], [83.9, 14140.0], [84.0, 14140.0], [84.1, 14140.0], [84.2, 14207.0], [84.3, 14207.0], [84.4, 14207.0], [84.5, 14207.0], [84.6, 14207.0], [84.7, 14207.0], [84.8, 14207.0], [84.9, 14207.0], [85.0, 14253.0], [85.1, 14253.0], [85.2, 14253.0], [85.3, 14253.0], [85.4, 14253.0], [85.5, 14253.0], [85.6, 14253.0], [85.7, 14253.0], [85.8, 14253.0], [85.9, 14257.0], [86.0, 14257.0], [86.1, 14257.0], [86.2, 14257.0], [86.3, 14257.0], [86.4, 14257.0], [86.5, 14257.0], [86.6, 14257.0], [86.7, 14286.0], [86.8, 14286.0], [86.9, 14286.0], [87.0, 14286.0], [87.1, 14286.0], [87.2, 14286.0], [87.3, 14286.0], [87.4, 14286.0], [87.5, 14323.0], [87.6, 14323.0], [87.7, 14323.0], [87.8, 14323.0], [87.9, 14323.0], [88.0, 14323.0], [88.1, 14323.0], [88.2, 14323.0], [88.3, 14323.0], [88.4, 14436.0], [88.5, 14436.0], [88.6, 14436.0], [88.7, 14436.0], [88.8, 14436.0], [88.9, 14436.0], [89.0, 14436.0], [89.1, 14436.0], [89.2, 14438.0], [89.3, 14438.0], [89.4, 14438.0], [89.5, 14438.0], [89.6, 14438.0], [89.7, 14438.0], [89.8, 14438.0], [89.9, 14438.0], [90.0, 14616.0], [90.1, 14616.0], [90.2, 14616.0], [90.3, 14616.0], [90.4, 14616.0], [90.5, 14616.0], [90.6, 14616.0], [90.7, 14616.0], [90.8, 14616.0], [90.9, 14663.0], [91.0, 14663.0], [91.1, 14663.0], [91.2, 14663.0], [91.3, 14663.0], [91.4, 14663.0], [91.5, 14663.0], [91.6, 14663.0], [91.7, 14717.0], [91.8, 14717.0], [91.9, 14717.0], [92.0, 14717.0], [92.1, 14717.0], [92.2, 14717.0], [92.3, 14717.0], [92.4, 14717.0], [92.5, 14838.0], [92.6, 14838.0], [92.7, 14838.0], [92.8, 14838.0], [92.9, 14838.0], [93.0, 14838.0], [93.1, 14838.0], [93.2, 14838.0], [93.3, 14838.0], [93.4, 14860.0], [93.5, 14860.0], [93.6, 14860.0], [93.7, 14860.0], [93.8, 14860.0], [93.9, 14860.0], [94.0, 14860.0], [94.1, 14860.0], [94.2, 14866.0], [94.3, 14866.0], [94.4, 14866.0], [94.5, 14866.0], [94.6, 14866.0], [94.7, 14866.0], [94.8, 14866.0], [94.9, 14866.0], [95.0, 14885.0], [95.1, 14885.0], [95.2, 14885.0], [95.3, 14885.0], [95.4, 14885.0], [95.5, 14885.0], [95.6, 14885.0], [95.7, 14885.0], [95.8, 14885.0], [95.9, 14889.0], [96.0, 14889.0], [96.1, 14889.0], [96.2, 14889.0], [96.3, 14889.0], [96.4, 14889.0], [96.5, 14889.0], [96.6, 14889.0], [96.7, 14895.0], [96.8, 14895.0], [96.9, 14895.0], [97.0, 14895.0], [97.1, 14895.0], [97.2, 14895.0], [97.3, 14895.0], [97.4, 14895.0], [97.5, 14927.0], [97.6, 14927.0], [97.7, 14927.0], [97.8, 14927.0], [97.9, 14927.0], [98.0, 14927.0], [98.1, 14927.0], [98.2, 14927.0], [98.3, 14927.0], [98.4, 14931.0], [98.5, 14931.0], [98.6, 14931.0], [98.7, 14931.0], [98.8, 14931.0], [98.9, 14931.0], [99.0, 14931.0], [99.1, 14931.0], [99.2, 14943.0], [99.3, 14943.0], [99.4, 14943.0], [99.5, 14943.0], [99.6, 14943.0], [99.7, 14943.0], [99.8, 14943.0], [99.9, 14943.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7600.0, "maxY": 9.0, "series": [{"data": [[7600.0, 1.0], [7900.0, 1.0], [8100.0, 1.0], [8300.0, 2.0], [8500.0, 2.0], [8800.0, 1.0], [8900.0, 2.0], [9600.0, 1.0], [9700.0, 1.0], [9900.0, 9.0], [9800.0, 3.0], [10000.0, 6.0], [10100.0, 1.0], [10300.0, 2.0], [10500.0, 4.0], [10600.0, 3.0], [10700.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [11000.0, 2.0], [11100.0, 3.0], [11200.0, 3.0], [11300.0, 1.0], [11500.0, 2.0], [11400.0, 1.0], [11700.0, 3.0], [11800.0, 4.0], [12100.0, 6.0], [12000.0, 1.0], [12400.0, 4.0], [12300.0, 2.0], [12700.0, 5.0], [12500.0, 1.0], [12600.0, 1.0], [12800.0, 2.0], [13000.0, 3.0], [13200.0, 1.0], [13300.0, 2.0], [13500.0, 3.0], [13400.0, 1.0], [13700.0, 1.0], [13800.0, 4.0], [14100.0, 1.0], [14200.0, 4.0], [14000.0, 1.0], [14300.0, 1.0], [14400.0, 2.0], [14600.0, 2.0], [14700.0, 1.0], [14800.0, 6.0], [14900.0, 3.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 120.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 120.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 120.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 60.64166666666663, "minX": 1.57171836E12, "maxY": 60.64166666666663, "series": [{"data": [[1.57171836E12, 60.64166666666663]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171836E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7654.0, "minX": 1.0, "maxY": 14943.0, "series": [{"data": [[2.0, 14943.0], [3.0, 14927.0], [4.0, 14895.0], [5.0, 14885.0], [6.0, 14889.0], [7.0, 14866.0], [8.0, 14860.0], [9.0, 14838.0], [10.0, 14717.0], [11.0, 14663.0], [12.0, 14616.0], [13.0, 14436.0], [14.0, 14438.0], [15.0, 14323.0], [16.0, 14099.0], [17.0, 14286.0], [18.0, 14207.0], [19.0, 14257.0], [20.0, 14253.0], [21.0, 14140.0], [22.0, 13872.0], [23.0, 13886.0], [24.0, 13852.0], [25.0, 13805.0], [26.0, 13769.0], [27.0, 13371.0], [28.0, 13323.0], [29.0, 13498.0], [30.0, 13583.0], [31.0, 13567.0], [33.0, 13201.0], [32.0, 13566.0], [35.0, 13013.0], [34.0, 13000.0], [37.0, 13009.0], [36.0, 12870.0], [39.0, 12819.5], [41.0, 12791.0], [40.0, 12774.0], [43.0, 12686.0], [42.0, 12781.0], [45.0, 12422.0], [44.0, 12542.0], [47.0, 12339.0], [46.0, 12720.0], [49.0, 12197.0], [48.0, 12323.0], [51.0, 12167.0], [50.0, 12446.0], [53.0, 12402.0], [52.0, 12443.0], [55.0, 12116.0], [54.0, 12089.0], [57.0, 12102.0], [56.0, 12169.0], [59.0, 11839.0], [58.0, 12115.0], [61.0, 11839.0], [63.0, 11794.0], [62.0, 11805.0], [67.0, 11423.0], [65.0, 11761.0], [71.0, 11271.0], [70.0, 11197.0], [69.0, 11382.0], [68.0, 11578.5], [75.0, 11147.5], [73.0, 11202.0], [72.0, 11255.0], [79.0, 10870.0], [78.0, 10994.0], [77.0, 11043.0], [76.0, 11071.0], [83.0, 10580.0], [82.0, 10691.0], [81.0, 10695.0], [80.0, 10746.0], [87.0, 10543.0], [86.0, 10567.0], [85.0, 10574.0], [84.0, 10676.0], [90.0, 10127.0], [89.0, 10347.0], [88.0, 10359.0], [95.0, 9961.75], [93.0, 10061.0], [99.0, 10025.0], [98.0, 10023.0], [97.0, 10014.0], [103.0, 9882.0], [102.0, 9913.0], [100.0, 9997.0], [107.0, 9942.0], [106.0, 9955.0], [105.0, 9962.0], [104.0, 9941.0], [111.0, 8966.0], [110.0, 9613.0], [109.0, 9831.0], [115.0, 8531.0], [114.0, 8599.0], [113.0, 8816.0], [112.0, 8920.0], [119.0, 8125.0], [118.0, 7925.0], [117.0, 8358.0], [116.0, 8313.0], [120.0, 7654.0], [1.0, 14931.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[60.64166666666663, 11846.591666666667]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 120.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1034.35, "minX": 1.57171836E12, "maxY": 3220.0333333333333, "series": [{"data": [[1.57171836E12, 3220.0333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57171836E12, 1034.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171836E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11846.591666666667, "minX": 1.57171836E12, "maxY": 11846.591666666667, "series": [{"data": [[1.57171836E12, 11846.591666666667]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171836E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11748.591666666667, "minX": 1.57171836E12, "maxY": 11748.591666666667, "series": [{"data": [[1.57171836E12, 11748.591666666667]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171836E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1471.591666666667, "minX": 1.57171836E12, "maxY": 1471.591666666667, "series": [{"data": [[1.57171836E12, 1471.591666666667]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171836E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7654.0, "minX": 1.57171836E12, "maxY": 14943.0, "series": [{"data": [[1.57171836E12, 14943.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57171836E12, 7654.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57171836E12, 14598.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57171836E12, 14940.48]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57171836E12, 14884.05]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171836E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8025.0, "minX": 4.0, "maxY": 14875.5, "series": [{"data": [[4.0, 8025.0], [16.0, 12769.5], [19.0, 11402.5], [21.0, 13872.0], [23.0, 9964.0], [6.0, 8707.5], [12.0, 14875.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7923.5, "minX": 4.0, "maxY": 14776.0, "series": [{"data": [[4.0, 7923.5], [16.0, 12671.0], [19.0, 11303.0], [21.0, 13773.0], [23.0, 9863.0], [6.0, 8607.5], [12.0, 14776.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.57171836E12, "maxY": 2.0, "series": [{"data": [[1.57171836E12, 2.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171836E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.57171836E12, "maxY": 2.0, "series": [{"data": [[1.57171836E12, 2.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171836E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.57171836E12, "maxY": 2.0, "series": [{"data": [[1.57171836E12, 2.0]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171836E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.57171836E12, "maxY": 2.0, "series": [{"data": [[1.57171836E12, 2.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171836E12, "title": "Total Transactions Per Second"}},
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

