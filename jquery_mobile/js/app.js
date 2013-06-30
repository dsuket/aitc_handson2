(function(){

	var WEATHER_URL = "http://cloud.projectla.jp/jmaxmldb/search";

	// トップページの初期化
	// live ではなく、on を使う
	$(document).on('pageinit', '#page-top', function(pev) {
		console.log("init #page-top");
		var $areaname = $("#areaname"),
			$startDate = $("#start_date"),
			$endDate = $("#end_date"),
			$list = $("#jmalist"),
			$detail = $('#page-detail'),
			$detailTitle = $('#detail-title'),
			$detailTime = $('#detail-time'),
			$detailList = $('#detail-list');

		// 日付を初期化
		var now = new Date();
		$startDate.val(formatDate(addDay(now, -7)));
		$endDate.val(formatDate(now));

		// エリア名を帰す
		var getAreaname = function() {
			return $areaname.val();
		};
		// 日付リストを返す
		var getDatetime = function() {
			var startDate = $startDate.val() + " 00:00:00",
				endDate = $endDate.val() + " 23:59:59";
			return [startDate, endDate];
		};

		// 防災情報を読み込む
		var loadJmaxmldb = function() {
			var data = {
				areaname: getAreaname(),
				datetime: getDatetime(),
				limit: 10
			};
			var param = jQuery.param(data, true);
			$.mobile.loading('show', {
				text: "loading...",
				textVisible: true
			});
			$.get(WEATHER_URL, param, refreshList)
				.fail(loadFail);
		};
		var loadFail = function(data, status){
			$.mobile.loading('hide');
			alert(status + ": 防災情報の読み込みに失敗しました。");
		};

		// リストを更新
		var refreshList = function(data) {
			$.mobile.loading('hide');
			$list.empty();
			insertData(data);
		};
		// データを挿入
		var insertData = function(data) {
			console.log("insertData", data);
			data.data.forEach(function(d){
				$list.append(createItem(d));
			});
			$list.append(createMore(data.paging.next));
			$list.listview('refresh');
		};
		// リストアイテムを作成
		var createItem = function(data) {
			var item = $('<li class="list-item"><span class="datetime">'+data.datetime+'</span><a href="#">' + data.title + '</a></li>');
			item[0].__data__ = data;
			return item;
		};
		// read moreを作成
		var createMore = function(next){
			if (!next) {
				return null;
			}
			return $('<li id="readmore" data-icon="false"><a href="#">Read more..</a></li>')
				.on('tap', function(ev){
					readMore(next);
				});
		};
		var readMore = function(next) {
			$.mobile.loading('show', {
				text: "loading...",
				textVisible: true
			});
			$.get(next, onLoadMore)
				.fail(loadFail);
		};
		var onLoadMore = function(data) {
			$.mobile.loading('hide');
			$('#readmore').remove();
			insertData(data);
		};

		// リストアイテムをタップした処理
		var onTapItem = function(ev) {
			// console.log("onTapItem", this, this.__data__);
			updateDetail(this.__data__);
			$.mobile.changePage($detail, {transition: "slide"});
		};
		var updateDetail = function(data) {
			$detailTitle.html(data.title);
			$detailTime.html(data.datetime);
			$detailList.empty();
			data.headline.forEach(function(info){
				$detailList.append($('<li>' + info + '</li>'));
			});
		};

		$('#load-btn').on('tap', loadJmaxmldb);
		$list.on('tap', '.list-item', onTapItem);
	});


	var formatDate = function(date) {
		return date.getFullYear() + "-"
				+ padding(date.getMonth() + 1) + "-"
				+ padding(date.getDate());
	};
	var formatDatetime = function(date) {
		return formatDate(date) + " "
				+ padding(date.getHours()) + ":" 
				+ padding(date.getMinutes()) + ":"
				+ padding(date.getSeconds());
	};
	var addDay = function(date, day) {
		var ndate = new Date();
		ndate.setTime(date.getTime() + (day * 60 * 60 * 24 * 1000));
		return ndate;
	};
	var padding = function(num) {
		return  ('0' + num).slice(-2);
	}


})();
