import React, { Fragment } from 'react'
import User from './User/User'
import Menu from './Menu/Menu'
import NotificationsSwitch from './NotificationsSwitch/NotificationsSwitch'
import SideNavigationFooter from './SideNavigationFooter/SideNavigationFooter'
import './SideNavigation.css'

const SideNavigation = ({ handleNavOpened }) => {
	return (
		<Fragment>
			<div className="sideNavigationContainer">
				<User />
				<Menu />

				<div className="sideNavigationBottom">
					<NotificationsSwitch />
					<SideNavigationFooter />
				</div>
			</div>

			<div className="overlay" onClick={handleNavOpened} />
		</Fragment>
	)
}

export default SideNavigation
