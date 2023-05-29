import { type Category } from "@/types";
import CategoryItem from "./component/CategoryItem";

export default async function CategoriesFilter() {
  const response = await fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${process.env.NEXT_PUBLIC_API}/categories?_page=1&_limit=32`
  );

  const categories = (await response.json()) as Category[];

  return (
    <div className="flex w-[92%] justify-center overflow-auto">
      {categories.slice(0, 12).map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
