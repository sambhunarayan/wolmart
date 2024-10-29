import React from 'react';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<AllRoutes />
		</Router>
	);
}

export default App;
