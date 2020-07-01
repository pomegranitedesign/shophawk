import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main, About } from './Pages'

const Routes = () => {
	return (
		<Switch>
			<Route path="/about" component={About} />
			<Route exact path="/" component={Main} />
		</Switch>
	)
}

export default Routes
