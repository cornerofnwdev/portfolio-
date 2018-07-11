app.directive('headerInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
     headerfooter: '=' 
    }, 
    templateUrl: 'js/directives/headerinfo.html' 
  }; 
});