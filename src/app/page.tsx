import Container from "@/app/_components/container";
import Image from "next/image";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "./_components/header";
import WaveSeparator from "./_components/wave-separator";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <WaveSeparator bottomColor="#634720" />
        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> */}
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </main>
  );
}
