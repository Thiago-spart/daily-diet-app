/* eslint-disable filenames/match-regex */
export const formatDate = (date: Date) => {
	return date
		.toLocaleDateString("pt-BR", {
			year: "2-digit",
			month: "2-digit",
			day: "2-digit",
			hour: "numeric",
			minute: "numeric",
			hour12: false,
		})
		.split("/")
		.join(".");
};
