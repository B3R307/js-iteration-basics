
/**
 * reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

 function reverseString(str){
    var newStrArr = []

    // var travisReverse = ""
    // console.log(str.length);

    // console.log(strSiz);
    // console.log(str);

    for(var i = str.length -1; i >= 0; i = i - 1){
       strEl = str[i]

        newStrArr.push(strEl)


        // travisReverse += strEl
    }

    var strReve = newStrArr.join('')
    // console.log(strReve);

    // OUTPUT string (hopefully the reversed value of the input)
    return strReve

    // return travisReverse
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
