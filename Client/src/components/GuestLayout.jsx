import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import HomeBook from '../partials/BookComponents/HomeBook';
import Footer from '../partials/Footer';
import Navbar from '../partials/Nav';
export default function GuestLayout() {
	const { user } = useAuth();

	// if user is logged in, redirect to profile page
	if (user) {
		return <Navigate to="/homelogin" />;
	}
	return (
		<>
			<Outlet/>
		</>
	);
}
