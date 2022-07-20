import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";

import './i18n'
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback="loading...">
    		<BrowserRouter>
				<Router />
    		</BrowserRouter>
		</Suspense>
	</React.StrictMode>, 
	document.getElementById('root')
);