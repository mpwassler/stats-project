import React from 'react'
import { connect } from 'react-redux'
import SeasonTotals from './SeasonTotals'
import SeasonAverages from './SeasonAverages'
import {
	sumStatsArray, 
	avgStatsArray, 
	round, 
	getPasserRating,
	getCompletionPercentage
} from '../Utils/stats'

const getAge = (birthDate, currentDate) => {
	console.log(birthDate)	
	return currentDate - birthDate
}

const calculateAge = (birthDate) => { 
    let diff_ms = Date.now() - birthDate.getTime()
    let age_dt = new Date(diff_ms)  
    return Math.abs(age_dt.getUTCFullYear() - 1970)
}

const PlayerTotals = ({player}) => {
	if (!player.gameStats) return false
	let {gameStats, draftedByTeam, firstName, lastName, birthDate, draftPickNumber} = player
	return (					
			<div className="row totals">
				<div className="col-lg-4 col-sm-12">
					<h1>{firstName + ' ' + lastName}</h1>
					<p>
						{ draftedByTeam.name}<br />
						{ calculateAge(new Date(birthDate.timestamp*1000))} Years Old

					</p>					
				</div>
				<div className="col-md col-sm-12">
					<SeasonTotals games={gameStats} />							
				</div>
				<div className="col-md col-sm-12">
					<SeasonAverages games={gameStats}/>		
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