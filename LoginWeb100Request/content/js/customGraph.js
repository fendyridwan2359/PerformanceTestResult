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
    
        try{
        refreshcustom_ulp_avg_chunk_time(true);
    } catch(e){
        console.log(e);
    }    
    $(".portlet-header").css("cursor", "auto");
});

var responsecustom_ulp_avg_chunk_timeInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "elapsed", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Average Chunk Response Time in Millis", "X_Axis": "Elapsed Time (granularity: 1s)", "sample_Metric_Name": "elapsed", "Y_Axis": "Response Time (ms)", "content_Message": "Average Chunk time"}},
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
                axisLabel: 'Elapsed Time (granularity: 1s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Response Time (ms)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_avg_chunk_time'
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
                content: "%s : at %x Average Chunk time %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_avg_chunk_time"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_avg_chunk_time"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_avg_chunk_time"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_avg_chunk_time(fixTimestamps) {
    var infos = responsecustom_ulp_avg_chunk_timeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponsecustom_ulp_avg_chunk_time"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_avg_chunk_time");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_avg_chunk_time", "#overviewResponsecustom_ulp_avg_chunk_time");
        $('#footerResponsecustom_ulp_avg_chunk_time .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_avg_manifest_timeInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "elapsed", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Average Manifest Response Time in Millis", "X_Axis": "Elapsed Time (granularity: 1s)", "sample_Metric_Name": "elapsed", "Y_Axis": "Response Time (ms)", "content_Message": "Average Manifest time"}},
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
                axisLabel: 'Elapsed Time (granularity: 1s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Response Time (ms)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_avg_manifest_time'
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
                content: "%s : at %x Average Manifest time %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_avg_manifest_time"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_avg_manifest_time"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_avg_manifest_time"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_avg_manifest_time(fixTimestamps) {
    var infos = responsecustom_ulp_avg_manifest_timeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponsecustom_ulp_avg_manifest_time"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_avg_manifest_time");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_avg_manifest_time", "#overviewResponsecustom_ulp_avg_manifest_time");
        $('#footerResponsecustom_ulp_avg_manifest_time .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_buffer_fillInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_buffer_fill", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Buffer fill in Millis", "X_Axis": "Elapsed Time (granularity: 1s)", "sample_Metric_Name": "ulp_buffer_fill", "Y_Axis": "Buffer fill Time (ms)", "content_Message": "Time to buffer"}},
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
                axisLabel: 'Elapsed Time (granularity: 1s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Buffer fill Time (ms)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_buffer_fill'
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
                content: "%s : at %x Time to buffer %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_buffer_fill"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_buffer_fill"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_buffer_fill"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_buffer_fill(fixTimestamps) {
    var infos = responsecustom_ulp_buffer_fillInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponsecustom_ulp_buffer_fill"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_buffer_fill");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_buffer_fill", "#overviewResponsecustom_ulp_buffer_fill");
        $('#footerResponsecustom_ulp_buffer_fill .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_hitsInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_hits", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Number of Hits", "X_Axis": "Elapsed Time (granularity: 1s)", "sample_Metric_Name": "ulp_hits", "Y_Axis": "Number", "content_Message": "Hits"}},
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
                axisLabel: 'Elapsed Time (granularity: 1s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Number',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_hits'
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
                content: "%s : at %x Hits %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_hits"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_hits"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_hits"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_hits(fixTimestamps) {
    var infos = responsecustom_ulp_hitsInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponsecustom_ulp_hits"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_hits");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_hits", "#overviewResponsecustom_ulp_hits");
        $('#footerResponsecustom_ulp_hits .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_lag_ratioInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_lag_ratio", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Lag ratio in percentage", "X_Axis": "Elapsed Time (granularity: 1s)", "sample_Metric_Name": "ulp_lag_ratio", "Y_Axis": "Percentage", "content_Message": "Lag Ratio (%)"}},
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
                axisLabel: 'Elapsed Time (granularity: 1s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Percentage',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_lag_ratio'
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
                content: "%s : at %x Lag Ratio (%) %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_lag_ratio"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_lag_ratio"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_lag_ratio"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_lag_ratio(fixTimestamps) {
    var infos = responsecustom_ulp_lag_ratioInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponsecustom_ulp_lag_ratio"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_lag_ratio");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_lag_ratio", "#overviewResponsecustom_ulp_lag_ratio");
        $('#footerResponsecustom_ulp_lag_ratio .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};
var responsecustom_ulp_lag_timeInfos = {
    data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "ulp_lag_time", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Lag time in Millis", "X_Axis": "Elapsed Time (granularity: 1s)", "sample_Metric_Name": "ulp_lag_time", "Y_Axis": "Lag Time (ms)", "content_Message": "Lag time"}},
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
                axisLabel: 'Elapsed Time (granularity: 1s)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: 'Lag Time (ms)',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponsecustom_ulp_lag_time'
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
                content: "%s : at %x Lag time %y"
            }
        };
    },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponsecustom_ulp_lag_time"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponsecustom_ulp_lag_time"), dataset, options);
        // setup overview
        $.plot($("#overviewResponsecustom_ulp_lag_time"), dataset, prepareOverviewOptions(options));
    }
};

