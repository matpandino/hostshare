"use-client";
import { type Category } from "@/types";
import getCategoryIcon from "../utils/getCategoryIcon";
import Link from "next/link";

export default function CategoryItem({ category }: { category: Category }) {
  const Icon = getCategoryIcon(category);
  return (
    <Link
      href={`?categoryId=${category.id}`}
      prefetch={false}
      className="flex h-full min-w-fit cursor-pointer flex-col items-center justify-center gap-3 p-2 text-gray-600 hover:text-black hover:shadow-md"
    >
      <div>{<Icon size={20} />}</div>
      <span className="text-xs font-semibold">{category.title}</span>
    </Link>
  );
}
