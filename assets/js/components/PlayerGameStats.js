import React from 'react'
import { connect } from 'react-redux'
import {getPasserRating, getCompletionPercentage} from '../Utils/stats'

const getOposingTeamSign = ( playerTeam, homeTeam, awayTeam ) => {
	switch(playerTeam) {
		case homeTeam:
			return `vs  ${awayTeam}`
		case awayTeam:
			return `@ ${homeTeam}`	
		default:
			return ``	
	}
}

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
				  		let { completions,  attempts,  yards,  touchdowns,  interceptions, game } = stat
				  		return  (
				  			<tr key={cnt}>
				      			<th scope="row"> {stat.game.week}    
				      				<span className="table_sublabel" >
				      					{getOposingTeamSign( player.draftedByTeam.name, game.homeTeam.name, game.awayTeam.name)}
				      				</span>
				      			</th>
				      			<td>{attempts}</td>
				      			<td>{completions}</td>
				      			<td>{getCompletionPercentage(completions, attempts)}</td>				      			
				      			<td>{touchdowns || '--'}</td>
				      			<td>{interceptions || '--'}</td>
				      			<td>{yards}</td>
				      			<td>{getPasserRating( completions, attempts, yards, touchdowns, interceptions)}</td>
				    		</tr>
				    	)	
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