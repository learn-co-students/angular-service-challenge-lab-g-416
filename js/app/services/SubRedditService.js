function SubRedditService($http){

    this.getData = function (path) {
        return $http.get('/rest/subreddit/' + path)
    }
}

angular
    .module('app')
    .service('SubRedditService', SubRedditService)