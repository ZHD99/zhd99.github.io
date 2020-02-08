const getRealPath = (pathname, desc = false) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }
  let names = pathname.split("/");
  if (desc === false) {
    for (let i = names.length - 1; i >= 0; --i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  } else {
    for (let i = 0; i < names.length; ++i) {
      let name = names[i].trim();
      if (name.length > 0 && name !== "/" && name !== "index.html") {
        return name;
      }
    }
  }
  return "/";
};
let links = document.querySelectorAll(".nexmoe-list-item");
let rootRealPath = getRealPath(window.location.pathname, true);
for (let link of links) {
  let linkPath = link.getAttribute("href");
  if (linkPath && getRealPath(linkPath, true) === rootRealPath) {
    link.className = "active nexmoe-list-item mdui-list-item mdui-ripple";
  }
}
$("table")
  .has("img")
  .addClass("nexmoe-album");
/*懒加载*/
/*$("#nexmoe-content img").each(function() {
  $(this).attr("data-src", $(this).attr("src"));
  $(this).attr("src", "");
  $(this).addClass("lazyload");
  $(this).attr("referrerPolicy", "no-referrer");
});
*/
/*懒加载end*/


/* 图片放大 */
$("article:not(.nexmoe-py) img").each(function() {
  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  /*图片样式*/
  $(element).attr("class", "gallerys");
  $(element).attr("href", $(this).attr("src"));
  $(this).wrap(element);
	
  /* iframe */
  var element2 = document.createElement("iframe");
  $(element2).attr("src", $(this).attr("src"));
  $(element2).attr("align", "middle");
  $(element2).attr("frameborder", "0");
  $(element2).attr("scrolling", "no");
  $(element2).attr("width", "800px");
  $(element2).attr("height", "300px");
  $(this).wrap(element2);
	
	
});
$("article:not(.nexmoe-py) iframe").each(function() {
/*  var element = document.createElement("a");
  $(element).attr("data-fancybox", "gallery");
  图片样式
  $(element).attr("class", "gallerys");
  $(element).attr("href", $(this).attr("src"));
  $(this).wrap(element);*/

	
	 $("article iframe").mouseover(function(){
		 var flag = $('.articlefull').val();
		 if(flag == null){
			$("article iframe").before("<span style='position: absolute;top: 20px;left: 40%; font-weight: bold;' class='articlefull'>点击放大</span>");
			}
		 
	 });
	 $("article iframe").mouseout(function(){
		 $(".articlefull").fadeOut(5000, function(){
		 		$(this).remove();
		 });
	 });
	
});

$("#nexmoe-sidebar a").addClass("mdui-ripple");
mdui.mutation();

!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);


