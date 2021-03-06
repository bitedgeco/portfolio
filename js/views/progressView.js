'use strict';
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
    function getScores(){   //get scores from array of score objects

        var scores = progressBarData.map(function(s) {
            return s.score;
        })

        var totalScore = scores.reduce(function(scoreA, scoreB) {
            return scoreA + scoreB;
        });
        return totalScore;
    }
    // calculate max score
    function getMaxScore(){
        var maxScore = $('.score').size() * 100;
        return maxScore;
    }
    // calculate scores as a percentage of max scores
    function getScorePercent(){
        var scorePercent = getScores()/getMaxScore() * 100;
        scorePercent = scorePercent.toFixed(2);
        return scorePercent;
    }
    
    // output the above 3 functions to the view
    $('#totalScore').text(getScores);
    $('#maxScore').text(getMaxScore);
    $('#scorePercent').text(getScorePercent);

})();