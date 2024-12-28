import { getAllNovels } from "@/lib/api";
import { MoreStories } from "../_components/more-stories";

const Novel_Page = () => {
  const allNovels = getAllNovels();

  return (
    <div>
      <div className="flex flex-col m-auto gap-3 px-10">
        {allNovels.map((novel, index) => (
          <div key={index} className="bg-white flex w-2/3 rounded px-5">
            <img
              src={"/assets/blog/novel/トーネットチェア.png"}
              alt={"page_chair"}
              width={180}
              height={180}
              className="object-contain"
            ></img>
            <MoreStories posts={[novel]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novel_Page;
