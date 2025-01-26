"use client";

import React, { useState } from "react";
import { PostPreview } from "./post-preview";
import { Post } from "@/interfaces/post";
import { EpisodePreview } from "./episode-preview";
type Props = {
  dir: string;
  novels: Post[];
};

export function DirNovelList({ dir, novels }: Props) {
  // 指定されたdirでフィルタリング
  const filteredNovels = novels.filter((novel) => novel.dir === dir);
  const [showEpisodes, setShowEpisodes] = useState(false);

  const toggleEpisodes = () => setShowEpisodes((prev) => !prev);

  return (
    <div className="mb-5">
      <div onClick={toggleEpisodes} className="cursor-pointer">
        <PostPreview post={filteredNovels[0]} />
      </div>
      {showEpisodes && (
        <div className="flex flex-col">
          {filteredNovels.map((novel, index) => (
            <div
              key={index}
              className="bg-cream flex w-2/3 rounded px-5 shadow-md"
            >
              <EpisodePreview post={novel} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
