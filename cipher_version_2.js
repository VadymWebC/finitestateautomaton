;(() => {
	var theMorseArrayBase = [
		null,
		" ",
		"E",
		"T",
		"I",
		"A",
		"N",
		"M",
		"S",
		"U",
		"R",
		"W",
		"D",
		"K",
		"G",
		"O",
		"H",
		"V",
		"F",
		null,
		"L",
		null,
		"P",
		"J",
		"B",
		"X",
		"C",
		"Y",
		"Z",
		"Q",
		null,
		null,
		"5",
		"4",
		null,
		"3",
		null,
		null,
		null,
		"2",
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		"1",
		"6",
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		"7",
		null,
		null,
		null,
		"8",
		null,
		"9",
		"0",
	]

	var doBinaryParse = theIn => {
		var theProgram = [...theIn, " "]

		var theStr = ""

		var theState

		var theInitialState = {
			".": theThing => ((theState = theCollectState), theState["."](theThing)),
			"-": theThing => ((theState = theCollectState), theState["-"](theThing)),
			" ": theThing => theThing,
		}

		var theCollectState = {
			".": theThing => theThing << 1,
			"-": theThing => (theThing << 1) | 1,
			" ": theThing => {
				theState = theStateTwoState
				theStr += theMorseArrayBase[theThing]
				return 1
			},
		}

		var theStateTwoState = {
			".": theThing => ((theState = theInitialState), theState["."](theThing)),
			"-": theThing => ((theState = theInitialState), theState["-"](theThing)),
			" ": theThing => ((theState = theStateThreeState), 1),
		}

		var theStateThreeState = {
			" ": theThing => (
				(theStr += theMorseArrayBase[theThing]), (theState = theCollectState), 1
			),
		}

		theState = theInitialState

		theProgram.reduce((theRes, theCommand) => theState[theCommand](theRes), 1)

		return theStr
	}

	console.log(doBinaryParse("  .... . -.--   -.. ..- -.. ."))
	//
})()
