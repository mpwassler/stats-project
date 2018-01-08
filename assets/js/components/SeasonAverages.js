import React from 'react'
import {
	avgStatsArray, 		
	round
} from '../Utils/stats'

const SeasonAverages = ({games}) => {
	return (
			<ul className="list-group">
			 	<li className="list-group-item active"> Season Averages </li>
			  	<li className="list-group-item"> Yards Per Game
					<span className="badge badge-default badge-pill">{round(avgStatsArray(games, 'yards'), )}</span>
			   	</li>
			  	<li className="list-group-item"> Touchdowns Per Game 
					<span className="badge badge-default badge-pill">{round(avgStatsArray(games, 'touchdowns'), 2)}</span>
			  	</li>
			  	<li className="list-group-item"> Interceptions Per Game
					<span className="badge badge-default badge-pill">{round(avgStatsArray(games, 'interceptions'), 2)}</span>
			  	</li>
			  	<li className="list-group-item"> Attempts Per Game
					<span className="badge badge-default badge-pill">{round(avgStatsArray(games, 'attempts'))}</span>
			  	</li>					  	  	
			  	<li className="list-group-item"> Completions Per Game
					<span className="badge badge-default badge-pill">{round(avgStatsArray(games, 'completions'))}</span>
			  	</li>					  	  				  						  	 
			</ul>	
	)
}

export default SeasonAverages