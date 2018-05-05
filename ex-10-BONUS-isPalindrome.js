
/**
 * isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/



function isPalindrome(str){
  var palindromeHere = false
  var palindrome = []


for(var i = str.length -1; i >= 0; i = i - 1){
  var strElem =  str[i]
// console.log(strElem);

  palindrome.push(strElem)


  // console.log(palindrome.join(''))

   }
   // console.log(palindrome);

      var palin = palindrome.join('')
      // console.log(palin)
  if(palin === str){
      palindromeHere = true
      return true
  }else{
      palindromeHere = false
      return false

  }
  console.log(str);
  console.log(palindromeHere);

}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)
