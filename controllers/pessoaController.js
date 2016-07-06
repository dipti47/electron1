"USE STRICT";
app.controller("pessoaController", function($scope,$translate, $location, dbService){
	//unzip the folder
	
	$scope.downlaodRegistry = function(){
		alert('ok');		
		var extract = require('extract-zip');
		extract("registry.zip", {dir: "releases"}, function (err) {
 			// extraction is complete. make sure to handle the err
		})
	}
	//Listando
	$scope.listaPessoas = function(){
		dbService.runAsync("SELECT * FROM pessoas WHERE ativo = 1", function(data){
			$scope.pessoas = data;
		});
	}

	//Salvando
	$scope.salvar = function(){
		if($scope.pessoa.id){
			//Editar
			var id = $scope.pessoa.id;
			delete $scope.pessoa.id;
			delete $scope.pessoa.$$hashKey; //Apaga elemento $$hashKey do objeto
			dbService.update('pessoas', $scope.pessoa, {id: id}); //entidade, dados, where
		}else{
			//nova
			dbService.insert('pessoas', $scope.pessoa); // entidade, dados
		}
		$scope.pessoa = {};
		$scope.listaPessoas();
		$('#modalPessoa').modal('hide');
	}

	//Abrindo para editar
	$scope.editar = function(dados){
		$scope.pessoa = dados;
		$('#modalPessoa').modal('show');
	}

	//Excluindo
	$scope.excluir = function(dados){
		if(confirm("Deseja realmente apagar o cadastro de "+dados.nome+"?")){
			dbService.update('pessoas', {ativo:0}, {id: dados.id});
			$scope.listaPessoas();
		}
	}
	$scope.changeLanguage = function (langKey) {
	 	console.log('test');
    	$translate.use(langKey);
  	};
});