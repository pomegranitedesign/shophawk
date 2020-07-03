import React from 'react'
import { NavLink } from 'react-router-dom'
import {
	LogoutOutlined,
	InfoCircleOutlined,
	LineOutlined
} from '@ant-design/icons'
import './SideNavigationFooter.css'

const SideNavigationFooter = ({ setNavOpened }) => {
	return (
		<div className="sideNavigationFooterContainer">
			<NavLink to="/logout" onClick={() => setNavOpened(false)}>
				<LogoutOutlined style={{ marginRight: 5 }} />
				Logout
			</NavLink>
			<LineOutlined
				style={{
					transform: 'rotate(90deg)',
					margin: '0 17px'
				}}
			/>
			<NavLink to="/about" onClick={() => setNavOpened(false)}>
				<InfoCircleOutlined style={{ marginRight: 5 }} />
				About
			</NavLink>
		</div>
	)
}

export default SideNavigationFooter
