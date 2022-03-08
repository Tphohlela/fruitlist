const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
const textElem = document.querySelector('.input');
const emojiElem = document.querySelector('.fruits');
const errorElem = document.querySelector('.errors');
var object = {};

//original array displaying
fruitNames.forEach((key, i) => {
    object[key] = fruits[i]
    const keys = Object.keys(object)
});

const keys = Object.keys(object)
keys.sort();

var fruitInstance = fruitFactoryFunction();

for (var i = 0; i < keys.length; i++) {
    index = keys[i];
    const displayFruits = document.createElement("ul");
    displayFruits.innerHTML = index + '  ' + object[index]
    document.body.appendChild(displayFruits);
}

//functionality for adding fruit
function fruitGame() {

    const fruitName = textElem.value;
    const textInput = fruitName.charAt(0).toUpperCase() + fruitName.slice(1).toLowerCase();
    const emoji = emojiElem.options[emojiElem.selectedIndex].text;

    //error messages for adding fruit
    errorElem.innerHTML = fruitInstance.errors(textElem.value, emojiElem.value)
    setTimeout(() => errorElem.innerHTML = "", 5000);
    // fruitInstance.addingFruits(textElem.value,emojiElem.value)

    if (textInput == emojiElem.value) {

        fruitInstance.addingFruits(textInput,emoji)
        console.log('tt' + fruitNames)
        console.log('yoh' + JSON.stringify(object))

        const displayFruits = document.createElement("ul");
        displayFruits.innerHTML = textInput + ' ' + emoji
        document.body.appendChild(displayFruits);
        // console.log('ghettoooooooooooo  ' + Object.keys(object).sort())
        // const keys = Object.keys(object)
        // console.log('ddeswsfcdsc' + keys.sort())
        //keys.sort();  
    }
}