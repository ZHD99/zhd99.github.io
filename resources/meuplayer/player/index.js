"use strict";$(function(){$(document).click(function(){$(".user_login_box").hide(),$(".user_login").removeClass("btn_active")}),$(".user_login,.user_login_box").click(function(i){i.stopPropagation()}),$(".user_login").each(function(){$(this).click(function(){$(this).toggleClass("btn_active"),$(this).next().toggle(),$(this).parent().siblings().find(".user_login_box").hide()})});var i=0;function t(){$("#audioPlayer").attr({src:"/wp-content/uploads/2015/01/3.mp3"}),$("#audioPlayer")[0].play(),$("#audioPlayer")[0].volume="0.5"}if($("ul.navigation li a").hover(function(){$("ul.navigation li a").removeClass("on"),$(this).addClass("on"),t()},function(){$("#audioPlayer")[0].pause()}),$("ul.navigation li a").hover(function(){i=$(this).parent().index(),$(".sub_nav ul .sub_list p").eq(i).stop(!0,!0).show(600).siblings().hide(),t()},function(){$("#audioPlayer")[0].pause()}),$.browser.mozilla=/firefox/.test(navigator.userAgent.toLowerCase()),$.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),$.browser.msie=/msie/.test(navigator.userAgent.toLowerCase()),($.browser.webkit&&parseFloat($.browser.version)<35||$.browser.msie)&&($("#main_nav li a").css({transition:"none",background:"none",transform:"rotateX(0deg)"}),$("#main_nav li a").find("span:last-child").css({display:"none"}),$("#main_nav li a").click(function(){$(this).css({background:"none",transform:"rotateX(0deg)"})}),$("#main_nav li a").mouseover(function(){$(this).css({background:"none",transform:"rotateX(0deg)"})})),0<$(".sub_nav").length){var e=$(".sub_nav").offset().top-$(".sub_nav").height()/5;$(window).scroll(function(){$(window).scrollTop()>=e?($(".sub_nav").addClass("fixed"),$(".sub_nav ul li a.smallogo").css({opacity:1})):($(".sub_nav").removeClass("fixed"),$(".sub_nav ul li a.smallogo").css({opacity:0}))})}var o=$(".main_banner li").length,s=0,r=800,n=0,l=!1;function a(i){if(0==l){var t,e,n;l=!0;var a=$("#imgCard"+s);t=0==s?$("#imgCard"+(o-1)):$("#imgCard"+(s-1)),e=s==o-1?$("#imgCard0"):$("#imgCard"+(s+1)),i?(n=0<=s-2?$("#imgCard"+(s-2)):$("#imgCard"+(o+s-2)),t.css("z-index","5"),e.css("z-index","1"),a.css("z-index","2"),n.css("z-index","1"),n.css({width:"450px",height:"180px",top:"60px",left:"0px",opacity:0}),n.stop(!0,!0).animate({width:"580px",height:"240px",top:"20px",left:"0px",opacity:1},r),a.stop(!0,!0).animate({width:"580px",height:"240px",top:"20px",left:"600px",opacity:1},r),e.stop(!0,!0).animate({width:"450px",height:"180px",top:"60px",left:"730px",opacity:0},r,function(){e.find("span").css("opacity",0),l=!1}),t.find("span").css("opacity",0),$(".main_banner_box li").find("p").css({bottom:"-50px"}),t.stop(!0,!0).animate({width:"670px",height:"280px",left:"255px",top:0,opacity:1},r,function(){$(this).find("p").animate({bottom:"0px"})}),s--):(n=o<=s+2?$("#imgCard"+(s+2-o)):$("#imgCard"+(s+2)),t.css("z-index","1"),e.css("z-index","5"),a.css("z-index","2"),n.css("z-index","1"),n.css({width:"450px",height:"180px",top:"60px",left:"730px",opacity:0}),n.stop(!0,!0).animate({width:"580px",height:"240px",top:"20px",left:"600px",opacity:1},r),a.stop(!0,!0).animate({width:"580px",height:"240px",top:"20px",left:"0px",opacity:1},r),e.find("span").css("opacity",0),$(".main_banner_box li").find("p").css({bottom:"-50px"}),e.stop(!0,!0).animate({width:"670px",height:"280px",left:"255px",top:0,opacity:1},r,function(){$(this).find("p").animate({bottom:"0px"})}),t.stop(!0,!0).animate({width:"450px",height:"180px",left:"0px",top:"60px",opacity:0},r,function(){l=!1}),s++),n.find("span").css("opacity",.5),a.find("span").css("opacity",.5),s==o&&(s=0),s<0&&(s=o+s),$(".btn_list span").removeClass("curr").eq(s).addClass("curr")}}3<o?($(".btn_list span").click(function(i){if(!l){var t=$(this).index();if(t!=s){clearInterval(n),n=null;var e=!1;1<Math.abs(s-t)&&1!=Math.abs(o-Math.abs(s-t))?($(".main_banner_box li").css({width:"300px",height:"120px",left:"600px",top:"60px",opacity:0}),t<s&&o-Math.abs(s-t)!=1?(e=!0,s=t+1):(s=t-1)<0&&(s=o-1)):(t<s&&o-(s-t)!=1||s<t&&o+(s-t)==1)&&(e=!0),a(e),n=setInterval(a,3e3)}}}),$(".main_banner_box li").on("mousemove",function(){"670px"==$(this).css("width")&&(clearInterval(n),n=null)}).on("mouseout",function(){clearInterval(n),n=null,n=setInterval(a,3e3)}),$(".js_pre").click(function(i){l||(clearInterval(n),n=null,a(1),n=setInterval(a,3e3))}),$(".js_next").click(function(i){l||(clearInterval(n),n=null,a(),n=setInterval(a,3e3))}),n=setInterval(a,3e3)):($(".js_pre").hide(),$(".js_next").hide());var u=0,c=0,p=0,d=$(".index_mv_body .mvList"),m=$(".shoufa_mv_body .mvList"),f=$(".hot_mv_body .mvList");function v(i,t,e){i.find("a").addClass("cur").parent().siblings().find("a").removeClass("cur"),e.eq(t).fadeIn().siblings("div").fadeOut(),e.eq(t).addClass("curShow").siblings().removeClass("curShow")}$(".index_mv_title ul li").click(function(){u=$(this).index(),v($(this),u,d)}),$(".shoufa_mv_title ul li").click(function(){c=$(this).index(),v($(this),c,m)}),$(".hot_mv_title ul li").click(function(){p=$(this).index(),v($(this),p,f)});var h="<b></b>";$(".index_mv_body .mvList ul.sb li").eq(0).append(h),$(".index_mv_body .mvList ul.sb li").eq(1).append(h),$(".shoufa_mv_body .mvList ul.sb li").eq(0).append(h),$(".shoufa_mv_body .mvList ul.sb li").eq(1).append(h);for(var g=0;g<9;g++)$("#rank li").eq(g).find("a.musicName").prepend(" "+(g+1)+"  ");for(var b=0;b<9;b++)$("#latest li").eq(b).find("a.musicName").prepend(" "+(b+1)+"  ");for(var x=0;x<9;x++)$("#popular li").eq(x).find("a.musicName").prepend(" "+(x+1)+"  ");var _=document.getElementById("omnibus_list"),y=_.getElementsByTagName("i")[0],w=_.getElementsByTagName("span");$("#omnibus_list .post_big a").hover(function(){$(this).find("i").stop(!0,!0).animate({left:"0px"},300)},function(){$(this).find("i").stop(!0,!0).animate({left:"305px"},300,function(){y.style.left="-305px"})}),$("#omnibus_list .post_small a").hover(function(){$(this).find("span").stop(!0,!0).animate({left:"0px"},300)},function(){$(this).find("span").stop(!0,!0).animate({left:"130px"},300,function(){for(var i=0;i<w.length;i++)w[i].style.left="-130px"})})}),$("#toTop").click(function(){$("html,body").animate({scrollTop:"0px"},"slow"),$("#audioPlayer").attr({src:"/wp-content/uploads/2015/01/1.mp3"}),$("#audioPlayer")[0].play()}),$(".footer_cont_right a.twoCode").hover(function(){$(this).find("img.tCode").stop(!0,!0).fadeIn()},function(){$(this).find("img.tCode").stop(!0,!0).delay(800).fadeOut()}),$("#mv_classify_list ul li").hover(function(){$(this).stop(!0,!0).animate({opacity:"1"},350).siblings().stop(!0,!0).animate({opacity:"0.5"},350)},function(){$("#mv_classify_list ul li").stop(!0,!0).animate({opacity:"1"},350)}),$("#mvList .mv_rcmd").click(function(){$(this).index();$(this).find("span").addClass("active").parent().siblings("li").find("span").removeClass("active"),$(this).find("i").addClass("on").parent().siblings("li").find("i").removeClass("on")});var arrSongs=["http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4","http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"];$("#mvList li.mv_rcmd").click(function(){var i=$(this).index();video[0].src=arrSongs[i],video[0].play(),$(".playPause").css({backgroundPosition:"-54px -10px"})}),$("#mv_rank_list ul li").click(function(){var i=$(this).index();video[0].src=arrSongs[i],video[0].play(),$(".playPause").css({backgroundPosition:"-54px -10px"})});var video=$("#video");function changeTime(i){return iNum=parseInt(i),toZero(Math.floor(i/60))+":"+toZero(Math.floor(i%60))}function toZero(i){return i<=9?"0"+i:""+i}$(".playPause").click(function(){return video[0].paused?(video[0].play(),$(this).css({backgroundPosition:"-54px -10px"})):(video[0].pause(),$(this).css({backgroundPosition:"-12px -10px"})),!1}),video.on("loadedmetadata",function(){var i=changeTime(video[0].duration);$(".duration").text(i)}),video.on("timeupdate",function(){var i=changeTime(video[0].currentTime);$(".current").text(i);var t=100*video[0].currentTime/video[0].duration;$(".timeBar").css("width",t+"%")});var timeDrag=!1;$(".progressBar").mousedown(function(i){timeDrag=!0,updatebar(i.pageX)}),$(document).mouseup(function(i){timeDrag&&(timeDrag=!1,updatebar(i.pageX))}),$(document).mousemove(function(i){timeDrag&&updatebar(i.pageX)});var updatebar=function(i){var t=$(".progressBar"),e=video[0].duration,n=100*(i-t.offset().left)/t.width();100<n&&(n=100),n<0&&(n=0),$(".timeBar").css("width",n+"%"),video[0].currentTime=e*n/100},startBuffer=function i(){var t=video[0].duration,e=video[0].buffered.end(0),n=100*e/t;$(".bufferBar").css("width",n+"%"),e<t&&setTimeout(i,500)};setTimeout(startBuffer,500),$(".muted").click(function(){return video[0].muted?($(this).css({backgroundPosition:"-88px -10px"}),video[0].muted=!1):($(this).css({backgroundPosition:"-126px -10px"}),video[0].muted=!0),!1});var timeDrag2=!1;$(".volumeBar").mousedown(function(i){timeDrag2=!0,updatebar2(i.pageX)}),$(document).mouseup(function(i){timeDrag2&&(timeDrag2=!1,updatebar2(i.pageX))}),$(document).mousemove(function(i){timeDrag2&&updatebar2(i.pageX)});var updatebar2=function(i){var t=$(".volumeBar"),e=(video[0].duration,100*(i-t.offset().left)/t.width());100<e&&(e=100),e<0&&(e=0),$(".volume").css("width",e+"%"),video[0].volume=e/100};$(".fullscreen").on("click",function(){return video[0].RequestFullScreen=video[0].RequestFullScreen||video[0].webkitRequestFullScreen||video[0].mozRequestFullScreen,video[0].RequestFullScreen(),!1});