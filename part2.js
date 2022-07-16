const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// index     0 1 2 3 4 5 6 7 8

// length nous donne la longueur d'un tableau
console.log(tab.length)
console.log(tab[tab.length - 2])

// /Push rajoute une valeur à la fin
tab.push(155)
// Pop qui supprime la derniere valeur
tab.pop()
// unshift rajoute une valeure au début du tableau 
tab.unshift(600)
// shift supprime la premiere valeure
tab.shift()

// Splice rajoute ou supprime une valeur a un index donné
tab.splice(0, 0, 'abc')
// .splice([index], [nb à suppr], [valeur à ajouter])
console.log(tab)

// / Slice retourne un tableau à partir de deux index donné
console.log(tab.slice(0, 3))
// .slice([index de depart] / [index de fin non inclus])

tab[2] = 5005
console.log(tab)

// includes permet de savoir si une valeur ce trouve dans un tableau
console.log(tab.includes(600))

// concatainer deux tableaux

let tab2 = [1,2]
let tab3 = [3,4]
let tab4 = tab2.concat(tab3)
console.log(tab4)

// tableau a multi dimenssion

let tab5 = [0,1,2,[3,4,5,6]]

console.log(tab5.flat( ))

// join transforme un tableau en chaîne de caracteres

let tab6 = [0,1,2,3]

console.log(tab6.join(' '))


//  inversse le tableau
console.log(tab6.reverse())

//  fonction callback 

function UseCallBack(callback){
  callback();
}

UseCallBack(function(){
  console.log('hello')
});

// forEach

const tab7 = [1,2,3,4,5]
tab7.forEach(function(el){
  console.log(el)
})

//  mapp

const resultatMap = tab7.map(x => x*2)

console.log(resultatMap)

// Filter

const villes = ['Paris', "Berlin", "Caen", 'Londres', 'Mexico']

const resultatFilter = villes.filter(function(ville){
  return ville.length > 5
})

console.log(resultatFilter)

//  reduce 

const tab8 = [1,2,3,4]

const red = tab8.reduce(function(a,b){
  return a + b;
},2)

console.log(red)

// Boucle for 

const tab9 = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i < tab9.length; i++){
  console.log(tab9[i])
}