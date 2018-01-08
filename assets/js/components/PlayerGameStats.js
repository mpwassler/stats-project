import React from 'react'
import { connect } from 'react-redux'
import GameStatRow from './GameStatRow'

const PlayerGameStats = (props) => {
	let {player} = props
	if (!player.gameStats) return false
	return (
		<div className="stats"> 
			<h3 >Game Stats</h3>
			<div className="tablewrap">
				<table className="table table-sm table-striped ">
				  <thead className="thead">
				    <tr>
				      <th>week</th>
				      <th>attempts</th>
				      <th>completions</th>
				      <th>completion percentage</th>			      
				      <th>touchdowns</th>	
				      <th>interceptions</th>
				      <th>yards</th>		
				      <th>QB rating</th>			      
				    </tr>
				  </thead>
				  <tbody>
				  	{player.gameStats.map( (stat, cnt) => {
				  		return <GameStatRow key={cnt} player={player} {...stat}  /> 				  		
				  	})}
				  </tbody>
				</table>
			</div>
		</div>
	)
}

function mapStateToProps(state)  {	
	return {
		player: state.currentPlayer,
	}
}

export default connect(mapStateToProps)(PlayerGameStats)