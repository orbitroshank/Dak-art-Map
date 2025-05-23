// ← no "use client" here
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/app/components/Header";
import LocationsList from "../components/LocationsList";

export default function LocationsPage() {
  // runs only on the server
  const postsDir = path.join(process.cwd(), "posts/locations");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const locations = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const source = fs.readFileSync(path.join(postsDir, fileName), "utf8");
    const { data } = matter(source);
    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      image: data.image as string,
    };
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Art Locations</h1>
        {/* hand off all interactivity to the client component */}
        <LocationsList locations={locations} />
      </main>
    </div>
  );
}
