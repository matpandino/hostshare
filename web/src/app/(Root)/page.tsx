import { Properties } from "@/components/Properties";
import { type Listing } from "@/types";

interface RootPageProps {
  searchParams: { categoryId?: string };
}

export default async function Page({
  searchParams: { categoryId },
}: RootPageProps) {
  const response = await fetch(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${process.env.NEXT_PUBLIC_API}/data?${
      categoryId ? `category=${categoryId}&` : ""
    }&_limit=32`
  );

  const listings = (await response.json()) as Listing[];

  return (
    <div className="flex max-w-[92%] flex-1 justify-center">
      <Properties listings={listings} />
    </div>
  );
}
