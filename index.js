require('./index.html');
require('./index.css')

import {initializeEditor} from './diaged/editor';

var container = document.getElementById("container");
var editor = initializeEditor(container,"1",null);





