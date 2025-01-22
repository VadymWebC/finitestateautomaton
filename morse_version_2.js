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
	content += Reflect.ownKeys(theMorseBase).reduce(
		(theRes, theKey) => theRes + `${theKey}\t${theMorseBase[theKey]}\n`,
		""
	)
	fs.writeFile(filePath, content, err => {
		if (err) {
			console.error("Ошибка записи файла:", err)
			return
		}
	})
	console.log(`Parsed: ${doBinaryParse(theIn)}`)
})()
