
/**
 * wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
*/

 function wordMatchInArray(str, arr){
    var wordIn = false

    // console.log(str);
    // console.log(arr);

   for (var i = 0; i < arr.length; i = i + 1){
       var elementArr = arr[i]

         if(elementArr === str){
            wordIn = true
            // console.log(true)
          }
  }
  // console.log(wordIn);
  return wordIn
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]

console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)
console.assert(wordMatchInArray('today', sampleWordsArray2) === false)

var sampleWordsArray3 = ["boys", "hello", "where", "are", "you", "going", "today"]
console.assert(wordMatchInArray('boys', sampleWordsArray3) === true)
console.assert(wordMatchInArray('you', sampleWordsArray3) === true)
console.assert(wordMatchInArray('today', sampleWordsArray3) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray3) === false)
