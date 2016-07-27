'use strict';
(function() {

    // Send project data to handelbars template
    
    var project = [];

    function Project (opts) {
        for (var key in opts) this[key] = opts[key];
    };

    Project.prototype.toHtml = function() {
        var source = $('#project-template').html();
        var template = Handlebars.compile(source);
        return template(this);
    };

    projectData.forEach(function(projectObject) {
        project.push(new Project(projectObject));
    });

    project.forEach(function(NewProjectObject){
        $('#project').append(NewProjectObject.toHtml());
    });

})();
