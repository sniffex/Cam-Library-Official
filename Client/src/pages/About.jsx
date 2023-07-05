import React, {useEffect} from 'react';
import NavLog from "../partials/NavLog.jsx";
import Nav from "../partials/Nav.jsx";
import { useAuth } from '../contexts/AuthContext';
import axios from "../axios.js";
import {Navigate} from "react-router-dom";

export default function About() {
	const { user, setUser } = useAuth();
	const isLoggedIn = user !== null;

	return (
		<>
			{isLoggedIn ? <NavLog /> : <Nav />}
			<div className="text-6xl font-bold text-slate-600">About Us</div>
			<hr className="bg-slate-400 h-1 w-full my-4" />
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam soluta veniam sequi modi nihil eius explicabo quasi totam quidem voluptatibus ex, obcaecati architecto perspiciatis dolorem magni rem vel cupiditate repudiandae?
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eaque distinctio sunt deleniti voluptatum nostrum expedita voluptatibus aliquid mollitia, nam vero! Sed suscipit saepe quo cupiditate! Voluptatibus illum amet nulla? Eveniet reiciendis voluptas provident aliquid, voluptatum, tempora reprehenderit neque, ad ipsa similique quae dignissimos amet odio distinctio atque! Deserunt animi dicta quisquam voluptates iste dolorum architecto, sapiente numquam ipsa! Odit. Adipisci dignissimos tempora, praesentium excepturi, iste aliquid, debitis rem id aperiam itaque asperiores soluta similique eligendi sint ut necessitatibus architecto quos ab fugiat harum rerum magnam nulla distinctio? Aut, nesciunt. Voluptates doloribus quibusdam voluptatem vero in. Itaque dicta quae error nemo sapiente quos id, magnam numquam maiores vero sed perferendis quia nihil impedit deleniti doloremque repellat! Ullam rem libero ut?
			</p>
		</>
	);
}
