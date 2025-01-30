import { type Author } from "@/interfaces/author";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  post: Post;
};

export function PostPreview({ post }: Props) {
  return (
    <div className="flex flex-col font-Kiwi_Maru">
      <div className="bg-header_color w-full h-auto">
        <h2 className="ml-3 my-1">第{post.num}脚</h2>
      </div>
      <div className="flex flex-row text-header_color bg-cream">
        <div className="w-32 h-32">
          <CoverImage slug={post.slug} title={post.dir} src={post.coverImage} />
        </div>
        <div className="flex-1 ml-4">
          <h2 className="text-xl">
            <Link href={`/novel/${post.slug}`} className="hover:underline">
              {post.dir}
            </Link>
          </h2>
          <h3 className="p-1">{post.outline}</h3>
          <div className="flex flex-row">
            {/* <Avatar name={author.name} picture={author.picture} /> */}
            <div className="font-bold text-xs my-auto mx-2">
              <DateFormatter dateString={post.date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
