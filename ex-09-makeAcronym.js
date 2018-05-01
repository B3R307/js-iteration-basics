// ex-04 makeAcronym()

//
// Write a function called makeAcronym() that converts a name like Portable Network Graphics
// to its acronym (PDF).
//
// makeAcronym('PNG')
//  => 'PDF'


function makeAcronym(str){
  var acronym = []
  var str = str.toUpperCase()
   // console.log(str);

  var num = []
  var char = []
  // console.log(str.length);

for(var i = 0; i < str.length; i++){
  var charSize = str[i]

   if( charSize === ''){
     var n = i
     num.push(n)
     // console.log(n);
   }
    // console.log(num);
    // console.log(num.lenght);

}

   var ff = num[0]
   var word = str.slice(0, ff)
    char.push(word)

    for(var m = 0; m < num.lenght; m++){
      var p = num[m]
      // console.log(p);

    var f= num[m + 1]
    // console.log(f);

    var words = str.slice((p+1), f)
       char.push(words)
       // console.log(char);
    }

    for(var i = 0; i < char.lenght; i++){
      var lis = char[i]
      var wor = lis[0]
      acronym.push(wor)
      // console.log(acronym);
      var acro = acronym.join('')
    }

   console.log(acro);
   return acro
}

//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('Bring Your Own Beverage') === 'BYOB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )
console.assert( makeAcronym('in case you missed it') === 'ICYMI' )
console.assert( makeAcronym('if I recall correctly') === 'IIRC' )
console.assert( makeAcronym('Rest in Peace') === 'RIP' )



//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )
