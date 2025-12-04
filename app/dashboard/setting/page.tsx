"use client";
import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();
  console.log("当前路径是", pathname);

  return <div>setting</div>;
}
