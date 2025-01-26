import { type Author } from "@/interfaces/author";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  post: Post;
};

export function EpisodePreview({ post }: Props) {
  return (
    <div className="flex flex-row text-header_color font-Kiwi_Maru bg-cream">
      <div className="flex-1 ml-4">
        <h2 className="text-2xl">
          <Link href={`/novel/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <h3 className="text-lx">{post.count}</h3>
      </div>
    </div>
  );
}
