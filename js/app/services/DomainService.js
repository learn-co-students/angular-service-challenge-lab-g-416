function DomainService($http){
  this.getData = function(domain_name){
    return $http.get(`/rest/domain/${domain_name}`)
  }
}

angular
  .module('app')
  .service('DomainService', DomainService)
