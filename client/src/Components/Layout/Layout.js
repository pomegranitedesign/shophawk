import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
	const [ isNavOpened, setNavOpened ] = useState(false)
	return (
		<div className="container">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
