Template.programDetailsPage.onRendered(function(){
	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrainWidth: false, // Does not change width of dropdown to that of the activator
		gutter: 0, // Spacing from edge
		belowOrigin: false, // Displays dropdown below the button
		stopPropagation: false, // Stops event propagation
	});
});

Template.programDetailsPage.helpers({
	programa: function(){
		return Programas.findOne({_id: FlowRouter.getParam("program_id")});
	}
});