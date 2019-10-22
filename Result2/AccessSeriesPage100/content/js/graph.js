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
        data: {"result": {"minY": 408.0, "minX": 0.0, "maxY": 1001.0, "series": [{"data": [[0.0, 408.0], [0.1, 408.0], [0.2, 408.0], [0.3, 408.0], [0.4, 408.0], [0.5, 408.0], [0.6, 408.0], [0.7, 408.0], [0.8, 408.0], [0.9, 408.0], [1.0, 419.0], [1.1, 419.0], [1.2, 419.0], [1.3, 419.0], [1.4, 419.0], [1.5, 419.0], [1.6, 419.0], [1.7, 419.0], [1.8, 419.0], [1.9, 419.0], [2.0, 426.0], [2.1, 426.0], [2.2, 426.0], [2.3, 426.0], [2.4, 426.0], [2.5, 426.0], [2.6, 426.0], [2.7, 426.0], [2.8, 426.0], [2.9, 426.0], [3.0, 439.0], [3.1, 439.0], [3.2, 439.0], [3.3, 439.0], [3.4, 439.0], [3.5, 439.0], [3.6, 439.0], [3.7, 439.0], [3.8, 439.0], [3.9, 439.0], [4.0, 451.0], [4.1, 451.0], [4.2, 451.0], [4.3, 451.0], [4.4, 451.0], [4.5, 451.0], [4.6, 451.0], [4.7, 451.0], [4.8, 451.0], [4.9, 451.0], [5.0, 456.0], [5.1, 456.0], [5.2, 456.0], [5.3, 456.0], [5.4, 456.0], [5.5, 456.0], [5.6, 456.0], [5.7, 456.0], [5.8, 456.0], [5.9, 456.0], [6.0, 458.0], [6.1, 458.0], [6.2, 458.0], [6.3, 458.0], [6.4, 458.0], [6.5, 458.0], [6.6, 458.0], [6.7, 458.0], [6.8, 458.0], [6.9, 458.0], [7.0, 473.0], [7.1, 473.0], [7.2, 473.0], [7.3, 473.0], [7.4, 473.0], [7.5, 473.0], [7.6, 473.0], [7.7, 473.0], [7.8, 473.0], [7.9, 473.0], [8.0, 487.0], [8.1, 487.0], [8.2, 487.0], [8.3, 487.0], [8.4, 487.0], [8.5, 487.0], [8.6, 487.0], [8.7, 487.0], [8.8, 487.0], [8.9, 487.0], [9.0, 499.0], [9.1, 499.0], [9.2, 499.0], [9.3, 499.0], [9.4, 499.0], [9.5, 499.0], [9.6, 499.0], [9.7, 499.0], [9.8, 499.0], [9.9, 499.0], [10.0, 500.0], [10.1, 500.0], [10.2, 500.0], [10.3, 500.0], [10.4, 500.0], [10.5, 500.0], [10.6, 500.0], [10.7, 500.0], [10.8, 500.0], [10.9, 500.0], [11.0, 519.0], [11.1, 519.0], [11.2, 519.0], [11.3, 519.0], [11.4, 519.0], [11.5, 519.0], [11.6, 519.0], [11.7, 519.0], [11.8, 519.0], [11.9, 519.0], [12.0, 527.0], [12.1, 527.0], [12.2, 527.0], [12.3, 527.0], [12.4, 527.0], [12.5, 527.0], [12.6, 527.0], [12.7, 527.0], [12.8, 527.0], [12.9, 527.0], [13.0, 537.0], [13.1, 537.0], [13.2, 537.0], [13.3, 537.0], [13.4, 537.0], [13.5, 537.0], [13.6, 537.0], [13.7, 537.0], [13.8, 537.0], [13.9, 537.0], [14.0, 549.0], [14.1, 549.0], [14.2, 549.0], [14.3, 549.0], [14.4, 549.0], [14.5, 549.0], [14.6, 549.0], [14.7, 549.0], [14.8, 549.0], [14.9, 549.0], [15.0, 556.0], [15.1, 556.0], [15.2, 556.0], [15.3, 556.0], [15.4, 556.0], [15.5, 556.0], [15.6, 556.0], [15.7, 556.0], [15.8, 556.0], [15.9, 556.0], [16.0, 567.0], [16.1, 567.0], [16.2, 567.0], [16.3, 567.0], [16.4, 567.0], [16.5, 567.0], [16.6, 567.0], [16.7, 567.0], [16.8, 567.0], [16.9, 567.0], [17.0, 574.0], [17.1, 574.0], [17.2, 574.0], [17.3, 574.0], [17.4, 574.0], [17.5, 574.0], [17.6, 574.0], [17.7, 574.0], [17.8, 574.0], [17.9, 574.0], [18.0, 586.0], [18.1, 586.0], [18.2, 586.0], [18.3, 586.0], [18.4, 586.0], [18.5, 586.0], [18.6, 586.0], [18.7, 586.0], [18.8, 586.0], [18.9, 586.0], [19.0, 589.0], [19.1, 589.0], [19.2, 589.0], [19.3, 589.0], [19.4, 589.0], [19.5, 589.0], [19.6, 589.0], [19.7, 589.0], [19.8, 589.0], [19.9, 589.0], [20.0, 604.0], [20.1, 604.0], [20.2, 604.0], [20.3, 604.0], [20.4, 604.0], [20.5, 604.0], [20.6, 604.0], [20.7, 604.0], [20.8, 604.0], [20.9, 604.0], [21.0, 619.0], [21.1, 619.0], [21.2, 619.0], [21.3, 619.0], [21.4, 619.0], [21.5, 619.0], [21.6, 619.0], [21.7, 619.0], [21.8, 619.0], [21.9, 619.0], [22.0, 626.0], [22.1, 626.0], [22.2, 626.0], [22.3, 626.0], [22.4, 626.0], [22.5, 626.0], [22.6, 626.0], [22.7, 626.0], [22.8, 626.0], [22.9, 626.0], [23.0, 639.0], [23.1, 639.0], [23.2, 639.0], [23.3, 639.0], [23.4, 639.0], [23.5, 639.0], [23.6, 639.0], [23.7, 639.0], [23.8, 639.0], [23.9, 639.0], [24.0, 650.0], [24.1, 650.0], [24.2, 650.0], [24.3, 650.0], [24.4, 650.0], [24.5, 650.0], [24.6, 650.0], [24.7, 650.0], [24.8, 650.0], [24.9, 650.0], [25.0, 661.0], [25.1, 661.0], [25.2, 661.0], [25.3, 661.0], [25.4, 661.0], [25.5, 661.0], [25.6, 661.0], [25.7, 661.0], [25.8, 661.0], [25.9, 661.0], [26.0, 666.0], [26.1, 666.0], [26.2, 666.0], [26.3, 666.0], [26.4, 666.0], [26.5, 666.0], [26.6, 666.0], [26.7, 666.0], [26.8, 666.0], [26.9, 666.0], [27.0, 672.0], [27.1, 672.0], [27.2, 672.0], [27.3, 672.0], [27.4, 672.0], [27.5, 672.0], [27.6, 672.0], [27.7, 672.0], [27.8, 672.0], [27.9, 672.0], [28.0, 688.0], [28.1, 688.0], [28.2, 688.0], [28.3, 688.0], [28.4, 688.0], [28.5, 688.0], [28.6, 688.0], [28.7, 688.0], [28.8, 688.0], [28.9, 688.0], [29.0, 697.0], [29.1, 697.0], [29.2, 697.0], [29.3, 697.0], [29.4, 697.0], [29.5, 697.0], [29.6, 697.0], [29.7, 697.0], [29.8, 697.0], [29.9, 697.0], [30.0, 710.0], [30.1, 710.0], [30.2, 710.0], [30.3, 710.0], [30.4, 710.0], [30.5, 710.0], [30.6, 710.0], [30.7, 710.0], [30.8, 710.0], [30.9, 710.0], [31.0, 721.0], [31.1, 721.0], [31.2, 721.0], [31.3, 721.0], [31.4, 721.0], [31.5, 721.0], [31.6, 721.0], [31.7, 721.0], [31.8, 721.0], [31.9, 721.0], [32.0, 724.0], [32.1, 724.0], [32.2, 724.0], [32.3, 724.0], [32.4, 724.0], [32.5, 724.0], [32.6, 724.0], [32.7, 724.0], [32.8, 724.0], [32.9, 724.0], [33.0, 736.0], [33.1, 736.0], [33.2, 736.0], [33.3, 736.0], [33.4, 736.0], [33.5, 736.0], [33.6, 736.0], [33.7, 736.0], [33.8, 736.0], [33.9, 736.0], [34.0, 748.0], [34.1, 748.0], [34.2, 748.0], [34.3, 748.0], [34.4, 748.0], [34.5, 748.0], [34.6, 748.0], [34.7, 748.0], [34.8, 748.0], [34.9, 748.0], [35.0, 756.0], [35.1, 756.0], [35.2, 756.0], [35.3, 756.0], [35.4, 756.0], [35.5, 756.0], [35.6, 756.0], [35.7, 756.0], [35.8, 756.0], [35.9, 756.0], [36.0, 769.0], [36.1, 769.0], [36.2, 769.0], [36.3, 769.0], [36.4, 769.0], [36.5, 769.0], [36.6, 769.0], [36.7, 769.0], [36.8, 769.0], [36.9, 769.0], [37.0, 778.0], [37.1, 778.0], [37.2, 778.0], [37.3, 778.0], [37.4, 778.0], [37.5, 778.0], [37.6, 778.0], [37.7, 778.0], [37.8, 778.0], [37.9, 778.0], [38.0, 784.0], [38.1, 784.0], [38.2, 784.0], [38.3, 784.0], [38.4, 784.0], [38.5, 784.0], [38.6, 784.0], [38.7, 784.0], [38.8, 784.0], [38.9, 784.0], [39.0, 795.0], [39.1, 795.0], [39.2, 795.0], [39.3, 795.0], [39.4, 795.0], [39.5, 795.0], [39.6, 795.0], [39.7, 795.0], [39.8, 795.0], [39.9, 795.0], [40.0, 804.0], [40.1, 804.0], [40.2, 804.0], [40.3, 804.0], [40.4, 804.0], [40.5, 804.0], [40.6, 804.0], [40.7, 804.0], [40.8, 804.0], [40.9, 804.0], [41.0, 813.0], [41.1, 813.0], [41.2, 813.0], [41.3, 813.0], [41.4, 813.0], [41.5, 813.0], [41.6, 813.0], [41.7, 813.0], [41.8, 813.0], [41.9, 813.0], [42.0, 826.0], [42.1, 826.0], [42.2, 826.0], [42.3, 826.0], [42.4, 826.0], [42.5, 826.0], [42.6, 826.0], [42.7, 826.0], [42.8, 826.0], [42.9, 826.0], [43.0, 837.0], [43.1, 837.0], [43.2, 837.0], [43.3, 837.0], [43.4, 837.0], [43.5, 837.0], [43.6, 837.0], [43.7, 837.0], [43.8, 837.0], [43.9, 837.0], [44.0, 847.0], [44.1, 847.0], [44.2, 847.0], [44.3, 847.0], [44.4, 847.0], [44.5, 847.0], [44.6, 847.0], [44.7, 847.0], [44.8, 847.0], [44.9, 847.0], [45.0, 855.0], [45.1, 855.0], [45.2, 855.0], [45.3, 855.0], [45.4, 855.0], [45.5, 855.0], [45.6, 855.0], [45.7, 855.0], [45.8, 855.0], [45.9, 855.0], [46.0, 863.0], [46.1, 863.0], [46.2, 863.0], [46.3, 863.0], [46.4, 863.0], [46.5, 863.0], [46.6, 863.0], [46.7, 863.0], [46.8, 863.0], [46.9, 863.0], [47.0, 877.0], [47.1, 877.0], [47.2, 877.0], [47.3, 877.0], [47.4, 877.0], [47.5, 877.0], [47.6, 877.0], [47.7, 877.0], [47.8, 877.0], [47.9, 877.0], [48.0, 888.0], [48.1, 888.0], [48.2, 888.0], [48.3, 888.0], [48.4, 888.0], [48.5, 888.0], [48.6, 888.0], [48.7, 888.0], [48.8, 888.0], [48.9, 888.0], [49.0, 896.0], [49.1, 896.0], [49.2, 896.0], [49.3, 896.0], [49.4, 896.0], [49.5, 896.0], [49.6, 896.0], [49.7, 896.0], [49.8, 896.0], [49.9, 896.0], [50.0, 901.0], [50.1, 901.0], [50.2, 901.0], [50.3, 901.0], [50.4, 901.0], [50.5, 901.0], [50.6, 901.0], [50.7, 901.0], [50.8, 901.0], [50.9, 901.0], [51.0, 921.0], [51.1, 921.0], [51.2, 921.0], [51.3, 921.0], [51.4, 921.0], [51.5, 921.0], [51.6, 921.0], [51.7, 921.0], [51.8, 921.0], [51.9, 921.0], [52.0, 927.0], [52.1, 927.0], [52.2, 927.0], [52.3, 927.0], [52.4, 927.0], [52.5, 927.0], [52.6, 927.0], [52.7, 927.0], [52.8, 927.0], [52.9, 927.0], [53.0, 937.0], [53.1, 937.0], [53.2, 937.0], [53.3, 937.0], [53.4, 937.0], [53.5, 937.0], [53.6, 937.0], [53.7, 937.0], [53.8, 937.0], [53.9, 937.0], [54.0, 938.0], [54.1, 938.0], [54.2, 938.0], [54.3, 938.0], [54.4, 938.0], [54.5, 938.0], [54.6, 938.0], [54.7, 938.0], [54.8, 938.0], [54.9, 938.0], [55.0, 959.0], [55.1, 959.0], [55.2, 959.0], [55.3, 959.0], [55.4, 959.0], [55.5, 959.0], [55.6, 959.0], [55.7, 959.0], [55.8, 959.0], [55.9, 959.0], [56.0, 972.0], [56.1, 972.0], [56.2, 972.0], [56.3, 972.0], [56.4, 972.0], [56.5, 972.0], [56.6, 972.0], [56.7, 972.0], [56.8, 972.0], [56.9, 972.0], [57.0, 976.0], [57.1, 976.0], [57.2, 976.0], [57.3, 976.0], [57.4, 976.0], [57.5, 976.0], [57.6, 976.0], [57.7, 976.0], [57.8, 976.0], [57.9, 976.0], [58.0, 987.0], [58.1, 987.0], [58.2, 987.0], [58.3, 987.0], [58.4, 987.0], [58.5, 987.0], [58.6, 987.0], [58.7, 987.0], [58.8, 987.0], [58.9, 987.0], [59.0, 989.0], [59.1, 989.0], [59.2, 989.0], [59.3, 989.0], [59.4, 989.0], [59.5, 989.0], [59.6, 989.0], [59.7, 989.0], [59.8, 989.0], [59.9, 989.0], [60.0, 989.0], [60.1, 989.0], [60.2, 989.0], [60.3, 989.0], [60.4, 989.0], [60.5, 989.0], [60.6, 989.0], [60.7, 989.0], [60.8, 989.0], [60.9, 989.0], [61.0, 990.0], [61.1, 990.0], [61.2, 990.0], [61.3, 990.0], [61.4, 990.0], [61.5, 990.0], [61.6, 990.0], [61.7, 990.0], [61.8, 990.0], [61.9, 990.0], [62.0, 991.0], [62.1, 991.0], [62.2, 991.0], [62.3, 991.0], [62.4, 991.0], [62.5, 991.0], [62.6, 991.0], [62.7, 991.0], [62.8, 991.0], [62.9, 991.0], [63.0, 991.0], [63.1, 991.0], [63.2, 991.0], [63.3, 991.0], [63.4, 991.0], [63.5, 991.0], [63.6, 991.0], [63.7, 991.0], [63.8, 991.0], [63.9, 991.0], [64.0, 992.0], [64.1, 992.0], [64.2, 992.0], [64.3, 992.0], [64.4, 992.0], [64.5, 992.0], [64.6, 992.0], [64.7, 992.0], [64.8, 992.0], [64.9, 992.0], [65.0, 993.0], [65.1, 993.0], [65.2, 993.0], [65.3, 993.0], [65.4, 993.0], [65.5, 993.0], [65.6, 993.0], [65.7, 993.0], [65.8, 993.0], [65.9, 993.0], [66.0, 993.0], [66.1, 993.0], [66.2, 993.0], [66.3, 993.0], [66.4, 993.0], [66.5, 993.0], [66.6, 993.0], [66.7, 993.0], [66.8, 993.0], [66.9, 993.0], [67.0, 993.0], [67.1, 993.0], [67.2, 993.0], [67.3, 993.0], [67.4, 993.0], [67.5, 993.0], [67.6, 993.0], [67.7, 993.0], [67.8, 993.0], [67.9, 993.0], [68.0, 994.0], [68.1, 994.0], [68.2, 994.0], [68.3, 994.0], [68.4, 994.0], [68.5, 994.0], [68.6, 994.0], [68.7, 994.0], [68.8, 994.0], [68.9, 994.0], [69.0, 994.0], [69.1, 994.0], [69.2, 994.0], [69.3, 994.0], [69.4, 994.0], [69.5, 994.0], [69.6, 994.0], [69.7, 994.0], [69.8, 994.0], [69.9, 994.0], [70.0, 994.0], [70.1, 994.0], [70.2, 994.0], [70.3, 994.0], [70.4, 994.0], [70.5, 994.0], [70.6, 994.0], [70.7, 994.0], [70.8, 994.0], [70.9, 994.0], [71.0, 994.0], [71.1, 994.0], [71.2, 994.0], [71.3, 994.0], [71.4, 994.0], [71.5, 994.0], [71.6, 994.0], [71.7, 994.0], [71.8, 994.0], [71.9, 994.0], [72.0, 994.0], [72.1, 994.0], [72.2, 994.0], [72.3, 994.0], [72.4, 994.0], [72.5, 994.0], [72.6, 994.0], [72.7, 994.0], [72.8, 994.0], [72.9, 994.0], [73.0, 995.0], [73.1, 995.0], [73.2, 995.0], [73.3, 995.0], [73.4, 995.0], [73.5, 995.0], [73.6, 995.0], [73.7, 995.0], [73.8, 995.0], [73.9, 995.0], [74.0, 995.0], [74.1, 995.0], [74.2, 995.0], [74.3, 995.0], [74.4, 995.0], [74.5, 995.0], [74.6, 995.0], [74.7, 995.0], [74.8, 995.0], [74.9, 995.0], [75.0, 995.0], [75.1, 995.0], [75.2, 995.0], [75.3, 995.0], [75.4, 995.0], [75.5, 995.0], [75.6, 995.0], [75.7, 995.0], [75.8, 995.0], [75.9, 995.0], [76.0, 995.0], [76.1, 995.0], [76.2, 995.0], [76.3, 995.0], [76.4, 995.0], [76.5, 995.0], [76.6, 995.0], [76.7, 995.0], [76.8, 995.0], [76.9, 995.0], [77.0, 995.0], [77.1, 995.0], [77.2, 995.0], [77.3, 995.0], [77.4, 995.0], [77.5, 995.0], [77.6, 995.0], [77.7, 995.0], [77.8, 995.0], [77.9, 995.0], [78.0, 995.0], [78.1, 995.0], [78.2, 995.0], [78.3, 995.0], [78.4, 995.0], [78.5, 995.0], [78.6, 995.0], [78.7, 995.0], [78.8, 995.0], [78.9, 995.0], [79.0, 995.0], [79.1, 995.0], [79.2, 995.0], [79.3, 995.0], [79.4, 995.0], [79.5, 995.0], [79.6, 995.0], [79.7, 995.0], [79.8, 995.0], [79.9, 995.0], [80.0, 996.0], [80.1, 996.0], [80.2, 996.0], [80.3, 996.0], [80.4, 996.0], [80.5, 996.0], [80.6, 996.0], [80.7, 996.0], [80.8, 996.0], [80.9, 996.0], [81.0, 996.0], [81.1, 996.0], [81.2, 996.0], [81.3, 996.0], [81.4, 996.0], [81.5, 996.0], [81.6, 996.0], [81.7, 996.0], [81.8, 996.0], [81.9, 996.0], [82.0, 996.0], [82.1, 996.0], [82.2, 996.0], [82.3, 996.0], [82.4, 996.0], [82.5, 996.0], [82.6, 996.0], [82.7, 996.0], [82.8, 996.0], [82.9, 996.0], [83.0, 996.0], [83.1, 996.0], [83.2, 996.0], [83.3, 996.0], [83.4, 996.0], [83.5, 996.0], [83.6, 996.0], [83.7, 996.0], [83.8, 996.0], [83.9, 996.0], [84.0, 996.0], [84.1, 996.0], [84.2, 996.0], [84.3, 996.0], [84.4, 996.0], [84.5, 996.0], [84.6, 996.0], [84.7, 996.0], [84.8, 996.0], [84.9, 996.0], [85.0, 996.0], [85.1, 996.0], [85.2, 996.0], [85.3, 996.0], [85.4, 996.0], [85.5, 996.0], [85.6, 996.0], [85.7, 996.0], [85.8, 996.0], [85.9, 996.0], [86.0, 996.0], [86.1, 996.0], [86.2, 996.0], [86.3, 996.0], [86.4, 996.0], [86.5, 996.0], [86.6, 996.0], [86.7, 996.0], [86.8, 996.0], [86.9, 996.0], [87.0, 996.0], [87.1, 996.0], [87.2, 996.0], [87.3, 996.0], [87.4, 996.0], [87.5, 996.0], [87.6, 996.0], [87.7, 996.0], [87.8, 996.0], [87.9, 996.0], [88.0, 997.0], [88.1, 997.0], [88.2, 997.0], [88.3, 997.0], [88.4, 997.0], [88.5, 997.0], [88.6, 997.0], [88.7, 997.0], [88.8, 997.0], [88.9, 997.0], [89.0, 997.0], [89.1, 997.0], [89.2, 997.0], [89.3, 997.0], [89.4, 997.0], [89.5, 997.0], [89.6, 997.0], [89.7, 997.0], [89.8, 997.0], [89.9, 997.0], [90.0, 998.0], [90.1, 998.0], [90.2, 998.0], [90.3, 998.0], [90.4, 998.0], [90.5, 998.0], [90.6, 998.0], [90.7, 998.0], [90.8, 998.0], [90.9, 998.0], [91.0, 998.0], [91.1, 998.0], [91.2, 998.0], [91.3, 998.0], [91.4, 998.0], [91.5, 998.0], [91.6, 998.0], [91.7, 998.0], [91.8, 998.0], [91.9, 998.0], [92.0, 998.0], [92.1, 998.0], [92.2, 998.0], [92.3, 998.0], [92.4, 998.0], [92.5, 998.0], [92.6, 998.0], [92.7, 998.0], [92.8, 998.0], [92.9, 998.0], [93.0, 1000.0], [93.1, 1000.0], [93.2, 1000.0], [93.3, 1000.0], [93.4, 1000.0], [93.5, 1000.0], [93.6, 1000.0], [93.7, 1000.0], [93.8, 1000.0], [93.9, 1000.0], [94.0, 1000.0], [94.1, 1000.0], [94.2, 1000.0], [94.3, 1000.0], [94.4, 1000.0], [94.5, 1000.0], [94.6, 1000.0], [94.7, 1000.0], [94.8, 1000.0], [94.9, 1000.0], [95.0, 1000.0], [95.1, 1000.0], [95.2, 1000.0], [95.3, 1000.0], [95.4, 1000.0], [95.5, 1000.0], [95.6, 1000.0], [95.7, 1000.0], [95.8, 1000.0], [95.9, 1000.0], [96.0, 1000.0], [96.1, 1000.0], [96.2, 1000.0], [96.3, 1000.0], [96.4, 1000.0], [96.5, 1000.0], [96.6, 1000.0], [96.7, 1000.0], [96.8, 1000.0], [96.9, 1000.0], [97.0, 1000.0], [97.1, 1000.0], [97.2, 1000.0], [97.3, 1000.0], [97.4, 1000.0], [97.5, 1000.0], [97.6, 1000.0], [97.7, 1000.0], [97.8, 1000.0], [97.9, 1000.0], [98.0, 1001.0], [98.1, 1001.0], [98.2, 1001.0], [98.3, 1001.0], [98.4, 1001.0], [98.5, 1001.0], [98.6, 1001.0], [98.7, 1001.0], [98.8, 1001.0], [98.9, 1001.0], [99.0, 1001.0], [99.1, 1001.0], [99.2, 1001.0], [99.3, 1001.0], [99.4, 1001.0], [99.5, 1001.0], [99.6, 1001.0], [99.7, 1001.0], [99.8, 1001.0], [99.9, 1001.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 400.0, "maxY": 43.0, "series": [{"data": [[600.0, 10.0], [700.0, 10.0], [400.0, 10.0], [800.0, 10.0], [900.0, 43.0], [500.0, 10.0], [1000.0, 7.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 89.0, "series": [{"data": [[0.0, 11.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 89.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.57172784E12, "maxY": 100.0, "series": [{"data": [[1.57172784E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172784E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 819.0099999999999, "minX": 100.0, "maxY": 819.0099999999999, "series": [{"data": [[100.0, 819.0099999999999]], "isOverall": false, "label": "Access Series Page", "isController": false}, {"data": [[100.0, 819.0099999999999]], "isOverall": false, "label": "Access Series Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 373.3333333333333, "minX": 1.57172784E12, "maxY": 13109.666666666666, "series": [{"data": [[1.57172784E12, 13109.666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57172784E12, 373.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172784E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 819.0099999999999, "minX": 1.57172784E12, "maxY": 819.0099999999999, "series": [{"data": [[1.57172784E12, 819.0099999999999]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172784E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 800.8800000000002, "minX": 1.57172784E12, "maxY": 800.8800000000002, "series": [{"data": [[1.57172784E12, 800.8800000000002]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172784E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 518.7699999999999, "minX": 1.57172784E12, "maxY": 518.7699999999999, "series": [{"data": [[1.57172784E12, 518.7699999999999]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172784E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 408.0, "minX": 1.57172784E12, "maxY": 1001.0, "series": [{"data": [[1.57172784E12, 1001.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57172784E12, 408.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57172784E12, 997.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57172784E12, 1001.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57172784E12, 1000.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172784E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 898.5, "minX": 100.0, "maxY": 898.5, "series": [{"data": [[100.0, 898.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 881.5, "minX": 100.0, "maxY": 881.5, "series": [{"data": [[100.0, 881.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.57172778E12, "maxY": 1.0833333333333333, "series": [{"data": [[1.57172784E12, 0.5833333333333334], [1.57172778E12, 1.0833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172784E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172784E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172784E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172784E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172784E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172784E12, 1.6666666666666667]], "isOverall": false, "label": "Access Series Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172784E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172784E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172784E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172784E12, "title": "Total Transactions Per Second"}},
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

