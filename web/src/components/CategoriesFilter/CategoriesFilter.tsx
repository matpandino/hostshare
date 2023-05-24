import { type Category } from "@/types";
import CategoryItem from "./component/CategoryItem";

export default async function CategoriesFilter() {
  const response = await fetch("http://localhost:3003/categories");
  const categories = (await response.json()) as Category[];

  return (
    <div className="flex w-full justify-center">
      {categories.map((category, index) => {
        return <CategoryItem key={index} category={category} />;
      })}
    </div>
  );
}
