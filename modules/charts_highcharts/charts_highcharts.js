/**
 * @file
 * JavaScript integration between Highcharts and Backdrop CMS.
 */
(function ($) {

Backdrop.behaviors.chartsHighcharts = {};
Backdrop.behaviors.chartsHighcharts.attach = function(context, settings) {
  $('.charts-highchart').once('charts-highchart', function() {
    if ($(this).attr('data-chart')) {
      var config = $.parseJSON($(this).attr('data-chart'));
      $(this).highcharts(config);
    }
  });
};

})(jQuery);
