;(function($,window){$.prototype.mouseRight=function(options,callback){var defaults,settings,me,_this;me=this;defaults={menu:[{}],ele:'body'};settings=$.extend({},defaults,options);$(this).each(function(){(function(){var parentDiv=$('<div></div>');parentDiv.attr('class','wrap-ms-right');for(let i=0;i<settings.menu.length;i++){var childDiv=$('<li></li>');childDiv.addClass('ms-item');var childDiv1=$('<i></i>');childDiv.attr('data-item',i);childDiv1.addClass(settings.menu[i].icon);childDiv1.attr('data-item',i);childDiv1.appendTo(childDiv);childDiv.appendTo(parentDiv);childDiv1.after('&nbsp; '+settings.menu[i].itemName)}parentDiv.prependTo('body');var parentShade=$('<div></div>');parentShade.attr('class','shade');parentShade.prependTo('body')})();window.oncontextmenu=function(){return false};$(settings.ele).mousedown(function(e){if(e.which===3){$('.wrap-ms-right').css({'display':'block','top':e.pageY+'px','left':e.pageX+'px'});$('.shade').css({'display':'block'})}});$('.ms-item').click(function(e){var clickID=parseInt($(e.target).attr('data-item'));for(let i=0;i<settings.menu.length;i++){if(clickID==i){settings.menu[i].callback();$('.wrap-ms-right').css({'display':'none'});$('.shade').css({'display':'none'})}}});$('.shade').click(function(){$('.wrap-ms-right').css({'display':'none'});$('.shade').css({'display':'none'})})});return this}})(jQuery,window)


	var cout;
	// 选择的
	var oContent =document.body;
	oContent.onmouseup = function(){
		cout=selectText();
	};  
	// 选中的
	function selectText(){
		if(document.Selection){       
			//ie浏览器
			return document.selection.createRange().text;     	 
		}else{    
			//标准浏览器
			return window.getSelection().toString();	 
		}	 
	};
			// 复制的方法
			function copyText(text, callback){ // text: 要复制的内容， callback: 回调
				var tag = document.createElement('input');
				tag.setAttribute('id', 'cp_hgz_input');
				tag.value = text;
				document.getElementsByTagName('body')[0].appendChild(tag);
				document.getElementById('cp_hgz_input').select();
				document.execCommand('copy');
				document.getElementById('cp_hgz_input').remove();
				if(callback) {callback(text)}
			};
	
	$('body').mouseRight({
		ele:'body',
		menu: [{
			itemName: "复制",
			callback: function() {
				copyText(cout);
			}
			},{
			itemName: "关于",
			callback: function() {
				window.location.href = "/about.html";
			}
		}]});