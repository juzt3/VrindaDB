import SimpleSchema from 'simpl-schema';
import { Tracker } from "meteor/tracker";

SimpleSchema.extendOptions(['autoform']);

Personas = new Mongo.Collection("personas");

var Schemas = {};

Schemas.Persona = new SimpleSchema({
	rut: {
		type: String,
		label: "Rut*",
		unique: true,
		custom: function(){
			var tmp = this.value.split('-');
			var digv = tmp[1]; 
			var rut = tmp[0];
			if ( digv == 'K' ) digv = 'k' ;

			var M=0,S=1;
			for(;rut;rut=Math.floor(rut/10))
				S=(S+rut%10*(9-M++%6))%11;

			v = S?S-1:'k';

			if(!(v == digv))
				return "badRut";
		}
	},
	nombre: {
		type: String,
		label: "Nombre *"
	},
	ciudad: {
		type: String,
		label: "Ciudades *",
		autoform: {
			type: "select",
			firstOption: true,
			options: function(){
				return _.map(global.Ciudades, function(c){
					return {label: c, value: c};
				});
			},
		}
	},
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: "Email *"
	},
	whatsapp: {
		type: String,
		regEx: SimpleSchema.RegEx.Phone,
		label: "Whatsapp *"
	},
	inscriptor: {
		type: String,
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
		}
	}
}, {tracker: Tracker});

Schemas.Persona.messageBox.messages({
	en: {
		"badRut": "El Rut no es válido"
	}
});

Personas.attachSchema(Schemas.Persona);