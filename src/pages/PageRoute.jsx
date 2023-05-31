/** @format */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home';
import Services from './service/Services';
import Header from '../components/Header';
import Contact from './contact/Contact';
import Faqs from './faqs/Faqs';

function PageRoute() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/faqs' element={<Faqs />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			
		</div>
	);
}

export default PageRoute;
