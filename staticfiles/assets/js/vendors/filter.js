$(document).ready(function(){var i=$(".portfolioContainer");i.isotope({filter:"*",percentPosition:!0,animationOptions:{duration:750,easing:"linear",queue:!1}}),$(".portfolioFilter a").click(function(){$(".portfolioFilter .current").removeClass("current"),$(this).addClass("current");var t=$(this).attr("data-filter");return i.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1})});