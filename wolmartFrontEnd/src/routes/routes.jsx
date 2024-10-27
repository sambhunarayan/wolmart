import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/homePage/homePage';
export const routes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
};
