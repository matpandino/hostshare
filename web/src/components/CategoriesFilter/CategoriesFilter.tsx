import { type Category } from "@/types";
import CategoryItem from "./component/CategoryItem";

export default async function CategoriesFilter() {
  const response = await fetch(
    "http://localhost:3003/categories?_page=1&_limit=12"
  );

  const categories = (await response.json()) as Category[];

  return (
    <div className="flex w-[92%] justify-center overflow-auto">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
