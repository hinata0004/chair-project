import { getAllNovels } from "@/lib/api";
import { PostPreview } from "../_components/post-preview";
import { DirNovelList } from "../_components/dir-novel_list";

const Novel_Page = () => {
  const allNovels = getAllNovels();
  const uniqueDirs = Array.from(
    new Set(allNovels.map((novel) => novel.dir))
  ).reverse();

  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url(/assets/blog/page/sui_bg.png)" }}
      ></div>
      <div className="fixed inset-0 bg-header_color opacity-40 z-10"></div>
      <div className="relative flex flex-col md:flex-row m-auto gap-3 px-10 z-20">
        <img
          src={"/assets/blog/page/sui_yua_2.png"}
          alt={"page_chair"}
          width={200}
          height={200}
          className="w-1/3 h-min px-5 z-20"
        ></img>
        <div className="w-full md:w-3/5 h-auto mt-5">
          {uniqueDirs.map((dir) => (
            <DirNovelList key={dir} dir={dir} novels={allNovels} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Novel_Page;
