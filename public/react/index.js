import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'
import {HashRouter as Router} from 'react-router-dom';
import  { App } from './components/App';

ReactDOM.render(
	<Router>
	< App /> //glue this
	 </Router>,
	document.getElementById('root') //to thi
);