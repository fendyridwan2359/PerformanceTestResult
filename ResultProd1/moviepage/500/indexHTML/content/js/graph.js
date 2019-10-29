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
        data: {"result": {"minY": 256.0, "minX": 0.0, "maxY": 1325.0, "series": [{"data": [[0.0, 256.0], [0.1, 256.0], [0.2, 261.0], [0.3, 261.0], [0.4, 269.0], [0.5, 269.0], [0.6, 269.0], [0.7, 290.0], [0.8, 291.0], [0.9, 291.0], [1.0, 291.0], [1.1, 291.0], [1.2, 291.0], [1.3, 307.0], [1.4, 307.0], [1.5, 307.0], [1.6, 312.0], [1.7, 312.0], [1.8, 313.0], [1.9, 313.0], [2.0, 315.0], [2.1, 315.0], [2.2, 317.0], [2.3, 317.0], [2.4, 317.0], [2.5, 325.0], [2.6, 325.0], [2.7, 334.0], [2.8, 334.0], [2.9, 337.0], [3.0, 337.0], [3.1, 339.0], [3.2, 339.0], [3.3, 341.0], [3.4, 341.0], [3.5, 341.0], [3.6, 341.0], [3.7, 343.0], [3.8, 343.0], [3.9, 348.0], [4.0, 348.0], [4.1, 353.0], [4.2, 353.0], [4.3, 354.0], [4.4, 354.0], [4.5, 355.0], [4.6, 355.0], [4.7, 356.0], [4.8, 356.0], [4.9, 359.0], [5.0, 359.0], [5.1, 359.0], [5.2, 359.0], [5.3, 361.0], [5.4, 361.0], [5.5, 361.0], [5.6, 361.0], [5.7, 364.0], [5.8, 364.0], [5.9, 364.0], [6.0, 364.0], [6.1, 364.0], [6.2, 364.0], [6.3, 367.0], [6.4, 367.0], [6.5, 368.0], [6.6, 368.0], [6.7, 368.0], [6.8, 368.0], [6.9, 368.0], [7.0, 368.0], [7.1, 368.0], [7.2, 368.0], [7.3, 369.0], [7.4, 369.0], [7.5, 370.0], [7.6, 370.0], [7.7, 371.0], [7.8, 371.0], [7.9, 371.0], [8.0, 371.0], [8.1, 372.0], [8.2, 372.0], [8.3, 372.0], [8.4, 372.0], [8.5, 375.0], [8.6, 375.0], [8.7, 375.0], [8.8, 375.0], [8.9, 375.0], [9.0, 375.0], [9.1, 375.0], [9.2, 375.0], [9.3, 375.0], [9.4, 375.0], [9.5, 376.0], [9.6, 376.0], [9.7, 376.0], [9.8, 376.0], [9.9, 376.0], [10.0, 376.0], [10.1, 377.0], [10.2, 377.0], [10.3, 377.0], [10.4, 377.0], [10.5, 377.0], [10.6, 377.0], [10.7, 377.0], [10.8, 377.0], [10.9, 378.0], [11.0, 378.0], [11.1, 379.0], [11.2, 379.0], [11.3, 379.0], [11.4, 379.0], [11.5, 379.0], [11.6, 379.0], [11.7, 380.0], [11.8, 380.0], [11.9, 380.0], [12.0, 380.0], [12.1, 380.0], [12.2, 380.0], [12.3, 381.0], [12.4, 381.0], [12.5, 381.0], [12.6, 381.0], [12.7, 382.0], [12.8, 383.0], [12.9, 383.0], [13.0, 385.0], [13.1, 385.0], [13.2, 385.0], [13.3, 385.0], [13.4, 386.0], [13.5, 386.0], [13.6, 389.0], [13.7, 389.0], [13.8, 390.0], [13.9, 390.0], [14.0, 390.0], [14.1, 390.0], [14.2, 391.0], [14.3, 391.0], [14.4, 391.0], [14.5, 391.0], [14.6, 391.0], [14.7, 391.0], [14.8, 392.0], [14.9, 392.0], [15.0, 392.0], [15.1, 392.0], [15.2, 392.0], [15.3, 392.0], [15.4, 394.0], [15.5, 394.0], [15.6, 394.0], [15.7, 394.0], [15.8, 394.0], [15.9, 394.0], [16.0, 394.0], [16.1, 394.0], [16.2, 394.0], [16.3, 394.0], [16.4, 395.0], [16.5, 395.0], [16.6, 395.0], [16.7, 395.0], [16.8, 395.0], [16.9, 395.0], [17.0, 395.0], [17.1, 395.0], [17.2, 398.0], [17.3, 398.0], [17.4, 398.0], [17.5, 398.0], [17.6, 398.0], [17.7, 398.0], [17.8, 398.0], [17.9, 398.0], [18.0, 399.0], [18.1, 399.0], [18.2, 400.0], [18.3, 400.0], [18.4, 401.0], [18.5, 401.0], [18.6, 401.0], [18.7, 401.0], [18.8, 401.0], [18.9, 401.0], [19.0, 401.0], [19.1, 401.0], [19.2, 401.0], [19.3, 401.0], [19.4, 401.0], [19.5, 401.0], [19.6, 402.0], [19.7, 402.0], [19.8, 402.0], [19.9, 402.0], [20.0, 402.0], [20.1, 402.0], [20.2, 402.0], [20.3, 402.0], [20.4, 403.0], [20.5, 403.0], [20.6, 403.0], [20.7, 403.0], [20.8, 403.0], [20.9, 403.0], [21.0, 405.0], [21.1, 405.0], [21.2, 405.0], [21.3, 405.0], [21.4, 405.0], [21.5, 405.0], [21.6, 405.0], [21.7, 405.0], [21.8, 405.0], [21.9, 405.0], [22.0, 406.0], [22.1, 406.0], [22.2, 406.0], [22.3, 406.0], [22.4, 407.0], [22.5, 407.0], [22.6, 410.0], [22.7, 410.0], [22.8, 410.0], [22.9, 410.0], [23.0, 410.0], [23.1, 410.0], [23.2, 411.0], [23.3, 411.0], [23.4, 411.0], [23.5, 411.0], [23.6, 412.0], [23.7, 412.0], [23.8, 412.0], [23.9, 412.0], [24.0, 412.0], [24.1, 412.0], [24.2, 413.0], [24.3, 413.0], [24.4, 413.0], [24.5, 413.0], [24.6, 414.0], [24.7, 414.0], [24.8, 415.0], [24.9, 415.0], [25.0, 415.0], [25.1, 415.0], [25.2, 415.0], [25.3, 415.0], [25.4, 417.0], [25.5, 417.0], [25.6, 417.0], [25.7, 417.0], [25.8, 418.0], [25.9, 418.0], [26.0, 419.0], [26.1, 419.0], [26.2, 419.0], [26.3, 419.0], [26.4, 420.0], [26.5, 420.0], [26.6, 420.0], [26.7, 420.0], [26.8, 421.0], [26.9, 421.0], [27.0, 423.0], [27.1, 423.0], [27.2, 423.0], [27.3, 423.0], [27.4, 423.0], [27.5, 423.0], [27.6, 423.0], [27.7, 423.0], [27.8, 424.0], [27.9, 424.0], [28.0, 425.0], [28.1, 425.0], [28.2, 426.0], [28.3, 426.0], [28.4, 427.0], [28.5, 427.0], [28.6, 427.0], [28.7, 427.0], [28.8, 428.0], [28.9, 428.0], [29.0, 429.0], [29.1, 429.0], [29.2, 429.0], [29.3, 429.0], [29.4, 429.0], [29.5, 429.0], [29.6, 430.0], [29.7, 430.0], [29.8, 431.0], [29.9, 431.0], [30.0, 431.0], [30.1, 431.0], [30.2, 432.0], [30.3, 432.0], [30.4, 433.0], [30.5, 433.0], [30.6, 433.0], [30.7, 433.0], [30.8, 433.0], [30.9, 433.0], [31.0, 433.0], [31.1, 433.0], [31.2, 435.0], [31.3, 435.0], [31.4, 435.0], [31.5, 435.0], [31.6, 436.0], [31.7, 436.0], [31.8, 437.0], [31.9, 437.0], [32.0, 437.0], [32.1, 437.0], [32.2, 439.0], [32.3, 439.0], [32.4, 442.0], [32.5, 442.0], [32.6, 443.0], [32.7, 443.0], [32.8, 443.0], [32.9, 443.0], [33.0, 444.0], [33.1, 444.0], [33.2, 446.0], [33.3, 446.0], [33.4, 446.0], [33.5, 446.0], [33.6, 447.0], [33.7, 447.0], [33.8, 447.0], [33.9, 447.0], [34.0, 448.0], [34.1, 448.0], [34.2, 448.0], [34.3, 448.0], [34.4, 448.0], [34.5, 448.0], [34.6, 449.0], [34.7, 449.0], [34.8, 449.0], [34.9, 449.0], [35.0, 450.0], [35.1, 450.0], [35.2, 451.0], [35.3, 451.0], [35.4, 451.0], [35.5, 451.0], [35.6, 451.0], [35.7, 451.0], [35.8, 453.0], [35.9, 453.0], [36.0, 453.0], [36.1, 453.0], [36.2, 453.0], [36.3, 453.0], [36.4, 453.0], [36.5, 453.0], [36.6, 455.0], [36.7, 455.0], [36.8, 455.0], [36.9, 455.0], [37.0, 455.0], [37.1, 455.0], [37.2, 456.0], [37.3, 456.0], [37.4, 456.0], [37.5, 456.0], [37.6, 457.0], [37.7, 457.0], [37.8, 457.0], [37.9, 457.0], [38.0, 458.0], [38.1, 458.0], [38.2, 459.0], [38.3, 459.0], [38.4, 459.0], [38.5, 459.0], [38.6, 460.0], [38.7, 460.0], [38.8, 460.0], [38.9, 460.0], [39.0, 460.0], [39.1, 460.0], [39.2, 461.0], [39.3, 461.0], [39.4, 461.0], [39.5, 461.0], [39.6, 462.0], [39.7, 462.0], [39.8, 462.0], [39.9, 462.0], [40.0, 465.0], [40.1, 465.0], [40.2, 465.0], [40.3, 465.0], [40.4, 468.0], [40.5, 468.0], [40.6, 470.0], [40.7, 470.0], [40.8, 472.0], [40.9, 472.0], [41.0, 472.0], [41.1, 472.0], [41.2, 473.0], [41.3, 473.0], [41.4, 473.0], [41.5, 473.0], [41.6, 473.0], [41.7, 473.0], [41.8, 474.0], [41.9, 474.0], [42.0, 475.0], [42.1, 475.0], [42.2, 477.0], [42.3, 477.0], [42.4, 477.0], [42.5, 478.0], [42.6, 478.0], [42.7, 478.0], [42.8, 478.0], [42.9, 480.0], [43.0, 480.0], [43.1, 480.0], [43.2, 480.0], [43.3, 480.0], [43.4, 480.0], [43.5, 481.0], [43.6, 481.0], [43.7, 481.0], [43.8, 481.0], [43.9, 481.0], [44.0, 481.0], [44.1, 481.0], [44.2, 481.0], [44.3, 481.0], [44.4, 481.0], [44.5, 482.0], [44.6, 482.0], [44.7, 482.0], [44.8, 482.0], [44.9, 482.0], [45.0, 482.0], [45.1, 483.0], [45.2, 483.0], [45.3, 483.0], [45.4, 483.0], [45.5, 483.0], [45.6, 483.0], [45.7, 484.0], [45.8, 484.0], [45.9, 484.0], [46.0, 484.0], [46.1, 486.0], [46.2, 486.0], [46.3, 486.0], [46.4, 486.0], [46.5, 487.0], [46.6, 487.0], [46.7, 487.0], [46.8, 487.0], [46.9, 487.0], [47.0, 487.0], [47.1, 488.0], [47.2, 488.0], [47.3, 488.0], [47.4, 488.0], [47.5, 488.0], [47.6, 488.0], [47.7, 488.0], [47.8, 488.0], [47.9, 488.0], [48.0, 488.0], [48.1, 489.0], [48.2, 489.0], [48.3, 489.0], [48.4, 489.0], [48.5, 489.0], [48.6, 489.0], [48.7, 489.0], [48.8, 489.0], [48.9, 489.0], [49.0, 489.0], [49.1, 490.0], [49.2, 490.0], [49.3, 490.0], [49.4, 490.0], [49.5, 490.0], [49.6, 490.0], [49.7, 491.0], [49.8, 491.0], [49.9, 491.0], [50.0, 491.0], [50.1, 491.0], [50.2, 491.0], [50.3, 491.0], [50.4, 491.0], [50.5, 491.0], [50.6, 491.0], [50.7, 491.0], [50.8, 491.0], [50.9, 491.0], [51.0, 491.0], [51.1, 492.0], [51.2, 492.0], [51.3, 493.0], [51.4, 493.0], [51.5, 493.0], [51.6, 493.0], [51.7, 494.0], [51.8, 494.0], [51.9, 494.0], [52.0, 494.0], [52.1, 496.0], [52.2, 496.0], [52.3, 497.0], [52.4, 497.0], [52.5, 497.0], [52.6, 497.0], [52.7, 498.0], [52.8, 498.0], [52.9, 498.0], [53.0, 498.0], [53.1, 499.0], [53.2, 499.0], [53.3, 499.0], [53.4, 499.0], [53.5, 500.0], [53.6, 500.0], [53.7, 501.0], [53.8, 501.0], [53.9, 501.0], [54.0, 501.0], [54.1, 502.0], [54.2, 502.0], [54.3, 502.0], [54.4, 502.0], [54.5, 502.0], [54.6, 502.0], [54.7, 502.0], [54.8, 502.0], [54.9, 502.0], [55.0, 502.0], [55.1, 502.0], [55.2, 502.0], [55.3, 504.0], [55.4, 504.0], [55.5, 505.0], [55.6, 505.0], [55.7, 506.0], [55.8, 506.0], [55.9, 506.0], [56.0, 506.0], [56.1, 506.0], [56.2, 506.0], [56.3, 507.0], [56.4, 507.0], [56.5, 508.0], [56.6, 508.0], [56.7, 508.0], [56.8, 508.0], [56.9, 508.0], [57.0, 508.0], [57.1, 508.0], [57.2, 508.0], [57.3, 508.0], [57.4, 508.0], [57.5, 509.0], [57.6, 509.0], [57.7, 509.0], [57.8, 509.0], [57.9, 510.0], [58.0, 510.0], [58.1, 510.0], [58.2, 510.0], [58.3, 512.0], [58.4, 512.0], [58.5, 512.0], [58.6, 512.0], [58.7, 512.0], [58.8, 512.0], [58.9, 512.0], [59.0, 512.0], [59.1, 514.0], [59.2, 514.0], [59.3, 514.0], [59.4, 514.0], [59.5, 514.0], [59.6, 514.0], [59.7, 514.0], [59.8, 514.0], [59.9, 515.0], [60.0, 515.0], [60.1, 516.0], [60.2, 516.0], [60.3, 517.0], [60.4, 517.0], [60.5, 517.0], [60.6, 517.0], [60.7, 518.0], [60.8, 518.0], [60.9, 518.0], [61.0, 518.0], [61.1, 518.0], [61.2, 518.0], [61.3, 518.0], [61.4, 518.0], [61.5, 520.0], [61.6, 520.0], [61.7, 520.0], [61.8, 520.0], [61.9, 521.0], [62.0, 521.0], [62.1, 521.0], [62.2, 521.0], [62.3, 521.0], [62.4, 521.0], [62.5, 522.0], [62.6, 522.0], [62.7, 522.0], [62.8, 522.0], [62.9, 524.0], [63.0, 524.0], [63.1, 525.0], [63.2, 525.0], [63.3, 525.0], [63.4, 525.0], [63.5, 526.0], [63.6, 526.0], [63.7, 528.0], [63.8, 528.0], [63.9, 531.0], [64.0, 531.0], [64.1, 531.0], [64.2, 531.0], [64.3, 531.0], [64.4, 531.0], [64.5, 531.0], [64.6, 531.0], [64.7, 531.0], [64.8, 531.0], [64.9, 531.0], [65.0, 531.0], [65.1, 532.0], [65.2, 532.0], [65.3, 532.0], [65.4, 532.0], [65.5, 533.0], [65.6, 533.0], [65.7, 533.0], [65.8, 533.0], [65.9, 534.0], [66.0, 534.0], [66.1, 535.0], [66.2, 535.0], [66.3, 536.0], [66.4, 536.0], [66.5, 537.0], [66.6, 537.0], [66.7, 537.0], [66.8, 537.0], [66.9, 537.0], [67.0, 537.0], [67.1, 537.0], [67.2, 537.0], [67.3, 538.0], [67.4, 538.0], [67.5, 538.0], [67.6, 538.0], [67.7, 538.0], [67.8, 538.0], [67.9, 539.0], [68.0, 539.0], [68.1, 539.0], [68.2, 539.0], [68.3, 539.0], [68.4, 539.0], [68.5, 540.0], [68.6, 540.0], [68.7, 540.0], [68.8, 540.0], [68.9, 541.0], [69.0, 541.0], [69.1, 541.0], [69.2, 541.0], [69.3, 542.0], [69.4, 542.0], [69.5, 543.0], [69.6, 543.0], [69.7, 543.0], [69.8, 543.0], [69.9, 549.0], [70.0, 549.0], [70.1, 550.0], [70.2, 550.0], [70.3, 550.0], [70.4, 550.0], [70.5, 550.0], [70.6, 550.0], [70.7, 551.0], [70.8, 551.0], [70.9, 551.0], [71.0, 551.0], [71.1, 551.0], [71.2, 551.0], [71.3, 552.0], [71.4, 552.0], [71.5, 552.0], [71.6, 552.0], [71.7, 552.0], [71.8, 552.0], [71.9, 553.0], [72.0, 553.0], [72.1, 554.0], [72.2, 554.0], [72.3, 554.0], [72.4, 554.0], [72.5, 557.0], [72.6, 557.0], [72.7, 558.0], [72.8, 558.0], [72.9, 561.0], [73.0, 561.0], [73.1, 563.0], [73.2, 563.0], [73.3, 565.0], [73.4, 565.0], [73.5, 565.0], [73.6, 565.0], [73.7, 565.0], [73.8, 565.0], [73.9, 566.0], [74.0, 566.0], [74.1, 566.0], [74.2, 566.0], [74.3, 566.0], [74.4, 566.0], [74.5, 568.0], [74.6, 568.0], [74.7, 568.0], [74.8, 568.0], [74.9, 569.0], [75.0, 569.0], [75.1, 569.0], [75.2, 569.0], [75.3, 569.0], [75.4, 569.0], [75.5, 570.0], [75.6, 570.0], [75.7, 570.0], [75.8, 570.0], [75.9, 571.0], [76.0, 571.0], [76.1, 571.0], [76.2, 571.0], [76.3, 572.0], [76.4, 572.0], [76.5, 574.0], [76.6, 574.0], [76.7, 577.0], [76.8, 577.0], [76.9, 577.0], [77.0, 577.0], [77.1, 579.0], [77.2, 579.0], [77.3, 579.0], [77.4, 579.0], [77.5, 580.0], [77.6, 580.0], [77.7, 580.0], [77.8, 580.0], [77.9, 580.0], [78.0, 580.0], [78.1, 583.0], [78.2, 583.0], [78.3, 585.0], [78.4, 585.0], [78.5, 587.0], [78.6, 587.0], [78.7, 587.0], [78.8, 587.0], [78.9, 587.0], [79.0, 587.0], [79.1, 588.0], [79.2, 588.0], [79.3, 588.0], [79.4, 588.0], [79.5, 589.0], [79.6, 589.0], [79.7, 589.0], [79.8, 589.0], [79.9, 590.0], [80.0, 590.0], [80.1, 590.0], [80.2, 590.0], [80.3, 590.0], [80.4, 590.0], [80.5, 591.0], [80.6, 591.0], [80.7, 593.0], [80.8, 593.0], [80.9, 593.0], [81.0, 593.0], [81.1, 593.0], [81.2, 593.0], [81.3, 593.0], [81.4, 593.0], [81.5, 594.0], [81.6, 594.0], [81.7, 596.0], [81.8, 596.0], [81.9, 597.0], [82.0, 597.0], [82.1, 597.0], [82.2, 597.0], [82.3, 597.0], [82.4, 597.0], [82.5, 599.0], [82.6, 599.0], [82.7, 604.0], [82.8, 604.0], [82.9, 605.0], [83.0, 605.0], [83.1, 605.0], [83.2, 605.0], [83.3, 606.0], [83.4, 606.0], [83.5, 606.0], [83.6, 606.0], [83.7, 607.0], [83.8, 607.0], [83.9, 607.0], [84.0, 607.0], [84.1, 608.0], [84.2, 608.0], [84.3, 609.0], [84.4, 609.0], [84.5, 609.0], [84.6, 609.0], [84.7, 610.0], [84.8, 610.0], [84.9, 610.0], [85.0, 610.0], [85.1, 611.0], [85.2, 611.0], [85.3, 612.0], [85.4, 612.0], [85.5, 612.0], [85.6, 612.0], [85.7, 614.0], [85.8, 614.0], [85.9, 614.0], [86.0, 614.0], [86.1, 615.0], [86.2, 615.0], [86.3, 616.0], [86.4, 616.0], [86.5, 616.0], [86.6, 616.0], [86.7, 617.0], [86.8, 617.0], [86.9, 618.0], [87.0, 618.0], [87.1, 619.0], [87.2, 619.0], [87.3, 619.0], [87.4, 619.0], [87.5, 621.0], [87.6, 621.0], [87.7, 622.0], [87.8, 622.0], [87.9, 623.0], [88.0, 623.0], [88.1, 624.0], [88.2, 624.0], [88.3, 624.0], [88.4, 624.0], [88.5, 625.0], [88.6, 625.0], [88.7, 626.0], [88.8, 626.0], [88.9, 626.0], [89.0, 626.0], [89.1, 626.0], [89.2, 626.0], [89.3, 627.0], [89.4, 627.0], [89.5, 627.0], [89.6, 627.0], [89.7, 629.0], [89.8, 629.0], [89.9, 630.0], [90.0, 630.0], [90.1, 631.0], [90.2, 631.0], [90.3, 633.0], [90.4, 633.0], [90.5, 634.0], [90.6, 634.0], [90.7, 635.0], [90.8, 635.0], [90.9, 638.0], [91.0, 638.0], [91.1, 639.0], [91.2, 639.0], [91.3, 644.0], [91.4, 644.0], [91.5, 645.0], [91.6, 645.0], [91.7, 648.0], [91.8, 648.0], [91.9, 648.0], [92.0, 648.0], [92.1, 649.0], [92.2, 649.0], [92.3, 649.0], [92.4, 649.0], [92.5, 650.0], [92.6, 650.0], [92.7, 650.0], [92.8, 650.0], [92.9, 652.0], [93.0, 652.0], [93.1, 655.0], [93.2, 655.0], [93.3, 655.0], [93.4, 655.0], [93.5, 658.0], [93.6, 658.0], [93.7, 663.0], [93.8, 663.0], [93.9, 665.0], [94.0, 665.0], [94.1, 666.0], [94.2, 666.0], [94.3, 667.0], [94.4, 667.0], [94.5, 667.0], [94.6, 667.0], [94.7, 671.0], [94.8, 671.0], [94.9, 673.0], [95.0, 673.0], [95.1, 673.0], [95.2, 673.0], [95.3, 675.0], [95.4, 675.0], [95.5, 680.0], [95.6, 680.0], [95.7, 682.0], [95.8, 682.0], [95.9, 688.0], [96.0, 688.0], [96.1, 689.0], [96.2, 689.0], [96.3, 691.0], [96.4, 691.0], [96.5, 693.0], [96.6, 693.0], [96.7, 694.0], [96.8, 694.0], [96.9, 695.0], [97.0, 695.0], [97.1, 695.0], [97.2, 695.0], [97.3, 696.0], [97.4, 696.0], [97.5, 699.0], [97.6, 699.0], [97.7, 714.0], [97.8, 714.0], [97.9, 749.0], [98.0, 749.0], [98.1, 750.0], [98.2, 750.0], [98.3, 766.0], [98.4, 766.0], [98.5, 768.0], [98.6, 768.0], [98.7, 1105.0], [98.8, 1105.0], [98.9, 1112.0], [99.0, 1112.0], [99.1, 1112.0], [99.2, 1112.0], [99.3, 1147.0], [99.4, 1147.0], [99.5, 1287.0], [99.6, 1287.0], [99.7, 1324.0], [99.8, 1324.0], [99.9, 1325.0], [100.0, 1325.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 176.0, "series": [{"data": [[1100.0, 4.0], [300.0, 85.0], [600.0, 75.0], [1200.0, 1.0], [1300.0, 2.0], [700.0, 5.0], [200.0, 6.0], [400.0, 176.0], [500.0, 146.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 232.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 268.0, "series": [{"data": [[0.0, 268.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 232.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 234.86799999999988, "minX": 1.57232136E12, "maxY": 234.86799999999988, "series": [{"data": [[1.57232136E12, 234.86799999999988]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232136E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 280.0, "minX": 1.0, "maxY": 1325.0, "series": [{"data": [[2.0, 1112.0], [3.0, 1105.0], [4.0, 1147.0], [5.0, 1324.0], [6.0, 1325.0], [7.0, 1287.0], [8.0, 403.0], [9.0, 390.0], [10.0, 444.0], [12.0, 427.0], [14.0, 427.0], [16.0, 423.0], [17.0, 432.5], [18.0, 378.0], [24.0, 396.25], [27.0, 394.0], [28.0, 398.5], [29.0, 385.0], [30.0, 400.5], [33.0, 411.0], [32.0, 386.5], [34.0, 413.0], [37.0, 415.0], [36.0, 394.0], [38.0, 405.0], [41.0, 398.0], [46.0, 395.0], [50.0, 397.5], [55.0, 392.0], [57.0, 384.5], [59.0, 395.0], [61.0, 376.3333333333333], [65.0, 380.0], [64.0, 369.6666666666667], [71.0, 364.0], [69.0, 346.5], [68.0, 369.0], [74.0, 373.25], [72.0, 355.0], [79.0, 361.0], [78.0, 368.0], [77.0, 367.6666666666667], [83.0, 459.0], [80.0, 359.0], [87.0, 419.0], [91.0, 441.6666666666667], [89.0, 508.0], [88.0, 418.0], [96.0, 446.4], [102.0, 418.0], [101.0, 421.0], [100.0, 429.0], [107.0, 415.0], [104.0, 412.0], [110.0, 437.0], [113.0, 448.0], [119.0, 488.5], [122.0, 435.14285714285717], [127.0, 383.0], [126.0, 430.0], [125.0, 457.0], [124.0, 516.5], [135.0, 439.0], [134.0, 441.5], [133.0, 484.0], [132.0, 453.0], [130.0, 441.5], [129.0, 460.0], [142.0, 401.0], [141.0, 435.0], [139.0, 430.6666666666667], [137.0, 424.0], [151.0, 483.0], [150.0, 460.3333333333333], [148.0, 475.0], [147.0, 483.0], [146.0, 468.0], [144.0, 453.3333333333333], [159.0, 478.0], [158.0, 480.0], [155.0, 489.0], [154.0, 471.5], [153.0, 448.0], [165.0, 768.0], [164.0, 766.0], [163.0, 481.5], [162.0, 488.0], [160.0, 454.5], [175.0, 480.0], [173.0, 492.5], [171.0, 491.0], [169.0, 473.5], [168.0, 479.5], [182.0, 459.6666666666667], [179.0, 482.3333333333333], [178.0, 470.0], [191.0, 488.0], [190.0, 491.0], [189.0, 487.0], [187.0, 750.0], [186.0, 487.0], [184.0, 749.0], [199.0, 505.0], [198.0, 489.0], [196.0, 486.5], [195.0, 491.0], [193.0, 493.0], [192.0, 491.0], [205.0, 510.6666666666667], [203.0, 714.0], [202.0, 514.0], [200.0, 509.0], [213.0, 595.0], [211.0, 518.0], [210.0, 498.5], [208.0, 502.6666666666667], [221.0, 608.5], [219.0, 621.3333333333334], [216.0, 576.6666666666666], [231.0, 502.0], [229.0, 508.0], [228.0, 518.0], [227.0, 604.5], [226.0, 699.0], [224.0, 499.0], [238.0, 557.2], [236.0, 520.0], [232.0, 690.5], [244.0, 610.0], [240.0, 511.5], [252.0, 655.0], [250.0, 604.4], [249.0, 682.0], [271.0, 657.0], [270.0, 667.0], [269.0, 570.5], [266.0, 491.0], [261.0, 601.6666666666666], [260.0, 653.5], [258.0, 590.5], [287.0, 638.0], [284.0, 606.0], [283.0, 631.0], [282.0, 629.0], [281.0, 658.0], [279.0, 614.0], [273.0, 640.6666666666666], [302.0, 579.6666666666666], [299.0, 566.0], [297.0, 571.0], [294.0, 621.6666666666666], [292.0, 630.0], [291.0, 552.0], [289.0, 629.6666666666666], [288.0, 624.0], [318.0, 590.0], [319.0, 522.5], [316.0, 557.3333333333334], [314.0, 586.0], [313.0, 563.5], [310.0, 601.3333333333334], [308.0, 607.0], [306.0, 605.6666666666666], [304.0, 618.0], [335.0, 573.5], [334.0, 593.5], [331.0, 594.3333333333334], [328.0, 598.5], [327.0, 562.6], [326.0, 597.0], [325.0, 579.0], [324.0, 568.0], [323.0, 588.5], [320.0, 531.0], [348.0, 588.0], [341.0, 280.0], [351.0, 307.0], [347.0, 588.0], [346.0, 565.0], [345.0, 570.0], [343.0, 588.5], [338.0, 576.3333333333334], [337.0, 587.0], [342.0, 589.0], [340.0, 583.5], [352.0, 314.0], [367.0, 551.0], [366.0, 409.5], [365.0, 518.6666666666666], [363.0, 536.6], [362.0, 553.2222222222222], [361.0, 561.25], [360.0, 549.0], [380.0, 400.94117647058823], [375.0, 363.85714285714283], [369.0, 552.0], [368.0, 513.0], [371.0, 482.71428571428567], [370.0, 523.0], [381.0, 397.6], [377.0, 470.0], [383.0, 439.75], [379.0, 467.0], [382.0, 455.0], [378.0, 519.3333333333334], [374.0, 512.3333333333333], [373.0, 519.2857142857143], [372.0, 536.6666666666666], [388.0, 372.5], [390.0, 393.25], [389.0, 327.0], [392.0, 386.0], [391.0, 412.3333333333333], [387.0, 412.0], [386.0, 449.0], [385.0, 460.0], [1.0, 1112.0]], "isOverall": false, "label": "Access Movies Page", "isController": false}, {"data": [[234.86200000000005, 504.2200000000002]], "isOverall": false, "label": "Access Movies Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 392.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1925.0, "minX": 1.57232136E12, "maxY": 54783.333333333336, "series": [{"data": [[1.57232136E12, 54783.333333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232136E12, 1925.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232136E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 504.2200000000002, "minX": 1.57232136E12, "maxY": 504.2200000000002, "series": [{"data": [[1.57232136E12, 504.2200000000002]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232136E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 502.7179999999999, "minX": 1.57232136E12, "maxY": 502.7179999999999, "series": [{"data": [[1.57232136E12, 502.7179999999999]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232136E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 223.97799999999978, "minX": 1.57232136E12, "maxY": 223.97799999999978, "series": [{"data": [[1.57232136E12, 223.97799999999978]], "isOverall": false, "label": "Access Movies Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232136E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 256.0, "minX": 1.57232136E12, "maxY": 1325.0, "series": [{"data": [[1.57232136E12, 1325.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232136E12, 256.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232136E12, 630.9000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232136E12, 1112.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232136E12, 673.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232136E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 361.5, "minX": 3.0, "maxY": 1112.0, "series": [{"data": [[40.0, 361.5], [3.0, 1112.0], [457.0, 501.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 457.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 357.0, "minX": 3.0, "maxY": 1111.0, "series": [{"data": [[40.0, 357.0], [3.0, 1111.0], [457.0, 499.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 457.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232136E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232136E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232136E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232136E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232136E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232136E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232136E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232136E12, 8.333333333333334]], "isOverall": false, "label": "Access Movies Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232136E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232136E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232136E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232136E12, "title": "Total Transactions Per Second"}},
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

