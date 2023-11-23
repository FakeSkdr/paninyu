import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/album">Lien vers l&apos;album</Link>
      <Link href="/builder">Lien vers le builder</Link>
    </div>
  );
}
