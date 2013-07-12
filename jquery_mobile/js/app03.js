(function(){

	var WEATHER_URL = "http://cloud.projectla.jp/jmaxmldb/search";
	var listData;

	/******************************************************
	 * トップページの初期化
	 *   live ではなく、on を使う
	 */
	$(document).on('pageinit', '#page-top', function(pev) {
		console.log("init #page-top");
		var $startDate = $("#start_date"),
			$endDate = $("#end_date");

		// エリア名を帰す
		var getAreaname = function() {
			return $("#areaname").val();
		};
		// 日付リストを返す
		var getDatetime = function() {
			return [
				$startDate.val() + " 00:00:00",
				$endDate.val() + " 23:59:59"
			];
		};

		// 防災情報を読み込む
		var loadJmaxmldb = function(areaname, datetime) {
			var param = jQuery.param({
				areaname: areaname,
				datetime: datetime,
				limit: 10
			}, true);
			$.mobile.loading('show', {
				text: "loading...",
				textVisible: true
			});
			$.get(WEATHER_URL, param, showListPage)
				.fail(loadFail);
		};

		// list ページを表示
		var showListPage = function(data) {
			$.mobile.loading('hide');
			data.areaname = getAreaname();
			listData = data
			$.mobile.changePage("#page-list", {transition: "slide"});
		};

		// 日付を初期化
		var now = new Date();
		$startDate.val(formatDate(addDay(now, -7)));
		$endDate.val(formatDate(now));

		// OKボタン
		$('#load-btn').on('tap', function(){
			loadJmaxmldb(getAreaname(), getDatetime());
		});
	});

	/******************************************************
	 * listページの初期化
	 */
	$(document).on('pageinit', '#page-list', function(pev) {
		console.log("init #page-list");
		var $this = $(this),
			$title = $this.find('.ui-header .title'),
			$list = $("#jmalist");

		var insertData = function(data) {
			console.log("insertData", data);
			data.data.forEach(function(d){
				$list.append(createItem(d));
			});
			$list.listview('refresh');
		};
		// リストアイテムを作成
		var createItem = function(data) {
			var item = $(
	             '<li class="list-item">' + 
	             	'<span class="datetime">' + data.datetime + '</span>' +
             		'<a href="#">' + data.title + '</a>' + 
         		'</li>'
	        );
			return item;
		};

		$this.on('pageshow', function(){
			var data = listData;
			$list.empty();
			if (data) {
				$title.html(data.areaname + " 防災情報");
				insertData(data);
			}
		});
	});

	var loadFail = function(data, status){
		$.mobile.loading('hide');
		alert(status + ": 防災情報の読み込みに失敗しました。");
	};

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
	};

})();
