import React from 'react'
import { connect } from 'react-redux'
import {getPlayerById} from '../actions'
const NavBar = (props) => {
	return (
		<div className="row">
			<ul className="d-flex flex-row navlist">
				{props.players.map( player => {
					return (
						<li className="navlist_item" key={player.id}>
							<button 
							className={"navlist_btn btn " + (props.currentPlayer.id ==player.id ? "btn-primary" : "btn-secondary") }
							onClick={ () => {
								props.dispatch(getPlayerById(player.id))
							}}>
								{player.firstName} {player.lastName}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

function mapStateToProps(state)  {
	console.log(state)
	return {
		players: state.players,
		currentPlayer: state.currentPlayer
	};
}
export default connect(mapStateToProps)(NavBar)