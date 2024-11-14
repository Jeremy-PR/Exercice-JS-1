// // exercice 1
// console.log("Hello, world !");
// console.log("Bienvenue dans le monde de la programmation !");






// exercice 2

// const nombre1 = 5
// const nombre2 = 10
// console.log(nombre1 + nombre2);







// // exercice 3

// const fruits = ["pomme", "banane", "cerise"]

//  fruits.forEach((fruits, index) =>{
//     console.log(fruits, index);

//  })

//  correction exercice 3 :

//  const fruits = ["pomme", "banane", "cerise"]

// fruits.forEach((fruit) => {
//     console.log(fruit);
// })







// exercice 4

// for (let i = 1; i <= 20; i++) {
//     // 2. Vérifier si le nombre est pair
//     if (i % 2 === 0) {
//         // 3. Afficher le nombre pair
//         console.log(i);
//     }
// }








// // correction exercice 4  :

// for (let count = 1; count <= 20; count += 1) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
// }







// //   exercice 5

// const mot = "garagiste";

// let voyelles = 0;

// for (let i = 0; mot[i]; i++) {

//     if ("aeiou".includes(mot[i])) {
//         voyelles++;
//     }
// }
// console.log("Le nombre de voyelles dans le mot est :", voyelles);





// correction exercice 5

// function countVowels(word) {
//   const vowels = "aeiouyAEIOUY";
//   let count = 0;

//   for (let char of word) {
//     if (vowels.includes(char)) {
//       count += 1;
//     }
//   }
//   return count;
// }
//  console.log(countVowels("number of Vowels"));




// 2eme correction exo 5

// function countVowels(word){
//     const matches = word.match(/[aeiouy]/gi);

//     //si matches a une valeur
//     if(matches){
//         return matches.length; // car matche retourne un tableau
//     }
// }

// const word = "Nomer of vowels";
// console.log("Number of vowels in " + word + "," + countVowels(word));








// // exercice 6

// const phrase = "js c'est pas facile"


// correction exo 6

// function countLetter(sentence) {
//   const letterCounts = {};
//   for (let letter of sentence) {
//     if (letter.match(/[a-z]/gi)) {
//       letter = letter.toLowerCase();
//       if (letterCounts[letter]) {
//         letterCounts[letter] += 1;
//       } else {
//         letterCounts[letter] = 1;
//       }
//     }
//   }
//   return letterCounts;
// }
// const randomSentence = "Une phrase random !";
// countLetters(randomSentence);









// // // exercice 7
// const chiffres = [23, -22, 63, -54, 12, -12];

// let positif = [];
// let negatif = [];

// for ( let i = 0; i < chiffres.length; i++){
//     if (chiffres[i] >= 0 ){
//       positif.push(chiffres[i]);
//     }
//     else {negatif.push(chiffres[i])};

// }

// console.log(positif);
// console.log(negatif);


// correction exercice 7

// const numbers = [3, -1, 2, -7];
// const positiveNumbers = [];
// const negativeNumbers = [];

// numbers.forEach((number) => {
//     if(number >= 0){
//         positiveNumbers.push(number);
//     } else {
//         negativeNumbers.push(number);
//     }
// })

// console.log("Nombres positifs : ", positiveNumbers);
// console.log("Nombres negatifs : ", negativeNumbers);







// // exercice 8

// let list = [322, 3543534, 23, 2324, 4546565];

// let bigger = [];

// for ( let i = 0; i < list.length; i++){

// }

// console.log(bigger);




// correction exercice 8

// const numbers = [3, 7, 2, 9, 5];
// let maxNumber = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i];
//   }
// }

// console.log(maxNumber);



// // exercice 9

// let word = "marsupilami"

// let inverse = word.split("").reverse("").join("");

// console.log("Le mot inversé est : " + inverse)


// correction exercice 9

// // const word = "bonjour";
// // let reversedWord = "";

// // for (let i = word.length - 1; i >= 0; i -= 1) {
// //     reversedWord += word[i];
// // }

// // console.log(reversedWord);




