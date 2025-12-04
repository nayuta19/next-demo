"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function header() {
  const pathname = usePathname();
  const links = [
    { href: "/perfomance", label: "Perfomance" },
    { href: "/reliability", label: "Reliability" },
    { href: "/scale", label: "Scale" },
  ];
  const activeClass = "text-indigo-600 ";
  const inactiveClass = "text-gray-800 hover:text-indigo-500";
  return (
    <div className="absolute w-full z-12">
      {/* container是用作媒体查询自适应 */}
      <div className="flex  justify-between container mx-auto  pt-8 pb-4 ">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={` ${
                  isActive ? activeClass : inactiveClass
                } "transition-colors"`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
