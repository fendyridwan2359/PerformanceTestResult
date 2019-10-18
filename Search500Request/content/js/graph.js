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
        data: {"result": {"minY": 4087.0, "minX": 0.0, "maxY": 10344.0, "series": [{"data": [[0.0, 4087.0], [0.1, 4087.0], [0.2, 4091.0], [0.3, 4091.0], [0.4, 4094.0], [0.5, 4094.0], [0.6, 4094.0], [0.7, 4107.0], [0.8, 4126.0], [0.9, 4126.0], [1.0, 4132.0], [1.1, 4132.0], [1.2, 4137.0], [1.3, 4137.0], [1.4, 4309.0], [1.5, 4309.0], [1.6, 4315.0], [1.7, 4315.0], [1.8, 4410.0], [1.9, 4410.0], [2.0, 4425.0], [2.1, 4425.0], [2.2, 4428.0], [2.3, 4428.0], [2.4, 4487.0], [2.5, 4487.0], [2.6, 4500.0], [2.7, 4500.0], [2.8, 4500.0], [2.9, 4506.0], [3.0, 4506.0], [3.1, 4510.0], [3.2, 4510.0], [3.3, 4518.0], [3.4, 4518.0], [3.5, 4524.0], [3.6, 4524.0], [3.7, 4533.0], [3.8, 4533.0], [3.9, 4601.0], [4.0, 4601.0], [4.1, 4648.0], [4.2, 4648.0], [4.3, 4648.0], [4.4, 4648.0], [4.5, 4661.0], [4.6, 4661.0], [4.7, 4693.0], [4.8, 4693.0], [4.9, 4707.0], [5.0, 4707.0], [5.1, 4719.0], [5.2, 4719.0], [5.3, 4725.0], [5.4, 4725.0], [5.5, 4773.0], [5.6, 4773.0], [5.7, 4800.0], [5.8, 4800.0], [5.9, 4806.0], [6.0, 4806.0], [6.1, 4812.0], [6.2, 4812.0], [6.3, 4823.0], [6.4, 4823.0], [6.5, 4830.0], [6.6, 4830.0], [6.7, 4908.0], [6.8, 4908.0], [6.9, 4911.0], [7.0, 4911.0], [7.1, 4913.0], [7.2, 4913.0], [7.3, 4915.0], [7.4, 4915.0], [7.5, 4926.0], [7.6, 4926.0], [7.7, 4932.0], [7.8, 4932.0], [7.9, 4935.0], [8.0, 4935.0], [8.1, 4941.0], [8.2, 4941.0], [8.3, 4946.0], [8.4, 4946.0], [8.5, 4973.0], [8.6, 4973.0], [8.7, 4989.0], [8.8, 4991.0], [8.9, 4991.0], [9.0, 5004.0], [9.1, 5004.0], [9.2, 5004.0], [9.3, 5004.0], [9.4, 5007.0], [9.5, 5007.0], [9.6, 5017.0], [9.7, 5017.0], [9.8, 5018.0], [9.9, 5018.0], [10.0, 5020.0], [10.1, 5020.0], [10.2, 5041.0], [10.3, 5041.0], [10.4, 5047.0], [10.5, 5047.0], [10.6, 5056.0], [10.7, 5056.0], [10.8, 5057.0], [10.9, 5057.0], [11.0, 5058.0], [11.1, 5058.0], [11.2, 5076.0], [11.3, 5076.0], [11.4, 5076.0], [11.5, 5076.0], [11.6, 5077.0], [11.7, 5077.0], [11.8, 5086.0], [11.9, 5086.0], [12.0, 5086.0], [12.1, 5086.0], [12.2, 5086.0], [12.3, 5086.0], [12.4, 5087.0], [12.5, 5087.0], [12.6, 5088.0], [12.7, 5088.0], [12.8, 5088.0], [12.9, 5088.0], [13.0, 5088.0], [13.1, 5088.0], [13.2, 5088.0], [13.3, 5088.0], [13.4, 5088.0], [13.5, 5088.0], [13.6, 5088.0], [13.7, 5088.0], [13.8, 5089.0], [13.9, 5089.0], [14.0, 5090.0], [14.1, 5090.0], [14.2, 5090.0], [14.3, 5090.0], [14.4, 5090.0], [14.5, 5090.0], [14.6, 5091.0], [14.7, 5091.0], [14.8, 5091.0], [14.9, 5091.0], [15.0, 5097.0], [15.1, 5097.0], [15.2, 5099.0], [15.3, 5099.0], [15.4, 5099.0], [15.5, 5099.0], [15.6, 5099.0], [15.7, 5099.0], [15.8, 5100.0], [15.9, 5100.0], [16.0, 5101.0], [16.1, 5101.0], [16.2, 5103.0], [16.3, 5103.0], [16.4, 5121.0], [16.5, 5121.0], [16.6, 5128.0], [16.7, 5128.0], [16.8, 5154.0], [16.9, 5154.0], [17.0, 5197.0], [17.1, 5197.0], [17.2, 5200.0], [17.3, 5200.0], [17.4, 5214.0], [17.5, 5214.0], [17.6, 5236.0], [17.7, 5236.0], [17.8, 5281.0], [17.9, 5281.0], [18.0, 5284.0], [18.1, 5284.0], [18.2, 5301.0], [18.3, 5301.0], [18.4, 5307.0], [18.5, 5307.0], [18.6, 5320.0], [18.7, 5320.0], [18.8, 5341.0], [18.9, 5341.0], [19.0, 5344.0], [19.1, 5344.0], [19.2, 5345.0], [19.3, 5345.0], [19.4, 5368.0], [19.5, 5368.0], [19.6, 5389.0], [19.7, 5389.0], [19.8, 5393.0], [19.9, 5393.0], [20.0, 5396.0], [20.1, 5396.0], [20.2, 5397.0], [20.3, 5397.0], [20.4, 5397.0], [20.5, 5397.0], [20.6, 5397.0], [20.7, 5397.0], [20.8, 5399.0], [20.9, 5399.0], [21.0, 5402.0], [21.1, 5402.0], [21.2, 5403.0], [21.3, 5403.0], [21.4, 5403.0], [21.5, 5403.0], [21.6, 5410.0], [21.7, 5410.0], [21.8, 5441.0], [21.9, 5441.0], [22.0, 5447.0], [22.1, 5447.0], [22.2, 5449.0], [22.3, 5449.0], [22.4, 5467.0], [22.5, 5467.0], [22.6, 5470.0], [22.7, 5470.0], [22.8, 5471.0], [22.9, 5471.0], [23.0, 5474.0], [23.1, 5474.0], [23.2, 5483.0], [23.3, 5483.0], [23.4, 5488.0], [23.5, 5488.0], [23.6, 5492.0], [23.7, 5492.0], [23.8, 5498.0], [23.9, 5498.0], [24.0, 5506.0], [24.1, 5506.0], [24.2, 5511.0], [24.3, 5511.0], [24.4, 5519.0], [24.5, 5519.0], [24.6, 5526.0], [24.7, 5526.0], [24.8, 5526.0], [24.9, 5526.0], [25.0, 5535.0], [25.1, 5535.0], [25.2, 5537.0], [25.3, 5537.0], [25.4, 5539.0], [25.5, 5539.0], [25.6, 5560.0], [25.7, 5560.0], [25.8, 5564.0], [25.9, 5564.0], [26.0, 5569.0], [26.1, 5569.0], [26.2, 5574.0], [26.3, 5574.0], [26.4, 5601.0], [26.5, 5601.0], [26.6, 5603.0], [26.7, 5603.0], [26.8, 5603.0], [26.9, 5603.0], [27.0, 5604.0], [27.1, 5604.0], [27.2, 5605.0], [27.3, 5605.0], [27.4, 5606.0], [27.5, 5606.0], [27.6, 5616.0], [27.7, 5616.0], [27.8, 5651.0], [27.9, 5651.0], [28.0, 5653.0], [28.1, 5653.0], [28.2, 5654.0], [28.3, 5654.0], [28.4, 5655.0], [28.5, 5655.0], [28.6, 5657.0], [28.7, 5657.0], [28.8, 5659.0], [28.9, 5659.0], [29.0, 5662.0], [29.1, 5662.0], [29.2, 5663.0], [29.3, 5663.0], [29.4, 5664.0], [29.5, 5664.0], [29.6, 5665.0], [29.7, 5665.0], [29.8, 5666.0], [29.9, 5666.0], [30.0, 5666.0], [30.1, 5666.0], [30.2, 5666.0], [30.3, 5666.0], [30.4, 5666.0], [30.5, 5666.0], [30.6, 5666.0], [30.7, 5666.0], [30.8, 5667.0], [30.9, 5667.0], [31.0, 5667.0], [31.1, 5667.0], [31.2, 5667.0], [31.3, 5667.0], [31.4, 5667.0], [31.5, 5667.0], [31.6, 5668.0], [31.7, 5668.0], [31.8, 5668.0], [31.9, 5668.0], [32.0, 5668.0], [32.1, 5668.0], [32.2, 5668.0], [32.3, 5668.0], [32.4, 5668.0], [32.5, 5668.0], [32.6, 5669.0], [32.7, 5669.0], [32.8, 5669.0], [32.9, 5669.0], [33.0, 5669.0], [33.1, 5669.0], [33.2, 5669.0], [33.3, 5669.0], [33.4, 5669.0], [33.5, 5669.0], [33.6, 5669.0], [33.7, 5669.0], [33.8, 5669.0], [33.9, 5669.0], [34.0, 5669.0], [34.1, 5669.0], [34.2, 5669.0], [34.3, 5669.0], [34.4, 5670.0], [34.5, 5670.0], [34.6, 5670.0], [34.7, 5670.0], [34.8, 5670.0], [34.9, 5670.0], [35.0, 5671.0], [35.1, 5671.0], [35.2, 5671.0], [35.3, 5671.0], [35.4, 5671.0], [35.5, 5671.0], [35.6, 5671.0], [35.7, 5671.0], [35.8, 5671.0], [35.9, 5671.0], [36.0, 5671.0], [36.1, 5671.0], [36.2, 5671.0], [36.3, 5671.0], [36.4, 5673.0], [36.5, 5673.0], [36.6, 5674.0], [36.7, 5674.0], [36.8, 5679.0], [36.9, 5679.0], [37.0, 5688.0], [37.1, 5688.0], [37.2, 5689.0], [37.3, 5689.0], [37.4, 5691.0], [37.5, 5691.0], [37.6, 5694.0], [37.7, 5694.0], [37.8, 5695.0], [37.9, 5695.0], [38.0, 5698.0], [38.1, 5698.0], [38.2, 5698.0], [38.3, 5698.0], [38.4, 5699.0], [38.5, 5699.0], [38.6, 5699.0], [38.7, 5699.0], [38.8, 5701.0], [38.9, 5701.0], [39.0, 5707.0], [39.1, 5707.0], [39.2, 5719.0], [39.3, 5719.0], [39.4, 5725.0], [39.5, 5725.0], [39.6, 5748.0], [39.7, 5748.0], [39.8, 5750.0], [39.9, 5750.0], [40.0, 5753.0], [40.1, 5753.0], [40.2, 5755.0], [40.3, 5755.0], [40.4, 5763.0], [40.5, 5763.0], [40.6, 5774.0], [40.7, 5774.0], [40.8, 5778.0], [40.9, 5778.0], [41.0, 5780.0], [41.1, 5780.0], [41.2, 5792.0], [41.3, 5792.0], [41.4, 5812.0], [41.5, 5812.0], [41.6, 5824.0], [41.7, 5824.0], [41.8, 5824.0], [41.9, 5827.0], [42.0, 5827.0], [42.1, 5838.0], [42.2, 5838.0], [42.3, 5852.0], [42.4, 5852.0], [42.5, 5863.0], [42.6, 5863.0], [42.7, 5871.0], [42.8, 5871.0], [42.9, 5872.0], [43.0, 5872.0], [43.1, 5873.0], [43.2, 5873.0], [43.3, 5879.0], [43.4, 5879.0], [43.5, 5882.0], [43.6, 5882.0], [43.7, 5885.0], [43.8, 5885.0], [43.9, 5900.0], [44.0, 5900.0], [44.1, 5944.0], [44.2, 5944.0], [44.3, 5970.0], [44.4, 5970.0], [44.5, 5976.0], [44.6, 5976.0], [44.7, 5998.0], [44.8, 5998.0], [44.9, 6002.0], [45.0, 6002.0], [45.1, 6002.0], [45.2, 6002.0], [45.3, 6010.0], [45.4, 6010.0], [45.5, 6013.0], [45.6, 6013.0], [45.7, 6018.0], [45.8, 6018.0], [45.9, 6022.0], [46.0, 6022.0], [46.1, 6043.0], [46.2, 6043.0], [46.3, 6044.0], [46.4, 6044.0], [46.5, 6045.0], [46.6, 6045.0], [46.7, 6050.0], [46.8, 6050.0], [46.9, 6051.0], [47.0, 6051.0], [47.1, 6061.0], [47.2, 6061.0], [47.3, 6071.0], [47.4, 6071.0], [47.5, 6075.0], [47.6, 6075.0], [47.7, 6091.0], [47.8, 6091.0], [47.9, 6095.0], [48.0, 6095.0], [48.1, 6108.0], [48.2, 6108.0], [48.3, 6113.0], [48.4, 6113.0], [48.5, 6130.0], [48.6, 6130.0], [48.7, 6135.0], [48.8, 6135.0], [48.9, 6138.0], [49.0, 6138.0], [49.1, 6144.0], [49.2, 6144.0], [49.3, 6152.0], [49.4, 6152.0], [49.5, 6172.0], [49.6, 6172.0], [49.7, 6183.0], [49.8, 6183.0], [49.9, 6188.0], [50.0, 6188.0], [50.1, 6193.0], [50.2, 6193.0], [50.3, 6225.0], [50.4, 6225.0], [50.5, 6230.0], [50.6, 6230.0], [50.7, 6255.0], [50.8, 6255.0], [50.9, 6266.0], [51.0, 6266.0], [51.1, 6266.0], [51.2, 6266.0], [51.3, 6301.0], [51.4, 6301.0], [51.5, 6304.0], [51.6, 6304.0], [51.7, 6321.0], [51.8, 6321.0], [51.9, 6330.0], [52.0, 6330.0], [52.1, 6334.0], [52.2, 6334.0], [52.3, 6334.0], [52.4, 6334.0], [52.5, 6343.0], [52.6, 6343.0], [52.7, 6349.0], [52.8, 6349.0], [52.9, 6351.0], [53.0, 6351.0], [53.1, 6351.0], [53.2, 6351.0], [53.3, 6353.0], [53.4, 6353.0], [53.5, 6355.0], [53.6, 6355.0], [53.7, 6355.0], [53.8, 6355.0], [53.9, 6361.0], [54.0, 6361.0], [54.1, 6364.0], [54.2, 6364.0], [54.3, 6381.0], [54.4, 6381.0], [54.5, 6410.0], [54.6, 6410.0], [54.7, 6439.0], [54.8, 6439.0], [54.9, 6440.0], [55.0, 6440.0], [55.1, 6449.0], [55.2, 6449.0], [55.3, 6455.0], [55.4, 6455.0], [55.5, 6458.0], [55.6, 6458.0], [55.7, 6458.0], [55.8, 6458.0], [55.9, 6460.0], [56.0, 6460.0], [56.1, 6460.0], [56.2, 6460.0], [56.3, 6461.0], [56.4, 6461.0], [56.5, 6467.0], [56.6, 6467.0], [56.7, 6472.0], [56.8, 6472.0], [56.9, 6480.0], [57.0, 6480.0], [57.1, 6481.0], [57.2, 6481.0], [57.3, 6481.0], [57.4, 6481.0], [57.5, 6483.0], [57.6, 6483.0], [57.7, 6486.0], [57.8, 6486.0], [57.9, 6487.0], [58.0, 6487.0], [58.1, 6488.0], [58.2, 6488.0], [58.3, 6489.0], [58.4, 6489.0], [58.5, 6497.0], [58.6, 6497.0], [58.7, 6514.0], [58.8, 6514.0], [58.9, 6520.0], [59.0, 6520.0], [59.1, 6539.0], [59.2, 6539.0], [59.3, 6546.0], [59.4, 6546.0], [59.5, 6560.0], [59.6, 6560.0], [59.7, 6599.0], [59.8, 6599.0], [59.9, 6619.0], [60.0, 6619.0], [60.1, 6633.0], [60.2, 6633.0], [60.3, 6633.0], [60.4, 6633.0], [60.5, 6650.0], [60.6, 6650.0], [60.7, 6651.0], [60.8, 6651.0], [60.9, 6665.0], [61.0, 6665.0], [61.1, 6668.0], [61.2, 6668.0], [61.3, 6678.0], [61.4, 6678.0], [61.5, 6690.0], [61.6, 6690.0], [61.7, 6736.0], [61.8, 6736.0], [61.9, 6746.0], [62.0, 6746.0], [62.1, 6748.0], [62.2, 6748.0], [62.3, 6759.0], [62.4, 6759.0], [62.5, 6764.0], [62.6, 6764.0], [62.7, 6767.0], [62.8, 6767.0], [62.9, 6775.0], [63.0, 6775.0], [63.1, 6780.0], [63.2, 6780.0], [63.3, 6782.0], [63.4, 6782.0], [63.5, 6783.0], [63.6, 6783.0], [63.7, 6793.0], [63.8, 6793.0], [63.9, 6793.0], [64.0, 6793.0], [64.1, 6796.0], [64.2, 6796.0], [64.3, 6808.0], [64.4, 6808.0], [64.5, 6809.0], [64.6, 6809.0], [64.7, 6812.0], [64.8, 6812.0], [64.9, 6820.0], [65.0, 6820.0], [65.1, 6827.0], [65.2, 6827.0], [65.3, 6838.0], [65.4, 6838.0], [65.5, 6838.0], [65.6, 6838.0], [65.7, 6858.0], [65.8, 6858.0], [65.9, 6864.0], [66.0, 6864.0], [66.1, 6868.0], [66.2, 6868.0], [66.3, 6868.0], [66.4, 6868.0], [66.5, 6870.0], [66.6, 6870.0], [66.7, 6875.0], [66.8, 6875.0], [66.9, 6876.0], [67.0, 6876.0], [67.1, 6880.0], [67.2, 6880.0], [67.3, 6884.0], [67.4, 6884.0], [67.5, 6888.0], [67.6, 6888.0], [67.7, 6895.0], [67.8, 6895.0], [67.9, 6897.0], [68.0, 6897.0], [68.1, 6899.0], [68.2, 6899.0], [68.3, 6903.0], [68.4, 6903.0], [68.5, 6904.0], [68.6, 6904.0], [68.7, 6924.0], [68.8, 6924.0], [68.9, 6929.0], [69.0, 6929.0], [69.1, 6932.0], [69.2, 6932.0], [69.3, 6933.0], [69.4, 6933.0], [69.5, 6943.0], [69.6, 6943.0], [69.7, 6965.0], [69.8, 6965.0], [69.9, 6974.0], [70.0, 6974.0], [70.1, 6979.0], [70.2, 6979.0], [70.3, 6985.0], [70.4, 6985.0], [70.5, 6989.0], [70.6, 6989.0], [70.7, 7003.0], [70.8, 7003.0], [70.9, 7012.0], [71.0, 7012.0], [71.1, 7017.0], [71.2, 7017.0], [71.3, 7017.0], [71.4, 7017.0], [71.5, 7039.0], [71.6, 7039.0], [71.7, 7041.0], [71.8, 7041.0], [71.9, 7052.0], [72.0, 7052.0], [72.1, 7061.0], [72.2, 7061.0], [72.3, 7062.0], [72.4, 7062.0], [72.5, 7067.0], [72.6, 7067.0], [72.7, 7069.0], [72.8, 7069.0], [72.9, 7069.0], [73.0, 7069.0], [73.1, 7070.0], [73.2, 7070.0], [73.3, 7076.0], [73.4, 7076.0], [73.5, 7085.0], [73.6, 7085.0], [73.7, 7085.0], [73.8, 7085.0], [73.9, 7086.0], [74.0, 7086.0], [74.1, 7088.0], [74.2, 7088.0], [74.3, 7091.0], [74.4, 7091.0], [74.5, 7094.0], [74.6, 7094.0], [74.7, 7096.0], [74.8, 7096.0], [74.9, 7103.0], [75.0, 7103.0], [75.1, 7113.0], [75.2, 7113.0], [75.3, 7116.0], [75.4, 7116.0], [75.5, 7147.0], [75.6, 7147.0], [75.7, 7149.0], [75.8, 7149.0], [75.9, 7149.0], [76.0, 7149.0], [76.1, 7175.0], [76.2, 7175.0], [76.3, 7190.0], [76.4, 7190.0], [76.5, 7235.0], [76.6, 7235.0], [76.7, 7266.0], [76.8, 7266.0], [76.9, 7285.0], [77.0, 7285.0], [77.1, 7299.0], [77.2, 7299.0], [77.3, 7306.0], [77.4, 7306.0], [77.5, 7340.0], [77.6, 7340.0], [77.7, 7369.0], [77.8, 7369.0], [77.9, 7381.0], [78.0, 7381.0], [78.1, 7386.0], [78.2, 7386.0], [78.3, 7410.0], [78.4, 7410.0], [78.5, 7423.0], [78.6, 7423.0], [78.7, 7427.0], [78.8, 7427.0], [78.9, 7448.0], [79.0, 7448.0], [79.1, 7449.0], [79.2, 7449.0], [79.3, 7478.0], [79.4, 7478.0], [79.5, 7480.0], [79.6, 7480.0], [79.7, 7480.0], [79.8, 7480.0], [79.9, 7482.0], [80.0, 7482.0], [80.1, 7484.0], [80.2, 7484.0], [80.3, 7488.0], [80.4, 7488.0], [80.5, 7490.0], [80.6, 7490.0], [80.7, 7493.0], [80.8, 7493.0], [80.9, 7493.0], [81.0, 7493.0], [81.1, 7500.0], [81.2, 7500.0], [81.3, 7500.0], [81.4, 7500.0], [81.5, 7504.0], [81.6, 7504.0], [81.7, 7504.0], [81.8, 7504.0], [81.9, 7516.0], [82.0, 7516.0], [82.1, 7523.0], [82.2, 7523.0], [82.3, 7525.0], [82.4, 7525.0], [82.5, 7552.0], [82.6, 7552.0], [82.7, 7561.0], [82.8, 7561.0], [82.9, 7576.0], [83.0, 7576.0], [83.1, 7578.0], [83.2, 7578.0], [83.3, 7582.0], [83.4, 7582.0], [83.5, 7582.0], [83.6, 7582.0], [83.7, 7582.0], [83.8, 7582.0], [83.9, 7584.0], [84.0, 7584.0], [84.1, 7592.0], [84.2, 7592.0], [84.3, 7597.0], [84.4, 7597.0], [84.5, 7601.0], [84.6, 7601.0], [84.7, 7606.0], [84.8, 7606.0], [84.9, 7607.0], [85.0, 7607.0], [85.1, 7607.0], [85.2, 7607.0], [85.3, 7612.0], [85.4, 7612.0], [85.5, 7624.0], [85.6, 7624.0], [85.7, 7645.0], [85.8, 7645.0], [85.9, 7650.0], [86.0, 7650.0], [86.1, 7650.0], [86.2, 7650.0], [86.3, 7661.0], [86.4, 7661.0], [86.5, 7668.0], [86.6, 7668.0], [86.7, 7679.0], [86.8, 7679.0], [86.9, 7680.0], [87.0, 7680.0], [87.1, 7684.0], [87.2, 7684.0], [87.3, 7693.0], [87.4, 7693.0], [87.5, 7694.0], [87.6, 7694.0], [87.7, 7696.0], [87.8, 7696.0], [87.9, 7715.0], [88.0, 7715.0], [88.1, 7719.0], [88.2, 7719.0], [88.3, 7723.0], [88.4, 7723.0], [88.5, 7724.0], [88.6, 7724.0], [88.7, 7735.0], [88.8, 7735.0], [88.9, 7736.0], [89.0, 7736.0], [89.1, 7748.0], [89.2, 7748.0], [89.3, 7749.0], [89.4, 7749.0], [89.5, 7778.0], [89.6, 7778.0], [89.7, 7780.0], [89.8, 7780.0], [89.9, 7808.0], [90.0, 7808.0], [90.1, 7816.0], [90.2, 7816.0], [90.3, 7832.0], [90.4, 7832.0], [90.5, 7863.0], [90.6, 7863.0], [90.7, 7870.0], [90.8, 7870.0], [90.9, 7893.0], [91.0, 7893.0], [91.1, 7895.0], [91.2, 7895.0], [91.3, 7907.0], [91.4, 7907.0], [91.5, 7931.0], [91.6, 7931.0], [91.7, 7941.0], [91.8, 7941.0], [91.9, 7982.0], [92.0, 7982.0], [92.1, 7985.0], [92.2, 7985.0], [92.3, 7998.0], [92.4, 7998.0], [92.5, 8004.0], [92.6, 8004.0], [92.7, 8040.0], [92.8, 8040.0], [92.9, 8047.0], [93.0, 8047.0], [93.1, 8080.0], [93.2, 8080.0], [93.3, 8094.0], [93.4, 8094.0], [93.5, 8129.0], [93.6, 8129.0], [93.7, 8401.0], [93.8, 8401.0], [93.9, 8538.0], [94.0, 8538.0], [94.1, 8552.0], [94.2, 8552.0], [94.3, 8632.0], [94.4, 8632.0], [94.5, 8880.0], [94.6, 8880.0], [94.7, 8964.0], [94.8, 8964.0], [94.9, 9001.0], [95.0, 9001.0], [95.1, 9033.0], [95.2, 9033.0], [95.3, 9074.0], [95.4, 9074.0], [95.5, 9289.0], [95.6, 9289.0], [95.7, 9295.0], [95.8, 9295.0], [95.9, 9309.0], [96.0, 9309.0], [96.1, 9335.0], [96.2, 9335.0], [96.3, 9352.0], [96.4, 9352.0], [96.5, 9361.0], [96.6, 9361.0], [96.7, 9450.0], [96.8, 9450.0], [96.9, 9487.0], [97.0, 9487.0], [97.1, 9489.0], [97.2, 9489.0], [97.3, 9501.0], [97.4, 9501.0], [97.5, 9544.0], [97.6, 9544.0], [97.7, 9551.0], [97.8, 9551.0], [97.9, 9769.0], [98.0, 9769.0], [98.1, 9834.0], [98.2, 9834.0], [98.3, 9907.0], [98.4, 9907.0], [98.5, 9922.0], [98.6, 9922.0], [98.7, 9944.0], [98.8, 9944.0], [98.9, 10192.0], [99.0, 10192.0], [99.1, 10318.0], [99.2, 10318.0], [99.3, 10320.0], [99.4, 10320.0], [99.5, 10321.0], [99.6, 10321.0], [99.7, 10322.0], [99.8, 10322.0], [99.9, 10344.0], [100.0, 10344.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4000.0, "maxY": 62.0, "series": [{"data": [[4000.0, 3.0], [4300.0, 2.0], [4100.0, 4.0], [4600.0, 5.0], [4500.0, 6.0], [4400.0, 4.0], [4800.0, 5.0], [4700.0, 4.0], [5000.0, 34.0], [4900.0, 12.0], [5100.0, 7.0], [5300.0, 14.0], [5200.0, 5.0], [5500.0, 12.0], [5600.0, 62.0], [5400.0, 15.0], [5700.0, 13.0], [5800.0, 12.0], [5900.0, 5.0], [6000.0, 16.0], [6100.0, 11.0], [6200.0, 5.0], [6300.0, 16.0], [6400.0, 21.0], [6600.0, 9.0], [6500.0, 6.0], [6700.0, 13.0], [6800.0, 20.0], [6900.0, 12.0], [7000.0, 21.0], [7100.0, 8.0], [7400.0, 14.0], [7300.0, 5.0], [7200.0, 4.0], [7500.0, 17.0], [7600.0, 17.0], [7700.0, 10.0], [7800.0, 7.0], [7900.0, 6.0], [8000.0, 5.0], [8100.0, 1.0], [8400.0, 1.0], [8500.0, 2.0], [8600.0, 1.0], [9200.0, 2.0], [9000.0, 3.0], [8800.0, 1.0], [8900.0, 1.0], [9300.0, 4.0], [9400.0, 3.0], [9500.0, 3.0], [9700.0, 1.0], [9900.0, 3.0], [9800.0, 1.0], [10100.0, 1.0], [10300.0, 5.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 500.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 500.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 295.80199999999974, "minX": 1.57138608E12, "maxY": 295.80199999999974, "series": [{"data": [[1.57138608E12, 295.80199999999974]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138608E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5004.0, "minX": 1.0, "maxY": 10322.0, "series": [{"data": [[2.0, 9352.0], [3.0, 10320.0], [7.0, 9902.0], [9.0, 10056.5], [11.0, 9641.0], [12.0, 10322.0], [13.0, 9907.0], [15.0, 9325.0], [16.0, 9944.0], [17.0, 8632.0], [18.0, 9450.0], [19.0, 9001.0], [21.0, 9357.0], [23.0, 8813.0], [25.0, 9615.5], [26.0, 9501.0], [27.0, 9295.0], [29.0, 9488.0], [30.0, 9335.0], [31.0, 8538.0], [33.0, 8129.0], [32.0, 8401.0], [35.0, 8080.0], [34.0, 8094.0], [37.0, 8043.5], [39.0, 7448.0], [38.0, 7778.0], [42.0, 7884.333333333333], [45.0, 7870.0], [44.0, 7686.5], [49.0, 7893.0], [48.0, 7784.333333333333], [51.0, 7601.5], [53.0, 7613.0], [55.0, 7895.0], [54.0, 6985.0], [56.0, 7612.0], [59.0, 6489.0], [58.0, 7586.5], [61.0, 7832.0], [60.0, 7816.0], [63.0, 7780.0], [62.0, 7808.0], [67.0, 7441.0], [66.0, 7149.0], [64.0, 7381.0], [71.0, 7748.0], [70.0, 7149.0], [69.0, 7734.0], [75.0, 7736.0], [74.0, 7116.0], [73.0, 7094.0], [72.0, 7650.0], [79.0, 7715.0], [78.0, 6954.5], [76.0, 7693.0], [83.0, 7096.0], [82.0, 7418.0], [80.0, 7694.0], [84.0, 7525.0], [91.0, 7091.0], [90.0, 6108.0], [89.0, 7679.0], [88.0, 7382.25], [95.0, 6599.0], [93.0, 7386.0], [99.0, 6812.0], [98.0, 7034.333333333333], [103.0, 7359.5], [101.0, 7039.0], [100.0, 7061.0], [107.0, 7472.0], [110.0, 7279.0], [108.0, 7561.0], [114.0, 6876.0], [113.0, 7235.0], [112.0, 6921.0], [119.0, 7606.0], [118.0, 7624.0], [117.0, 7607.0], [116.0, 7125.0], [123.0, 6489.5], [121.0, 6013.0], [120.0, 6225.0], [127.0, 6759.0], [126.0, 7516.0], [134.0, 7287.666666666667], [131.0, 7590.75], [129.0, 7589.5], [142.0, 7345.0], [141.0, 6789.0], [139.0, 7306.0], [137.0, 6678.0], [136.0, 7299.0], [151.0, 6706.0], [149.0, 7504.0], [148.0, 7552.0], [147.0, 7497.0], [145.0, 7500.0], [144.0, 7007.0], [159.0, 6811.5], [157.0, 7206.25], [155.0, 6361.0], [154.0, 7427.0], [167.0, 7175.0], [165.0, 7145.5], [163.0, 6694.75], [174.0, 7480.0], [173.0, 6859.0], [170.0, 6842.0], [168.0, 7478.0], [183.0, 5763.0], [182.0, 5778.0], [181.0, 5808.0], [179.0, 6304.0], [178.0, 6204.75], [191.0, 6780.0], [189.0, 6497.0], [188.0, 6982.0], [185.0, 7070.0], [184.0, 7175.0], [199.0, 6183.0], [198.0, 6879.5], [197.0, 6783.0], [196.0, 6172.0], [194.0, 6152.0], [193.0, 6568.0], [207.0, 5970.0], [206.0, 5655.0], [205.0, 6903.0], [204.0, 5449.0], [203.0, 5467.0], [202.0, 6932.0], [201.0, 6459.5], [215.0, 6230.0], [214.0, 6353.0], [213.0, 6355.0], [212.0, 6560.0], [211.0, 6349.0], [210.0, 5852.0], [209.0, 7012.0], [208.0, 7003.0], [223.0, 6633.0], [222.0, 5959.0], [220.0, 6558.5], [218.0, 6351.0], [217.0, 6965.0], [216.0, 6343.0], [230.0, 6875.0], [229.0, 6884.0], [228.0, 6321.0], [227.0, 6895.0], [226.0, 6393.0], [224.0, 6933.0], [239.0, 6690.0], [238.0, 5818.333333333333], [235.0, 6793.0], [234.0, 5812.0], [233.0, 6880.0], [232.0, 6174.5], [247.0, 6736.0], [246.0, 6808.0], [245.0, 6546.0], [244.0, 6829.0], [242.0, 6764.0], [241.0, 6838.0], [240.0, 6782.0], [255.0, 6748.0], [254.0, 6665.0], [253.0, 6651.0], [252.0, 5399.0], [251.0, 6775.0], [250.0, 6767.0], [249.0, 6193.0], [248.0, 6650.0], [270.0, 5998.0], [271.0, 5669.0], [269.0, 5537.0], [268.0, 6410.0], [267.0, 5959.0], [265.0, 6619.0], [264.0, 6022.0], [263.0, 6045.0], [257.0, 6010.0], [256.0, 6002.0], [259.0, 6050.0], [258.0, 6043.0], [262.0, 6668.0], [261.0, 6288.5], [275.0, 6351.0], [274.0, 5976.0], [273.0, 5004.0], [272.0, 5004.0], [336.0, 5879.0], [361.0, 6166.5], [356.0, 6467.0], [413.0, 6460.0], [409.0, 5902.5], [407.0, 6071.0], [403.0, 5480.0], [402.0, 6483.0], [401.0, 5447.0], [430.0, 6481.0], [429.0, 6481.0], [420.0, 6407.666666666667], [418.0, 6458.0], [416.0, 5889.0], [444.0, 5465.0], [443.0, 5707.0], [440.0, 6301.0], [438.0, 5845.0], [432.0, 6024.333333333333], [477.0, 6449.0], [476.0, 6061.0], [473.0, 6364.0], [495.0, 6330.0], [488.0, 6334.0], [500.0, 5264.231182795702], [498.0, 5983.0], [1.0, 9033.0]], "isOverall": false, "label": "Search Video", "isController": false}, {"data": [[295.80199999999974, 6396.33]], "isOverall": false, "label": "Search Video-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2550.0, "minX": 1.57138608E12, "maxY": 66588.66666666667, "series": [{"data": [[1.57138608E12, 66588.66666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57138608E12, 2550.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138608E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6396.33, "minX": 1.57138608E12, "maxY": 6396.33, "series": [{"data": [[1.57138608E12, 6396.33]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138608E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5454.589999999998, "minX": 1.57138608E12, "maxY": 5454.589999999998, "series": [{"data": [[1.57138608E12, 5454.589999999998]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138608E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4090.3159999999984, "minX": 1.57138608E12, "maxY": 4090.3159999999984, "series": [{"data": [[1.57138608E12, 4090.3159999999984]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138608E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4087.0, "minX": 1.57138608E12, "maxY": 10344.0, "series": [{"data": [[1.57138608E12, 10344.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57138608E12, 4087.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57138608E12, 7815.200000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57138608E12, 10316.740000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57138608E12, 9031.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5086.0, "minX": 1000.0, "maxY": 7340.0, "series": [{"data": [[34000.0, 5502.0], [19000.0, 5101.0], [5000.0, 5838.0], [43000.0, 5601.0], [22000.0, 5086.0], [3000.0, 6458.0], [26000.0, 5403.0], [1000.0, 6800.5], [2000.0, 6949.0], [4000.0, 7340.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 43000.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4972.0, "minX": 1000.0, "maxY": 5620.0, "series": [{"data": [[34000.0, 5365.5], [19000.0, 4972.0], [5000.0, 4996.0], [43000.0, 5480.0], [22000.0, 5007.0], [3000.0, 5616.0], [26000.0, 5309.0], [1000.0, 5620.0], [2000.0, 5595.0], [4000.0, 5477.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 43000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57138608E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57138608E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138608E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57138608E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57138608E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57138608E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57138608E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57138608E12, 8.333333333333334]], "isOverall": false, "label": "Search Video-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138608E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.57138608E12, "maxY": 8.333333333333334, "series": [{"data": [[1.57138608E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57138608E12, "title": "Total Transactions Per Second"}},
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

