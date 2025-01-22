var fs = require("fs")
;(() => {
	var filePath = "./output.txt"
	var theMorseBase = {
		".-": "A",
		"-...": "B",
		"-.-.": "C",
		"-..": "D",
		".": "E",
		"..-.": "F",
		"--.": "G",
		"....": "H",
		"..": "I",
		".---": "J",
		"-.-": "K",
		".-..": "L",
		"--": "M",
		"-.": "N",
		"---": "O",
		".--.": "P",
		"--.-": "Q",
		".-.": "R",
		"...": "S",
		"-": "T",
		"..-": "U",
		"...-": "V",
		".--": "W",
		"-..-": "X",
		"-.--": "Y",
		"--..": "Z",
		"-----": "0",
		".----": "1",
		"..---": "2",
		"...--": "3",
		"....-": "4",
		".....": "5",
		"-....": "6",
		"--...": "7",
		"---..": "8",
		"----.": "9",
		"": " ",
	}

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
		var theProgram = [...theIn]
		var theState = {
			".": theThing => theThing << 1,
			"-": theThing => (theThing << 1) | 1,
			" ": theThing => theThing,
			other: () => {},
		}
		return theProgram.reduce(
			(theRes, theCommand) => theState[theCommand](theRes),
			1
		)
	}

	var theIn = "....."

	var content = ""
	// content += Reflect.ownKeys(theMorseBase).reduce(
	// 	(theRes, theKey) =>
	// 		theRes + `${doBinaryParse(theKey)}\t${theKey}\t${theMorseBase[theKey]}\n`,
	// 	""
	// )

	const result = Reflect.ownKeys(theMorseBase).reduce(
		(theRes, theKey) => (
			(theRes[doBinaryParse(theKey)] = theMorseBase[theKey]), theRes
		),
		[]
	)

	// fs.writeFile(filePath, content, err => {
	// 	if (err) {
	// 		console.error("Ошибка записи файла:", err)
	// 		return
	// 	}
	// })
	console.log(`Parsed: ${result}`)
})()
