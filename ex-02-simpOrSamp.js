
/**
 * simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of string values as input
 * and returns an array of modified string values:
 *
 * If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *
 * If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
 * Example:
 *    var ex2 = arrayToString(['Ben','Janet','Kristy'])
 *    console.log(ex2)
 *        //-> ['Ben Sampson', 'Janet Sampson', 'Kristy Simpson']
 *
*/

function simpOrSamp(arrOfStr){
  var newArray = []

for(var i = 0; i < arrOfStr.length ; i = i + 1){

  var elementArr = arrOfStr[i]

   if(elementArr.length <= 5){

    // declaro la condicion en 5 debido a que la numeracion inicia en 0

     newArray.push(elementArr + " Sampson")
     // console.log(elementArr[i] + newArray);
   }

      else if (elementArr.length >= 5){

        newArray.push(elementArr + " Simpson")
        // console.log(elementArr[i] + newArray);

      }
}
  // console.log(newArray);
  return newArray
}

// assertion failed line 72


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var namesList_1 = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var namesList_2 = [
    "Maria",
    "Guadalupe",
    "Angelica",
    "Rodrigo",
    "Juan"
]

var modifiedNamesList1 = simpOrSamp(namesList_1)
var modifiedNamesList2 = simpOrSamp(namesList_2)

//---- Tests -- Part 1

// Checks that returned value in `modifiedNamesList1` from function is an array
console.assert( Array.isArray(modifiedNamesList1) === true )
// Checks that 'Homer Sampson' is in the returned array (index 0 )
console.assert( modifiedNamesList1.indexOf('Homer Sampson') >= 0 )
console.assert( modifiedNamesList1.indexOf('OJ Sampson') >= 0)
console.assert( modifiedNamesList1.indexOf('Marge Sampson') >= 0)
console.assert( modifiedNamesList1.indexOf('Maggie Simpson') >= 0)
// Checks that 'Homer Simpson' is NOT in the returned array (index 0)
console.assert( modifiedNamesList1.indexOf('Homer Simpson') === -1 )
console.assert( modifiedNamesList1.indexOf('Maggie Sampson') === -1)

//---- Tests -- Part 1
console.assert( Array.isArray(modifiedNamesList2) === true )
console.assert( modifiedNamesList2.indexOf('Juan Sampson') > -1)
console.assert( modifiedNamesList2.indexOf('Maria Sampson') > -1)
console.assert( modifiedNamesList2.indexOf('Angelica Simpson') > -1)
console.assert( modifiedNamesList2.indexOf('Rodrigo Simpson') > -1 )
console.assert( modifiedNamesList1.indexOf('Rodrigo Sampson') === -1 )
