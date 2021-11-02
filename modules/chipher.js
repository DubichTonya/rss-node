module.exports = {

    alphabet: ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'],

    caesar(text, shift = 1, mode = 1) {
        if (mode) {
            text = text.split('').map((item) => {
                return this.alphabet.indexOf(item) == -1 ? item : this.alphabet[(this.alphabet.indexOf(item) + (shift * 2)) % this.alphabet.length];
            });
        } else {
            text = text.split('').map((item) => {
                return this.alphabet.indexOf(item) == -1 ? item : this.alphabet[(this.alphabet.indexOf(item) - (shift * 2) + this.alphabet.length) % this.alphabet.length];
            });
        }
        return text.join('');
    },
    
    atbash(text) {
        text = text.split('').map((item) => {
            return this.alphabet.indexOf(item) == -1 ? item : this.reverseAlphabet()[this.alphabet.indexOf(item)];
        });

        return text.join('');
    },

    rot8(text, mode = 1) {
        const shift = 8;
        return this.caesar(text, shift, mode);
    },

    reverseAlphabet() {
        let helper = '';
        const alphabet = [...this.alphabet];
        alphabet.forEach((item, index) => {
            if (index % 2 == 0) {
                let helper = alphabet[index];
                alphabet[index] = alphabet[index + 1];
                alphabet[index + 1] = helper;
            }
        });

        return alphabet.reverse();
    }
};
