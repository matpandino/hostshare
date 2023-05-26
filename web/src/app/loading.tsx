import { LoadingProperties } from "@/components/Properties/LoadingProperties";

export default function Page() {
  return (
    <div className="flex max-w-[92%] flex-1 justify-center">
      <LoadingProperties amount={32} />
    </div>
  );
}