// Response Custom Graph
function refreshcustom_ulp_lag_time(fixTimestamps) {
    var infos = responsecustom_ulp_lag_timeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponsecustom_ulp_lag_time"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponsecustom_ulp_lag_time");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponsecustom_ulp_lag_time", "#overviewResponsecustom_ulp_lag_time");
        $('#footerResponsecustom_ulp_lag_time .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    }else{
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    
    if(elem.id == "bodyResponsecustom_ulp_avg_chunk_time"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_avg_chunk_time(true);
        }
            document.location.href="#custom_ulp_avg_chunk_time";
        }
    if(elem.id == "bodyResponsecustom_ulp_avg_manifest_time"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_avg_manifest_time(true);
        }
            document.location.href="#custom_ulp_avg_manifest_time";
        }
    if(elem.id == "bodyResponsecustom_ulp_buffer_fill"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_buffer_fill(true);
        }
            document.location.href="#custom_ulp_buffer_fill";
        }
    if(elem.id == "bodyResponsecustom_ulp_hits"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_hits(true);
        }
            document.location.href="#custom_ulp_hits";
        }
    if(elem.id == "bodyResponsecustom_ulp_lag_ratio"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_lag_ratio(true);
        }
            document.location.href="#custom_ulp_lag_ratio";
        }
    if(elem.id == "bodyResponsecustom_ulp_lag_time"){
        if (isGraph($(elem).find('.flot-chart-content')) == false) {
            refreshcustom_ulp_lag_time(true);
        }
            document.location.href="#custom_ulp_lag_time";
        }
    }
}

function toggleAll(id, checked){
    var placeholder = document.getElementById(id);
    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);
    var choiceContainer;
    
    if(id == "choicesResponsecustom_ulp_avg_chunk_time"){
        choiceContainer = $("#choicesResponsecustom_ulp_avg_chunk_time");
        refreshcustom_ulp_avg_chunk_time(false);
    }
    else if(id == "choicesResponsecustom_ulp_avg_manifest_time"){
        choiceContainer = $("#choicesResponsecustom_ulp_avg_manifest_time");
        refreshcustom_ulp_avg_manifest_time(false);
    }
    else if(id == "choicesResponsecustom_ulp_buffer_fill"){
        choiceContainer = $("#choicesResponsecustom_ulp_buffer_fill");
        refreshcustom_ulp_buffer_fill(false);
    }
    else if(id == "choicesResponsecustom_ulp_hits"){
        choiceContainer = $("#choicesResponsecustom_ulp_hits");
        refreshcustom_ulp_hits(false);
    }
    else if(id == "choicesResponsecustom_ulp_lag_ratio"){
        choiceContainer = $("#choicesResponsecustom_ulp_lag_ratio");
        refreshcustom_ulp_lag_ratio(false);
    }
    else if(id == "choicesResponsecustom_ulp_lag_time"){
        choiceContainer = $("#choicesResponsecustom_ulp_lag_time");
        refreshcustom_ulp_lag_time(false);
    }
}