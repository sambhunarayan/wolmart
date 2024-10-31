import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';
import ProductDefault from '../views/ProductDefault';
import Cart from '../views/Cart';
import Checkout from '../views/CheckOut';

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			{/* <Route path="/productDefault/:productId" element={<ProductDefault />} /> */}

			<Route path="/productDefault" element={<ProductDefault />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
		</Routes>
	);
};
