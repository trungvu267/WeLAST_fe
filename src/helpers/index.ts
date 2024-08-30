export function groupByLang(repos:Repo[]) {
	// Initialize a map to group items by their language
	const langMap = new Map();
  
	// Iterate over the array and group items by language
	repos.forEach(repo => {
	  const lang = repo.language === null ? 'no_lang' : repo.language;
  
	  if (!langMap.has(lang)) {
		langMap.set(lang, []);
	  }
	  langMap.get(lang).push(repo);
	});
  
	// Convert the map to the desired format
	return Array.from(langMap.entries()).map(([lang, repos]) => ({
	  lang,
	  repos
	}));
  }

  export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	if (isNaN(date.getTime())) {
		return "N/A";
	}
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};