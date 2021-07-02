import _ from 'lodash';
import myName from './myName';
import { functionOne, functionTwo } from './myModule';

function component(string = 'Jeff') {
	const element = document.createElement('div');

	// following code uses Lodash
	// Now imported from the node_modules folder
	element.innerHTML = myName(string);

	return element;
}

document.body.appendChild(component());
document.body.appendChild(component());
document.body.appendChild(component(functionOne()));
document.body.appendChild(component('Overwriting "Jeff"'));
document.body.appendChild(component(functionTwo()));
