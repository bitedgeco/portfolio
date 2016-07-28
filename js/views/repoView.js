'use strict';
(function(module) {

    var repoView = {};

    var repoCompiler = function(data) {
        var source = $('#repo-template').html();
        var template = Handlebars.compile(source);
        return template(data);
    };  

    repoView.renderRepos = function() {
        $('#repo').empty().append(
        reposObj.withTheAttribute('name')  
        .map(repoCompiler)
        );
    };

    reposObj.requestRepos(repoView.renderRepos);
    module.repoView = repoView;

})(window);

