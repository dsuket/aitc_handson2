(function(){

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

		// 日付を初期化
		var now = new Date();
		$startDate.val(formatDate(addDay(now, -7)));
		$endDate.val(formatDate(now));

		// OKボタン
		$('#load-btn').on('tap', function(){
			console.log("tap button!", getAreaname(), getDatetime());
		});
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
	};

})();
