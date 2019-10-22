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
        data: {"result": {"minY": 2841.0, "minX": 0.0, "maxY": 4368.0, "series": [{"data": [[0.0, 2841.0], [0.1, 2841.0], [0.2, 2841.0], [0.3, 2841.0], [0.4, 2850.0], [0.5, 2850.0], [0.6, 2850.0], [0.7, 2894.0], [0.8, 2894.0], [0.9, 2894.0], [1.0, 2907.0], [1.1, 2907.0], [1.2, 2907.0], [1.3, 2907.0], [1.4, 2911.0], [1.5, 2911.0], [1.6, 2911.0], [1.7, 2922.0], [1.8, 2922.0], [1.9, 2922.0], [2.0, 2937.0], [2.1, 2937.0], [2.2, 2937.0], [2.3, 2937.0], [2.4, 2946.0], [2.5, 2946.0], [2.6, 2946.0], [2.7, 2946.0], [2.8, 2946.0], [2.9, 2946.0], [3.0, 2955.0], [3.1, 2955.0], [3.2, 2955.0], [3.3, 2955.0], [3.4, 2956.0], [3.5, 2956.0], [3.6, 2956.0], [3.7, 2984.0], [3.8, 2984.0], [3.9, 2984.0], [4.0, 2992.0], [4.1, 2992.0], [4.2, 2992.0], [4.3, 2992.0], [4.4, 3003.0], [4.5, 3003.0], [4.6, 3003.0], [4.7, 3050.0], [4.8, 3050.0], [4.9, 3050.0], [5.0, 3054.0], [5.1, 3054.0], [5.2, 3054.0], [5.3, 3054.0], [5.4, 3074.0], [5.5, 3074.0], [5.6, 3074.0], [5.7, 3075.0], [5.8, 3075.0], [5.9, 3075.0], [6.0, 3088.0], [6.1, 3088.0], [6.2, 3088.0], [6.3, 3088.0], [6.4, 3093.0], [6.5, 3093.0], [6.6, 3093.0], [6.7, 3095.0], [6.8, 3095.0], [6.9, 3095.0], [7.0, 3096.0], [7.1, 3096.0], [7.2, 3096.0], [7.3, 3096.0], [7.4, 3102.0], [7.5, 3102.0], [7.6, 3102.0], [7.7, 3103.0], [7.8, 3103.0], [7.9, 3103.0], [8.0, 3110.0], [8.1, 3110.0], [8.2, 3110.0], [8.3, 3110.0], [8.4, 3112.0], [8.5, 3112.0], [8.6, 3112.0], [8.7, 3112.0], [8.8, 3112.0], [8.9, 3112.0], [9.0, 3142.0], [9.1, 3142.0], [9.2, 3142.0], [9.3, 3142.0], [9.4, 3142.0], [9.5, 3142.0], [9.6, 3142.0], [9.7, 3145.0], [9.8, 3145.0], [9.9, 3145.0], [10.0, 3150.0], [10.1, 3150.0], [10.2, 3150.0], [10.3, 3150.0], [10.4, 3162.0], [10.5, 3162.0], [10.6, 3162.0], [10.7, 3163.0], [10.8, 3163.0], [10.9, 3163.0], [11.0, 3164.0], [11.1, 3164.0], [11.2, 3164.0], [11.3, 3164.0], [11.4, 3170.0], [11.5, 3170.0], [11.6, 3170.0], [11.7, 3170.0], [11.8, 3170.0], [11.9, 3170.0], [12.0, 3174.0], [12.1, 3174.0], [12.2, 3174.0], [12.3, 3174.0], [12.4, 3174.0], [12.5, 3174.0], [12.6, 3174.0], [12.7, 3174.0], [12.8, 3174.0], [12.9, 3174.0], [13.0, 3175.0], [13.1, 3175.0], [13.2, 3175.0], [13.3, 3175.0], [13.4, 3175.0], [13.5, 3175.0], [13.6, 3175.0], [13.7, 3176.0], [13.8, 3176.0], [13.9, 3176.0], [14.0, 3176.0], [14.1, 3176.0], [14.2, 3176.0], [14.3, 3176.0], [14.4, 3176.0], [14.5, 3176.0], [14.6, 3176.0], [14.7, 3177.0], [14.8, 3177.0], [14.9, 3177.0], [15.0, 3178.0], [15.1, 3178.0], [15.2, 3178.0], [15.3, 3178.0], [15.4, 3179.0], [15.5, 3179.0], [15.6, 3179.0], [15.7, 3179.0], [15.8, 3179.0], [15.9, 3179.0], [16.0, 3179.0], [16.1, 3179.0], [16.2, 3179.0], [16.3, 3179.0], [16.4, 3181.0], [16.5, 3181.0], [16.6, 3181.0], [16.7, 3181.0], [16.8, 3181.0], [16.9, 3181.0], [17.0, 3182.0], [17.1, 3182.0], [17.2, 3182.0], [17.3, 3182.0], [17.4, 3184.0], [17.5, 3184.0], [17.6, 3184.0], [17.7, 3184.0], [17.8, 3184.0], [17.9, 3184.0], [18.0, 3185.0], [18.1, 3185.0], [18.2, 3185.0], [18.3, 3185.0], [18.4, 3187.0], [18.5, 3187.0], [18.6, 3187.0], [18.7, 3188.0], [18.8, 3188.0], [18.9, 3188.0], [19.0, 3193.0], [19.1, 3193.0], [19.2, 3193.0], [19.3, 3193.0], [19.4, 3199.0], [19.5, 3199.0], [19.6, 3199.0], [19.7, 3210.0], [19.8, 3210.0], [19.9, 3210.0], [20.0, 3214.0], [20.1, 3214.0], [20.2, 3214.0], [20.3, 3214.0], [20.4, 3214.0], [20.5, 3214.0], [20.6, 3214.0], [20.7, 3223.0], [20.8, 3223.0], [20.9, 3223.0], [21.0, 3227.0], [21.1, 3227.0], [21.2, 3227.0], [21.3, 3227.0], [21.4, 3227.0], [21.5, 3227.0], [21.6, 3227.0], [21.7, 3227.0], [21.8, 3227.0], [21.9, 3227.0], [22.0, 3228.0], [22.1, 3228.0], [22.2, 3228.0], [22.3, 3228.0], [22.4, 3229.0], [22.5, 3229.0], [22.6, 3229.0], [22.7, 3229.0], [22.8, 3229.0], [22.9, 3229.0], [23.0, 3229.0], [23.1, 3229.0], [23.2, 3229.0], [23.3, 3229.0], [23.4, 3229.0], [23.5, 3229.0], [23.6, 3229.0], [23.7, 3229.0], [23.8, 3229.0], [23.9, 3229.0], [24.0, 3229.0], [24.1, 3229.0], [24.2, 3229.0], [24.3, 3229.0], [24.4, 3230.0], [24.5, 3230.0], [24.6, 3230.0], [24.7, 3230.0], [24.8, 3230.0], [24.9, 3230.0], [25.0, 3230.0], [25.1, 3230.0], [25.2, 3230.0], [25.3, 3230.0], [25.4, 3232.0], [25.5, 3232.0], [25.6, 3232.0], [25.7, 3233.0], [25.8, 3233.0], [25.9, 3233.0], [26.0, 3233.0], [26.1, 3233.0], [26.2, 3233.0], [26.3, 3233.0], [26.4, 3234.0], [26.5, 3234.0], [26.6, 3234.0], [26.7, 3235.0], [26.8, 3235.0], [26.9, 3235.0], [27.0, 3235.0], [27.1, 3235.0], [27.2, 3235.0], [27.3, 3235.0], [27.4, 3235.0], [27.5, 3235.0], [27.6, 3235.0], [27.7, 3235.0], [27.8, 3235.0], [27.9, 3235.0], [28.0, 3235.0], [28.1, 3235.0], [28.2, 3235.0], [28.3, 3235.0], [28.4, 3235.0], [28.5, 3235.0], [28.6, 3235.0], [28.7, 3235.0], [28.8, 3235.0], [28.9, 3235.0], [29.0, 3236.0], [29.1, 3236.0], [29.2, 3236.0], [29.3, 3236.0], [29.4, 3236.0], [29.5, 3236.0], [29.6, 3236.0], [29.7, 3236.0], [29.8, 3236.0], [29.9, 3236.0], [30.0, 3236.0], [30.1, 3236.0], [30.2, 3236.0], [30.3, 3236.0], [30.4, 3236.0], [30.5, 3236.0], [30.6, 3236.0], [30.7, 3237.0], [30.8, 3237.0], [30.9, 3237.0], [31.0, 3237.0], [31.1, 3237.0], [31.2, 3237.0], [31.3, 3237.0], [31.4, 3237.0], [31.5, 3237.0], [31.6, 3237.0], [31.7, 3238.0], [31.8, 3238.0], [31.9, 3238.0], [32.0, 3238.0], [32.1, 3238.0], [32.2, 3238.0], [32.3, 3238.0], [32.4, 3240.0], [32.5, 3240.0], [32.6, 3240.0], [32.7, 3240.0], [32.8, 3240.0], [32.9, 3240.0], [33.0, 3240.0], [33.1, 3240.0], [33.2, 3240.0], [33.3, 3240.0], [33.4, 3241.0], [33.5, 3241.0], [33.6, 3241.0], [33.7, 3241.0], [33.8, 3241.0], [33.9, 3241.0], [34.0, 3242.0], [34.1, 3242.0], [34.2, 3242.0], [34.3, 3242.0], [34.4, 3242.0], [34.5, 3242.0], [34.6, 3242.0], [34.7, 3242.0], [34.8, 3242.0], [34.9, 3242.0], [35.0, 3242.0], [35.1, 3242.0], [35.2, 3242.0], [35.3, 3242.0], [35.4, 3243.0], [35.5, 3243.0], [35.6, 3243.0], [35.7, 3244.0], [35.8, 3244.0], [35.9, 3244.0], [36.0, 3245.0], [36.1, 3245.0], [36.2, 3245.0], [36.3, 3245.0], [36.4, 3246.0], [36.5, 3246.0], [36.6, 3246.0], [36.7, 3250.0], [36.8, 3250.0], [36.9, 3250.0], [37.0, 3252.0], [37.1, 3252.0], [37.2, 3252.0], [37.3, 3252.0], [37.4, 3255.0], [37.5, 3255.0], [37.6, 3255.0], [37.7, 3255.0], [37.8, 3255.0], [37.9, 3255.0], [38.0, 3255.0], [38.1, 3255.0], [38.2, 3255.0], [38.3, 3255.0], [38.4, 3257.0], [38.5, 3257.0], [38.6, 3257.0], [38.7, 3267.0], [38.8, 3267.0], [38.9, 3267.0], [39.0, 3267.0], [39.1, 3267.0], [39.2, 3267.0], [39.3, 3267.0], [39.4, 3267.0], [39.5, 3267.0], [39.6, 3267.0], [39.7, 3268.0], [39.8, 3268.0], [39.9, 3268.0], [40.0, 3268.0], [40.1, 3277.0], [40.2, 3277.0], [40.3, 3277.0], [40.4, 3281.0], [40.5, 3281.0], [40.6, 3281.0], [40.7, 3281.0], [40.8, 3281.0], [40.9, 3281.0], [41.0, 3281.0], [41.1, 3288.0], [41.2, 3288.0], [41.3, 3288.0], [41.4, 3296.0], [41.5, 3296.0], [41.6, 3296.0], [41.7, 3311.0], [41.8, 3311.0], [41.9, 3311.0], [42.0, 3311.0], [42.1, 3314.0], [42.2, 3314.0], [42.3, 3314.0], [42.4, 3376.0], [42.5, 3376.0], [42.6, 3376.0], [42.7, 3376.0], [42.8, 3376.0], [42.9, 3376.0], [43.0, 3376.0], [43.1, 3379.0], [43.2, 3379.0], [43.3, 3379.0], [43.4, 3382.0], [43.5, 3382.0], [43.6, 3382.0], [43.7, 3384.0], [43.8, 3384.0], [43.9, 3384.0], [44.0, 3384.0], [44.1, 3394.0], [44.2, 3394.0], [44.3, 3394.0], [44.4, 3399.0], [44.5, 3399.0], [44.6, 3399.0], [44.7, 3400.0], [44.8, 3400.0], [44.9, 3400.0], [45.0, 3400.0], [45.1, 3401.0], [45.2, 3401.0], [45.3, 3401.0], [45.4, 3406.0], [45.5, 3406.0], [45.6, 3406.0], [45.7, 3406.0], [45.8, 3406.0], [45.9, 3406.0], [46.0, 3406.0], [46.1, 3410.0], [46.2, 3410.0], [46.3, 3410.0], [46.4, 3410.0], [46.5, 3410.0], [46.6, 3410.0], [46.7, 3411.0], [46.8, 3411.0], [46.9, 3411.0], [47.0, 3411.0], [47.1, 3428.0], [47.2, 3428.0], [47.3, 3428.0], [47.4, 3430.0], [47.5, 3430.0], [47.6, 3430.0], [47.7, 3431.0], [47.8, 3431.0], [47.9, 3431.0], [48.0, 3431.0], [48.1, 3434.0], [48.2, 3434.0], [48.3, 3434.0], [48.4, 3435.0], [48.5, 3435.0], [48.6, 3435.0], [48.7, 3435.0], [48.8, 3435.0], [48.9, 3435.0], [49.0, 3435.0], [49.1, 3435.0], [49.2, 3435.0], [49.3, 3435.0], [49.4, 3435.0], [49.5, 3435.0], [49.6, 3435.0], [49.7, 3436.0], [49.8, 3436.0], [49.9, 3436.0], [50.0, 3436.0], [50.1, 3437.0], [50.2, 3437.0], [50.3, 3437.0], [50.4, 3437.0], [50.5, 3437.0], [50.6, 3437.0], [50.7, 3438.0], [50.8, 3438.0], [50.9, 3438.0], [51.0, 3438.0], [51.1, 3438.0], [51.2, 3438.0], [51.3, 3438.0], [51.4, 3439.0], [51.5, 3439.0], [51.6, 3439.0], [51.7, 3441.0], [51.8, 3441.0], [51.9, 3441.0], [52.0, 3441.0], [52.1, 3441.0], [52.2, 3441.0], [52.3, 3441.0], [52.4, 3441.0], [52.5, 3441.0], [52.6, 3441.0], [52.7, 3442.0], [52.8, 3442.0], [52.9, 3442.0], [53.0, 3442.0], [53.1, 3449.0], [53.2, 3449.0], [53.3, 3449.0], [53.4, 3456.0], [53.5, 3456.0], [53.6, 3456.0], [53.7, 3458.0], [53.8, 3458.0], [53.9, 3458.0], [54.0, 3458.0], [54.1, 3470.0], [54.2, 3470.0], [54.3, 3470.0], [54.4, 3472.0], [54.5, 3472.0], [54.6, 3472.0], [54.7, 3473.0], [54.8, 3473.0], [54.9, 3473.0], [55.0, 3473.0], [55.1, 3473.0], [55.2, 3473.0], [55.3, 3473.0], [55.4, 3474.0], [55.5, 3474.0], [55.6, 3474.0], [55.7, 3474.0], [55.8, 3474.0], [55.9, 3474.0], [56.0, 3474.0], [56.1, 3474.0], [56.2, 3474.0], [56.3, 3474.0], [56.4, 3475.0], [56.5, 3475.0], [56.6, 3475.0], [56.7, 3475.0], [56.8, 3475.0], [56.9, 3475.0], [57.0, 3475.0], [57.1, 3475.0], [57.2, 3475.0], [57.3, 3475.0], [57.4, 3475.0], [57.5, 3475.0], [57.6, 3475.0], [57.7, 3475.0], [57.8, 3475.0], [57.9, 3475.0], [58.0, 3475.0], [58.1, 3475.0], [58.2, 3475.0], [58.3, 3475.0], [58.4, 3476.0], [58.5, 3476.0], [58.6, 3476.0], [58.7, 3476.0], [58.8, 3476.0], [58.9, 3476.0], [59.0, 3476.0], [59.1, 3476.0], [59.2, 3476.0], [59.3, 3476.0], [59.4, 3477.0], [59.5, 3477.0], [59.6, 3477.0], [59.7, 3477.0], [59.8, 3477.0], [59.9, 3477.0], [60.0, 3477.0], [60.1, 3477.0], [60.2, 3477.0], [60.3, 3477.0], [60.4, 3477.0], [60.5, 3477.0], [60.6, 3477.0], [60.7, 3478.0], [60.8, 3478.0], [60.9, 3478.0], [61.0, 3478.0], [61.1, 3478.0], [61.2, 3478.0], [61.3, 3478.0], [61.4, 3478.0], [61.5, 3478.0], [61.6, 3478.0], [61.7, 3479.0], [61.8, 3479.0], [61.9, 3479.0], [62.0, 3479.0], [62.1, 3479.0], [62.2, 3479.0], [62.3, 3479.0], [62.4, 3479.0], [62.5, 3479.0], [62.6, 3479.0], [62.7, 3479.0], [62.8, 3479.0], [62.9, 3479.0], [63.0, 3479.0], [63.1, 3480.0], [63.2, 3480.0], [63.3, 3480.0], [63.4, 3480.0], [63.5, 3480.0], [63.6, 3480.0], [63.7, 3480.0], [63.8, 3480.0], [63.9, 3480.0], [64.0, 3480.0], [64.1, 3482.0], [64.2, 3482.0], [64.3, 3482.0], [64.4, 3483.0], [64.5, 3483.0], [64.6, 3483.0], [64.7, 3484.0], [64.8, 3484.0], [64.9, 3484.0], [65.0, 3484.0], [65.1, 3486.0], [65.2, 3486.0], [65.3, 3486.0], [65.4, 3488.0], [65.5, 3488.0], [65.6, 3488.0], [65.7, 3491.0], [65.8, 3491.0], [65.9, 3491.0], [66.0, 3491.0], [66.1, 3491.0], [66.2, 3491.0], [66.3, 3491.0], [66.4, 3492.0], [66.5, 3492.0], [66.6, 3492.0], [66.7, 3492.0], [66.8, 3492.0], [66.9, 3492.0], [67.0, 3492.0], [67.1, 3503.0], [67.2, 3503.0], [67.3, 3503.0], [67.4, 3507.0], [67.5, 3507.0], [67.6, 3507.0], [67.7, 3508.0], [67.8, 3508.0], [67.9, 3508.0], [68.0, 3508.0], [68.1, 3510.0], [68.2, 3510.0], [68.3, 3510.0], [68.4, 3512.0], [68.5, 3512.0], [68.6, 3512.0], [68.7, 3517.0], [68.8, 3517.0], [68.9, 3517.0], [69.0, 3517.0], [69.1, 3550.0], [69.2, 3550.0], [69.3, 3550.0], [69.4, 3550.0], [69.5, 3550.0], [69.6, 3550.0], [69.7, 3551.0], [69.8, 3551.0], [69.9, 3551.0], [70.0, 3551.0], [70.1, 3552.0], [70.2, 3552.0], [70.3, 3552.0], [70.4, 3552.0], [70.5, 3552.0], [70.6, 3552.0], [70.7, 3553.0], [70.8, 3553.0], [70.9, 3553.0], [71.0, 3553.0], [71.1, 3554.0], [71.2, 3554.0], [71.3, 3554.0], [71.4, 3554.0], [71.5, 3554.0], [71.6, 3554.0], [71.7, 3554.0], [71.8, 3554.0], [71.9, 3554.0], [72.0, 3554.0], [72.1, 3555.0], [72.2, 3555.0], [72.3, 3555.0], [72.4, 3555.0], [72.5, 3555.0], [72.6, 3555.0], [72.7, 3555.0], [72.8, 3555.0], [72.9, 3555.0], [73.0, 3555.0], [73.1, 3555.0], [73.2, 3555.0], [73.3, 3555.0], [73.4, 3555.0], [73.5, 3555.0], [73.6, 3555.0], [73.7, 3556.0], [73.8, 3556.0], [73.9, 3556.0], [74.0, 3556.0], [74.1, 3556.0], [74.2, 3556.0], [74.3, 3556.0], [74.4, 3556.0], [74.5, 3556.0], [74.6, 3556.0], [74.7, 3556.0], [74.8, 3556.0], [74.9, 3556.0], [75.0, 3556.0], [75.1, 3556.0], [75.2, 3556.0], [75.3, 3556.0], [75.4, 3557.0], [75.5, 3557.0], [75.6, 3557.0], [75.7, 3557.0], [75.8, 3557.0], [75.9, 3557.0], [76.0, 3557.0], [76.1, 3557.0], [76.2, 3557.0], [76.3, 3557.0], [76.4, 3557.0], [76.5, 3557.0], [76.6, 3557.0], [76.7, 3557.0], [76.8, 3557.0], [76.9, 3557.0], [77.0, 3557.0], [77.1, 3557.0], [77.2, 3557.0], [77.3, 3557.0], [77.4, 3558.0], [77.5, 3558.0], [77.6, 3558.0], [77.7, 3558.0], [77.8, 3558.0], [77.9, 3558.0], [78.0, 3558.0], [78.1, 3558.0], [78.2, 3558.0], [78.3, 3558.0], [78.4, 3558.0], [78.5, 3558.0], [78.6, 3558.0], [78.7, 3559.0], [78.8, 3559.0], [78.9, 3559.0], [79.0, 3559.0], [79.1, 3559.0], [79.2, 3559.0], [79.3, 3559.0], [79.4, 3559.0], [79.5, 3559.0], [79.6, 3559.0], [79.7, 3560.0], [79.8, 3560.0], [79.9, 3560.0], [80.0, 3560.0], [80.1, 3560.0], [80.2, 3560.0], [80.3, 3560.0], [80.4, 3560.0], [80.5, 3560.0], [80.6, 3560.0], [80.7, 3560.0], [80.8, 3560.0], [80.9, 3560.0], [81.0, 3560.0], [81.1, 3560.0], [81.2, 3560.0], [81.3, 3560.0], [81.4, 3562.0], [81.5, 3562.0], [81.6, 3562.0], [81.7, 3566.0], [81.8, 3566.0], [81.9, 3566.0], [82.0, 3566.0], [82.1, 3566.0], [82.2, 3566.0], [82.3, 3566.0], [82.4, 3567.0], [82.5, 3567.0], [82.6, 3567.0], [82.7, 3567.0], [82.8, 3567.0], [82.9, 3567.0], [83.0, 3567.0], [83.1, 3569.0], [83.2, 3569.0], [83.3, 3569.0], [83.4, 3570.0], [83.5, 3570.0], [83.6, 3570.0], [83.7, 3570.0], [83.8, 3570.0], [83.9, 3570.0], [84.0, 3570.0], [84.1, 3571.0], [84.2, 3571.0], [84.3, 3571.0], [84.4, 3572.0], [84.5, 3572.0], [84.6, 3572.0], [84.7, 3572.0], [84.8, 3572.0], [84.9, 3572.0], [85.0, 3572.0], [85.1, 3572.0], [85.2, 3572.0], [85.3, 3572.0], [85.4, 3573.0], [85.5, 3573.0], [85.6, 3573.0], [85.7, 3573.0], [85.8, 3573.0], [85.9, 3573.0], [86.0, 3573.0], [86.1, 3573.0], [86.2, 3573.0], [86.3, 3573.0], [86.4, 3573.0], [86.5, 3573.0], [86.6, 3573.0], [86.7, 3573.0], [86.8, 3573.0], [86.9, 3573.0], [87.0, 3573.0], [87.1, 3574.0], [87.2, 3574.0], [87.3, 3574.0], [87.4, 3574.0], [87.5, 3574.0], [87.6, 3574.0], [87.7, 3574.0], [87.8, 3574.0], [87.9, 3574.0], [88.0, 3574.0], [88.1, 3575.0], [88.2, 3575.0], [88.3, 3575.0], [88.4, 3575.0], [88.5, 3575.0], [88.6, 3575.0], [88.7, 3575.0], [88.8, 3575.0], [88.9, 3575.0], [89.0, 3575.0], [89.1, 3576.0], [89.2, 3576.0], [89.3, 3576.0], [89.4, 3576.0], [89.5, 3576.0], [89.6, 3576.0], [89.7, 3576.0], [89.8, 3576.0], [89.9, 3576.0], [90.0, 3576.0], [90.1, 3576.0], [90.2, 3576.0], [90.3, 3576.0], [90.4, 3576.0], [90.5, 3576.0], [90.6, 3576.0], [90.7, 3577.0], [90.8, 3577.0], [90.9, 3577.0], [91.0, 3577.0], [91.1, 3577.0], [91.2, 3577.0], [91.3, 3577.0], [91.4, 3578.0], [91.5, 3578.0], [91.6, 3578.0], [91.7, 3579.0], [91.8, 3579.0], [91.9, 3579.0], [92.0, 3579.0], [92.1, 3579.0], [92.2, 3579.0], [92.3, 3579.0], [92.4, 3579.0], [92.5, 3579.0], [92.6, 3579.0], [92.7, 3580.0], [92.8, 3580.0], [92.9, 3580.0], [93.0, 3580.0], [93.1, 3581.0], [93.2, 3581.0], [93.3, 3581.0], [93.4, 3581.0], [93.5, 3581.0], [93.6, 3581.0], [93.7, 3581.0], [93.8, 3581.0], [93.9, 3581.0], [94.0, 3581.0], [94.1, 3581.0], [94.2, 3581.0], [94.3, 3581.0], [94.4, 3582.0], [94.5, 3582.0], [94.6, 3582.0], [94.7, 3582.0], [94.8, 3582.0], [94.9, 3582.0], [95.0, 3582.0], [95.1, 3582.0], [95.2, 3582.0], [95.3, 3582.0], [95.4, 3585.0], [95.5, 3585.0], [95.6, 3585.0], [95.7, 3585.0], [95.8, 3585.0], [95.9, 3585.0], [96.0, 3585.0], [96.1, 3586.0], [96.2, 3586.0], [96.3, 3586.0], [96.4, 3588.0], [96.5, 3588.0], [96.6, 3588.0], [96.7, 3589.0], [96.8, 3589.0], [96.9, 3589.0], [97.0, 3589.0], [97.1, 3589.0], [97.2, 3589.0], [97.3, 3589.0], [97.4, 3591.0], [97.5, 3591.0], [97.6, 3591.0], [97.7, 3592.0], [97.8, 3592.0], [97.9, 3592.0], [98.0, 3592.0], [98.1, 3593.0], [98.2, 3593.0], [98.3, 3593.0], [98.4, 3595.0], [98.5, 3595.0], [98.6, 3595.0], [98.7, 3612.0], [98.8, 3612.0], [98.9, 3612.0], [99.0, 3625.0], [99.1, 3625.0], [99.2, 3625.0], [99.3, 3625.0], [99.4, 3650.0], [99.5, 3650.0], [99.6, 3650.0], [99.7, 4368.0], [99.8, 4368.0], [99.9, 4368.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2800.0, "maxY": 95.0, "series": [{"data": [[4300.0, 1.0], [2800.0, 3.0], [2900.0, 10.0], [3000.0, 9.0], [3100.0, 37.0], [3200.0, 66.0], [3300.0, 9.0], [3400.0, 67.0], [3500.0, 95.0], [3600.0, 3.0]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 224.9799999999999, "minX": 1.57173882E12, "maxY": 224.9799999999999, "series": [{"data": [[1.57173882E12, 224.9799999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173882E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3166.2596153846143, "minX": 1.0, "maxY": 4368.0, "series": [{"data": [[8.0, 3461.5], [1.0, 4368.0], [300.0, 3166.2596153846143], [11.0, 3637.5], [191.0, 3495.1840490797545], [196.0, 3381.538461538462], [12.0, 3593.0], [14.0, 3595.0]], "isOverall": false, "label": "Search Video", "isController": false}, {"data": [[224.9799999999999, 3375.6]], "isOverall": false, "label": "Search Video-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1530.0, "minX": 1.57173882E12, "maxY": 40010.0, "series": [{"data": [[1.57173882E12, 40010.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57173882E12, 1530.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173882E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3375.6, "minX": 1.57173882E12, "maxY": 3375.6, "series": [{"data": [[1.57173882E12, 3375.6]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173882E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3265.4899999999993, "minX": 1.57173882E12, "maxY": 3265.4899999999993, "series": [{"data": [[1.57173882E12, 3265.4899999999993]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173882E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2441.2999999999997, "minX": 1.57173882E12, "maxY": 2441.2999999999997, "series": [{"data": [[1.57173882E12, 2441.2999999999997]], "isOverall": false, "label": "Search Video", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173882E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2841.0, "minX": 1.57173882E12, "maxY": 4368.0, "series": [{"data": [[1.57173882E12, 4368.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57173882E12, 2841.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57173882E12, 3576.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57173882E12, 3624.87]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57173882E12, 3582.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173882E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3182.0, "minX": 1.0, "maxY": 4368.0, "series": [{"data": [[1.0, 4368.0], [59.0, 3182.0], [240.0, 3477.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 240.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3063.0, "minX": 1.0, "maxY": 3258.0, "series": [{"data": [[1.0, 3063.0], [59.0, 3181.0], [240.0, 3258.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 240.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173882E12, "maxY": 5.0, "series": [{"data": [[1.57173882E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173882E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173882E12, "maxY": 5.0, "series": [{"data": [[1.57173882E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57173882E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173882E12, "maxY": 5.0, "series": [{"data": [[1.57173882E12, 5.0]], "isOverall": false, "label": "Search Video-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173882E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.57173882E12, "maxY": 5.0, "series": [{"data": [[1.57173882E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57173882E12, "title": "Total Transactions Per Second"}},
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

