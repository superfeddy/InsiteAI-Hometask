//  Types & Interfaces
import { IRepoData } from "@common/types/repo.types";

interface IRepositoryContents {
  repoData: IRepoData[];
}

const RepositoryContents = ({ repoData }: IRepositoryContents) => {
  return (
    <div className="flex flex-wrap w-full gap-5 justify-center">
      {repoData.map((item: IRepoData) => (
        <div
          className="border w-[45%] px-5 py-5 flex flex-col gap-5"
          key={item.id}
        >
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <h2 className="text-2xl font-semibold">{item.full_name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RepositoryContents;
