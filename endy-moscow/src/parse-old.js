var VK = require("VK-Promise");
var vk = new VK("ed34728c54c81d6f279a22c3012c163c65f0f09925987d161b40326b0d3466302119685fab90717e4753a");

var creds = require('./client_id.json');
var GoogleSpreadsheet = require("google-sheets-node-api");
var mySheet = new GoogleSpreadsheet('<1gvJDX_aushf7dKxYeMmiC6JNttflPmTpbCrDsG5Zsw0>');

function timeConverter(t) {
  var a = new Date(t * 1000);
  var year = a.getFullYear();
  var month = addZero(a.getMonth());
  var date = a.getDate();
  var hour = addZero(a.getHours());
  var min = addZero(a.getMinutes());
  var sec = addZero(a.getSeconds());
  var time = year + '.' + month + '.' + date + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

my_sheet.useServiceAccountAuth(creds, function(err) {

      // getInfo returns info about the sheet and an array or "worksheet" objects
      my_sheet.getInfo(function(err, sheet_info) {
        console.log(sheet_info + ' is loaded');
      });
      //
      // vk.wall.get({
      // 		owner_id: -15755094,
      // 		count: 100
      // }).then(function(result) {
      // 	mySheet.useServiceAccountAuth(creds).then(mySheet.getSpreadsheet.bind(mySheet)).then(function(sheet_info) {
      // 		console.log( sheet_info.title + ' is loaded' );
      // 		var sheet1 = sheet_info.worksheets[0];
      //
      // 		var posts = result.items.filter(function(post) {
      // 			var dt = new Date(post.date*1000);
      // 			var hr = dt.getHours();
      // 			return hr > 16 && hr < 24;
      // 		});
      //
      // 		console.log('Posts length: ' + posts.length);
      //
      // 		posts.map((post) => {
      // 			setTimeout({
      // 				var likes = post.likes.count;
      // 				var text = post.text;
      // 				var date = timeConverter(post.date);
      // 				var comments = post.comments.count;
      // 				var views = post.views.count;
      // 				sheet1.addRow({
      // 					'LikesCount': likes,
      // 					'Date' : date,
      // 					'Text': text,
      // 					'ViewsCount' : views,
      // 					'CommentsCount' : comments
      // 				});
      // 			}, 1000);
      // 		});
      // 	});
      // }).then(function(results){
      // 		console.log('yo')
      // }).catch(console.log.bind(console));
      //









      // vk.wall.get({
      // 		owner_id: -15755094,
      // 		count: 20,
      // }).then(function(result) {
      // mySheet.useServiceAccountAuth(creds).then(mySheet.getSpreadsheet.bind(mySheet)).then(function(sheet_info) {
      // 		console.log( sheet_info.title + ' is loaded' );
      // 		var sheet1 = sheet_info.worksheets[0];

      // 		var posts = result.items.filter(function(post) {
      // 			var dt = new Date(post.date*1000);
      // 			var hr = dt.getHours();
      // 			return hr > 16 && hr < 24;
      // 		});

      // 		console.log('Posts length: ' + posts.length);
      // 		result.items.map((post) => {
      // 			console.log('after: ' + post.date);
      // 			var likes = post.likes.count;
      // 			var text = post.text;
      // 			var date = timeConverter(post.date);
      // 			var comments = post.comments.count;
      // 			var views = post.views.count;
      // 			sheet1.addRow({
      // 				'LikesCount': likes,
      // 				'Date' : date,
      // 				'Text': text,
      // 				'ViewsCount' : views,
      // 				'CommentsCount' : comments
      // 			});
      // 			console.log('sent: ' + post.date)
      // 		});
      // 	});
      // }).catch(console.log.bind(console));