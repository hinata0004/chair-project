import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="max-w-4xl align-center mx-auto">More Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 pb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            outline={post.outline}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
