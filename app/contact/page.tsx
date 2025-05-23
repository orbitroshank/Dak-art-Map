import type { Metadata } from "next";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Roshan Kalantarian—whether to say hello or suggest a new art location.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 max-w-xl">
        <h1 className="lava-text text-4xl font-bold mb-6">Contact</h1>
        <p className="mb-4">
          Want to suggest a new art spot in Dakar, or just say hi? Fill out the
          form below with your details, and it&rsquo;ll come straight to my
          inbox.
        </p>

        {/* Fallback mailto form */}
        <form
          action="mailto:obitroshank@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              className="mt-1 block w-full border rounded-md px-3 py-2"
              placeholder="Jane Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              className="mt-1 block w-full border rounded-md px-3 py-2"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="art-url" className="block text-sm font-medium">
              Art Site URL
            </label>
            <input
              type="url"
              id="art-url"
              name="“Suggested Art Site URL”"
              className="mt-1 block w-full border rounded-md px-3 py-2"
              placeholder="https://example.com/my-favorite-mural"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows={4}
              className="mt-1 block w-full border rounded-md px-3 py-2"
              placeholder="Tell me about the location, why it&rsquo;s special, or any questions you have."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600 space-y-2">
          <p>
            Or email me directly at{" "}
            <a
              href="mailto:obitroshank@gmail.com"
              className="text-blue-600 hover:underline"
            >
              obitroshank@gmail.com
            </a>
            .
          </p>
          <p>
            Follow on Instagram:{" "}
            <a
              href="https://instagram.com/roshan.abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              @roshan.abroad
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
