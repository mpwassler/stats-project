const initState = {
	players: [],
	currentPlayer: {}
}

export default ( state = initState, action ) => {
	switch(action.type) {
		case 'SET_PLAYERS':
			return {
				...state,
				players: action.payload
			}
		case 'SET_SELECTED_PLAYER':
			return {
				...state,
				currentPlayer: action.payload
			}
		default:
			return state

	}	
}