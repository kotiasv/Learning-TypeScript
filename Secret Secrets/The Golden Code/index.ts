export type Settings = {
    attempts: number,
    makeGuess: (text: string, attempt: number) => string,
    validateGuess: (guess: string) => boolean,
}

export const createCodeCracker = ({
    attempts, makeGuess, validateGuess
}: Settings) => {
    return (text: string) => {
        for (let i = 0; i < attempts; i++) {
            const guess = makeGuess(text, i)

            if (validateGuess(guess)) return guess
        }

        return undefined
    }
}