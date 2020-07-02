import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
	const [ isNavOpened, setNavOpened ] = useState(false)
	const handleNavOpened = () =>
		setNavOpened((isNavOpened) => (isNavOpened = !isNavOpened))
	return (
		<div className="container">
			<Header
				handleNavOpened={handleNavOpened}
				isNavOpened={isNavOpened}
			/>
			{children}
			<Footer />
		</div>
	)
}

export default Layout
