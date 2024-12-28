import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllNovels, getNovelBySlug } from "@/lib/api"; // APIの関数をnovelに合わせて変更
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "zenn-markdown-html";
import "zenn-content-css";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header"; // 小説専用のヘッダーがあれば変更
import { PostBody } from "@/app/_components/post-body"; // 小説用のコンポーネントに変更
import { PostHeader } from "@/app/_components/post-header"; // 小説用のヘッダーに変更

export default async function Novel(props: Params) {
  const params = await props.params;
  const novel = await getNovelBySlug(params.slug); // 小説用の関数に変更

  if (!novel) {
    return notFound();
  }

  const content = await markdownToHtml(novel.content || ""); // 小説の内容に合わせて変換

  return (
    <main>
      <Alert preview={novel.preview} />
      <Container>
        <article className="pb-32 znc">
          <PostHeader // 小説用のヘッダーに変更
            title={novel.title}
            coverImage={novel.coverImage}
            date={novel.date}
            author={novel.author}
          />
          <PostBody content={content} /> // 小説用の本文コンポーネントに変更
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const novel = await getNovelBySlug(params.slug); // 小説用の関数に変更

  if (!novel) {
    return notFound();
  }

  const title = `${novel.title} | Next.js Novel Example with ${CMS_NAME}`; // 小説に合わせたタイトルに変更

  return {
    title,
    openGraph: {
      title,
      images: [novel.ogImage.url], // 小説用のOG画像
    },
  };
}

export async function generateStaticParams() {
  const novels = await getAllNovels(); // 小説のデータを取得

  return novels.map((novel) => ({
    slug: novel.slug,
  }));
}
