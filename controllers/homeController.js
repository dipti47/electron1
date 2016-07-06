"USE STRICT";
app.controller("homeController", function($scope,$state, $location, dbService,$kiarafactory){
	$scope.checklicenseno = function(){
		$scope.loading = true;
		var licensecode = $scope.license.licensecode;
	    alert(licensecode);
		$kiarafactory.validateLicenseno(licensecode).then(function(response){
            //var licenseresponse = JSON.parse(response);
            //$scope.loading = false;
            //console.log(response);
            var licenseresponse = response;                        
            //$scope.licenseres = licenseresponse;
            console.log(licenseresponse['data']['esito']);
		
            if(licenseresponse['data']['esito']){
            	//console.log(licenseresponse['data']['informazioniIdentita']['azienda']);
            	$state.go('list');
            }else{
            	alert('Invalid response');
            }            
			            
            //$state.go('movies');
            $scope.loading = false;

        },function(response){
            alert(response);
            $scope.loading = false;
            $state.go('list');
        });       
    };
});