
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { getPlayers } from './actions'


import App from './App'


let store = createStore(
	reducer,
	applyMiddleware(thunk)	
)
store.dispatch(getPlayers())
ReactDOM.render( 
		<Provider store={store}>
  			<App />
  		</Provider>, 
   	document.getElementById('root')
)
