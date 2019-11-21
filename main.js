angular.module("myApps", []).controller("myCTRL",
function($scope,$location,$anchorScroll){
    $scope.scrollTo= function(scrollLocation){
        $location.hash(scrollLocation); 
        $anchorScroll.yOffset = 0;
        $anchorScroll()
    }   
    $scope.openNav = function(){
        document.getElementById('mynav').style.width="100%";
    } 
    $scope.closeNav = function(){
        document.getElementById('mynav').style.width="0%";
    }
});









// function openNav(){
//     document.getElementById('mynav').style.width="100%";
// }
// function closeNav(){
//     document.getElementById('mynav').style.width="0%";
// }