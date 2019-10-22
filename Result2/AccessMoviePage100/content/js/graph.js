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
        data: {"result": {"minY": 56.0, "minX": 0.0, "maxY": 762.0, "series": [{"data": [[0.0, 56.0], [0.1, 56.0], [0.2, 56.0], [0.3, 56.0], [0.4, 56.0], [0.5, 56.0], [0.6, 56.0], [0.7, 56.0], [0.8, 56.0], [0.9, 56.0], [1.0, 72.0], [1.1, 72.0], [1.2, 72.0], [1.3, 72.0], [1.4, 72.0], [1.5, 72.0], [1.6, 72.0], [1.7, 72.0], [1.8, 72.0], [1.9, 72.0], [2.0, 74.0], [2.1, 74.0], [2.2, 74.0], [2.3, 74.0], [2.4, 74.0], [2.5, 74.0], [2.6, 74.0], [2.7, 74.0], [2.8, 74.0], [2.9, 74.0], [3.0, 88.0], [3.1, 88.0], [3.2, 88.0], [3.3, 88.0], [3.4, 88.0], [3.5, 88.0], [3.6, 88.0], [3.7, 88.0], [3.8, 88.0], [3.9, 88.0], [4.0, 95.0], [4.1, 95.0], [4.2, 95.0], [4.3, 95.0], [4.4, 95.0], [4.5, 95.0], [4.6, 95.0], [4.7, 95.0], [4.8, 95.0], [4.9, 95.0], [5.0, 106.0], [5.1, 106.0], [5.2, 106.0], [5.3, 106.0], [5.4, 106.0], [5.5, 106.0], [5.6, 106.0], [5.7, 106.0], [5.8, 106.0], [5.9, 106.0], [6.0, 116.0], [6.1, 116.0], [6.2, 116.0], [6.3, 116.0], [6.4, 116.0], [6.5, 116.0], [6.6, 116.0], [6.7, 116.0], [6.8, 116.0], [6.9, 116.0], [7.0, 128.0], [7.1, 128.0], [7.2, 128.0], [7.3, 128.0], [7.4, 128.0], [7.5, 128.0], [7.6, 128.0], [7.7, 128.0], [7.8, 128.0], [7.9, 128.0], [8.0, 139.0], [8.1, 139.0], [8.2, 139.0], [8.3, 139.0], [8.4, 139.0], [8.5, 139.0], [8.6, 139.0], [8.7, 139.0], [8.8, 139.0], [8.9, 139.0], [9.0, 149.0], [9.1, 149.0], [9.2, 149.0], [9.3, 149.0], [9.4, 149.0], [9.5, 149.0], [9.6, 149.0], [9.7, 149.0], [9.8, 149.0], [9.9, 149.0], [10.0, 159.0], [10.1, 159.0], [10.2, 159.0], [10.3, 159.0], [10.4, 159.0], [10.5, 159.0], [10.6, 159.0], [10.7, 159.0], [10.8, 159.0], [10.9, 159.0], [11.0, 169.0], [11.1, 169.0], [11.2, 169.0], [11.3, 169.0], [11.4, 169.0], [11.5, 169.0], [11.6, 169.0], [11.7, 169.0], [11.8, 169.0], [11.9, 169.0], [12.0, 181.0], [12.1, 181.0], [12.2, 181.0], [12.3, 181.0], [12.4, 181.0], [12.5, 181.0], [12.6, 181.0], [12.7, 181.0], [12.8, 181.0], [12.9, 181.0], [13.0, 190.0], [13.1, 190.0], [13.2, 190.0], [13.3, 190.0], [13.4, 190.0], [13.5, 190.0], [13.6, 190.0], [13.7, 190.0], [13.8, 190.0], [13.9, 190.0], [14.0, 201.0], [14.1, 201.0], [14.2, 201.0], [14.3, 201.0], [14.4, 201.0], [14.5, 201.0], [14.6, 201.0], [14.7, 201.0], [14.8, 201.0], [14.9, 201.0], [15.0, 208.0], [15.1, 208.0], [15.2, 208.0], [15.3, 208.0], [15.4, 208.0], [15.5, 208.0], [15.6, 208.0], [15.7, 208.0], [15.8, 208.0], [15.9, 208.0], [16.0, 219.0], [16.1, 219.0], [16.2, 219.0], [16.3, 219.0], [16.4, 219.0], [16.5, 219.0], [16.6, 219.0], [16.7, 219.0], [16.8, 219.0], [16.9, 219.0], [17.0, 229.0], [17.1, 229.0], [17.2, 229.0], [17.3, 229.0], [17.4, 229.0], [17.5, 229.0], [17.6, 229.0], [17.7, 229.0], [17.8, 229.0], [17.9, 229.0], [18.0, 239.0], [18.1, 239.0], [18.2, 239.0], [18.3, 239.0], [18.4, 239.0], [18.5, 239.0], [18.6, 239.0], [18.7, 239.0], [18.8, 239.0], [18.9, 239.0], [19.0, 247.0], [19.1, 247.0], [19.2, 247.0], [19.3, 247.0], [19.4, 247.0], [19.5, 247.0], [19.6, 247.0], [19.7, 247.0], [19.8, 247.0], [19.9, 247.0], [20.0, 258.0], [20.1, 258.0], [20.2, 258.0], [20.3, 258.0], [20.4, 258.0], [20.5, 258.0], [20.6, 258.0], [20.7, 258.0], [20.8, 258.0], [20.9, 258.0], [21.0, 270.0], [21.1, 270.0], [21.2, 270.0], [21.3, 270.0], [21.4, 270.0], [21.5, 270.0], [21.6, 270.0], [21.7, 270.0], [21.8, 270.0], [21.9, 270.0], [22.0, 282.0], [22.1, 282.0], [22.2, 282.0], [22.3, 282.0], [22.4, 282.0], [22.5, 282.0], [22.6, 282.0], [22.7, 282.0], [22.8, 282.0], [22.9, 282.0], [23.0, 287.0], [23.1, 287.0], [23.2, 287.0], [23.3, 287.0], [23.4, 287.0], [23.5, 287.0], [23.6, 287.0], [23.7, 287.0], [23.8, 287.0], [23.9, 287.0], [24.0, 299.0], [24.1, 299.0], [24.2, 299.0], [24.3, 299.0], [24.4, 299.0], [24.5, 299.0], [24.6, 299.0], [24.7, 299.0], [24.8, 299.0], [24.9, 299.0], [25.0, 310.0], [25.1, 310.0], [25.2, 310.0], [25.3, 310.0], [25.4, 310.0], [25.5, 310.0], [25.6, 310.0], [25.7, 310.0], [25.8, 310.0], [25.9, 310.0], [26.0, 321.0], [26.1, 321.0], [26.2, 321.0], [26.3, 321.0], [26.4, 321.0], [26.5, 321.0], [26.6, 321.0], [26.7, 321.0], [26.8, 321.0], [26.9, 321.0], [27.0, 329.0], [27.1, 329.0], [27.2, 329.0], [27.3, 329.0], [27.4, 329.0], [27.5, 329.0], [27.6, 329.0], [27.7, 329.0], [27.8, 329.0], [27.9, 329.0], [28.0, 336.0], [28.1, 336.0], [28.2, 336.0], [28.3, 336.0], [28.4, 336.0], [28.5, 336.0], [28.6, 336.0], [28.7, 336.0], [28.8, 336.0], [28.9, 336.0], [29.0, 352.0], [29.1, 352.0], [29.2, 352.0], [29.3, 352.0], [29.4, 352.0], [29.5, 352.0], [29.6, 352.0], [29.7, 352.0], [29.8, 352.0], [29.9, 352.0], [30.0, 356.0], [30.1, 356.0], [30.2, 356.0], [30.3, 356.0], [30.4, 356.0], [30.5, 356.0], [30.6, 356.0], [30.7, 356.0], [30.8, 356.0], [30.9, 356.0], [31.0, 368.0], [31.1, 368.0], [31.2, 368.0], [31.3, 368.0], [31.4, 368.0], [31.5, 368.0], [31.6, 368.0], [31.7, 368.0], [31.8, 368.0], [31.9, 368.0], [32.0, 381.0], [32.1, 381.0], [32.2, 381.0], [32.3, 381.0], [32.4, 381.0], [32.5, 381.0], [32.6, 381.0], [32.7, 381.0], [32.8, 381.0], [32.9, 381.0], [33.0, 391.0], [33.1, 391.0], [33.2, 391.0], [33.3, 391.0], [33.4, 391.0], [33.5, 391.0], [33.6, 391.0], [33.7, 391.0], [33.8, 391.0], [33.9, 391.0], [34.0, 397.0], [34.1, 397.0], [34.2, 397.0], [34.3, 397.0], [34.4, 397.0], [34.5, 397.0], [34.6, 397.0], [34.7, 397.0], [34.8, 397.0], [34.9, 397.0], [35.0, 406.0], [35.1, 406.0], [35.2, 406.0], [35.3, 406.0], [35.4, 406.0], [35.5, 406.0], [35.6, 406.0], [35.7, 406.0], [35.8, 406.0], [35.9, 406.0], [36.0, 418.0], [36.1, 418.0], [36.2, 418.0], [36.3, 418.0], [36.4, 418.0], [36.5, 418.0], [36.6, 418.0], [36.7, 418.0], [36.8, 418.0], [36.9, 418.0], [37.0, 426.0], [37.1, 426.0], [37.2, 426.0], [37.3, 426.0], [37.4, 426.0], [37.5, 426.0], [37.6, 426.0], [37.7, 426.0], [37.8, 426.0], [37.9, 426.0], [38.0, 438.0], [38.1, 438.0], [38.2, 438.0], [38.3, 438.0], [38.4, 438.0], [38.5, 438.0], [38.6, 438.0], [38.7, 438.0], [38.8, 438.0], [38.9, 438.0], [39.0, 447.0], [39.1, 447.0], [39.2, 447.0], [39.3, 447.0], [39.4, 447.0], [39.5, 447.0], [39.6, 447.0], [39.7, 447.0], [39.8, 447.0], [39.9, 447.0], [40.0, 456.0], [40.1, 456.0], [40.2, 456.0], [40.3, 456.0], [40.4, 456.0], [40.5, 456.0], [40.6, 456.0], [40.7, 456.0], [40.8, 456.0], [40.9, 456.0], [41.0, 469.0], [41.1, 469.0], [41.2, 469.0], [41.3, 469.0], [41.4, 469.0], [41.5, 469.0], [41.6, 469.0], [41.7, 469.0], [41.8, 469.0], [41.9, 469.0], [42.0, 478.0], [42.1, 478.0], [42.2, 478.0], [42.3, 478.0], [42.4, 478.0], [42.5, 478.0], [42.6, 478.0], [42.7, 478.0], [42.8, 478.0], [42.9, 478.0], [43.0, 486.0], [43.1, 486.0], [43.2, 486.0], [43.3, 486.0], [43.4, 486.0], [43.5, 486.0], [43.6, 486.0], [43.7, 486.0], [43.8, 486.0], [43.9, 486.0], [44.0, 499.0], [44.1, 499.0], [44.2, 499.0], [44.3, 499.0], [44.4, 499.0], [44.5, 499.0], [44.6, 499.0], [44.7, 499.0], [44.8, 499.0], [44.9, 499.0], [45.0, 507.0], [45.1, 507.0], [45.2, 507.0], [45.3, 507.0], [45.4, 507.0], [45.5, 507.0], [45.6, 507.0], [45.7, 507.0], [45.8, 507.0], [45.9, 507.0], [46.0, 516.0], [46.1, 516.0], [46.2, 516.0], [46.3, 516.0], [46.4, 516.0], [46.5, 516.0], [46.6, 516.0], [46.7, 516.0], [46.8, 516.0], [46.9, 516.0], [47.0, 529.0], [47.1, 529.0], [47.2, 529.0], [47.3, 529.0], [47.4, 529.0], [47.5, 529.0], [47.6, 529.0], [47.7, 529.0], [47.8, 529.0], [47.9, 529.0], [48.0, 538.0], [48.1, 538.0], [48.2, 538.0], [48.3, 538.0], [48.4, 538.0], [48.5, 538.0], [48.6, 538.0], [48.7, 538.0], [48.8, 538.0], [48.9, 538.0], [49.0, 549.0], [49.1, 549.0], [49.2, 549.0], [49.3, 549.0], [49.4, 549.0], [49.5, 549.0], [49.6, 549.0], [49.7, 549.0], [49.8, 549.0], [49.9, 549.0], [50.0, 555.0], [50.1, 555.0], [50.2, 555.0], [50.3, 555.0], [50.4, 555.0], [50.5, 555.0], [50.6, 555.0], [50.7, 555.0], [50.8, 555.0], [50.9, 555.0], [51.0, 565.0], [51.1, 565.0], [51.2, 565.0], [51.3, 565.0], [51.4, 565.0], [51.5, 565.0], [51.6, 565.0], [51.7, 565.0], [51.8, 565.0], [51.9, 565.0], [52.0, 580.0], [52.1, 580.0], [52.2, 580.0], [52.3, 580.0], [52.4, 580.0], [52.5, 580.0], [52.6, 580.0], [52.7, 580.0], [52.8, 580.0], [52.9, 580.0], [53.0, 590.0], [53.1, 590.0], [53.2, 590.0], [53.3, 590.0], [53.4, 590.0], [53.5, 590.0], [53.6, 590.0], [53.7, 590.0], [53.8, 590.0], [53.9, 590.0], [54.0, 598.0], [54.1, 598.0], [54.2, 598.0], [54.3, 598.0], [54.4, 598.0], [54.5, 598.0], [54.6, 598.0], [54.7, 598.0], [54.8, 598.0], [54.9, 598.0], [55.0, 609.0], [55.1, 609.0], [55.2, 609.0], [55.3, 609.0], [55.4, 609.0], [55.5, 609.0], [55.6, 609.0], [55.7, 609.0], [55.8, 609.0], [55.9, 609.0], [56.0, 618.0], [56.1, 618.0], [56.2, 618.0], [56.3, 618.0], [56.4, 618.0], [56.5, 618.0], [56.6, 618.0], [56.7, 618.0], [56.8, 618.0], [56.9, 618.0], [57.0, 630.0], [57.1, 630.0], [57.2, 630.0], [57.3, 630.0], [57.4, 630.0], [57.5, 630.0], [57.6, 630.0], [57.7, 630.0], [57.8, 630.0], [57.9, 630.0], [58.0, 637.0], [58.1, 637.0], [58.2, 637.0], [58.3, 637.0], [58.4, 637.0], [58.5, 637.0], [58.6, 637.0], [58.7, 637.0], [58.8, 637.0], [58.9, 637.0], [59.0, 648.0], [59.1, 648.0], [59.2, 648.0], [59.3, 648.0], [59.4, 648.0], [59.5, 648.0], [59.6, 648.0], [59.7, 648.0], [59.8, 648.0], [59.9, 648.0], [60.0, 658.0], [60.1, 658.0], [60.2, 658.0], [60.3, 658.0], [60.4, 658.0], [60.5, 658.0], [60.6, 658.0], [60.7, 658.0], [60.8, 658.0], [60.9, 658.0], [61.0, 665.0], [61.1, 665.0], [61.2, 665.0], [61.3, 665.0], [61.4, 665.0], [61.5, 665.0], [61.6, 665.0], [61.7, 665.0], [61.8, 665.0], [61.9, 665.0], [62.0, 678.0], [62.1, 678.0], [62.2, 678.0], [62.3, 678.0], [62.4, 678.0], [62.5, 678.0], [62.6, 678.0], [62.7, 678.0], [62.8, 678.0], [62.9, 678.0], [63.0, 688.0], [63.1, 688.0], [63.2, 688.0], [63.3, 688.0], [63.4, 688.0], [63.5, 688.0], [63.6, 688.0], [63.7, 688.0], [63.8, 688.0], [63.9, 688.0], [64.0, 700.0], [64.1, 700.0], [64.2, 700.0], [64.3, 700.0], [64.4, 700.0], [64.5, 700.0], [64.6, 700.0], [64.7, 700.0], [64.8, 700.0], [64.9, 700.0], [65.0, 708.0], [65.1, 708.0], [65.2, 708.0], [65.3, 708.0], [65.4, 708.0], [65.5, 708.0], [65.6, 708.0], [65.7, 708.0], [65.8, 708.0], [65.9, 708.0], [66.0, 714.0], [66.1, 714.0], [66.2, 714.0], [66.3, 714.0], [66.4, 714.0], [66.5, 714.0], [66.6, 714.0], [66.7, 714.0], [66.8, 714.0], [66.9, 714.0], [67.0, 731.0], [67.1, 731.0], [67.2, 731.0], [67.3, 731.0], [67.4, 731.0], [67.5, 731.0], [67.6, 731.0], [67.7, 731.0], [67.8, 731.0], [67.9, 731.0], [68.0, 736.0], [68.1, 736.0], [68.2, 736.0], [68.3, 736.0], [68.4, 736.0], [68.5, 736.0], [68.6, 736.0], [68.7, 736.0], [68.8, 736.0], [68.9, 736.0], [69.0, 746.0], [69.1, 746.0], [69.2, 746.0], [69.3, 746.0], [69.4, 746.0], [69.5, 746.0], [69.6, 746.0], [69.7, 746.0], [69.8, 746.0], [69.9, 746.0], [70.0, 752.0], [70.1, 752.0], [70.2, 752.0], [70.3, 752.0], [70.4, 752.0], [70.5, 752.0], [70.6, 752.0], [70.7, 752.0], [70.8, 752.0], [70.9, 752.0], [71.0, 754.0], [71.1, 754.0], [71.2, 754.0], [71.3, 754.0], [71.4, 754.0], [71.5, 754.0], [71.6, 754.0], [71.7, 754.0], [71.8, 754.0], [71.9, 754.0], [72.0, 755.0], [72.1, 755.0], [72.2, 755.0], [72.3, 755.0], [72.4, 755.0], [72.5, 755.0], [72.6, 755.0], [72.7, 755.0], [72.8, 755.0], [72.9, 755.0], [73.0, 756.0], [73.1, 756.0], [73.2, 756.0], [73.3, 756.0], [73.4, 756.0], [73.5, 756.0], [73.6, 756.0], [73.7, 756.0], [73.8, 756.0], [73.9, 756.0], [74.0, 756.0], [74.1, 756.0], [74.2, 756.0], [74.3, 756.0], [74.4, 756.0], [74.5, 756.0], [74.6, 756.0], [74.7, 756.0], [74.8, 756.0], [74.9, 756.0], [75.0, 757.0], [75.1, 757.0], [75.2, 757.0], [75.3, 757.0], [75.4, 757.0], [75.5, 757.0], [75.6, 757.0], [75.7, 757.0], [75.8, 757.0], [75.9, 757.0], [76.0, 757.0], [76.1, 757.0], [76.2, 757.0], [76.3, 757.0], [76.4, 757.0], [76.5, 757.0], [76.6, 757.0], [76.7, 757.0], [76.8, 757.0], [76.9, 757.0], [77.0, 757.0], [77.1, 757.0], [77.2, 757.0], [77.3, 757.0], [77.4, 757.0], [77.5, 757.0], [77.6, 757.0], [77.7, 757.0], [77.8, 757.0], [77.9, 757.0], [78.0, 757.0], [78.1, 757.0], [78.2, 757.0], [78.3, 757.0], [78.4, 757.0], [78.5, 757.0], [78.6, 757.0], [78.7, 757.0], [78.8, 757.0], [78.9, 757.0], [79.0, 757.0], [79.1, 757.0], [79.2, 757.0], [79.3, 757.0], [79.4, 757.0], [79.5, 757.0], [79.6, 757.0], [79.7, 757.0], [79.8, 757.0], [79.9, 757.0], [80.0, 758.0], [80.1, 758.0], [80.2, 758.0], [80.3, 758.0], [80.4, 758.0], [80.5, 758.0], [80.6, 758.0], [80.7, 758.0], [80.8, 758.0], [80.9, 758.0], [81.0, 758.0], [81.1, 758.0], [81.2, 758.0], [81.3, 758.0], [81.4, 758.0], [81.5, 758.0], [81.6, 758.0], [81.7, 758.0], [81.8, 758.0], [81.9, 758.0], [82.0, 758.0], [82.1, 758.0], [82.2, 758.0], [82.3, 758.0], [82.4, 758.0], [82.5, 758.0], [82.6, 758.0], [82.7, 758.0], [82.8, 758.0], [82.9, 758.0], [83.0, 758.0], [83.1, 758.0], [83.2, 758.0], [83.3, 758.0], [83.4, 758.0], [83.5, 758.0], [83.6, 758.0], [83.7, 758.0], [83.8, 758.0], [83.9, 758.0], [84.0, 758.0], [84.1, 758.0], [84.2, 758.0], [84.3, 758.0], [84.4, 758.0], [84.5, 758.0], [84.6, 758.0], [84.7, 758.0], [84.8, 758.0], [84.9, 758.0], [85.0, 758.0], [85.1, 758.0], [85.2, 758.0], [85.3, 758.0], [85.4, 758.0], [85.5, 758.0], [85.6, 758.0], [85.7, 758.0], [85.8, 758.0], [85.9, 758.0], [86.0, 758.0], [86.1, 758.0], [86.2, 758.0], [86.3, 758.0], [86.4, 758.0], [86.5, 758.0], [86.6, 758.0], [86.7, 758.0], [86.8, 758.0], [86.9, 758.0], [87.0, 758.0], [87.1, 758.0], [87.2, 758.0], [87.3, 758.0], [87.4, 758.0], [87.5, 758.0], [87.6, 758.0], [87.7, 758.0], [87.8, 758.0], [87.9, 758.0], [88.0, 759.0], [88.1, 759.0], [88.2, 759.0], [88.3, 759.0], [88.4, 759.0], [88.5, 759.0], [88.6, 759.0], [88.7, 759.0], [88.8, 759.0], [88.9, 759.0], [89.0, 760.0], [89.1, 760.0], [89.2, 760.0], [89.3, 760.0], [89.4, 760.0], [89.5, 760.0], [89.6, 760.0], [89.7, 760.0], [89.8, 760.0], [89.9, 760.0], [90.0, 760.0], [90.1, 760.0], [90.2, 760.0], [90.3, 760.0], [90.4, 760.0], [90.5, 760.0], [90.6, 760.0], [90.7, 760.0], [90.8, 760.0], [90.9, 760.0], [91.0, 760.0], [91.1, 760.0], [91.2, 760.0], [91.3, 760.0], [91.4, 760.0], [91.5, 760.0], [91.6, 760.0], [91.7, 760.0], [91.8, 760.0], [91.9, 760.0], [92.0, 761.0], [92.1, 761.0], [92.2, 761.0], [92.3, 761.0], [92.4, 761.0], [92.5, 761.0], [92.6, 761.0], [92.7, 761.0], [92.8, 761.0], [92.9, 761.0], [93.0, 761.0], [93.1, 761.0], [93.2, 761.0], [93.3, 761.0], [93.4, 761.0], [93.5, 761.0], [93.6, 761.0], [93.7, 761.0], [93.8, 761.0], [93.9, 761.0], [94.0, 761.0], [94.1, 761.0], [94.2, 761.0], [94.3, 761.0], [94.4, 761.0], [94.5, 761.0], [94.6, 761.0], [94.7, 761.0], [94.8, 761.0], [94.9, 761.0], [95.0, 761.0], [95.1, 761.0], [95.2, 761.0], [95.3, 761.0], [95.4, 761.0], [95.5, 761.0], [95.6, 761.0], [95.7, 761.0], [95.8, 761.0], [95.9, 761.0], [96.0, 761.0], [96.1, 761.0], [96.2, 761.0], [96.3, 761.0], [96.4, 761.0], [96.5, 761.0], [96.6, 761.0], [96.7, 761.0], [96.8, 761.0], [96.9, 761.0], [97.0, 761.0], [97.1, 761.0], [97.2, 761.0], [97.3, 761.0], [97.4, 761.0], [97.5, 761.0], [97.6, 761.0], [97.7, 761.0], [97.8, 761.0], [97.9, 761.0], [98.0, 761.0], [98.1, 761.0], [98.2, 761.0], [98.3, 761.0], [98.4, 761.0], [98.5, 761.0], [98.6, 761.0], [98.7, 761.0], [98.8, 761.0], [98.9, 761.0], [99.0, 762.0], [99.1, 762.0], [99.2, 762.0], [99.3, 762.0], [99.4, 762.0], [99.5, 762.0], [99.6, 762.0], [99.7, 762.0], [99.8, 762.0], [99.9, 762.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 36.0, "series": [{"data": [[0.0, 5.0], [600.0, 9.0], [300.0, 10.0], [700.0, 36.0], [100.0, 9.0], [200.0, 11.0], [400.0, 10.0], [500.0, 10.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 55.0, "series": [{"data": [[0.0, 45.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 55.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.57172736E12, "maxY": 100.0, "series": [{"data": [[1.57172736E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 509.68, "minX": 100.0, "maxY": 509.68, "series": [{"data": [[100.0, 509.68]], "isOverall": false, "label": "Access Movies Page", "isController": false}, {"data": [[100.0, 509.68]], "isOverall": false, "label": "Access Movies Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 373.3333333333333, "minX": 1.57172736E12, "maxY": 13116.666666666666, "series": [{"data": [[1.57172736E12, 13116.666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57172736E12, 373.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 509.68, "minX": 1.57172736E12, "maxY": 509.68, "series": [{"data": [[1.57172736E12, 509.68]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 478.05999999999995, "minX": 1.57172736E12, "maxY": 478.05999999999995, "series": [{"data": [[1.57172736E12, 478.05999999999995]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 263.87999999999994, "minX": 1.57172736E12, "maxY": 263.87999999999994, "series": [{"data": [[1.57172736E12, 263.87999999999994]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 56.0, "minX": 1.57172736E12, "maxY": 762.0, "series": [{"data": [[1.57172736E12, 762.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57172736E12, 56.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57172736E12, 760.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57172736E12, 761.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57172736E12, 761.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 552.0, "minX": 100.0, "maxY": 552.0, "series": [{"data": [[100.0, 552.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 520.0, "minX": 100.0, "maxY": 520.0, "series": [{"data": [[100.0, 520.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172736E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172736E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172736E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172736E12, 1.6666666666666667]], "isOverall": false, "label": "Access Movies Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172736E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172736E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172736E12, "title": "Total Transactions Per Second"}},
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

