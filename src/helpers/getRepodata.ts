export const getRepodata = async (keyword: string, page: number) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${keyword}&sort=stars&order=desc&per_page=10&page=${page}`
  );
  const data = await response.json();
  return data;
};
