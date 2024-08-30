import { useEffect, useState } from "react";
import getRepoCommits from "../services/get-repo-commits";
import { formatDate } from "../helpers";

const Commit = ({ selectRepo }: { selectRepo: Repo }) => {
	const [commits, setCommits] = useState<RootCommit[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!selectRepo?.name || !selectRepo?.owner) return;

		const _getCommits = async () => {
			setLoading(true);
			try {
				const res = await getRepoCommits({
					repo_name: selectRepo.name,
					owner: selectRepo?.owner?.login,
				});
				setCommits(res);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		_getCommits();
	}, [selectRepo]);
	if (loading)
		return (
			<div className="space-y-2 mt-2">
				<div className="w-48 h-3 rounded-full animate-pulse bg-gray-200"></div>
				<div className="w-64 h-3 rounded-full animate-pulse bg-gray-200"></div>
				<div className="w-64 h-3 rounded-full animate-pulse bg-gray-200"></div>
				<div className="w-64 h-3 rounded-full animate-pulse bg-gray-200"></div>
				<div className="w-64 h-3 rounded-full animate-pulse bg-gray-200"></div>
				<div className="w-64 h-3 rounded-full animate-pulse bg-gray-200"></div>
				<div className="w-64 h-3 rounded-full animate-pulse bg-gray-200"></div>
			</div>
		);
	if (!loading && commits?.length === 0) return <div>No commits found</div>;
	return (
		<div className="mt-2">
			<p>Recent commit</p>
			<p className="text-white/50 text-sm">
				{commits[0]?.commit?.message}
			</p>
			<div className="mt-2 flex flex-row items-center justify-between">
				<p className="flex-1">
					<span className="text-white/50">Auth: </span>
					{commits[0]?.commit?.author?.name}
				</p>
				<p>
					<span className="text-white/50">Date: </span>
					{formatDate(commits[0]?.commit?.author?.date)}
				</p>
			</div>
		</div>
	);
};

export default Commit;
