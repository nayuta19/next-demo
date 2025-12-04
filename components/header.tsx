import Link from "next/link";

export default function header() {
  return (
    <div className="absolute w-full">
      {/* container是用作媒体查询自适应 */}
      <div className="flex  justify-between container mx-auto  pt-8 pb-4">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          <Link href="/perfomance">Perfomance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </div>
    </div>
  );
}
