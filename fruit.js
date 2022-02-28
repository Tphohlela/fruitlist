const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

var object = {};
fruitNames.forEach((key, i) => {

    object[key] = fruits[i]

});

const keys = Object.keys(object)

keys.sort();

for (var i = 0; i < keys.length; i++) {
    index = keys[i];
    const displayFruits = document.createElement("ul");
    displayFruits.innerHTML =  index + '  ' + object[index]
    document.body.appendChild(displayFruits);
    // console.log(index + ':' + object[index]);
  }






