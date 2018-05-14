Template.newInscripcionPage.helpers({
	program: function(){
		return Programas.findOne({_id: FlowRouter.getParam("program_id")});
	}
})