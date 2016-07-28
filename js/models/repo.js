'use strict';
(function(module) {

    var reposObj = {};

    reposObj.allRepos = [];

    reposObj.requestRepos = function(nextFunction) {
        $.ajax({
        url: 'https://api.github.com/users/bitedgeco/repos' +
        '?per_page=3' +
        '&sort=update',
        type: 'GET',
        headers: {
        },
        success: function(data, message, xhr) {
            reposObj.allRepos = data;
            nextFunction();
            }
        });
    };

    reposObj.withTheAttribute = function(myAttr) {
        return reposObj.allRepos.filter(function(aRepo) {
        return aRepo[myAttr];
        });
    };

    module.reposObj = reposObj;
    
})(window);