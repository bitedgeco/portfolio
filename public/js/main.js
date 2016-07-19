"use strict";
(function() {

    //NOT AJAX
    // var projects = [];

    // function Project (opts) {
    //     for (var key in opts) this[key] = opts[key];
    // };

    // Project.prototype.toHtml = function() {
    //     var source = $('#project-template').html();
    //     var template = Handlebars.compile(source);
    // return template(this);
    // };

    // projectData.forEach(function(projectObject) {
    //     projects.push(new Project(projectObject));
    // });

    // projects.forEach(function(NewProjectObject){
    //     $('#projects').append(NewProjectObject.toHtml());
    // });

    // AJAX
    ProjectAjax.all = [];

    function ProjectAjax (opts) {
        for (var key in opts) this[key] = opts[key];
    };

    ProjectAjax.prototype.toHtml = function() {
        var source = $('#projectAjax-template').html();
        var template = Handlebars.compile(source);
    return template(this);
    };

    ProjectAjax.loadAll = function (dataWePassIn) {
        dataWePassIn.forEach(function(ele) {
            ProjectAjax.all.push(new ProjectAjax(ele));
        });
    };

    function fetchAll() {
        if (localStorage.projectAjax) {
            var projectData = JSON.parse(localStorage.projectAjax);
            ProjectAjax.loadAll(projectData);
            renderProjectAjax();
        } else {
            $.getJSON("/public/js/projectAjax.json", function(data){
                localStorage.projectAjax = JSON.stringify(data);
                ProjectAjax.loadAll(data);
                renderProjectAjax();
            });
        };
    }

    function renderProjectAjax() {
        ProjectAjax.all.forEach(function(a){
            $('#projectAjax').append(a.toHtml('#projectAjax-template'));
            });
        }; 

    fetchAll();

})();