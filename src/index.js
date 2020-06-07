import React from 'react';
import Routes from './Routes';
import ReactDom from 'react-dom';
import * as firebase from 'firebase';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

import './styles/general.css';
import './styles.css'
ReactDom.render(<Routes/>,document.getElementById("root"));
