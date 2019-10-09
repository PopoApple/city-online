var testMode;
var isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
    hasTouch = 'ontouchstart' in window && !isTouchPad;
var support = true;
var NV = {};  
var UA = navigator.userAgent.toLowerCase();  
try  
{  
    NV.name=!-[1,]?'ie':  
    (UA.indexOf("firefox")>0)?'firefox':  
    (UA.indexOf("chrome")>0)?'chrome':  
    window.opera?'opera':  
    window.openDatabase?'safari':  
    'unkonw';  
}catch(e){};  

var body = document.body || document.documentElement,
    style = body.style,
    vendor = ['webkit', 'khtml', 'moz', 'ms', 'o'],
    i = 0;
while (i < vendor.length) {
    if (typeof style[vendor[i] + 'Transition'] === 'string') {
      NV.vendor = vendor[i];
    }
    i++;
}
if((NV.name == 'chrome' || NV.name == 'safari') && (NV.vendor == 'webkit' || NV.vendor == 'khtml')){
	
}else{
	support = false;
	document.getElementById('loadingMask').style.display = 'block';
}
if(hasTouch){
	document.body.addEventListener('touchmove', function(event) {
		event.preventDefault();
	}, false);
}
function getUrlParam(href,name) {
    var pStr = href.split('?')[1];
    var nameStr = name+'=';
    var sIdx = pStr.indexOf(nameStr);
    var s = pStr.substring(sIdx+nameStr.length);
    var eIdx = s.indexOf('&');
    var rtn = '';
    if(eIdx>=0){
    	rtn = s.substring(0,eIdx);
    }else{
    	rtn = s;
    }
    return rtn;
}
function getCid(){
	var cid = '';
	var href = decodeURI(location.href);
	if(href.indexOf('.html?cid=')>=0){
		cid = getUrlParam(href,'cid');
	}else{
		var sIdx = href.indexOf('/cid/');
		if(sIdx>=0){
			cid = href.substring(sIdx+5,href.indexOf('?'));
		}
	}
	return cid;
}
function getAid(){
	var aid = '';
	var href = decodeURI(location.href);
	if(href.indexOf('.html?aid=')>=0){
		cid = getUrlParam(href,'aid');
	}else{
		var sIdx = href.indexOf('/aid/');
		if(sIdx>=0){
			aid = href.substring(sIdx+5,href.indexOf('.html'));
		}
	}
	return aid;
}
function getChannelName(id){
	var dChannel = sessionStorage.dataChannelList;
	var name = '';
	if(dChannel){
		var d = JSON.parse(dChannel);
		for(var i=0;i<d.length;i++){
			if(d[i].id==id){
				name = d[i].name;
				break;
			}
		}
	}
	
	return name;
}
function formatDate (strTime) {
    var date = new Date(parseInt(strTime+'000'));
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}



 

















