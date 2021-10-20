/*

let animal = prompt ("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");


if (animal == 1) {
    console.log( "chose the dog");
}else
if (animal == 2) {
    console.log( "chose the cat");
} else 
if (animal == 3) {
    console.log( "chose the goldfish");
} else 
if (animal == 4) {
    console.log( "chose the monkey");
} else 
if (animal == 5) {
    console.log ("chose the panda");

} else {
    console.log("animal not found");
}

*/


let animal = prompt ("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");
let output = (animal ==1) ? "chose the dog" : 
(animal == 2) ? "chose the cat" :
(animal == 3) ? "chose the goldfish" :
(animal == 4) ? "chose the monkey" :
(animal == 5) ? "chose the panda" :
"annimal not found"
console.log(output);



/*

let animal = prompt ("Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda ");

switch(+animal) {
    case 1:
   alert( "chose the dog");
    break
    case 2: 
    alert("chose the cat");
    break
    case 3:
    alert("chose the goldfish");
    break
    case 4:
    alert("chose the monkey");
    break
    case 5:
    alert("chose the panda");
    break
    default: alert("animal not found")

}

*/