import network from ".";

const getRepoCommits = async ({repo_name, owner}:{repo_name:string, owner:string}) => {
  try {
	const { data } = await network.get('/commits', {
		params: {
			repo_name,
			owner
		}
	});
    return data; 
  } catch (error: any) {
    console.error('Error fetching repositories:', error);
    throw error; 
  }
};

export default getRepoCommits;
