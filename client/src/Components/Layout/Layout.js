import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = ({ children }) => {
	const [ isNavOpened, setNavOpened ] = useState(false)

	return (
		<div className="container">
			<Header setNavOpened={setNavOpened} isNavOpened={isNavOpened} />
			<div style={{ marginBottom: 100 }}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
