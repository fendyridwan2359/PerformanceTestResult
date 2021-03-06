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
        data: {"result": {"minY": 4129.0, "minX": 0.0, "maxY": 9118.0, "series": [{"data": [[0.0, 4129.0], [0.1, 4129.0], [0.2, 4129.0], [0.3, 4129.0], [0.4, 4129.0], [0.5, 4129.0], [0.6, 4129.0], [0.7, 4129.0], [0.8, 4129.0], [0.9, 4129.0], [1.0, 4391.0], [1.1, 4391.0], [1.2, 4391.0], [1.3, 4391.0], [1.4, 4391.0], [1.5, 4391.0], [1.6, 4391.0], [1.7, 4391.0], [1.8, 4391.0], [1.9, 4391.0], [2.0, 4424.0], [2.1, 4424.0], [2.2, 4424.0], [2.3, 4424.0], [2.4, 4424.0], [2.5, 4424.0], [2.6, 4424.0], [2.7, 4424.0], [2.8, 4424.0], [2.9, 4424.0], [3.0, 4424.0], [3.1, 4424.0], [3.2, 4424.0], [3.3, 4424.0], [3.4, 4424.0], [3.5, 4424.0], [3.6, 4424.0], [3.7, 4424.0], [3.8, 4424.0], [3.9, 4424.0], [4.0, 4432.0], [4.1, 4432.0], [4.2, 4432.0], [4.3, 4432.0], [4.4, 4432.0], [4.5, 4432.0], [4.6, 4432.0], [4.7, 4432.0], [4.8, 4432.0], [4.9, 4432.0], [5.0, 4443.0], [5.1, 4443.0], [5.2, 4443.0], [5.3, 4443.0], [5.4, 4443.0], [5.5, 4443.0], [5.6, 4443.0], [5.7, 4443.0], [5.8, 4443.0], [5.9, 4443.0], [6.0, 4454.0], [6.1, 4454.0], [6.2, 4454.0], [6.3, 4454.0], [6.4, 4454.0], [6.5, 4454.0], [6.6, 4454.0], [6.7, 4454.0], [6.8, 4454.0], [6.9, 4454.0], [7.0, 4497.0], [7.1, 4497.0], [7.2, 4497.0], [7.3, 4497.0], [7.4, 4497.0], [7.5, 4497.0], [7.6, 4497.0], [7.7, 4497.0], [7.8, 4497.0], [7.9, 4497.0], [8.0, 4580.0], [8.1, 4580.0], [8.2, 4580.0], [8.3, 4580.0], [8.4, 4580.0], [8.5, 4580.0], [8.6, 4580.0], [8.7, 4580.0], [8.8, 4580.0], [8.9, 4580.0], [9.0, 4588.0], [9.1, 4588.0], [9.2, 4588.0], [9.3, 4588.0], [9.4, 4588.0], [9.5, 4588.0], [9.6, 4588.0], [9.7, 4588.0], [9.8, 4588.0], [9.9, 4588.0], [10.0, 4596.0], [10.1, 4596.0], [10.2, 4596.0], [10.3, 4596.0], [10.4, 4596.0], [10.5, 4596.0], [10.6, 4596.0], [10.7, 4596.0], [10.8, 4596.0], [10.9, 4596.0], [11.0, 4602.0], [11.1, 4602.0], [11.2, 4602.0], [11.3, 4602.0], [11.4, 4602.0], [11.5, 4602.0], [11.6, 4602.0], [11.7, 4602.0], [11.8, 4602.0], [11.9, 4602.0], [12.0, 4703.0], [12.1, 4703.0], [12.2, 4703.0], [12.3, 4703.0], [12.4, 4703.0], [12.5, 4703.0], [12.6, 4703.0], [12.7, 4703.0], [12.8, 4703.0], [12.9, 4703.0], [13.0, 4832.0], [13.1, 4832.0], [13.2, 4832.0], [13.3, 4832.0], [13.4, 4832.0], [13.5, 4832.0], [13.6, 4832.0], [13.7, 4832.0], [13.8, 4832.0], [13.9, 4832.0], [14.0, 4881.0], [14.1, 4881.0], [14.2, 4881.0], [14.3, 4881.0], [14.4, 4881.0], [14.5, 4881.0], [14.6, 4881.0], [14.7, 4881.0], [14.8, 4881.0], [14.9, 4881.0], [15.0, 5039.0], [15.1, 5039.0], [15.2, 5039.0], [15.3, 5039.0], [15.4, 5039.0], [15.5, 5039.0], [15.6, 5039.0], [15.7, 5039.0], [15.8, 5039.0], [15.9, 5039.0], [16.0, 5179.0], [16.1, 5179.0], [16.2, 5179.0], [16.3, 5179.0], [16.4, 5179.0], [16.5, 5179.0], [16.6, 5179.0], [16.7, 5179.0], [16.8, 5179.0], [16.9, 5179.0], [17.0, 5282.0], [17.1, 5282.0], [17.2, 5282.0], [17.3, 5282.0], [17.4, 5282.0], [17.5, 5282.0], [17.6, 5282.0], [17.7, 5282.0], [17.8, 5282.0], [17.9, 5282.0], [18.0, 5290.0], [18.1, 5290.0], [18.2, 5290.0], [18.3, 5290.0], [18.4, 5290.0], [18.5, 5290.0], [18.6, 5290.0], [18.7, 5290.0], [18.8, 5290.0], [18.9, 5290.0], [19.0, 5462.0], [19.1, 5462.0], [19.2, 5462.0], [19.3, 5462.0], [19.4, 5462.0], [19.5, 5462.0], [19.6, 5462.0], [19.7, 5462.0], [19.8, 5462.0], [19.9, 5462.0], [20.0, 5514.0], [20.1, 5514.0], [20.2, 5514.0], [20.3, 5514.0], [20.4, 5514.0], [20.5, 5514.0], [20.6, 5514.0], [20.7, 5514.0], [20.8, 5514.0], [20.9, 5514.0], [21.0, 5551.0], [21.1, 5551.0], [21.2, 5551.0], [21.3, 5551.0], [21.4, 5551.0], [21.5, 5551.0], [21.6, 5551.0], [21.7, 5551.0], [21.8, 5551.0], [21.9, 5551.0], [22.0, 5608.0], [22.1, 5608.0], [22.2, 5608.0], [22.3, 5608.0], [22.4, 5608.0], [22.5, 5608.0], [22.6, 5608.0], [22.7, 5608.0], [22.8, 5608.0], [22.9, 5608.0], [23.0, 5666.0], [23.1, 5666.0], [23.2, 5666.0], [23.3, 5666.0], [23.4, 5666.0], [23.5, 5666.0], [23.6, 5666.0], [23.7, 5666.0], [23.8, 5666.0], [23.9, 5666.0], [24.0, 5698.0], [24.1, 5698.0], [24.2, 5698.0], [24.3, 5698.0], [24.4, 5698.0], [24.5, 5698.0], [24.6, 5698.0], [24.7, 5698.0], [24.8, 5698.0], [24.9, 5698.0], [25.0, 5705.0], [25.1, 5705.0], [25.2, 5705.0], [25.3, 5705.0], [25.4, 5705.0], [25.5, 5705.0], [25.6, 5705.0], [25.7, 5705.0], [25.8, 5705.0], [25.9, 5705.0], [26.0, 5772.0], [26.1, 5772.0], [26.2, 5772.0], [26.3, 5772.0], [26.4, 5772.0], [26.5, 5772.0], [26.6, 5772.0], [26.7, 5772.0], [26.8, 5772.0], [26.9, 5772.0], [27.0, 5774.0], [27.1, 5774.0], [27.2, 5774.0], [27.3, 5774.0], [27.4, 5774.0], [27.5, 5774.0], [27.6, 5774.0], [27.7, 5774.0], [27.8, 5774.0], [27.9, 5774.0], [28.0, 5813.0], [28.1, 5813.0], [28.2, 5813.0], [28.3, 5813.0], [28.4, 5813.0], [28.5, 5813.0], [28.6, 5813.0], [28.7, 5813.0], [28.8, 5813.0], [28.9, 5813.0], [29.0, 5814.0], [29.1, 5814.0], [29.2, 5814.0], [29.3, 5814.0], [29.4, 5814.0], [29.5, 5814.0], [29.6, 5814.0], [29.7, 5814.0], [29.8, 5814.0], [29.9, 5814.0], [30.0, 5838.0], [30.1, 5838.0], [30.2, 5838.0], [30.3, 5838.0], [30.4, 5838.0], [30.5, 5838.0], [30.6, 5838.0], [30.7, 5838.0], [30.8, 5838.0], [30.9, 5838.0], [31.0, 5856.0], [31.1, 5856.0], [31.2, 5856.0], [31.3, 5856.0], [31.4, 5856.0], [31.5, 5856.0], [31.6, 5856.0], [31.7, 5856.0], [31.8, 5856.0], [31.9, 5856.0], [32.0, 5875.0], [32.1, 5875.0], [32.2, 5875.0], [32.3, 5875.0], [32.4, 5875.0], [32.5, 5875.0], [32.6, 5875.0], [32.7, 5875.0], [32.8, 5875.0], [32.9, 5875.0], [33.0, 5879.0], [33.1, 5879.0], [33.2, 5879.0], [33.3, 5879.0], [33.4, 5879.0], [33.5, 5879.0], [33.6, 5879.0], [33.7, 5879.0], [33.8, 5879.0], [33.9, 5879.0], [34.0, 6070.0], [34.1, 6070.0], [34.2, 6070.0], [34.3, 6070.0], [34.4, 6070.0], [34.5, 6070.0], [34.6, 6070.0], [34.7, 6070.0], [34.8, 6070.0], [34.9, 6070.0], [35.0, 6292.0], [35.1, 6292.0], [35.2, 6292.0], [35.3, 6292.0], [35.4, 6292.0], [35.5, 6292.0], [35.6, 6292.0], [35.7, 6292.0], [35.8, 6292.0], [35.9, 6292.0], [36.0, 6408.0], [36.1, 6408.0], [36.2, 6408.0], [36.3, 6408.0], [36.4, 6408.0], [36.5, 6408.0], [36.6, 6408.0], [36.7, 6408.0], [36.8, 6408.0], [36.9, 6408.0], [37.0, 6587.0], [37.1, 6587.0], [37.2, 6587.0], [37.3, 6587.0], [37.4, 6587.0], [37.5, 6587.0], [37.6, 6587.0], [37.7, 6587.0], [37.8, 6587.0], [37.9, 6587.0], [38.0, 6595.0], [38.1, 6595.0], [38.2, 6595.0], [38.3, 6595.0], [38.4, 6595.0], [38.5, 6595.0], [38.6, 6595.0], [38.7, 6595.0], [38.8, 6595.0], [38.9, 6595.0], [39.0, 6600.0], [39.1, 6600.0], [39.2, 6600.0], [39.3, 6600.0], [39.4, 6600.0], [39.5, 6600.0], [39.6, 6600.0], [39.7, 6600.0], [39.8, 6600.0], [39.9, 6600.0], [40.0, 6677.0], [40.1, 6677.0], [40.2, 6677.0], [40.3, 6677.0], [40.4, 6677.0], [40.5, 6677.0], [40.6, 6677.0], [40.7, 6677.0], [40.8, 6677.0], [40.9, 6677.0], [41.0, 6697.0], [41.1, 6697.0], [41.2, 6697.0], [41.3, 6697.0], [41.4, 6697.0], [41.5, 6697.0], [41.6, 6697.0], [41.7, 6697.0], [41.8, 6697.0], [41.9, 6697.0], [42.0, 6712.0], [42.1, 6712.0], [42.2, 6712.0], [42.3, 6712.0], [42.4, 6712.0], [42.5, 6712.0], [42.6, 6712.0], [42.7, 6712.0], [42.8, 6712.0], [42.9, 6712.0], [43.0, 6745.0], [43.1, 6745.0], [43.2, 6745.0], [43.3, 6745.0], [43.4, 6745.0], [43.5, 6745.0], [43.6, 6745.0], [43.7, 6745.0], [43.8, 6745.0], [43.9, 6745.0], [44.0, 6767.0], [44.1, 6767.0], [44.2, 6767.0], [44.3, 6767.0], [44.4, 6767.0], [44.5, 6767.0], [44.6, 6767.0], [44.7, 6767.0], [44.8, 6767.0], [44.9, 6767.0], [45.0, 6780.0], [45.1, 6780.0], [45.2, 6780.0], [45.3, 6780.0], [45.4, 6780.0], [45.5, 6780.0], [45.6, 6780.0], [45.7, 6780.0], [45.8, 6780.0], [45.9, 6780.0], [46.0, 6795.0], [46.1, 6795.0], [46.2, 6795.0], [46.3, 6795.0], [46.4, 6795.0], [46.5, 6795.0], [46.6, 6795.0], [46.7, 6795.0], [46.8, 6795.0], [46.9, 6795.0], [47.0, 6805.0], [47.1, 6805.0], [47.2, 6805.0], [47.3, 6805.0], [47.4, 6805.0], [47.5, 6805.0], [47.6, 6805.0], [47.7, 6805.0], [47.8, 6805.0], [47.9, 6805.0], [48.0, 6811.0], [48.1, 6811.0], [48.2, 6811.0], [48.3, 6811.0], [48.4, 6811.0], [48.5, 6811.0], [48.6, 6811.0], [48.7, 6811.0], [48.8, 6811.0], [48.9, 6811.0], [49.0, 6854.0], [49.1, 6854.0], [49.2, 6854.0], [49.3, 6854.0], [49.4, 6854.0], [49.5, 6854.0], [49.6, 6854.0], [49.7, 6854.0], [49.8, 6854.0], [49.9, 6854.0], [50.0, 6859.0], [50.1, 6859.0], [50.2, 6859.0], [50.3, 6859.0], [50.4, 6859.0], [50.5, 6859.0], [50.6, 6859.0], [50.7, 6859.0], [50.8, 6859.0], [50.9, 6859.0], [51.0, 6874.0], [51.1, 6874.0], [51.2, 6874.0], [51.3, 6874.0], [51.4, 6874.0], [51.5, 6874.0], [51.6, 6874.0], [51.7, 6874.0], [51.8, 6874.0], [51.9, 6874.0], [52.0, 6926.0], [52.1, 6926.0], [52.2, 6926.0], [52.3, 6926.0], [52.4, 6926.0], [52.5, 6926.0], [52.6, 6926.0], [52.7, 6926.0], [52.8, 6926.0], [52.9, 6926.0], [53.0, 6934.0], [53.1, 6934.0], [53.2, 6934.0], [53.3, 6934.0], [53.4, 6934.0], [53.5, 6934.0], [53.6, 6934.0], [53.7, 6934.0], [53.8, 6934.0], [53.9, 6934.0], [54.0, 6944.0], [54.1, 6944.0], [54.2, 6944.0], [54.3, 6944.0], [54.4, 6944.0], [54.5, 6944.0], [54.6, 6944.0], [54.7, 6944.0], [54.8, 6944.0], [54.9, 6944.0], [55.0, 7210.0], [55.1, 7210.0], [55.2, 7210.0], [55.3, 7210.0], [55.4, 7210.0], [55.5, 7210.0], [55.6, 7210.0], [55.7, 7210.0], [55.8, 7210.0], [55.9, 7210.0], [56.0, 7276.0], [56.1, 7276.0], [56.2, 7276.0], [56.3, 7276.0], [56.4, 7276.0], [56.5, 7276.0], [56.6, 7276.0], [56.7, 7276.0], [56.8, 7276.0], [56.9, 7276.0], [57.0, 7338.0], [57.1, 7338.0], [57.2, 7338.0], [57.3, 7338.0], [57.4, 7338.0], [57.5, 7338.0], [57.6, 7338.0], [57.7, 7338.0], [57.8, 7338.0], [57.9, 7338.0], [58.0, 7404.0], [58.1, 7404.0], [58.2, 7404.0], [58.3, 7404.0], [58.4, 7404.0], [58.5, 7404.0], [58.6, 7404.0], [58.7, 7404.0], [58.8, 7404.0], [58.9, 7404.0], [59.0, 7459.0], [59.1, 7459.0], [59.2, 7459.0], [59.3, 7459.0], [59.4, 7459.0], [59.5, 7459.0], [59.6, 7459.0], [59.7, 7459.0], [59.8, 7459.0], [59.9, 7459.0], [60.0, 7485.0], [60.1, 7485.0], [60.2, 7485.0], [60.3, 7485.0], [60.4, 7485.0], [60.5, 7485.0], [60.6, 7485.0], [60.7, 7485.0], [60.8, 7485.0], [60.9, 7485.0], [61.0, 7611.0], [61.1, 7611.0], [61.2, 7611.0], [61.3, 7611.0], [61.4, 7611.0], [61.5, 7611.0], [61.6, 7611.0], [61.7, 7611.0], [61.8, 7611.0], [61.9, 7611.0], [62.0, 7641.0], [62.1, 7641.0], [62.2, 7641.0], [62.3, 7641.0], [62.4, 7641.0], [62.5, 7641.0], [62.6, 7641.0], [62.7, 7641.0], [62.8, 7641.0], [62.9, 7641.0], [63.0, 7654.0], [63.1, 7654.0], [63.2, 7654.0], [63.3, 7654.0], [63.4, 7654.0], [63.5, 7654.0], [63.6, 7654.0], [63.7, 7654.0], [63.8, 7654.0], [63.9, 7654.0], [64.0, 7690.0], [64.1, 7690.0], [64.2, 7690.0], [64.3, 7690.0], [64.4, 7690.0], [64.5, 7690.0], [64.6, 7690.0], [64.7, 7690.0], [64.8, 7690.0], [64.9, 7690.0], [65.0, 7781.0], [65.1, 7781.0], [65.2, 7781.0], [65.3, 7781.0], [65.4, 7781.0], [65.5, 7781.0], [65.6, 7781.0], [65.7, 7781.0], [65.8, 7781.0], [65.9, 7781.0], [66.0, 7786.0], [66.1, 7786.0], [66.2, 7786.0], [66.3, 7786.0], [66.4, 7786.0], [66.5, 7786.0], [66.6, 7786.0], [66.7, 7786.0], [66.8, 7786.0], [66.9, 7786.0], [67.0, 7805.0], [67.1, 7805.0], [67.2, 7805.0], [67.3, 7805.0], [67.4, 7805.0], [67.5, 7805.0], [67.6, 7805.0], [67.7, 7805.0], [67.8, 7805.0], [67.9, 7805.0], [68.0, 7805.0], [68.1, 7805.0], [68.2, 7805.0], [68.3, 7805.0], [68.4, 7805.0], [68.5, 7805.0], [68.6, 7805.0], [68.7, 7805.0], [68.8, 7805.0], [68.9, 7805.0], [69.0, 7821.0], [69.1, 7821.0], [69.2, 7821.0], [69.3, 7821.0], [69.4, 7821.0], [69.5, 7821.0], [69.6, 7821.0], [69.7, 7821.0], [69.8, 7821.0], [69.9, 7821.0], [70.0, 7833.0], [70.1, 7833.0], [70.2, 7833.0], [70.3, 7833.0], [70.4, 7833.0], [70.5, 7833.0], [70.6, 7833.0], [70.7, 7833.0], [70.8, 7833.0], [70.9, 7833.0], [71.0, 7833.0], [71.1, 7833.0], [71.2, 7833.0], [71.3, 7833.0], [71.4, 7833.0], [71.5, 7833.0], [71.6, 7833.0], [71.7, 7833.0], [71.8, 7833.0], [71.9, 7833.0], [72.0, 7846.0], [72.1, 7846.0], [72.2, 7846.0], [72.3, 7846.0], [72.4, 7846.0], [72.5, 7846.0], [72.6, 7846.0], [72.7, 7846.0], [72.8, 7846.0], [72.9, 7846.0], [73.0, 8037.0], [73.1, 8037.0], [73.2, 8037.0], [73.3, 8037.0], [73.4, 8037.0], [73.5, 8037.0], [73.6, 8037.0], [73.7, 8037.0], [73.8, 8037.0], [73.9, 8037.0], [74.0, 8058.0], [74.1, 8058.0], [74.2, 8058.0], [74.3, 8058.0], [74.4, 8058.0], [74.5, 8058.0], [74.6, 8058.0], [74.7, 8058.0], [74.8, 8058.0], [74.9, 8058.0], [75.0, 8116.0], [75.1, 8116.0], [75.2, 8116.0], [75.3, 8116.0], [75.4, 8116.0], [75.5, 8116.0], [75.6, 8116.0], [75.7, 8116.0], [75.8, 8116.0], [75.9, 8116.0], [76.0, 8402.0], [76.1, 8402.0], [76.2, 8402.0], [76.3, 8402.0], [76.4, 8402.0], [76.5, 8402.0], [76.6, 8402.0], [76.7, 8402.0], [76.8, 8402.0], [76.9, 8402.0], [77.0, 8456.0], [77.1, 8456.0], [77.2, 8456.0], [77.3, 8456.0], [77.4, 8456.0], [77.5, 8456.0], [77.6, 8456.0], [77.7, 8456.0], [77.8, 8456.0], [77.9, 8456.0], [78.0, 8459.0], [78.1, 8459.0], [78.2, 8459.0], [78.3, 8459.0], [78.4, 8459.0], [78.5, 8459.0], [78.6, 8459.0], [78.7, 8459.0], [78.8, 8459.0], [78.9, 8459.0], [79.0, 8462.0], [79.1, 8462.0], [79.2, 8462.0], [79.3, 8462.0], [79.4, 8462.0], [79.5, 8462.0], [79.6, 8462.0], [79.7, 8462.0], [79.8, 8462.0], [79.9, 8462.0], [80.0, 8469.0], [80.1, 8469.0], [80.2, 8469.0], [80.3, 8469.0], [80.4, 8469.0], [80.5, 8469.0], [80.6, 8469.0], [80.7, 8469.0], [80.8, 8469.0], [80.9, 8469.0], [81.0, 8482.0], [81.1, 8482.0], [81.2, 8482.0], [81.3, 8482.0], [81.4, 8482.0], [81.5, 8482.0], [81.6, 8482.0], [81.7, 8482.0], [81.8, 8482.0], [81.9, 8482.0], [82.0, 8488.0], [82.1, 8488.0], [82.2, 8488.0], [82.3, 8488.0], [82.4, 8488.0], [82.5, 8488.0], [82.6, 8488.0], [82.7, 8488.0], [82.8, 8488.0], [82.9, 8488.0], [83.0, 8494.0], [83.1, 8494.0], [83.2, 8494.0], [83.3, 8494.0], [83.4, 8494.0], [83.5, 8494.0], [83.6, 8494.0], [83.7, 8494.0], [83.8, 8494.0], [83.9, 8494.0], [84.0, 8503.0], [84.1, 8503.0], [84.2, 8503.0], [84.3, 8503.0], [84.4, 8503.0], [84.5, 8503.0], [84.6, 8503.0], [84.7, 8503.0], [84.8, 8503.0], [84.9, 8503.0], [85.0, 8519.0], [85.1, 8519.0], [85.2, 8519.0], [85.3, 8519.0], [85.4, 8519.0], [85.5, 8519.0], [85.6, 8519.0], [85.7, 8519.0], [85.8, 8519.0], [85.9, 8519.0], [86.0, 8543.0], [86.1, 8543.0], [86.2, 8543.0], [86.3, 8543.0], [86.4, 8543.0], [86.5, 8543.0], [86.6, 8543.0], [86.7, 8543.0], [86.8, 8543.0], [86.9, 8543.0], [87.0, 8673.0], [87.1, 8673.0], [87.2, 8673.0], [87.3, 8673.0], [87.4, 8673.0], [87.5, 8673.0], [87.6, 8673.0], [87.7, 8673.0], [87.8, 8673.0], [87.9, 8673.0], [88.0, 8695.0], [88.1, 8695.0], [88.2, 8695.0], [88.3, 8695.0], [88.4, 8695.0], [88.5, 8695.0], [88.6, 8695.0], [88.7, 8695.0], [88.8, 8695.0], [88.9, 8695.0], [89.0, 8760.0], [89.1, 8760.0], [89.2, 8760.0], [89.3, 8760.0], [89.4, 8760.0], [89.5, 8760.0], [89.6, 8760.0], [89.7, 8760.0], [89.8, 8760.0], [89.9, 8760.0], [90.0, 8783.0], [90.1, 8783.0], [90.2, 8783.0], [90.3, 8783.0], [90.4, 8783.0], [90.5, 8783.0], [90.6, 8783.0], [90.7, 8783.0], [90.8, 8783.0], [90.9, 8783.0], [91.0, 8812.0], [91.1, 8812.0], [91.2, 8812.0], [91.3, 8812.0], [91.4, 8812.0], [91.5, 8812.0], [91.6, 8812.0], [91.7, 8812.0], [91.8, 8812.0], [91.9, 8812.0], [92.0, 8885.0], [92.1, 8885.0], [92.2, 8885.0], [92.3, 8885.0], [92.4, 8885.0], [92.5, 8885.0], [92.6, 8885.0], [92.7, 8885.0], [92.8, 8885.0], [92.9, 8885.0], [93.0, 8899.0], [93.1, 8899.0], [93.2, 8899.0], [93.3, 8899.0], [93.4, 8899.0], [93.5, 8899.0], [93.6, 8899.0], [93.7, 8899.0], [93.8, 8899.0], [93.9, 8899.0], [94.0, 8955.0], [94.1, 8955.0], [94.2, 8955.0], [94.3, 8955.0], [94.4, 8955.0], [94.5, 8955.0], [94.6, 8955.0], [94.7, 8955.0], [94.8, 8955.0], [94.9, 8955.0], [95.0, 8964.0], [95.1, 8964.0], [95.2, 8964.0], [95.3, 8964.0], [95.4, 8964.0], [95.5, 8964.0], [95.6, 8964.0], [95.7, 8964.0], [95.8, 8964.0], [95.9, 8964.0], [96.0, 8995.0], [96.1, 8995.0], [96.2, 8995.0], [96.3, 8995.0], [96.4, 8995.0], [96.5, 8995.0], [96.6, 8995.0], [96.7, 8995.0], [96.8, 8995.0], [96.9, 8995.0], [97.0, 9003.0], [97.1, 9003.0], [97.2, 9003.0], [97.3, 9003.0], [97.4, 9003.0], [97.5, 9003.0], [97.6, 9003.0], [97.7, 9003.0], [97.8, 9003.0], [97.9, 9003.0], [98.0, 9007.0], [98.1, 9007.0], [98.2, 9007.0], [98.3, 9007.0], [98.4, 9007.0], [98.5, 9007.0], [98.6, 9007.0], [98.7, 9007.0], [98.8, 9007.0], [98.9, 9007.0], [99.0, 9118.0], [99.1, 9118.0], [99.2, 9118.0], [99.3, 9118.0], [99.4, 9118.0], [99.5, 9118.0], [99.6, 9118.0], [99.7, 9118.0], [99.8, 9118.0], [99.9, 9118.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4100.0, "maxY": 8.0, "series": [{"data": [[8400.0, 8.0], [8500.0, 3.0], [8700.0, 2.0], [8600.0, 2.0], [8900.0, 3.0], [9000.0, 2.0], [8800.0, 3.0], [9100.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4400.0, 6.0], [4500.0, 3.0], [4600.0, 1.0], [4700.0, 1.0], [4800.0, 2.0], [5000.0, 1.0], [5100.0, 1.0], [5200.0, 2.0], [5500.0, 2.0], [5600.0, 3.0], [5400.0, 1.0], [5700.0, 3.0], [5800.0, 6.0], [6000.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6500.0, 2.0], [6600.0, 3.0], [6700.0, 5.0], [6800.0, 5.0], [6900.0, 3.0], [7200.0, 2.0], [7400.0, 3.0], [7300.0, 1.0], [7600.0, 4.0], [7700.0, 2.0], [7800.0, 6.0], [8100.0, 1.0], [8000.0, 2.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.047058823529426, "minX": 1.57172532E12, "maxY": 93.6, "series": [{"data": [[1.57172532E12, 93.6], [1.57172538E12, 43.047058823529426]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172538E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4352.25, "minX": 1.0, "maxY": 9118.0, "series": [{"data": [[2.0, 8899.0], [3.0, 9118.0], [4.0, 8695.0], [5.0, 8673.0], [6.0, 9007.0], [7.0, 8812.0], [8.0, 9003.0], [9.0, 8995.0], [10.0, 8964.0], [11.0, 8955.0], [12.0, 8783.0], [13.0, 8760.0], [14.0, 8543.0], [15.0, 8503.0], [16.0, 8482.0], [17.0, 8519.0], [18.0, 8488.0], [19.0, 8494.0], [20.0, 8469.0], [21.0, 8462.0], [22.0, 8459.0], [23.0, 8456.0], [24.0, 8402.0], [25.0, 8058.0], [26.0, 8037.0], [27.0, 8116.0], [28.0, 7611.0], [29.0, 7846.0], [33.0, 7821.0], [32.0, 7815.666666666667], [35.0, 7805.0], [34.0, 7805.0], [37.0, 7485.0], [36.0, 7786.0], [39.0, 7690.0], [38.0, 7654.0], [41.0, 7276.0], [40.0, 7641.0], [43.0, 7459.0], [42.0, 7338.0], [45.0, 7210.0], [44.0, 7404.0], [47.0, 6795.0], [46.0, 6926.0], [49.0, 6934.0], [48.0, 6944.0], [51.0, 6859.0], [50.0, 6767.0], [53.0, 6854.0], [52.0, 6874.0], [55.0, 6811.0], [54.0, 6697.0], [57.0, 6780.0], [56.0, 6805.0], [59.0, 6712.0], [58.0, 6745.0], [61.0, 6677.0], [60.0, 6587.0], [63.0, 6595.0], [62.0, 6600.0], [67.0, 5875.0], [66.0, 6070.0], [65.0, 6292.0], [64.0, 6408.0], [71.0, 5838.0], [70.0, 5856.0], [69.0, 5879.0], [68.0, 5814.0], [75.0, 5462.0], [74.0, 5772.0], [73.0, 5774.0], [72.0, 5813.0], [78.0, 5698.0], [77.0, 5666.0], [76.0, 5705.0], [83.0, 5179.0], [82.0, 5514.0], [81.0, 5551.0], [80.0, 5449.0], [87.0, 4832.0], [86.0, 4881.0], [85.0, 5039.0], [84.0, 5282.0], [90.0, 4596.0], [89.0, 4602.0], [88.0, 4703.0], [95.0, 4391.0], [94.0, 4538.5], [92.0, 4515.5], [97.0, 4454.0], [100.0, 4352.25], [1.0, 8885.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[50.62999999999997, 6856.379999999999]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 129.35, "minX": 1.57172532E12, "maxY": 2281.2166666666667, "series": [{"data": [[1.57172532E12, 402.5833333333333], [1.57172538E12, 2281.2166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57172532E12, 129.35], [1.57172538E12, 732.6166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172538E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4531.733333333334, "minX": 1.57172532E12, "maxY": 7266.611764705884, "series": [{"data": [[1.57172532E12, 4531.733333333334], [1.57172538E12, 7266.611764705884]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172538E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4449.4, "minX": 1.57172532E12, "maxY": 7169.129411764704, "series": [{"data": [[1.57172532E12, 4449.4], [1.57172538E12, 7169.129411764704]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172538E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1175.0666666666668, "minX": 1.57172532E12, "maxY": 1182.6117647058816, "series": [{"data": [[1.57172532E12, 1175.0666666666668], [1.57172538E12, 1182.6117647058816]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172538E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4129.0, "minX": 1.57172532E12, "maxY": 9118.0, "series": [{"data": [[1.57172532E12, 4881.0], [1.57172538E12, 9118.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57172532E12, 4129.0], [1.57172538E12, 5039.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57172532E12, 4851.6], [1.57172538E12, 8841.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57172532E12, 4881.0], [1.57172538E12, 9118.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57172532E12, 4881.0], [1.57172538E12, 8985.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172538E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4497.0, "minX": 3.0, "maxY": 8899.0, "series": [{"data": [[19.0, 6939.0], [20.0, 5701.5], [24.0, 8511.0], [3.0, 8899.0], [15.0, 4497.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4399.0, "minX": 3.0, "maxY": 8799.0, "series": [{"data": [[19.0, 6839.5], [20.0, 5631.0], [24.0, 8411.0], [3.0, 8799.0], [15.0, 4399.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172532E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172532E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172532E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.57172532E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.57172532E12, 0.25], [1.57172538E12, 1.4166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172538E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.57172532E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.57172532E12, 0.25], [1.57172538E12, 1.4166666666666667]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172538E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.57172532E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.57172532E12, 0.25], [1.57172538E12, 1.4166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172538E12, "title": "Total Transactions Per Second"}},
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

