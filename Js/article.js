var href = '';
if(testMode) {
	href = '/LocalLife/index.html';
} else {
	href = '/Portal/channel.html';
}
$('#homeBtn')[0].href = href;
new bluemp.block.articleDetail({
	isDefault: false,
	fnSuccess: function(data) {
		console.log('------------bluemp.block.articleDetail------------');
		console.log(data);
		$('.mui-title').html(data.title);
		$('.bluemp_block_article_detail_title').html(data.title);
		$('.detail_info_time').html(data.posttime);
		$('.detail_info_author').html('来源：' + data.author);
		var summary = data.summary;
		if(summary && summary != '') {
			$('.detail_summary').html('摘要：' + summary).css('display', 'block');
		}
		var pic = data.pic;
		if(pic) {
			$('.bluemp_block_article_detail_cover').html('<img src="' + data.pic + '" />');
		} else {
			$('.bluemp_block_article_detail_cover').remove();
		}
		$('.bluemp_block_article_detail_content').html(data.content);
		if(isWeiXin() && data.reward && (data.reward.flg == 1 || data.reward.flg == '1')) {
			var html = '';
			html += '<div class="bluemp_block_article_AReward">';
			html += '<div class="bluemp_block_article_ARewardDiv">';
			html += '<div class="bluemp_block_article_ARewardTextDiv">';
			html += '<p class="bluemp_block_article_ARewardIcon">';
			html += '<span class="bluemp_block_article_ARewardIconSpan bluemp_block_article_ARewardIconSpan_BgColor1">赏</span>';
			html += '</p>';
			if(data.reward.thankWord == null) {
				data.reward.thankWord = '';
			}
			html += '<p class="bluemp_block_article_ARewardText">' + data.reward.thankWord + '</p>';
			html += '</div>';
			html += '<div class="bluemp_block_article_NumberOfRewards">';
			html += '<ul class="bluemp_block_article_Rewards_ImgList">';
			for(i = 0; data.reward.headerUrl.length > 0 && i < data.reward.headerUrl.length; i++) {
				html += '<li><img src="' + data.reward.headerUrl[i] + '"></li>'
			}
			html += '</ul>';
			html += '<p class="bluemp_block_article_ARewardText2">' + data.reward.people + '人打赏</p>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			$('.bluemp_block_article_detail').after(html);
			$('.bluemp_block_article_ARewardIconSpan').click(function() {
				if(bluemp.loginCheck()) {
					window.location.href = 'http://pay.bluemp.cn/wxpay2/jsapi/pay.php?state=' + bluemp_aid + '_' + viewer_id
				}
			});
		}
	}
});
new bluemp.block.options();
new bluemp.block.replyList();
if($(".article_vote_container")) {
	new bluemp.tool.Vote({
		container: $(".article_vote_container")
	});
}
mui('.mui-scroll-wrapper').scroll();