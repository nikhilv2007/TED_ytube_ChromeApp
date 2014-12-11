
var angMain = angular.module('myApp', []);
	

angMain.controller('MainCtrl', function($scope, $http){

		
	$scope.getAngular = function(){
		$http.get("https://api.ted.com/v1/talks.json?api-key=a5frxymxm2ckq4dtgnfr4wnh")
		.success(function(response, status, headers, config) {$scope.talks = response.talks;})
		.error(function(data, status, headers, config){console.log("error");})
		;
	};
	
	$scope.getVideoId = function(searchQuery){

		var ytURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=items(id(videoId))&q=" +searchQuery+ "&channelId=UCAuUUnT6oDeKwE6v1NGQxug&type=video&key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
		console.log(ytURL);
			
		$http.get(ytURL)
		.success(function(response, status, headers, config) {$scope.videoId = response.items[0].id.videoId;var webview=document.querySelector("webview");
  		webview.src="http://www.youtube.com/embed/" +$scope.videoId+ "?rel=0";console.log($scope.videoId);})
  		
		.error(function(data, status, headers, config){console.log("error whilst retreiving video results from youtube");})
		;
		
	};
		
});
