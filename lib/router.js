FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('MainLayout', {main: 'homePage'});
	}
});

FlowRouter.route('/newdb', {
	name: 'newdb',
	action() {
		BlazeLayout.render('MainLayout', {main: 'newDBPage'});
	}
});

FlowRouter.route('/personas', {
	name: 'personas',
	action() {
		BlazeLayout.render('MainLayout', {main: 'personasPage'});
	}
});

var personasRoutes = FlowRouter.group({
	prefix: '/personas',
	name: 'personas'
});

personasRoutes.route('/new', {
	name: 'new_persona',
	action() {
		BlazeLayout.render('MainLayout', {main: 'newPersona'});
	}
});

var programRoutes = FlowRouter.group({
	prefix: '/program',
	name: 'program'
});

programRoutes.route('/:program_id', {
	name: 'program_details',
	action() {
		BlazeLayout.render('MainLayout', {main: 'programDetailsPage'});
	}
});

programRoutes.route('/:program_id/update', {
	name: 'program_update',
	action() {
		BlazeLayout.render('MainLayout', {main: 'programUpdatePage'});
	}
});

programRoutes.route('/:program_id/newinscripcion', {
	name: 'newInscripcion',
	action() {
		BlazeLayout.render('MainLayout', {main: 'newInscripcionPage'});
	}
});