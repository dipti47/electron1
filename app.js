var app = angular.module('cdg', ['ui.router','angularUtils.directives.dirPagination','pascalprecht.translate','ngCookies']);
const fs = require("fs");
const path = require("path");
const sqlite3 = require('sqlite3').verbose();

// For detect os language  
var osLocale = require('os-locale');
osLocale(function (err, locale) {
  console.log(locale);
  //=> 'en_US' 
});


  app.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img src="./images/ajax-loader.gif" width="20" height="20" />LOADING...</div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('/',{
        url:'/',
        views:{
          'kiaraview' :{
            templateUrl:'views/home.html',
            controller:'homeController'
          }

        }        
    }).state('list',{   
    	url:'/list',     
        views:{
          'kiaraview' :{
            templateUrl:'views/pessoa.html',
            controller:'pessoaController'
          }

        }        
    }).state('error',{   
    	url:'/error',     
        views:{
          'kiaraview' :{
            templateUrl:'views/error.html',
            controller:'errorController'
          }

        }        
    }).state('registry',{   
      url:'/registry',     
        views:{
          'kiaraview' :{
            templateUrl:'views/registry.html',
            controller:'registryController'
          }

        }        
    });
    $urlRouterProvider.otherwise('/registry');
});

app.config(['$translateProvider', function ($translateProvider) {


  // configures staticFilesLoader
  $translateProvider.useStaticFilesLoader({
    prefix: 'language/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
  $translateProvider.useLocalStorage();
  $translateProvider.useSanitizeValueStrategy(null);
  

}]);

app.run(function($rootScope) {
  var file1 = path.join(__dirname, "model/DbProgressivoNegozio");
  var exists1 = fs.existsSync(file1);
  if (!exists1) {
    var db1 = new sqlite3.Database(file1);
    console.log("Creating DB DbProgressivoNegozio file.");
    scriptDbProgressivoNegozio.createTables(db1);
  }
  var file2 = path.join(__dirname, "model/DbParametri");
  var exists2 = fs.existsSync(file2);
  if (!exists2) {
    var db2 = new sqlite3.Database(file2);
    console.log("Creating DB DbParametri file.");
    scriptDbParametri.createTables(db2);
  }
  var file3 = path.join(__dirname, "model/DbAnagrafica");
  var exists3 = fs.existsSync(file3);
  if (!exists3) {
    console.log("Creating DB DbAnagrafica file.");
    var db3 = new sqlite3.Database(file3);
    scriptDbAnagrafica.createTables(db3);
  }
  var file4 = path.join(__dirname, "model/DbComanda");
  var exists4 = fs.existsSync(file4);
  if (!exists4) {
    console.log("Creating DB DbComanda file.");
    var db4 = new sqlite3.Database(file4);
    scriptDbComanda.createTables(db4);
  }
  var file5 = path.join(__dirname, "model/DbInventario");
  var exists5 = fs.existsSync(file5);
  if (!exists5) {

    console.log("Creating DB DbInventario file.");
    var db5 = new sqlite3.Database(file5);
    scriptDbInventario.createTables(db5);
  }
  var file6 = path.join(__dirname, "model/DbPromo");
  var exists6 = fs.existsSync(file6);
  if (!exists6) {
    console.log("Creating DB DbPromo file.");
    var db6 = new sqlite3.Database(file6);
    scriptDbPromo.createTables(db6);
  }
  var file7 = path.join(__dirname, "model/DbScontrini");
  var exists7 = fs.existsSync(file7);
  if (!exists7) {
    var db7 = new sqlite3.Database(file7);
    console.log("Creating DB DbScontrini file.");
    scriptDbScontrini.createTables(db7);
  }
  

});

