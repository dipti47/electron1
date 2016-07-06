// ===================================================
// Angular Factory to create service to peform CRUD
// ===================================================

app.factory("$kiarafactory", function ($http, $q, $timeout) {

 	function validateLicenseno(lcode){
        var deferred = $q.defer();
        console.log(lcode);
        $http({
            method: 'POST',
            url: 'http://10.0.2.97:7080/Kiara_WS/webresources/validazioneLicenza/checkLicenza',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },  
            data:{"license_code":lcode}
           })
            .then(function (response) {
                deferred.resolve(response)                              
            },
            function (response) {
                deferred.reject("Error in server");
            });

            //*****for test ************/
            // $http.get('licenseapi/licenense.json')
            // .success(function(response) {
            //     //console.log(response);
            //     deferred.resolve(response);
            // })
            // .error(function() {
            //     deferred.reject('could not find someFile.json');
            // });

        return deferred.promise;
    };

    return{
    	validateLicenseno:validateLicenseno
    }
});
