// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="page-wrapper">
				<Header />
			</div>
			<Footer />
		</>
	);
}

export default App;
