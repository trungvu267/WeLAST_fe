import { useEffect, useState } from "react";
import "./App.css";

// services
import fetchRepos from "./services/fetch-repos";

// components
import LanguageCategoryTab from "./components/language-category-tab";
import RepoDialog from "./components/repo-dialog";
import Loading from "./components/loading";

// helpers
import { groupByLang } from "./helpers";
function App() {
	const [loading, setLoading] = useState(false);
	const [langCategories, setLangCategories] = useState<Category[]>([]);

	useEffect(() => {
		const getRepos = async () => {
			try {
				setLoading(true);
				const res = await fetchRepos();
				if (res?.length) {
					setLangCategories(groupByLang(res));
				}
			} catch (error) {
				console.error("Error fetching repos:", error);
			} finally {
				setLoading(false);
			}
		};

		getRepos();
	}, []);

	
	return (
		<>
			<h1 className="text-3xl font-bold text-center md:text-6xl md:mb-12 md:mt-6">FreeCodeCamp's Repositories</h1>
			{loading ? <Loading /> 
			: <LanguageCategoryTab categories={langCategories} />
			}
			<RepoDialog />
		</>
	);
}

export default App;
