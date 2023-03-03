export const createCipher = (cipher: (char: string) => string) => {
    return (text: string) => {
        let res = ''

        for (const char of text) {
            res += cipher(char)
        }

        return res;
    }
}