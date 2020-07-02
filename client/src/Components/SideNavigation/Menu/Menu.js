import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import './Menu.css'

const Menu = (props) => {
	return (
		<div className="menuContainer">
			<NavLink to="/my-account">
				<UserOutlined /> My Account
			</NavLink>
			<NavLink to="/settings">
				<SettingOutlined /> Settings
			</NavLink>
		</div>
	)
}

export default Menu
