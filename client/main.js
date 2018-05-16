import { Template } from 'meteor/templating';
import materialize from 'materialize-css';
import 'materialize-css/sass/materialize.scss';
import AutoFrom from 'meteor/aldeed:autoform';
import dataTables from 'datatables.net-bs';
//import 'datatables.net-bs/css/dataTables.bootstrap.css';
dataTables(window, $);
$.extend(true, $.fn.dataTable.defaults, {
	language: {
		"url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
	}
});

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