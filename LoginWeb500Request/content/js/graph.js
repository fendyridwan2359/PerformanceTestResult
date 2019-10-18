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
        data: {"result": {"minY": 15945.0, "minX": 0.0, "maxY": 35947.0, "series": [{"data": [[0.0, 15945.0], [0.1, 15945.0], [0.2, 15993.0], [0.3, 15993.0], [0.4, 16615.0], [0.5, 16615.0], [0.6, 16615.0], [0.7, 16620.0], [0.8, 16966.0], [0.9, 16966.0], [1.0, 20651.0], [1.1, 20651.0], [1.2, 21884.0], [1.3, 21884.0], [1.4, 23786.0], [1.5, 23786.0], [1.6, 24916.0], [1.7, 24916.0], [1.8, 27347.0], [1.9, 27347.0], [2.0, 27348.0], [2.1, 27348.0], [2.2, 29494.0], [2.3, 29494.0], [2.4, 29589.0], [2.5, 29589.0], [2.6, 31922.0], [2.7, 31922.0], [2.8, 31922.0], [2.9, 33611.0], [3.0, 33611.0], [3.1, 33746.0], [3.2, 33746.0], [3.3, 33754.0], [3.4, 33754.0], [3.5, 33775.0], [3.6, 33775.0], [3.7, 33829.0], [3.8, 33829.0], [3.9, 33833.0], [4.0, 33833.0], [4.1, 33892.0], [4.2, 33892.0], [4.3, 33907.0], [4.4, 33907.0], [4.5, 33911.0], [4.6, 33911.0], [4.7, 33913.0], [4.8, 33913.0], [4.9, 33913.0], [5.0, 33913.0], [5.1, 33914.0], [5.2, 33914.0], [5.3, 33922.0], [5.4, 33922.0], [5.5, 33935.0], [5.6, 33935.0], [5.7, 33948.0], [5.8, 33948.0], [5.9, 33961.0], [6.0, 33961.0], [6.1, 33972.0], [6.2, 33972.0], [6.3, 33973.0], [6.4, 33973.0], [6.5, 33975.0], [6.6, 33975.0], [6.7, 33987.0], [6.8, 33987.0], [6.9, 33996.0], [7.0, 33996.0], [7.1, 34006.0], [7.2, 34006.0], [7.3, 34009.0], [7.4, 34009.0], [7.5, 34026.0], [7.6, 34026.0], [7.7, 34032.0], [7.8, 34032.0], [7.9, 34033.0], [8.0, 34033.0], [8.1, 34033.0], [8.2, 34033.0], [8.3, 34035.0], [8.4, 34035.0], [8.5, 34039.0], [8.6, 34039.0], [8.7, 34045.0], [8.8, 34045.0], [8.9, 34047.0], [9.0, 34047.0], [9.1, 34048.0], [9.2, 34048.0], [9.3, 34050.0], [9.4, 34051.0], [9.5, 34051.0], [9.6, 34054.0], [9.7, 34054.0], [9.8, 34055.0], [9.9, 34055.0], [10.0, 34055.0], [10.1, 34055.0], [10.2, 34057.0], [10.3, 34057.0], [10.4, 34058.0], [10.5, 34058.0], [10.6, 34059.0], [10.7, 34059.0], [10.8, 34061.0], [10.9, 34061.0], [11.0, 34066.0], [11.1, 34066.0], [11.2, 34074.0], [11.3, 34074.0], [11.4, 34084.0], [11.5, 34084.0], [11.6, 34084.0], [11.7, 34084.0], [11.8, 34086.0], [11.9, 34086.0], [12.0, 34096.0], [12.1, 34096.0], [12.2, 34098.0], [12.3, 34098.0], [12.4, 34100.0], [12.5, 34100.0], [12.6, 34104.0], [12.7, 34104.0], [12.8, 34109.0], [12.9, 34109.0], [13.0, 34113.0], [13.1, 34113.0], [13.2, 34113.0], [13.3, 34113.0], [13.4, 34115.0], [13.5, 34115.0], [13.6, 34115.0], [13.7, 34115.0], [13.8, 34117.0], [13.9, 34117.0], [14.0, 34120.0], [14.1, 34120.0], [14.2, 34120.0], [14.3, 34120.0], [14.4, 34121.0], [14.5, 34121.0], [14.6, 34128.0], [14.7, 34128.0], [14.8, 34129.0], [14.9, 34129.0], [15.0, 34132.0], [15.1, 34132.0], [15.2, 34135.0], [15.3, 34135.0], [15.4, 34139.0], [15.5, 34139.0], [15.6, 34142.0], [15.7, 34142.0], [15.8, 34142.0], [15.9, 34142.0], [16.0, 34143.0], [16.1, 34143.0], [16.2, 34150.0], [16.3, 34150.0], [16.4, 34159.0], [16.5, 34159.0], [16.6, 34163.0], [16.7, 34163.0], [16.8, 34168.0], [16.9, 34168.0], [17.0, 34178.0], [17.1, 34178.0], [17.2, 34178.0], [17.3, 34178.0], [17.4, 34179.0], [17.5, 34179.0], [17.6, 34180.0], [17.7, 34180.0], [17.8, 34180.0], [17.9, 34180.0], [18.0, 34181.0], [18.1, 34181.0], [18.2, 34181.0], [18.3, 34181.0], [18.4, 34188.0], [18.5, 34188.0], [18.6, 34189.0], [18.7, 34189.0], [18.8, 34190.0], [18.9, 34190.0], [19.0, 34190.0], [19.1, 34190.0], [19.2, 34200.0], [19.3, 34200.0], [19.4, 34204.0], [19.5, 34204.0], [19.6, 34206.0], [19.7, 34206.0], [19.8, 34206.0], [19.9, 34206.0], [20.0, 34215.0], [20.1, 34215.0], [20.2, 34217.0], [20.3, 34217.0], [20.4, 34219.0], [20.5, 34219.0], [20.6, 34219.0], [20.7, 34219.0], [20.8, 34234.0], [20.9, 34234.0], [21.0, 34236.0], [21.1, 34236.0], [21.2, 34237.0], [21.3, 34237.0], [21.4, 34241.0], [21.5, 34241.0], [21.6, 34244.0], [21.7, 34244.0], [21.8, 34244.0], [21.9, 34244.0], [22.0, 34244.0], [22.1, 34244.0], [22.2, 34246.0], [22.3, 34246.0], [22.4, 34247.0], [22.5, 34247.0], [22.6, 34253.0], [22.7, 34253.0], [22.8, 34255.0], [22.9, 34255.0], [23.0, 34255.0], [23.1, 34255.0], [23.2, 34256.0], [23.3, 34256.0], [23.4, 34256.0], [23.5, 34256.0], [23.6, 34260.0], [23.7, 34260.0], [23.8, 34275.0], [23.9, 34275.0], [24.0, 34275.0], [24.1, 34275.0], [24.2, 34276.0], [24.3, 34276.0], [24.4, 34278.0], [24.5, 34278.0], [24.6, 34280.0], [24.7, 34280.0], [24.8, 34294.0], [24.9, 34294.0], [25.0, 34305.0], [25.1, 34305.0], [25.2, 34321.0], [25.3, 34321.0], [25.4, 34324.0], [25.5, 34324.0], [25.6, 34329.0], [25.7, 34329.0], [25.8, 34336.0], [25.9, 34336.0], [26.0, 34337.0], [26.1, 34337.0], [26.2, 34338.0], [26.3, 34338.0], [26.4, 34340.0], [26.5, 34340.0], [26.6, 34348.0], [26.7, 34348.0], [26.8, 34350.0], [26.9, 34350.0], [27.0, 34370.0], [27.1, 34370.0], [27.2, 34371.0], [27.3, 34371.0], [27.4, 34376.0], [27.5, 34376.0], [27.6, 34377.0], [27.7, 34377.0], [27.8, 34378.0], [27.9, 34378.0], [28.0, 34383.0], [28.1, 34383.0], [28.2, 34384.0], [28.3, 34384.0], [28.4, 34385.0], [28.5, 34385.0], [28.6, 34386.0], [28.7, 34386.0], [28.8, 34386.0], [28.9, 34386.0], [29.0, 34387.0], [29.1, 34387.0], [29.2, 34395.0], [29.3, 34395.0], [29.4, 34397.0], [29.5, 34397.0], [29.6, 34405.0], [29.7, 34405.0], [29.8, 34407.0], [29.9, 34407.0], [30.0, 34413.0], [30.1, 34413.0], [30.2, 34428.0], [30.3, 34428.0], [30.4, 34430.0], [30.5, 34430.0], [30.6, 34439.0], [30.7, 34439.0], [30.8, 34444.0], [30.9, 34444.0], [31.0, 34453.0], [31.1, 34453.0], [31.2, 34455.0], [31.3, 34455.0], [31.4, 34461.0], [31.5, 34461.0], [31.6, 34461.0], [31.7, 34461.0], [31.8, 34462.0], [31.9, 34462.0], [32.0, 34470.0], [32.1, 34470.0], [32.2, 34476.0], [32.3, 34476.0], [32.4, 34476.0], [32.5, 34476.0], [32.6, 34476.0], [32.7, 34476.0], [32.8, 34477.0], [32.9, 34477.0], [33.0, 34480.0], [33.1, 34480.0], [33.2, 34481.0], [33.3, 34481.0], [33.4, 34483.0], [33.5, 34483.0], [33.6, 34484.0], [33.7, 34484.0], [33.8, 34485.0], [33.9, 34485.0], [34.0, 34493.0], [34.1, 34493.0], [34.2, 34493.0], [34.3, 34493.0], [34.4, 34494.0], [34.5, 34494.0], [34.6, 34498.0], [34.7, 34498.0], [34.8, 34499.0], [34.9, 34499.0], [35.0, 34502.0], [35.1, 34502.0], [35.2, 34505.0], [35.3, 34505.0], [35.4, 34507.0], [35.5, 34507.0], [35.6, 34510.0], [35.7, 34510.0], [35.8, 34512.0], [35.9, 34512.0], [36.0, 34515.0], [36.1, 34515.0], [36.2, 34517.0], [36.3, 34517.0], [36.4, 34520.0], [36.5, 34520.0], [36.6, 34525.0], [36.7, 34525.0], [36.8, 34525.0], [36.9, 34525.0], [37.0, 34527.0], [37.1, 34527.0], [37.2, 34529.0], [37.3, 34529.0], [37.4, 34531.0], [37.5, 34531.0], [37.6, 34554.0], [37.7, 34554.0], [37.8, 34561.0], [37.9, 34561.0], [38.0, 34563.0], [38.1, 34563.0], [38.2, 34568.0], [38.3, 34568.0], [38.4, 34568.0], [38.5, 34570.0], [38.6, 34570.0], [38.7, 34571.0], [38.8, 34571.0], [38.9, 34572.0], [39.0, 34572.0], [39.1, 34576.0], [39.2, 34576.0], [39.3, 34577.0], [39.4, 34577.0], [39.5, 34579.0], [39.6, 34579.0], [39.7, 34583.0], [39.8, 34583.0], [39.9, 34586.0], [40.0, 34586.0], [40.1, 34589.0], [40.2, 34589.0], [40.3, 34589.0], [40.4, 34589.0], [40.5, 34592.0], [40.6, 34592.0], [40.7, 34592.0], [40.8, 34592.0], [40.9, 34595.0], [41.0, 34595.0], [41.1, 34595.0], [41.2, 34595.0], [41.3, 34599.0], [41.4, 34599.0], [41.5, 34599.0], [41.6, 34599.0], [41.7, 34600.0], [41.8, 34600.0], [41.9, 34600.0], [42.0, 34600.0], [42.1, 34602.0], [42.2, 34602.0], [42.3, 34603.0], [42.4, 34603.0], [42.5, 34603.0], [42.6, 34603.0], [42.7, 34604.0], [42.8, 34604.0], [42.9, 34608.0], [43.0, 34608.0], [43.1, 34608.0], [43.2, 34608.0], [43.3, 34611.0], [43.4, 34611.0], [43.5, 34612.0], [43.6, 34612.0], [43.7, 34616.0], [43.8, 34616.0], [43.9, 34617.0], [44.0, 34617.0], [44.1, 34623.0], [44.2, 34623.0], [44.3, 34624.0], [44.4, 34624.0], [44.5, 34629.0], [44.6, 34629.0], [44.7, 34631.0], [44.8, 34631.0], [44.9, 34635.0], [45.0, 34635.0], [45.1, 34635.0], [45.2, 34635.0], [45.3, 34637.0], [45.4, 34637.0], [45.5, 34641.0], [45.6, 34641.0], [45.7, 34642.0], [45.8, 34642.0], [45.9, 34642.0], [46.0, 34642.0], [46.1, 34646.0], [46.2, 34646.0], [46.3, 34648.0], [46.4, 34648.0], [46.5, 34650.0], [46.6, 34650.0], [46.7, 34653.0], [46.8, 34653.0], [46.9, 34657.0], [47.0, 34657.0], [47.1, 34660.0], [47.2, 34660.0], [47.3, 34661.0], [47.4, 34661.0], [47.5, 34664.0], [47.6, 34664.0], [47.7, 34670.0], [47.8, 34670.0], [47.9, 34670.0], [48.0, 34670.0], [48.1, 34676.0], [48.2, 34676.0], [48.3, 34686.0], [48.4, 34686.0], [48.5, 34689.0], [48.6, 34689.0], [48.7, 34689.0], [48.8, 34689.0], [48.9, 34692.0], [49.0, 34692.0], [49.1, 34693.0], [49.2, 34693.0], [49.3, 34696.0], [49.4, 34696.0], [49.5, 34700.0], [49.6, 34700.0], [49.7, 34701.0], [49.8, 34701.0], [49.9, 34703.0], [50.0, 34703.0], [50.1, 34703.0], [50.2, 34703.0], [50.3, 34707.0], [50.4, 34707.0], [50.5, 34708.0], [50.6, 34708.0], [50.7, 34709.0], [50.8, 34709.0], [50.9, 34710.0], [51.0, 34710.0], [51.1, 34713.0], [51.2, 34713.0], [51.3, 34713.0], [51.4, 34713.0], [51.5, 34713.0], [51.6, 34713.0], [51.7, 34713.0], [51.8, 34713.0], [51.9, 34714.0], [52.0, 34714.0], [52.1, 34715.0], [52.2, 34715.0], [52.3, 34717.0], [52.4, 34717.0], [52.5, 34718.0], [52.6, 34718.0], [52.7, 34718.0], [52.8, 34718.0], [52.9, 34718.0], [53.0, 34718.0], [53.1, 34721.0], [53.2, 34721.0], [53.3, 34721.0], [53.4, 34721.0], [53.5, 34721.0], [53.6, 34721.0], [53.7, 34721.0], [53.8, 34721.0], [53.9, 34722.0], [54.0, 34722.0], [54.1, 34723.0], [54.2, 34723.0], [54.3, 34725.0], [54.4, 34725.0], [54.5, 34727.0], [54.6, 34727.0], [54.7, 34728.0], [54.8, 34728.0], [54.9, 34729.0], [55.0, 34729.0], [55.1, 34730.0], [55.2, 34730.0], [55.3, 34735.0], [55.4, 34735.0], [55.5, 34738.0], [55.6, 34738.0], [55.7, 34750.0], [55.8, 34750.0], [55.9, 34753.0], [56.0, 34753.0], [56.1, 34756.0], [56.2, 34756.0], [56.3, 34759.0], [56.4, 34759.0], [56.5, 34760.0], [56.6, 34760.0], [56.7, 34764.0], [56.8, 34764.0], [56.9, 34765.0], [57.0, 34765.0], [57.1, 34767.0], [57.2, 34767.0], [57.3, 34767.0], [57.4, 34767.0], [57.5, 34773.0], [57.6, 34773.0], [57.7, 34774.0], [57.8, 34774.0], [57.9, 34776.0], [58.0, 34776.0], [58.1, 34788.0], [58.2, 34788.0], [58.3, 34788.0], [58.4, 34788.0], [58.5, 34789.0], [58.6, 34789.0], [58.7, 34790.0], [58.8, 34790.0], [58.9, 34790.0], [59.0, 34790.0], [59.1, 34790.0], [59.2, 34790.0], [59.3, 34790.0], [59.4, 34790.0], [59.5, 34790.0], [59.6, 34790.0], [59.7, 34791.0], [59.8, 34791.0], [59.9, 34791.0], [60.0, 34791.0], [60.1, 34791.0], [60.2, 34791.0], [60.3, 34791.0], [60.4, 34791.0], [60.5, 34791.0], [60.6, 34791.0], [60.7, 34791.0], [60.8, 34791.0], [60.9, 34791.0], [61.0, 34791.0], [61.1, 34791.0], [61.2, 34791.0], [61.3, 34791.0], [61.4, 34791.0], [61.5, 34791.0], [61.6, 34791.0], [61.7, 34792.0], [61.8, 34792.0], [61.9, 34792.0], [62.0, 34792.0], [62.1, 34792.0], [62.2, 34792.0], [62.3, 34792.0], [62.4, 34792.0], [62.5, 34792.0], [62.6, 34792.0], [62.7, 34792.0], [62.8, 34792.0], [62.9, 34792.0], [63.0, 34792.0], [63.1, 34794.0], [63.2, 34794.0], [63.3, 34794.0], [63.4, 34794.0], [63.5, 34795.0], [63.6, 34795.0], [63.7, 34796.0], [63.8, 34796.0], [63.9, 34796.0], [64.0, 34796.0], [64.1, 34799.0], [64.2, 34799.0], [64.3, 34801.0], [64.4, 34801.0], [64.5, 34802.0], [64.6, 34802.0], [64.7, 34816.0], [64.8, 34816.0], [64.9, 34832.0], [65.0, 34832.0], [65.1, 34833.0], [65.2, 34833.0], [65.3, 34833.0], [65.4, 34833.0], [65.5, 34836.0], [65.6, 34836.0], [65.7, 34837.0], [65.8, 34837.0], [65.9, 34840.0], [66.0, 34840.0], [66.1, 34850.0], [66.2, 34850.0], [66.3, 34854.0], [66.4, 34854.0], [66.5, 34872.0], [66.6, 34872.0], [66.7, 34873.0], [66.8, 34873.0], [66.9, 34873.0], [67.0, 34873.0], [67.1, 34873.0], [67.2, 34873.0], [67.3, 34873.0], [67.4, 34873.0], [67.5, 34874.0], [67.6, 34874.0], [67.7, 34875.0], [67.8, 34875.0], [67.9, 34875.0], [68.0, 34875.0], [68.1, 34883.0], [68.2, 34883.0], [68.3, 34887.0], [68.4, 34887.0], [68.5, 34888.0], [68.6, 34888.0], [68.7, 34891.0], [68.8, 34891.0], [68.9, 34891.0], [69.0, 34891.0], [69.1, 34892.0], [69.2, 34892.0], [69.3, 34892.0], [69.4, 34892.0], [69.5, 34893.0], [69.6, 34893.0], [69.7, 34894.0], [69.8, 34894.0], [69.9, 34895.0], [70.0, 34895.0], [70.1, 34900.0], [70.2, 34900.0], [70.3, 34903.0], [70.4, 34903.0], [70.5, 34903.0], [70.6, 34903.0], [70.7, 34904.0], [70.8, 34904.0], [70.9, 34904.0], [71.0, 34904.0], [71.1, 34905.0], [71.2, 34905.0], [71.3, 34910.0], [71.4, 34910.0], [71.5, 34911.0], [71.6, 34911.0], [71.7, 34911.0], [71.8, 34911.0], [71.9, 34916.0], [72.0, 34916.0], [72.1, 34917.0], [72.2, 34917.0], [72.3, 34919.0], [72.4, 34919.0], [72.5, 34920.0], [72.6, 34920.0], [72.7, 34944.0], [72.8, 34944.0], [72.9, 34945.0], [73.0, 34945.0], [73.1, 34947.0], [73.2, 34947.0], [73.3, 34949.0], [73.4, 34949.0], [73.5, 34953.0], [73.6, 34953.0], [73.7, 34954.0], [73.8, 34954.0], [73.9, 34959.0], [74.0, 34959.0], [74.1, 34962.0], [74.2, 34962.0], [74.3, 34971.0], [74.4, 34971.0], [74.5, 34971.0], [74.6, 34971.0], [74.7, 34972.0], [74.8, 34972.0], [74.9, 34975.0], [75.0, 34975.0], [75.1, 34979.0], [75.2, 34979.0], [75.3, 34980.0], [75.4, 34980.0], [75.5, 34988.0], [75.6, 34988.0], [75.7, 35000.0], [75.8, 35000.0], [75.9, 35006.0], [76.0, 35006.0], [76.1, 35007.0], [76.2, 35007.0], [76.3, 35015.0], [76.4, 35015.0], [76.5, 35016.0], [76.6, 35016.0], [76.7, 35017.0], [76.8, 35017.0], [76.9, 35020.0], [77.0, 35020.0], [77.1, 35021.0], [77.2, 35021.0], [77.3, 35021.0], [77.4, 35021.0], [77.5, 35021.0], [77.6, 35021.0], [77.7, 35022.0], [77.8, 35022.0], [77.9, 35024.0], [78.0, 35024.0], [78.1, 35031.0], [78.2, 35031.0], [78.3, 35054.0], [78.4, 35054.0], [78.5, 35059.0], [78.6, 35059.0], [78.7, 35065.0], [78.8, 35065.0], [78.9, 35067.0], [79.0, 35067.0], [79.1, 35075.0], [79.2, 35075.0], [79.3, 35085.0], [79.4, 35085.0], [79.5, 35090.0], [79.6, 35090.0], [79.7, 35092.0], [79.8, 35092.0], [79.9, 35095.0], [80.0, 35095.0], [80.1, 35100.0], [80.2, 35100.0], [80.3, 35100.0], [80.4, 35100.0], [80.5, 35102.0], [80.6, 35102.0], [80.7, 35102.0], [80.8, 35102.0], [80.9, 35107.0], [81.0, 35107.0], [81.1, 35115.0], [81.2, 35115.0], [81.3, 35115.0], [81.4, 35115.0], [81.5, 35133.0], [81.6, 35133.0], [81.7, 35135.0], [81.8, 35135.0], [81.9, 35136.0], [82.0, 35136.0], [82.1, 35140.0], [82.2, 35140.0], [82.3, 35141.0], [82.4, 35141.0], [82.5, 35143.0], [82.6, 35143.0], [82.7, 35143.0], [82.8, 35143.0], [82.9, 35144.0], [83.0, 35144.0], [83.1, 35145.0], [83.2, 35145.0], [83.3, 35145.0], [83.4, 35145.0], [83.5, 35146.0], [83.6, 35146.0], [83.7, 35149.0], [83.8, 35149.0], [83.9, 35150.0], [84.0, 35150.0], [84.1, 35150.0], [84.2, 35150.0], [84.3, 35153.0], [84.4, 35153.0], [84.5, 35160.0], [84.6, 35160.0], [84.7, 35169.0], [84.8, 35169.0], [84.9, 35169.0], [85.0, 35169.0], [85.1, 35178.0], [85.2, 35178.0], [85.3, 35183.0], [85.4, 35183.0], [85.5, 35185.0], [85.6, 35185.0], [85.7, 35186.0], [85.8, 35186.0], [85.9, 35187.0], [86.0, 35187.0], [86.1, 35188.0], [86.2, 35188.0], [86.3, 35188.0], [86.4, 35188.0], [86.5, 35189.0], [86.6, 35189.0], [86.7, 35191.0], [86.8, 35191.0], [86.9, 35200.0], [87.0, 35200.0], [87.1, 35204.0], [87.2, 35204.0], [87.3, 35212.0], [87.4, 35212.0], [87.5, 35216.0], [87.6, 35216.0], [87.7, 35217.0], [87.8, 35217.0], [87.9, 35218.0], [88.0, 35218.0], [88.1, 35218.0], [88.2, 35218.0], [88.3, 35218.0], [88.4, 35218.0], [88.5, 35219.0], [88.6, 35219.0], [88.7, 35225.0], [88.8, 35225.0], [88.9, 35226.0], [89.0, 35226.0], [89.1, 35228.0], [89.2, 35228.0], [89.3, 35229.0], [89.4, 35229.0], [89.5, 35231.0], [89.6, 35231.0], [89.7, 35231.0], [89.8, 35231.0], [89.9, 35233.0], [90.0, 35233.0], [90.1, 35233.0], [90.2, 35233.0], [90.3, 35241.0], [90.4, 35241.0], [90.5, 35248.0], [90.6, 35248.0], [90.7, 35257.0], [90.8, 35257.0], [90.9, 35258.0], [91.0, 35258.0], [91.1, 35259.0], [91.2, 35259.0], [91.3, 35259.0], [91.4, 35259.0], [91.5, 35259.0], [91.6, 35259.0], [91.7, 35261.0], [91.8, 35261.0], [91.9, 35264.0], [92.0, 35264.0], [92.1, 35265.0], [92.2, 35265.0], [92.3, 35275.0], [92.4, 35275.0], [92.5, 35275.0], [92.6, 35275.0], [92.7, 35276.0], [92.8, 35276.0], [92.9, 35278.0], [93.0, 35278.0], [93.1, 35287.0], [93.2, 35287.0], [93.3, 35313.0], [93.4, 35313.0], [93.5, 35315.0], [93.6, 35315.0], [93.7, 35316.0], [93.8, 35316.0], [93.9, 35325.0], [94.0, 35325.0], [94.1, 35327.0], [94.2, 35327.0], [94.3, 35327.0], [94.4, 35327.0], [94.5, 35337.0], [94.6, 35337.0], [94.7, 35344.0], [94.8, 35344.0], [94.9, 35347.0], [95.0, 35347.0], [95.1, 35347.0], [95.2, 35347.0], [95.3, 35347.0], [95.4, 35347.0], [95.5, 35350.0], [95.6, 35350.0], [95.7, 35356.0], [95.8, 35356.0], [95.9, 35357.0], [96.0, 35357.0], [96.1, 35358.0], [96.2, 35358.0], [96.3, 35358.0], [96.4, 35358.0], [96.5, 35358.0], [96.6, 35358.0], [96.7, 35361.0], [96.8, 35361.0], [96.9, 35364.0], [97.0, 35364.0], [97.1, 35386.0], [97.2, 35386.0], [97.3, 35390.0], [97.4, 35390.0], [97.5, 35397.0], [97.6, 35397.0], [97.7, 35404.0], [97.8, 35404.0], [97.9, 35410.0], [98.0, 35410.0], [98.1, 35426.0], [98.2, 35426.0], [98.3, 35428.0], [98.4, 35428.0], [98.5, 35430.0], [98.6, 35430.0], [98.7, 35431.0], [98.8, 35431.0], [98.9, 35437.0], [99.0, 35437.0], [99.1, 35533.0], [99.2, 35533.0], [99.3, 35535.0], [99.4, 35535.0], [99.5, 35581.0], [99.6, 35581.0], [99.7, 35621.0], [99.8, 35621.0], [99.9, 35947.0], [100.0, 35947.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 15900.0, "maxY": 74.0, "series": [{"data": [[15900.0, 2.0], [16600.0, 2.0], [16900.0, 1.0], [20600.0, 1.0], [21800.0, 1.0], [23700.0, 1.0], [24900.0, 1.0], [27300.0, 2.0], [29500.0, 1.0], [29400.0, 1.0], [31900.0, 1.0], [34700.0, 74.0], [34500.0, 33.0], [34100.0, 34.0], [33600.0, 1.0], [34000.0, 27.0], [34600.0, 39.0], [34200.0, 29.0], [33900.0, 14.0], [33800.0, 3.0], [34800.0, 29.0], [34400.0, 27.0], [33700.0, 3.0], [34300.0, 23.0], [35000.0, 22.0], [34900.0, 28.0], [35100.0, 34.0], [35200.0, 32.0], [35300.0, 22.0], [35400.0, 7.0], [35500.0, 3.0], [35600.0, 1.0], [35900.0, 1.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 35900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 490.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 490.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 260.866, "minX": 1.57138536E12, "maxY": 260.866, "series": [{"data": [[1.57138536E12, 260.866]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138536E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 15945.0, "minX": 2.0, "maxY": 35621.0, "series": [{"data": [[2.0, 35500.5], [3.0, 35621.0], [4.0, 35006.0], [5.0, 34945.0], [6.0, 35229.0], [7.0, 35200.0], [8.0, 35325.0], [12.0, 35169.0], [13.0, 35365.0], [15.0, 35344.0], [16.0, 35327.0], [17.0, 35259.0], [19.0, 35332.5], [23.0, 34847.25], [26.0, 35350.666666666664], [28.0, 35074.0], [31.0, 35311.666666666664], [35.0, 35404.0], [34.0, 35044.666666666664], [38.0, 34911.0], [45.0, 34900.0], [44.0, 35173.0], [47.0, 34629.0], [46.0, 35133.0], [49.0, 35390.0], [48.0, 34642.0], [50.0, 34949.0], [53.0, 35209.0], [54.0, 34476.0], [57.0, 35204.0], [56.0, 35364.0], [58.0, 34972.0], [61.0, 35265.0], [60.0, 34904.0], [63.0, 35357.0], [62.0, 35359.5], [67.0, 34972.5], [65.0, 35357.333333333336], [71.0, 34964.5], [70.0, 35347.0], [75.0, 35181.666666666664], [74.0, 35327.0], [72.0, 35347.0], [91.0, 34572.5], [89.0, 34875.428571428565], [95.0, 34686.0], [94.0, 34767.666666666664], [99.0, 34864.0], [96.0, 34750.0], [103.0, 35275.0], [101.0, 34934.0], [100.0, 35278.0], [107.0, 34848.0], [106.0, 35233.0], [104.0, 34753.0], [111.0, 34650.666666666664], [108.0, 35212.0], [114.0, 34661.0], [118.0, 35233.0], [117.0, 35075.4], [123.0, 34653.0], [122.0, 34944.0], [121.0, 34875.0], [127.0, 34444.0], [126.0, 35192.5], [124.0, 35226.0], [131.0, 35206.0], [142.0, 34738.0], [137.0, 34988.0], [136.0, 35022.2], [150.0, 35075.0], [148.0, 35126.5], [147.0, 35094.75], [159.0, 34767.0], [158.0, 35150.0], [156.0, 34951.333333333336], [153.0, 34954.0], [166.0, 35145.0], [164.0, 34967.0], [161.0, 35020.0], [160.0, 35126.0], [174.0, 35045.666666666664], [171.0, 35140.5], [170.0, 34795.0], [169.0, 35110.0], [168.0, 35143.5], [179.0, 35043.5], [177.0, 34837.0], [176.0, 34876.0], [189.0, 35096.666666666664], [186.0, 34802.0], [185.0, 34654.5], [184.0, 34246.0], [196.0, 34631.0], [192.0, 34909.333333333336], [203.0, 34552.5], [201.0, 34281.666666666664], [215.0, 34175.0], [213.0, 34255.0], [208.0, 34529.2], [223.0, 35019.0], [221.0, 34931.0], [219.0, 34970.0], [218.0, 34479.0], [231.0, 34629.0], [228.0, 35015.5], [226.0, 34519.5], [224.0, 34799.0], [238.0, 34121.0], [234.0, 34650.0], [233.0, 34090.5], [246.0, 34222.4], [240.0, 34466.5], [254.0, 34130.0], [252.0, 34009.0], [251.0, 34277.0], [249.0, 34049.0], [269.0, 34079.5], [268.0, 34091.0], [265.0, 34277.2], [263.0, 33996.0], [262.0, 34113.0], [258.0, 34097.333333333336], [281.0, 34510.75], [277.0, 34425.25], [290.0, 34539.0], [307.0, 34638.294117647056], [329.0, 34501.0], [392.0, 34549.952380952374], [430.0, 34703.0], [441.0, 34596.0], [440.0, 34260.0], [442.0, 34239.63636363636], [432.0, 34561.0], [444.0, 34727.0], [435.0, 34454.0], [454.0, 33754.0], [463.0, 34341.0], [458.0, 34597.5], [478.0, 34046.0], [476.0, 34413.0], [475.0, 34476.0], [474.0, 34555.666666666664], [472.0, 34520.5], [469.0, 34290.0], [468.0, 34466.65384615385], [467.0, 34440.63636363636], [465.0, 34598.0], [492.0, 24916.0], [495.0, 20651.0], [494.0, 21884.0], [493.0, 23786.0], [491.0, 27347.5], [489.0, 29541.5], [487.0, 31922.0], [486.0, 34104.0], [485.0, 34085.0], [484.0, 34580.0], [481.0, 34440.0], [483.0, 34120.0], [480.0, 34178.0], [500.0, 16617.5], [498.0, 15993.0], [497.0, 15945.0], [496.0, 16966.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[260.86199999999997, 34350.45000000005]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4413.75, "minX": 1.57138536E12, "maxY": 7881.333333333333, "series": [{"data": [[1.57138536E12, 7881.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57138536E12, 4413.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138536E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 34350.45000000005, "minX": 1.57138536E12, "maxY": 34350.45000000005, "series": [{"data": [[1.57138536E12, 34350.45000000005]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138536E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 34184.15800000002, "minX": 1.57138536E12, "maxY": 34184.15800000002, "series": [{"data": [[1.57138536E12, 34184.15800000002]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138536E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3872.774, "minX": 1.57138536E12, "maxY": 3872.774, "series": [{"data": [[1.57138536E12, 3872.774]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138536E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20651.0, "minX": 1.57138536E12, "maxY": 34104.0, "series": [{"data": [[1.57138536E12, 34104.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57138536E12, 20651.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57138536E12, 33885.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57138536E12, 34104.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57138536E12, 34104.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138536E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 27347.5, "minX": 1000.0, "maxY": 34826.5, "series": [{"data": [[1000.0, 27347.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 34570.0], [3000.0, 34705.0], [12000.0, 34509.0], [13000.0, 34255.0], [1000.0, 34826.5], [4000.0, 34715.0], [17000.0, 34657.0], [5000.0, 34698.5], [20000.0, 34667.0], [6000.0, 34412.5], [7000.0, 34608.0], [2000.0, 34815.5], [8000.0, 34792.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 20000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 27257.5, "minX": 1000.0, "maxY": 34826.5, "series": [{"data": [[1000.0, 27257.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9000.0, 34570.0], [3000.0, 34705.0], [12000.0, 34509.0], [13000.0, 34250.0], [1000.0, 34826.5], [4000.0, 34715.0], [17000.0, 34653.0], [5000.0, 34698.5], [20000.0, 34663.0], [6000.0, 34412.5], [7000.0, 34607.0], [2000.0, 34815.5], [8000.0, 34787.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 20000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.5713853E12, "maxY": 8.333333333333334, "series": [{"data": [[1.5713853E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5713853E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.57138536E12, "maxY": 8.083333333333334, "series": [{"data": [[1.57138536E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57138536E12, 8.083333333333334]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.57138536E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138536E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.57138536E12, "maxY": 8.166666666666666, "series": [{"data": [[1.57138536E12, 8.166666666666666]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57138536E12, 0.16666666666666666]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138536E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.57138536E12, "maxY": 8.166666666666666, "series": [{"data": [[1.57138536E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57138536E12, 8.166666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138536E12, "title": "Total Transactions Per Second"}},
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

