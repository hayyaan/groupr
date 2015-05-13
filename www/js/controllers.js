angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })

// .controller('PlaylistCtrl', function($scope, $stateParams) {
// })

.controller('ProfileCtrl', function($scope) {
  
})

.controller('SettingsCtrl', function($scope) {
  
})


.controller('HomeCtrl', function($scope) {
  
})

.controller('ActivitiesCtrl', function($scope) {
  $scope.activities = [
    {id:1, sport_id:1,name:"play with me",by:"user",place:"Model Town Club", time:"7:30PM", people: 5},
    {id:2, sport_id:2,name:"play with me",by:"user",place:"Model Town Club", time:"7:30PM", people: 5},
    {id:3, sport_id:1,name:"play with me",by:"user",place:"Defence Club", time:"7:30PM", people: 5},
    {id:4, sport_id:4,name:"play with me",by:"user",place:"Defence Sports Complex", time:"7:30PM", people: 5},
    {id:5, sport_id:1,name:"play with me",by:"user",place:"Model Town Club", time:"7:30PM", people: 5},
  ];
})

.controller('ActivityCtrl', function($scope) {
  
})

.controller('AddCtrl', function($scope) {
  
})
;
