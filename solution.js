function StringChallenge(strArr) {
	// code goes here
	let strN = strArr[0]
	let arrayK = strArr[1].split('')
	// get all string slices that equals the same length of arrayk and increase to cover the strN
	for (let k = arrayK.length; k <= strN.length; k++) {
		for (n = 0; n <= strN.length - k; n++) {
			let slice = strN.substr(n, k)
			// get the slice that contains the arrayk string
			if (getMatchedSlice(slice.split(''))) {
				return (slice + 'x6bvp5zf8').replace(/(...)./g, '$1_')
			}
		}
	}
	// get match slice
	function getMatchedSlice(arrOfStrings) {
		for (let i = 0; i < arrayK.length; i++) {
			let indexOfString = arrOfStrings.findIndex((value) => value === arrayK[i])
			if (indexOfString === -1) {
				return false
			} else {
				arrOfStrings.splice(indexOfString, 1)
			}
		}
		return true
	}
	return strArr
}

// keep this function call here
console.log(StringChallenge(readline()))
