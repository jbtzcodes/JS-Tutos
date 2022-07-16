const str = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos in labore adipisci, sed quidem. '

// charAt

console.log(str.charAt(4))

// includes 
console.log(str.includes('Lorem'))

// indexOf 
console.log(str.indexOf('ipsum'))

// charCodeAt 

console.log(str.charCodeAt())

// slice 

console.log(str.slice(0, 5))

// / split  retourne
const str2 = str.split('').join();
console.log(str2)


//  concat 

const str3 = "Jonathan"
const str4 = "Nelya"

console.log(str3.concat("abc", str4))

// / regex  

const str5 = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, porro. "

const regex = /\W/gi;

console.log(str5.match(regex))

// [a - z] / g toute les lettres en minuscule de a à z
// [^ a - z] / g toute ce qui nest pas lettres en minuscule de a à z
// [A - Z] toutes les lettres en majuscule de a à z
// [^ A - Z] / g toute ce qui nest pas lettres en majuscules de a à z
// [0 - 9] toutes les chiffre
// [^ 0 - 9] / g toute ce qui nest chiffre


//  /\d/gi; Match les chiffres
//  /\D/gi; tout ce qui nest pas chiffre
//  /\s/gi; match tout les espaces
//  /\S/gi; match tout ce qui nest pas un espaces
//  /\w/gi; match toute les lettres majuscule et minuscule et les chiffres
//  /\W/gi; match tout ce qui nest pas lettres majuscule et minuscule et les chiffres

//  replace

let strRegex = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus. "

console.log(str.replace(/a/g, 'JONATHAN'))