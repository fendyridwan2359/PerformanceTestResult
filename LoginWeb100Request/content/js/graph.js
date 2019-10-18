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
        data: {"result": {"minY": 12073.0, "minX": 0.0, "maxY": 20840.0, "series": [{"data": [[0.0, 12073.0], [0.1, 12073.0], [0.2, 12073.0], [0.3, 12073.0], [0.4, 12073.0], [0.5, 12073.0], [0.6, 12073.0], [0.7, 12073.0], [0.8, 12073.0], [0.9, 12073.0], [1.0, 12093.0], [1.1, 12093.0], [1.2, 12093.0], [1.3, 12093.0], [1.4, 12093.0], [1.5, 12093.0], [1.6, 12093.0], [1.7, 12093.0], [1.8, 12093.0], [1.9, 12093.0], [2.0, 12159.0], [2.1, 12159.0], [2.2, 12159.0], [2.3, 12159.0], [2.4, 12159.0], [2.5, 12159.0], [2.6, 12159.0], [2.7, 12159.0], [2.8, 12159.0], [2.9, 12159.0], [3.0, 12165.0], [3.1, 12165.0], [3.2, 12165.0], [3.3, 12165.0], [3.4, 12165.0], [3.5, 12165.0], [3.6, 12165.0], [3.7, 12165.0], [3.8, 12165.0], [3.9, 12165.0], [4.0, 12181.0], [4.1, 12181.0], [4.2, 12181.0], [4.3, 12181.0], [4.4, 12181.0], [4.5, 12181.0], [4.6, 12181.0], [4.7, 12181.0], [4.8, 12181.0], [4.9, 12181.0], [5.0, 12334.0], [5.1, 12334.0], [5.2, 12334.0], [5.3, 12334.0], [5.4, 12334.0], [5.5, 12334.0], [5.6, 12334.0], [5.7, 12334.0], [5.8, 12334.0], [5.9, 12334.0], [6.0, 12409.0], [6.1, 12409.0], [6.2, 12409.0], [6.3, 12409.0], [6.4, 12409.0], [6.5, 12409.0], [6.6, 12409.0], [6.7, 12409.0], [6.8, 12409.0], [6.9, 12409.0], [7.0, 12465.0], [7.1, 12465.0], [7.2, 12465.0], [7.3, 12465.0], [7.4, 12465.0], [7.5, 12465.0], [7.6, 12465.0], [7.7, 12465.0], [7.8, 12465.0], [7.9, 12465.0], [8.0, 12709.0], [8.1, 12709.0], [8.2, 12709.0], [8.3, 12709.0], [8.4, 12709.0], [8.5, 12709.0], [8.6, 12709.0], [8.7, 12709.0], [8.8, 12709.0], [8.9, 12709.0], [9.0, 12803.0], [9.1, 12803.0], [9.2, 12803.0], [9.3, 12803.0], [9.4, 12803.0], [9.5, 12803.0], [9.6, 12803.0], [9.7, 12803.0], [9.8, 12803.0], [9.9, 12803.0], [10.0, 12811.0], [10.1, 12811.0], [10.2, 12811.0], [10.3, 12811.0], [10.4, 12811.0], [10.5, 12811.0], [10.6, 12811.0], [10.7, 12811.0], [10.8, 12811.0], [10.9, 12811.0], [11.0, 12819.0], [11.1, 12819.0], [11.2, 12819.0], [11.3, 12819.0], [11.4, 12819.0], [11.5, 12819.0], [11.6, 12819.0], [11.7, 12819.0], [11.8, 12819.0], [11.9, 12819.0], [12.0, 12906.0], [12.1, 12906.0], [12.2, 12906.0], [12.3, 12906.0], [12.4, 12906.0], [12.5, 12906.0], [12.6, 12906.0], [12.7, 12906.0], [12.8, 12906.0], [12.9, 12906.0], [13.0, 13038.0], [13.1, 13038.0], [13.2, 13038.0], [13.3, 13038.0], [13.4, 13038.0], [13.5, 13038.0], [13.6, 13038.0], [13.7, 13038.0], [13.8, 13038.0], [13.9, 13038.0], [14.0, 13169.0], [14.1, 13169.0], [14.2, 13169.0], [14.3, 13169.0], [14.4, 13169.0], [14.5, 13169.0], [14.6, 13169.0], [14.7, 13169.0], [14.8, 13169.0], [14.9, 13169.0], [15.0, 13285.0], [15.1, 13285.0], [15.2, 13285.0], [15.3, 13285.0], [15.4, 13285.0], [15.5, 13285.0], [15.6, 13285.0], [15.7, 13285.0], [15.8, 13285.0], [15.9, 13285.0], [16.0, 13367.0], [16.1, 13367.0], [16.2, 13367.0], [16.3, 13367.0], [16.4, 13367.0], [16.5, 13367.0], [16.6, 13367.0], [16.7, 13367.0], [16.8, 13367.0], [16.9, 13367.0], [17.0, 13561.0], [17.1, 13561.0], [17.2, 13561.0], [17.3, 13561.0], [17.4, 13561.0], [17.5, 13561.0], [17.6, 13561.0], [17.7, 13561.0], [17.8, 13561.0], [17.9, 13561.0], [18.0, 13578.0], [18.1, 13578.0], [18.2, 13578.0], [18.3, 13578.0], [18.4, 13578.0], [18.5, 13578.0], [18.6, 13578.0], [18.7, 13578.0], [18.8, 13578.0], [18.9, 13578.0], [19.0, 13602.0], [19.1, 13602.0], [19.2, 13602.0], [19.3, 13602.0], [19.4, 13602.0], [19.5, 13602.0], [19.6, 13602.0], [19.7, 13602.0], [19.8, 13602.0], [19.9, 13602.0], [20.0, 13714.0], [20.1, 13714.0], [20.2, 13714.0], [20.3, 13714.0], [20.4, 13714.0], [20.5, 13714.0], [20.6, 13714.0], [20.7, 13714.0], [20.8, 13714.0], [20.9, 13714.0], [21.0, 13720.0], [21.1, 13720.0], [21.2, 13720.0], [21.3, 13720.0], [21.4, 13720.0], [21.5, 13720.0], [21.6, 13720.0], [21.7, 13720.0], [21.8, 13720.0], [21.9, 13720.0], [22.0, 13922.0], [22.1, 13922.0], [22.2, 13922.0], [22.3, 13922.0], [22.4, 13922.0], [22.5, 13922.0], [22.6, 13922.0], [22.7, 13922.0], [22.8, 13922.0], [22.9, 13922.0], [23.0, 14067.0], [23.1, 14067.0], [23.2, 14067.0], [23.3, 14067.0], [23.4, 14067.0], [23.5, 14067.0], [23.6, 14067.0], [23.7, 14067.0], [23.8, 14067.0], [23.9, 14067.0], [24.0, 14158.0], [24.1, 14158.0], [24.2, 14158.0], [24.3, 14158.0], [24.4, 14158.0], [24.5, 14158.0], [24.6, 14158.0], [24.7, 14158.0], [24.8, 14158.0], [24.9, 14158.0], [25.0, 14213.0], [25.1, 14213.0], [25.2, 14213.0], [25.3, 14213.0], [25.4, 14213.0], [25.5, 14213.0], [25.6, 14213.0], [25.7, 14213.0], [25.8, 14213.0], [25.9, 14213.0], [26.0, 14252.0], [26.1, 14252.0], [26.2, 14252.0], [26.3, 14252.0], [26.4, 14252.0], [26.5, 14252.0], [26.6, 14252.0], [26.7, 14252.0], [26.8, 14252.0], [26.9, 14252.0], [27.0, 14268.0], [27.1, 14268.0], [27.2, 14268.0], [27.3, 14268.0], [27.4, 14268.0], [27.5, 14268.0], [27.6, 14268.0], [27.7, 14268.0], [27.8, 14268.0], [27.9, 14268.0], [28.0, 14343.0], [28.1, 14343.0], [28.2, 14343.0], [28.3, 14343.0], [28.4, 14343.0], [28.5, 14343.0], [28.6, 14343.0], [28.7, 14343.0], [28.8, 14343.0], [28.9, 14343.0], [29.0, 14539.0], [29.1, 14539.0], [29.2, 14539.0], [29.3, 14539.0], [29.4, 14539.0], [29.5, 14539.0], [29.6, 14539.0], [29.7, 14539.0], [29.8, 14539.0], [29.9, 14539.0], [30.0, 14547.0], [30.1, 14547.0], [30.2, 14547.0], [30.3, 14547.0], [30.4, 14547.0], [30.5, 14547.0], [30.6, 14547.0], [30.7, 14547.0], [30.8, 14547.0], [30.9, 14547.0], [31.0, 14552.0], [31.1, 14552.0], [31.2, 14552.0], [31.3, 14552.0], [31.4, 14552.0], [31.5, 14552.0], [31.6, 14552.0], [31.7, 14552.0], [31.8, 14552.0], [31.9, 14552.0], [32.0, 14609.0], [32.1, 14609.0], [32.2, 14609.0], [32.3, 14609.0], [32.4, 14609.0], [32.5, 14609.0], [32.6, 14609.0], [32.7, 14609.0], [32.8, 14609.0], [32.9, 14609.0], [33.0, 14789.0], [33.1, 14789.0], [33.2, 14789.0], [33.3, 14789.0], [33.4, 14789.0], [33.5, 14789.0], [33.6, 14789.0], [33.7, 14789.0], [33.8, 14789.0], [33.9, 14789.0], [34.0, 14904.0], [34.1, 14904.0], [34.2, 14904.0], [34.3, 14904.0], [34.4, 14904.0], [34.5, 14904.0], [34.6, 14904.0], [34.7, 14904.0], [34.8, 14904.0], [34.9, 14904.0], [35.0, 15033.0], [35.1, 15033.0], [35.2, 15033.0], [35.3, 15033.0], [35.4, 15033.0], [35.5, 15033.0], [35.6, 15033.0], [35.7, 15033.0], [35.8, 15033.0], [35.9, 15033.0], [36.0, 15066.0], [36.1, 15066.0], [36.2, 15066.0], [36.3, 15066.0], [36.4, 15066.0], [36.5, 15066.0], [36.6, 15066.0], [36.7, 15066.0], [36.8, 15066.0], [36.9, 15066.0], [37.0, 15096.0], [37.1, 15096.0], [37.2, 15096.0], [37.3, 15096.0], [37.4, 15096.0], [37.5, 15096.0], [37.6, 15096.0], [37.7, 15096.0], [37.8, 15096.0], [37.9, 15096.0], [38.0, 15309.0], [38.1, 15309.0], [38.2, 15309.0], [38.3, 15309.0], [38.4, 15309.0], [38.5, 15309.0], [38.6, 15309.0], [38.7, 15309.0], [38.8, 15309.0], [38.9, 15309.0], [39.0, 15403.0], [39.1, 15403.0], [39.2, 15403.0], [39.3, 15403.0], [39.4, 15403.0], [39.5, 15403.0], [39.6, 15403.0], [39.7, 15403.0], [39.8, 15403.0], [39.9, 15403.0], [40.0, 15460.0], [40.1, 15460.0], [40.2, 15460.0], [40.3, 15460.0], [40.4, 15460.0], [40.5, 15460.0], [40.6, 15460.0], [40.7, 15460.0], [40.8, 15460.0], [40.9, 15460.0], [41.0, 15563.0], [41.1, 15563.0], [41.2, 15563.0], [41.3, 15563.0], [41.4, 15563.0], [41.5, 15563.0], [41.6, 15563.0], [41.7, 15563.0], [41.8, 15563.0], [41.9, 15563.0], [42.0, 15680.0], [42.1, 15680.0], [42.2, 15680.0], [42.3, 15680.0], [42.4, 15680.0], [42.5, 15680.0], [42.6, 15680.0], [42.7, 15680.0], [42.8, 15680.0], [42.9, 15680.0], [43.0, 15736.0], [43.1, 15736.0], [43.2, 15736.0], [43.3, 15736.0], [43.4, 15736.0], [43.5, 15736.0], [43.6, 15736.0], [43.7, 15736.0], [43.8, 15736.0], [43.9, 15736.0], [44.0, 15904.0], [44.1, 15904.0], [44.2, 15904.0], [44.3, 15904.0], [44.4, 15904.0], [44.5, 15904.0], [44.6, 15904.0], [44.7, 15904.0], [44.8, 15904.0], [44.9, 15904.0], [45.0, 15913.0], [45.1, 15913.0], [45.2, 15913.0], [45.3, 15913.0], [45.4, 15913.0], [45.5, 15913.0], [45.6, 15913.0], [45.7, 15913.0], [45.8, 15913.0], [45.9, 15913.0], [46.0, 15932.0], [46.1, 15932.0], [46.2, 15932.0], [46.3, 15932.0], [46.4, 15932.0], [46.5, 15932.0], [46.6, 15932.0], [46.7, 15932.0], [46.8, 15932.0], [46.9, 15932.0], [47.0, 15938.0], [47.1, 15938.0], [47.2, 15938.0], [47.3, 15938.0], [47.4, 15938.0], [47.5, 15938.0], [47.6, 15938.0], [47.7, 15938.0], [47.8, 15938.0], [47.9, 15938.0], [48.0, 15985.0], [48.1, 15985.0], [48.2, 15985.0], [48.3, 15985.0], [48.4, 15985.0], [48.5, 15985.0], [48.6, 15985.0], [48.7, 15985.0], [48.8, 15985.0], [48.9, 15985.0], [49.0, 16140.0], [49.1, 16140.0], [49.2, 16140.0], [49.3, 16140.0], [49.4, 16140.0], [49.5, 16140.0], [49.6, 16140.0], [49.7, 16140.0], [49.8, 16140.0], [49.9, 16140.0], [50.0, 16303.0], [50.1, 16303.0], [50.2, 16303.0], [50.3, 16303.0], [50.4, 16303.0], [50.5, 16303.0], [50.6, 16303.0], [50.7, 16303.0], [50.8, 16303.0], [50.9, 16303.0], [51.0, 16338.0], [51.1, 16338.0], [51.2, 16338.0], [51.3, 16338.0], [51.4, 16338.0], [51.5, 16338.0], [51.6, 16338.0], [51.7, 16338.0], [51.8, 16338.0], [51.9, 16338.0], [52.0, 16455.0], [52.1, 16455.0], [52.2, 16455.0], [52.3, 16455.0], [52.4, 16455.0], [52.5, 16455.0], [52.6, 16455.0], [52.7, 16455.0], [52.8, 16455.0], [52.9, 16455.0], [53.0, 16639.0], [53.1, 16639.0], [53.2, 16639.0], [53.3, 16639.0], [53.4, 16639.0], [53.5, 16639.0], [53.6, 16639.0], [53.7, 16639.0], [53.8, 16639.0], [53.9, 16639.0], [54.0, 16692.0], [54.1, 16692.0], [54.2, 16692.0], [54.3, 16692.0], [54.4, 16692.0], [54.5, 16692.0], [54.6, 16692.0], [54.7, 16692.0], [54.8, 16692.0], [54.9, 16692.0], [55.0, 16726.0], [55.1, 16726.0], [55.2, 16726.0], [55.3, 16726.0], [55.4, 16726.0], [55.5, 16726.0], [55.6, 16726.0], [55.7, 16726.0], [55.8, 16726.0], [55.9, 16726.0], [56.0, 16766.0], [56.1, 16766.0], [56.2, 16766.0], [56.3, 16766.0], [56.4, 16766.0], [56.5, 16766.0], [56.6, 16766.0], [56.7, 16766.0], [56.8, 16766.0], [56.9, 16766.0], [57.0, 16783.0], [57.1, 16783.0], [57.2, 16783.0], [57.3, 16783.0], [57.4, 16783.0], [57.5, 16783.0], [57.6, 16783.0], [57.7, 16783.0], [57.8, 16783.0], [57.9, 16783.0], [58.0, 16850.0], [58.1, 16850.0], [58.2, 16850.0], [58.3, 16850.0], [58.4, 16850.0], [58.5, 16850.0], [58.6, 16850.0], [58.7, 16850.0], [58.8, 16850.0], [58.9, 16850.0], [59.0, 16958.0], [59.1, 16958.0], [59.2, 16958.0], [59.3, 16958.0], [59.4, 16958.0], [59.5, 16958.0], [59.6, 16958.0], [59.7, 16958.0], [59.8, 16958.0], [59.9, 16958.0], [60.0, 16994.0], [60.1, 16994.0], [60.2, 16994.0], [60.3, 16994.0], [60.4, 16994.0], [60.5, 16994.0], [60.6, 16994.0], [60.7, 16994.0], [60.8, 16994.0], [60.9, 16994.0], [61.0, 17007.0], [61.1, 17007.0], [61.2, 17007.0], [61.3, 17007.0], [61.4, 17007.0], [61.5, 17007.0], [61.6, 17007.0], [61.7, 17007.0], [61.8, 17007.0], [61.9, 17007.0], [62.0, 17107.0], [62.1, 17107.0], [62.2, 17107.0], [62.3, 17107.0], [62.4, 17107.0], [62.5, 17107.0], [62.6, 17107.0], [62.7, 17107.0], [62.8, 17107.0], [62.9, 17107.0], [63.0, 17528.0], [63.1, 17528.0], [63.2, 17528.0], [63.3, 17528.0], [63.4, 17528.0], [63.5, 17528.0], [63.6, 17528.0], [63.7, 17528.0], [63.8, 17528.0], [63.9, 17528.0], [64.0, 17547.0], [64.1, 17547.0], [64.2, 17547.0], [64.3, 17547.0], [64.4, 17547.0], [64.5, 17547.0], [64.6, 17547.0], [64.7, 17547.0], [64.8, 17547.0], [64.9, 17547.0], [65.0, 17586.0], [65.1, 17586.0], [65.2, 17586.0], [65.3, 17586.0], [65.4, 17586.0], [65.5, 17586.0], [65.6, 17586.0], [65.7, 17586.0], [65.8, 17586.0], [65.9, 17586.0], [66.0, 17759.0], [66.1, 17759.0], [66.2, 17759.0], [66.3, 17759.0], [66.4, 17759.0], [66.5, 17759.0], [66.6, 17759.0], [66.7, 17759.0], [66.8, 17759.0], [66.9, 17759.0], [67.0, 17971.0], [67.1, 17971.0], [67.2, 17971.0], [67.3, 17971.0], [67.4, 17971.0], [67.5, 17971.0], [67.6, 17971.0], [67.7, 17971.0], [67.8, 17971.0], [67.9, 17971.0], [68.0, 18006.0], [68.1, 18006.0], [68.2, 18006.0], [68.3, 18006.0], [68.4, 18006.0], [68.5, 18006.0], [68.6, 18006.0], [68.7, 18006.0], [68.8, 18006.0], [68.9, 18006.0], [69.0, 18125.0], [69.1, 18125.0], [69.2, 18125.0], [69.3, 18125.0], [69.4, 18125.0], [69.5, 18125.0], [69.6, 18125.0], [69.7, 18125.0], [69.8, 18125.0], [69.9, 18125.0], [70.0, 18157.0], [70.1, 18157.0], [70.2, 18157.0], [70.3, 18157.0], [70.4, 18157.0], [70.5, 18157.0], [70.6, 18157.0], [70.7, 18157.0], [70.8, 18157.0], [70.9, 18157.0], [71.0, 18186.0], [71.1, 18186.0], [71.2, 18186.0], [71.3, 18186.0], [71.4, 18186.0], [71.5, 18186.0], [71.6, 18186.0], [71.7, 18186.0], [71.8, 18186.0], [71.9, 18186.0], [72.0, 18252.0], [72.1, 18252.0], [72.2, 18252.0], [72.3, 18252.0], [72.4, 18252.0], [72.5, 18252.0], [72.6, 18252.0], [72.7, 18252.0], [72.8, 18252.0], [72.9, 18252.0], [73.0, 18438.0], [73.1, 18438.0], [73.2, 18438.0], [73.3, 18438.0], [73.4, 18438.0], [73.5, 18438.0], [73.6, 18438.0], [73.7, 18438.0], [73.8, 18438.0], [73.9, 18438.0], [74.0, 18438.0], [74.1, 18438.0], [74.2, 18438.0], [74.3, 18438.0], [74.4, 18438.0], [74.5, 18438.0], [74.6, 18438.0], [74.7, 18438.0], [74.8, 18438.0], [74.9, 18438.0], [75.0, 18726.0], [75.1, 18726.0], [75.2, 18726.0], [75.3, 18726.0], [75.4, 18726.0], [75.5, 18726.0], [75.6, 18726.0], [75.7, 18726.0], [75.8, 18726.0], [75.9, 18726.0], [76.0, 18868.0], [76.1, 18868.0], [76.2, 18868.0], [76.3, 18868.0], [76.4, 18868.0], [76.5, 18868.0], [76.6, 18868.0], [76.7, 18868.0], [76.8, 18868.0], [76.9, 18868.0], [77.0, 18929.0], [77.1, 18929.0], [77.2, 18929.0], [77.3, 18929.0], [77.4, 18929.0], [77.5, 18929.0], [77.6, 18929.0], [77.7, 18929.0], [77.8, 18929.0], [77.9, 18929.0], [78.0, 18956.0], [78.1, 18956.0], [78.2, 18956.0], [78.3, 18956.0], [78.4, 18956.0], [78.5, 18956.0], [78.6, 18956.0], [78.7, 18956.0], [78.8, 18956.0], [78.9, 18956.0], [79.0, 19067.0], [79.1, 19067.0], [79.2, 19067.0], [79.3, 19067.0], [79.4, 19067.0], [79.5, 19067.0], [79.6, 19067.0], [79.7, 19067.0], [79.8, 19067.0], [79.9, 19067.0], [80.0, 19090.0], [80.1, 19090.0], [80.2, 19090.0], [80.3, 19090.0], [80.4, 19090.0], [80.5, 19090.0], [80.6, 19090.0], [80.7, 19090.0], [80.8, 19090.0], [80.9, 19090.0], [81.0, 19103.0], [81.1, 19103.0], [81.2, 19103.0], [81.3, 19103.0], [81.4, 19103.0], [81.5, 19103.0], [81.6, 19103.0], [81.7, 19103.0], [81.8, 19103.0], [81.9, 19103.0], [82.0, 19251.0], [82.1, 19251.0], [82.2, 19251.0], [82.3, 19251.0], [82.4, 19251.0], [82.5, 19251.0], [82.6, 19251.0], [82.7, 19251.0], [82.8, 19251.0], [82.9, 19251.0], [83.0, 19288.0], [83.1, 19288.0], [83.2, 19288.0], [83.3, 19288.0], [83.4, 19288.0], [83.5, 19288.0], [83.6, 19288.0], [83.7, 19288.0], [83.8, 19288.0], [83.9, 19288.0], [84.0, 19584.0], [84.1, 19584.0], [84.2, 19584.0], [84.3, 19584.0], [84.4, 19584.0], [84.5, 19584.0], [84.6, 19584.0], [84.7, 19584.0], [84.8, 19584.0], [84.9, 19584.0], [85.0, 19702.0], [85.1, 19702.0], [85.2, 19702.0], [85.3, 19702.0], [85.4, 19702.0], [85.5, 19702.0], [85.6, 19702.0], [85.7, 19702.0], [85.8, 19702.0], [85.9, 19702.0], [86.0, 19812.0], [86.1, 19812.0], [86.2, 19812.0], [86.3, 19812.0], [86.4, 19812.0], [86.5, 19812.0], [86.6, 19812.0], [86.7, 19812.0], [86.8, 19812.0], [86.9, 19812.0], [87.0, 19834.0], [87.1, 19834.0], [87.2, 19834.0], [87.3, 19834.0], [87.4, 19834.0], [87.5, 19834.0], [87.6, 19834.0], [87.7, 19834.0], [87.8, 19834.0], [87.9, 19834.0], [88.0, 19923.0], [88.1, 19923.0], [88.2, 19923.0], [88.3, 19923.0], [88.4, 19923.0], [88.5, 19923.0], [88.6, 19923.0], [88.7, 19923.0], [88.8, 19923.0], [88.9, 19923.0], [89.0, 20011.0], [89.1, 20011.0], [89.2, 20011.0], [89.3, 20011.0], [89.4, 20011.0], [89.5, 20011.0], [89.6, 20011.0], [89.7, 20011.0], [89.8, 20011.0], [89.9, 20011.0], [90.0, 20154.0], [90.1, 20154.0], [90.2, 20154.0], [90.3, 20154.0], [90.4, 20154.0], [90.5, 20154.0], [90.6, 20154.0], [90.7, 20154.0], [90.8, 20154.0], [90.9, 20154.0], [91.0, 20215.0], [91.1, 20215.0], [91.2, 20215.0], [91.3, 20215.0], [91.4, 20215.0], [91.5, 20215.0], [91.6, 20215.0], [91.7, 20215.0], [91.8, 20215.0], [91.9, 20215.0], [92.0, 20244.0], [92.1, 20244.0], [92.2, 20244.0], [92.3, 20244.0], [92.4, 20244.0], [92.5, 20244.0], [92.6, 20244.0], [92.7, 20244.0], [92.8, 20244.0], [92.9, 20244.0], [93.0, 20368.0], [93.1, 20368.0], [93.2, 20368.0], [93.3, 20368.0], [93.4, 20368.0], [93.5, 20368.0], [93.6, 20368.0], [93.7, 20368.0], [93.8, 20368.0], [93.9, 20368.0], [94.0, 20547.0], [94.1, 20547.0], [94.2, 20547.0], [94.3, 20547.0], [94.4, 20547.0], [94.5, 20547.0], [94.6, 20547.0], [94.7, 20547.0], [94.8, 20547.0], [94.9, 20547.0], [95.0, 20635.0], [95.1, 20635.0], [95.2, 20635.0], [95.3, 20635.0], [95.4, 20635.0], [95.5, 20635.0], [95.6, 20635.0], [95.7, 20635.0], [95.8, 20635.0], [95.9, 20635.0], [96.0, 20742.0], [96.1, 20742.0], [96.2, 20742.0], [96.3, 20742.0], [96.4, 20742.0], [96.5, 20742.0], [96.6, 20742.0], [96.7, 20742.0], [96.8, 20742.0], [96.9, 20742.0], [97.0, 20758.0], [97.1, 20758.0], [97.2, 20758.0], [97.3, 20758.0], [97.4, 20758.0], [97.5, 20758.0], [97.6, 20758.0], [97.7, 20758.0], [97.8, 20758.0], [97.9, 20758.0], [98.0, 20774.0], [98.1, 20774.0], [98.2, 20774.0], [98.3, 20774.0], [98.4, 20774.0], [98.5, 20774.0], [98.6, 20774.0], [98.7, 20774.0], [98.8, 20774.0], [98.9, 20774.0], [99.0, 20840.0], [99.1, 20840.0], [99.2, 20840.0], [99.3, 20840.0], [99.4, 20840.0], [99.5, 20840.0], [99.6, 20840.0], [99.7, 20840.0], [99.8, 20840.0], [99.9, 20840.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 12000.0, "maxY": 5.0, "series": [{"data": [[12000.0, 2.0], [12100.0, 3.0], [12400.0, 2.0], [12300.0, 1.0], [12700.0, 1.0], [12800.0, 3.0], [12900.0, 1.0], [13100.0, 1.0], [13200.0, 1.0], [13000.0, 1.0], [13300.0, 1.0], [13500.0, 2.0], [13600.0, 1.0], [13700.0, 2.0], [14000.0, 1.0], [14100.0, 1.0], [14200.0, 3.0], [14300.0, 1.0], [13900.0, 1.0], [14500.0, 3.0], [14600.0, 1.0], [14700.0, 1.0], [15000.0, 3.0], [14900.0, 1.0], [15300.0, 1.0], [15400.0, 2.0], [15600.0, 1.0], [15500.0, 1.0], [15700.0, 1.0], [15900.0, 5.0], [16100.0, 1.0], [16300.0, 2.0], [16600.0, 2.0], [16800.0, 1.0], [16900.0, 2.0], [16400.0, 1.0], [16700.0, 3.0], [17000.0, 1.0], [17100.0, 1.0], [17500.0, 3.0], [17900.0, 1.0], [18100.0, 3.0], [17700.0, 1.0], [18200.0, 1.0], [18400.0, 2.0], [18000.0, 1.0], [18700.0, 1.0], [18800.0, 1.0], [18900.0, 2.0], [19000.0, 2.0], [19200.0, 2.0], [19100.0, 1.0], [19800.0, 2.0], [19700.0, 1.0], [19500.0, 1.0], [19900.0, 1.0], [20200.0, 2.0], [20000.0, 1.0], [20100.0, 1.0], [20300.0, 1.0], [20600.0, 1.0], [20700.0, 3.0], [20500.0, 1.0], [20800.0, 1.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.59000000000001, "minX": 1.57138446E12, "maxY": 50.59000000000001, "series": [{"data": [[1.57138446E12, 50.59000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138446E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 12073.0, "minX": 1.0, "maxY": 20840.0, "series": [{"data": [[4.0, 20693.0], [5.0, 20742.0], [6.0, 20635.0], [7.0, 20368.0], [8.0, 20154.0], [9.0, 20011.0], [10.0, 20244.0], [11.0, 20215.0], [12.0, 19923.0], [13.0, 19584.0], [14.0, 19702.0], [15.0, 19834.0], [16.0, 19812.0], [17.0, 19090.0], [18.0, 19288.0], [19.0, 19103.0], [20.0, 18956.0], [21.0, 19251.0], [22.0, 19067.0], [23.0, 18929.0], [24.0, 18868.0], [25.0, 18726.0], [26.0, 18125.0], [27.0, 18438.0], [28.0, 18006.0], [29.0, 18438.0], [30.0, 18252.0], [31.0, 17759.0], [33.0, 18157.0], [32.0, 18186.0], [35.0, 17528.0], [34.0, 17971.0], [36.0, 17547.0], [39.0, 17586.0], [38.0, 17057.0], [41.0, 16726.0], [40.0, 16783.0], [43.0, 16766.0], [42.0, 16994.0], [45.0, 16958.0], [44.0, 16455.0], [47.0, 16692.0], [46.0, 16338.0], [49.0, 16639.0], [48.0, 16850.0], [51.0, 15904.0], [50.0, 15932.0], [53.0, 15938.0], [52.0, 16303.0], [55.0, 16140.0], [54.0, 15736.0], [57.0, 15774.0], [59.0, 15460.0], [58.0, 15913.0], [61.0, 15066.0], [60.0, 15680.0], [63.0, 15033.0], [62.0, 14789.0], [67.0, 15096.0], [66.0, 14904.0], [65.0, 15309.0], [64.0, 15403.0], [71.0, 14547.0], [70.0, 14539.0], [69.0, 14609.0], [68.0, 14552.0], [75.0, 13714.0], [74.0, 14343.0], [73.0, 14252.0], [72.0, 13922.0], [79.0, 13720.0], [78.0, 14158.0], [77.0, 14213.0], [76.0, 14268.0], [83.0, 13367.0], [82.0, 13602.0], [81.0, 13578.0], [80.0, 14067.0], [87.0, 12819.0], [86.0, 13285.0], [85.0, 13038.0], [84.0, 13561.0], [91.0, 12709.0], [90.0, 12906.0], [89.0, 12803.0], [88.0, 13169.0], [95.0, 12165.0], [94.0, 12300.666666666666], [99.0, 12181.0], [98.0, 12638.0], [96.0, 12073.0], [100.0, 12093.0], [1.0, 20840.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[50.59000000000001, 16333.139999999998]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 891.6666666666666, "minX": 1.57138446E12, "maxY": 2685.0, "series": [{"data": [[1.57138446E12, 2685.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57138446E12, 891.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138446E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 16333.139999999998, "minX": 1.57138446E12, "maxY": 16333.139999999998, "series": [{"data": [[1.57138446E12, 16333.139999999998]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138446E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 16233.089999999998, "minX": 1.57138446E12, "maxY": 16233.089999999998, "series": [{"data": [[1.57138446E12, 16233.089999999998]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138446E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 655.3799999999997, "minX": 1.57138446E12, "maxY": 655.3799999999997, "series": [{"data": [[1.57138446E12, 655.3799999999997]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138446E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12073.0, "minX": 1.57138446E12, "maxY": 20840.0, "series": [{"data": [[1.57138446E12, 20840.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57138446E12, 12073.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57138446E12, 20139.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57138446E12, 20839.34]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57138446E12, 20630.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138446E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14187.0, "minX": 1000.0, "maxY": 16396.5, "series": [{"data": [[1000.0, 16396.5], [2000.0, 14187.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
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
        infos.create();
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
    data: {"result": {"minY": 14075.5, "minX": 1000.0, "maxY": 16302.5, "series": [{"data": [[1000.0, 16302.5], [2000.0, 14075.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57138446E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57138446E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138446E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57138446E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57138446E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138446E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57138446E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57138446E12, 1.6666666666666667]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138446E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57138446E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57138446E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138446E12, "title": "Total Transactions Per Second"}},
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
    } else if ( id == "responseTimePercentilesOverTime"){
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
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

