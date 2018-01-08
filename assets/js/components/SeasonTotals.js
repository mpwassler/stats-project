import React from 'react'
import {
	sumStatsArray, 		
	getPasserRating,
	getCompletionPercentage
} from '../Utils/stats'

const SeasonTotals = ({games}) => {
	return (
			<ul className="list-group">
			 	<li className="list-group-item active"> Season Totals </li>
			  	<li className="list-group-item"> Yards 
					<span className="badge badge-default badge-pill">{sumStatsArray(games, 'yards')}</span>
			   	</li>
			  	<li className="list-group-item"> Touchdowns  
					<span className="badge badge-default badge-pill">{sumStatsArray(games, 'touchdowns')}</span>
			  	</li>
			  	<li className="list-group-item"> Interceptions 
					<span className="badge badge-default badge-pill">{sumStatsArray(games, 'interceptions')}</span>
			  	</li>
		  	  	<li className="list-group-item"> Passer Rating 
		  			<span className="badge badge-default badge-pill">
		  				{getPasserRating( 
		  					sumStatsArray(games, 'completions'),
		  					sumStatsArray(games, 'attempts'),
		  					sumStatsArray(games, 'yards'),
		  					sumStatsArray(games, 'touchdowns'),
		  					sumStatsArray(games, 'interceptions')
		  				)}
		  			</span>
		  	  	</li>
		  	  	<li className="list-group-item"> Completion Percentage  
		  			<span className="badge badge-default badge-pill">
		  				{getCompletionPercentage( 
		  					sumStatsArray(games, 'completions'),
		  					sumStatsArray(games, 'attempts')				  					
		  				)}
		  			</span>
		  	  	</li>
		  	  	
			</ul>		
	)
}

export default SeasonTotals