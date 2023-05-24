import { type Category } from "@/types";
import getCategoryIcon from "../utils/getCategoryIcon";

export default function CategoryItem({ category }: { category: Category }) {
  const Icon = getCategoryIcon(category);
  return (
    <div className="flex w-24  cursor-pointer flex-col items-center justify-center gap-3 p-4 text-gray-600 hover:text-black hover:shadow-md">
      <div>{<Icon />}</div>
      <span className="text-sm">{category}</span>
    </div>
  );
}
