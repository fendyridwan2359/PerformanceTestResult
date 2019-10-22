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
        data: {"result": {"minY": 305.0, "minX": 0.0, "maxY": 1772.0, "series": [{"data": [[0.0, 305.0], [0.1, 305.0], [0.2, 305.0], [0.3, 305.0], [0.4, 328.0], [0.5, 328.0], [0.6, 328.0], [0.7, 340.0], [0.8, 340.0], [0.9, 340.0], [1.0, 355.0], [1.1, 355.0], [1.2, 355.0], [1.3, 355.0], [1.4, 359.0], [1.5, 359.0], [1.6, 359.0], [1.7, 363.0], [1.8, 363.0], [1.9, 363.0], [2.0, 370.0], [2.1, 370.0], [2.2, 370.0], [2.3, 370.0], [2.4, 372.0], [2.5, 372.0], [2.6, 372.0], [2.7, 375.0], [2.8, 375.0], [2.9, 375.0], [3.0, 387.0], [3.1, 387.0], [3.2, 387.0], [3.3, 387.0], [3.4, 387.0], [3.5, 387.0], [3.6, 387.0], [3.7, 389.0], [3.8, 389.0], [3.9, 389.0], [4.0, 389.0], [4.1, 389.0], [4.2, 389.0], [4.3, 389.0], [4.4, 390.0], [4.5, 390.0], [4.6, 390.0], [4.7, 397.0], [4.8, 397.0], [4.9, 397.0], [5.0, 398.0], [5.1, 398.0], [5.2, 398.0], [5.3, 398.0], [5.4, 399.0], [5.5, 399.0], [5.6, 399.0], [5.7, 402.0], [5.8, 402.0], [5.9, 402.0], [6.0, 403.0], [6.1, 403.0], [6.2, 403.0], [6.3, 403.0], [6.4, 404.0], [6.5, 404.0], [6.6, 404.0], [6.7, 406.0], [6.8, 406.0], [6.9, 406.0], [7.0, 409.0], [7.1, 409.0], [7.2, 409.0], [7.3, 409.0], [7.4, 409.0], [7.5, 409.0], [7.6, 409.0], [7.7, 415.0], [7.8, 415.0], [7.9, 415.0], [8.0, 419.0], [8.1, 419.0], [8.2, 419.0], [8.3, 419.0], [8.4, 423.0], [8.5, 423.0], [8.6, 423.0], [8.7, 423.0], [8.8, 423.0], [8.9, 423.0], [9.0, 433.0], [9.1, 433.0], [9.2, 433.0], [9.3, 433.0], [9.4, 433.0], [9.5, 433.0], [9.6, 433.0], [9.7, 441.0], [9.8, 441.0], [9.9, 441.0], [10.0, 443.0], [10.1, 443.0], [10.2, 443.0], [10.3, 443.0], [10.4, 444.0], [10.5, 444.0], [10.6, 444.0], [10.7, 444.0], [10.8, 444.0], [10.9, 444.0], [11.0, 444.0], [11.1, 444.0], [11.2, 444.0], [11.3, 444.0], [11.4, 453.0], [11.5, 453.0], [11.6, 453.0], [11.7, 455.0], [11.8, 455.0], [11.9, 455.0], [12.0, 458.0], [12.1, 458.0], [12.2, 458.0], [12.3, 458.0], [12.4, 460.0], [12.5, 460.0], [12.6, 460.0], [12.7, 466.0], [12.8, 466.0], [12.9, 466.0], [13.0, 468.0], [13.1, 468.0], [13.2, 468.0], [13.3, 468.0], [13.4, 476.0], [13.5, 476.0], [13.6, 476.0], [13.7, 477.0], [13.8, 477.0], [13.9, 477.0], [14.0, 477.0], [14.1, 480.0], [14.2, 480.0], [14.3, 480.0], [14.4, 491.0], [14.5, 491.0], [14.6, 491.0], [14.7, 492.0], [14.8, 492.0], [14.9, 492.0], [15.0, 492.0], [15.1, 493.0], [15.2, 493.0], [15.3, 493.0], [15.4, 495.0], [15.5, 495.0], [15.6, 495.0], [15.7, 495.0], [15.8, 495.0], [15.9, 495.0], [16.0, 495.0], [16.1, 497.0], [16.2, 497.0], [16.3, 497.0], [16.4, 500.0], [16.5, 500.0], [16.6, 500.0], [16.7, 509.0], [16.8, 509.0], [16.9, 509.0], [17.0, 510.0], [17.1, 510.0], [17.2, 510.0], [17.3, 510.0], [17.4, 513.0], [17.5, 513.0], [17.6, 513.0], [17.7, 513.0], [17.8, 513.0], [17.9, 513.0], [18.0, 513.0], [18.1, 513.0], [18.2, 513.0], [18.3, 513.0], [18.4, 515.0], [18.5, 515.0], [18.6, 515.0], [18.7, 517.0], [18.8, 517.0], [18.9, 517.0], [19.0, 519.0], [19.1, 519.0], [19.2, 519.0], [19.3, 519.0], [19.4, 523.0], [19.5, 523.0], [19.6, 523.0], [19.7, 527.0], [19.8, 527.0], [19.9, 527.0], [20.0, 529.0], [20.1, 529.0], [20.2, 529.0], [20.3, 529.0], [20.4, 529.0], [20.5, 529.0], [20.6, 529.0], [20.7, 530.0], [20.8, 530.0], [20.9, 530.0], [21.0, 533.0], [21.1, 533.0], [21.2, 533.0], [21.3, 533.0], [21.4, 538.0], [21.5, 538.0], [21.6, 538.0], [21.7, 539.0], [21.8, 539.0], [21.9, 539.0], [22.0, 546.0], [22.1, 546.0], [22.2, 546.0], [22.3, 546.0], [22.4, 549.0], [22.5, 549.0], [22.6, 549.0], [22.7, 562.0], [22.8, 562.0], [22.9, 562.0], [23.0, 562.0], [23.1, 562.0], [23.2, 562.0], [23.3, 562.0], [23.4, 564.0], [23.5, 564.0], [23.6, 564.0], [23.7, 567.0], [23.8, 567.0], [23.9, 567.0], [24.0, 570.0], [24.1, 570.0], [24.2, 570.0], [24.3, 570.0], [24.4, 571.0], [24.5, 571.0], [24.6, 571.0], [24.7, 571.0], [24.8, 571.0], [24.9, 571.0], [25.0, 571.0], [25.1, 571.0], [25.2, 571.0], [25.3, 571.0], [25.4, 574.0], [25.5, 574.0], [25.6, 574.0], [25.7, 574.0], [25.8, 574.0], [25.9, 574.0], [26.0, 576.0], [26.1, 576.0], [26.2, 576.0], [26.3, 576.0], [26.4, 577.0], [26.5, 577.0], [26.6, 577.0], [26.7, 579.0], [26.8, 579.0], [26.9, 579.0], [27.0, 581.0], [27.1, 581.0], [27.2, 581.0], [27.3, 581.0], [27.4, 581.0], [27.5, 581.0], [27.6, 581.0], [27.7, 585.0], [27.8, 585.0], [27.9, 585.0], [28.0, 590.0], [28.1, 590.0], [28.2, 590.0], [28.3, 590.0], [28.4, 594.0], [28.5, 594.0], [28.6, 594.0], [28.7, 602.0], [28.8, 602.0], [28.9, 602.0], [29.0, 604.0], [29.1, 604.0], [29.2, 604.0], [29.3, 604.0], [29.4, 604.0], [29.5, 604.0], [29.6, 604.0], [29.7, 605.0], [29.8, 605.0], [29.9, 605.0], [30.0, 605.0], [30.1, 605.0], [30.2, 605.0], [30.3, 605.0], [30.4, 606.0], [30.5, 606.0], [30.6, 606.0], [30.7, 607.0], [30.8, 607.0], [30.9, 607.0], [31.0, 608.0], [31.1, 608.0], [31.2, 608.0], [31.3, 608.0], [31.4, 611.0], [31.5, 611.0], [31.6, 611.0], [31.7, 615.0], [31.8, 615.0], [31.9, 615.0], [32.0, 621.0], [32.1, 621.0], [32.2, 621.0], [32.3, 621.0], [32.4, 623.0], [32.5, 623.0], [32.6, 623.0], [32.7, 624.0], [32.8, 624.0], [32.9, 624.0], [33.0, 625.0], [33.1, 625.0], [33.2, 625.0], [33.3, 625.0], [33.4, 627.0], [33.5, 627.0], [33.6, 627.0], [33.7, 629.0], [33.8, 629.0], [33.9, 629.0], [34.0, 633.0], [34.1, 633.0], [34.2, 633.0], [34.3, 633.0], [34.4, 638.0], [34.5, 638.0], [34.6, 638.0], [34.7, 639.0], [34.8, 639.0], [34.9, 639.0], [35.0, 643.0], [35.1, 643.0], [35.2, 643.0], [35.3, 643.0], [35.4, 655.0], [35.5, 655.0], [35.6, 655.0], [35.7, 658.0], [35.8, 658.0], [35.9, 658.0], [36.0, 659.0], [36.1, 659.0], [36.2, 659.0], [36.3, 659.0], [36.4, 663.0], [36.5, 663.0], [36.6, 663.0], [36.7, 663.0], [36.8, 663.0], [36.9, 663.0], [37.0, 666.0], [37.1, 666.0], [37.2, 666.0], [37.3, 666.0], [37.4, 667.0], [37.5, 667.0], [37.6, 667.0], [37.7, 672.0], [37.8, 672.0], [37.9, 672.0], [38.0, 672.0], [38.1, 673.0], [38.2, 673.0], [38.3, 673.0], [38.4, 674.0], [38.5, 674.0], [38.6, 674.0], [38.7, 677.0], [38.8, 677.0], [38.9, 677.0], [39.0, 677.0], [39.1, 680.0], [39.2, 680.0], [39.3, 680.0], [39.4, 681.0], [39.5, 681.0], [39.6, 681.0], [39.7, 687.0], [39.8, 687.0], [39.9, 687.0], [40.0, 687.0], [40.1, 691.0], [40.2, 691.0], [40.3, 691.0], [40.4, 696.0], [40.5, 696.0], [40.6, 696.0], [40.7, 703.0], [40.8, 703.0], [40.9, 703.0], [41.0, 703.0], [41.1, 707.0], [41.2, 707.0], [41.3, 707.0], [41.4, 711.0], [41.5, 711.0], [41.6, 711.0], [41.7, 712.0], [41.8, 712.0], [41.9, 712.0], [42.0, 712.0], [42.1, 714.0], [42.2, 714.0], [42.3, 714.0], [42.4, 719.0], [42.5, 719.0], [42.6, 719.0], [42.7, 719.0], [42.8, 719.0], [42.9, 719.0], [43.0, 719.0], [43.1, 722.0], [43.2, 722.0], [43.3, 722.0], [43.4, 725.0], [43.5, 725.0], [43.6, 725.0], [43.7, 729.0], [43.8, 729.0], [43.9, 729.0], [44.0, 729.0], [44.1, 732.0], [44.2, 732.0], [44.3, 732.0], [44.4, 734.0], [44.5, 734.0], [44.6, 734.0], [44.7, 734.0], [44.8, 734.0], [44.9, 734.0], [45.0, 734.0], [45.1, 742.0], [45.2, 742.0], [45.3, 742.0], [45.4, 744.0], [45.5, 744.0], [45.6, 744.0], [45.7, 747.0], [45.8, 747.0], [45.9, 747.0], [46.0, 747.0], [46.1, 755.0], [46.2, 755.0], [46.3, 755.0], [46.4, 756.0], [46.5, 756.0], [46.6, 756.0], [46.7, 756.0], [46.8, 756.0], [46.9, 756.0], [47.0, 756.0], [47.1, 759.0], [47.2, 759.0], [47.3, 759.0], [47.4, 760.0], [47.5, 760.0], [47.6, 760.0], [47.7, 760.0], [47.8, 760.0], [47.9, 760.0], [48.0, 760.0], [48.1, 761.0], [48.2, 761.0], [48.3, 761.0], [48.4, 761.0], [48.5, 761.0], [48.6, 761.0], [48.7, 768.0], [48.8, 768.0], [48.9, 768.0], [49.0, 768.0], [49.1, 772.0], [49.2, 772.0], [49.3, 772.0], [49.4, 775.0], [49.5, 775.0], [49.6, 775.0], [49.7, 781.0], [49.8, 781.0], [49.9, 781.0], [50.0, 781.0], [50.1, 785.0], [50.2, 785.0], [50.3, 785.0], [50.4, 785.0], [50.5, 785.0], [50.6, 785.0], [50.7, 794.0], [50.8, 794.0], [50.9, 794.0], [51.0, 794.0], [51.1, 802.0], [51.2, 802.0], [51.3, 802.0], [51.4, 805.0], [51.5, 805.0], [51.6, 805.0], [51.7, 808.0], [51.8, 808.0], [51.9, 808.0], [52.0, 808.0], [52.1, 809.0], [52.2, 809.0], [52.3, 809.0], [52.4, 809.0], [52.5, 809.0], [52.6, 809.0], [52.7, 812.0], [52.8, 812.0], [52.9, 812.0], [53.0, 812.0], [53.1, 813.0], [53.2, 813.0], [53.3, 813.0], [53.4, 815.0], [53.5, 815.0], [53.6, 815.0], [53.7, 816.0], [53.8, 816.0], [53.9, 816.0], [54.0, 816.0], [54.1, 817.0], [54.2, 817.0], [54.3, 817.0], [54.4, 818.0], [54.5, 818.0], [54.6, 818.0], [54.7, 819.0], [54.8, 819.0], [54.9, 819.0], [55.0, 819.0], [55.1, 821.0], [55.2, 821.0], [55.3, 821.0], [55.4, 826.0], [55.5, 826.0], [55.6, 826.0], [55.7, 826.0], [55.8, 826.0], [55.9, 826.0], [56.0, 826.0], [56.1, 834.0], [56.2, 834.0], [56.3, 834.0], [56.4, 835.0], [56.5, 835.0], [56.6, 835.0], [56.7, 836.0], [56.8, 836.0], [56.9, 836.0], [57.0, 836.0], [57.1, 837.0], [57.2, 837.0], [57.3, 837.0], [57.4, 838.0], [57.5, 838.0], [57.6, 838.0], [57.7, 839.0], [57.8, 839.0], [57.9, 839.0], [58.0, 839.0], [58.1, 866.0], [58.2, 866.0], [58.3, 866.0], [58.4, 869.0], [58.5, 869.0], [58.6, 869.0], [58.7, 870.0], [58.8, 870.0], [58.9, 870.0], [59.0, 870.0], [59.1, 870.0], [59.2, 870.0], [59.3, 870.0], [59.4, 872.0], [59.5, 872.0], [59.6, 872.0], [59.7, 874.0], [59.8, 874.0], [59.9, 874.0], [60.0, 874.0], [60.1, 875.0], [60.2, 875.0], [60.3, 875.0], [60.4, 878.0], [60.5, 878.0], [60.6, 878.0], [60.7, 880.0], [60.8, 880.0], [60.9, 880.0], [61.0, 880.0], [61.1, 882.0], [61.2, 882.0], [61.3, 882.0], [61.4, 882.0], [61.5, 882.0], [61.6, 882.0], [61.7, 883.0], [61.8, 883.0], [61.9, 883.0], [62.0, 883.0], [62.1, 883.0], [62.2, 883.0], [62.3, 883.0], [62.4, 883.0], [62.5, 883.0], [62.6, 883.0], [62.7, 886.0], [62.8, 886.0], [62.9, 886.0], [63.0, 886.0], [63.1, 886.0], [63.2, 886.0], [63.3, 886.0], [63.4, 887.0], [63.5, 887.0], [63.6, 887.0], [63.7, 888.0], [63.8, 888.0], [63.9, 888.0], [64.0, 888.0], [64.1, 888.0], [64.2, 888.0], [64.3, 888.0], [64.4, 889.0], [64.5, 889.0], [64.6, 889.0], [64.7, 889.0], [64.8, 889.0], [64.9, 889.0], [65.0, 889.0], [65.1, 891.0], [65.2, 891.0], [65.3, 891.0], [65.4, 891.0], [65.5, 891.0], [65.6, 891.0], [65.7, 892.0], [65.8, 892.0], [65.9, 892.0], [66.0, 892.0], [66.1, 899.0], [66.2, 899.0], [66.3, 899.0], [66.4, 905.0], [66.5, 905.0], [66.6, 905.0], [66.7, 906.0], [66.8, 906.0], [66.9, 906.0], [67.0, 906.0], [67.1, 909.0], [67.2, 909.0], [67.3, 909.0], [67.4, 911.0], [67.5, 911.0], [67.6, 911.0], [67.7, 916.0], [67.8, 916.0], [67.9, 916.0], [68.0, 916.0], [68.1, 921.0], [68.2, 921.0], [68.3, 921.0], [68.4, 922.0], [68.5, 922.0], [68.6, 922.0], [68.7, 927.0], [68.8, 927.0], [68.9, 927.0], [69.0, 927.0], [69.1, 928.0], [69.2, 928.0], [69.3, 928.0], [69.4, 929.0], [69.5, 929.0], [69.6, 929.0], [69.7, 930.0], [69.8, 930.0], [69.9, 930.0], [70.0, 930.0], [70.1, 936.0], [70.2, 936.0], [70.3, 936.0], [70.4, 937.0], [70.5, 937.0], [70.6, 937.0], [70.7, 937.0], [70.8, 937.0], [70.9, 937.0], [71.0, 937.0], [71.1, 939.0], [71.2, 939.0], [71.3, 939.0], [71.4, 939.0], [71.5, 939.0], [71.6, 939.0], [71.7, 940.0], [71.8, 940.0], [71.9, 940.0], [72.0, 940.0], [72.1, 941.0], [72.2, 941.0], [72.3, 941.0], [72.4, 943.0], [72.5, 943.0], [72.6, 943.0], [72.7, 944.0], [72.8, 944.0], [72.9, 944.0], [73.0, 944.0], [73.1, 944.0], [73.2, 944.0], [73.3, 944.0], [73.4, 945.0], [73.5, 945.0], [73.6, 945.0], [73.7, 948.0], [73.8, 948.0], [73.9, 948.0], [74.0, 948.0], [74.1, 949.0], [74.2, 949.0], [74.3, 949.0], [74.4, 953.0], [74.5, 953.0], [74.6, 953.0], [74.7, 957.0], [74.8, 957.0], [74.9, 957.0], [75.0, 957.0], [75.1, 961.0], [75.2, 961.0], [75.3, 961.0], [75.4, 964.0], [75.5, 964.0], [75.6, 964.0], [75.7, 980.0], [75.8, 980.0], [75.9, 980.0], [76.0, 980.0], [76.1, 980.0], [76.2, 980.0], [76.3, 980.0], [76.4, 980.0], [76.5, 980.0], [76.6, 980.0], [76.7, 980.0], [76.8, 980.0], [76.9, 980.0], [77.0, 980.0], [77.1, 986.0], [77.2, 986.0], [77.3, 986.0], [77.4, 994.0], [77.5, 994.0], [77.6, 994.0], [77.7, 994.0], [77.8, 994.0], [77.9, 994.0], [78.0, 994.0], [78.1, 995.0], [78.2, 995.0], [78.3, 995.0], [78.4, 996.0], [78.5, 996.0], [78.6, 996.0], [78.7, 997.0], [78.8, 997.0], [78.9, 997.0], [79.0, 998.0], [79.1, 998.0], [79.2, 998.0], [79.3, 998.0], [79.4, 999.0], [79.5, 999.0], [79.6, 999.0], [79.7, 1000.0], [79.8, 1000.0], [79.9, 1000.0], [80.0, 1005.0], [80.1, 1005.0], [80.2, 1005.0], [80.3, 1005.0], [80.4, 1006.0], [80.5, 1006.0], [80.6, 1006.0], [80.7, 1007.0], [80.8, 1007.0], [80.9, 1007.0], [81.0, 1008.0], [81.1, 1008.0], [81.2, 1008.0], [81.3, 1008.0], [81.4, 1026.0], [81.5, 1026.0], [81.6, 1026.0], [81.7, 1037.0], [81.8, 1037.0], [81.9, 1037.0], [82.0, 1047.0], [82.1, 1047.0], [82.2, 1047.0], [82.3, 1047.0], [82.4, 1047.0], [82.5, 1047.0], [82.6, 1047.0], [82.7, 1054.0], [82.8, 1054.0], [82.9, 1054.0], [83.0, 1058.0], [83.1, 1058.0], [83.2, 1058.0], [83.3, 1058.0], [83.4, 1060.0], [83.5, 1060.0], [83.6, 1060.0], [83.7, 1063.0], [83.8, 1063.0], [83.9, 1063.0], [84.0, 1064.0], [84.1, 1064.0], [84.2, 1064.0], [84.3, 1064.0], [84.4, 1065.0], [84.5, 1065.0], [84.6, 1065.0], [84.7, 1065.0], [84.8, 1065.0], [84.9, 1065.0], [85.0, 1065.0], [85.1, 1065.0], [85.2, 1065.0], [85.3, 1065.0], [85.4, 1065.0], [85.5, 1065.0], [85.6, 1065.0], [85.7, 1067.0], [85.8, 1067.0], [85.9, 1067.0], [86.0, 1067.0], [86.1, 1067.0], [86.2, 1067.0], [86.3, 1067.0], [86.4, 1069.0], [86.5, 1069.0], [86.6, 1069.0], [86.7, 1069.0], [86.8, 1069.0], [86.9, 1069.0], [87.0, 1071.0], [87.1, 1071.0], [87.2, 1071.0], [87.3, 1071.0], [87.4, 1071.0], [87.5, 1071.0], [87.6, 1071.0], [87.7, 1072.0], [87.8, 1072.0], [87.9, 1072.0], [88.0, 1072.0], [88.1, 1072.0], [88.2, 1072.0], [88.3, 1072.0], [88.4, 1073.0], [88.5, 1073.0], [88.6, 1073.0], [88.7, 1074.0], [88.8, 1074.0], [88.9, 1074.0], [89.0, 1076.0], [89.1, 1076.0], [89.2, 1076.0], [89.3, 1076.0], [89.4, 1078.0], [89.5, 1078.0], [89.6, 1078.0], [89.7, 1078.0], [89.8, 1078.0], [89.9, 1078.0], [90.0, 1080.0], [90.1, 1080.0], [90.2, 1080.0], [90.3, 1080.0], [90.4, 1080.0], [90.5, 1080.0], [90.6, 1080.0], [90.7, 1080.0], [90.8, 1080.0], [90.9, 1080.0], [91.0, 1081.0], [91.1, 1081.0], [91.2, 1081.0], [91.3, 1081.0], [91.4, 1082.0], [91.5, 1082.0], [91.6, 1082.0], [91.7, 1083.0], [91.8, 1083.0], [91.9, 1083.0], [92.0, 1084.0], [92.1, 1084.0], [92.2, 1084.0], [92.3, 1084.0], [92.4, 1084.0], [92.5, 1084.0], [92.6, 1084.0], [92.7, 1084.0], [92.8, 1084.0], [92.9, 1084.0], [93.0, 1085.0], [93.1, 1085.0], [93.2, 1085.0], [93.3, 1085.0], [93.4, 1089.0], [93.5, 1089.0], [93.6, 1089.0], [93.7, 1090.0], [93.8, 1090.0], [93.9, 1090.0], [94.0, 1090.0], [94.1, 1090.0], [94.2, 1090.0], [94.3, 1090.0], [94.4, 1090.0], [94.5, 1090.0], [94.6, 1090.0], [94.7, 1090.0], [94.8, 1090.0], [94.9, 1090.0], [95.0, 1091.0], [95.1, 1091.0], [95.2, 1091.0], [95.3, 1091.0], [95.4, 1091.0], [95.5, 1091.0], [95.6, 1091.0], [95.7, 1095.0], [95.8, 1095.0], [95.9, 1095.0], [96.0, 1096.0], [96.1, 1096.0], [96.2, 1096.0], [96.3, 1096.0], [96.4, 1097.0], [96.5, 1097.0], [96.6, 1097.0], [96.7, 1100.0], [96.8, 1100.0], [96.9, 1100.0], [97.0, 1103.0], [97.1, 1103.0], [97.2, 1103.0], [97.3, 1103.0], [97.4, 1109.0], [97.5, 1109.0], [97.6, 1109.0], [97.7, 1378.0], [97.8, 1378.0], [97.9, 1378.0], [98.0, 1379.0], [98.1, 1379.0], [98.2, 1379.0], [98.3, 1379.0], [98.4, 1381.0], [98.5, 1381.0], [98.6, 1381.0], [98.7, 1382.0], [98.8, 1382.0], [98.9, 1382.0], [99.0, 1393.0], [99.1, 1393.0], [99.2, 1393.0], [99.3, 1393.0], [99.4, 1394.0], [99.5, 1394.0], [99.6, 1394.0], [99.7, 1772.0], [99.8, 1772.0], [99.9, 1772.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 51.0, "series": [{"data": [[1100.0, 3.0], [600.0, 36.0], [300.0, 17.0], [1300.0, 6.0], [700.0, 31.0], [800.0, 46.0], [400.0, 32.0], [1700.0, 1.0], [900.0, 40.0], [500.0, 37.0], [1000.0, 51.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 249.0, "series": [{"data": [[0.0, 50.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 249.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 160.87333333333336, "minX": 1.5717357E12, "maxY": 160.87333333333336, "series": [{"data": [[1.5717357E12, 160.87333333333336]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5717357E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 370.0, "minX": 1.0, "maxY": 1772.0, "series": [{"data": [[4.0, 1384.6666666666667], [6.0, 1378.0], [7.0, 1387.5], [9.0, 1096.5], [14.0, 585.0], [15.0, 634.5], [16.0, 1101.5], [18.0, 1091.0], [19.0, 1078.0], [20.0, 1080.0], [22.0, 1081.6], [25.0, 1084.0], [26.0, 1087.5], [28.0, 1083.0], [30.0, 1084.5], [32.0, 1083.0], [36.0, 1085.8333333333333], [39.0, 1081.6666666666667], [42.0, 1065.0], [44.0, 1064.75], [49.0, 1030.2], [57.0, 907.8571428571428], [56.0, 1065.0], [59.0, 1058.0], [62.0, 1046.0], [67.0, 629.0], [71.0, 996.0], [69.0, 945.0], [73.0, 936.0], [72.0, 1002.5], [79.0, 762.6], [77.0, 737.0], [76.0, 995.0], [83.0, 989.8], [87.0, 980.0], [86.0, 980.0], [91.0, 786.8333333333333], [95.0, 828.5], [100.0, 458.0], [107.0, 957.0], [106.0, 766.0], [104.0, 760.0], [111.0, 746.3333333333334], [110.0, 586.0], [109.0, 829.0], [113.0, 880.6666666666666], [118.0, 943.0], [116.0, 827.6666666666666], [122.0, 744.0], [121.0, 662.0], [126.0, 759.0], [124.0, 809.6666666666666], [130.0, 765.5], [141.0, 681.4444444444445], [144.0, 643.6], [163.0, 571.0], [174.0, 768.5], [172.0, 699.0], [171.0, 887.0], [170.0, 567.0], [168.0, 788.5], [183.0, 571.0], [181.0, 615.0], [179.0, 390.0], [176.0, 905.0], [205.0, 554.6666666666666], [206.0, 732.0], [210.0, 734.0], [208.0, 593.5], [222.0, 406.0], [221.0, 653.3333333333334], [219.0, 887.5], [217.0, 883.0], [230.0, 618.5], [229.0, 725.0], [227.0, 400.0], [226.0, 755.0], [224.0, 811.0], [238.0, 787.0], [237.0, 645.3333333333334], [236.0, 672.6666666666666], [235.0, 495.0], [233.0, 681.5], [232.0, 423.0], [247.0, 696.5], [245.0, 781.0], [244.0, 672.0], [242.0, 656.0], [241.0, 370.0], [255.0, 615.0], [254.0, 564.0], [253.0, 546.0], [252.0, 535.0], [249.0, 647.8], [248.0, 826.0], [260.0, 741.0], [258.0, 839.0], [256.0, 476.0], [287.0, 703.0], [286.0, 836.0], [284.0, 572.25], [283.0, 511.0], [280.0, 617.5714285714287], [279.0, 698.0], [276.0, 612.0], [300.0, 584.8888888888889], [297.0, 698.5], [295.0, 545.0], [294.0, 761.0], [292.0, 583.5], [291.0, 541.0], [289.0, 566.5], [1.0, 1772.0]], "isOverall": false, "label": "Access Live TV Page", "isController": false}, {"data": [[160.86333333333337, 774.5600000000003]], "isOverall": false, "label": "Access Live TV Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1130.0, "minX": 1.5717357E12, "maxY": 39449.3, "series": [{"data": [[1.5717357E12, 39449.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5717357E12, 1130.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5717357E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 774.5600000000003, "minX": 1.5717357E12, "maxY": 774.5600000000003, "series": [{"data": [[1.5717357E12, 774.5600000000003]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5717357E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 711.0299999999992, "minX": 1.5717357E12, "maxY": 711.0299999999992, "series": [{"data": [[1.5717357E12, 711.0299999999992]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5717357E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 540.7566666666671, "minX": 1.5717357E12, "maxY": 540.7566666666671, "series": [{"data": [[1.5717357E12, 540.7566666666671]], "isOverall": false, "label": "Access Live TV Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5717357E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 305.0, "minX": 1.5717357E12, "maxY": 1772.0, "series": [{"data": [[1.5717357E12, 1772.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5717357E12, 305.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5717357E12, 1079.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5717357E12, 1392.89]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5717357E12, 1090.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5717357E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 781.0, "minX": 1.0, "maxY": 1772.0, "series": [{"data": [[1.0, 1772.0], [299.0, 781.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 299.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 699.0, "minX": 1.0, "maxY": 1765.0, "series": [{"data": [[1.0, 1765.0], [299.0, 699.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 299.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.5717357E12, "maxY": 5.0, "series": [{"data": [[1.5717357E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5717357E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.5717357E12, "maxY": 5.0, "series": [{"data": [[1.5717357E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5717357E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.5717357E12, "maxY": 5.0, "series": [{"data": [[1.5717357E12, 5.0]], "isOverall": false, "label": "Access Live TV Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5717357E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.5717357E12, "maxY": 5.0, "series": [{"data": [[1.5717357E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5717357E12, "title": "Total Transactions Per Second"}},
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

