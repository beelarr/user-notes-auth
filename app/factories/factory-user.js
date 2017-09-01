"use strict";

app.factory('UserFactory', function ($q, $http) {
    let getUser = () => {
        return $q ((resolve) => {
            $http.get('https://donut-test-data.firebaseio.com/')
        })
    }
})