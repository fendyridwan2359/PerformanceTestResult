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
        data: {"result": {"minY": 3562.0, "minX": 0.0, "maxY": 4655.0, "series": [{"data": [[0.0, 3562.0], [0.1, 3562.0], [0.2, 3562.0], [0.3, 3562.0], [0.4, 3562.0], [0.5, 3562.0], [0.6, 3562.0], [0.7, 3563.0], [0.8, 3563.0], [0.9, 3563.0], [1.0, 3563.0], [1.1, 3563.0], [1.2, 3563.0], [1.3, 3563.0], [1.4, 3563.0], [1.5, 3563.0], [1.6, 3563.0], [1.7, 3563.0], [1.8, 3563.0], [1.9, 3563.0], [2.0, 3563.0], [2.1, 3563.0], [2.2, 3563.0], [2.3, 3563.0], [2.4, 3563.0], [2.5, 3563.0], [2.6, 3563.0], [2.7, 3563.0], [2.8, 3563.0], [2.9, 3563.0], [3.0, 3563.0], [3.1, 3563.0], [3.2, 3563.0], [3.3, 3563.0], [3.4, 3563.0], [3.5, 3563.0], [3.6, 3563.0], [3.7, 3563.0], [3.8, 3563.0], [3.9, 3563.0], [4.0, 3563.0], [4.1, 3563.0], [4.2, 3563.0], [4.3, 3563.0], [4.4, 3563.0], [4.5, 3563.0], [4.6, 3563.0], [4.7, 3563.0], [4.8, 3563.0], [4.9, 3563.0], [5.0, 3564.0], [5.1, 3564.0], [5.2, 3564.0], [5.3, 3564.0], [5.4, 3564.0], [5.5, 3564.0], [5.6, 3564.0], [5.7, 3564.0], [5.8, 3564.0], [5.9, 3564.0], [6.0, 3564.0], [6.1, 3564.0], [6.2, 3564.0], [6.3, 3564.0], [6.4, 3564.0], [6.5, 3564.0], [6.6, 3564.0], [6.7, 3564.0], [6.8, 3564.0], [6.9, 3564.0], [7.0, 3564.0], [7.1, 3564.0], [7.2, 3564.0], [7.3, 3564.0], [7.4, 3564.0], [7.5, 3564.0], [7.6, 3564.0], [7.7, 3564.0], [7.8, 3564.0], [7.9, 3564.0], [8.0, 3564.0], [8.1, 3564.0], [8.2, 3564.0], [8.3, 3564.0], [8.4, 3565.0], [8.5, 3565.0], [8.6, 3565.0], [8.7, 3565.0], [8.8, 3565.0], [8.9, 3565.0], [9.0, 3565.0], [9.1, 3565.0], [9.2, 3565.0], [9.3, 3565.0], [9.4, 3565.0], [9.5, 3565.0], [9.6, 3565.0], [9.7, 3565.0], [9.8, 3565.0], [9.9, 3565.0], [10.0, 3565.0], [10.1, 3565.0], [10.2, 3565.0], [10.3, 3565.0], [10.4, 3565.0], [10.5, 3565.0], [10.6, 3565.0], [10.7, 3565.0], [10.8, 3565.0], [10.9, 3565.0], [11.0, 3565.0], [11.1, 3565.0], [11.2, 3565.0], [11.3, 3565.0], [11.4, 3565.0], [11.5, 3565.0], [11.6, 3565.0], [11.7, 3565.0], [11.8, 3565.0], [11.9, 3565.0], [12.0, 3565.0], [12.1, 3565.0], [12.2, 3565.0], [12.3, 3565.0], [12.4, 3565.0], [12.5, 3565.0], [12.6, 3565.0], [12.7, 3565.0], [12.8, 3565.0], [12.9, 3565.0], [13.0, 3565.0], [13.1, 3565.0], [13.2, 3565.0], [13.3, 3565.0], [13.4, 3565.0], [13.5, 3565.0], [13.6, 3565.0], [13.7, 3565.0], [13.8, 3565.0], [13.9, 3565.0], [14.0, 3565.0], [14.1, 3565.0], [14.2, 3565.0], [14.3, 3565.0], [14.4, 3565.0], [14.5, 3565.0], [14.6, 3565.0], [14.7, 3565.0], [14.8, 3565.0], [14.9, 3565.0], [15.0, 3565.0], [15.1, 3565.0], [15.2, 3565.0], [15.3, 3565.0], [15.4, 3566.0], [15.5, 3566.0], [15.6, 3566.0], [15.7, 3566.0], [15.8, 3566.0], [15.9, 3566.0], [16.0, 3566.0], [16.1, 3566.0], [16.2, 3566.0], [16.3, 3566.0], [16.4, 3566.0], [16.5, 3566.0], [16.6, 3566.0], [16.7, 3566.0], [16.8, 3566.0], [16.9, 3566.0], [17.0, 3566.0], [17.1, 3566.0], [17.2, 3566.0], [17.3, 3566.0], [17.4, 3567.0], [17.5, 3567.0], [17.6, 3567.0], [17.7, 3567.0], [17.8, 3567.0], [17.9, 3567.0], [18.0, 3567.0], [18.1, 3567.0], [18.2, 3567.0], [18.3, 3567.0], [18.4, 3567.0], [18.5, 3567.0], [18.6, 3567.0], [18.7, 3568.0], [18.8, 3568.0], [18.9, 3568.0], [19.0, 3568.0], [19.1, 3568.0], [19.2, 3568.0], [19.3, 3568.0], [19.4, 3568.0], [19.5, 3568.0], [19.6, 3568.0], [19.7, 3568.0], [19.8, 3568.0], [19.9, 3568.0], [20.0, 3568.0], [20.1, 3568.0], [20.2, 3568.0], [20.3, 3568.0], [20.4, 3568.0], [20.5, 3568.0], [20.6, 3568.0], [20.7, 3568.0], [20.8, 3568.0], [20.9, 3568.0], [21.0, 3568.0], [21.1, 3568.0], [21.2, 3568.0], [21.3, 3568.0], [21.4, 3568.0], [21.5, 3568.0], [21.6, 3568.0], [21.7, 3568.0], [21.8, 3568.0], [21.9, 3568.0], [22.0, 3568.0], [22.1, 3568.0], [22.2, 3568.0], [22.3, 3568.0], [22.4, 3568.0], [22.5, 3568.0], [22.6, 3568.0], [22.7, 3568.0], [22.8, 3568.0], [22.9, 3568.0], [23.0, 3568.0], [23.1, 3568.0], [23.2, 3568.0], [23.3, 3568.0], [23.4, 3569.0], [23.5, 3569.0], [23.6, 3569.0], [23.7, 3569.0], [23.8, 3569.0], [23.9, 3569.0], [24.0, 3569.0], [24.1, 3569.0], [24.2, 3569.0], [24.3, 3569.0], [24.4, 3569.0], [24.5, 3569.0], [24.6, 3569.0], [24.7, 3569.0], [24.8, 3569.0], [24.9, 3569.0], [25.0, 3569.0], [25.1, 3569.0], [25.2, 3569.0], [25.3, 3569.0], [25.4, 3569.0], [25.5, 3569.0], [25.6, 3569.0], [25.7, 3569.0], [25.8, 3569.0], [25.9, 3569.0], [26.0, 3569.0], [26.1, 3569.0], [26.2, 3569.0], [26.3, 3569.0], [26.4, 3569.0], [26.5, 3569.0], [26.6, 3569.0], [26.7, 3569.0], [26.8, 3569.0], [26.9, 3569.0], [27.0, 3569.0], [27.1, 3569.0], [27.2, 3569.0], [27.3, 3569.0], [27.4, 3569.0], [27.5, 3569.0], [27.6, 3569.0], [27.7, 3569.0], [27.8, 3569.0], [27.9, 3569.0], [28.0, 3569.0], [28.1, 3569.0], [28.2, 3569.0], [28.3, 3569.0], [28.4, 3569.0], [28.5, 3569.0], [28.6, 3569.0], [28.7, 3569.0], [28.8, 3569.0], [28.9, 3569.0], [29.0, 3569.0], [29.1, 3569.0], [29.2, 3569.0], [29.3, 3569.0], [29.4, 3569.0], [29.5, 3569.0], [29.6, 3569.0], [29.7, 3570.0], [29.8, 3570.0], [29.9, 3570.0], [30.0, 3570.0], [30.1, 3570.0], [30.2, 3570.0], [30.3, 3570.0], [30.4, 3570.0], [30.5, 3570.0], [30.6, 3570.0], [30.7, 3570.0], [30.8, 3570.0], [30.9, 3570.0], [31.0, 3570.0], [31.1, 3570.0], [31.2, 3570.0], [31.3, 3570.0], [31.4, 3570.0], [31.5, 3570.0], [31.6, 3570.0], [31.7, 3570.0], [31.8, 3570.0], [31.9, 3570.0], [32.0, 3570.0], [32.1, 3570.0], [32.2, 3570.0], [32.3, 3570.0], [32.4, 3570.0], [32.5, 3570.0], [32.6, 3570.0], [32.7, 3570.0], [32.8, 3570.0], [32.9, 3570.0], [33.0, 3570.0], [33.1, 3570.0], [33.2, 3570.0], [33.3, 3570.0], [33.4, 3570.0], [33.5, 3570.0], [33.6, 3570.0], [33.7, 3570.0], [33.8, 3570.0], [33.9, 3570.0], [34.0, 3570.0], [34.1, 3570.0], [34.2, 3570.0], [34.3, 3570.0], [34.4, 3570.0], [34.5, 3570.0], [34.6, 3570.0], [34.7, 3570.0], [34.8, 3570.0], [34.9, 3570.0], [35.0, 3570.0], [35.1, 3570.0], [35.2, 3570.0], [35.3, 3570.0], [35.4, 3571.0], [35.5, 3571.0], [35.6, 3571.0], [35.7, 3571.0], [35.8, 3571.0], [35.9, 3571.0], [36.0, 3571.0], [36.1, 3571.0], [36.2, 3571.0], [36.3, 3571.0], [36.4, 3571.0], [36.5, 3571.0], [36.6, 3571.0], [36.7, 3571.0], [36.8, 3571.0], [36.9, 3571.0], [37.0, 3571.0], [37.1, 3571.0], [37.2, 3571.0], [37.3, 3571.0], [37.4, 3571.0], [37.5, 3571.0], [37.6, 3571.0], [37.7, 3571.0], [37.8, 3571.0], [37.9, 3571.0], [38.0, 3571.0], [38.1, 3571.0], [38.2, 3571.0], [38.3, 3571.0], [38.4, 3571.0], [38.5, 3571.0], [38.6, 3571.0], [38.7, 3571.0], [38.8, 3571.0], [38.9, 3571.0], [39.0, 3571.0], [39.1, 3571.0], [39.2, 3571.0], [39.3, 3571.0], [39.4, 3571.0], [39.5, 3571.0], [39.6, 3571.0], [39.7, 3571.0], [39.8, 3571.0], [39.9, 3571.0], [40.0, 3571.0], [40.1, 3571.0], [40.2, 3571.0], [40.3, 3571.0], [40.4, 3572.0], [40.5, 3572.0], [40.6, 3572.0], [40.7, 3572.0], [40.8, 3572.0], [40.9, 3572.0], [41.0, 3572.0], [41.1, 3572.0], [41.2, 3572.0], [41.3, 3572.0], [41.4, 3572.0], [41.5, 3572.0], [41.6, 3572.0], [41.7, 3572.0], [41.8, 3572.0], [41.9, 3572.0], [42.0, 3572.0], [42.1, 3572.0], [42.2, 3572.0], [42.3, 3572.0], [42.4, 3572.0], [42.5, 3572.0], [42.6, 3572.0], [42.7, 3572.0], [42.8, 3572.0], [42.9, 3572.0], [43.0, 3572.0], [43.1, 3572.0], [43.2, 3572.0], [43.3, 3572.0], [43.4, 3573.0], [43.5, 3573.0], [43.6, 3573.0], [43.7, 3573.0], [43.8, 3573.0], [43.9, 3573.0], [44.0, 3573.0], [44.1, 3573.0], [44.2, 3573.0], [44.3, 3573.0], [44.4, 3573.0], [44.5, 3573.0], [44.6, 3573.0], [44.7, 3573.0], [44.8, 3573.0], [44.9, 3573.0], [45.0, 3574.0], [45.1, 3574.0], [45.2, 3574.0], [45.3, 3574.0], [45.4, 3574.0], [45.5, 3574.0], [45.6, 3574.0], [45.7, 3574.0], [45.8, 3574.0], [45.9, 3574.0], [46.0, 3575.0], [46.1, 3575.0], [46.2, 3575.0], [46.3, 3575.0], [46.4, 3575.0], [46.5, 3575.0], [46.6, 3575.0], [46.7, 3576.0], [46.8, 3576.0], [46.9, 3576.0], [47.0, 3576.0], [47.1, 3576.0], [47.2, 3576.0], [47.3, 3576.0], [47.4, 3576.0], [47.5, 3576.0], [47.6, 3576.0], [47.7, 3577.0], [47.8, 3577.0], [47.9, 3577.0], [48.0, 3578.0], [48.1, 3578.0], [48.2, 3578.0], [48.3, 3578.0], [48.4, 4157.0], [48.5, 4157.0], [48.6, 4157.0], [48.7, 4168.0], [48.8, 4168.0], [48.9, 4168.0], [49.0, 4168.0], [49.1, 4169.0], [49.2, 4169.0], [49.3, 4169.0], [49.4, 4238.0], [49.5, 4238.0], [49.6, 4238.0], [49.7, 4240.0], [49.8, 4240.0], [49.9, 4240.0], [50.0, 4240.0], [50.1, 4242.0], [50.2, 4242.0], [50.3, 4242.0], [50.4, 4244.0], [50.5, 4244.0], [50.6, 4244.0], [50.7, 4244.0], [50.8, 4244.0], [50.9, 4244.0], [51.0, 4244.0], [51.1, 4245.0], [51.2, 4245.0], [51.3, 4245.0], [51.4, 4250.0], [51.5, 4250.0], [51.6, 4250.0], [51.7, 4253.0], [51.8, 4253.0], [51.9, 4253.0], [52.0, 4253.0], [52.1, 4254.0], [52.2, 4254.0], [52.3, 4254.0], [52.4, 4260.0], [52.5, 4260.0], [52.6, 4260.0], [52.7, 4261.0], [52.8, 4261.0], [52.9, 4261.0], [53.0, 4261.0], [53.1, 4264.0], [53.2, 4264.0], [53.3, 4264.0], [53.4, 4265.0], [53.5, 4265.0], [53.6, 4265.0], [53.7, 4268.0], [53.8, 4268.0], [53.9, 4268.0], [54.0, 4268.0], [54.1, 4285.0], [54.2, 4285.0], [54.3, 4285.0], [54.4, 4285.0], [54.5, 4285.0], [54.6, 4285.0], [54.7, 4286.0], [54.8, 4286.0], [54.9, 4286.0], [55.0, 4286.0], [55.1, 4286.0], [55.2, 4286.0], [55.3, 4286.0], [55.4, 4287.0], [55.5, 4287.0], [55.6, 4287.0], [55.7, 4293.0], [55.8, 4293.0], [55.9, 4293.0], [56.0, 4293.0], [56.1, 4298.0], [56.2, 4298.0], [56.3, 4298.0], [56.4, 4304.0], [56.5, 4304.0], [56.6, 4304.0], [56.7, 4311.0], [56.8, 4311.0], [56.9, 4311.0], [57.0, 4311.0], [57.1, 4313.0], [57.2, 4313.0], [57.3, 4313.0], [57.4, 4314.0], [57.5, 4314.0], [57.6, 4314.0], [57.7, 4320.0], [57.8, 4320.0], [57.9, 4320.0], [58.0, 4320.0], [58.1, 4324.0], [58.2, 4324.0], [58.3, 4324.0], [58.4, 4325.0], [58.5, 4325.0], [58.6, 4325.0], [58.7, 4326.0], [58.8, 4326.0], [58.9, 4326.0], [59.0, 4326.0], [59.1, 4326.0], [59.2, 4326.0], [59.3, 4326.0], [59.4, 4326.0], [59.5, 4326.0], [59.6, 4326.0], [59.7, 4328.0], [59.8, 4328.0], [59.9, 4328.0], [60.0, 4328.0], [60.1, 4328.0], [60.2, 4328.0], [60.3, 4328.0], [60.4, 4329.0], [60.5, 4329.0], [60.6, 4329.0], [60.7, 4331.0], [60.8, 4331.0], [60.9, 4331.0], [61.0, 4331.0], [61.1, 4331.0], [61.2, 4331.0], [61.3, 4331.0], [61.4, 4331.0], [61.5, 4331.0], [61.6, 4331.0], [61.7, 4331.0], [61.8, 4331.0], [61.9, 4331.0], [62.0, 4331.0], [62.1, 4332.0], [62.2, 4332.0], [62.3, 4332.0], [62.4, 4333.0], [62.5, 4333.0], [62.6, 4333.0], [62.7, 4336.0], [62.8, 4336.0], [62.9, 4336.0], [63.0, 4336.0], [63.1, 4336.0], [63.2, 4336.0], [63.3, 4336.0], [63.4, 4336.0], [63.5, 4336.0], [63.6, 4336.0], [63.7, 4337.0], [63.8, 4337.0], [63.9, 4337.0], [64.0, 4337.0], [64.1, 4338.0], [64.2, 4338.0], [64.3, 4338.0], [64.4, 4338.0], [64.5, 4338.0], [64.6, 4338.0], [64.7, 4338.0], [64.8, 4338.0], [64.9, 4338.0], [65.0, 4338.0], [65.1, 4342.0], [65.2, 4342.0], [65.3, 4342.0], [65.4, 4343.0], [65.5, 4343.0], [65.6, 4343.0], [65.7, 4344.0], [65.8, 4344.0], [65.9, 4344.0], [66.0, 4344.0], [66.1, 4344.0], [66.2, 4344.0], [66.3, 4344.0], [66.4, 4345.0], [66.5, 4345.0], [66.6, 4345.0], [66.7, 4345.0], [66.8, 4345.0], [66.9, 4345.0], [67.0, 4345.0], [67.1, 4347.0], [67.2, 4347.0], [67.3, 4347.0], [67.4, 4348.0], [67.5, 4348.0], [67.6, 4348.0], [67.7, 4349.0], [67.8, 4349.0], [67.9, 4349.0], [68.0, 4349.0], [68.1, 4350.0], [68.2, 4350.0], [68.3, 4350.0], [68.4, 4351.0], [68.5, 4351.0], [68.6, 4351.0], [68.7, 4354.0], [68.8, 4354.0], [68.9, 4354.0], [69.0, 4354.0], [69.1, 4354.0], [69.2, 4354.0], [69.3, 4354.0], [69.4, 4355.0], [69.5, 4355.0], [69.6, 4355.0], [69.7, 4355.0], [69.8, 4355.0], [69.9, 4355.0], [70.0, 4355.0], [70.1, 4357.0], [70.2, 4357.0], [70.3, 4357.0], [70.4, 4357.0], [70.5, 4357.0], [70.6, 4357.0], [70.7, 4358.0], [70.8, 4358.0], [70.9, 4358.0], [71.0, 4358.0], [71.1, 4359.0], [71.2, 4359.0], [71.3, 4359.0], [71.4, 4359.0], [71.5, 4359.0], [71.6, 4359.0], [71.7, 4359.0], [71.8, 4359.0], [71.9, 4359.0], [72.0, 4359.0], [72.1, 4359.0], [72.2, 4359.0], [72.3, 4359.0], [72.4, 4360.0], [72.5, 4360.0], [72.6, 4360.0], [72.7, 4360.0], [72.8, 4360.0], [72.9, 4360.0], [73.0, 4360.0], [73.1, 4362.0], [73.2, 4362.0], [73.3, 4362.0], [73.4, 4362.0], [73.5, 4362.0], [73.6, 4362.0], [73.7, 4364.0], [73.8, 4364.0], [73.9, 4364.0], [74.0, 4364.0], [74.1, 4364.0], [74.2, 4364.0], [74.3, 4364.0], [74.4, 4364.0], [74.5, 4364.0], [74.6, 4364.0], [74.7, 4364.0], [74.8, 4364.0], [74.9, 4364.0], [75.0, 4364.0], [75.1, 4365.0], [75.2, 4365.0], [75.3, 4365.0], [75.4, 4365.0], [75.5, 4365.0], [75.6, 4365.0], [75.7, 4367.0], [75.8, 4367.0], [75.9, 4367.0], [76.0, 4367.0], [76.1, 4367.0], [76.2, 4367.0], [76.3, 4367.0], [76.4, 4368.0], [76.5, 4368.0], [76.6, 4368.0], [76.7, 4368.0], [76.8, 4368.0], [76.9, 4368.0], [77.0, 4368.0], [77.1, 4368.0], [77.2, 4368.0], [77.3, 4368.0], [77.4, 4369.0], [77.5, 4369.0], [77.6, 4369.0], [77.7, 4369.0], [77.8, 4369.0], [77.9, 4369.0], [78.0, 4369.0], [78.1, 4374.0], [78.2, 4374.0], [78.3, 4374.0], [78.4, 4377.0], [78.5, 4377.0], [78.6, 4377.0], [78.7, 4377.0], [78.8, 4377.0], [78.9, 4377.0], [79.0, 4377.0], [79.1, 4379.0], [79.2, 4379.0], [79.3, 4379.0], [79.4, 4379.0], [79.5, 4379.0], [79.6, 4379.0], [79.7, 4380.0], [79.8, 4380.0], [79.9, 4380.0], [80.0, 4380.0], [80.1, 4380.0], [80.2, 4380.0], [80.3, 4380.0], [80.4, 4380.0], [80.5, 4380.0], [80.6, 4380.0], [80.7, 4381.0], [80.8, 4381.0], [80.9, 4381.0], [81.0, 4381.0], [81.1, 4381.0], [81.2, 4381.0], [81.3, 4381.0], [81.4, 4381.0], [81.5, 4381.0], [81.6, 4381.0], [81.7, 4382.0], [81.8, 4382.0], [81.9, 4382.0], [82.0, 4382.0], [82.1, 4382.0], [82.2, 4382.0], [82.3, 4382.0], [82.4, 4384.0], [82.5, 4384.0], [82.6, 4384.0], [82.7, 4385.0], [82.8, 4385.0], [82.9, 4385.0], [83.0, 4385.0], [83.1, 4385.0], [83.2, 4385.0], [83.3, 4385.0], [83.4, 4386.0], [83.5, 4386.0], [83.6, 4386.0], [83.7, 4386.0], [83.8, 4386.0], [83.9, 4386.0], [84.0, 4386.0], [84.1, 4387.0], [84.2, 4387.0], [84.3, 4387.0], [84.4, 4389.0], [84.5, 4389.0], [84.6, 4389.0], [84.7, 4403.0], [84.8, 4403.0], [84.9, 4403.0], [85.0, 4403.0], [85.1, 4404.0], [85.2, 4404.0], [85.3, 4404.0], [85.4, 4404.0], [85.5, 4404.0], [85.6, 4404.0], [85.7, 4405.0], [85.8, 4405.0], [85.9, 4405.0], [86.0, 4405.0], [86.1, 4406.0], [86.2, 4406.0], [86.3, 4406.0], [86.4, 4406.0], [86.5, 4406.0], [86.6, 4406.0], [86.7, 4408.0], [86.8, 4408.0], [86.9, 4408.0], [87.0, 4408.0], [87.1, 4408.0], [87.2, 4408.0], [87.3, 4408.0], [87.4, 4409.0], [87.5, 4409.0], [87.6, 4409.0], [87.7, 4409.0], [87.8, 4409.0], [87.9, 4409.0], [88.0, 4409.0], [88.1, 4411.0], [88.2, 4411.0], [88.3, 4411.0], [88.4, 4413.0], [88.5, 4413.0], [88.6, 4413.0], [88.7, 4425.0], [88.8, 4425.0], [88.9, 4425.0], [89.0, 4425.0], [89.1, 4425.0], [89.2, 4425.0], [89.3, 4425.0], [89.4, 4425.0], [89.5, 4425.0], [89.6, 4425.0], [89.7, 4426.0], [89.8, 4426.0], [89.9, 4426.0], [90.0, 4426.0], [90.1, 4426.0], [90.2, 4426.0], [90.3, 4426.0], [90.4, 4426.0], [90.5, 4426.0], [90.6, 4426.0], [90.7, 4426.0], [90.8, 4426.0], [90.9, 4426.0], [91.0, 4426.0], [91.1, 4427.0], [91.2, 4427.0], [91.3, 4427.0], [91.4, 4427.0], [91.5, 4427.0], [91.6, 4427.0], [91.7, 4427.0], [91.8, 4427.0], [91.9, 4427.0], [92.0, 4427.0], [92.1, 4427.0], [92.2, 4427.0], [92.3, 4427.0], [92.4, 4427.0], [92.5, 4427.0], [92.6, 4427.0], [92.7, 4430.0], [92.8, 4430.0], [92.9, 4430.0], [93.0, 4430.0], [93.1, 4432.0], [93.2, 4432.0], [93.3, 4432.0], [93.4, 4432.0], [93.5, 4432.0], [93.6, 4432.0], [93.7, 4433.0], [93.8, 4433.0], [93.9, 4433.0], [94.0, 4433.0], [94.1, 4433.0], [94.2, 4433.0], [94.3, 4433.0], [94.4, 4433.0], [94.5, 4433.0], [94.6, 4433.0], [94.7, 4433.0], [94.8, 4433.0], [94.9, 4433.0], [95.0, 4433.0], [95.1, 4433.0], [95.2, 4433.0], [95.3, 4433.0], [95.4, 4438.0], [95.5, 4438.0], [95.6, 4438.0], [95.7, 4448.0], [95.8, 4448.0], [95.9, 4448.0], [96.0, 4448.0], [96.1, 4449.0], [96.2, 4449.0], [96.3, 4449.0], [96.4, 4455.0], [96.5, 4455.0], [96.6, 4455.0], [96.7, 4518.0], [96.8, 4518.0], [96.9, 4518.0], [97.0, 4518.0], [97.1, 4519.0], [97.2, 4519.0], [97.3, 4519.0], [97.4, 4522.0], [97.5, 4522.0], [97.6, 4522.0], [97.7, 4522.0], [97.8, 4522.0], [97.9, 4522.0], [98.0, 4522.0], [98.1, 4523.0], [98.2, 4523.0], [98.3, 4523.0], [98.4, 4525.0], [98.5, 4525.0], [98.6, 4525.0], [98.7, 4538.0], [98.8, 4538.0], [98.9, 4538.0], [99.0, 4538.0], [99.1, 4604.0], [99.2, 4604.0], [99.3, 4604.0], [99.4, 4651.0], [99.5, 4651.0], [99.6, 4651.0], [99.7, 4655.0], [99.8, 4655.0], [99.9, 4655.0], [100.0, 4655.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 3500.0, "maxY": 145.0, "series": [{"data": [[4100.0, 3.0], [4200.0, 21.0], [4300.0, 85.0], [4400.0, 36.0], [4500.0, 7.0], [4600.0, 3.0], [3500.0, 145.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 300.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 300.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 300.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 188.48333333333332, "minX": 1.57173858E12, "maxY": 188.48333333333332, "series": [{"data": [[1.57173858E12, 188.48333333333332]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173858E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3568.2620689655178, "minX": 2.0, "maxY": 4653.0, "series": [{"data": [[2.0, 4653.0], [34.0, 4429.095238095238], [3.0, 4604.0], [57.0, 4396.173913043478], [61.0, 4379.0], [63.0, 4381.0], [62.0, 4381.0], [65.0, 4380.0], [64.0, 4376.5], [4.0, 4538.0], [86.0, 4360.666666666667], [84.0, 4365.625], [91.0, 4358.5], [89.0, 4368.0], [88.0, 4355.333333333333], [92.0, 4358.5], [103.0, 4351.0], [104.0, 4347.0], [127.0, 4324.0], [124.0, 4332.649999999998], [134.0, 4290.333333333333], [131.0, 4304.0], [130.0, 4311.0], [129.0, 4313.5], [141.0, 4268.0], [140.0, 4264.0], [139.0, 4265.0], [138.0, 4285.5], [136.0, 4289.0], [151.0, 4241.333333333333], [148.0, 4246.333333333333], [145.0, 4257.0], [155.0, 4157.0], [154.0, 4168.5], [152.0, 4240.0], [10.0, 4521.5], [13.0, 4450.666666666667], [300.0, 3568.2620689655178]], "isOverall": false, "label": "Search Video", "isController": false}, {"data": [[188.48333333333332, 3981.21]], "isOverall": false, "label": "Search Video-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1530.0, "minX": 1.57173858E12, "maxY": 39955.13333333333, "series": [{"data": [[1.57173858E12, 39955.13333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57173858E12, 1530.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173858E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3981.21, "minX": 1.57173858E12, "maxY": 3981.21, "series": [{"data": [[1.57173858E12, 3981.21]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173858E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3613.690000000001, "minX": 1.57173858E12, "maxY": 3613.690000000001, "series": [{"data": [[1.57173858E12, 3613.690000000001]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173858E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2730.483333333332, "minX": 1.57173858E12, "maxY": 2730.483333333332, "series": [{"data": [[1.57173858E12, 2730.483333333332]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173858E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3562.0, "minX": 1.57173858E12, "maxY": 4655.0, "series": [{"data": [[1.57173858E12, 4655.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57173858E12, 3562.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57173858E12, 4426.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57173858E12, 4603.34]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57173858E12, 4433.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173858E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3569.0, "minX": 145.0, "maxY": 4364.0, "series": [{"data": [[145.0, 3569.0], [155.0, 4364.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3507.0, "minX": 145.0, "maxY": 3509.0, "series": [{"data": [[145.0, 3507.0], [155.0, 3509.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173858E12, "maxY": 5.0, "series": [{"data": [[1.57173858E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173858E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173858E12, "maxY": 5.0, "series": [{"data": [[1.57173858E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173858E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173858E12, "maxY": 5.0, "series": [{"data": [[1.57173858E12, 5.0]], "isOverall": false, "label": "Search Video-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173858E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173858E12, "maxY": 5.0, "series": [{"data": [[1.57173858E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173858E12, "title": "Total Transactions Per Second"}},
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

