angular
  .module('app')
  .service('SubRedditService', function ($http) {
    this.getData = function (subReddit) {
      return $http.get(`/rest/subreddit/${subReddit}`)
    }
  })
