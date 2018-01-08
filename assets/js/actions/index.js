import {httpRequest, getPlayer} from '../Utils/http'

export const setPlayers = (players) => ({	
      type:'SET_PLAYERS',
      payload: players    
})

export const setSelectedPlayer = (player) => ({	
      type:'SET_SELECTED_PLAYER',
      payload: player  
})

export const getPlayers = () => {
	console.log('get')
	return (dispatch) => {
		httpRequest('/api/player/')
		.then( players => { 
			dispatch(setPlayers(players)) 
			dispatch(getPlayerById(players[0].id))	
		})
	}
}

export const getPlayerById = (id) => {	
	return (dispatch) => {
		getPlayer( id )
		.then( player => { 
			dispatch(setSelectedPlayer(player)) 
		})
	}
}
