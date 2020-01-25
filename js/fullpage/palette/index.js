var _$paletteElement = $('.palette_color');
function _colorizePaletteItems() {
    $.each(_$paletteElement, function(i) {
        $(this).css('background-color', $(this).data('color'));
    })
}
function _togglePalette() {
    /* '.palette_color__main' */
    $('#live2d').on('click', function() {
		//$('.palette_item_wrapper').removeAttr("style");
        $('.palette').toggleClass('palette__opened');
    })
}
function _initSetColor() {
    $('.palette_color').on('click', function() {
        var color = $(this).data('color');
        _setColor(color);
    })
}
function _setColor(color) {
	setwwColor(color);
	var expires=new Date();
    expires.setTime(expires.getTime()+24*60*60*365*1000);
    var flag="color_Cookie="+color;
    document.cookie=flag+";expires="+expires.toGMTString();
	 $('.palette').toggleClass('palette__opened');
}
_colorizePaletteItems();
_togglePalette();
_initSetColor();


function setwwColor(color) {
    $('.nexmoe-primary').css('background', color);
}
$(function() {
	var color = Cookies.get('color_Cookie');
	setwwColor(color);
});


// 关闭
    $('.palette_item_wrapper div').on('click', function() {
		
    });