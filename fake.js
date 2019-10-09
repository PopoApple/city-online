var bluemp_cid,bluemp_aid;
testMode = true;
function isWeiXin(){
	return false;
}
var dataTitle = {
	webname: '城市在线',
	logo: 'Images/iconfont-shenghuo.png'
};
var dataBanner = {
	carouselpic: [{
		pic: 'Images/22.jpg',
		title: '摄影大赛投票',
		url: 'http://baidu.com'
	}, {
		pic: 'Images/33.jpg',
		title: '吉娃娃求抱养',
		url: 'http://baidu.com'
	}, {
		pic: 'Images/332.png',
		title: '乒乓球大赛报名',
		url: 'http://baidu.com'
	}]
};
var dataNav = [{
	name: '商场',
	url: 'www.baidu.com',
	pic: 'Images/22.jpg',
	nav_url: ''
}, {
	name: '二手',
	url: 'www.baidu.com',
	pic: 'Images/icon3.png',
	nav_url: ''
}, {
	name: '新闻',
	url: 'www.baidu.com',
	pic: 'Images/icon4.png',
	nav_url: ''
}, {
	name: '社区',
	url: 'www.baidu.com',
	pic: 'Images/icon8.png',
	nav_url: ''
}, {
	name: '活动订单订单达到',
	url: 'www.baidu.com',
	pic: 'Images/icon6.png',
	nav_url: ''
}, {
	name: '借记卡',
	url: 'www.baidu.com',
	pic: '',
	nav_url: ''
}, {
	name: '征婚其实',
	url: 'www.baidu.com',
	pic: 'Images/icon5.png',
	nav_url: ''
}, {
	name: '外卖的快捷快递件',
	url: 'www.baidu.com',
	pic: 'Images/icon1.png',
	nav_url: ''
}];
var dataBottomNav = [{
	name: '首页',
	url: 'www.baidu.com',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '我的订单',
	url: 'www.baidu.com',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '收藏',
	url: 'www.baidu.com',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}];
var dataChannel = [{
	id: '11',
	name: '新闻动态'
}, {
	id: '22',
	name: '活动优惠'
}];
var dataArticleList = [{
	id: '11',
	href: 'www.baidu.com',
	pic: 'Images/44.jpg',
	title: '摄影大赛投票',
	summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票开始了贷款分类看沙漠里的美丽的地方',
	updatetime: '1451380351',
	pv:229
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: 'Images/11.jpg',
	title: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
	updatetime: '1451380351',
	pv:0
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: '',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351',
	pv:5
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: '',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351',
	pv:33
}, {
	id: '22',
	href: 'www.baidu.com',
	pic: 'Images/11.jpg',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351',
	pv:2
}];
var dataExtendInfo = {
	copyrightinfo: '©2014-2016研究院赶集网'
};
var dataArticle = {
	id: '11',
	href: 'www.baidu.com',
	pic: 'Images/11.jpg',
	title: '摄影大赛投票',
	summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
	posttime: '2016-01-19',
	author: "大苹果头小宝宝",
	content:'<p style="height:500px;text-align:center;margin-top:0px;margin-bottom:0px;padding:0px;outline:0px;border:0px;line-height:1.75em;white-space:normal;color:#333333;font-family:tahoma, arial, 宋体, sans-serif;font-size:14px;">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>'
};
var bluemp = new Object();
var block = new Object();
var tool = new Object();
bluemp.block = block;
bluemp.tool = tool;
bluemp.login = function(){
	sessionStorage.userInfo = JSON.stringify({
		id: '82739',
		name: '小烨子', 
		nick: '小烨子', 
		head: 'http://q.qlogo.cn/qqapp/101139311/23380EC26B96B4FFB4FC1C305627901B/40', 
		gender: '1',
		is_login: 1
	});
	location.reload();
};
bluemp.logout = function(){
	sessionStorage.userInfo = JSON.stringify({
		is_login: 0
	});
	location.reload();
};
block.options = function(opt) {
	
}
block.replyList = function(opt) {
	
}
block.userLogin = function(opt) {
	setTimeout(function() {
		var userInfo = sessionStorage.userInfo;
		opt.fnSuccess(userInfo?JSON.parse(userInfo):{is_login: 0});
	}, 100);
}
tool.Vote = function(opt) {
	
}
block.title = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataTitle);
	}, 100);
}
block.banner = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataBanner);
	}, 100);
}
block.mainNav = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataNav);
	}, 100);
}
block.bottomNav = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataBottomNav);
	}, 100);
}
block.channelList = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataChannel);
	}, 100);
}
block.articleDetail = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataArticle);
	}, 100);
}
block.articleList = function(opt) {
	var arry = [];
	for (var i = 0; i < 20; i++) {
		var article = {
			cid: bluemp_cid,
			id: bluemp_cid+'0'+i,
			href: '/LocalLife/a.html?aid=123',
			pic: 'Images/44.jpg',
			title: '摄影大赛投票'+bluemp_cid+'-0-'+i,
			summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
			updatetime: '1451380351',
			pv:Math.floor(Math.random()*200)
		}
		arry.push(article);
	}
	setTimeout(function() {
		opt.fnSuccess(arry);
	}, 100);
}
block.articleList.prototype.getNextPage = function(opt,callback){
    var cnt = 20;
    var page = opt.page;
	if(page<0 || page>3){
		cnt = 0;
	}else if(page==3){
		cnt = 5;
	}
	var arry = [];
	for (var i = 0; i < cnt; i++) {
		var article = {
			cid: bluemp_cid,
			id: bluemp_cid+''+opt.page+i,
			href: 'www.baidu.com',
			pic: 'Images/44.jpg',
			title: '摄影大赛投票'+bluemp_cid+'-'+opt.page+'-'+i,
			summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
			updatetime: '1451380351'
		}
		arry.push(article);
	}
	setTimeout(function() {
		callback(arry);
	}, 100);
}
block.extendInfo = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataExtendInfo);
	}, 100);
}