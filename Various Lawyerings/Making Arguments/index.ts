export type allowed = {
	status: "allowed",
	deliberationHours: number,
}
export type denied = {
	status: "denied",
	deliberationHours: number,
	annoyedJustice: boolean,
}
export type pending = {
	status: "pending",
	estimatedDeliberationHours: number,
}
export type status = allowed | denied | pending;

export type postTrial = {
	step: "pre-trial",
	classification: "dismiss" | "suppress" | "venue";
}
export type preTrial = {
	step: "post-trial",
	classification: "acquittal" | "correction" | "new trial";
}
export type trials = preTrial | postTrial;

export type Motion = {
	from: string,
	reason: string,
} & status & trials;

export const motions: Motion[] = [
	{
		annoyedJustice: true,
		classification: "acquittal",
		deliberationHours: 1,
		from: "defendant",
		reason: "The heretofore document had dried ink on it.",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 2.5,
		from: "plaintiff",
		reason: "The tenant has ninety days to vacate.",
		status: "denied",
		step: "post-trial",
	},
	{
		classification: "suppress",
		deliberationHours: 4,
		from: "plaintiff",
		reason: "Frank was never allowed in the house.",
		status: "allowed",
		step: "pre-trial",
	},
	{
		classification: "new trial",
		estimatedDeliberationHours: 3,
		from: "defendant",
		reason: "The duel's been accepted. There's no backing out. That's the law.",
		status: "pending",
		step: "post-trial",
	},
	{
		annoyedJustice: false,
		classification: "dismiss",
		deliberationHours: 0.5,
		from: "plaintiff",
		reason:
			"It seems like you have a tenuous grasp on the English language in general.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 1.5,
		from: "defendant",
		reason: "Fillibuster?",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "venue",
		deliberationHours: 0.25,
		from: "defendant",
		reason: "A time was never specified for the duel.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 5,
		from: "plaintiff",
		reason: "He's making a few good points!",
		status: "denied",
		step: "post-trial",
	},
];
