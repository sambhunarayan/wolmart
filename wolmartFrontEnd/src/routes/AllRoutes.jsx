import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/homePage';
import ProductDefault from '../views/productDefault';
import Cart from '../views/cart';
import Checkout from '../views/checkOut';

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/productDefault" element={<ProductDefault />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
		</Routes>
	);
};
