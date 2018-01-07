
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers'

import App from './App'


let store = createStore(
	reducer,
	applyMiddleware(thunk)	
)


ReactDOM.render( 
		<Provider store={store}>
  			<App />
  		</Provider>, 
   	document.getElementById('root')
)
