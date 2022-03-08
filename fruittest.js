describe('Fruit list game factory function', () => {
    describe('Adding fruits', () => {
        describe('error messages', () => {
            it('should return error message if emoji and text input do not match', () => {
                const fruit = fruitFactoryFunction();

                assert.equal("Please enter a fruit and choose a matching fruit emoji", fruit.errors("Apple", "Banana"));
            });

            it('should return "Please enter a fruit" if there is no text input', () => {
                const fruit = fruitFactoryFunction();

                assert.equal("Please enter a fruit", fruit.errors('', "Apple"));
            });

            it('should return "Please choose an emoji" if there is no emoji input', () => {
                const fruit = fruitFactoryFunction();

                assert.equal("Please choose an emoji", fruit.errors("Apple", ''));
            });
        });

        describe('adding fruit functionality', () => {
            it('should add fruit and emoji value to object', () => {

                const fruit = fruitFactoryFunction();

                const obj = fruit.addingFruits("cherry", "🍒")

                const result1 = 'Cherry' in obj;

                let{Cherry:result2} = obj

                assert.equal(true, result1);
                
                assert.equal("🍒", result2);
            });
        });
    });
});
