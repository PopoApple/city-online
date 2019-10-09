var href = '';
if(testMode) {
	href = '/LocalLife/index.html';
} else {
	href = '/Portal/channel.html';
}
$('#homeBtn')[0].href = href;
$('.mui-title').html(getChannelName(bluemp_cid));
mui('.mui-scroll-wrapper').scroll();
var currPage = 1;

function appendList(list) {
	if(list.length > 0) {
		var str = '';
		for(var j = 0; j < list.length; j++) {
			var imgStr = '';
			var pic = list[j].pic;
			if(pic) {
				imgStr = '<img src="' + pic + '" class="mui-media-object mui-pull-left demoImg" />';
			}
			var summaryStr = '';
			var summary = list[j].summary;
			if(summary) {
				summaryStr = '<p class="mui-ellipsis-2 listsummary">' + list[j].summary + '</p>';
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
		}
		$('.mui-table-view').append(str).css('display', 'block');
	} else {
		$('#tips').css('display', 'block');
	}
}
var articleList = new bluemp.block.articleList({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.articleList------------');
		console.log('bluemp_cid:'+bluemp_cid);
		console.log(data);
		$('#loading').remove();
		appendList(data);
	}
});
mui('.mui-scroll').pullToRefresh({
	up: {
		auto: false,
		offset: 100, //距离底部高度(到达该高度即触发)
		show: true,
		contentdown: '',
		contentrefresh: '<div class="mui-spinner" style="margin-top:7px"></div>',
		contentnomore: '没有更多了',
		callback: function() {
			var self = this;
			articleList.getNextPage({
				cid: bluemp_cid,
				page: currPage++
			}, function(data) {
				console.log('------------getNextPage------------');
				console.log(data);
				if(data.length > 0) {
					appendList(data);
					self.endPullUpToRefresh();
				} else {
					self.endPullUpToRefresh(true);
				}
			});
		}
	}
});