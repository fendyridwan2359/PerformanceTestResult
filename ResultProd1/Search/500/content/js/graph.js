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
        data: {"result": {"minY": 67.0, "minX": 0.0, "maxY": 705.0, "series": [{"data": [[0.0, 67.0], [0.1, 67.0], [0.2, 98.0], [0.3, 98.0], [0.4, 100.0], [0.5, 100.0], [0.6, 100.0], [0.7, 102.0], [0.8, 102.0], [0.9, 102.0], [1.0, 103.0], [1.1, 103.0], [1.2, 103.0], [1.3, 103.0], [1.4, 106.0], [1.5, 106.0], [1.6, 106.0], [1.7, 106.0], [1.8, 108.0], [1.9, 108.0], [2.0, 109.0], [2.1, 109.0], [2.2, 110.0], [2.3, 110.0], [2.4, 110.0], [2.5, 110.0], [2.6, 111.0], [2.7, 111.0], [2.8, 118.0], [2.9, 118.0], [3.0, 119.0], [3.1, 119.0], [3.2, 123.0], [3.3, 123.0], [3.4, 123.0], [3.5, 126.0], [3.6, 126.0], [3.7, 126.0], [3.8, 126.0], [3.9, 127.0], [4.0, 127.0], [4.1, 127.0], [4.2, 128.0], [4.3, 128.0], [4.4, 128.0], [4.5, 128.0], [4.6, 128.0], [4.7, 129.0], [4.8, 129.0], [4.9, 130.0], [5.0, 130.0], [5.1, 130.0], [5.2, 130.0], [5.3, 131.0], [5.4, 131.0], [5.5, 131.0], [5.6, 131.0], [5.7, 132.0], [5.8, 132.0], [5.9, 137.0], [6.0, 137.0], [6.1, 137.0], [6.2, 137.0], [6.3, 138.0], [6.4, 138.0], [6.5, 143.0], [6.6, 143.0], [6.7, 144.0], [6.8, 144.0], [6.9, 144.0], [7.0, 144.0], [7.1, 145.0], [7.2, 145.0], [7.3, 146.0], [7.4, 146.0], [7.5, 146.0], [7.6, 146.0], [7.7, 147.0], [7.8, 147.0], [7.9, 147.0], [8.0, 147.0], [8.1, 147.0], [8.2, 147.0], [8.3, 148.0], [8.4, 148.0], [8.5, 148.0], [8.6, 148.0], [8.7, 149.0], [8.8, 149.0], [8.9, 149.0], [9.0, 149.0], [9.1, 149.0], [9.2, 149.0], [9.3, 149.0], [9.4, 149.0], [9.5, 149.0], [9.6, 149.0], [9.7, 152.0], [9.8, 152.0], [9.9, 152.0], [10.0, 152.0], [10.1, 153.0], [10.2, 153.0], [10.3, 154.0], [10.4, 154.0], [10.5, 155.0], [10.6, 155.0], [10.7, 155.0], [10.8, 155.0], [10.9, 156.0], [11.0, 156.0], [11.1, 156.0], [11.2, 156.0], [11.3, 156.0], [11.4, 156.0], [11.5, 158.0], [11.6, 158.0], [11.7, 158.0], [11.8, 158.0], [11.9, 158.0], [12.0, 158.0], [12.1, 160.0], [12.2, 160.0], [12.3, 160.0], [12.4, 160.0], [12.5, 162.0], [12.6, 162.0], [12.7, 163.0], [12.8, 164.0], [12.9, 164.0], [13.0, 164.0], [13.1, 164.0], [13.2, 164.0], [13.3, 164.0], [13.4, 165.0], [13.5, 165.0], [13.6, 166.0], [13.7, 166.0], [13.8, 167.0], [13.9, 167.0], [14.0, 167.0], [14.1, 167.0], [14.2, 168.0], [14.3, 168.0], [14.4, 168.0], [14.5, 168.0], [14.6, 169.0], [14.7, 169.0], [14.8, 170.0], [14.9, 170.0], [15.0, 170.0], [15.1, 170.0], [15.2, 171.0], [15.3, 171.0], [15.4, 171.0], [15.5, 171.0], [15.6, 172.0], [15.7, 172.0], [15.8, 173.0], [15.9, 173.0], [16.0, 173.0], [16.1, 173.0], [16.2, 173.0], [16.3, 173.0], [16.4, 175.0], [16.5, 175.0], [16.6, 177.0], [16.7, 177.0], [16.8, 179.0], [16.9, 179.0], [17.0, 182.0], [17.1, 182.0], [17.2, 182.0], [17.3, 182.0], [17.4, 183.0], [17.5, 183.0], [17.6, 183.0], [17.7, 183.0], [17.8, 184.0], [17.9, 184.0], [18.0, 184.0], [18.1, 184.0], [18.2, 185.0], [18.3, 185.0], [18.4, 186.0], [18.5, 186.0], [18.6, 186.0], [18.7, 186.0], [18.8, 186.0], [18.9, 186.0], [19.0, 187.0], [19.1, 187.0], [19.2, 187.0], [19.3, 187.0], [19.4, 187.0], [19.5, 187.0], [19.6, 188.0], [19.7, 188.0], [19.8, 188.0], [19.9, 188.0], [20.0, 191.0], [20.1, 191.0], [20.2, 193.0], [20.3, 193.0], [20.4, 194.0], [20.5, 194.0], [20.6, 194.0], [20.7, 194.0], [20.8, 195.0], [20.9, 195.0], [21.0, 196.0], [21.1, 196.0], [21.2, 197.0], [21.3, 197.0], [21.4, 197.0], [21.5, 197.0], [21.6, 198.0], [21.7, 198.0], [21.8, 198.0], [21.9, 198.0], [22.0, 199.0], [22.1, 199.0], [22.2, 199.0], [22.3, 199.0], [22.4, 200.0], [22.5, 200.0], [22.6, 200.0], [22.7, 200.0], [22.8, 201.0], [22.9, 201.0], [23.0, 203.0], [23.1, 203.0], [23.2, 207.0], [23.3, 207.0], [23.4, 207.0], [23.5, 207.0], [23.6, 209.0], [23.7, 209.0], [23.8, 210.0], [23.9, 210.0], [24.0, 213.0], [24.1, 213.0], [24.2, 216.0], [24.3, 216.0], [24.4, 217.0], [24.5, 217.0], [24.6, 217.0], [24.7, 217.0], [24.8, 218.0], [24.9, 218.0], [25.0, 218.0], [25.1, 218.0], [25.2, 218.0], [25.3, 218.0], [25.4, 220.0], [25.5, 220.0], [25.6, 220.0], [25.7, 220.0], [25.8, 223.0], [25.9, 223.0], [26.0, 224.0], [26.1, 224.0], [26.2, 231.0], [26.3, 231.0], [26.4, 240.0], [26.5, 240.0], [26.6, 240.0], [26.7, 240.0], [26.8, 241.0], [26.9, 241.0], [27.0, 246.0], [27.1, 246.0], [27.2, 246.0], [27.3, 246.0], [27.4, 252.0], [27.5, 252.0], [27.6, 253.0], [27.7, 253.0], [27.8, 253.0], [27.9, 253.0], [28.0, 260.0], [28.1, 260.0], [28.2, 264.0], [28.3, 264.0], [28.4, 264.0], [28.5, 264.0], [28.6, 271.0], [28.7, 271.0], [28.8, 275.0], [28.9, 275.0], [29.0, 275.0], [29.1, 275.0], [29.2, 275.0], [29.3, 275.0], [29.4, 278.0], [29.5, 278.0], [29.6, 279.0], [29.7, 279.0], [29.8, 284.0], [29.9, 284.0], [30.0, 289.0], [30.1, 289.0], [30.2, 290.0], [30.3, 290.0], [30.4, 291.0], [30.5, 291.0], [30.6, 292.0], [30.7, 292.0], [30.8, 295.0], [30.9, 295.0], [31.0, 295.0], [31.1, 295.0], [31.2, 297.0], [31.3, 297.0], [31.4, 300.0], [31.5, 300.0], [31.6, 302.0], [31.7, 302.0], [31.8, 303.0], [31.9, 303.0], [32.0, 304.0], [32.1, 304.0], [32.2, 305.0], [32.3, 305.0], [32.4, 309.0], [32.5, 309.0], [32.6, 312.0], [32.7, 312.0], [32.8, 313.0], [32.9, 313.0], [33.0, 322.0], [33.1, 322.0], [33.2, 326.0], [33.3, 326.0], [33.4, 327.0], [33.5, 327.0], [33.6, 330.0], [33.7, 330.0], [33.8, 334.0], [33.9, 334.0], [34.0, 335.0], [34.1, 335.0], [34.2, 338.0], [34.3, 338.0], [34.4, 338.0], [34.5, 338.0], [34.6, 340.0], [34.7, 340.0], [34.8, 344.0], [34.9, 344.0], [35.0, 344.0], [35.1, 344.0], [35.2, 355.0], [35.3, 355.0], [35.4, 358.0], [35.5, 358.0], [35.6, 360.0], [35.7, 360.0], [35.8, 365.0], [35.9, 365.0], [36.0, 367.0], [36.1, 367.0], [36.2, 375.0], [36.3, 375.0], [36.4, 375.0], [36.5, 378.0], [36.6, 378.0], [36.7, 380.0], [36.8, 380.0], [36.9, 389.0], [37.0, 389.0], [37.1, 393.0], [37.2, 393.0], [37.3, 393.0], [37.4, 393.0], [37.5, 395.0], [37.6, 395.0], [37.7, 395.0], [37.8, 395.0], [37.9, 396.0], [38.0, 396.0], [38.1, 398.0], [38.2, 398.0], [38.3, 399.0], [38.4, 399.0], [38.5, 400.0], [38.6, 400.0], [38.7, 404.0], [38.8, 404.0], [38.9, 404.0], [39.0, 404.0], [39.1, 405.0], [39.2, 405.0], [39.3, 407.0], [39.4, 407.0], [39.5, 409.0], [39.6, 409.0], [39.7, 415.0], [39.8, 415.0], [39.9, 417.0], [40.0, 417.0], [40.1, 422.0], [40.2, 422.0], [40.3, 423.0], [40.4, 423.0], [40.5, 424.0], [40.6, 424.0], [40.7, 424.0], [40.8, 424.0], [40.9, 425.0], [41.0, 425.0], [41.1, 425.0], [41.2, 425.0], [41.3, 427.0], [41.4, 427.0], [41.5, 429.0], [41.6, 429.0], [41.7, 444.0], [41.8, 444.0], [41.9, 449.0], [42.0, 449.0], [42.1, 450.0], [42.2, 450.0], [42.3, 454.0], [42.4, 454.0], [42.5, 459.0], [42.6, 459.0], [42.7, 460.0], [42.8, 460.0], [42.9, 466.0], [43.0, 466.0], [43.1, 469.0], [43.2, 469.0], [43.3, 470.0], [43.4, 470.0], [43.5, 470.0], [43.6, 470.0], [43.7, 471.0], [43.8, 471.0], [43.9, 472.0], [44.0, 472.0], [44.1, 472.0], [44.2, 472.0], [44.3, 473.0], [44.4, 473.0], [44.5, 477.0], [44.6, 477.0], [44.7, 481.0], [44.8, 481.0], [44.9, 487.0], [45.0, 487.0], [45.1, 491.0], [45.2, 491.0], [45.3, 492.0], [45.4, 492.0], [45.5, 494.0], [45.6, 494.0], [45.7, 498.0], [45.8, 498.0], [45.9, 504.0], [46.0, 504.0], [46.1, 506.0], [46.2, 506.0], [46.3, 515.0], [46.4, 515.0], [46.5, 522.0], [46.6, 522.0], [46.7, 528.0], [46.8, 528.0], [46.9, 529.0], [47.0, 529.0], [47.1, 530.0], [47.2, 530.0], [47.3, 536.0], [47.4, 536.0], [47.5, 538.0], [47.6, 538.0], [47.7, 538.0], [47.8, 538.0], [47.9, 539.0], [48.0, 539.0], [48.1, 539.0], [48.2, 539.0], [48.3, 539.0], [48.4, 539.0], [48.5, 540.0], [48.6, 540.0], [48.7, 547.0], [48.8, 547.0], [48.9, 550.0], [49.0, 550.0], [49.1, 555.0], [49.2, 555.0], [49.3, 558.0], [49.4, 558.0], [49.5, 558.0], [49.6, 558.0], [49.7, 561.0], [49.8, 561.0], [49.9, 562.0], [50.0, 562.0], [50.1, 562.0], [50.2, 562.0], [50.3, 563.0], [50.4, 563.0], [50.5, 567.0], [50.6, 567.0], [50.7, 568.0], [50.8, 568.0], [50.9, 569.0], [51.0, 569.0], [51.1, 571.0], [51.2, 571.0], [51.3, 571.0], [51.4, 571.0], [51.5, 579.0], [51.6, 579.0], [51.7, 579.0], [51.8, 579.0], [51.9, 580.0], [52.0, 580.0], [52.1, 580.0], [52.2, 580.0], [52.3, 581.0], [52.4, 581.0], [52.5, 582.0], [52.6, 582.0], [52.7, 582.0], [52.8, 582.0], [52.9, 582.0], [53.0, 582.0], [53.1, 582.0], [53.2, 582.0], [53.3, 583.0], [53.4, 583.0], [53.5, 583.0], [53.6, 583.0], [53.7, 584.0], [53.8, 584.0], [53.9, 584.0], [54.0, 584.0], [54.1, 585.0], [54.2, 585.0], [54.3, 586.0], [54.4, 586.0], [54.5, 587.0], [54.6, 587.0], [54.7, 587.0], [54.8, 587.0], [54.9, 587.0], [55.0, 587.0], [55.1, 588.0], [55.2, 588.0], [55.3, 588.0], [55.4, 588.0], [55.5, 589.0], [55.6, 589.0], [55.7, 589.0], [55.8, 589.0], [55.9, 590.0], [56.0, 590.0], [56.1, 591.0], [56.2, 591.0], [56.3, 592.0], [56.4, 592.0], [56.5, 593.0], [56.6, 593.0], [56.7, 593.0], [56.8, 593.0], [56.9, 594.0], [57.0, 594.0], [57.1, 594.0], [57.2, 594.0], [57.3, 595.0], [57.4, 595.0], [57.5, 600.0], [57.6, 600.0], [57.7, 600.0], [57.8, 600.0], [57.9, 602.0], [58.0, 602.0], [58.1, 602.0], [58.2, 602.0], [58.3, 602.0], [58.4, 602.0], [58.5, 603.0], [58.6, 603.0], [58.7, 603.0], [58.8, 603.0], [58.9, 605.0], [59.0, 605.0], [59.1, 605.0], [59.2, 605.0], [59.3, 605.0], [59.4, 605.0], [59.5, 607.0], [59.6, 607.0], [59.7, 607.0], [59.8, 607.0], [59.9, 607.0], [60.0, 607.0], [60.1, 608.0], [60.2, 608.0], [60.3, 608.0], [60.4, 608.0], [60.5, 608.0], [60.6, 608.0], [60.7, 611.0], [60.8, 611.0], [60.9, 614.0], [61.0, 614.0], [61.1, 614.0], [61.2, 614.0], [61.3, 615.0], [61.4, 615.0], [61.5, 618.0], [61.6, 618.0], [61.7, 618.0], [61.8, 618.0], [61.9, 618.0], [62.0, 618.0], [62.1, 619.0], [62.2, 619.0], [62.3, 619.0], [62.4, 619.0], [62.5, 620.0], [62.6, 620.0], [62.7, 620.0], [62.8, 620.0], [62.9, 620.0], [63.0, 620.0], [63.1, 621.0], [63.2, 621.0], [63.3, 622.0], [63.4, 622.0], [63.5, 622.0], [63.6, 622.0], [63.7, 624.0], [63.8, 624.0], [63.9, 625.0], [64.0, 625.0], [64.1, 626.0], [64.2, 626.0], [64.3, 626.0], [64.4, 626.0], [64.5, 626.0], [64.6, 626.0], [64.7, 627.0], [64.8, 627.0], [64.9, 628.0], [65.0, 628.0], [65.1, 628.0], [65.2, 628.0], [65.3, 629.0], [65.4, 629.0], [65.5, 629.0], [65.6, 629.0], [65.7, 630.0], [65.8, 630.0], [65.9, 630.0], [66.0, 630.0], [66.1, 630.0], [66.2, 630.0], [66.3, 630.0], [66.4, 630.0], [66.5, 631.0], [66.6, 631.0], [66.7, 631.0], [66.8, 631.0], [66.9, 632.0], [67.0, 632.0], [67.1, 632.0], [67.2, 632.0], [67.3, 632.0], [67.4, 632.0], [67.5, 633.0], [67.6, 633.0], [67.7, 633.0], [67.8, 633.0], [67.9, 633.0], [68.0, 633.0], [68.1, 633.0], [68.2, 633.0], [68.3, 634.0], [68.4, 634.0], [68.5, 634.0], [68.6, 634.0], [68.7, 634.0], [68.8, 634.0], [68.9, 634.0], [69.0, 634.0], [69.1, 635.0], [69.2, 635.0], [69.3, 635.0], [69.4, 635.0], [69.5, 636.0], [69.6, 636.0], [69.7, 637.0], [69.8, 637.0], [69.9, 637.0], [70.0, 637.0], [70.1, 637.0], [70.2, 637.0], [70.3, 637.0], [70.4, 637.0], [70.5, 638.0], [70.6, 638.0], [70.7, 638.0], [70.8, 638.0], [70.9, 638.0], [71.0, 638.0], [71.1, 638.0], [71.2, 638.0], [71.3, 639.0], [71.4, 639.0], [71.5, 639.0], [71.6, 639.0], [71.7, 640.0], [71.8, 640.0], [71.9, 640.0], [72.0, 640.0], [72.1, 640.0], [72.2, 640.0], [72.3, 640.0], [72.4, 640.0], [72.5, 640.0], [72.6, 640.0], [72.7, 642.0], [72.8, 642.0], [72.9, 643.0], [73.0, 643.0], [73.1, 643.0], [73.2, 643.0], [73.3, 643.0], [73.4, 643.0], [73.5, 644.0], [73.6, 644.0], [73.7, 644.0], [73.8, 644.0], [73.9, 644.0], [74.0, 644.0], [74.1, 645.0], [74.2, 645.0], [74.3, 645.0], [74.4, 645.0], [74.5, 646.0], [74.6, 646.0], [74.7, 647.0], [74.8, 647.0], [74.9, 647.0], [75.0, 647.0], [75.1, 648.0], [75.2, 648.0], [75.3, 648.0], [75.4, 648.0], [75.5, 648.0], [75.6, 648.0], [75.7, 650.0], [75.8, 650.0], [75.9, 651.0], [76.0, 651.0], [76.1, 651.0], [76.2, 651.0], [76.3, 651.0], [76.4, 651.0], [76.5, 652.0], [76.6, 652.0], [76.7, 652.0], [76.8, 652.0], [76.9, 653.0], [77.0, 653.0], [77.1, 653.0], [77.2, 653.0], [77.3, 653.0], [77.4, 653.0], [77.5, 653.0], [77.6, 653.0], [77.7, 654.0], [77.8, 654.0], [77.9, 655.0], [78.0, 655.0], [78.1, 655.0], [78.2, 655.0], [78.3, 656.0], [78.4, 656.0], [78.5, 656.0], [78.6, 656.0], [78.7, 656.0], [78.8, 656.0], [78.9, 656.0], [79.0, 656.0], [79.1, 656.0], [79.2, 656.0], [79.3, 656.0], [79.4, 656.0], [79.5, 656.0], [79.6, 656.0], [79.7, 657.0], [79.8, 657.0], [79.9, 657.0], [80.0, 657.0], [80.1, 657.0], [80.2, 657.0], [80.3, 657.0], [80.4, 657.0], [80.5, 657.0], [80.6, 657.0], [80.7, 657.0], [80.8, 657.0], [80.9, 658.0], [81.0, 658.0], [81.1, 660.0], [81.2, 660.0], [81.3, 660.0], [81.4, 660.0], [81.5, 660.0], [81.6, 660.0], [81.7, 660.0], [81.8, 660.0], [81.9, 661.0], [82.0, 661.0], [82.1, 661.0], [82.2, 661.0], [82.3, 662.0], [82.4, 662.0], [82.5, 663.0], [82.6, 663.0], [82.7, 663.0], [82.8, 663.0], [82.9, 664.0], [83.0, 664.0], [83.1, 664.0], [83.2, 664.0], [83.3, 665.0], [83.4, 665.0], [83.5, 665.0], [83.6, 665.0], [83.7, 665.0], [83.8, 665.0], [83.9, 665.0], [84.0, 665.0], [84.1, 666.0], [84.2, 666.0], [84.3, 667.0], [84.4, 667.0], [84.5, 667.0], [84.6, 667.0], [84.7, 668.0], [84.8, 668.0], [84.9, 668.0], [85.0, 668.0], [85.1, 668.0], [85.2, 668.0], [85.3, 668.0], [85.4, 668.0], [85.5, 668.0], [85.6, 668.0], [85.7, 669.0], [85.8, 669.0], [85.9, 669.0], [86.0, 669.0], [86.1, 670.0], [86.2, 670.0], [86.3, 670.0], [86.4, 670.0], [86.5, 671.0], [86.6, 671.0], [86.7, 671.0], [86.8, 671.0], [86.9, 672.0], [87.0, 672.0], [87.1, 672.0], [87.2, 672.0], [87.3, 672.0], [87.4, 672.0], [87.5, 673.0], [87.6, 673.0], [87.7, 673.0], [87.8, 673.0], [87.9, 674.0], [88.0, 674.0], [88.1, 674.0], [88.2, 674.0], [88.3, 674.0], [88.4, 674.0], [88.5, 674.0], [88.6, 674.0], [88.7, 674.0], [88.8, 674.0], [88.9, 674.0], [89.0, 674.0], [89.1, 675.0], [89.2, 675.0], [89.3, 675.0], [89.4, 675.0], [89.5, 676.0], [89.6, 676.0], [89.7, 676.0], [89.8, 676.0], [89.9, 677.0], [90.0, 677.0], [90.1, 677.0], [90.2, 677.0], [90.3, 678.0], [90.4, 678.0], [90.5, 678.0], [90.6, 678.0], [90.7, 679.0], [90.8, 679.0], [90.9, 679.0], [91.0, 679.0], [91.1, 679.0], [91.2, 679.0], [91.3, 680.0], [91.4, 680.0], [91.5, 680.0], [91.6, 680.0], [91.7, 681.0], [91.8, 681.0], [91.9, 681.0], [92.0, 681.0], [92.1, 681.0], [92.2, 681.0], [92.3, 681.0], [92.4, 681.0], [92.5, 683.0], [92.6, 683.0], [92.7, 683.0], [92.8, 683.0], [92.9, 684.0], [93.0, 684.0], [93.1, 685.0], [93.2, 685.0], [93.3, 685.0], [93.4, 685.0], [93.5, 686.0], [93.6, 686.0], [93.7, 687.0], [93.8, 687.0], [93.9, 687.0], [94.0, 687.0], [94.1, 688.0], [94.2, 688.0], [94.3, 688.0], [94.4, 688.0], [94.5, 688.0], [94.6, 688.0], [94.7, 688.0], [94.8, 688.0], [94.9, 689.0], [95.0, 689.0], [95.1, 689.0], [95.2, 689.0], [95.3, 690.0], [95.4, 690.0], [95.5, 690.0], [95.6, 690.0], [95.7, 691.0], [95.8, 691.0], [95.9, 691.0], [96.0, 691.0], [96.1, 692.0], [96.2, 692.0], [96.3, 692.0], [96.4, 692.0], [96.5, 693.0], [96.6, 693.0], [96.7, 693.0], [96.8, 693.0], [96.9, 694.0], [97.0, 694.0], [97.1, 695.0], [97.2, 695.0], [97.3, 695.0], [97.4, 695.0], [97.5, 695.0], [97.6, 695.0], [97.7, 697.0], [97.8, 697.0], [97.9, 698.0], [98.0, 698.0], [98.1, 698.0], [98.2, 698.0], [98.3, 699.0], [98.4, 699.0], [98.5, 700.0], [98.6, 700.0], [98.7, 701.0], [98.8, 701.0], [98.9, 702.0], [99.0, 702.0], [99.1, 703.0], [99.2, 703.0], [99.3, 703.0], [99.4, 703.0], [99.5, 703.0], [99.6, 703.0], [99.7, 704.0], [99.8, 704.0], [99.9, 705.0], [100.0, 705.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 205.0, "series": [{"data": [[0.0, 2.0], [600.0, 205.0], [300.0, 35.0], [700.0, 8.0], [100.0, 110.0], [400.0, 37.0], [200.0, 45.0], [500.0, 58.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 229.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 271.0, "series": [{"data": [[0.0, 229.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 271.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 392.372, "minX": 1.57232412E12, "maxY": 392.372, "series": [{"data": [[1.57232412E12, 392.372]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232412E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 67.0, "minX": 3.0, "maxY": 642.0, "series": [{"data": [[32.0, 130.0], [34.0, 139.625], [3.0, 191.0], [10.0, 191.5], [12.0, 200.0], [15.0, 192.27272727272725], [255.0, 67.0], [16.0, 170.0], [18.0, 148.0], [19.0, 172.0], [20.0, 149.0], [21.0, 162.0], [395.0, 595.25], [391.0, 474.1981566820277], [408.0, 642.0], [400.0, 126.5], [405.0, 513.0], [407.0, 598.3076923076925], [409.0, 529.0], [410.0, 600.0], [411.0, 605.0], [447.0, 246.0], [463.0, 173.2], [459.0, 495.2125], [460.0, 597.1666666666667], [462.0, 603.0], [465.0, 243.66666666666666], [464.0, 422.2875], [30.0, 156.0], [31.0, 131.66666666666666]], "isOverall": false, "label": "Search Video", "isController": false}, {"data": [[392.37000000000006, 458.6420000000003]], "isOverall": false, "label": "Search Video-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 465.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2591.6666666666665, "minX": 1.57232412E12, "maxY": 9143.916666666666, "series": [{"data": [[1.57232412E12, 9143.916666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232412E12, 2591.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232412E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 458.6420000000003, "minX": 1.57232412E12, "maxY": 458.6420000000003, "series": [{"data": [[1.57232412E12, 458.6420000000003]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232412E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 458.53799999999995, "minX": 1.57232412E12, "maxY": 458.53799999999995, "series": [{"data": [[1.57232412E12, 458.53799999999995]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232412E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 196.55799999999988, "minX": 1.57232412E12, "maxY": 196.55799999999988, "series": [{"data": [[1.57232412E12, 196.55799999999988]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232412E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 67.0, "minX": 1.57232412E12, "maxY": 705.0, "series": [{"data": [[1.57232412E12, 705.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232412E12, 67.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232412E12, 677.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232412E12, 702.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232412E12, 689.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232412E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 192.5, "minX": 16.0, "maxY": 579.0, "series": [{"data": [[16.0, 192.5], [484.0, 579.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 484.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 192.5, "minX": 16.0, "maxY": 579.0, "series": [{"data": [[16.0, 192.5], [484.0, 579.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 484.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232412E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232412E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232412E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232412E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232412E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232412E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232412E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232412E12, 8.333333333333334]], "isOverall": false, "label": "Search Video-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232412E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232412E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232412E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232412E12, "title": "Total Transactions Per Second"}},
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

