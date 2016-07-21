"use strict";
(function() {

    // Send progress data to handelbars template

    var progressBars = [];

    function ProgressBar (opts) {
        for (var key in opts) this[key] = opts[key];
    };

    ProgressBar.prototype.toHtml = function() {
        var source = $('#progressBar-template').html();
        var template = Handlebars.compile(source);
        return template(this);
    };

    progressBarData.forEach(function(progressBarObject) {
        progressBars.push(new ProgressBar(progressBarObject));
    });

    progressBars.forEach(function(NewProgressBarObject){
        $('#progressBar').append(NewProgressBarObject.toHtml());
    });

    // Add all progres bar scores
    function getScores(){
        var scores = $('.score').text(); 
        scores = scores.split("%");
        scores.pop();
        scores = scores.map(Number);
        var totalScore = scores.reduce(function(scoreA, scoreB) {
            return scoreA + scoreB;
        });
        return totalScore;
    }
    // calculate max score
    function getMaxScore(){
        var maxScore = $('.score').size() * 100;
        return maxScore
    }
    // calculate scores as a percentage of max scores
    function getScorePercent(){
        var scorePercent = getScores()/getMaxScore() * 100;
        scorePercent = scorePercent.toFixed(2);
        return scorePercent;
    }
    
    $('#totalScore').text(getScores);
    $('#maxScore').text(getMaxScore);
    $('#scorePercent').text(getScorePercent);

    // Send project data to handelbars template
    var projects = [];

    function Project (opts) {
        for (var key in opts) this[key] = opts[key];
    };

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

})();






