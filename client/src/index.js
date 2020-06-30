import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Components/Layout'
import Routes from './Routes'
import './index.css'

render(
	<Router>
		<Layout>
			<Routes />
		</Layout>
	</Router>,
	document.getElementById('root')
)
