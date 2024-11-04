import { Route, Routes } from 'react-router-dom';
import Login from '../views/Login';
import HomePage from '../views/HomePage';
import ProductDefault from '../views/ProductDefault';
import Cart from '../views/Cart';
import Checkout from '../views/CheckOut';
import Wishlist from '../views/Wishlist';
import MyAccount from '../views/MyAccount';
import Shop from '../views/Shop';

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/productDefault" element={<ProductDefault />} />
			<Route path="/login" element={<Login />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/wishlist" element={<Wishlist />} />
			<Route path="/myAccount" element={<MyAccount />} />
			<Route path="/shop" element={<Shop />} />

		</Routes>
	);
};