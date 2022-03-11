const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
const textElem = document.querySelector('.input');
const emojiElem = document.querySelector('.fruits');
const errorElem = document.querySelector('.errors');
const object = {};

fruitNames.forEach((key, i) => {
    object[key] = fruits[i]
});

const keys = Object.keys(object)
keys.sort();

var fruitInstance = fruitFactoryFunction();

for (var i = 0; i < keys.length; i++) {
    index = keys[i];
    const displayFruits = document.createElement("ul");
    displayFruits.innerHTML = `${index} ${object[index]}`
    document.body.appendChild(displayFruits);
}

const fruitGame = () =>  {
    const fruitName = textElem.value;
    const textInput = fruitName.charAt(0).toUpperCase() + fruitName.slice(1).toLowerCase();
    const emoji = emojiElem.options[emojiElem.selectedIndex].text;

    errorElem.innerHTML = fruitInstance.errors(textElem.value, emojiElem.value)
    setTimeout(() => errorElem.innerHTML = "", 5000);
    fruitInstance.addingFruits(fruitName,emoji)

    if (textInput == emojiElem.value) {
        fruitInstance.addingFruits(textInput,emoji)
        const displayFruits = document.createElement("ul");
        displayFruits.innerHTML = `${textInput}  ${emoji}`
        document.body.appendChild(displayFruits);
    }
}