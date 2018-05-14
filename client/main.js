import { Template } from 'meteor/templating';
import materialize from 'materialize-css';
import 'materialize-css/sass/materialize.scss';
import AutoFrom from 'meteor/aldeed:autoform';

AutoForm.debug(); //no usar en produccion
AutoForm.setDefaultTemplate('materialize');

T9n.setLanguage('es');

//Global Variables
global.Ciudades = [
	'Arica',
	'Antofagasta',
	'La Serena',
	'Vicuña',
	'Catemu',
	'Viña del Mar',
	'Valparaíso',
	'Santiago',
	'Paine',
	'Rancagua', 
	'Concepción', 
	'Chillan',
	'Temuco',
	'Los Angeles',
	'Puerto Varas'
];

import './main.html';

//Collections
import '/imports/collections';

//Components
import '/imports/ui/components';

//Layouts
//import '/imports/ui/layouts';

//Pages
import '/imports/ui/pages';