import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main, About, History, Budget } from './Pages'

const Routes = () => {
	return (
		<Switch>
			<Route path="/budget" component={Budget} />
			<Route path="/history" component={History} />
			<Route path="/about" component={About} />
			<Route exact path="/" component={Main} />
		</Switch>
	)
}

export default Routes
