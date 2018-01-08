import React from 'react'
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

export default App