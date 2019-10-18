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
        data: {"result": {"minY": 7066.0, "minX": 0.0, "maxY": 12515.0, "series": [{"data": [[0.0, 7066.0], [0.1, 7068.0], [0.2, 7084.0], [0.3, 7084.0], [0.4, 7091.0], [0.5, 7092.0], [0.6, 7096.0], [0.7, 7097.0], [0.8, 7097.0], [0.9, 7099.0], [1.0, 7101.0], [1.1, 7101.0], [1.2, 7112.0], [1.3, 7119.0], [1.4, 7119.0], [1.5, 7121.0], [1.6, 7123.0], [1.7, 7123.0], [1.8, 7124.0], [1.9, 7125.0], [2.0, 7125.0], [2.1, 7126.0], [2.2, 7126.0], [2.3, 7126.0], [2.4, 7126.0], [2.5, 7127.0], [2.6, 7129.0], [2.7, 7129.0], [2.8, 7129.0], [2.9, 7131.0], [3.0, 7137.0], [3.1, 7138.0], [3.2, 7138.0], [3.3, 7139.0], [3.4, 7140.0], [3.5, 7140.0], [3.6, 7140.0], [3.7, 7141.0], [3.8, 7148.0], [3.9, 7149.0], [4.0, 7149.0], [4.1, 7150.0], [4.2, 7154.0], [4.3, 7155.0], [4.4, 7155.0], [4.5, 7157.0], [4.6, 7161.0], [4.7, 7166.0], [4.8, 7174.0], [4.9, 7187.0], [5.0, 7194.0], [5.1, 7194.0], [5.2, 7201.0], [5.3, 7207.0], [5.4, 7209.0], [5.5, 7210.0], [5.6, 7212.0], [5.7, 7215.0], [5.8, 7215.0], [5.9, 7216.0], [6.0, 7217.0], [6.1, 7218.0], [6.2, 7220.0], [6.3, 7221.0], [6.4, 7224.0], [6.5, 7224.0], [6.6, 7225.0], [6.7, 7226.0], [6.8, 7229.0], [6.9, 7229.0], [7.0, 7231.0], [7.1, 7231.0], [7.2, 7236.0], [7.3, 7236.0], [7.4, 7237.0], [7.5, 7238.0], [7.6, 7241.0], [7.7, 7244.0], [7.8, 7245.0], [7.9, 7249.0], [8.0, 7251.0], [8.1, 7252.0], [8.2, 7255.0], [8.3, 7256.0], [8.4, 7257.0], [8.5, 7258.0], [8.6, 7261.0], [8.7, 7262.0], [8.8, 7266.0], [8.9, 7266.0], [9.0, 7267.0], [9.1, 7268.0], [9.2, 7269.0], [9.3, 7270.0], [9.4, 7270.0], [9.5, 7271.0], [9.6, 7272.0], [9.7, 7273.0], [9.8, 7275.0], [9.9, 7276.0], [10.0, 7279.0], [10.1, 7282.0], [10.2, 7284.0], [10.3, 7284.0], [10.4, 7286.0], [10.5, 7287.0], [10.6, 7295.0], [10.7, 7303.0], [10.8, 7304.0], [10.9, 7304.0], [11.0, 7305.0], [11.1, 7312.0], [11.2, 7388.0], [11.3, 7407.0], [11.4, 7960.0], [11.5, 7971.0], [11.6, 7973.0], [11.7, 7973.0], [11.8, 7973.0], [11.9, 7973.0], [12.0, 7974.0], [12.1, 7975.0], [12.2, 7978.0], [12.3, 7990.0], [12.4, 8001.0], [12.5, 8010.0], [12.6, 8011.0], [12.7, 8023.0], [12.8, 8029.0], [12.9, 8034.0], [13.0, 8035.0], [13.1, 8035.0], [13.2, 8037.0], [13.3, 8038.0], [13.4, 8038.0], [13.5, 8039.0], [13.6, 8039.0], [13.7, 8040.0], [13.8, 8040.0], [13.9, 8040.0], [14.0, 8042.0], [14.1, 8043.0], [14.2, 8043.0], [14.3, 8044.0], [14.4, 8044.0], [14.5, 8047.0], [14.6, 8047.0], [14.7, 8048.0], [14.8, 8048.0], [14.9, 8049.0], [15.0, 8050.0], [15.1, 8050.0], [15.2, 8051.0], [15.3, 8054.0], [15.4, 8058.0], [15.5, 8059.0], [15.6, 8059.0], [15.7, 8063.0], [15.8, 8065.0], [15.9, 8065.0], [16.0, 8065.0], [16.1, 8066.0], [16.2, 8066.0], [16.3, 8067.0], [16.4, 8067.0], [16.5, 8069.0], [16.6, 8069.0], [16.7, 8071.0], [16.8, 8072.0], [16.9, 8075.0], [17.0, 8078.0], [17.1, 8079.0], [17.2, 8080.0], [17.3, 8080.0], [17.4, 8082.0], [17.5, 8083.0], [17.6, 8083.0], [17.7, 8086.0], [17.8, 8087.0], [17.9, 8088.0], [18.0, 8089.0], [18.1, 8090.0], [18.2, 8092.0], [18.3, 8095.0], [18.4, 8097.0], [18.5, 8097.0], [18.6, 8100.0], [18.7, 8101.0], [18.8, 8103.0], [18.9, 8106.0], [19.0, 8107.0], [19.1, 8110.0], [19.2, 8113.0], [19.3, 8113.0], [19.4, 8114.0], [19.5, 8115.0], [19.6, 8115.0], [19.7, 8118.0], [19.8, 8121.0], [19.9, 8123.0], [20.0, 8127.0], [20.1, 8129.0], [20.2, 8138.0], [20.3, 8138.0], [20.4, 8140.0], [20.5, 8149.0], [20.6, 8149.0], [20.7, 8157.0], [20.8, 8157.0], [20.9, 8162.0], [21.0, 8169.0], [21.1, 8172.0], [21.2, 8172.0], [21.3, 8178.0], [21.4, 8202.0], [21.5, 8205.0], [21.6, 8209.0], [21.7, 8242.0], [21.8, 8243.0], [21.9, 8246.0], [22.0, 8246.0], [22.1, 8247.0], [22.2, 8248.0], [22.3, 8250.0], [22.4, 8253.0], [22.5, 8253.0], [22.6, 8487.0], [22.7, 8490.0], [22.8, 8492.0], [22.9, 8499.0], [23.0, 8503.0], [23.1, 8512.0], [23.2, 8517.0], [23.3, 8530.0], [23.4, 8533.0], [23.5, 8535.0], [23.6, 8536.0], [23.7, 8538.0], [23.8, 8540.0], [23.9, 8542.0], [24.0, 8644.0], [24.1, 8652.0], [24.2, 8659.0], [24.3, 8681.0], [24.4, 8688.0], [24.5, 8688.0], [24.6, 8698.0], [24.7, 8707.0], [24.8, 8708.0], [24.9, 8710.0], [25.0, 8710.0], [25.1, 8718.0], [25.2, 8722.0], [25.3, 8725.0], [25.4, 8732.0], [25.5, 8751.0], [25.6, 8764.0], [25.7, 8772.0], [25.8, 8772.0], [25.9, 8779.0], [26.0, 8782.0], [26.1, 8785.0], [26.2, 8787.0], [26.3, 8789.0], [26.4, 8790.0], [26.5, 8790.0], [26.6, 8790.0], [26.7, 8792.0], [26.8, 8792.0], [26.9, 8800.0], [27.0, 8803.0], [27.1, 8818.0], [27.2, 8829.0], [27.3, 8834.0], [27.4, 8845.0], [27.5, 8846.0], [27.6, 8853.0], [27.7, 8856.0], [27.8, 8864.0], [27.9, 8866.0], [28.0, 8883.0], [28.1, 8901.0], [28.2, 8904.0], [28.3, 8908.0], [28.4, 8931.0], [28.5, 8934.0], [28.6, 8939.0], [28.7, 8942.0], [28.8, 8944.0], [28.9, 8951.0], [29.0, 8952.0], [29.1, 8953.0], [29.2, 8953.0], [29.3, 8958.0], [29.4, 8959.0], [29.5, 8967.0], [29.6, 8967.0], [29.7, 8970.0], [29.8, 8974.0], [29.9, 8974.0], [30.0, 8981.0], [30.1, 8984.0], [30.2, 8984.0], [30.3, 8986.0], [30.4, 8990.0], [30.5, 8992.0], [30.6, 8997.0], [30.7, 9002.0], [30.8, 9015.0], [30.9, 9026.0], [31.0, 9040.0], [31.1, 9057.0], [31.2, 9065.0], [31.3, 9066.0], [31.4, 9072.0], [31.5, 9073.0], [31.6, 9076.0], [31.7, 9079.0], [31.8, 9084.0], [31.9, 9084.0], [32.0, 9085.0], [32.1, 9087.0], [32.2, 9088.0], [32.3, 9090.0], [32.4, 9090.0], [32.5, 9091.0], [32.6, 9091.0], [32.7, 9091.0], [32.8, 9094.0], [32.9, 9103.0], [33.0, 9104.0], [33.1, 9104.0], [33.2, 9105.0], [33.3, 9107.0], [33.4, 9107.0], [33.5, 9108.0], [33.6, 9109.0], [33.7, 9109.0], [33.8, 9109.0], [33.9, 9110.0], [34.0, 9110.0], [34.1, 9111.0], [34.2, 9111.0], [34.3, 9111.0], [34.4, 9112.0], [34.5, 9113.0], [34.6, 9114.0], [34.7, 9115.0], [34.8, 9115.0], [34.9, 9115.0], [35.0, 9118.0], [35.1, 9119.0], [35.2, 9120.0], [35.3, 9120.0], [35.4, 9121.0], [35.5, 9121.0], [35.6, 9121.0], [35.7, 9122.0], [35.8, 9123.0], [35.9, 9123.0], [36.0, 9124.0], [36.1, 9124.0], [36.2, 9124.0], [36.3, 9124.0], [36.4, 9126.0], [36.5, 9127.0], [36.6, 9127.0], [36.7, 9127.0], [36.8, 9127.0], [36.9, 9129.0], [37.0, 9130.0], [37.1, 9130.0], [37.2, 9134.0], [37.3, 9135.0], [37.4, 9135.0], [37.5, 9140.0], [37.6, 9141.0], [37.7, 9142.0], [37.8, 9144.0], [37.9, 9144.0], [38.0, 9147.0], [38.1, 9147.0], [38.2, 9148.0], [38.3, 9150.0], [38.4, 9150.0], [38.5, 9151.0], [38.6, 9151.0], [38.7, 9152.0], [38.8, 9152.0], [38.9, 9152.0], [39.0, 9153.0], [39.1, 9153.0], [39.2, 9153.0], [39.3, 9154.0], [39.4, 9154.0], [39.5, 9155.0], [39.6, 9156.0], [39.7, 9157.0], [39.8, 9157.0], [39.9, 9159.0], [40.0, 9160.0], [40.1, 9160.0], [40.2, 9160.0], [40.3, 9162.0], [40.4, 9162.0], [40.5, 9162.0], [40.6, 9163.0], [40.7, 9163.0], [40.8, 9164.0], [40.9, 9165.0], [41.0, 9166.0], [41.1, 9166.0], [41.2, 9167.0], [41.3, 9167.0], [41.4, 9167.0], [41.5, 9168.0], [41.6, 9169.0], [41.7, 9170.0], [41.8, 9172.0], [41.9, 9173.0], [42.0, 9174.0], [42.1, 9176.0], [42.2, 9176.0], [42.3, 9177.0], [42.4, 9178.0], [42.5, 9183.0], [42.6, 9186.0], [42.7, 9187.0], [42.8, 9187.0], [42.9, 9188.0], [43.0, 9188.0], [43.1, 9188.0], [43.2, 9188.0], [43.3, 9190.0], [43.4, 9193.0], [43.5, 9193.0], [43.6, 9196.0], [43.7, 9197.0], [43.8, 9197.0], [43.9, 9199.0], [44.0, 9201.0], [44.1, 9202.0], [44.2, 9202.0], [44.3, 9202.0], [44.4, 9202.0], [44.5, 9202.0], [44.6, 9206.0], [44.7, 9209.0], [44.8, 9212.0], [44.9, 9213.0], [45.0, 9214.0], [45.1, 9215.0], [45.2, 9218.0], [45.3, 9230.0], [45.4, 9242.0], [45.5, 9247.0], [45.6, 9247.0], [45.7, 9434.0], [45.8, 9597.0], [45.9, 9611.0], [46.0, 9616.0], [46.1, 9622.0], [46.2, 9622.0], [46.3, 9669.0], [46.4, 9670.0], [46.5, 9671.0], [46.6, 9671.0], [46.7, 9673.0], [46.8, 9673.0], [46.9, 9673.0], [47.0, 9674.0], [47.1, 9675.0], [47.2, 9676.0], [47.3, 9677.0], [47.4, 9678.0], [47.5, 9678.0], [47.6, 9679.0], [47.7, 9679.0], [47.8, 9679.0], [47.9, 9684.0], [48.0, 9687.0], [48.1, 9692.0], [48.2, 9694.0], [48.3, 9697.0], [48.4, 9700.0], [48.5, 9702.0], [48.6, 9705.0], [48.7, 9710.0], [48.8, 9712.0], [48.9, 9717.0], [49.0, 9718.0], [49.1, 9719.0], [49.2, 9721.0], [49.3, 9722.0], [49.4, 9724.0], [49.5, 9724.0], [49.6, 9728.0], [49.7, 9728.0], [49.8, 9735.0], [49.9, 9737.0], [50.0, 9738.0], [50.1, 9740.0], [50.2, 9743.0], [50.3, 9745.0], [50.4, 9745.0], [50.5, 9747.0], [50.6, 9752.0], [50.7, 9755.0], [50.8, 9765.0], [50.9, 9768.0], [51.0, 9778.0], [51.1, 9780.0], [51.2, 9783.0], [51.3, 9784.0], [51.4, 9790.0], [51.5, 9792.0], [51.6, 9803.0], [51.7, 9804.0], [51.8, 9805.0], [51.9, 9807.0], [52.0, 9809.0], [52.1, 9814.0], [52.2, 9855.0], [52.3, 9856.0], [52.4, 9863.0], [52.5, 9868.0], [52.6, 9883.0], [52.7, 9884.0], [52.8, 9885.0], [52.9, 9885.0], [53.0, 9887.0], [53.1, 9892.0], [53.2, 9895.0], [53.3, 9898.0], [53.4, 9901.0], [53.5, 9904.0], [53.6, 9904.0], [53.7, 9906.0], [53.8, 9906.0], [53.9, 9906.0], [54.0, 9908.0], [54.1, 9913.0], [54.2, 9915.0], [54.3, 9916.0], [54.4, 9920.0], [54.5, 9932.0], [54.6, 9939.0], [54.7, 9947.0], [54.8, 9965.0], [54.9, 9999.0], [55.0, 10113.0], [55.1, 10119.0], [55.2, 10132.0], [55.3, 10133.0], [55.4, 10147.0], [55.5, 10149.0], [55.6, 10151.0], [55.7, 10153.0], [55.8, 10153.0], [55.9, 10153.0], [56.0, 10154.0], [56.1, 10155.0], [56.2, 10156.0], [56.3, 10158.0], [56.4, 10158.0], [56.5, 10158.0], [56.6, 10158.0], [56.7, 10160.0], [56.8, 10160.0], [56.9, 10163.0], [57.0, 10165.0], [57.1, 10165.0], [57.2, 10165.0], [57.3, 10166.0], [57.4, 10170.0], [57.5, 10181.0], [57.6, 10192.0], [57.7, 10192.0], [57.8, 10199.0], [57.9, 10200.0], [58.0, 10206.0], [58.1, 10211.0], [58.2, 10212.0], [58.3, 10212.0], [58.4, 10223.0], [58.5, 10227.0], [58.6, 10282.0], [58.7, 10284.0], [58.8, 10285.0], [58.9, 10287.0], [59.0, 10287.0], [59.1, 10288.0], [59.2, 10289.0], [59.3, 10295.0], [59.4, 10297.0], [59.5, 10298.0], [59.6, 10298.0], [59.7, 10299.0], [59.8, 10321.0], [59.9, 10326.0], [60.0, 10337.0], [60.1, 10355.0], [60.2, 10360.0], [60.3, 10360.0], [60.4, 10364.0], [60.5, 10376.0], [60.6, 10385.0], [60.7, 10408.0], [60.8, 10411.0], [60.9, 10421.0], [61.0, 10438.0], [61.1, 10462.0], [61.2, 10463.0], [61.3, 10473.0], [61.4, 10485.0], [61.5, 10491.0], [61.6, 10493.0], [61.7, 10498.0], [61.8, 10504.0], [61.9, 10510.0], [62.0, 10512.0], [62.1, 10513.0], [62.2, 10519.0], [62.3, 10539.0], [62.4, 10541.0], [62.5, 10542.0], [62.6, 10544.0], [62.7, 10545.0], [62.8, 10551.0], [62.9, 10552.0], [63.0, 10552.0], [63.1, 10555.0], [63.2, 10555.0], [63.3, 10556.0], [63.4, 10557.0], [63.5, 10560.0], [63.6, 10563.0], [63.7, 10563.0], [63.8, 10564.0], [63.9, 10566.0], [64.0, 10567.0], [64.1, 10569.0], [64.2, 10570.0], [64.3, 10572.0], [64.4, 10575.0], [64.5, 10578.0], [64.6, 10580.0], [64.7, 10582.0], [64.8, 10583.0], [64.9, 10587.0], [65.0, 10587.0], [65.1, 10590.0], [65.2, 10591.0], [65.3, 10594.0], [65.4, 10595.0], [65.5, 10595.0], [65.6, 10633.0], [65.7, 10689.0], [65.8, 10722.0], [65.9, 10725.0], [66.0, 10727.0], [66.1, 10738.0], [66.2, 10744.0], [66.3, 10746.0], [66.4, 10746.0], [66.5, 10752.0], [66.6, 10753.0], [66.7, 10757.0], [66.8, 10760.0], [66.9, 10761.0], [67.0, 10762.0], [67.1, 10764.0], [67.2, 10764.0], [67.3, 10765.0], [67.4, 10767.0], [67.5, 10769.0], [67.6, 10771.0], [67.7, 10774.0], [67.8, 10774.0], [67.9, 10785.0], [68.0, 10785.0], [68.1, 10786.0], [68.2, 10789.0], [68.3, 10790.0], [68.4, 10790.0], [68.5, 10791.0], [68.6, 10791.0], [68.7, 10793.0], [68.8, 10795.0], [68.9, 10795.0], [69.0, 10796.0], [69.1, 10797.0], [69.2, 10797.0], [69.3, 10797.0], [69.4, 10798.0], [69.5, 10799.0], [69.6, 10799.0], [69.7, 10799.0], [69.8, 10809.0], [69.9, 10813.0], [70.0, 10815.0], [70.1, 10815.0], [70.2, 10816.0], [70.3, 10816.0], [70.4, 10818.0], [70.5, 10821.0], [70.6, 10825.0], [70.7, 10826.0], [70.8, 10831.0], [70.9, 10836.0], [71.0, 10837.0], [71.1, 10838.0], [71.2, 10840.0], [71.3, 10840.0], [71.4, 10841.0], [71.5, 10841.0], [71.6, 10843.0], [71.7, 10845.0], [71.8, 10847.0], [71.9, 10847.0], [72.0, 10850.0], [72.1, 10851.0], [72.2, 10851.0], [72.3, 10851.0], [72.4, 10852.0], [72.5, 10853.0], [72.6, 10853.0], [72.7, 10855.0], [72.8, 10855.0], [72.9, 10859.0], [73.0, 10859.0], [73.1, 10860.0], [73.2, 10867.0], [73.3, 10869.0], [73.4, 10878.0], [73.5, 10879.0], [73.6, 10881.0], [73.7, 10881.0], [73.8, 10885.0], [73.9, 10886.0], [74.0, 10886.0], [74.1, 10900.0], [74.2, 10902.0], [74.3, 10903.0], [74.4, 10908.0], [74.5, 10911.0], [74.6, 10920.0], [74.7, 10920.0], [74.8, 10923.0], [74.9, 10923.0], [75.0, 10923.0], [75.1, 10923.0], [75.2, 10924.0], [75.3, 10925.0], [75.4, 10925.0], [75.5, 10926.0], [75.6, 10927.0], [75.7, 10934.0], [75.8, 10934.0], [75.9, 10935.0], [76.0, 10935.0], [76.1, 10939.0], [76.2, 10940.0], [76.3, 10941.0], [76.4, 10944.0], [76.5, 10944.0], [76.6, 10945.0], [76.7, 10946.0], [76.8, 10950.0], [76.9, 10962.0], [77.0, 10982.0], [77.1, 11018.0], [77.2, 11058.0], [77.3, 11061.0], [77.4, 11062.0], [77.5, 11064.0], [77.6, 11068.0], [77.7, 11068.0], [77.8, 11070.0], [77.9, 11073.0], [78.0, 11077.0], [78.1, 11081.0], [78.2, 11085.0], [78.3, 11085.0], [78.4, 11086.0], [78.5, 11086.0], [78.6, 11087.0], [78.7, 11087.0], [78.8, 11087.0], [78.9, 11089.0], [79.0, 11090.0], [79.1, 11090.0], [79.2, 11090.0], [79.3, 11091.0], [79.4, 11091.0], [79.5, 11091.0], [79.6, 11091.0], [79.7, 11091.0], [79.8, 11092.0], [79.9, 11092.0], [80.0, 11093.0], [80.1, 11094.0], [80.2, 11094.0], [80.3, 11094.0], [80.4, 11094.0], [80.5, 11094.0], [80.6, 11095.0], [80.7, 11097.0], [80.8, 11097.0], [80.9, 11098.0], [81.0, 11098.0], [81.1, 11099.0], [81.2, 11099.0], [81.3, 11102.0], [81.4, 11103.0], [81.5, 11110.0], [81.6, 11115.0], [81.7, 11117.0], [81.8, 11119.0], [81.9, 11122.0], [82.0, 11123.0], [82.1, 11123.0], [82.2, 11127.0], [82.3, 11130.0], [82.4, 11130.0], [82.5, 11131.0], [82.6, 11131.0], [82.7, 11133.0], [82.8, 11134.0], [82.9, 11137.0], [83.0, 11147.0], [83.1, 11152.0], [83.2, 11168.0], [83.3, 11177.0], [83.4, 11178.0], [83.5, 11178.0], [83.6, 11182.0], [83.7, 11190.0], [83.8, 11283.0], [83.9, 11484.0], [84.0, 11541.0], [84.1, 11565.0], [84.2, 11571.0], [84.3, 11574.0], [84.4, 11577.0], [84.5, 11579.0], [84.6, 11579.0], [84.7, 11582.0], [84.8, 11582.0], [84.9, 11584.0], [85.0, 11585.0], [85.1, 11586.0], [85.2, 11588.0], [85.3, 11589.0], [85.4, 11590.0], [85.5, 11591.0], [85.6, 11593.0], [85.7, 11595.0], [85.8, 11599.0], [85.9, 11601.0], [86.0, 11605.0], [86.1, 11611.0], [86.2, 11612.0], [86.3, 11615.0], [86.4, 11624.0], [86.5, 11627.0], [86.6, 11632.0], [86.7, 11639.0], [86.8, 11640.0], [86.9, 11647.0], [87.0, 11647.0], [87.1, 11652.0], [87.2, 11657.0], [87.3, 11660.0], [87.4, 11663.0], [87.5, 11665.0], [87.6, 11665.0], [87.7, 11668.0], [87.8, 11669.0], [87.9, 11670.0], [88.0, 11671.0], [88.1, 11671.0], [88.2, 11674.0], [88.3, 11674.0], [88.4, 11678.0], [88.5, 11678.0], [88.6, 11682.0], [88.7, 11684.0], [88.8, 11686.0], [88.9, 11686.0], [89.0, 11687.0], [89.1, 11688.0], [89.2, 11690.0], [89.3, 11691.0], [89.4, 11695.0], [89.5, 11699.0], [89.6, 11702.0], [89.7, 11707.0], [89.8, 11723.0], [89.9, 11751.0], [90.0, 11819.0], [90.1, 11827.0], [90.2, 11840.0], [90.3, 11843.0], [90.4, 11868.0], [90.5, 11912.0], [90.6, 11918.0], [90.7, 11920.0], [90.8, 11921.0], [90.9, 11922.0], [91.0, 11923.0], [91.1, 11927.0], [91.2, 11928.0], [91.3, 11929.0], [91.4, 11930.0], [91.5, 11930.0], [91.6, 11931.0], [91.7, 11934.0], [91.8, 11935.0], [91.9, 11937.0], [92.0, 11938.0], [92.1, 11938.0], [92.2, 11938.0], [92.3, 11942.0], [92.4, 11943.0], [92.5, 11946.0], [92.6, 11949.0], [92.7, 11950.0], [92.8, 11959.0], [92.9, 11959.0], [93.0, 11973.0], [93.1, 11974.0], [93.2, 11978.0], [93.3, 11978.0], [93.4, 11981.0], [93.5, 11982.0], [93.6, 11996.0], [93.7, 12027.0], [93.8, 12059.0], [93.9, 12064.0], [94.0, 12084.0], [94.1, 12171.0], [94.2, 12257.0], [94.3, 12269.0], [94.4, 12271.0], [94.5, 12273.0], [94.6, 12276.0], [94.7, 12276.0], [94.8, 12278.0], [94.9, 12280.0], [95.0, 12281.0], [95.1, 12281.0], [95.2, 12282.0], [95.3, 12283.0], [95.4, 12284.0], [95.5, 12286.0], [95.6, 12289.0], [95.7, 12289.0], [95.8, 12289.0], [95.9, 12290.0], [96.0, 12290.0], [96.1, 12291.0], [96.2, 12291.0], [96.3, 12292.0], [96.4, 12295.0], [96.5, 12295.0], [96.6, 12296.0], [96.7, 12299.0], [96.8, 12300.0], [96.9, 12302.0], [97.0, 12303.0], [97.1, 12305.0], [97.2, 12310.0], [97.3, 12310.0], [97.4, 12310.0], [97.5, 12311.0], [97.6, 12311.0], [97.7, 12312.0], [97.8, 12314.0], [97.9, 12315.0], [98.0, 12317.0], [98.1, 12318.0], [98.2, 12320.0], [98.3, 12321.0], [98.4, 12322.0], [98.5, 12324.0], [98.6, 12328.0], [98.7, 12334.0], [98.8, 12339.0], [98.9, 12351.0], [99.0, 12359.0], [99.1, 12364.0], [99.2, 12364.0], [99.3, 12367.0], [99.4, 12375.0], [99.5, 12377.0], [99.6, 12404.0], [99.7, 12434.0], [99.8, 12436.0], [99.9, 12515.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7000.0, "maxY": 111.0, "series": [{"data": [[8700.0, 22.0], [8600.0, 7.0], [8500.0, 10.0], [8200.0, 12.0], [8400.0, 4.0], [9000.0, 22.0], [9100.0, 111.0], [9200.0, 17.0], [8800.0, 12.0], [8900.0, 26.0], [9400.0, 1.0], [9600.0, 25.0], [9700.0, 32.0], [9500.0, 1.0], [10100.0, 29.0], [10200.0, 19.0], [9900.0, 16.0], [9800.0, 18.0], [10300.0, 9.0], [10700.0, 40.0], [10500.0, 38.0], [10600.0, 2.0], [10400.0, 11.0], [10800.0, 43.0], [10900.0, 30.0], [11000.0, 42.0], [11100.0, 26.0], [11200.0, 1.0], [11500.0, 19.0], [11600.0, 37.0], [11700.0, 4.0], [11400.0, 1.0], [11900.0, 32.0], [12200.0, 26.0], [12000.0, 4.0], [11800.0, 5.0], [12100.0, 1.0], [12300.0, 28.0], [12400.0, 3.0], [12500.0, 1.0], [7100.0, 42.0], [7000.0, 10.0], [7200.0, 55.0], [7400.0, 1.0], [7300.0, 6.0], [7900.0, 10.0], [8000.0, 62.0], [8100.0, 27.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1000.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 1.5713958E12, "maxY": 1000.0, "series": [{"data": [[1.5713958E12, 1000.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5713958E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9748.12299999999, "minX": 1000.0, "maxY": 9748.12299999999, "series": [{"data": [[1000.0, 9748.12299999999]], "isOverall": false, "label": "Access Series Page", "isController": false}, {"data": [[1000.0, 9748.12299999999]], "isOverall": false, "label": "Access Series Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3733.3333333333335, "minX": 1.5713958E12, "maxY": 109583.33333333333, "series": [{"data": [[1.5713958E12, 109583.33333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5713958E12, 3733.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5713958E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9748.12299999999, "minX": 1.5713958E12, "maxY": 9748.12299999999, "series": [{"data": [[1.5713958E12, 9748.12299999999]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5713958E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9622.632000000001, "minX": 1.5713958E12, "maxY": 9622.632000000001, "series": [{"data": [[1.5713958E12, 9622.632000000001]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5713958E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 6308.349000000009, "minX": 1.5713958E12, "maxY": 6308.349000000009, "series": [{"data": [[1.5713958E12, 6308.349000000009]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5713958E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7066.0, "minX": 1.5713958E12, "maxY": 12515.0, "series": [{"data": [[1.5713958E12, 12515.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5713958E12, 7066.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5713958E12, 11812.199999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5713958E12, 12358.92]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5713958E12, 12280.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5713958E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 8159.5, "minX": 83.0, "maxY": 11590.0, "series": [{"data": [[263.0, 11590.0], [83.0, 10326.0], [418.0, 8159.5], [236.0, 10540.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 418.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 8080.5, "minX": 83.0, "maxY": 11590.0, "series": [{"data": [[263.0, 11590.0], [83.0, 10298.0], [418.0, 8080.5], [236.0, 9987.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 418.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5713958E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5713958E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5713958E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5713958E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5713958E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5713958E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5713958E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5713958E12, 16.666666666666668]], "isOverall": false, "label": "Access Series Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5713958E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.5713958E12, "maxY": 16.666666666666668, "series": [{"data": [[1.5713958E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5713958E12, "title": "Total Transactions Per Second"}},
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

