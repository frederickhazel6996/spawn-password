module.exports = {
    spawn: function () {
        let min = 8;
        let max = 50;
        let spawned = "";
        let length = Math.floor(Math.random() * (max - min)) + min;
        let number = "0123456789";
        let symbol = "!#$%()*+,-./:;=?@^_`{|}~&";
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let new_min = 1;
            let new_max = 4;
            let random = Math.floor(Math.random() * (new_max - new_min)) + new_min;
            if (random === 1) {
                let letter_min = 0;
                let letter_max = alphabets.length;
                let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
                spawned = spawned + alphabets[letter_random];
            } else if (random === 2) {
                let number_min = 0;
                let number_max = number.length;
                let number_random = Math.floor(Math.random() * (number_max - number_min)) + number_min;
                spawned = spawned + number[number_random];
            } else {
                let symbol_min = 0;
                let symbol_max = symbol.length;
                symbol_random = Math.floor(Math.random() * (symbol_max - symbol_min)) + symbol_min;
                spawned = spawned + symbol[symbol_random];
            }

            checker++;
        }
        return spawned;
    },
    spawnLength: function (length) {
        let spawned = "";

        let number = "0123456789";
        let symbol = "!#$%()*+,-./:;=?@^_`{|}~&";
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let new_min = 1;
            let new_max = 4;
            let random = Math.floor(Math.random() * (new_max - new_min)) + new_min;
            if (random === 1) {
                let letter_min = 0;
                let letter_max = alphabets.length;
                let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
                spawned = spawned + alphabets[letter_random];
            } else if (random === 2) {
                let number_min = 0;
                let number_max = number.length;
                let number_random = Math.floor(Math.random() * (number_max - number_min)) + number_min;
                spawned = spawned + number[number_random];
            } else {
                let symbol_min = 0;
                let symbol_max = symbol.length;
                symbol_random = Math.floor(Math.random() * (symbol_max - symbol_min)) + symbol_min;
                spawned = spawned + symbol[symbol_random];
            }

            checker++;
        }
        return spawned;
    },
    spawnAlpha: function () {
        let min = 8;
        let max = 50;
        let spawned = "";
        let length = Math.floor(Math.random() * (max - min)) + min;

        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let letter_min = 0;
            let letter_max = alphabets.length;
            let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
            spawned = spawned + alphabets[letter_random];

            checker++;
        }
        return spawned;
    },
    spawnAlphaLength: function (length) {
        let spawned = "";

        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let letter_min = 0;
            let letter_max = alphabets.length;
            let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
            spawned = spawned + alphabets[letter_random];

            checker++;
        }
        return spawned;
    },

    spawnAlphaNumeric: function () {
        let min = 8;
        let max = 50;
        let spawned = "";
        let length = Math.floor(Math.random() * (max - min)) + min;
        let number = "0123456789";

        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let new_min = 1;
            let new_max = 3;
            let random = Math.floor(Math.random() * (new_max - new_min)) + new_min;
            if (random === 1) {
                let letter_min = 0;
                let letter_max = alphabets.length;
                let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
                spawned = spawned + alphabets[letter_random];
            } else {
                let number_min = 0;
                let number_max = number.length;
                let number_random = Math.floor(Math.random() * (number_max - number_min)) + number_min;
                spawned = spawned + number[number_random];
            }

            checker++;
        }
        return spawned;
    },
    spawnAlphaNumericLength: function (length) {
        let spawned = "";

        let number = "0123456789";

        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let new_min = 1;
            let new_max = 3;
            let random = Math.floor(Math.random() * (new_max - new_min)) + new_min;
            if (random === 1) {
                let letter_min = 0;
                let letter_max = alphabets.length;
                let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
                spawned = spawned + alphabets[letter_random];
            } else {
                let number_min = 0;
                let number_max = number.length;
                let number_random = Math.floor(Math.random() * (number_max - number_min)) + number_min;
                spawned = spawned + number[number_random];
            }

            checker++;
        }
        return spawned;
    },
    spawnAlphaSymbol: function () {
        let min = 8;
        let max = 50;
        let spawned = "";
        let length = Math.floor(Math.random() * (max - min)) + min;

        let symbol = "!#$%()*+,-./:;=?@^_`{|}~&";
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let new_min = 1;
            let new_max = 3;
            let random = Math.floor(Math.random() * (new_max - new_min)) + new_min;
            if (random === 1) {
                let letter_min = 0;
                let letter_max = alphabets.length;
                let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
                spawned = spawned + alphabets[letter_random];
            } else {
                let symbol_min = 0;
                let symbol_max = symbol.length;
                symbol_random = Math.floor(Math.random() * (symbol_max - symbol_min)) + symbol_min;
                spawned = spawned + symbol[symbol_random];
            }

            checker++;
        }
        return spawned;
    },
    spawnAlphaSymbolLength: function (length) {
        let spawned = "";

        let symbol = "!#$%()*+,-./:;=?@^_`{|}~&";

        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let checker = 0;

        while (checker < length) {
            let new_min = 1;
            let new_max = 3;
            let random = Math.floor(Math.random() * (new_max - new_min)) + new_min;
            if (random === 1) {
                let letter_min = 0;
                let letter_max = alphabets.length;
                let letter_random = Math.floor(Math.random() * (letter_max - letter_min)) + letter_min;
                spawned = spawned + alphabets[letter_random];
            } else {
                let symbol_min = 0;
                let symbol_max = symbol.length;
                symbol_random = Math.floor(Math.random() * (symbol_max - symbol_min)) + symbol_min;
                spawned = spawned + symbol[symbol_random];
            }

            checker++;
        }
        if (spawned.length !== length) {
            return "error";
        }
        return spawned;
    },
};
