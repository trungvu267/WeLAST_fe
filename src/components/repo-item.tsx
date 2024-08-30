import { useSelectRepo } from "../stores";

const RepoItem = ({ repo }: { repo: Repo }) => {
	const { setSelectRepo } = useSelectRepo();
	return (
		<li
			className="relative rounded-md p-3 text-sm/6 transition bg-white/5 hover:bg-white/10 col-span-1"
			onClick={() => {
				setSelectRepo(repo);
			}}
		>
			<a href="#" className="font-semibold text-lime-300">
				<span className="absolute inset-0" />
				{repo.name}
			</a>
			<ul className="gap-2 text-white/50 list-none">
				<li>
					<span className="font-semibold text-white">Desc: </span>{" "}
					{repo.description || "N/A"}
				</li>
				<li>
					<span className="font-semibold text-white">Language: </span>{" "}
					{repo.language || "N/A"}
				</li>
				<li>
					<span className="font-semibold text-white">
						Forks count:{" "}
					</span>
					{repo.forks_count || "N/A"}
				</li>
			</ul>
		</li>
	);
};

export default RepoItem;
