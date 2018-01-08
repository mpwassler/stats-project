export const httpRequest = (url) => {
  return new Promise( (resolve, reject) => {
	var xhttp = new XMLHttpRequest()
  	xhttp.onreadystatechange = () => {
		if (xhttp.readyState == 4 && xhttp.status == 200) {                        
		  resolve( JSON.parse(xhttp.responseText))
	  }
	}
	xhttp.open("GET", url, true)
	xhttp.send()
  })
}

export const getPlayer = (id) => {
	let key = '_playerid:' + id
	if (!sessionStorage.getItem(key)) {
		return httpRequest('/api/player/' + id )	
		.then( player => {
			sessionStorage.setItem(key, JSON.stringify(player))
			return player							
		} )	
	} else {
		return new Promise( (res, reg) => {			
			res(JSON.parse(sessionStorage.getItem(key)))
		})	
	}
	
} 
