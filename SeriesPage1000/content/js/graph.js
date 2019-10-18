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
        data: {"result": {"minY": 11344.0, "minX": 0.0, "maxY": 15913.0, "series": [{"data": [[0.0, 11344.0], [0.1, 11429.0], [0.2, 11448.0], [0.3, 11448.0], [0.4, 11457.0], [0.5, 11465.0], [0.6, 11468.0], [0.7, 11477.0], [0.8, 11489.0], [0.9, 11491.0], [1.0, 11502.0], [1.1, 11510.0], [1.2, 11535.0], [1.3, 11538.0], [1.4, 11538.0], [1.5, 11543.0], [1.6, 11556.0], [1.7, 11560.0], [1.8, 11561.0], [1.9, 11565.0], [2.0, 11574.0], [2.1, 11574.0], [2.2, 11577.0], [2.3, 11578.0], [2.4, 11580.0], [2.5, 11580.0], [2.6, 11585.0], [2.7, 11587.0], [2.8, 11590.0], [2.9, 11608.0], [3.0, 11609.0], [3.1, 11618.0], [3.2, 11642.0], [3.3, 11651.0], [3.4, 11651.0], [3.5, 11654.0], [3.6, 11672.0], [3.7, 11684.0], [3.8, 11691.0], [3.9, 11703.0], [4.0, 11705.0], [4.1, 11712.0], [4.2, 11716.0], [4.3, 11718.0], [4.4, 11724.0], [4.5, 11724.0], [4.6, 11724.0], [4.7, 11727.0], [4.8, 11729.0], [4.9, 11731.0], [5.0, 11734.0], [5.1, 11736.0], [5.2, 11743.0], [5.3, 11752.0], [5.4, 11763.0], [5.5, 11794.0], [5.6, 11801.0], [5.7, 11810.0], [5.8, 11817.0], [5.9, 11824.0], [6.0, 11835.0], [6.1, 11836.0], [6.2, 11839.0], [6.3, 11845.0], [6.4, 11861.0], [6.5, 11868.0], [6.6, 11893.0], [6.7, 11894.0], [6.8, 11896.0], [6.9, 11915.0], [7.0, 11920.0], [7.1, 11927.0], [7.2, 11936.0], [7.3, 11942.0], [7.4, 11956.0], [7.5, 11968.0], [7.6, 11992.0], [7.7, 12007.0], [7.8, 12021.0], [7.9, 12027.0], [8.0, 12038.0], [8.1, 12045.0], [8.2, 12046.0], [8.3, 12054.0], [8.4, 12062.0], [8.5, 12063.0], [8.6, 12078.0], [8.7, 12079.0], [8.8, 12081.0], [8.9, 12085.0], [9.0, 12100.0], [9.1, 12101.0], [9.2, 12103.0], [9.3, 12103.0], [9.4, 12103.0], [9.5, 12104.0], [9.6, 12104.0], [9.7, 12106.0], [9.8, 12106.0], [9.9, 12106.0], [10.0, 12108.0], [10.1, 12112.0], [10.2, 12113.0], [10.3, 12116.0], [10.4, 12116.0], [10.5, 12117.0], [10.6, 12117.0], [10.7, 12119.0], [10.8, 12120.0], [10.9, 12125.0], [11.0, 12131.0], [11.1, 12131.0], [11.2, 12131.0], [11.3, 12131.0], [11.4, 12132.0], [11.5, 12135.0], [11.6, 12139.0], [11.7, 12146.0], [11.8, 12149.0], [11.9, 12149.0], [12.0, 12150.0], [12.1, 12151.0], [12.2, 12152.0], [12.3, 12154.0], [12.4, 12157.0], [12.5, 12159.0], [12.6, 12161.0], [12.7, 12165.0], [12.8, 12167.0], [12.9, 12168.0], [13.0, 12171.0], [13.1, 12174.0], [13.2, 12180.0], [13.3, 12182.0], [13.4, 12191.0], [13.5, 12201.0], [13.6, 12206.0], [13.7, 12209.0], [13.8, 12210.0], [13.9, 12210.0], [14.0, 12211.0], [14.1, 12211.0], [14.2, 12211.0], [14.3, 12212.0], [14.4, 12212.0], [14.5, 12214.0], [14.6, 12214.0], [14.7, 12215.0], [14.8, 12215.0], [14.9, 12216.0], [15.0, 12216.0], [15.1, 12217.0], [15.2, 12217.0], [15.3, 12218.0], [15.4, 12218.0], [15.5, 12219.0], [15.6, 12220.0], [15.7, 12220.0], [15.8, 12220.0], [15.9, 12220.0], [16.0, 12221.0], [16.1, 12221.0], [16.2, 12221.0], [16.3, 12222.0], [16.4, 12222.0], [16.5, 12222.0], [16.6, 12224.0], [16.7, 12226.0], [16.8, 12228.0], [16.9, 12229.0], [17.0, 12229.0], [17.1, 12229.0], [17.2, 12236.0], [17.3, 12236.0], [17.4, 12237.0], [17.5, 12237.0], [17.6, 12237.0], [17.7, 12239.0], [17.8, 12241.0], [17.9, 12249.0], [18.0, 12252.0], [18.1, 12252.0], [18.2, 12253.0], [18.3, 12253.0], [18.4, 12255.0], [18.5, 12256.0], [18.6, 12258.0], [18.7, 12258.0], [18.8, 12259.0], [18.9, 12259.0], [19.0, 12262.0], [19.1, 12264.0], [19.2, 12264.0], [19.3, 12271.0], [19.4, 12273.0], [19.5, 12275.0], [19.6, 12276.0], [19.7, 12282.0], [19.8, 12282.0], [19.9, 12288.0], [20.0, 12289.0], [20.1, 12289.0], [20.2, 12291.0], [20.3, 12291.0], [20.4, 12306.0], [20.5, 12312.0], [20.6, 12312.0], [20.7, 12314.0], [20.8, 12314.0], [20.9, 12317.0], [21.0, 12317.0], [21.1, 12318.0], [21.2, 12320.0], [21.3, 12321.0], [21.4, 12322.0], [21.5, 12324.0], [21.6, 12325.0], [21.7, 12326.0], [21.8, 12327.0], [21.9, 12330.0], [22.0, 12330.0], [22.1, 12332.0], [22.2, 12333.0], [22.3, 12334.0], [22.4, 12335.0], [22.5, 12335.0], [22.6, 12336.0], [22.7, 12336.0], [22.8, 12337.0], [22.9, 12340.0], [23.0, 12341.0], [23.1, 12341.0], [23.2, 12342.0], [23.3, 12343.0], [23.4, 12343.0], [23.5, 12344.0], [23.6, 12344.0], [23.7, 12344.0], [23.8, 12344.0], [23.9, 12344.0], [24.0, 12345.0], [24.1, 12345.0], [24.2, 12345.0], [24.3, 12347.0], [24.4, 12347.0], [24.5, 12347.0], [24.6, 12348.0], [24.7, 12348.0], [24.8, 12349.0], [24.9, 12349.0], [25.0, 12350.0], [25.1, 12351.0], [25.2, 12351.0], [25.3, 12351.0], [25.4, 12352.0], [25.5, 12354.0], [25.6, 12354.0], [25.7, 12355.0], [25.8, 12355.0], [25.9, 12355.0], [26.0, 12356.0], [26.1, 12356.0], [26.2, 12356.0], [26.3, 12357.0], [26.4, 12357.0], [26.5, 12358.0], [26.6, 12358.0], [26.7, 12358.0], [26.8, 12359.0], [26.9, 12359.0], [27.0, 12359.0], [27.1, 12359.0], [27.2, 12361.0], [27.3, 12361.0], [27.4, 12361.0], [27.5, 12361.0], [27.6, 12362.0], [27.7, 12362.0], [27.8, 12362.0], [27.9, 12362.0], [28.0, 12362.0], [28.1, 12365.0], [28.2, 12365.0], [28.3, 12368.0], [28.4, 12369.0], [28.5, 12371.0], [28.6, 12371.0], [28.7, 12372.0], [28.8, 12372.0], [28.9, 12372.0], [29.0, 12374.0], [29.1, 12377.0], [29.2, 12380.0], [29.3, 12382.0], [29.4, 12387.0], [29.5, 12388.0], [29.6, 12389.0], [29.7, 12390.0], [29.8, 12391.0], [29.9, 12392.0], [30.0, 12393.0], [30.1, 12393.0], [30.2, 12393.0], [30.3, 12394.0], [30.4, 12395.0], [30.5, 12411.0], [30.6, 12412.0], [30.7, 12413.0], [30.8, 12414.0], [30.9, 12415.0], [31.0, 12415.0], [31.1, 12439.0], [31.2, 12443.0], [31.3, 12445.0], [31.4, 12449.0], [31.5, 12454.0], [31.6, 12456.0], [31.7, 12456.0], [31.8, 12458.0], [31.9, 12458.0], [32.0, 12459.0], [32.1, 12459.0], [32.2, 12461.0], [32.3, 12462.0], [32.4, 12464.0], [32.5, 12465.0], [32.6, 12467.0], [32.7, 12469.0], [32.8, 12469.0], [32.9, 12470.0], [33.0, 12471.0], [33.1, 12471.0], [33.2, 12472.0], [33.3, 12472.0], [33.4, 12473.0], [33.5, 12475.0], [33.6, 12482.0], [33.7, 12484.0], [33.8, 12487.0], [33.9, 12489.0], [34.0, 12490.0], [34.1, 12498.0], [34.2, 12503.0], [34.3, 12504.0], [34.4, 12505.0], [34.5, 12505.0], [34.6, 12506.0], [34.7, 12507.0], [34.8, 12507.0], [34.9, 12508.0], [35.0, 12509.0], [35.1, 12511.0], [35.2, 12513.0], [35.3, 12513.0], [35.4, 12514.0], [35.5, 12514.0], [35.6, 12514.0], [35.7, 12514.0], [35.8, 12515.0], [35.9, 12519.0], [36.0, 12520.0], [36.1, 12520.0], [36.2, 12520.0], [36.3, 12521.0], [36.4, 12521.0], [36.5, 12522.0], [36.6, 12524.0], [36.7, 12524.0], [36.8, 12524.0], [36.9, 12532.0], [37.0, 12537.0], [37.1, 12537.0], [37.2, 12540.0], [37.3, 12543.0], [37.4, 12544.0], [37.5, 12546.0], [37.6, 12550.0], [37.7, 12553.0], [37.8, 12553.0], [37.9, 12554.0], [38.0, 12556.0], [38.1, 12567.0], [38.2, 12897.0], [38.3, 13040.0], [38.4, 13054.0], [38.5, 13089.0], [38.6, 13124.0], [38.7, 13262.0], [38.8, 13324.0], [38.9, 13336.0], [39.0, 13336.0], [39.1, 13342.0], [39.2, 13346.0], [39.3, 13509.0], [39.4, 13509.0], [39.5, 13512.0], [39.6, 13512.0], [39.7, 13512.0], [39.8, 13515.0], [39.9, 13521.0], [40.0, 13538.0], [40.1, 13550.0], [40.2, 13550.0], [40.3, 13553.0], [40.4, 13555.0], [40.5, 13556.0], [40.6, 13573.0], [40.7, 13720.0], [40.8, 13750.0], [40.9, 13770.0], [41.0, 13787.0], [41.1, 13806.0], [41.2, 13830.0], [41.3, 13887.0], [41.4, 13967.0], [41.5, 13989.0], [41.6, 14132.0], [41.7, 14159.0], [41.8, 14308.0], [41.9, 14412.0], [42.0, 14418.0], [42.1, 14430.0], [42.2, 14435.0], [42.3, 14438.0], [42.4, 14462.0], [42.5, 14547.0], [42.6, 14547.0], [42.7, 14547.0], [42.8, 14548.0], [42.9, 14550.0], [43.0, 14552.0], [43.1, 14552.0], [43.2, 14552.0], [43.3, 14555.0], [43.4, 14556.0], [43.5, 14556.0], [43.6, 14558.0], [43.7, 14562.0], [43.8, 14562.0], [43.9, 14563.0], [44.0, 14563.0], [44.1, 14565.0], [44.2, 14567.0], [44.3, 14568.0], [44.4, 14574.0], [44.5, 14575.0], [44.6, 14575.0], [44.7, 14579.0], [44.8, 14580.0], [44.9, 14594.0], [45.0, 14596.0], [45.1, 14596.0], [45.2, 14596.0], [45.3, 14597.0], [45.4, 14599.0], [45.5, 14599.0], [45.6, 14600.0], [45.7, 14604.0], [45.8, 14610.0], [45.9, 14612.0], [46.0, 14613.0], [46.1, 14613.0], [46.2, 14614.0], [46.3, 14615.0], [46.4, 14621.0], [46.5, 14621.0], [46.6, 14622.0], [46.7, 14624.0], [46.8, 14624.0], [46.9, 14625.0], [47.0, 14626.0], [47.1, 14626.0], [47.2, 14626.0], [47.3, 14627.0], [47.4, 14629.0], [47.5, 14629.0], [47.6, 14629.0], [47.7, 14629.0], [47.8, 14629.0], [47.9, 14630.0], [48.0, 14630.0], [48.1, 14630.0], [48.2, 14631.0], [48.3, 14632.0], [48.4, 14632.0], [48.5, 14632.0], [48.6, 14632.0], [48.7, 14632.0], [48.8, 14633.0], [48.9, 14635.0], [49.0, 14636.0], [49.1, 14636.0], [49.2, 14636.0], [49.3, 14637.0], [49.4, 14638.0], [49.5, 14638.0], [49.6, 14638.0], [49.7, 14639.0], [49.8, 14639.0], [49.9, 14639.0], [50.0, 14641.0], [50.1, 14641.0], [50.2, 14641.0], [50.3, 14642.0], [50.4, 14645.0], [50.5, 14647.0], [50.6, 14647.0], [50.7, 14647.0], [50.8, 14647.0], [50.9, 14650.0], [51.0, 14654.0], [51.1, 14656.0], [51.2, 14659.0], [51.3, 14664.0], [51.4, 14668.0], [51.5, 14669.0], [51.6, 14670.0], [51.7, 14671.0], [51.8, 14672.0], [51.9, 14672.0], [52.0, 14673.0], [52.1, 14674.0], [52.2, 14674.0], [52.3, 14675.0], [52.4, 14675.0], [52.5, 14677.0], [52.6, 14687.0], [52.7, 14692.0], [52.8, 14694.0], [52.9, 14707.0], [53.0, 14719.0], [53.1, 14719.0], [53.2, 14719.0], [53.3, 14726.0], [53.4, 14778.0], [53.5, 14875.0], [53.6, 14934.0], [53.7, 14937.0], [53.8, 14947.0], [53.9, 15020.0], [54.0, 15074.0], [54.1, 15076.0], [54.2, 15078.0], [54.3, 15079.0], [54.4, 15083.0], [54.5, 15086.0], [54.6, 15090.0], [54.7, 15097.0], [54.8, 15098.0], [54.9, 15098.0], [55.0, 15109.0], [55.1, 15127.0], [55.2, 15141.0], [55.3, 15143.0], [55.4, 15158.0], [55.5, 15160.0], [55.6, 15164.0], [55.7, 15175.0], [55.8, 15176.0], [55.9, 15178.0], [56.0, 15179.0], [56.1, 15179.0], [56.2, 15182.0], [56.3, 15182.0], [56.4, 15185.0], [56.5, 15191.0], [56.6, 15195.0], [56.7, 15195.0], [56.8, 15200.0], [56.9, 15202.0], [57.0, 15207.0], [57.1, 15207.0], [57.2, 15207.0], [57.3, 15212.0], [57.4, 15218.0], [57.5, 15218.0], [57.6, 15220.0], [57.7, 15221.0], [57.8, 15228.0], [57.9, 15233.0], [58.0, 15239.0], [58.1, 15248.0], [58.2, 15264.0], [58.3, 15267.0], [58.4, 15269.0], [58.5, 15271.0], [58.6, 15280.0], [58.7, 15281.0], [58.8, 15288.0], [58.9, 15294.0], [59.0, 15322.0], [59.1, 15324.0], [59.2, 15331.0], [59.3, 15331.0], [59.4, 15331.0], [59.5, 15331.0], [59.6, 15332.0], [59.7, 15333.0], [59.8, 15334.0], [59.9, 15334.0], [60.0, 15334.0], [60.1, 15334.0], [60.2, 15336.0], [60.3, 15336.0], [60.4, 15336.0], [60.5, 15337.0], [60.6, 15337.0], [60.7, 15340.0], [60.8, 15340.0], [60.9, 15341.0], [61.0, 15342.0], [61.1, 15342.0], [61.2, 15343.0], [61.3, 15344.0], [61.4, 15344.0], [61.5, 15346.0], [61.6, 15349.0], [61.7, 15349.0], [61.8, 15350.0], [61.9, 15350.0], [62.0, 15351.0], [62.1, 15351.0], [62.2, 15355.0], [62.3, 15362.0], [62.4, 15362.0], [62.5, 15363.0], [62.6, 15363.0], [62.7, 15364.0], [62.8, 15374.0], [62.9, 15375.0], [63.0, 15377.0], [63.1, 15378.0], [63.2, 15384.0], [63.3, 15386.0], [63.4, 15386.0], [63.5, 15389.0], [63.6, 15390.0], [63.7, 15390.0], [63.8, 15393.0], [63.9, 15402.0], [64.0, 15403.0], [64.1, 15435.0], [64.2, 15515.0], [64.3, 15527.0], [64.4, 15528.0], [64.5, 15545.0], [64.6, 15566.0], [64.7, 15572.0], [64.8, 15578.0], [64.9, 15579.0], [65.0, 15585.0], [65.1, 15585.0], [65.2, 15596.0], [65.3, 15596.0], [65.4, 15599.0], [65.5, 15601.0], [65.6, 15602.0], [65.7, 15602.0], [65.8, 15602.0], [65.9, 15602.0], [66.0, 15602.0], [66.1, 15602.0], [66.2, 15604.0], [66.3, 15604.0], [66.4, 15605.0], [66.5, 15620.0], [66.6, 15623.0], [66.7, 15626.0], [66.8, 15628.0], [66.9, 15628.0], [67.0, 15629.0], [67.1, 15629.0], [67.2, 15631.0], [67.3, 15632.0], [67.4, 15632.0], [67.5, 15636.0], [67.6, 15638.0], [67.7, 15639.0], [67.8, 15645.0], [67.9, 15646.0], [68.0, 15646.0], [68.1, 15648.0], [68.2, 15649.0], [68.3, 15649.0], [68.4, 15650.0], [68.5, 15652.0], [68.6, 15653.0], [68.7, 15653.0], [68.8, 15654.0], [68.9, 15656.0], [69.0, 15657.0], [69.1, 15657.0], [69.2, 15658.0], [69.3, 15667.0], [69.4, 15668.0], [69.5, 15669.0], [69.6, 15671.0], [69.7, 15672.0], [69.8, 15675.0], [69.9, 15675.0], [70.0, 15675.0], [70.1, 15677.0], [70.2, 15677.0], [70.3, 15678.0], [70.4, 15679.0], [70.5, 15681.0], [70.6, 15681.0], [70.7, 15682.0], [70.8, 15683.0], [70.9, 15684.0], [71.0, 15684.0], [71.1, 15690.0], [71.2, 15690.0], [71.3, 15690.0], [71.4, 15690.0], [71.5, 15691.0], [71.6, 15693.0], [71.7, 15694.0], [71.8, 15694.0], [71.9, 15694.0], [72.0, 15698.0], [72.1, 15700.0], [72.2, 15707.0], [72.3, 15708.0], [72.4, 15741.0], [72.5, 15741.0], [72.6, 15745.0], [72.7, 15749.0], [72.8, 15751.0], [72.9, 15758.0], [73.0, 15758.0], [73.1, 15759.0], [73.2, 15760.0], [73.3, 15760.0], [73.4, 15762.0], [73.5, 15764.0], [73.6, 15765.0], [73.7, 15765.0], [73.8, 15765.0], [73.9, 15767.0], [74.0, 15769.0], [74.1, 15770.0], [74.2, 15771.0], [74.3, 15772.0], [74.4, 15772.0], [74.5, 15774.0], [74.6, 15776.0], [74.7, 15777.0], [74.8, 15778.0], [74.9, 15782.0], [75.0, 15782.0], [75.1, 15784.0], [75.2, 15784.0], [75.3, 15790.0], [75.4, 15794.0], [75.5, 15795.0], [75.6, 15795.0], [75.7, 15796.0], [75.8, 15805.0], [75.9, 15815.0], [76.0, 15816.0], [76.1, 15818.0], [76.2, 15824.0], [76.3, 15825.0], [76.4, 15826.0], [76.5, 15826.0], [76.6, 15826.0], [76.7, 15827.0], [76.8, 15828.0], [76.9, 15828.0], [77.0, 15828.0], [77.1, 15828.0], [77.2, 15828.0], [77.3, 15829.0], [77.4, 15831.0], [77.5, 15831.0], [77.6, 15831.0], [77.7, 15832.0], [77.8, 15832.0], [77.9, 15832.0], [78.0, 15832.0], [78.1, 15832.0], [78.2, 15833.0], [78.3, 15833.0], [78.4, 15834.0], [78.5, 15834.0], [78.6, 15834.0], [78.7, 15835.0], [78.8, 15835.0], [78.9, 15835.0], [79.0, 15835.0], [79.1, 15835.0], [79.2, 15835.0], [79.3, 15835.0], [79.4, 15836.0], [79.5, 15836.0], [79.6, 15836.0], [79.7, 15836.0], [79.8, 15836.0], [79.9, 15836.0], [80.0, 15836.0], [80.1, 15836.0], [80.2, 15837.0], [80.3, 15837.0], [80.4, 15838.0], [80.5, 15839.0], [80.6, 15839.0], [80.7, 15839.0], [80.8, 15839.0], [80.9, 15839.0], [81.0, 15839.0], [81.1, 15839.0], [81.2, 15840.0], [81.3, 15840.0], [81.4, 15840.0], [81.5, 15840.0], [81.6, 15840.0], [81.7, 15841.0], [81.8, 15841.0], [81.9, 15841.0], [82.0, 15841.0], [82.1, 15841.0], [82.2, 15841.0], [82.3, 15841.0], [82.4, 15842.0], [82.5, 15842.0], [82.6, 15842.0], [82.7, 15842.0], [82.8, 15842.0], [82.9, 15842.0], [83.0, 15842.0], [83.1, 15842.0], [83.2, 15842.0], [83.3, 15842.0], [83.4, 15843.0], [83.5, 15843.0], [83.6, 15843.0], [83.7, 15844.0], [83.8, 15844.0], [83.9, 15844.0], [84.0, 15844.0], [84.1, 15844.0], [84.2, 15844.0], [84.3, 15844.0], [84.4, 15845.0], [84.5, 15845.0], [84.6, 15845.0], [84.7, 15845.0], [84.8, 15845.0], [84.9, 15845.0], [85.0, 15845.0], [85.1, 15845.0], [85.2, 15845.0], [85.3, 15845.0], [85.4, 15846.0], [85.5, 15846.0], [85.6, 15846.0], [85.7, 15846.0], [85.8, 15846.0], [85.9, 15846.0], [86.0, 15846.0], [86.1, 15846.0], [86.2, 15847.0], [86.3, 15847.0], [86.4, 15847.0], [86.5, 15847.0], [86.6, 15847.0], [86.7, 15847.0], [86.8, 15847.0], [86.9, 15847.0], [87.0, 15848.0], [87.1, 15848.0], [87.2, 15848.0], [87.3, 15848.0], [87.4, 15848.0], [87.5, 15849.0], [87.6, 15849.0], [87.7, 15849.0], [87.8, 15849.0], [87.9, 15850.0], [88.0, 15850.0], [88.1, 15850.0], [88.2, 15851.0], [88.3, 15851.0], [88.4, 15851.0], [88.5, 15851.0], [88.6, 15851.0], [88.7, 15851.0], [88.8, 15851.0], [88.9, 15851.0], [89.0, 15851.0], [89.1, 15851.0], [89.2, 15852.0], [89.3, 15852.0], [89.4, 15853.0], [89.5, 15853.0], [89.6, 15853.0], [89.7, 15853.0], [89.8, 15853.0], [89.9, 15854.0], [90.0, 15854.0], [90.1, 15855.0], [90.2, 15855.0], [90.3, 15855.0], [90.4, 15855.0], [90.5, 15855.0], [90.6, 15855.0], [90.7, 15855.0], [90.8, 15856.0], [90.9, 15856.0], [91.0, 15856.0], [91.1, 15856.0], [91.2, 15856.0], [91.3, 15857.0], [91.4, 15857.0], [91.5, 15857.0], [91.6, 15857.0], [91.7, 15857.0], [91.8, 15857.0], [91.9, 15857.0], [92.0, 15858.0], [92.1, 15858.0], [92.2, 15858.0], [92.3, 15858.0], [92.4, 15858.0], [92.5, 15859.0], [92.6, 15859.0], [92.7, 15859.0], [92.8, 15859.0], [92.9, 15860.0], [93.0, 15864.0], [93.1, 15867.0], [93.2, 15867.0], [93.3, 15868.0], [93.4, 15868.0], [93.5, 15869.0], [93.6, 15870.0], [93.7, 15872.0], [93.8, 15872.0], [93.9, 15872.0], [94.0, 15873.0], [94.1, 15873.0], [94.2, 15874.0], [94.3, 15874.0], [94.4, 15874.0], [94.5, 15875.0], [94.6, 15875.0], [94.7, 15875.0], [94.8, 15875.0], [94.9, 15875.0], [95.0, 15875.0], [95.1, 15876.0], [95.2, 15876.0], [95.3, 15876.0], [95.4, 15877.0], [95.5, 15877.0], [95.6, 15877.0], [95.7, 15877.0], [95.8, 15878.0], [95.9, 15878.0], [96.0, 15879.0], [96.1, 15879.0], [96.2, 15879.0], [96.3, 15880.0], [96.4, 15880.0], [96.5, 15881.0], [96.6, 15884.0], [96.7, 15884.0], [96.8, 15885.0], [96.9, 15886.0], [97.0, 15889.0], [97.1, 15890.0], [97.2, 15891.0], [97.3, 15891.0], [97.4, 15892.0], [97.5, 15893.0], [97.6, 15893.0], [97.7, 15893.0], [97.8, 15894.0], [97.9, 15894.0], [98.0, 15894.0], [98.1, 15894.0], [98.2, 15898.0], [98.3, 15898.0], [98.4, 15899.0], [98.5, 15907.0], [98.6, 15908.0], [98.7, 15908.0], [98.8, 15908.0], [98.9, 15910.0], [99.0, 15910.0], [99.1, 15910.0], [99.2, 15911.0], [99.3, 15912.0], [99.4, 15912.0], [99.5, 15912.0], [99.6, 15913.0], [99.7, 15913.0], [99.8, 15913.0], [99.9, 15913.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 11300.0, "maxY": 228.0, "series": [{"data": [[11400.0, 9.0], [11300.0, 1.0], [11600.0, 10.0], [11500.0, 18.0], [11700.0, 18.0], [12100.0, 45.0], [12200.0, 69.0], [11900.0, 8.0], [12000.0, 13.0], [11800.0, 13.0], [12300.0, 100.0], [12400.0, 37.0], [12500.0, 40.0], [13000.0, 3.0], [13100.0, 1.0], [13300.0, 5.0], [12800.0, 1.0], [13200.0, 1.0], [13700.0, 4.0], [13800.0, 3.0], [13500.0, 14.0], [14100.0, 2.0], [13900.0, 2.0], [14300.0, 1.0], [14600.0, 73.0], [14500.0, 31.0], [14400.0, 6.0], [14700.0, 6.0], [14800.0, 1.0], [15300.0, 49.0], [14900.0, 3.0], [15000.0, 11.0], [15200.0, 22.0], [15100.0, 18.0], [15700.0, 37.0], [15800.0, 228.0], [15600.0, 66.0], [15500.0, 13.0], [15400.0, 3.0], [15900.0, 15.0]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 1.57139556E12, "maxY": 1000.0, "series": [{"data": [[1.57139556E12, 1000.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139556E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14145.363000000003, "minX": 1000.0, "maxY": 14145.363000000003, "series": [{"data": [[1000.0, 14145.363000000003]], "isOverall": false, "label": "Access Series Page", "isController": false}, {"data": [[1000.0, 14145.363000000003]], "isOverall": false, "label": "Access Series Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3733.3333333333335, "minX": 1.57139556E12, "maxY": 109583.33333333333, "series": [{"data": [[1.57139556E12, 109583.33333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57139556E12, 3733.3333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139556E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14145.363000000003, "minX": 1.57139556E12, "maxY": 14145.363000000003, "series": [{"data": [[1.57139556E12, 14145.363000000003]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139556E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13906.19999999999, "minX": 1.57139556E12, "maxY": 13906.19999999999, "series": [{"data": [[1.57139556E12, 13906.19999999999]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139556E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 8734.133000000002, "minX": 1.57139556E12, "maxY": 8734.133000000002, "series": [{"data": [[1.57139556E12, 8734.133000000002]], "isOverall": false, "label": "Access Series Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139556E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11344.0, "minX": 1.57139556E12, "maxY": 15913.0, "series": [{"data": [[1.57139556E12, 15913.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57139556E12, 11344.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57139556E12, 15854.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57139556E12, 15910.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57139556E12, 15875.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139556E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12259.0, "minX": 9.0, "maxY": 15836.0, "series": [{"data": [[9.0, 13750.0], [180.0, 14641.5], [379.0, 12259.0], [24.0, 13510.5], [408.0, 15836.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 408.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 11943.0, "minX": 9.0, "maxY": 15618.0, "series": [{"data": [[9.0, 12190.0], [180.0, 14641.5], [379.0, 11943.0], [24.0, 12933.0], [408.0, 15618.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 408.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139556E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139556E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139556E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139556E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139556E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57139556E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139556E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139556E12, 16.666666666666668]], "isOverall": false, "label": "Access Series Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139556E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.57139556E12, "maxY": 16.666666666666668, "series": [{"data": [[1.57139556E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57139556E12, "title": "Total Transactions Per Second"}},
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

