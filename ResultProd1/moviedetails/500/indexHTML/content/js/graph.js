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
        data: {"result": {"minY": 248.0, "minX": 0.0, "maxY": 3158.0, "series": [{"data": [[0.0, 248.0], [0.1, 248.0], [0.2, 256.0], [0.3, 256.0], [0.4, 256.0], [0.5, 256.0], [0.6, 256.0], [0.7, 259.0], [0.8, 259.0], [0.9, 259.0], [1.0, 261.0], [1.1, 261.0], [1.2, 261.0], [1.3, 261.0], [1.4, 262.0], [1.5, 262.0], [1.6, 263.0], [1.7, 263.0], [1.8, 264.0], [1.9, 264.0], [2.0, 273.0], [2.1, 273.0], [2.2, 279.0], [2.3, 279.0], [2.4, 307.0], [2.5, 307.0], [2.6, 309.0], [2.7, 309.0], [2.8, 309.0], [2.9, 310.0], [3.0, 310.0], [3.1, 310.0], [3.2, 310.0], [3.3, 310.0], [3.4, 310.0], [3.5, 322.0], [3.6, 322.0], [3.7, 323.0], [3.8, 323.0], [3.9, 324.0], [4.0, 324.0], [4.1, 333.0], [4.2, 333.0], [4.3, 334.0], [4.4, 334.0], [4.5, 335.0], [4.6, 335.0], [4.7, 336.0], [4.8, 336.0], [4.9, 338.0], [5.0, 338.0], [5.1, 338.0], [5.2, 338.0], [5.3, 348.0], [5.4, 348.0], [5.5, 348.0], [5.6, 348.0], [5.7, 349.0], [5.8, 349.0], [5.9, 352.0], [6.0, 352.0], [6.1, 355.0], [6.2, 355.0], [6.3, 357.0], [6.4, 357.0], [6.5, 358.0], [6.6, 358.0], [6.7, 359.0], [6.8, 359.0], [6.9, 359.0], [7.0, 359.0], [7.1, 360.0], [7.2, 360.0], [7.3, 364.0], [7.4, 364.0], [7.5, 367.0], [7.6, 367.0], [7.7, 372.0], [7.8, 372.0], [7.9, 374.0], [8.0, 374.0], [8.1, 376.0], [8.2, 376.0], [8.3, 377.0], [8.4, 377.0], [8.5, 378.0], [8.6, 378.0], [8.7, 378.0], [8.8, 378.0], [8.9, 379.0], [9.0, 379.0], [9.1, 380.0], [9.2, 380.0], [9.3, 384.0], [9.4, 384.0], [9.5, 384.0], [9.6, 384.0], [9.7, 385.0], [9.8, 385.0], [9.9, 385.0], [10.0, 385.0], [10.1, 386.0], [10.2, 386.0], [10.3, 386.0], [10.4, 386.0], [10.5, 386.0], [10.6, 386.0], [10.7, 388.0], [10.8, 391.0], [10.9, 391.0], [11.0, 391.0], [11.1, 391.0], [11.2, 391.0], [11.3, 393.0], [11.4, 393.0], [11.5, 393.0], [11.6, 393.0], [11.7, 397.0], [11.8, 399.0], [11.9, 399.0], [12.0, 403.0], [12.1, 403.0], [12.2, 406.0], [12.3, 406.0], [12.4, 410.0], [12.5, 410.0], [12.6, 410.0], [12.7, 410.0], [12.8, 410.0], [12.9, 410.0], [13.0, 410.0], [13.1, 410.0], [13.2, 413.0], [13.3, 413.0], [13.4, 421.0], [13.5, 421.0], [13.6, 422.0], [13.7, 422.0], [13.8, 424.0], [13.9, 424.0], [14.0, 426.0], [14.1, 426.0], [14.2, 427.0], [14.3, 427.0], [14.4, 428.0], [14.5, 428.0], [14.6, 428.0], [14.7, 428.0], [14.8, 431.0], [14.9, 431.0], [15.0, 434.0], [15.1, 434.0], [15.2, 435.0], [15.3, 435.0], [15.4, 441.0], [15.5, 441.0], [15.6, 442.0], [15.7, 442.0], [15.8, 442.0], [15.9, 442.0], [16.0, 443.0], [16.1, 443.0], [16.2, 451.0], [16.3, 451.0], [16.4, 451.0], [16.5, 451.0], [16.6, 453.0], [16.7, 453.0], [16.8, 453.0], [16.9, 453.0], [17.0, 453.0], [17.1, 453.0], [17.2, 454.0], [17.3, 454.0], [17.4, 455.0], [17.5, 455.0], [17.6, 460.0], [17.7, 460.0], [17.8, 461.0], [17.9, 461.0], [18.0, 462.0], [18.1, 462.0], [18.2, 463.0], [18.3, 463.0], [18.4, 463.0], [18.5, 463.0], [18.6, 463.0], [18.7, 463.0], [18.8, 463.0], [18.9, 463.0], [19.0, 464.0], [19.1, 464.0], [19.2, 465.0], [19.3, 465.0], [19.4, 465.0], [19.5, 465.0], [19.6, 468.0], [19.7, 468.0], [19.8, 468.0], [19.9, 468.0], [20.0, 468.0], [20.1, 468.0], [20.2, 469.0], [20.3, 469.0], [20.4, 469.0], [20.5, 469.0], [20.6, 470.0], [20.7, 470.0], [20.8, 470.0], [20.9, 470.0], [21.0, 470.0], [21.1, 470.0], [21.2, 470.0], [21.3, 470.0], [21.4, 471.0], [21.5, 471.0], [21.6, 472.0], [21.7, 472.0], [21.8, 473.0], [21.9, 473.0], [22.0, 474.0], [22.1, 474.0], [22.2, 474.0], [22.3, 474.0], [22.4, 475.0], [22.5, 475.0], [22.6, 475.0], [22.7, 475.0], [22.8, 475.0], [22.9, 475.0], [23.0, 476.0], [23.1, 476.0], [23.2, 476.0], [23.3, 476.0], [23.4, 477.0], [23.5, 477.0], [23.6, 477.0], [23.7, 477.0], [23.8, 478.0], [23.9, 478.0], [24.0, 479.0], [24.1, 479.0], [24.2, 479.0], [24.3, 479.0], [24.4, 479.0], [24.5, 479.0], [24.6, 479.0], [24.7, 479.0], [24.8, 480.0], [24.9, 480.0], [25.0, 480.0], [25.1, 480.0], [25.2, 481.0], [25.3, 481.0], [25.4, 481.0], [25.5, 481.0], [25.6, 482.0], [25.7, 482.0], [25.8, 484.0], [25.9, 484.0], [26.0, 484.0], [26.1, 484.0], [26.2, 486.0], [26.3, 486.0], [26.4, 487.0], [26.5, 487.0], [26.6, 488.0], [26.7, 488.0], [26.8, 488.0], [26.9, 488.0], [27.0, 488.0], [27.1, 488.0], [27.2, 488.0], [27.3, 488.0], [27.4, 489.0], [27.5, 489.0], [27.6, 489.0], [27.7, 489.0], [27.8, 489.0], [27.9, 489.0], [28.0, 490.0], [28.1, 490.0], [28.2, 490.0], [28.3, 490.0], [28.4, 491.0], [28.5, 491.0], [28.6, 492.0], [28.7, 492.0], [28.8, 493.0], [28.9, 493.0], [29.0, 495.0], [29.1, 495.0], [29.2, 495.0], [29.3, 495.0], [29.4, 496.0], [29.5, 496.0], [29.6, 499.0], [29.7, 499.0], [29.8, 500.0], [29.9, 500.0], [30.0, 500.0], [30.1, 500.0], [30.2, 501.0], [30.3, 501.0], [30.4, 501.0], [30.5, 501.0], [30.6, 501.0], [30.7, 501.0], [30.8, 502.0], [30.9, 502.0], [31.0, 505.0], [31.1, 505.0], [31.2, 505.0], [31.3, 505.0], [31.4, 506.0], [31.5, 506.0], [31.6, 507.0], [31.7, 507.0], [31.8, 508.0], [31.9, 508.0], [32.0, 508.0], [32.1, 508.0], [32.2, 509.0], [32.3, 509.0], [32.4, 509.0], [32.5, 509.0], [32.6, 510.0], [32.7, 510.0], [32.8, 510.0], [32.9, 510.0], [33.0, 511.0], [33.1, 511.0], [33.2, 512.0], [33.3, 512.0], [33.4, 512.0], [33.5, 512.0], [33.6, 513.0], [33.7, 513.0], [33.8, 513.0], [33.9, 513.0], [34.0, 513.0], [34.1, 513.0], [34.2, 515.0], [34.3, 515.0], [34.4, 517.0], [34.5, 517.0], [34.6, 519.0], [34.7, 519.0], [34.8, 519.0], [34.9, 519.0], [35.0, 520.0], [35.1, 520.0], [35.2, 520.0], [35.3, 520.0], [35.4, 522.0], [35.5, 522.0], [35.6, 525.0], [35.7, 525.0], [35.8, 526.0], [35.9, 526.0], [36.0, 527.0], [36.1, 527.0], [36.2, 528.0], [36.3, 528.0], [36.4, 529.0], [36.5, 529.0], [36.6, 535.0], [36.7, 535.0], [36.8, 539.0], [36.9, 539.0], [37.0, 540.0], [37.1, 540.0], [37.2, 542.0], [37.3, 542.0], [37.4, 543.0], [37.5, 543.0], [37.6, 544.0], [37.7, 544.0], [37.8, 544.0], [37.9, 548.0], [38.0, 548.0], [38.1, 551.0], [38.2, 551.0], [38.3, 554.0], [38.4, 554.0], [38.5, 558.0], [38.6, 558.0], [38.7, 565.0], [38.8, 565.0], [38.9, 574.0], [39.0, 574.0], [39.1, 577.0], [39.2, 577.0], [39.3, 583.0], [39.4, 583.0], [39.5, 585.0], [39.6, 585.0], [39.7, 585.0], [39.8, 585.0], [39.9, 587.0], [40.0, 587.0], [40.1, 588.0], [40.2, 588.0], [40.3, 594.0], [40.4, 594.0], [40.5, 595.0], [40.6, 595.0], [40.7, 599.0], [40.8, 599.0], [40.9, 599.0], [41.0, 599.0], [41.1, 600.0], [41.2, 600.0], [41.3, 600.0], [41.4, 600.0], [41.5, 605.0], [41.6, 605.0], [41.7, 607.0], [41.8, 607.0], [41.9, 608.0], [42.0, 608.0], [42.1, 609.0], [42.2, 609.0], [42.3, 612.0], [42.4, 612.0], [42.5, 613.0], [42.6, 613.0], [42.7, 615.0], [42.8, 615.0], [42.9, 616.0], [43.0, 616.0], [43.1, 617.0], [43.2, 617.0], [43.3, 617.0], [43.4, 617.0], [43.5, 619.0], [43.6, 619.0], [43.7, 622.0], [43.8, 622.0], [43.9, 627.0], [44.0, 627.0], [44.1, 628.0], [44.2, 628.0], [44.3, 629.0], [44.4, 629.0], [44.5, 630.0], [44.6, 630.0], [44.7, 630.0], [44.8, 630.0], [44.9, 631.0], [45.0, 631.0], [45.1, 631.0], [45.2, 631.0], [45.3, 636.0], [45.4, 636.0], [45.5, 638.0], [45.6, 638.0], [45.7, 640.0], [45.8, 640.0], [45.9, 640.0], [46.0, 640.0], [46.1, 640.0], [46.2, 640.0], [46.3, 641.0], [46.4, 641.0], [46.5, 642.0], [46.6, 642.0], [46.7, 642.0], [46.8, 642.0], [46.9, 643.0], [47.0, 643.0], [47.1, 645.0], [47.2, 645.0], [47.3, 648.0], [47.4, 648.0], [47.5, 649.0], [47.6, 649.0], [47.7, 649.0], [47.8, 649.0], [47.9, 651.0], [48.0, 651.0], [48.1, 651.0], [48.2, 651.0], [48.3, 651.0], [48.4, 651.0], [48.5, 651.0], [48.6, 651.0], [48.7, 652.0], [48.8, 652.0], [48.9, 652.0], [49.0, 652.0], [49.1, 653.0], [49.2, 653.0], [49.3, 653.0], [49.4, 653.0], [49.5, 654.0], [49.6, 654.0], [49.7, 657.0], [49.8, 657.0], [49.9, 660.0], [50.0, 660.0], [50.1, 660.0], [50.2, 660.0], [50.3, 662.0], [50.4, 662.0], [50.5, 663.0], [50.6, 663.0], [50.7, 663.0], [50.8, 663.0], [50.9, 664.0], [51.0, 664.0], [51.1, 664.0], [51.2, 664.0], [51.3, 668.0], [51.4, 668.0], [51.5, 669.0], [51.6, 669.0], [51.7, 670.0], [51.8, 670.0], [51.9, 671.0], [52.0, 671.0], [52.1, 672.0], [52.2, 672.0], [52.3, 672.0], [52.4, 672.0], [52.5, 672.0], [52.6, 672.0], [52.7, 672.0], [52.8, 672.0], [52.9, 672.0], [53.0, 672.0], [53.1, 675.0], [53.2, 675.0], [53.3, 677.0], [53.4, 677.0], [53.5, 677.0], [53.6, 677.0], [53.7, 678.0], [53.8, 678.0], [53.9, 678.0], [54.0, 678.0], [54.1, 678.0], [54.2, 678.0], [54.3, 679.0], [54.4, 679.0], [54.5, 680.0], [54.6, 680.0], [54.7, 681.0], [54.8, 681.0], [54.9, 682.0], [55.0, 682.0], [55.1, 683.0], [55.2, 683.0], [55.3, 684.0], [55.4, 684.0], [55.5, 684.0], [55.6, 684.0], [55.7, 685.0], [55.8, 685.0], [55.9, 687.0], [56.0, 687.0], [56.1, 688.0], [56.2, 688.0], [56.3, 688.0], [56.4, 688.0], [56.5, 689.0], [56.6, 689.0], [56.7, 690.0], [56.8, 690.0], [56.9, 690.0], [57.0, 690.0], [57.1, 691.0], [57.2, 691.0], [57.3, 691.0], [57.4, 691.0], [57.5, 692.0], [57.6, 692.0], [57.7, 692.0], [57.8, 692.0], [57.9, 693.0], [58.0, 693.0], [58.1, 694.0], [58.2, 694.0], [58.3, 694.0], [58.4, 694.0], [58.5, 695.0], [58.6, 695.0], [58.7, 695.0], [58.8, 695.0], [58.9, 695.0], [59.0, 695.0], [59.1, 697.0], [59.2, 697.0], [59.3, 698.0], [59.4, 698.0], [59.5, 699.0], [59.6, 699.0], [59.7, 699.0], [59.8, 699.0], [59.9, 700.0], [60.0, 700.0], [60.1, 701.0], [60.2, 701.0], [60.3, 701.0], [60.4, 701.0], [60.5, 701.0], [60.6, 701.0], [60.7, 701.0], [60.8, 701.0], [60.9, 703.0], [61.0, 703.0], [61.1, 703.0], [61.2, 703.0], [61.3, 703.0], [61.4, 703.0], [61.5, 703.0], [61.6, 703.0], [61.7, 704.0], [61.8, 704.0], [61.9, 704.0], [62.0, 704.0], [62.1, 705.0], [62.2, 705.0], [62.3, 705.0], [62.4, 705.0], [62.5, 705.0], [62.6, 705.0], [62.7, 706.0], [62.8, 706.0], [62.9, 706.0], [63.0, 706.0], [63.1, 707.0], [63.2, 707.0], [63.3, 707.0], [63.4, 707.0], [63.5, 708.0], [63.6, 708.0], [63.7, 708.0], [63.8, 708.0], [63.9, 709.0], [64.0, 709.0], [64.1, 709.0], [64.2, 709.0], [64.3, 710.0], [64.4, 710.0], [64.5, 711.0], [64.6, 711.0], [64.7, 711.0], [64.8, 711.0], [64.9, 712.0], [65.0, 712.0], [65.1, 713.0], [65.2, 713.0], [65.3, 714.0], [65.4, 714.0], [65.5, 714.0], [65.6, 714.0], [65.7, 715.0], [65.8, 715.0], [65.9, 716.0], [66.0, 716.0], [66.1, 716.0], [66.2, 716.0], [66.3, 717.0], [66.4, 717.0], [66.5, 718.0], [66.6, 718.0], [66.7, 718.0], [66.8, 718.0], [66.9, 719.0], [67.0, 719.0], [67.1, 721.0], [67.2, 721.0], [67.3, 721.0], [67.4, 721.0], [67.5, 723.0], [67.6, 723.0], [67.7, 724.0], [67.8, 724.0], [67.9, 725.0], [68.0, 725.0], [68.1, 727.0], [68.2, 727.0], [68.3, 727.0], [68.4, 727.0], [68.5, 728.0], [68.6, 728.0], [68.7, 729.0], [68.8, 729.0], [68.9, 729.0], [69.0, 729.0], [69.1, 729.0], [69.2, 729.0], [69.3, 730.0], [69.4, 730.0], [69.5, 731.0], [69.6, 731.0], [69.7, 731.0], [69.8, 731.0], [69.9, 733.0], [70.0, 733.0], [70.1, 734.0], [70.2, 734.0], [70.3, 735.0], [70.4, 735.0], [70.5, 736.0], [70.6, 736.0], [70.7, 738.0], [70.8, 738.0], [70.9, 738.0], [71.0, 738.0], [71.1, 740.0], [71.2, 740.0], [71.3, 741.0], [71.4, 741.0], [71.5, 742.0], [71.6, 742.0], [71.7, 742.0], [71.8, 742.0], [71.9, 745.0], [72.0, 745.0], [72.1, 745.0], [72.2, 745.0], [72.3, 746.0], [72.4, 746.0], [72.5, 747.0], [72.6, 747.0], [72.7, 747.0], [72.8, 747.0], [72.9, 748.0], [73.0, 748.0], [73.1, 751.0], [73.2, 751.0], [73.3, 751.0], [73.4, 751.0], [73.5, 755.0], [73.6, 755.0], [73.7, 756.0], [73.8, 756.0], [73.9, 760.0], [74.0, 760.0], [74.1, 760.0], [74.2, 760.0], [74.3, 764.0], [74.4, 764.0], [74.5, 773.0], [74.6, 773.0], [74.7, 773.0], [74.8, 773.0], [74.9, 774.0], [75.0, 774.0], [75.1, 776.0], [75.2, 776.0], [75.3, 776.0], [75.4, 776.0], [75.5, 778.0], [75.6, 778.0], [75.7, 780.0], [75.8, 780.0], [75.9, 784.0], [76.0, 784.0], [76.1, 787.0], [76.2, 787.0], [76.3, 789.0], [76.4, 789.0], [76.5, 794.0], [76.6, 794.0], [76.7, 795.0], [76.8, 795.0], [76.9, 803.0], [77.0, 803.0], [77.1, 836.0], [77.2, 836.0], [77.3, 836.0], [77.4, 836.0], [77.5, 837.0], [77.6, 837.0], [77.7, 837.0], [77.8, 837.0], [77.9, 839.0], [78.0, 839.0], [78.1, 841.0], [78.2, 841.0], [78.3, 841.0], [78.4, 841.0], [78.5, 848.0], [78.6, 848.0], [78.7, 850.0], [78.8, 850.0], [78.9, 852.0], [79.0, 852.0], [79.1, 855.0], [79.2, 855.0], [79.3, 857.0], [79.4, 857.0], [79.5, 859.0], [79.6, 859.0], [79.7, 861.0], [79.8, 861.0], [79.9, 862.0], [80.0, 862.0], [80.1, 863.0], [80.2, 863.0], [80.3, 864.0], [80.4, 864.0], [80.5, 867.0], [80.6, 867.0], [80.7, 879.0], [80.8, 879.0], [80.9, 934.0], [81.0, 934.0], [81.1, 935.0], [81.2, 935.0], [81.3, 936.0], [81.4, 936.0], [81.5, 941.0], [81.6, 941.0], [81.7, 945.0], [81.8, 945.0], [81.9, 948.0], [82.0, 948.0], [82.1, 949.0], [82.2, 949.0], [82.3, 957.0], [82.4, 957.0], [82.5, 962.0], [82.6, 962.0], [82.7, 966.0], [82.8, 966.0], [82.9, 977.0], [83.0, 977.0], [83.1, 982.0], [83.2, 982.0], [83.3, 987.0], [83.4, 987.0], [83.5, 1029.0], [83.6, 1029.0], [83.7, 1083.0], [83.8, 1083.0], [83.9, 1084.0], [84.0, 1084.0], [84.1, 1089.0], [84.2, 1089.0], [84.3, 1089.0], [84.4, 1089.0], [84.5, 1090.0], [84.6, 1090.0], [84.7, 1092.0], [84.8, 1092.0], [84.9, 1105.0], [85.0, 1105.0], [85.1, 1245.0], [85.2, 1245.0], [85.3, 1297.0], [85.4, 1297.0], [85.5, 1297.0], [85.6, 1297.0], [85.7, 1300.0], [85.8, 1300.0], [85.9, 1301.0], [86.0, 1301.0], [86.1, 1302.0], [86.2, 1302.0], [86.3, 1304.0], [86.4, 1304.0], [86.5, 1313.0], [86.6, 1313.0], [86.7, 1315.0], [86.8, 1315.0], [86.9, 1315.0], [87.0, 1315.0], [87.1, 1345.0], [87.2, 1345.0], [87.3, 1460.0], [87.4, 1460.0], [87.5, 1480.0], [87.6, 1480.0], [87.7, 1483.0], [87.8, 1483.0], [87.9, 1486.0], [88.0, 1486.0], [88.1, 1491.0], [88.2, 1491.0], [88.3, 1522.0], [88.4, 1522.0], [88.5, 1525.0], [88.6, 1525.0], [88.7, 1526.0], [88.8, 1526.0], [88.9, 1528.0], [89.0, 1528.0], [89.1, 1574.0], [89.2, 1574.0], [89.3, 1588.0], [89.4, 1588.0], [89.5, 1589.0], [89.6, 1589.0], [89.7, 1602.0], [89.8, 1602.0], [89.9, 1604.0], [90.0, 1604.0], [90.1, 1614.0], [90.2, 1614.0], [90.3, 1615.0], [90.4, 1615.0], [90.5, 1616.0], [90.6, 1616.0], [90.7, 1617.0], [90.8, 1617.0], [90.9, 1618.0], [91.0, 1618.0], [91.1, 1621.0], [91.2, 1621.0], [91.3, 1624.0], [91.4, 1624.0], [91.5, 1624.0], [91.6, 1624.0], [91.7, 1625.0], [91.8, 1625.0], [91.9, 1629.0], [92.0, 1629.0], [92.1, 1633.0], [92.2, 1633.0], [92.3, 1640.0], [92.4, 1640.0], [92.5, 1641.0], [92.6, 1641.0], [92.7, 1641.0], [92.8, 1641.0], [92.9, 1642.0], [93.0, 1642.0], [93.1, 1643.0], [93.2, 1643.0], [93.3, 1656.0], [93.4, 1656.0], [93.5, 1675.0], [93.6, 1675.0], [93.7, 1686.0], [93.8, 1686.0], [93.9, 1691.0], [94.0, 1691.0], [94.1, 1692.0], [94.2, 1692.0], [94.3, 1696.0], [94.4, 1696.0], [94.5, 1713.0], [94.6, 1713.0], [94.7, 1713.0], [94.8, 1713.0], [94.9, 1719.0], [95.0, 1719.0], [95.1, 1856.0], [95.2, 1856.0], [95.3, 3110.0], [95.4, 3110.0], [95.5, 3110.0], [95.6, 3110.0], [95.7, 3116.0], [95.8, 3116.0], [95.9, 3117.0], [96.0, 3117.0], [96.1, 3120.0], [96.2, 3120.0], [96.3, 3120.0], [96.4, 3120.0], [96.5, 3124.0], [96.6, 3124.0], [96.7, 3126.0], [96.8, 3126.0], [96.9, 3126.0], [97.0, 3126.0], [97.1, 3127.0], [97.2, 3127.0], [97.3, 3129.0], [97.4, 3129.0], [97.5, 3132.0], [97.6, 3132.0], [97.7, 3132.0], [97.8, 3132.0], [97.9, 3132.0], [98.0, 3132.0], [98.1, 3133.0], [98.2, 3133.0], [98.3, 3133.0], [98.4, 3133.0], [98.5, 3137.0], [98.6, 3137.0], [98.7, 3140.0], [98.8, 3140.0], [98.9, 3140.0], [99.0, 3140.0], [99.1, 3141.0], [99.2, 3141.0], [99.3, 3154.0], [99.4, 3154.0], [99.5, 3154.0], [99.6, 3154.0], [99.7, 3155.0], [99.8, 3155.0], [99.9, 3158.0], [100.0, 3158.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 94.0, "series": [{"data": [[600.0, 94.0], [700.0, 85.0], [3100.0, 24.0], [200.0, 12.0], [800.0, 20.0], [900.0, 13.0], [1000.0, 7.0], [1100.0, 1.0], [300.0, 48.0], [1200.0, 3.0], [1300.0, 8.0], [1400.0, 5.0], [1500.0, 7.0], [400.0, 89.0], [1600.0, 24.0], [1700.0, 3.0], [1800.0, 1.0], [500.0, 56.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 59.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 290.0, "series": [{"data": [[0.0, 151.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 290.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 59.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 255.23799999999972, "minX": 1.57232358E12, "maxY": 255.23799999999972, "series": [{"data": [[1.57232358E12, 255.23799999999972]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232358E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 259.0, "minX": 4.0, "maxY": 3155.25, "series": [{"data": [[4.0, 3155.25], [6.0, 3124.0], [9.0, 3118.6666666666665], [11.0, 3121.0], [14.0, 3135.0], [16.0, 3125.5], [20.0, 3137.75], [21.0, 3129.0], [23.0, 3123.0], [24.0, 3117.0], [25.0, 1856.0], [28.0, 1708.0], [30.0, 1673.0], [31.0, 1491.0], [36.0, 1580.5], [39.0, 1624.0], [41.0, 1621.2857142857142], [43.0, 1561.5], [45.0, 1686.0], [44.0, 1641.0], [49.0, 1615.6666666666667], [51.0, 1656.0], [50.0, 1524.0], [53.0, 1522.0], [52.0, 1315.0], [57.0, 1617.0], [58.0, 1613.75], [60.0, 1641.0], [66.0, 1302.0], [65.0, 1554.0], [71.0, 1297.0], [69.0, 1301.6666666666667], [74.0, 1089.3333333333333], [78.0, 1225.0], [76.0, 1083.5], [83.0, 1029.0], [82.0, 1092.0], [81.0, 1279.0], [80.0, 1315.0], [91.0, 850.0], [90.0, 948.0], [88.0, 885.4], [94.0, 902.75], [97.0, 954.3333333333334], [103.0, 660.0], [102.0, 951.5], [100.0, 888.6666666666666], [106.0, 852.0], [105.0, 645.0], [104.0, 935.0], [115.0, 862.3333333333334], [119.0, 879.0], [118.0, 792.0], [117.0, 726.0], [116.0, 791.0], [123.0, 738.1666666666667], [120.0, 859.0], [132.0, 275.3333333333333], [129.0, 259.0], [128.0, 545.6], [138.0, 433.1666666666667], [148.0, 465.875], [147.0, 413.0], [146.0, 454.0], [159.0, 476.5], [158.0, 475.0], [157.0, 470.0], [154.0, 623.0], [165.0, 608.5], [164.0, 749.0], [161.0, 473.0], [174.0, 737.8], [172.0, 648.0], [170.0, 577.6666666666666], [169.0, 688.0], [177.0, 481.5], [176.0, 745.0], [190.0, 701.5], [189.0, 484.0], [188.0, 489.0], [187.0, 603.0], [185.0, 641.0], [198.0, 751.0], [197.0, 743.0], [196.0, 721.5], [193.0, 760.5], [192.0, 700.5], [207.0, 708.0], [202.0, 687.6], [201.0, 756.0], [214.0, 599.0], [211.0, 669.0], [209.0, 734.0], [208.0, 731.5], [223.0, 710.5], [217.0, 685.4], [231.0, 689.0], [229.0, 741.0], [227.0, 658.0], [225.0, 718.0], [238.0, 642.3333333333334], [237.0, 677.0], [247.0, 719.3333333333334], [245.0, 667.5], [244.0, 682.0], [243.0, 628.0], [255.0, 682.5], [254.0, 672.0], [252.0, 656.0], [248.0, 733.0], [270.0, 631.0], [260.0, 679.8], [259.0, 651.0], [258.0, 728.0], [257.0, 730.5], [256.0, 700.0], [284.0, 706.0], [286.0, 681.0], [287.0, 700.0], [285.0, 488.0], [283.0, 489.0], [281.0, 657.0], [277.0, 579.3333333333334], [276.0, 689.3333333333334], [275.0, 710.0], [274.0, 714.0], [273.0, 650.0], [302.0, 698.6666666666666], [303.0, 703.0], [300.0, 708.0], [291.0, 688.0], [290.0, 688.3333333333334], [299.0, 705.0], [297.0, 712.0], [296.0, 596.0], [295.0, 706.0], [294.0, 671.0], [293.0, 476.0], [292.0, 709.0], [319.0, 482.0], [318.0, 677.0], [315.0, 644.6666666666666], [314.0, 672.0], [310.0, 619.0], [309.0, 620.0], [308.0, 701.0], [306.0, 717.0], [304.0, 671.5], [332.0, 641.4], [330.0, 643.0], [327.0, 657.0], [324.0, 645.2], [322.0, 695.5], [320.0, 652.0], [349.0, 606.0], [346.0, 609.0], [345.0, 621.75], [337.0, 618.6], [364.0, 578.7142857142857], [362.0, 645.0], [359.0, 630.0], [357.0, 624.0], [355.0, 530.0], [354.0, 653.0], [353.0, 638.0], [352.0, 526.3333333333334], [388.0, 513.0], [387.0, 542.0], [392.0, 593.8], [411.0, 577.0], [410.0, 538.1666666666666], [400.0, 494.8], [429.0, 486.6666666666667], [430.0, 367.0], [434.0, 460.6363636363636], [463.0, 382.25], [462.0, 371.56521739130443], [461.0, 451.0], [459.0, 387.3333333333333], [465.0, 389.0], [464.0, 505.0]], "isOverall": false, "label": "Access Detail Movie", "isController": false}, {"data": [[255.23599999999993, 815.6179999999994]], "isOverall": false, "label": "Access Detail Movie-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 465.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2225.0, "minX": 1.57232358E12, "maxY": 65978.53333333334, "series": [{"data": [[1.57232358E12, 65978.53333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57232358E12, 2225.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232358E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 815.6179999999994, "minX": 1.57232358E12, "maxY": 815.6179999999994, "series": [{"data": [[1.57232358E12, 815.6179999999994]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232358E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 657.7199999999998, "minX": 1.57232358E12, "maxY": 657.7199999999998, "series": [{"data": [[1.57232358E12, 657.7199999999998]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232358E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 430.12400000000014, "minX": 1.57232358E12, "maxY": 430.12400000000014, "series": [{"data": [[1.57232358E12, 430.12400000000014]], "isOverall": false, "label": "Access Detail Movie", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232358E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 248.0, "minX": 1.57232358E12, "maxY": 3158.0, "series": [{"data": [[1.57232358E12, 3158.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57232358E12, 248.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57232358E12, 1613.0000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57232358E12, 3140.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57232358E12, 1849.1499999999985]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 365.5, "minX": 2.0, "maxY": 3132.0, "series": [{"data": [[2.0, 365.5], [24.0, 3132.0], [422.0, 614.0], [52.0, 1609.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 422.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 267.5, "minX": 2.0, "maxY": 3104.5, "series": [{"data": [[2.0, 267.5], [24.0, 3104.5], [422.0, 493.5], [52.0, 575.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 422.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232358E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232358E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232358E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232358E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232358E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57232358E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232358E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232358E12, 8.333333333333334]], "isOverall": false, "label": "Access Detail Movie-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232358E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57232358E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57232358E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57232358E12, "title": "Total Transactions Per Second"}},
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

