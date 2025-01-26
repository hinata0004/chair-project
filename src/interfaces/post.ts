import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  dir: string;
  num: string;
  date: string;
  count: string;
  coverImage: string;
  outline: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
