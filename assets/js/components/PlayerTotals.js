import React from 'react'
import { connect } from 'react-redux'
import {
	sumStatsArray, 
	avgStatsArray, 
	round, 
	getPasserRating,
	getCompletionPercentage
} from '../Utils/stats'

const PlayerTotals = ({player}) => {
	if (!player.gameStats) return false
	let {gameStats, draftedByTeam, firstName, lastName} = player
	return (					
			<div className="row totals">
				<div className="col-lg-4 col-sm-12">
					<h1>{firstName + ' ' + lastName}</h1>
					<p>{ draftedByTeam.name}</p>					
				</div>
				<div className="col-md col-sm-12">
					<ul class="list-group">
					 	<li class="list-group-item active"> Season Totals </li>
					  	<li class="list-group-item"> Yards 
							<span class="badge badge-default badge-pill">{sumStatsArray(gameStats, 'yards')}</span>
					   	</li>
					  	<li class="list-group-item"> Touchdowns  
							<span class="badge badge-default badge-pill">{sumStatsArray(gameStats, 'touchdowns')}</span>
					  	</li>
					  	<li class="list-group-item"> Interceptions 
							<span class="badge badge-default badge-pill">{sumStatsArray(gameStats, 'interceptions')}</span>
					  	</li>
				  	  	<li class="list-group-item"> Passer Rating 
				  			<span class="badge badge-default badge-pill">
				  				{getPasserRating( 
				  					sumStatsArray(gameStats, 'completions'),
				  					sumStatsArray(gameStats, 'attempts'),
				  					sumStatsArray(gameStats, 'yards'),
				  					sumStatsArray(gameStats, 'touchdowns'),
				  					sumStatsArray(gameStats, 'interceptions')
				  				)}
				  			</span>
				  	  	</li>
				  	  	<li class="list-group-item"> Completion Percentage  
				  			<span class="badge badge-default badge-pill">
				  				{getCompletionPercentage( 
				  					sumStatsArray(gameStats, 'completions'),
				  					sumStatsArray(gameStats, 'attempts')				  					
				  				)}
				  			</span>
				  	  	</li>
				  	  	
					</ul>				
				</div>
				<div className="col-md col-sm-12">
					<ul class="list-group">
					 	<li class="list-group-item active"> Season Averages </li>
					  	<li class="list-group-item"> Yards Per Game
							<span class="badge badge-default badge-pill">{round(avgStatsArray(gameStats, 'yards'), )}</span>
					   	</li>
					  	<li class="list-group-item"> Touchdowns Per Game 
							<span class="badge badge-default badge-pill">{round(avgStatsArray(gameStats, 'touchdowns'), 2)}</span>
					  	</li>
					  	<li class="list-group-item"> Interceptions Per Game
							<span class="badge badge-default badge-pill">{round(avgStatsArray(gameStats, 'interceptions'), 2)}</span>
					  	</li>
					  	<li class="list-group-item"> Attempts Per Game
							<span class="badge badge-default badge-pill">{round(avgStatsArray(gameStats, 'attempts'))}</span>
					  	</li>					  	  	
					  	<li class="list-group-item"> Completions Per Game
							<span class="badge badge-default badge-pill">{round(avgStatsArray(gameStats, 'completions'))}</span>
					  	</li>					  	  	
					  						  	 
					</ul>			
				</div>
			</div>			
	)
}

function mapStateToProps(state)  {	
	return {
		player: state.currentPlayer,
	}
}

export default connect(mapStateToProps)(PlayerTotals)