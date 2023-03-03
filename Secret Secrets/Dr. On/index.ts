export type Functions = (char: string) => string

export const createAdvancedCipher = (onVowel: Functions, onConsonant: Functions, onPunctuation: Function) => {
    return (text: string) => {
        let res = ''

        for (const char of text) {
            const cipher = /[aeiou]/i.test(char) ?
                onVowel :
                /[bcdfghjklmnpqrstvwxyz]/i.test(char) ?
                    onConsonant :
                    onPunctuation
            res += cipher(char)
        }

        return res
    }
}