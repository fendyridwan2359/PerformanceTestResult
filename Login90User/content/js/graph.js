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
        data: {"result": {"minY": 7191.0, "minX": 0.0, "maxY": 11320.0, "series": [{"data": [[0.0, 7191.0], [0.1, 7191.0], [0.2, 7191.0], [0.3, 7191.0], [0.4, 7191.0], [0.5, 7191.0], [0.6, 7191.0], [0.7, 7191.0], [0.8, 7191.0], [0.9, 7191.0], [1.0, 7191.0], [1.1, 7191.0], [1.2, 7227.0], [1.3, 7227.0], [1.4, 7227.0], [1.5, 7227.0], [1.6, 7227.0], [1.7, 7227.0], [1.8, 7227.0], [1.9, 7227.0], [2.0, 7227.0], [2.1, 7227.0], [2.2, 7227.0], [2.3, 7294.0], [2.4, 7294.0], [2.5, 7294.0], [2.6, 7294.0], [2.7, 7294.0], [2.8, 7294.0], [2.9, 7294.0], [3.0, 7294.0], [3.1, 7294.0], [3.2, 7294.0], [3.3, 7294.0], [3.4, 7317.0], [3.5, 7317.0], [3.6, 7317.0], [3.7, 7317.0], [3.8, 7317.0], [3.9, 7317.0], [4.0, 7317.0], [4.1, 7317.0], [4.2, 7317.0], [4.3, 7317.0], [4.4, 7317.0], [4.5, 7321.0], [4.6, 7321.0], [4.7, 7321.0], [4.8, 7321.0], [4.9, 7321.0], [5.0, 7321.0], [5.1, 7321.0], [5.2, 7321.0], [5.3, 7321.0], [5.4, 7321.0], [5.5, 7321.0], [5.6, 7375.0], [5.7, 7375.0], [5.8, 7375.0], [5.9, 7375.0], [6.0, 7375.0], [6.1, 7375.0], [6.2, 7375.0], [6.3, 7375.0], [6.4, 7375.0], [6.5, 7375.0], [6.6, 7375.0], [6.7, 7392.0], [6.8, 7392.0], [6.9, 7392.0], [7.0, 7392.0], [7.1, 7392.0], [7.2, 7392.0], [7.3, 7392.0], [7.4, 7392.0], [7.5, 7392.0], [7.6, 7392.0], [7.7, 7392.0], [7.8, 7401.0], [7.9, 7401.0], [8.0, 7401.0], [8.1, 7401.0], [8.2, 7401.0], [8.3, 7401.0], [8.4, 7401.0], [8.5, 7401.0], [8.6, 7401.0], [8.7, 7401.0], [8.8, 7401.0], [8.9, 7420.0], [9.0, 7420.0], [9.1, 7420.0], [9.2, 7420.0], [9.3, 7420.0], [9.4, 7420.0], [9.5, 7420.0], [9.6, 7420.0], [9.7, 7420.0], [9.8, 7420.0], [9.9, 7420.0], [10.0, 7426.0], [10.1, 7426.0], [10.2, 7426.0], [10.3, 7426.0], [10.4, 7426.0], [10.5, 7426.0], [10.6, 7426.0], [10.7, 7426.0], [10.8, 7426.0], [10.9, 7426.0], [11.0, 7426.0], [11.1, 7426.0], [11.2, 7434.0], [11.3, 7434.0], [11.4, 7434.0], [11.5, 7434.0], [11.6, 7434.0], [11.7, 7434.0], [11.8, 7434.0], [11.9, 7434.0], [12.0, 7434.0], [12.1, 7434.0], [12.2, 7434.0], [12.3, 7440.0], [12.4, 7440.0], [12.5, 7440.0], [12.6, 7440.0], [12.7, 7440.0], [12.8, 7440.0], [12.9, 7440.0], [13.0, 7440.0], [13.1, 7440.0], [13.2, 7440.0], [13.3, 7440.0], [13.4, 7450.0], [13.5, 7450.0], [13.6, 7450.0], [13.7, 7450.0], [13.8, 7450.0], [13.9, 7450.0], [14.0, 7450.0], [14.1, 7450.0], [14.2, 7450.0], [14.3, 7450.0], [14.4, 7450.0], [14.5, 7455.0], [14.6, 7455.0], [14.7, 7455.0], [14.8, 7455.0], [14.9, 7455.0], [15.0, 7455.0], [15.1, 7455.0], [15.2, 7455.0], [15.3, 7455.0], [15.4, 7455.0], [15.5, 7455.0], [15.6, 7497.0], [15.7, 7497.0], [15.8, 7497.0], [15.9, 7497.0], [16.0, 7497.0], [16.1, 7497.0], [16.2, 7497.0], [16.3, 7497.0], [16.4, 7497.0], [16.5, 7497.0], [16.6, 7497.0], [16.7, 7548.0], [16.8, 7548.0], [16.9, 7548.0], [17.0, 7548.0], [17.1, 7548.0], [17.2, 7548.0], [17.3, 7548.0], [17.4, 7548.0], [17.5, 7548.0], [17.6, 7548.0], [17.7, 7548.0], [17.8, 7548.0], [17.9, 7548.0], [18.0, 7548.0], [18.1, 7548.0], [18.2, 7548.0], [18.3, 7548.0], [18.4, 7548.0], [18.5, 7548.0], [18.6, 7548.0], [18.7, 7548.0], [18.8, 7548.0], [18.9, 7558.0], [19.0, 7558.0], [19.1, 7558.0], [19.2, 7558.0], [19.3, 7558.0], [19.4, 7558.0], [19.5, 7558.0], [19.6, 7558.0], [19.7, 7558.0], [19.8, 7558.0], [19.9, 7558.0], [20.0, 7570.0], [20.1, 7570.0], [20.2, 7570.0], [20.3, 7570.0], [20.4, 7570.0], [20.5, 7570.0], [20.6, 7570.0], [20.7, 7570.0], [20.8, 7570.0], [20.9, 7570.0], [21.0, 7570.0], [21.1, 7570.0], [21.2, 7589.0], [21.3, 7589.0], [21.4, 7589.0], [21.5, 7589.0], [21.6, 7589.0], [21.7, 7589.0], [21.8, 7589.0], [21.9, 7589.0], [22.0, 7589.0], [22.1, 7589.0], [22.2, 7589.0], [22.3, 7609.0], [22.4, 7609.0], [22.5, 7609.0], [22.6, 7609.0], [22.7, 7609.0], [22.8, 7609.0], [22.9, 7609.0], [23.0, 7609.0], [23.1, 7609.0], [23.2, 7609.0], [23.3, 7609.0], [23.4, 7725.0], [23.5, 7725.0], [23.6, 7725.0], [23.7, 7725.0], [23.8, 7725.0], [23.9, 7725.0], [24.0, 7725.0], [24.1, 7725.0], [24.2, 7725.0], [24.3, 7725.0], [24.4, 7725.0], [24.5, 7775.0], [24.6, 7775.0], [24.7, 7775.0], [24.8, 7775.0], [24.9, 7775.0], [25.0, 7775.0], [25.1, 7775.0], [25.2, 7775.0], [25.3, 7775.0], [25.4, 7775.0], [25.5, 7775.0], [25.6, 7802.0], [25.7, 7802.0], [25.8, 7802.0], [25.9, 7802.0], [26.0, 7802.0], [26.1, 7802.0], [26.2, 7802.0], [26.3, 7802.0], [26.4, 7802.0], [26.5, 7802.0], [26.6, 7802.0], [26.7, 7848.0], [26.8, 7848.0], [26.9, 7848.0], [27.0, 7848.0], [27.1, 7848.0], [27.2, 7848.0], [27.3, 7848.0], [27.4, 7848.0], [27.5, 7848.0], [27.6, 7848.0], [27.7, 7848.0], [27.8, 7850.0], [27.9, 7850.0], [28.0, 7850.0], [28.1, 7850.0], [28.2, 7850.0], [28.3, 7850.0], [28.4, 7850.0], [28.5, 7850.0], [28.6, 7850.0], [28.7, 7850.0], [28.8, 7850.0], [28.9, 7924.0], [29.0, 7924.0], [29.1, 7924.0], [29.2, 7924.0], [29.3, 7924.0], [29.4, 7924.0], [29.5, 7924.0], [29.6, 7924.0], [29.7, 7924.0], [29.8, 7924.0], [29.9, 7924.0], [30.0, 8026.0], [30.1, 8026.0], [30.2, 8026.0], [30.3, 8026.0], [30.4, 8026.0], [30.5, 8026.0], [30.6, 8026.0], [30.7, 8026.0], [30.8, 8026.0], [30.9, 8026.0], [31.0, 8026.0], [31.1, 8026.0], [31.2, 8035.0], [31.3, 8035.0], [31.4, 8035.0], [31.5, 8035.0], [31.6, 8035.0], [31.7, 8035.0], [31.8, 8035.0], [31.9, 8035.0], [32.0, 8035.0], [32.1, 8035.0], [32.2, 8035.0], [32.3, 8082.0], [32.4, 8082.0], [32.5, 8082.0], [32.6, 8082.0], [32.7, 8082.0], [32.8, 8082.0], [32.9, 8082.0], [33.0, 8082.0], [33.1, 8082.0], [33.2, 8082.0], [33.3, 8082.0], [33.4, 8117.0], [33.5, 8117.0], [33.6, 8117.0], [33.7, 8117.0], [33.8, 8117.0], [33.9, 8117.0], [34.0, 8117.0], [34.1, 8117.0], [34.2, 8117.0], [34.3, 8117.0], [34.4, 8117.0], [34.5, 8167.0], [34.6, 8167.0], [34.7, 8167.0], [34.8, 8167.0], [34.9, 8167.0], [35.0, 8167.0], [35.1, 8167.0], [35.2, 8167.0], [35.3, 8167.0], [35.4, 8167.0], [35.5, 8167.0], [35.6, 8170.0], [35.7, 8170.0], [35.8, 8170.0], [35.9, 8170.0], [36.0, 8170.0], [36.1, 8170.0], [36.2, 8170.0], [36.3, 8170.0], [36.4, 8170.0], [36.5, 8170.0], [36.6, 8170.0], [36.7, 8184.0], [36.8, 8184.0], [36.9, 8184.0], [37.0, 8184.0], [37.1, 8184.0], [37.2, 8184.0], [37.3, 8184.0], [37.4, 8184.0], [37.5, 8184.0], [37.6, 8184.0], [37.7, 8184.0], [37.8, 8211.0], [37.9, 8211.0], [38.0, 8211.0], [38.1, 8211.0], [38.2, 8211.0], [38.3, 8211.0], [38.4, 8211.0], [38.5, 8211.0], [38.6, 8211.0], [38.7, 8211.0], [38.8, 8211.0], [38.9, 8278.0], [39.0, 8278.0], [39.1, 8278.0], [39.2, 8278.0], [39.3, 8278.0], [39.4, 8278.0], [39.5, 8278.0], [39.6, 8278.0], [39.7, 8278.0], [39.8, 8278.0], [39.9, 8278.0], [40.0, 8278.0], [40.1, 8461.0], [40.2, 8461.0], [40.3, 8461.0], [40.4, 8461.0], [40.5, 8461.0], [40.6, 8461.0], [40.7, 8461.0], [40.8, 8461.0], [40.9, 8461.0], [41.0, 8461.0], [41.1, 8461.0], [41.2, 8529.0], [41.3, 8529.0], [41.4, 8529.0], [41.5, 8529.0], [41.6, 8529.0], [41.7, 8529.0], [41.8, 8529.0], [41.9, 8529.0], [42.0, 8529.0], [42.1, 8529.0], [42.2, 8529.0], [42.3, 8561.0], [42.4, 8561.0], [42.5, 8561.0], [42.6, 8561.0], [42.7, 8561.0], [42.8, 8561.0], [42.9, 8561.0], [43.0, 8561.0], [43.1, 8561.0], [43.2, 8561.0], [43.3, 8561.0], [43.4, 8621.0], [43.5, 8621.0], [43.6, 8621.0], [43.7, 8621.0], [43.8, 8621.0], [43.9, 8621.0], [44.0, 8621.0], [44.1, 8621.0], [44.2, 8621.0], [44.3, 8621.0], [44.4, 8621.0], [44.5, 8647.0], [44.6, 8647.0], [44.7, 8647.0], [44.8, 8647.0], [44.9, 8647.0], [45.0, 8647.0], [45.1, 8647.0], [45.2, 8647.0], [45.3, 8647.0], [45.4, 8647.0], [45.5, 8647.0], [45.6, 8843.0], [45.7, 8843.0], [45.8, 8843.0], [45.9, 8843.0], [46.0, 8843.0], [46.1, 8843.0], [46.2, 8843.0], [46.3, 8843.0], [46.4, 8843.0], [46.5, 8843.0], [46.6, 8843.0], [46.7, 8867.0], [46.8, 8867.0], [46.9, 8867.0], [47.0, 8867.0], [47.1, 8867.0], [47.2, 8867.0], [47.3, 8867.0], [47.4, 8867.0], [47.5, 8867.0], [47.6, 8867.0], [47.7, 8867.0], [47.8, 8876.0], [47.9, 8876.0], [48.0, 8876.0], [48.1, 8876.0], [48.2, 8876.0], [48.3, 8876.0], [48.4, 8876.0], [48.5, 8876.0], [48.6, 8876.0], [48.7, 8876.0], [48.8, 8876.0], [48.9, 8888.0], [49.0, 8888.0], [49.1, 8888.0], [49.2, 8888.0], [49.3, 8888.0], [49.4, 8888.0], [49.5, 8888.0], [49.6, 8888.0], [49.7, 8888.0], [49.8, 8888.0], [49.9, 8888.0], [50.0, 8888.0], [50.1, 8914.0], [50.2, 8914.0], [50.3, 8914.0], [50.4, 8914.0], [50.5, 8914.0], [50.6, 8914.0], [50.7, 8914.0], [50.8, 8914.0], [50.9, 8914.0], [51.0, 8914.0], [51.1, 8914.0], [51.2, 8991.0], [51.3, 8991.0], [51.4, 8991.0], [51.5, 8991.0], [51.6, 8991.0], [51.7, 8991.0], [51.8, 8991.0], [51.9, 8991.0], [52.0, 8991.0], [52.1, 8991.0], [52.2, 8991.0], [52.3, 9043.0], [52.4, 9043.0], [52.5, 9043.0], [52.6, 9043.0], [52.7, 9043.0], [52.8, 9043.0], [52.9, 9043.0], [53.0, 9043.0], [53.1, 9043.0], [53.2, 9043.0], [53.3, 9043.0], [53.4, 9131.0], [53.5, 9131.0], [53.6, 9131.0], [53.7, 9131.0], [53.8, 9131.0], [53.9, 9131.0], [54.0, 9131.0], [54.1, 9131.0], [54.2, 9131.0], [54.3, 9131.0], [54.4, 9131.0], [54.5, 9148.0], [54.6, 9148.0], [54.7, 9148.0], [54.8, 9148.0], [54.9, 9148.0], [55.0, 9148.0], [55.1, 9148.0], [55.2, 9148.0], [55.3, 9148.0], [55.4, 9148.0], [55.5, 9148.0], [55.6, 9161.0], [55.7, 9161.0], [55.8, 9161.0], [55.9, 9161.0], [56.0, 9161.0], [56.1, 9161.0], [56.2, 9161.0], [56.3, 9161.0], [56.4, 9161.0], [56.5, 9161.0], [56.6, 9161.0], [56.7, 9203.0], [56.8, 9203.0], [56.9, 9203.0], [57.0, 9203.0], [57.1, 9203.0], [57.2, 9203.0], [57.3, 9203.0], [57.4, 9203.0], [57.5, 9203.0], [57.6, 9203.0], [57.7, 9203.0], [57.8, 9227.0], [57.9, 9227.0], [58.0, 9227.0], [58.1, 9227.0], [58.2, 9227.0], [58.3, 9227.0], [58.4, 9227.0], [58.5, 9227.0], [58.6, 9227.0], [58.7, 9227.0], [58.8, 9227.0], [58.9, 9231.0], [59.0, 9231.0], [59.1, 9231.0], [59.2, 9231.0], [59.3, 9231.0], [59.4, 9231.0], [59.5, 9231.0], [59.6, 9231.0], [59.7, 9231.0], [59.8, 9231.0], [59.9, 9231.0], [60.0, 9231.0], [60.1, 9255.0], [60.2, 9255.0], [60.3, 9255.0], [60.4, 9255.0], [60.5, 9255.0], [60.6, 9255.0], [60.7, 9255.0], [60.8, 9255.0], [60.9, 9255.0], [61.0, 9255.0], [61.1, 9255.0], [61.2, 9322.0], [61.3, 9322.0], [61.4, 9322.0], [61.5, 9322.0], [61.6, 9322.0], [61.7, 9322.0], [61.8, 9322.0], [61.9, 9322.0], [62.0, 9322.0], [62.1, 9322.0], [62.2, 9322.0], [62.3, 9484.0], [62.4, 9484.0], [62.5, 9484.0], [62.6, 9484.0], [62.7, 9484.0], [62.8, 9484.0], [62.9, 9484.0], [63.0, 9484.0], [63.1, 9484.0], [63.2, 9484.0], [63.3, 9484.0], [63.4, 9543.0], [63.5, 9543.0], [63.6, 9543.0], [63.7, 9543.0], [63.8, 9543.0], [63.9, 9543.0], [64.0, 9543.0], [64.1, 9543.0], [64.2, 9543.0], [64.3, 9543.0], [64.4, 9543.0], [64.5, 9547.0], [64.6, 9547.0], [64.7, 9547.0], [64.8, 9547.0], [64.9, 9547.0], [65.0, 9547.0], [65.1, 9547.0], [65.2, 9547.0], [65.3, 9547.0], [65.4, 9547.0], [65.5, 9547.0], [65.6, 9582.0], [65.7, 9582.0], [65.8, 9582.0], [65.9, 9582.0], [66.0, 9582.0], [66.1, 9582.0], [66.2, 9582.0], [66.3, 9582.0], [66.4, 9582.0], [66.5, 9582.0], [66.6, 9582.0], [66.7, 9665.0], [66.8, 9665.0], [66.9, 9665.0], [67.0, 9665.0], [67.1, 9665.0], [67.2, 9665.0], [67.3, 9665.0], [67.4, 9665.0], [67.5, 9665.0], [67.6, 9665.0], [67.7, 9665.0], [67.8, 9745.0], [67.9, 9745.0], [68.0, 9745.0], [68.1, 9745.0], [68.2, 9745.0], [68.3, 9745.0], [68.4, 9745.0], [68.5, 9745.0], [68.6, 9745.0], [68.7, 9745.0], [68.8, 9745.0], [68.9, 9779.0], [69.0, 9779.0], [69.1, 9779.0], [69.2, 9779.0], [69.3, 9779.0], [69.4, 9779.0], [69.5, 9779.0], [69.6, 9779.0], [69.7, 9779.0], [69.8, 9779.0], [69.9, 9779.0], [70.0, 9779.0], [70.1, 9840.0], [70.2, 9840.0], [70.3, 9840.0], [70.4, 9840.0], [70.5, 9840.0], [70.6, 9840.0], [70.7, 9840.0], [70.8, 9840.0], [70.9, 9840.0], [71.0, 9840.0], [71.1, 9840.0], [71.2, 9851.0], [71.3, 9851.0], [71.4, 9851.0], [71.5, 9851.0], [71.6, 9851.0], [71.7, 9851.0], [71.8, 9851.0], [71.9, 9851.0], [72.0, 9851.0], [72.1, 9851.0], [72.2, 9851.0], [72.3, 9886.0], [72.4, 9886.0], [72.5, 9886.0], [72.6, 9886.0], [72.7, 9886.0], [72.8, 9886.0], [72.9, 9886.0], [73.0, 9886.0], [73.1, 9886.0], [73.2, 9886.0], [73.3, 9886.0], [73.4, 9899.0], [73.5, 9899.0], [73.6, 9899.0], [73.7, 9899.0], [73.8, 9899.0], [73.9, 9899.0], [74.0, 9899.0], [74.1, 9899.0], [74.2, 9899.0], [74.3, 9899.0], [74.4, 9899.0], [74.5, 9982.0], [74.6, 9982.0], [74.7, 9982.0], [74.8, 9982.0], [74.9, 9982.0], [75.0, 9982.0], [75.1, 9982.0], [75.2, 9982.0], [75.3, 9982.0], [75.4, 9982.0], [75.5, 9982.0], [75.6, 10010.0], [75.7, 10010.0], [75.8, 10010.0], [75.9, 10010.0], [76.0, 10010.0], [76.1, 10010.0], [76.2, 10010.0], [76.3, 10010.0], [76.4, 10010.0], [76.5, 10010.0], [76.6, 10010.0], [76.7, 10110.0], [76.8, 10110.0], [76.9, 10110.0], [77.0, 10110.0], [77.1, 10110.0], [77.2, 10110.0], [77.3, 10110.0], [77.4, 10110.0], [77.5, 10110.0], [77.6, 10110.0], [77.7, 10110.0], [77.8, 10214.0], [77.9, 10214.0], [78.0, 10214.0], [78.1, 10214.0], [78.2, 10214.0], [78.3, 10214.0], [78.4, 10214.0], [78.5, 10214.0], [78.6, 10214.0], [78.7, 10214.0], [78.8, 10214.0], [78.9, 10334.0], [79.0, 10334.0], [79.1, 10334.0], [79.2, 10334.0], [79.3, 10334.0], [79.4, 10334.0], [79.5, 10334.0], [79.6, 10334.0], [79.7, 10334.0], [79.8, 10334.0], [79.9, 10334.0], [80.0, 10334.0], [80.1, 10495.0], [80.2, 10495.0], [80.3, 10495.0], [80.4, 10495.0], [80.5, 10495.0], [80.6, 10495.0], [80.7, 10495.0], [80.8, 10495.0], [80.9, 10495.0], [81.0, 10495.0], [81.1, 10495.0], [81.2, 10546.0], [81.3, 10546.0], [81.4, 10546.0], [81.5, 10546.0], [81.6, 10546.0], [81.7, 10546.0], [81.8, 10546.0], [81.9, 10546.0], [82.0, 10546.0], [82.1, 10546.0], [82.2, 10546.0], [82.3, 10611.0], [82.4, 10611.0], [82.5, 10611.0], [82.6, 10611.0], [82.7, 10611.0], [82.8, 10611.0], [82.9, 10611.0], [83.0, 10611.0], [83.1, 10611.0], [83.2, 10611.0], [83.3, 10611.0], [83.4, 10757.0], [83.5, 10757.0], [83.6, 10757.0], [83.7, 10757.0], [83.8, 10757.0], [83.9, 10757.0], [84.0, 10757.0], [84.1, 10757.0], [84.2, 10757.0], [84.3, 10757.0], [84.4, 10757.0], [84.5, 10795.0], [84.6, 10795.0], [84.7, 10795.0], [84.8, 10795.0], [84.9, 10795.0], [85.0, 10795.0], [85.1, 10795.0], [85.2, 10795.0], [85.3, 10795.0], [85.4, 10795.0], [85.5, 10795.0], [85.6, 10812.0], [85.7, 10812.0], [85.8, 10812.0], [85.9, 10812.0], [86.0, 10812.0], [86.1, 10812.0], [86.2, 10812.0], [86.3, 10812.0], [86.4, 10812.0], [86.5, 10812.0], [86.6, 10812.0], [86.7, 10865.0], [86.8, 10865.0], [86.9, 10865.0], [87.0, 10865.0], [87.1, 10865.0], [87.2, 10865.0], [87.3, 10865.0], [87.4, 10865.0], [87.5, 10865.0], [87.6, 10865.0], [87.7, 10865.0], [87.8, 10901.0], [87.9, 10901.0], [88.0, 10901.0], [88.1, 10901.0], [88.2, 10901.0], [88.3, 10901.0], [88.4, 10901.0], [88.5, 10901.0], [88.6, 10901.0], [88.7, 10901.0], [88.8, 10901.0], [88.9, 11012.0], [89.0, 11012.0], [89.1, 11012.0], [89.2, 11012.0], [89.3, 11012.0], [89.4, 11012.0], [89.5, 11012.0], [89.6, 11012.0], [89.7, 11012.0], [89.8, 11012.0], [89.9, 11012.0], [90.0, 11012.0], [90.1, 11064.0], [90.2, 11064.0], [90.3, 11064.0], [90.4, 11064.0], [90.5, 11064.0], [90.6, 11064.0], [90.7, 11064.0], [90.8, 11064.0], [90.9, 11064.0], [91.0, 11064.0], [91.1, 11064.0], [91.2, 11082.0], [91.3, 11082.0], [91.4, 11082.0], [91.5, 11082.0], [91.6, 11082.0], [91.7, 11082.0], [91.8, 11082.0], [91.9, 11082.0], [92.0, 11082.0], [92.1, 11082.0], [92.2, 11082.0], [92.3, 11086.0], [92.4, 11086.0], [92.5, 11086.0], [92.6, 11086.0], [92.7, 11086.0], [92.8, 11086.0], [92.9, 11086.0], [93.0, 11086.0], [93.1, 11086.0], [93.2, 11086.0], [93.3, 11086.0], [93.4, 11182.0], [93.5, 11182.0], [93.6, 11182.0], [93.7, 11182.0], [93.8, 11182.0], [93.9, 11182.0], [94.0, 11182.0], [94.1, 11182.0], [94.2, 11182.0], [94.3, 11182.0], [94.4, 11182.0], [94.5, 11212.0], [94.6, 11212.0], [94.7, 11212.0], [94.8, 11212.0], [94.9, 11212.0], [95.0, 11212.0], [95.1, 11212.0], [95.2, 11212.0], [95.3, 11212.0], [95.4, 11212.0], [95.5, 11212.0], [95.6, 11282.0], [95.7, 11282.0], [95.8, 11282.0], [95.9, 11282.0], [96.0, 11282.0], [96.1, 11282.0], [96.2, 11282.0], [96.3, 11282.0], [96.4, 11282.0], [96.5, 11282.0], [96.6, 11282.0], [96.7, 11282.0], [96.8, 11282.0], [96.9, 11282.0], [97.0, 11282.0], [97.1, 11282.0], [97.2, 11282.0], [97.3, 11282.0], [97.4, 11282.0], [97.5, 11282.0], [97.6, 11282.0], [97.7, 11282.0], [97.8, 11283.0], [97.9, 11283.0], [98.0, 11283.0], [98.1, 11283.0], [98.2, 11283.0], [98.3, 11283.0], [98.4, 11283.0], [98.5, 11283.0], [98.6, 11283.0], [98.7, 11283.0], [98.8, 11283.0], [98.9, 11320.0], [99.0, 11320.0], [99.1, 11320.0], [99.2, 11320.0], [99.3, 11320.0], [99.4, 11320.0], [99.5, 11320.0], [99.6, 11320.0], [99.7, 11320.0], [99.8, 11320.0], [99.9, 11320.0], [100.0, 11320.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7100.0, "maxY": 8.0, "series": [{"data": [[8200.0, 2.0], [8500.0, 2.0], [8600.0, 2.0], [8400.0, 1.0], [8800.0, 4.0], [8900.0, 2.0], [9100.0, 3.0], [9200.0, 4.0], [9000.0, 1.0], [9300.0, 1.0], [9500.0, 3.0], [9400.0, 1.0], [9600.0, 1.0], [9700.0, 2.0], [9800.0, 4.0], [10200.0, 1.0], [9900.0, 1.0], [10000.0, 1.0], [10100.0, 1.0], [10300.0, 1.0], [10500.0, 1.0], [10400.0, 1.0], [10700.0, 2.0], [10600.0, 1.0], [10900.0, 1.0], [10800.0, 2.0], [11000.0, 4.0], [11100.0, 1.0], [11200.0, 4.0], [11300.0, 1.0], [7100.0, 1.0], [7200.0, 2.0], [7300.0, 4.0], [7400.0, 8.0], [7500.0, 5.0], [7600.0, 1.0], [7700.0, 2.0], [7800.0, 3.0], [7900.0, 1.0], [8000.0, 3.0], [8100.0, 4.0]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 90.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 90.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 90.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 45.71111111111113, "minX": 1.57171776E12, "maxY": 45.71111111111113, "series": [{"data": [[1.57171776E12, 45.71111111111113]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171776E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7227.0, "minX": 1.0, "maxY": 11320.0, "series": [{"data": [[5.0, 11264.75], [8.0, 10757.0], [9.0, 11109.333333333334], [10.0, 11086.0], [11.0, 11012.0], [13.0, 10838.5], [14.0, 10901.0], [15.0, 10611.0], [16.0, 10795.0], [17.0, 10495.0], [18.0, 10546.0], [19.0, 10334.0], [20.0, 10110.0], [21.0, 10010.0], [22.0, 9982.0], [23.0, 10214.0], [24.0, 9899.0], [25.0, 9779.0], [26.0, 9851.0], [27.0, 9886.0], [28.0, 9745.0], [29.0, 9547.0], [30.0, 9840.0], [31.0, 9665.0], [33.0, 9484.0], [32.0, 9543.0], [35.0, 9203.0], [34.0, 9582.0], [37.0, 9043.0], [36.0, 9131.0], [39.0, 9255.0], [38.0, 9161.0], [41.0, 8914.0], [40.0, 9227.0], [43.0, 8888.0], [42.0, 9322.0], [45.0, 9148.0], [44.0, 9231.0], [46.0, 8561.0], [49.0, 8867.0], [48.0, 8819.0], [51.0, 8876.0], [50.0, 8843.0], [53.0, 8167.0], [52.0, 8211.0], [55.0, 8621.0], [54.0, 8461.0], [57.0, 8184.0], [56.0, 8529.0], [59.0, 7850.0], [58.0, 8026.0], [61.0, 8278.0], [60.0, 8035.0], [63.0, 7775.0], [62.0, 8170.0], [67.0, 7924.0], [66.0, 7609.0], [65.0, 8082.0], [64.0, 8117.0], [71.0, 7725.0], [70.0, 7802.0], [69.0, 7848.0], [68.0, 7317.0], [75.0, 7497.0], [74.0, 7548.0], [73.0, 7390.0], [79.0, 7474.5], [77.0, 7558.0], [76.0, 7570.0], [81.0, 7455.0], [80.0, 7294.0], [86.0, 7426.0], [85.0, 7440.0], [84.0, 7401.666666666667], [90.0, 7227.0], [89.0, 7392.0], [88.0, 7397.5], [1.0, 11320.0]], "isOverall": false, "label": "Login into Web", "isController": false}, {"data": [[45.71111111111113, 9002.588888888891]], "isOverall": false, "label": "Login into Web-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 90.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 775.7833333333333, "minX": 1.57171776E12, "maxY": 2414.016666666667, "series": [{"data": [[1.57171776E12, 2414.016666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57171776E12, 775.7833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171776E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9002.588888888891, "minX": 1.57171776E12, "maxY": 9002.588888888891, "series": [{"data": [[1.57171776E12, 9002.588888888891]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171776E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8904.822222222223, "minX": 1.57171776E12, "maxY": 8904.822222222223, "series": [{"data": [[1.57171776E12, 8904.822222222223]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171776E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1024.7999999999997, "minX": 1.57171776E12, "maxY": 1024.7999999999997, "series": [{"data": [[1.57171776E12, 1024.7999999999997]], "isOverall": false, "label": "Login into Web", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171776E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7191.0, "minX": 1.57171776E12, "maxY": 11320.0, "series": [{"data": [[1.57171776E12, 11320.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57171776E12, 7191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57171776E12, 11058.800000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57171776E12, 11320.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57171776E12, 11243.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171776E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 7452.5, "minX": 9.0, "maxY": 11212.0, "series": [{"data": [[17.0, 10495.0], [9.0, 11212.0], [19.0, 8901.0], [26.0, 7452.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 7353.5, "minX": 9.0, "maxY": 11112.0, "series": [{"data": [[17.0, 10398.0], [9.0, 11112.0], [19.0, 8801.0], [26.0, 7353.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 26.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.57171776E12, "maxY": 1.5, "series": [{"data": [[1.57171776E12, 1.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171776E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.57171776E12, "maxY": 1.5, "series": [{"data": [[1.57171776E12, 1.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57171776E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.57171776E12, "maxY": 1.5, "series": [{"data": [[1.57171776E12, 1.5]], "isOverall": false, "label": "Login into Web-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171776E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.57171776E12, "maxY": 1.5, "series": [{"data": [[1.57171776E12, 1.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57171776E12, "title": "Total Transactions Per Second"}},
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

