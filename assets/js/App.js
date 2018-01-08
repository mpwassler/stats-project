import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import PlayerGameStats from './components/PlayerGameStats'
import PlayerTotals from './components/PlayerTotals'
import './App.css'
const App = (props) => {
	return (
		<div className="App">
			<div className="container">
				<NavBar />
				<PlayerTotals />
				<PlayerGameStats />
			</div>
		</div>
	)	
}

function mapStateToProps(state) {
	return {
		
	}
}

export default connect(mapStateToProps)(App)