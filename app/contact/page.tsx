import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Roshan Kalantarian.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4 max-w-xl">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="mb-4">
          Have questions or feedback? Send me a message below.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border rounded-md px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border rounded-md px-3 py-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border rounded-md px-3 py-2"
              placeholder="How can I help?"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
