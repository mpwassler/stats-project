import React from 'react'
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

const GameStatRow = ({
	completions,  
	attempts,  
	yards,  
	touchdowns,  
	interceptions, 
	game, 
	player 
}) => {	
	return (
		<tr>
			<th scope="row"> {game.week}    
				<span className="table_sublabel" >
					{getOposingTeamSign( player.draftedByTeam.name, game.homeTeam.name, game.awayTeam.name)}
				</span>
			</th>
			<td>{attempts}</td>
			<td>{completions}</td>
			<td>{getCompletionPercentage(completions, attempts)}%</td>				      			
			<td>{touchdowns || '--'}</td>
			<td>{interceptions || '--'}</td>
			<td>{yards}</td>
			<td>{getPasserRating( completions, attempts, yards, touchdowns, interceptions)}</td>
  		</tr>
	)
}

export default GameStatRow