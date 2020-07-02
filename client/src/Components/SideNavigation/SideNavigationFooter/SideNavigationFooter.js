import React from 'react'
import { NavLink } from 'react-router-dom'
import {
	LogoutOutlined,
	InfoCircleOutlined,
	LineOutlined
} from '@ant-design/icons'
import './SideNavigationFooter.css'

const SideNavigationFooter = (props) => {
	return (
		<div className="sideNavigationFooterContainer">
			<NavLink to="/logout">
				<LogoutOutlined style={{ marginRight: 5 }} />
				Logout
			</NavLink>
			<LineOutlined
				style={{ transform: 'rotate(90deg)', margin: '0 17px' }}
			/>
			<NavLink to="/about">
				<InfoCircleOutlined style={{ marginRight: 5 }} />
				About
			</NavLink>
		</div>
	)
}

export default SideNavigationFooter
