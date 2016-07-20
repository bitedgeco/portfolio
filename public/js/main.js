"use strict";
(function() {

    var projects = [];

    // function Project (opts) {
    //     for (var key in opts) this[key] = opts[key];
    // };

    // .map, .reduce are .filter are not availible to opts

    function Project (opts) {
        this.name = opts.name;
        this.img = opts.img;
        this.tag = opts.tag;
        this.link = opts.link;
    }

    Project.prototype.toHtml = function() {
        var source = $('#project-template').html();
        var template = Handlebars.compile(source);
        return template(this);
    };

    projectData.forEach(function(projectObject) {
        projects.push(new Project(projectObject));
    });

    projects.forEach(function(NewProjectObject){
        $('#projects').append(NewProjectObject.toHtml());
    });

    // Add all progres bar scores, I would like to calculate the total as a % as ewell but have run out of time

    var scores = $('.score').text(); 

    scores = scores.split("%");
    scores.pop();
    scores = scores.map(Number);
    scores = scores.reduce(function(scoreA, scoreB) {
        return scoreA + scoreB;
    });

    $('#totalScore').text(scores);

})();


