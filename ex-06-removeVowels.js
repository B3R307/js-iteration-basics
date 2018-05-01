/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/


function removeVowels(str){
  var noVowels = []
  var strTlC = str.toLowerCase()
  // console.log(str);

for(var i = 0; i < strTlC.length; i++){
    strElem = strTlC[i]

    if('a' !== strElem && 'e' !== strElem && 'i' !== strElem && 'o' !== strElem && 'u' !== strElem){
      noVowels.push(strElem)
      var newStr = noVowels.join('')
    }
 }
console.log(newStr);
return newStr
}


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )
console.assert(removeVowels('arcoiris tobogan lirios') === 'rcrs tbgn lrs')

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
