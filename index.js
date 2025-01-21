;(() => {
	var theIn = [..."101"]

	var theState = {
		0: {
			0: {
				0: {
					res: 0,
				},
				1: {
					res: 1,
				},
			},
			1: {
				0: {
					res: 2,
				},
				1: {
					res: 3,
				},
			},
		},
		1: {
			0: {
				0: {
					res: 4,
				},
				1: {
					res: 5,
				},
			},
			1: {
				0: {
					res: 6,
				},
				1: {
					res: 7,
				},
			},
		},
	}

	const res = theIn.reduce(
		(theState, theCommand) => theState[theCommand],
		theState
	)

	console.log(res)
})()
