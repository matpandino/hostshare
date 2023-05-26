import { LoadingProperties } from "@/components/Properties/LoadingProperties";
import Skeleton from "react-loading-skeleton";

export default function Page() {
  return (
    <div className="relative flex max-w-full flex-1 justify-center">
      <div className="flex w-full md:w-full md:px-5">
        <LoadingProperties amount={32} />
      </div>
      <div className="sticky hidden md:top-[theme(height.header)] md:flex md:h-[calc(100vh-theme(height.header))] md:w-2/3">
        <Skeleton
          className="flex h-full w-full"
          containerClassName="flex w-full h-full"
        />
      </div>
    </div>
  );
}
