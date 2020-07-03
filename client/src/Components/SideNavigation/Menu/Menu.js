import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import './Menu.css'

const Menu = ({ setNavOpened }) => {
	return (
		<div className="menuContainer">
			<NavLink to="/my-account" onClick={() => setNavOpened(false)}>
				<UserOutlined /> My Account
			</NavLink>
			<NavLink to="/settings" onClick={() => setNavOpened(false)}>
				<SettingOutlined /> Settings
			</NavLink>
		</div>
	)
}

export default Menu
