// components/MDXRenderer.tsx
"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export default function MDXRenderer({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  return (
    <MDXRemote
      {...source}
      components={{
        img: (props) => <img {...props} className="rounded-lg" />,
      }}
    />
  );
}
