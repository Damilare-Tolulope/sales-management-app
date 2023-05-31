/** @format */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RouteLinks from '../layout/RouterLink';
import Style from '../assets/style/Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
	const [setError] = useState('');
	const links = RouteLinks;
	let location = useLocation();
	let navigate = useNavigate();

	const handleLogout = async () => {
		try {
			navigate('/');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className={`${Style.sidebar}`}>
			<ul className={Style.sidebarLinks}>
				{links.map((link) => (
					<li
						key={link.path}
						className={
							location.pathname === `/admin/${link.path}`
								? Style.activeLinkItem
								: Style.linkItem
						}>
						<Link to={`${link.path}`} className='text-center'>
							<p className={`${Style.icon} text-center`}>{link.icon}</p>
							<span className={Style.text}>{link.name}</span>
						</Link>
					</li>
				))}
			</ul>

			<ul className={`${Style.sidebarLinks} mt-6 cursor-pointer`}>
				<li onClick={handleLogout} className={Style.linkItem}>
					<p className={`${Style.icon} mr-1`}>
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
					</p>
					<span className={Style.text}>Log Out</span>
				</li>
			</ul>
		</div>
	);
}

export default SideBar;
