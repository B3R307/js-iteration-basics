/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should accapt as input an array of strings,
 * and it should return a new array containing
 * only those strings with 4 or fewer characters.
 *
*/


function shortiesOnly(arr){
    var newArr = []

for(var i = 0; i < arr.length; i = i + 1){
//
  var elementArr = arr[i]
   if (elementArr.length <= 4){
    newArr.push(elementArr)
     }

  }
      // console.log(newArr);
      return newArr
}

// revisar porque no lee el segundo array

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var moreNames = [
  "Caroline",
  "Kristen",
  "Kate",
  "Matt",
  "Ken"
]
var shortList = shortiesOnly(allNames)
var littleNameList = shortiesOnly(moreNames)


console.assert( shortList.length === 4 )
// checks to see that 'Sam' is INCUDED in the output array.
console.assert( shortList.indexOf('Sam') >= 0 )
// checks to see that 'Fred' is INCUDED in the output array.
console.assert( shortList.indexOf('Fred') >= 0 )
// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )

// -- Test 2
console.assert( littleNameList.length === 3 )
console.assert( littleNameList.indexOf('Kate') >= 0 )
console.assert( littleNameList.indexOf('Matt') >= 0 )
console.assert( littleNameList.indexOf('Ken') >= 0 )
console.assert( littleNameList.indexOf('Caroline') === -1 )
