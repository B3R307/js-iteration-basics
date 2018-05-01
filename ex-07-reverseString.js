
/**
 * reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

 function reverseString(str){
    var newStr = []
    // console.log(str.length);
    var strSiz = str.length
    // console.log(strSiz);
    // console.log(str);

    for(var i = 0; i <= str.length; i++ ){
        newStr.push(strSiz.reverse)

    }
    console.log(newStr);
    return newStr
 }



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')








 //
 // var rvrs = strSiz - i
 // var lastWord = str[rvrs]
 // newStr.push(lastWord)
 //
 //
 //
 // var strReverse = newStr.join('')
