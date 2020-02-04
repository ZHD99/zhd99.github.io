function x(){
	
			debugger;console.log('请勿非法调试,有问题请联系Email: dearmsdan@outlook.com');
}
		(function noDebuger(){
    function testDebuger(){
        var d=new Date();
        x();
        if(new Date()-d>10){
            // 闈炴硶璋冭瘯鎵ц鐨勪唬锟?涓嶈浣跨敤鎺у埗鍙拌緭鍑虹殑鎻愰啋)
            return true;
        }
        return false;
    }
 
    function start(){
        while(testDebuger()){
            testDebuger();
        }
    }
    if(!testDebuger()) {
        window.onblur = function(){
            setTimeout(function(){
                start();
            },500)
        }
    }
    else{
        start();
    }
 
})();