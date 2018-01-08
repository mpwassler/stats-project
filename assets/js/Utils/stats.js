export const sumStatsArray = (arrayItems, key) => {
	return arrayItems.map(x => x[key]).reduce((a,b) => a + b)
}

export const avgStatsArray = (arrayItems, key) => {
	return (arrayItems.map(x => x[key]).reduce((a,b) => a + b)) / arrayItems.length
}
export const round = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0)
    return Math.round(value * multiplier) / multiplier
}

export const getPasserRating = (completions, attempts, yards, touchdowns, interceptions) => {
	let a = ((completions / attempts) - 0.3) * 5 
	let b = ( (yards / attempts) - 3) * 0.25
	let c = (touchdowns / attempts) * 20
	let d = 2.375 - ((interceptions / attempts) * 25)
	return [a,b,c,d].reduce( (carry, x, cnt) => {
		if (x > 2.375) x = 2.375
		if (x < 0) x = 0
		carry += x		
		if (cnt == 3) return (carry / 6) * 100		
		return carry
	}, 0).toFixed(1)
}

export const getCompletionPercentage = (completions, attempts) => {
	return round( (completions / attempts) * 100, 2)
}