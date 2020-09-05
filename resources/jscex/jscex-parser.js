"use strict";!function(){var D=u(["break","case","catch","const","continue","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","throw","try","typeof","var","void","while","with"]),p=(u(["abstract","boolean","byte","char","class","debugger","double","enum","export","extends","final","float","goto","implements","import","int","interface","long","native","package","private","protected","public","short","static","super","synchronized","throws","transient","volatile"]),u(["return","new","delete","throw","else","case"])),E=u(["false","null","true","undefined"]),v=u(n("+-*&%=<>!?|~^")),d=/^0x[0-9a-f]+$/i,h=/^0[0-7]+$/,k=/^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i,m=u(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),w=u(n(" \n\r\t​")),g=u(n("[{}(,.;:")),y=u(n("[]{}(),;:")),t=(u(n("gmsiy")),{letter:new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971\\u0972\\u097B-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D3D\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8B\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10D0-\\u10FA\\u10FC\\u1100-\\u1159\\u115F-\\u11A2\\u11A8-\\u11F9\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u1676\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19A9\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u2094\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2C6F\\u2C71-\\u2C7D\\u2C80-\\u2CE4\\u2D00-\\u2D25\\u2D30-\\u2D65\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31B7\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FC3\\uA000-\\uA48C\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA65F\\uA662-\\uA66E\\uA67F-\\uA697\\uA717-\\uA71F\\uA722-\\uA788\\uA78B\\uA78C\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA90A-\\uA925\\uA930-\\uA946\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAC00\\uD7A3\\uF900-\\uFA2D\\uFA30-\\uFA6A\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),non_spacing_mark:new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),space_combining_mark:new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),connector_punctuation:new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")});function b(u){return t.letter.test(u)}function x(u){return 48<=(u=u.charCodeAt(0))&&u<=57}function _(u){return"$"==u||"_"==u||b(u)}function I(u){return _(u)||(n=u,t.non_spacing_mark.test(n)||t.space_combining_mark.test(n))||x(u)||(e=u,t.connector_punctuation.test(e))||"‌"==u||"‍"==u;var e,n}function r(u,e,n,t){this.message=u,this.line=e,this.col=n,this.pos=t;try{({})()}catch(u){this.stack=u.stack}}function $(u,e,n,t){throw new r(u,e,n,t)}function q(u,e,n){return u.type==e&&(null==n||u.value==n)}r.prototype.toString=function(){return this.message+" (line: "+this.line+", col: "+this.col+", pos: "+this.pos+")\n\n"+this.stack};var S={};function J(u){var r={text:u.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,""),pos:0,tokpos:0,line:0,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,comments_before:[]};function a(){return r.text.charAt(r.pos)}function c(u){var e=r.text.charAt(r.pos++);if(u&&!e)throw S;return"\n"==e?(r.newline_before=!0,++r.line,r.col=0):++r.col,e}function t(u,e){var n=r.text.indexOf(u,r.pos);if(e&&-1==n)throw S;return n}function s(u,e,n){r.regex_allowed="operator"==u&&!Y(T,e)||"keyword"==u&&Y(p,e)||"punc"==u&&Y(g,e);var t={type:u,value:e,line:r.tokline,col:r.tokcol,pos:r.tokpos,nlb:r.newline_before};return n||(t.comments_before=r.comments_before,r.comments_before=[]),r.newline_before=!1,t}function C(u){$(u,r.tokline,r.tokcol,r.tokpos)}function o(t){var r=!1,o=!1,A=!1,i="."==t,u=function(u){for(var e="",n=a(),t=0;n&&u(n,t++);)e+=c(),n=a();return e}(function(u,e){return"x"==u||"X"==u?!A&&(A=!0):A||"E"!=u&&"e"!=u?"-"==u?!(!o&&(0!=e||t)):"+"==u?o:(o=!1,"."==u?!i&&!A&&(i=!0):x(n=u)||b(n)):!r&&(r=o=!0);var n});t&&(u=t+u);var e,n=(e=u,d.test(e)?parseInt(e.substr(2),16):h.test(e)?parseInt(e.substr(1),8):k.test(e)?parseFloat(e):void 0);if(!isNaN(n))return s("num",n);C("Invalid syntax: "+u)}function A(){var u=c(!0);switch(u){case"n":return"\n";case"r":return"\r";case"t":return"\t";case"b":return"\b";case"v":return"\v";case"f":return"\f";case"0":return"\0";case"x":return String.fromCharCode(e(2));case"u":return String.fromCharCode(e(4));default:return u}}function e(u){for(var e=0;0<u;--u){var n=parseInt(c(!0),16);isNaN(n)&&C("Invalid hex-character pattern in string"),e=e<<4|n}return e}function i(){for(var u,e=!1,n="";null!=(u=a());)if(e)"u"!=u&&C("Expecting UnicodeEscapeSequence -- uXXXX"),I(u=A())||C("Unicode char: "+u.charCodeAt(0)+" is not valid in identifier"),n+=u,e=!1;else if("\\"==u)e=!0,c();else{if(!I(u))break;n+=c()}return n}function B(){return f("Unterminated regular expression",function(){for(var u,e=!1,n="",t=!1;u=c(!0);)if(e)n+="\\"+u,e=!1;else if("["==u)t=!0,n+=u;else if("]"==u&&t)t=!1,n+=u;else{if("/"==u&&!t)break;"\\"==u?e=!0:n+=u}return s("regexp",[n,i()])})}function l(u){return s("operator",function u(e){if(!a())return e;var n=e+a();return Y(m,n)?(c(),u(n)):e}(u||c()))}function F(){c();var u=r.regex_allowed;switch(a()){case"/":return r.comments_before.push(function(){c();var u,e=t("\n");return-1==e?(u=r.text.substr(r.pos),r.pos=r.text.length):(u=r.text.substring(r.pos,e),r.pos=e),s("comment1",u,!0)}()),r.regex_allowed=u,n();case"*":return r.comments_before.push((c(),f("Unterminated multiline comment",function(){var u=t("*/",!0),e=r.text.substring(r.pos,u),n=s("comment2",e,!0);return r.pos=u+2,r.line+=e.split("\n").length-1,r.newline_before=0<=e.indexOf("\n"),/^@cc_on/i.test(e)&&(U("WARNING: at line "+r.line),U('*** Found "conditional comment": '+e),U("*** UglifyJS DISCARDS ALL COMMENTS.  This means your code might no longer work properly in Internet Explorer.")),n}))),r.regex_allowed=u,n()}return r.regex_allowed?B():l("/")}function f(e,u){try{return u()}catch(u){if(u!==S)throw u;C(e)}}function n(u){if(u)return B();!function(){for(;Y(w,a());)c()}(),r.tokline=r.line,r.tokcol=r.col,r.tokpos=r.pos;var e,n=a();return n?x(n)?o():'"'==n||"'"==n?f("Unterminated string constant",function(){for(var u=c(),e="";;){var n=c(!0);if("\\"==n)n=A();else if(n==u)break;e+=n}return s("string",e)}):Y(y,n)?s("punc",c()):"."==n?(c(),x(a())?o("."):s("punc",".")):"/"==n?F():Y(v,n)?l():"\\"==n||_(n)?(e=i(),Y(D,e)?Y(m,e)?s("operator",e):Y(E,e)?s("atom",e):s("keyword",e):s("name",e)):void C("Unexpected character '"+n+"'"):s("eof")}return n.context=function(u){return u&&(r=u),r},n}var L=u(["typeof","void","delete","--","++","!","~","-","+"]),T=u(["--","++"]),z=function(u,e,n){for(;n<u.length;)e[u[n]]=u[n].substr(0,u[n].length-1),n++;return e}(["+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="],{"=":!0},0),G=function(u,e){for(var n=0,t=1;n<u.length;++n,++t)for(var r=u[n],o=0;o<r.length;++o)e[r[o]]=t;return e}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{}),P=u(["for","do","while","switch"]),W=u(["atom","num","string","regexp","name"]);function H(u,e,n){this.name=u,this.start=e,this.end=n}function e(u,r,e){var A={input:"string"==typeof u?J(u):u,token:null,prev:null,peeked:null,in_function:0,in_loop:0,labels:[]};function i(u,e){return q(A.token,u,e)}function a(){return A.prev=A.token,A.peeked?(A.token=A.peeked,A.peeked=null):A.token=A.input(),A.token}function n(){return A.prev}function o(u,e,n,t){var r=A.input.context();$(u,null!=e?e:r.tokline,null!=n?n:r.tokcol,null!=t?t:r.tokpos)}function t(u,e){o(e,u.line,u.col)}function c(u){null==u&&(u=A.token),t(u,"Unexpected token: "+u.type+" ("+u.value+")")}function s(u,e){if(i(u,e))return a();t(A.token,"Unexpected token "+A.token.type+", expected "+u)}function C(u){return s("punc",u)}function B(){return!r&&(A.token.nlb||i("eof")||i("punc","}"))}function l(){i("punc",";")?a():B()||c()}function F(){return V(arguments)}function f(){C("(");var u=X();return C(")"),u}function D(u,e,n){return u instanceof H?u:new H(u,e,n)}A.token=a();var p=e?function(){var u=A.token,e=E.apply(this,arguments);return e[0]=D(e[0],u,n()),e}:E;function E(){switch(i("operator","/")&&(A.peeked=null,A.token=A.input(!0)),A.token.type){case"num":case"string":case"regexp":case"operator":case"atom":return v();case"name":return q(A.peeked||(A.peeked=A.input()),"punc",":")?function(u){A.labels.push(u);var e=A.token,n=p();r&&!Y(P,n[0])&&c(e);return A.labels.pop(),F("label",u,n)}(Q(A.token.value,a,a)):v();case"punc":switch(A.token.value){case"{":return F("block",m());case"[":case"(":return v();case";":return a(),F("block");default:c()}case"keyword":switch(Q(A.token.value,a)){case"break":return d("break");case"continue":return d("continue");case"debugger":return l(),F("debugger");case"do":return u=M(p),s("keyword","while"),F("do",Q(f,l),u);case"for":return function(){C("(");var u=null;if(!i("punc",";")&&(u=i("keyword","var")?(a(),y(!0)):X(!0,!0),i("operator","in")))return function(u){var e="var"==u[0]?F("name",u[1][0]):u;a();var n=X();return C(")"),F("for-in",u,e,n,M(p))}(u);return function(u){C(";");var e=i("punc",";")?null:X();C(";");var n=i("punc",")")?null:X();return C(")"),F("for",u,e,n,M(p))}(u)}();case"function":return h(!0);case"if":return function(){var u,e=f(),n=p();i("keyword","else")&&(a(),u=p());return F("if",e,n,u)}();case"return":return 0==A.in_function&&o("'return' outside of function"),F("return",i("punc",";")?(a(),null):B()?null:Q(X,l));case"switch":return F("switch",f(),w());case"throw":return F("throw",Q(X,l));case"try":return function(){var u,e,n=m();if(i("keyword","catch")){a(),C("("),i("name")||o("Name expected");var t=A.token.value;a(),C(")"),u=[t,m()]}i("keyword","finally")&&(a(),e=m());u||e||o("Missing catch/finally blocks");return F("try",n,u,e)}();case"var":return Q(y,l);case"const":return Q(b,l);case"while":return F("while",f(),M(p));case"with":return F("with",f(),p());default:c()}}var u}function v(){return F("stat",Q(X,l))}function d(u){var e=i("name")?A.token.value:null;return null!=e?(a(),function(u,e){for(var n=e.length;0<=--n;)if(e[n]===u)return!0;return!1}(e,A.labels)||o("Label "+e+" without matching loop or statement")):0==A.in_loop&&o(u+" not inside a loop or switch"),l(),F(u,e)}var h=e?function(){var u=n(),e=k.apply(this,arguments);return e[0]=D(e[0],u,n()),e}:k;function k(u){var e=i("name")?Q(A.token.value,a):null;return u&&!e&&c(),C("("),F(u?"defun":"function",e,function(u,e){for(;!i("punc",")");)u?u=!1:C(","),i("name")||c(),e.push(A.token.value),a();return a(),e}(!0,[]),function(){++A.in_function;var u=A.in_loop;A.in_loop=0;var e=m();return--A.in_function,A.in_loop=u,e}())}function m(){C("{");for(var u=[];!i("punc","}");)i("eof")&&c(),u.push(p());return a(),u}var w=K(M,function(){C("{");for(var u=[],e=null;!i("punc","}");)i("eof")&&c(),i("keyword","case")?(a(),e=[],u.push([X(),e]),C(":")):i("keyword","default")?(a(),C(":"),e=[],u.push([null,e])):(e||c(),e.push(p()));return a(),u});function g(u){for(var e=[];;){i("name")||c();var n=A.token.value;if(a(),i("operator","=")?(a(),e.push([n,X(!1,u)])):e.push([n]),!i("punc",","))break;a()}return e}function y(u){return F("var",g(u))}function b(){return F("const",g())}function x(u){if(i("operator","new"))return a(),U(F("new",x(!1),i("punc","(")?(a(),_(")")):[]),!0);if(i("operator")&&Y(L,A.token.value))return N("unary-prefix",Q(A.token.value,a),x(u));if(i("punc")){switch(A.token.value){case"(":return a(),U(Q(X,K(C,")")),u);case"[":return a(),U(F("array",_("]",!r,!0)),u);case"{":return a(),U(function(){var u=!0,e=[];for(;!i("punc","}")&&(u?u=!1:C(","),r||!i("punc","}"));){var n=A.token.type,t=I();"name"!=n||"get"!=t&&"set"!=t||i("punc",":")?(C(":"),e.push([t,X(!1)])):e.push([S(),h(!1),t])}return a(),F("object",e)}(),u)}c()}return i("keyword","function")?(a(),U(h(!1),u)):Y(W,A.token.type)?U(Q("regexp"==A.token.type?F("regexp",A.token.value[0],A.token.value[1]):F(A.token.type,A.token.value),a),u):void c()}function _(u,e,n){for(var t=!0,r=[];!i("punc",u)&&(t?t=!1:C(","),!e||!i("punc",u));)i("punc",",")&&n?r.push(["atom","undefined"]):r.push(X(!1));return a(),r}function I(){switch(A.token.type){case"num":case"string":return Q(A.token.value,a)}return S()}function S(){switch(A.token.type){case"name":case"operator":case"keyword":case"atom":return Q(A.token.value,a);default:c()}}function U(u,e){return i("punc",".")?(a(),U(F("dot",u,S()),e)):i("punc","[")?(a(),U(F("sub",u,Q(X,K(C,"]"))),e)):e&&i("punc","(")?(a(),U(F("call",u,_(")")),!0)):e&&i("operator")&&Y(T,A.token.value)?Q(K(N,"unary-postfix",A.token.value,u),a):u}function N(u,e,n){return"++"!=e&&"--"!=e||j(n)||o("Invalid use of "+e+" operator"),F(u,e,n)}function R(u){return function u(e,n,t){var r=i("operator")?A.token.value:null;r&&"in"==r&&t&&(r=null);var o=null!=r?G[r]:null;return null!=o&&n<o?(a(),u(F("binary",r,e,u(x(!0),o,t)),n,t)):e}(x(!0),0,u)}function j(u){if(!r)return!0;switch(u[0]){case"dot":case"sub":case"new":case"call":return!0;case"name":return"this"!=u[1]}}function O(u){var e=function(u){var e=R(u);if(i("operator","?")){a();var n=X(!1);return C(":"),F("conditional",e,n,X(!1,u))}return e}(u),n=A.token.value;if(i("operator")&&Y(z,n)){if(j(e))return a(),F("assign",z[n],e,O(u));o("Invalid assignment")}return e}function X(u,e){0==arguments.length&&(u=!0);var n=O(e);return u&&i("punc",",")?(a(),F("seq",n,X(!0,e))):n}function M(u){try{return++A.in_loop,u()}finally{--A.in_loop}}return F("toplevel",function(u){for(;!i("eof");)u.push(p());return u}([]))}function K(u){var e=V(arguments,1);return function(){return u.apply(this,e.concat(V(arguments)))}}function Q(u){u instanceof Function&&(u=u());for(var e=1,n=arguments.length;0<--n;++e)arguments[e]();return u}function u(u){for(var e={},n=0;n<u.length;++n)e[u[n]]=!0;return e}function V(u,e){return Array.prototype.slice.call(u,null==e?0:e)}function n(u){return u.split("")}function Y(u,e){return Object.prototype.hasOwnProperty.call(u,e)}H.prototype.toString=function(){return this.name};var U=function(){},o=function(u){u.modules.parser||(u.parse=e,u.modules.parser=!0)},A="undefined"!=typeof require&&"undefined"!=typeof module&&module.exports,i="undefined"!=typeof define&&define.amd;if(A)module.exports.init=o;else if(i)define("jscex-parser",function(){return{init:o}});else{if("undefined"==typeof Jscex)throw new Error('Missing root object, please load "jscex" module first.');o(Jscex)}}();