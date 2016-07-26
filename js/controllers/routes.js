'use strict';
$(document).ready(function(){
	page();
	page('/', home);
	page('/about', about);
	page('/projects' , projects);
});

function home() {
	homeController();
}

function about() {
    aboutController();
}

function projects() {
	projectsController();
}





