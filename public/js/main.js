"use strict";
(function() {

	var projects = [];

	// function Project (opts) {
	// 	for (key in opts) this[key] = opts[key];
	// };

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

})();