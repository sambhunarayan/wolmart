import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './views/homePage';
import ScrollTop from './components/scrollTop';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="page-wrapper">
				<Header />
				<Homepage />
				<Footer />
			</div>
			<ScrollTop />
		</>
	);
}

export default App;
