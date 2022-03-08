const fruitFactoryFunction = () => {

    const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
    const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
    const object = {};

    const addingFruits = (userInput, emoji) => {
        const user = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
            fruitNames.push(user)
            fruits.push(emoji)

            fruitNames.forEach((key, i) => {
                object[key] = fruits[i]
                const keys = Object.keys(object)
            });
        return object;
    }

    const errors = (userInput, emojiInput) => {

        const user = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

        if (!user) {
            return 'Please enter a fruit';
        }
        else if (!emojiInput) {
            return 'Please choose an emoji';
        }
        else if (user != emojiInput) {
            return 'Please enter a fruit and choose a matching fruit emoji';
        }
        else return null;
    }

    return {
        addingFruits,
        errors
    }
}