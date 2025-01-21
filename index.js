;(() => {
	var doBinaryParse = theIn => {
		var theProgram = [...theIn]
		// var theState = {
		// 	0: {
		// 		0: {
		// 			0: {
		// 				res: 0,
		// 			},
		// 			1: {
		// 				res: 1,
		// 			},
		// 		},
		// 		1: {
		// 			0: {
		// 				res: 2,
		// 			},
		// 			1: {
		// 				res: 3,
		// 			},
		// 		},
		// 	},
		// 	1: {
		// 		0: {
		// 			0: {
		// 				res: 4,
		// 			},
		// 			1: {
		// 				res: 5,
		// 			},
		// 		},
		// 		1: {
		// 			0: {
		// 				res: 6,
		// 			},
		// 			1: {
		// 				res: 7,
		// 			},
		// 		},
		// 	},
		// }

		var theState = {
			0: theThing => theThing << 1,
			1: theThing => (theThing << 1) | 1,
		}

		return theProgram.reduce(
			(theRes, theCommand) => theState[theCommand](theRes),
			0
		)
	} // end of doBinaryParse
	//
	var theIn = "011100"
	console.log(`Parsed: ${doBinaryParse(theIn)}`, "Expected: " + +`0b${theIn}`)
})()
