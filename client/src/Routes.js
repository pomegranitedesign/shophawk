import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main, About, History, Budget, MyAccount } from './Pages'

const Routes = () => {
	return (
		<Switch>
			<Route path="/my-account" component={MyAccount} />
			<Route path="/budget" component={Budget} />
			<Route path="/history" component={History} />
			<Route path="/about" component={About} />
			<Route exact path="/" component={Main} />
		</Switch>
	)
}

export default Routes
