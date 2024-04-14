import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <Link href="/" className="text-cyan-500 hover:text-cyan-700">
        Return Home
      </Link>
    </div>
  );
}
