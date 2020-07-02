import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import './Menu.css'

const Menu = ({ handleNavOpened }) => {
	const [ isClicked, setisClicked ] = useState(false)
	useEffect(
		() => {
			if (isClicked) handleNavOpened()
		},
		[ handleNavOpened ]
	)
	return (
		<div className="menuContainer">
			<NavLink to="/my-account" onClick={setisClicked(true)}>
				<UserOutlined /> My Account
			</NavLink>
			<NavLink to="/settings" onClick={handleNavOpened}>
				<SettingOutlined /> Settings
			</NavLink>
		</div>
	)
}

export default Menu
