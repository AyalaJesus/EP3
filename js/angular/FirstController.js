angular.module("peliculas", ['ngResource'])

.factory("Post",function($resource){
	return $resource("https://api.themoviedb.org/3/discover/movie?api_key=f5c3f33c99ca3274792a24e3e8949d76",{},{
		query:{method: "GET", isArray:false}
	});
})

.controller("FirstController",function($scope,Post){
	$scope.arreglo=[];
    $scope.ver=function(){
    console.log($scope.aux);
    $scope.mensage = $scope.aux+"  dice: "+$scope.aux2;
    $scope.arreglo.push({post:$scope.mensage})
  }
	Post.query(function(data){
		$scope.movies = data.results;
	});
});