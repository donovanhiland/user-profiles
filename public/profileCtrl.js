angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends; //FIX ME
});
