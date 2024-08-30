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