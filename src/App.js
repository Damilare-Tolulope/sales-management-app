/** @format */
import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageRoute from './pages/PageRoute';
import SignIn from './pages/auth-pages/sign-in/SignIn';
import SignUp from './pages/auth-pages/sign-up/SignUp';
import ForgotPassword from './pages/auth-pages/forgot-password/ForgotPassword';
import PasswordChange from './pages/auth-pages/forgot-password/PasswordChange';
import BusinessAccount from './pages/auth-pages/sign-up/BusinessAccount';
import VerifyAccount from './pages/auth-pages/sign-up/VerifyAccount';
import NotFound from './components/NotFound';
import Layout from './layout/Layout';
import TermAndCondition from './pages/auth-pages/sign-up/TermAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/*' element={<PageRoute />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
				<Route path='/password-change' element={<PasswordChange />} />
				<Route path='/business-account' element={<BusinessAccount />} />
				<Route path='/verify-account' element={<VerifyAccount />} />
				<Route path='/terms-and-condition' element={<TermAndCondition />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />

				<Route path='/admin/*' element={<Layout />} />
				<Route
					path='/admin'
					element={<Navigate to={'/admin/dashboard'} replace />}
				/>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
