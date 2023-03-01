export function runCommands() {
	let availableResource: 'Food' | 'Water' | undefined;
	let day: number = 1;
	let food: number = 5;
	let water: number = 5;

	for (; day <= 7; day++) {
		const roll: number = Math.floor(Math.random() * 6) + 1;
		if (roll === 1) availableResource = 'Food';
		else if (roll === 2) availableResource = 'Water';
		else {
			if (availableResource) {
				if (availableResource === 'Food') food += roll;
				else water += roll;
				availableResource = undefined;
			} else {
				if (roll % 2 === 0) availableResource = 'Food';
				else availableResource = 'Water';
			}
		}
		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) return false;
	}

	return true;
}