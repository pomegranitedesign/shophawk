import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Routes from './Routes'
import './index.css'
import 'antd/dist/antd.min.css'

render(
	<Router>
		<Layout>
			<Routes />
		</Layout>
	</Router>,
	document.getElementById('root')
)
