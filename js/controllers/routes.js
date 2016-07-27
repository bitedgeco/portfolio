'use strict';
page();
page('/', home);
page('/about', about);
page('/projects' , project);
page('/repos' , repo);


function home() {
	homeController();
}

function about() {
    aboutController();
}

function project() {
	projectController();
}

function repo() {
	repoController();
}






