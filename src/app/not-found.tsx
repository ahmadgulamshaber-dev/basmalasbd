import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-deep-night text-center px-6">
      <h1 className="display text-6xl text-lilac-glow glow-text mb-4">
        Lost in the stars
      </h1>
      <p className="font-secondary italic text-rose-pink text-xl mb-8">
        This page doesn't exist — but Basmala's journey does.
      </p>
      <Link
        href="/"
        className="px-6 py-3 glass rounded-full text-moonlight-gold hover:bg-white/10 transition"
      >
        Return to the beginning
      </Link>
    </main>
  );
}
