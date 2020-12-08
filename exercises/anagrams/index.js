// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let fixedA = stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
  let fixedB = stringB.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');

  if(fixedA === fixedB){
    return true
  } return false
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let fixedA = stringA.replace(/[^\w]/g,"").toLowerCase().split('');
//   let fixedB = stringB.replace(/[^\w]/g,"").toLowerCase().split('');
  
//   if(fixedA.length !==fixedB.length){
//     return false
//   } else{

//   let length = 0;
//   for(let x=0; x<=fixedB.length; x++){
//     for(let y=0; y<=fixedB.length; y++ ){
//       if(fixedA[x] ===fixedB[y]){
//         length++;
//         x++;
//       }
//     }
//   }
//   console.log(length)
//   if(length === fixedA.length){
//     return true
//   }
//   }
// }