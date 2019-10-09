mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
new bluemp.block.userLogin({
	isDefault: false,
	fnSuccess: function(data) {
		if(data.is_login) {
			$('#userName').html(data.name);
			$('#head_login img')[0].src = data.head;
			$('#head_login').css('display', 'block');
			$('#head_logout').css('display', 'none');
			$('#loginArea').click(function() {
				var href;
				if(testMode) {
					href = '/LocalLife/person.html';
				} else {
					href = '/Portal/ucenter/userid/' + data.id + '.html';
				}
				location.href = href;
			});
		} else {
			$('#userName').html('登录');
			$('#head_login').css('display', 'none');
			$('#head_logout').css('display', 'inline-block');
			$('#loginArea').click(function() {
				bluemp.login();
			});
		}
	}
});
new bluemp.block.title({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.title------------');
		console.log(data);
		builtTitle(data);
	}
});
new bluemp.block.extendInfo({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.extendInfo------------');
		console.log(data);
		builtExtendInfo(data);
	}
});
new bluemp.block.banner({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.banner------------');
		console.log(data);
		builtBanner(data);
	}
});
new bluemp.block.mainNav({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.mainNav------------');
		console.log(data);
		builtMainNav(data);
	}
});
new bluemp.block.bottomNav({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.bottomNav------------');
		console.log(data);
		builtBottomNav(data);
	}
});
new bluemp.block.channelList({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.channelList------------');
		console.log(data);
		builtChannelList(data);
	}
});

function builtTitle(dTitle) {
	var str = '';
	if(dTitle.logo) {
		str += '<img src="' + dTitle.logo + '" align="absmiddle" />';
	}
	var webname = dTitle.webname;
	if(webname != '无') {
		str += '<span class="muix-title-text">' + webname + '</span>';
	}
	$('.mui-title').html(str);
}

function builtExtendInfo(data) {
	var copyright = data.copyrightinfo;
	if(copyright && copyright != '') {
		$('.footer').html(copyright);
	}
}

function bannerItem(dBannerI) {
	var url = dBannerI.url;
	if(!url || url == '') {
		url = 'javascript:;';
	}
	var title = dBannerI.title;
	var titleBar = '';
	if(title && title != '') {
		titleBar = '<p class="mui-slider-title">' + title + '</p>';
	}
	var str = '<div class="mui-slider-item">' +
		'<a href="' + url + '" >' +
		'<img src="' + dBannerI.pic + '" />' + titleBar +
		'</a>' +
		'</div>';
	return str;
}

function builtBanner(data) {
	var dBanner = data.carouselpic;
	if(dBanner && dBanner.length > 0) {
		if(dBanner.length == 1 && dBanner[0].pic.indexOf('/Public/Images') == 0) {
			return;
		}
		var str = '',
			dotStr = '<div class="mui-indicator mui-active"></div>';
		str = bannerItem(dBanner[dBanner.length - 1]);
		for(var i = 0; i < dBanner.length; i++) {
			str += bannerItem(dBanner[i]);
			if(i > 0) {
				dotStr += '<div class="mui-indicator"></div>';
			}
		}
		str += bannerItem(dBanner[0]);
		$('.mui-slider-group').html(str);
		$('.mui-slider').css('display', 'block');
		if(dBanner.length > 1) {
			var imgs = $('.mui-slider-item img');
			for(var i = 0; i < imgs.length; i++) {
				imgs[i].onload = function() {
					updateSliderH();
				}
			}
			$('.mui-slider-indicator').html(dotStr);
			mui('.mui-slider').slider({
				interval: 4000
			});
		}
	}
}

function updateSliderH() {
	var imgs = $('.mui-slider-item img');
	var maxH = 0;
	for(var i = 0; i < imgs.length; i++) {
		var h = imgs[i].height;
		maxH = h > maxH ? h : maxH;
	}
	$('.mui-slider-item').css('height', maxH + 'px');
}

function builtMainNav(dNav) {
	var len = dNav.length;
	if(len <= 0) {
		return;
	}
	str1 = '', str2 = '';
	var colClassArry = ['mui-col-xs-12', 'mui-col-xs-6', 'mui-col-xs-4', 'mui-col-xs-3'];
	var navColors = ['rgb(252,182,22)', 'rgb(150,163,252)', 'rgb(249,145,97)', 'rgb(198,151,216)', 'rgb(143,165,173)', 'rgb(237,100,146)', 'rgb(102,204,238)', 'rgb(152,206,90)'];
	var rowSize = 4;
	if(len == 1 || len == 2) {
		rowSize = len;
	} else if(len % 3 == 0 && len % 4 != 0) {
		rowSize = 3;
	}
	var colClass = colClassArry[rowSize - 1];
	var rowCnt = Math.ceil(len / rowSize);
	var navWrap = $('#navs');
	navWrap.empty();
	for(var i = 0; i < rowCnt; i++) {
		navWrap.append('<div class="mui-row mui-text-center"></div>');
	}
	var colorLen = navColors.length;
	for(var i = 0; i < len; i++) {
		var dI = dNav[i];
		var color = navColors[i % colorLen];
		var rowIdx = Math.ceil((i + 1) / rowSize) - 1;
		var rowEle = navWrap.find('.mui-row').eq(rowIdx);
		var colEle = $('<div class="' + colClass + '">' +
			'<a href="' + dI.url + '">' +
			'<span class="grid_nav" style="background:' + color + '">' +
			'</span>' +
			'</a>' +
			'</div>');
		rowEle.append(colEle);
		var pic = dI.pic;
		var name = dI.name;
		var circleEle = colEle.find('.grid_nav');
		if(pic) {
			var imgEle = $('<img src="' + pic + '" class="grid_nav_img" style="display:none;" />');
			imgEle[0].onload = function() {
				this.style.display = 'block';
			}
			circleEle.append(imgEle);
			if(name != '无') {
				colEle.find('a').append('<h6>' + name + '</h6>');
			}
		} else {
			if(name != '无') {
				circleEle.append('<h6 class="grid_nav_text_only">' + name + '</h6>');
			}
		}
	}
	$('#navs').css('display', 'block');
}

function builtBottomNav(data) {
	var str = '';
	for(var i = 0; i < data.length; i++) {
		var pic = data[i].pic;
		var imgStr = '';
		if(pic && pic != '') {
			imgStr = '<img class="aside_li_img" src="' + pic + '"  align="absmiddle" /> ';
		}
		str += '<li class="mui-table-view-cell">' +
			'<a href="' + data[i].url + '" class="mui-navigate-right">' +
			imgStr + data[i].name +
			'</a>' +
			'</li>';
	}
	$('#sideMenu').html(str);
}

function builtArticleList(list) {
	if(list.length > 0) {
		var str = '<ul class="mui-table-view">';
		for(var j = 0; j < list.length; j++) {
			var imgStr = '';
			var pic = list[j].pic;
			if(pic) {
				imgStr = '<img src="' + pic + '" class="mui-media-object mui-pull-left demoImg" />';
			}
			var summaryStr = '';
			var summary = list[j].summary;
			if(summary) {
				summaryStr = '<p class="mui-ellipsis-2 listsummary">' + summary + '</p>';
			}
			str += '<li class="mui-table-view-cell mui-media">' +
				'<a href="' + list[j].href + '">' + imgStr +
				'<div class="mui-media-body mui-ellipsis">' + list[j].title + summaryStr +
				'</div>' +
				'<div class="mui-h6 listtime">' +
				'<div class="listTimeText">' + formatDate(list[j].updatetime) + '</div>' +
				'<div class="eyeCnt">' + list[j].pv + '</div>' +
				'</div>' +
				'</a>' +
				'</li>';
			if(j == 2) {
				break;
			}
		}
		str += '</ul>';
		$('.main_section[data-cid="' + list[0].cid + '"]').append(str).css('display', 'block');
	}
}

function builtChannelList(dChannel) {
	for(var i = 0; i < dChannel.length; i++) {
		var str = '<div class="main_section" style="display:none" data-cid="' + dChannel[i].id + '" >' +
			'<div class="main_section_header channel_header">' +
			'<h3 class="main_section_title">' + dChannel[i].name + '</h3>' +
			'<a class="mui-icon mui-icon-forward"></a>' +
			'</div>' +
			'</div>';
		$('#channels').append(str);
		bluemp_cid = dChannel[i].id;
		new bluemp.block.articleList({
			isDefault: false,
			fnSuccess: function(data) {
				if(data && data.length > 0) {
					var cid = data[0].cid;
					console.log('------------bluemp.block.articleList------------');
					console.log('cid:'+cid);
					console.log(data);
					builtArticleList(data);
				}
			}
		});
	}
}
$(document).on('tap', '.channel_header', function() {
	bluemp_cid = $(this).parent().data('cid');
	var href = '';
	if(testMode) {
		href = '/LocalLife/alist.html?cid=' + bluemp_cid;
	} else {
		href = '/Portal/articlelist.html?cid=' + bluemp_cid;
	}
	location.href = href;
});
$(window).on('resize', function() {
	updateSliderH();
});