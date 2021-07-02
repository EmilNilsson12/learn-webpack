import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.png';
import { functionOne, functionTwo } from './myModule';
import DataXML from './data.xml';
import DataCSV1 from './data1.csv';
import DataCSV2 from './data2.csv';

function component(string = 'Jeff') {
	const element = document.createElement('div');

	// following code uses Lodash
	// Now imported from the node_modules folder
	element.innerHTML = myName(string);
	element.classList.add('hello');

	// Add the image to our existing div.

	const myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	console.log(DataXML);
	console.log(DataCSV1);
	console.log(DataCSV2);

	return element;
}

document.body.appendChild(component());
