import React, { Fragment } from 'react'
import User from './User/User'
import Menu from './Menu/Menu'
import NotificationsSwitch from './NotificationsSwitch/NotificationsSwitch'
import SideNavigationFooter from './SideNavigationFooter/SideNavigationFooter'
import './SideNavigation.css'

const SideNavigation = ({ setNavOpened }) => {
	return (
		<Fragment>
			<div className="sideNavigationContainer">
				<User />
				<Menu setNavOpened={setNavOpened} />

				<div className="sideNavigationBottom">
					<NotificationsSwitch />
					<SideNavigationFooter setNavOpened={setNavOpened} />
				</div>
			</div>

			<div className="overlay" onClick={() => setNavOpened(false)} />
		</Fragment>
	)
}

export default SideNavigation
