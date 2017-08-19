define('modules/js/main', function(require, exports, module) {

  //index
  'use strict';
  
  var index = {
  	init: function init(num) {
  		require(['modules/js/jquery'], function ($) {
  			$(document).ready(function () {
  				var index = 0;
  				var index_time = null;
  				var index_dywidth = $(".dynamic_list_box").width();
  				function index_move() {
  					$('.dynamic_list').stop().animate({
  						left: -(index_dywidth + 50) * index + "px"
  					}, 500);
  				}
  				index_move();
  				function index_showTime() {
  					index_time = setInterval(function () {
  						index++;
  						if (index > $('.dynamic_list li').length / 2 - 1) {
  							index = 0;
  						}
  						index_move();
  					}, 2000);
  				}
  				index_showTime();
  				$('.cli_l').click(function () {
  					if (index < 1) {
  						index = $('.dynamic_list li').length / 2 - 1;
  					} else {
  						index--;
  					}
  					index_move();
  				});
  				$('.cli_r').click(function () {
  					index++;
  					if (index > $('.dynamic_list li').length / 2 - 1) {
  						index = 0;
  					}
  					index_move();
  				});
  				$(".dynamic_list_box").mouseover(function () {
  					clearInterval(index_time);
  				}).mouseleave(function () {
  					index_showTime();
  				});
  
  				var inde = 0;
  				$('.cli_le').click(function () {
  					if (inde < 1) {
  						return;
  					} else {
  						inde--;
  						$('.company_list').animate({
  							left: -($('.company_list li').width() + 43) * inde + "px"
  						});
  					}
  				});
  				$('.cli_ri').click(function () {
  					if (inde + 3 < $('.company_list li').length - 1) {
  						inde++;
  						$('.company_list').animate({
  							left: -($('.company_list li').width() + 43) * inde + "px"
  						});
  					}
  				});
  			});
  		});
  	}
  };
  //about
  var about = {
  	init: function init(num) {
  		require(['modules/js/jquery'], function ($) {
  			$(document).ready(function () {
  				// console.log(num)
  			});
  		});
  	}
  };
  
  //guide
  var guide = {
  	init: function init(num) {
  		require(['modules/js/jquery'], function ($) {
  			$(document).ready(function () {
  				var index = 0,
  				    len = $('.btn').length;
  				$('.pics').css({ width: 619 * len + 'px' });
  				function show() {
  					$('.pics').stop().animate({ left: -619 * index + 'px' });
  					$('.btn').eq(index).find('.btn_pic01').hide();
  					$('.btn').eq(index).find('.btn_pic02').show();
  					$('.btn').eq(index).siblings().find('.btn_pic01').show();
  					$('.btn').eq(index).siblings().find('.btn_pic02').hide();
  				}
  				show();
  				$('.btn').click(function () {
  					index = $(this).index();
  					show();
  				});
  			});
  		});
  	}
  };
  
  exports.index = index;
  exports.about = about;
  exports.guide = guide;

});
