const checkEmotion = async (knownEmotions, emotion) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    })
    return knownEmotions.has(emotion);
}

const speak = async (knownEmotions, newEmotion, phrase) => {
	if (!(await checkEmotion(knownEmotions, newEmotion))) throw new Error
        (
            `Does not compute. I do not understand ${newEmotion}.`
        );

	return `"${phrase}" (${newEmotion})`;
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
