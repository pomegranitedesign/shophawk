import React, { Fragment } from 'react'
import User from './User/User'
import Menu from './Menu/Menu'
import NotificationsSwitch from './NotificationsSwitch/NotificationsSwitch'
import './SideNavigation.css'

const SideNavigation = (props) => {
	return (
		<Fragment>
			<div className="sideNavigationContainer">
				<User />
				<Menu />
				<NotificationsSwitch />
			</div>

			<div className="overlay" />
		</Fragment>
	)
}

export default SideNavigation
