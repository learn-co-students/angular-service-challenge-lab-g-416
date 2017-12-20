function SubRedditService($http) {
  this.getData = subreddit => $http.get(`/rest/subreddit/${subreddit}`)
}

angular
  .module("app")
  .service("SubRedditService", SubRedditService)
