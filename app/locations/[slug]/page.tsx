// app/locations/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "@/components/MDXRenderer";
import Link from "next/link";

type Params = { slug: string };
type FrontMatter = { title: string; excerpt?: string; date?: string };

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts/locations");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({ slug: file.replace(/\.mdx?$/, "") } as Params));
}

export default async function LocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "posts/locations");
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data: rawData } = matter(source);
  const data = rawData as FrontMatter;

  if (!data.title) {
    throw new Error("The front matter is missing the required 'title' field.");
  }

  // Serialize MDX content with frontMatter scope
  const mdxSource = await serialize(content, { scope: data });

  return (
    <section className="pt-24 bg-gray-100 px-8 pb-8">
      <article className="max-w-3xl w-full mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {data.title}
          </h1>
          {data.date && (
            <time dateTime={data.date} className="block text-sm text-gray-500">
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          {data.excerpt && (
            <p className="mt-4 text-lg text-gray-700 italic">{data.excerpt}</p>
          )}
        </header>

        <div className="prose prose-lg prose-gray mx-auto text-center">
          <MDXRenderer source={mdxSource} />
        </div>

        <footer className="mt-12 text-center">
          <Link
            href="/locations"
            className="inline-block text-blue-600 hover:underline font-medium"
          >
            ← Back to all locations
          </Link>
        </footer>
      </article>
    </section>
  );
}
