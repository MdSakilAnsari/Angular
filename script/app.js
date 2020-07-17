(function(){
    'use strict'
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',function($scope){
        $scope.takeInput="";
        $scope.result="";
        $scope.font="";

        $scope.CheckEnough=function(){
            $scope.result=ValidateText($scope.takeInput);
        };
        function ValidateText(string)
        {
            if(string=="")
            {
                $scope.font="danger";
                return "Please enter data first";
            }    
            var arr=string.split(","); 
            var result=""; 
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i]<=3)
                    result="Enjoy!";
                if(arr[i]>3)
                    result="Too Much!";
                $scope.font="success";
            }
        return result;
        };
    });
})();