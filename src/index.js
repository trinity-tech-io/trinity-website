import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import Router from './routes';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>, 
	document.getElementById('root')
);