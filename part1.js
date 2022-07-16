//  ########### Les variables 

var prenom = "jo";
let prenom2 = "Nelya";
const prenom3 = "Marie";

//  ########### Les types de caractere

// string 
// let str = `jo`
// Number
let nb = 2.50
// Booleen 
let bool = true
// undefined
let und;
// Null
// Objet
let obj = {
  marque: "clio",
  prix: 2500
}
// Les tableaux 
let tab = [1, 2, 3, 4, 5, 6]

//  ########### Les opérateurs

/* 
+ = addition du- = soustraction
/ = division du- = soustraction
** = puissances du
(*) = multiplication du
- = soustraction
% = modulo (reste d'une division)
*/
let op = 0;
let op2 = op += 2;
// cela revien a écrire (op2 = op + 2)
console.log(op2)

//  ########### Les chaines de caracteres

let str2 = "Jonathan"
let str3 = "Nelya"
let str4 = str2 + 3;

console.log(str4)

//  ########### Les fonctions
function NomDeMaFonction(nb1, nb2) {
  return nb1 + nb2
}
console.log(NomDeMaFonction(2, 2))


//  ########### If et Else if

let cond = 2;

if (cond < 5) {
  console.log('condition respecté');
} else if (cond > 5) {
  console.log('Conditions non respecté');
} else {
  console.log('Erreur')
}
// Else if est utile pour créer d'autre condition et on termine toujours par une valeur par default avec else

/*
< inferieur 
<= inferieur ou égal
> superieur
>= superieur ou égal
== egale 
=== strictement égale
&& Et logique (Les deux conditions doit-être respecté pour fonctionner)
|| ou logique (Une des deux condition doit etre respcté pour fonctionner)
*/

// (!) renvoi l'inversse de la valeur
const boole = true
console.log(!boole)

//  ########### Switch

/* On utilise une variable et switch qui aura comme parametre le meme non que ma variable. On entre des "Case" pour les valeurs et on execute. Pour mettre d'autre valeurs on ajoute "break;" avant de passer par une autre case. Comme le Else on termine par une valeur par défault qui est "Default:" */
let tshirt = 'orange';

switch (tshirt) {
  case 'blanc':
    console.log('10euros');
    break;
  case 'noir':
    console.log('15euros');
    break;
  default:
    console.log('nous navons pas cette couleur')
}



//  ###########  la boucles for 

for (let i = 0; i < 5; i++) {
  console.log('hello')
}

//  ########### La Boucle while do while

// / ATTENTION: Quand vous codez une boucle enlever l'enregistrement automatique pour eviter que votre navigateur crash.

let i = 0;


// La boucle while 

// while (i < 10) {
//   console.log(i);
//   i++
// }
// La boucle  do while
do {
  console.log(i); i++
} while (i < 10)