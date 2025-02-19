import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="relative text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none text-center z-10">
      {children}
    </h1>
  );
}
