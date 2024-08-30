import network from ".";

const fetchRepos = async () => {
  try {
    const { data } = await network.get('/repos');
    return data; // Return only the data from the response
  } catch (error: any) {
    console.error('Error fetching repositories:', error);
    throw error; // Optionally rethrow the error to handle it elsewhere
  }
};

export default fetchRepos;
