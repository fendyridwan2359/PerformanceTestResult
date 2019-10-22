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
        data: {"result": {"minY": 4066.0, "minX": 0.0, "maxY": 13613.0, "series": [{"data": [[0.0, 4066.0], [0.1, 4066.0], [0.2, 4066.0], [0.3, 4066.0], [0.4, 4066.0], [0.5, 4066.0], [0.6, 4066.0], [0.7, 4066.0], [0.8, 4066.0], [0.9, 4066.0], [1.0, 4218.0], [1.1, 4218.0], [1.2, 4218.0], [1.3, 4218.0], [1.4, 4218.0], [1.5, 4218.0], [1.6, 4218.0], [1.7, 4218.0], [1.8, 4218.0], [1.9, 4218.0], [2.0, 4297.0], [2.1, 4297.0], [2.2, 4297.0], [2.3, 4297.0], [2.4, 4297.0], [2.5, 4297.0], [2.6, 4297.0], [2.7, 4297.0], [2.8, 4297.0], [2.9, 4297.0], [3.0, 4318.0], [3.1, 4318.0], [3.2, 4318.0], [3.3, 4318.0], [3.4, 4318.0], [3.5, 4318.0], [3.6, 4318.0], [3.7, 4318.0], [3.8, 4318.0], [3.9, 4318.0], [4.0, 4425.0], [4.1, 4425.0], [4.2, 4425.0], [4.3, 4425.0], [4.4, 4425.0], [4.5, 4425.0], [4.6, 4425.0], [4.7, 4425.0], [4.8, 4425.0], [4.9, 4425.0], [5.0, 4426.0], [5.1, 4426.0], [5.2, 4426.0], [5.3, 4426.0], [5.4, 4426.0], [5.5, 4426.0], [5.6, 4426.0], [5.7, 4426.0], [5.8, 4426.0], [5.9, 4426.0], [6.0, 4428.0], [6.1, 4428.0], [6.2, 4428.0], [6.3, 4428.0], [6.4, 4428.0], [6.5, 4428.0], [6.6, 4428.0], [6.7, 4428.0], [6.8, 4428.0], [6.9, 4428.0], [7.0, 4577.0], [7.1, 4577.0], [7.2, 4577.0], [7.3, 4577.0], [7.4, 4577.0], [7.5, 4577.0], [7.6, 4577.0], [7.7, 4577.0], [7.8, 4577.0], [7.9, 4577.0], [8.0, 4632.0], [8.1, 4632.0], [8.2, 4632.0], [8.3, 4632.0], [8.4, 4632.0], [8.5, 4632.0], [8.6, 4632.0], [8.7, 4632.0], [8.8, 4632.0], [8.9, 4632.0], [9.0, 4712.0], [9.1, 4712.0], [9.2, 4712.0], [9.3, 4712.0], [9.4, 4712.0], [9.5, 4712.0], [9.6, 4712.0], [9.7, 4712.0], [9.8, 4712.0], [9.9, 4712.0], [10.0, 4910.0], [10.1, 4910.0], [10.2, 4910.0], [10.3, 4910.0], [10.4, 4910.0], [10.5, 4910.0], [10.6, 4910.0], [10.7, 4910.0], [10.8, 4910.0], [10.9, 4910.0], [11.0, 5190.0], [11.1, 5190.0], [11.2, 5190.0], [11.3, 5190.0], [11.4, 5190.0], [11.5, 5190.0], [11.6, 5190.0], [11.7, 5190.0], [11.8, 5190.0], [11.9, 5190.0], [12.0, 5240.0], [12.1, 5240.0], [12.2, 5240.0], [12.3, 5240.0], [12.4, 5240.0], [12.5, 5240.0], [12.6, 5240.0], [12.7, 5240.0], [12.8, 5240.0], [12.9, 5240.0], [13.0, 5261.0], [13.1, 5261.0], [13.2, 5261.0], [13.3, 5261.0], [13.4, 5261.0], [13.5, 5261.0], [13.6, 5261.0], [13.7, 5261.0], [13.8, 5261.0], [13.9, 5261.0], [14.0, 5409.0], [14.1, 5409.0], [14.2, 5409.0], [14.3, 5409.0], [14.4, 5409.0], [14.5, 5409.0], [14.6, 5409.0], [14.7, 5409.0], [14.8, 5409.0], [14.9, 5409.0], [15.0, 5447.0], [15.1, 5447.0], [15.2, 5447.0], [15.3, 5447.0], [15.4, 5447.0], [15.5, 5447.0], [15.6, 5447.0], [15.7, 5447.0], [15.8, 5447.0], [15.9, 5447.0], [16.0, 5459.0], [16.1, 5459.0], [16.2, 5459.0], [16.3, 5459.0], [16.4, 5459.0], [16.5, 5459.0], [16.6, 5459.0], [16.7, 5459.0], [16.8, 5459.0], [16.9, 5459.0], [17.0, 5485.0], [17.1, 5485.0], [17.2, 5485.0], [17.3, 5485.0], [17.4, 5485.0], [17.5, 5485.0], [17.6, 5485.0], [17.7, 5485.0], [17.8, 5485.0], [17.9, 5485.0], [18.0, 5537.0], [18.1, 5537.0], [18.2, 5537.0], [18.3, 5537.0], [18.4, 5537.0], [18.5, 5537.0], [18.6, 5537.0], [18.7, 5537.0], [18.8, 5537.0], [18.9, 5537.0], [19.0, 5557.0], [19.1, 5557.0], [19.2, 5557.0], [19.3, 5557.0], [19.4, 5557.0], [19.5, 5557.0], [19.6, 5557.0], [19.7, 5557.0], [19.8, 5557.0], [19.9, 5557.0], [20.0, 5603.0], [20.1, 5603.0], [20.2, 5603.0], [20.3, 5603.0], [20.4, 5603.0], [20.5, 5603.0], [20.6, 5603.0], [20.7, 5603.0], [20.8, 5603.0], [20.9, 5603.0], [21.0, 5606.0], [21.1, 5606.0], [21.2, 5606.0], [21.3, 5606.0], [21.4, 5606.0], [21.5, 5606.0], [21.6, 5606.0], [21.7, 5606.0], [21.8, 5606.0], [21.9, 5606.0], [22.0, 5712.0], [22.1, 5712.0], [22.2, 5712.0], [22.3, 5712.0], [22.4, 5712.0], [22.5, 5712.0], [22.6, 5712.0], [22.7, 5712.0], [22.8, 5712.0], [22.9, 5712.0], [23.0, 5741.0], [23.1, 5741.0], [23.2, 5741.0], [23.3, 5741.0], [23.4, 5741.0], [23.5, 5741.0], [23.6, 5741.0], [23.7, 5741.0], [23.8, 5741.0], [23.9, 5741.0], [24.0, 5763.0], [24.1, 5763.0], [24.2, 5763.0], [24.3, 5763.0], [24.4, 5763.0], [24.5, 5763.0], [24.6, 5763.0], [24.7, 5763.0], [24.8, 5763.0], [24.9, 5763.0], [25.0, 5803.0], [25.1, 5803.0], [25.2, 5803.0], [25.3, 5803.0], [25.4, 5803.0], [25.5, 5803.0], [25.6, 5803.0], [25.7, 5803.0], [25.8, 5803.0], [25.9, 5803.0], [26.0, 5843.0], [26.1, 5843.0], [26.2, 5843.0], [26.3, 5843.0], [26.4, 5843.0], [26.5, 5843.0], [26.6, 5843.0], [26.7, 5843.0], [26.8, 5843.0], [26.9, 5843.0], [27.0, 5874.0], [27.1, 5874.0], [27.2, 5874.0], [27.3, 5874.0], [27.4, 5874.0], [27.5, 5874.0], [27.6, 5874.0], [27.7, 5874.0], [27.8, 5874.0], [27.9, 5874.0], [28.0, 6020.0], [28.1, 6020.0], [28.2, 6020.0], [28.3, 6020.0], [28.4, 6020.0], [28.5, 6020.0], [28.6, 6020.0], [28.7, 6020.0], [28.8, 6020.0], [28.9, 6020.0], [29.0, 6068.0], [29.1, 6068.0], [29.2, 6068.0], [29.3, 6068.0], [29.4, 6068.0], [29.5, 6068.0], [29.6, 6068.0], [29.7, 6068.0], [29.8, 6068.0], [29.9, 6068.0], [30.0, 6166.0], [30.1, 6166.0], [30.2, 6166.0], [30.3, 6166.0], [30.4, 6166.0], [30.5, 6166.0], [30.6, 6166.0], [30.7, 6166.0], [30.8, 6166.0], [30.9, 6166.0], [31.0, 6176.0], [31.1, 6176.0], [31.2, 6176.0], [31.3, 6176.0], [31.4, 6176.0], [31.5, 6176.0], [31.6, 6176.0], [31.7, 6176.0], [31.8, 6176.0], [31.9, 6176.0], [32.0, 6284.0], [32.1, 6284.0], [32.2, 6284.0], [32.3, 6284.0], [32.4, 6284.0], [32.5, 6284.0], [32.6, 6284.0], [32.7, 6284.0], [32.8, 6284.0], [32.9, 6284.0], [33.0, 6304.0], [33.1, 6304.0], [33.2, 6304.0], [33.3, 6304.0], [33.4, 6304.0], [33.5, 6304.0], [33.6, 6304.0], [33.7, 6304.0], [33.8, 6304.0], [33.9, 6304.0], [34.0, 6326.0], [34.1, 6326.0], [34.2, 6326.0], [34.3, 6326.0], [34.4, 6326.0], [34.5, 6326.0], [34.6, 6326.0], [34.7, 6326.0], [34.8, 6326.0], [34.9, 6326.0], [35.0, 6399.0], [35.1, 6399.0], [35.2, 6399.0], [35.3, 6399.0], [35.4, 6399.0], [35.5, 6399.0], [35.6, 6399.0], [35.7, 6399.0], [35.8, 6399.0], [35.9, 6399.0], [36.0, 6415.0], [36.1, 6415.0], [36.2, 6415.0], [36.3, 6415.0], [36.4, 6415.0], [36.5, 6415.0], [36.6, 6415.0], [36.7, 6415.0], [36.8, 6415.0], [36.9, 6415.0], [37.0, 6428.0], [37.1, 6428.0], [37.2, 6428.0], [37.3, 6428.0], [37.4, 6428.0], [37.5, 6428.0], [37.6, 6428.0], [37.7, 6428.0], [37.8, 6428.0], [37.9, 6428.0], [38.0, 6440.0], [38.1, 6440.0], [38.2, 6440.0], [38.3, 6440.0], [38.4, 6440.0], [38.5, 6440.0], [38.6, 6440.0], [38.7, 6440.0], [38.8, 6440.0], [38.9, 6440.0], [39.0, 6489.0], [39.1, 6489.0], [39.2, 6489.0], [39.3, 6489.0], [39.4, 6489.0], [39.5, 6489.0], [39.6, 6489.0], [39.7, 6489.0], [39.8, 6489.0], [39.9, 6489.0], [40.0, 6528.0], [40.1, 6528.0], [40.2, 6528.0], [40.3, 6528.0], [40.4, 6528.0], [40.5, 6528.0], [40.6, 6528.0], [40.7, 6528.0], [40.8, 6528.0], [40.9, 6528.0], [41.0, 6609.0], [41.1, 6609.0], [41.2, 6609.0], [41.3, 6609.0], [41.4, 6609.0], [41.5, 6609.0], [41.6, 6609.0], [41.7, 6609.0], [41.8, 6609.0], [41.9, 6609.0], [42.0, 6616.0], [42.1, 6616.0], [42.2, 6616.0], [42.3, 6616.0], [42.4, 6616.0], [42.5, 6616.0], [42.6, 6616.0], [42.7, 6616.0], [42.8, 6616.0], [42.9, 6616.0], [43.0, 6701.0], [43.1, 6701.0], [43.2, 6701.0], [43.3, 6701.0], [43.4, 6701.0], [43.5, 6701.0], [43.6, 6701.0], [43.7, 6701.0], [43.8, 6701.0], [43.9, 6701.0], [44.0, 6781.0], [44.1, 6781.0], [44.2, 6781.0], [44.3, 6781.0], [44.4, 6781.0], [44.5, 6781.0], [44.6, 6781.0], [44.7, 6781.0], [44.8, 6781.0], [44.9, 6781.0], [45.0, 6788.0], [45.1, 6788.0], [45.2, 6788.0], [45.3, 6788.0], [45.4, 6788.0], [45.5, 6788.0], [45.6, 6788.0], [45.7, 6788.0], [45.8, 6788.0], [45.9, 6788.0], [46.0, 6905.0], [46.1, 6905.0], [46.2, 6905.0], [46.3, 6905.0], [46.4, 6905.0], [46.5, 6905.0], [46.6, 6905.0], [46.7, 6905.0], [46.8, 6905.0], [46.9, 6905.0], [47.0, 6927.0], [47.1, 6927.0], [47.2, 6927.0], [47.3, 6927.0], [47.4, 6927.0], [47.5, 6927.0], [47.6, 6927.0], [47.7, 6927.0], [47.8, 6927.0], [47.9, 6927.0], [48.0, 6929.0], [48.1, 6929.0], [48.2, 6929.0], [48.3, 6929.0], [48.4, 6929.0], [48.5, 6929.0], [48.6, 6929.0], [48.7, 6929.0], [48.8, 6929.0], [48.9, 6929.0], [49.0, 7018.0], [49.1, 7018.0], [49.2, 7018.0], [49.3, 7018.0], [49.4, 7018.0], [49.5, 7018.0], [49.6, 7018.0], [49.7, 7018.0], [49.8, 7018.0], [49.9, 7018.0], [50.0, 7077.0], [50.1, 7077.0], [50.2, 7077.0], [50.3, 7077.0], [50.4, 7077.0], [50.5, 7077.0], [50.6, 7077.0], [50.7, 7077.0], [50.8, 7077.0], [50.9, 7077.0], [51.0, 7089.0], [51.1, 7089.0], [51.2, 7089.0], [51.3, 7089.0], [51.4, 7089.0], [51.5, 7089.0], [51.6, 7089.0], [51.7, 7089.0], [51.8, 7089.0], [51.9, 7089.0], [52.0, 7143.0], [52.1, 7143.0], [52.2, 7143.0], [52.3, 7143.0], [52.4, 7143.0], [52.5, 7143.0], [52.6, 7143.0], [52.7, 7143.0], [52.8, 7143.0], [52.9, 7143.0], [53.0, 7345.0], [53.1, 7345.0], [53.2, 7345.0], [53.3, 7345.0], [53.4, 7345.0], [53.5, 7345.0], [53.6, 7345.0], [53.7, 7345.0], [53.8, 7345.0], [53.9, 7345.0], [54.0, 7394.0], [54.1, 7394.0], [54.2, 7394.0], [54.3, 7394.0], [54.4, 7394.0], [54.5, 7394.0], [54.6, 7394.0], [54.7, 7394.0], [54.8, 7394.0], [54.9, 7394.0], [55.0, 7447.0], [55.1, 7447.0], [55.2, 7447.0], [55.3, 7447.0], [55.4, 7447.0], [55.5, 7447.0], [55.6, 7447.0], [55.7, 7447.0], [55.8, 7447.0], [55.9, 7447.0], [56.0, 7476.0], [56.1, 7476.0], [56.2, 7476.0], [56.3, 7476.0], [56.4, 7476.0], [56.5, 7476.0], [56.6, 7476.0], [56.7, 7476.0], [56.8, 7476.0], [56.9, 7476.0], [57.0, 7613.0], [57.1, 7613.0], [57.2, 7613.0], [57.3, 7613.0], [57.4, 7613.0], [57.5, 7613.0], [57.6, 7613.0], [57.7, 7613.0], [57.8, 7613.0], [57.9, 7613.0], [58.0, 7653.0], [58.1, 7653.0], [58.2, 7653.0], [58.3, 7653.0], [58.4, 7653.0], [58.5, 7653.0], [58.6, 7653.0], [58.7, 7653.0], [58.8, 7653.0], [58.9, 7653.0], [59.0, 7680.0], [59.1, 7680.0], [59.2, 7680.0], [59.3, 7680.0], [59.4, 7680.0], [59.5, 7680.0], [59.6, 7680.0], [59.7, 7680.0], [59.8, 7680.0], [59.9, 7680.0], [60.0, 7681.0], [60.1, 7681.0], [60.2, 7681.0], [60.3, 7681.0], [60.4, 7681.0], [60.5, 7681.0], [60.6, 7681.0], [60.7, 7681.0], [60.8, 7681.0], [60.9, 7681.0], [61.0, 7695.0], [61.1, 7695.0], [61.2, 7695.0], [61.3, 7695.0], [61.4, 7695.0], [61.5, 7695.0], [61.6, 7695.0], [61.7, 7695.0], [61.8, 7695.0], [61.9, 7695.0], [62.0, 7750.0], [62.1, 7750.0], [62.2, 7750.0], [62.3, 7750.0], [62.4, 7750.0], [62.5, 7750.0], [62.6, 7750.0], [62.7, 7750.0], [62.8, 7750.0], [62.9, 7750.0], [63.0, 7764.0], [63.1, 7764.0], [63.2, 7764.0], [63.3, 7764.0], [63.4, 7764.0], [63.5, 7764.0], [63.6, 7764.0], [63.7, 7764.0], [63.8, 7764.0], [63.9, 7764.0], [64.0, 7845.0], [64.1, 7845.0], [64.2, 7845.0], [64.3, 7845.0], [64.4, 7845.0], [64.5, 7845.0], [64.6, 7845.0], [64.7, 7845.0], [64.8, 7845.0], [64.9, 7845.0], [65.0, 7850.0], [65.1, 7850.0], [65.2, 7850.0], [65.3, 7850.0], [65.4, 7850.0], [65.5, 7850.0], [65.6, 7850.0], [65.7, 7850.0], [65.8, 7850.0], [65.9, 7850.0], [66.0, 7892.0], [66.1, 7892.0], [66.2, 7892.0], [66.3, 7892.0], [66.4, 7892.0], [66.5, 7892.0], [66.6, 7892.0], [66.7, 7892.0], [66.8, 7892.0], [66.9, 7892.0], [67.0, 7910.0], [67.1, 7910.0], [67.2, 7910.0], [67.3, 7910.0], [67.4, 7910.0], [67.5, 7910.0], [67.6, 7910.0], [67.7, 7910.0], [67.8, 7910.0], [67.9, 7910.0], [68.0, 7988.0], [68.1, 7988.0], [68.2, 7988.0], [68.3, 7988.0], [68.4, 7988.0], [68.5, 7988.0], [68.6, 7988.0], [68.7, 7988.0], [68.8, 7988.0], [68.9, 7988.0], [69.0, 8147.0], [69.1, 8147.0], [69.2, 8147.0], [69.3, 8147.0], [69.4, 8147.0], [69.5, 8147.0], [69.6, 8147.0], [69.7, 8147.0], [69.8, 8147.0], [69.9, 8147.0], [70.0, 8158.0], [70.1, 8158.0], [70.2, 8158.0], [70.3, 8158.0], [70.4, 8158.0], [70.5, 8158.0], [70.6, 8158.0], [70.7, 8158.0], [70.8, 8158.0], [70.9, 8158.0], [71.0, 8164.0], [71.1, 8164.0], [71.2, 8164.0], [71.3, 8164.0], [71.4, 8164.0], [71.5, 8164.0], [71.6, 8164.0], [71.7, 8164.0], [71.8, 8164.0], [71.9, 8164.0], [72.0, 8220.0], [72.1, 8220.0], [72.2, 8220.0], [72.3, 8220.0], [72.4, 8220.0], [72.5, 8220.0], [72.6, 8220.0], [72.7, 8220.0], [72.8, 8220.0], [72.9, 8220.0], [73.0, 8290.0], [73.1, 8290.0], [73.2, 8290.0], [73.3, 8290.0], [73.4, 8290.0], [73.5, 8290.0], [73.6, 8290.0], [73.7, 8290.0], [73.8, 8290.0], [73.9, 8290.0], [74.0, 8371.0], [74.1, 8371.0], [74.2, 8371.0], [74.3, 8371.0], [74.4, 8371.0], [74.5, 8371.0], [74.6, 8371.0], [74.7, 8371.0], [74.8, 8371.0], [74.9, 8371.0], [75.0, 8373.0], [75.1, 8373.0], [75.2, 8373.0], [75.3, 8373.0], [75.4, 8373.0], [75.5, 8373.0], [75.6, 8373.0], [75.7, 8373.0], [75.8, 8373.0], [75.9, 8373.0], [76.0, 8441.0], [76.1, 8441.0], [76.2, 8441.0], [76.3, 8441.0], [76.4, 8441.0], [76.5, 8441.0], [76.6, 8441.0], [76.7, 8441.0], [76.8, 8441.0], [76.9, 8441.0], [77.0, 8503.0], [77.1, 8503.0], [77.2, 8503.0], [77.3, 8503.0], [77.4, 8503.0], [77.5, 8503.0], [77.6, 8503.0], [77.7, 8503.0], [77.8, 8503.0], [77.9, 8503.0], [78.0, 8571.0], [78.1, 8571.0], [78.2, 8571.0], [78.3, 8571.0], [78.4, 8571.0], [78.5, 8571.0], [78.6, 8571.0], [78.7, 8571.0], [78.8, 8571.0], [78.9, 8571.0], [79.0, 8634.0], [79.1, 8634.0], [79.2, 8634.0], [79.3, 8634.0], [79.4, 8634.0], [79.5, 8634.0], [79.6, 8634.0], [79.7, 8634.0], [79.8, 8634.0], [79.9, 8634.0], [80.0, 8639.0], [80.1, 8639.0], [80.2, 8639.0], [80.3, 8639.0], [80.4, 8639.0], [80.5, 8639.0], [80.6, 8639.0], [80.7, 8639.0], [80.8, 8639.0], [80.9, 8639.0], [81.0, 8650.0], [81.1, 8650.0], [81.2, 8650.0], [81.3, 8650.0], [81.4, 8650.0], [81.5, 8650.0], [81.6, 8650.0], [81.7, 8650.0], [81.8, 8650.0], [81.9, 8650.0], [82.0, 8657.0], [82.1, 8657.0], [82.2, 8657.0], [82.3, 8657.0], [82.4, 8657.0], [82.5, 8657.0], [82.6, 8657.0], [82.7, 8657.0], [82.8, 8657.0], [82.9, 8657.0], [83.0, 8723.0], [83.1, 8723.0], [83.2, 8723.0], [83.3, 8723.0], [83.4, 8723.0], [83.5, 8723.0], [83.6, 8723.0], [83.7, 8723.0], [83.8, 8723.0], [83.9, 8723.0], [84.0, 8768.0], [84.1, 8768.0], [84.2, 8768.0], [84.3, 8768.0], [84.4, 8768.0], [84.5, 8768.0], [84.6, 8768.0], [84.7, 8768.0], [84.8, 8768.0], [84.9, 8768.0], [85.0, 8910.0], [85.1, 8910.0], [85.2, 8910.0], [85.3, 8910.0], [85.4, 8910.0], [85.5, 8910.0], [85.6, 8910.0], [85.7, 8910.0], [85.8, 8910.0], [85.9, 8910.0], [86.0, 8955.0], [86.1, 8955.0], [86.2, 8955.0], [86.3, 8955.0], [86.4, 8955.0], [86.5, 8955.0], [86.6, 8955.0], [86.7, 8955.0], [86.8, 8955.0], [86.9, 8955.0], [87.0, 9024.0], [87.1, 9024.0], [87.2, 9024.0], [87.3, 9024.0], [87.4, 9024.0], [87.5, 9024.0], [87.6, 9024.0], [87.7, 9024.0], [87.8, 9024.0], [87.9, 9024.0], [88.0, 9024.0], [88.1, 9024.0], [88.2, 9024.0], [88.3, 9024.0], [88.4, 9024.0], [88.5, 9024.0], [88.6, 9024.0], [88.7, 9024.0], [88.8, 9024.0], [88.9, 9024.0], [89.0, 9086.0], [89.1, 9086.0], [89.2, 9086.0], [89.3, 9086.0], [89.4, 9086.0], [89.5, 9086.0], [89.6, 9086.0], [89.7, 9086.0], [89.8, 9086.0], [89.9, 9086.0], [90.0, 9092.0], [90.1, 9092.0], [90.2, 9092.0], [90.3, 9092.0], [90.4, 9092.0], [90.5, 9092.0], [90.6, 9092.0], [90.7, 9092.0], [90.8, 9092.0], [90.9, 9092.0], [91.0, 9099.0], [91.1, 9099.0], [91.2, 9099.0], [91.3, 9099.0], [91.4, 9099.0], [91.5, 9099.0], [91.6, 9099.0], [91.7, 9099.0], [91.8, 9099.0], [91.9, 9099.0], [92.0, 9238.0], [92.1, 9238.0], [92.2, 9238.0], [92.3, 9238.0], [92.4, 9238.0], [92.5, 9238.0], [92.6, 9238.0], [92.7, 9238.0], [92.8, 9238.0], [92.9, 9238.0], [93.0, 9239.0], [93.1, 9239.0], [93.2, 9239.0], [93.3, 9239.0], [93.4, 9239.0], [93.5, 9239.0], [93.6, 9239.0], [93.7, 9239.0], [93.8, 9239.0], [93.9, 9239.0], [94.0, 9240.0], [94.1, 9240.0], [94.2, 9240.0], [94.3, 9240.0], [94.4, 9240.0], [94.5, 9240.0], [94.6, 9240.0], [94.7, 9240.0], [94.8, 9240.0], [94.9, 9240.0], [95.0, 9312.0], [95.1, 9312.0], [95.2, 9312.0], [95.3, 9312.0], [95.4, 9312.0], [95.5, 9312.0], [95.6, 9312.0], [95.7, 9312.0], [95.8, 9312.0], [95.9, 9312.0], [96.0, 9376.0], [96.1, 9376.0], [96.2, 9376.0], [96.3, 9376.0], [96.4, 9376.0], [96.5, 9376.0], [96.6, 9376.0], [96.7, 9376.0], [96.8, 9376.0], [96.9, 9376.0], [97.0, 9406.0], [97.1, 9406.0], [97.2, 9406.0], [97.3, 9406.0], [97.4, 9406.0], [97.5, 9406.0], [97.6, 9406.0], [97.7, 9406.0], [97.8, 9406.0], [97.9, 9406.0], [98.0, 9409.0], [98.1, 9409.0], [98.2, 9409.0], [98.3, 9409.0], [98.4, 9409.0], [98.5, 9409.0], [98.6, 9409.0], [98.7, 9409.0], [98.8, 9409.0], [98.9, 9409.0], [99.0, 13613.0], [99.1, 13613.0], [99.2, 13613.0], [99.3, 13613.0], [99.4, 13613.0], [99.5, 13613.0], [99.6, 13613.0], [99.7, 13613.0], [99.8, 13613.0], [99.9, 13613.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4000.0, "maxY": 5.0, "series": [{"data": [[8200.0, 2.0], [8300.0, 2.0], [8400.0, 1.0], [8600.0, 4.0], [8500.0, 2.0], [8700.0, 2.0], [8900.0, 2.0], [9000.0, 5.0], [9200.0, 3.0], [9300.0, 2.0], [9400.0, 2.0], [13600.0, 1.0], [4000.0, 1.0], [4200.0, 2.0], [4300.0, 1.0], [4400.0, 3.0], [4600.0, 1.0], [4500.0, 1.0], [4700.0, 1.0], [4900.0, 1.0], [5100.0, 1.0], [5200.0, 2.0], [5400.0, 4.0], [5500.0, 2.0], [5600.0, 2.0], [5700.0, 3.0], [5800.0, 3.0], [6000.0, 2.0], [6100.0, 2.0], [6300.0, 3.0], [6200.0, 1.0], [6400.0, 4.0], [6600.0, 2.0], [6500.0, 1.0], [6700.0, 3.0], [6900.0, 3.0], [7000.0, 3.0], [7100.0, 1.0], [7300.0, 2.0], [7400.0, 2.0], [7600.0, 5.0], [7700.0, 2.0], [7800.0, 3.0], [7900.0, 2.0], [8100.0, 3.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 99.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.62999999999998, "minX": 1.57172556E12, "maxY": 50.62999999999998, "series": [{"data": [[1.57172556E12, 50.62999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172556E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4252.25, "minX": 1.0, "maxY": 13613.0, "series": [{"data": [[2.0, 9409.0], [3.0, 9406.0], [4.0, 9376.0], [5.0, 9312.0], [7.0, 9239.5], [8.0, 9238.0], [9.0, 9024.0], [10.0, 9099.0], [11.0, 9092.0], [12.0, 9086.0], [13.0, 8723.0], [14.0, 9024.0], [15.0, 8955.0], [16.0, 8639.0], [17.0, 8910.0], [18.0, 8768.0], [19.0, 8657.0], [20.0, 8650.0], [22.0, 8537.0], [23.0, 8634.0], [24.0, 8220.0], [25.0, 8441.0], [26.0, 8158.0], [27.0, 8164.0], [28.0, 8371.0], [29.0, 8373.0], [30.0, 8290.0], [31.0, 7910.0], [33.0, 7988.0], [32.0, 8147.0], [35.0, 7892.0], [34.0, 7653.0], [36.0, 7681.0], [39.0, 7845.0], [38.0, 7772.5], [41.0, 7750.0], [40.0, 7764.0], [43.0, 7394.0], [42.0, 7680.0], [45.0, 7476.0], [44.0, 7613.0], [47.0, 7143.0], [46.0, 7447.0], [49.0, 7345.0], [48.0, 7089.0], [51.0, 7077.0], [50.0, 6927.0], [53.0, 6973.5], [55.0, 6781.0], [54.0, 6905.0], [56.0, 6701.0], [59.0, 6489.0], [58.0, 6698.5], [61.0, 6284.0], [60.0, 6528.0], [63.0, 6616.0], [62.0, 6428.0], [67.0, 6415.0], [66.0, 6304.0], [65.0, 6440.0], [64.0, 6399.0], [71.0, 6176.0], [70.0, 6020.0], [69.0, 6166.0], [68.0, 6326.0], [75.0, 5803.0], [74.0, 5712.0], [73.0, 6068.0], [72.0, 5843.0], [79.0, 5409.0], [78.0, 5763.0], [77.0, 5705.5], [83.0, 5606.0], [82.0, 5485.0], [81.0, 5741.0], [80.0, 5447.0], [87.0, 5190.0], [86.0, 5557.0], [85.0, 5261.0], [84.0, 5603.0], [91.0, 4426.0], [90.0, 5240.0], [89.0, 4910.0], [88.0, 5459.0], [95.0, 4528.5], [93.0, 4712.0], [92.0, 4577.0], [96.0, 4318.0], [100.0, 4252.25], [1.0, 13613.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[50.62999999999998, 7084.799999999999]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 853.35, "minX": 1.57172556E12, "maxY": 2698.15, "series": [{"data": [[1.57172556E12, 2698.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57172556E12, 853.35]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172556E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7084.799999999999, "minX": 1.57172556E12, "maxY": 7084.799999999999, "series": [{"data": [[1.57172556E12, 7084.799999999999]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172556E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6850.7800000000025, "minX": 1.57172556E12, "maxY": 6850.7800000000025, "series": [{"data": [[1.57172556E12, 6850.7800000000025]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172556E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1320.0599999999997, "minX": 1.57172556E12, "maxY": 1320.0599999999997, "series": [{"data": [[1.57172556E12, 1320.0599999999997]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172556E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4066.0, "minX": 1.57172556E12, "maxY": 9409.0, "series": [{"data": [[1.57172556E12, 9409.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57172556E12, 4066.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57172556E12, 9086.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57172556E12, 9409.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57172556E12, 9240.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172556E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5537.0, "minX": 1.0, "maxY": 13613.0, "series": [{"data": [[17.0, 5537.0], [18.0, 7666.5], [10.0, 6868.0], [21.0, 8571.0], [23.0, 6440.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 13613.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 8472.0, "series": [{"data": [[17.0, 5437.0], [18.0, 7568.0], [10.0, 6777.5], [21.0, 8472.0], [23.0, 6340.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.57172556E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.57172556E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172556E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57172556E12, "maxY": 1.65, "series": [{"data": [[1.57172556E12, 1.65]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57172556E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57172556E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57172556E12, "maxY": 1.65, "series": [{"data": [[1.57172556E12, 0.016666666666666666]], "isOverall": false, "label": "Login into Web-failure", "isController": false}, {"data": [[1.57172556E12, 1.65]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172556E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.57172556E12, "maxY": 1.65, "series": [{"data": [[1.57172556E12, 1.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57172556E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57172556E12, "title": "Total Transactions Per Second"}},
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

