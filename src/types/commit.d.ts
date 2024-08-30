interface RootCommit {
	sha: string;
	node_id: string;
	commit: Commit;
	url: string;
	html_url: string;
	comments_url: string;
	author: Author2;
	committer: Author2;
	parents: Parent[];
}
interface Parent {
	sha: string;
	url: string;
	html_url: string;
}
interface Author2 {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}
interface Commit {
	author: Author;
	committer: Author;
	message: string;
	tree: Tree;
	url: string;
	comment_count: number;
	verification: Verification;
}
interface Verification {
	verified: boolean;
	reason: string;
	signature: string;
	payload: string;
}
interface Tree {
	sha: string;
	url: string;
}
interface Author {
	name: string;
	email: string;
	date: string;
}
