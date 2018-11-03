app.service("myService", ($http)=>{
    this.myFun=()=>{
        return $http.get("http://localhost:3000/products")
        .then(function(posRes){
            return posRes.data;
        },function(errRes){
            return errRes;
        });
    };
});

app.controller("ctrl",["$scope","myService",($scope,myService)=>{
    myService.myFun().then(function(res){
        $scope.result= res;
    });
}]);