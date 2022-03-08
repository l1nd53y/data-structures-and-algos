function isPalendrome(str){
	// Complete the function!
	// S - Summarize: Function should return a true or false depending on whether the string is the same spelled backwards as it is forwards
	// E - Examples: 
	// A - Approach: Turn characters in string into array and compare character placement?
	// T - Test: 
	let charArray = str.split('') //turn characters of string into an array

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    }) // loop through array with .every(), current letter and its index as parameters

    return result //return result of comparison between the letter and the letter that would be in that spot if the string were reversed
}

function isPermutationPalendrome(str) {
	let array = [] //create empty array
	for(let i = 0; i < str.length; i++){ //for loop to iterate through array
	   let letter = str[i] //to track each letter
	   if(array.includes(letter)){ //if array has the letter
		  array.splice(array.indexOf(letter), 1) //remove it
	   }
	   else {
		  array.push(letter) //else put the letter in array
	   }
	 }
	 return array.length < 2 ? true : false //if length of new array is < 2, return true, else return false
}

module.exports = {isPalendrome, isPermutationPalendrome}