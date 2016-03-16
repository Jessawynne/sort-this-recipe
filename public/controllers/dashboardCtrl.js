'use strict';

app.controller('dashboardCtrl', [
  '$scope',

  function ($scope) {

    $scope.categories = [
      {'name' : 'Dairy-Free', 'id': 'cat001'},
      {'name' : 'Gluten-Free', 'id': 'cat002'},
      {'name' : 'Soy-Free', 'id': 'cat003'},
      {'name' : 'Vegan', 'id': 'cat004'},
      {'name' : '', 'id': 'cat005'},
      {'name' : '', 'id': 'cat006'},
      {'name' : '', 'id': 'cat007'},
      {'name' : '', 'id': 'cat008'},
      {'name' : '', 'id': 'cat009'},
      {'name' : '', 'id': 'cat010'}
    ]

    $scope.selection = {
      ids: {'': true}
    };
  }
])
