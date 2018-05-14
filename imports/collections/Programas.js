import SimpleSchema from 'simpl-schema';
import { Tracker } from "meteor/tracker";

SimpleSchema.extendOptions(['autoform']);

Programas = new Mongo.Collection("programas");

var Schemas = {};

Schemas.Programas = new SimpleSchema({
	nombre: {
		type: String,
		label: "Nombre *"
	},
	descripcion: {
		type: String,
		label: "Descripción",
		optional: true
	},
	ciudades: {
		type: Array,
		label: "Ciudades *",
		autoform: {
			type: "select",
			multiple: true,
			firstOption: true,
			options: function(){
				return _.map(global.Ciudades, function(c){
					return {label: c, value: c};
				});
			},
		}
	},
	'ciudades.$': {
		type: String,
		allowedValues: global.Ciudades
	},
	subcategorias: {
		type: Array,
		optional: true,
		autoform: {
			afFieldInput: {
				class: "chips"
			}
		}
	},
	'subcategorias.$': {
		type: String
	},
	inscripciones: {
		type: Array,
		optional: true,
	},
	'inscripciones.$': {
		type: Object
	},
	'inscripciones.$.persona_rut': {
		type: String,
		label: "Rut *",
		custom: function(){
			rut = this.value;
			existe = Personas.find({rut: rut}, {limit: 1}).fetch();
			if(existe.length == 0)
				return "rutNoExists";
		}
	},
	'inscripciones.$.subcategoria': {
		type: String,
		label: "Subcategoria",
		optional: true,
		autoform: {
			type: "select",
			options: function() {
				P = Programas.findOne(FlowRouter.getParam("program_id"));
				return _.map(P && P.subcategorias, function(object){
					return {label: object, value: object};
				});
			}
		}
	},
	'inscripciones.$.fecha': {
		type: Date,
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden",
		}
	},
	administradores: {
		type: Array,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	'administradores.$': {
		type: String,
	},
	colaboradores: {
		type: Array,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	'colaboradores.$': {
		type: String
	},
	creador: {
		type: String,
		optional: true,
		autoform: {
			type: "hidden"
		},
		autoValue: function() {
			if(this.isInsert){
				return Meteor.userId();
			}else if(this.isUpsert)
					return {$setOnInsert: this.value};
				else if(this.isUpdate)
					this.unset();
		},
	},
	fecha_creacion: {
		type: Date,
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
}, {tracker: Tracker});

Schemas.Programas.messageBox.messages({
	en: {
		"rutNoExists": "El Rut ingresado no existe en la base de datos. Debe registrar a la Persona primero."
	}
});

Programas.attachSchema(Schemas.Programas);