Template.c_MainNavbar.onRendered(function(){	
	$(".button-collapse").sideNav({
		menuWidth: 300,
		closeOnClick: true,
		draggable: true,
	});
	
	$(".collapsible").collapsible();
});

Template.c_MainNavbar.events({
	'click #logout'(event) {
		Meteor.logout();
		FlowRouter.go('/');
	},
});

Template.c_MainNavbar.helpers({
	mis_programas: function(){
		return Programas.find({creador: Meteor.userId()}).fetch();
	}
});