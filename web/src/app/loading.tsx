import { LoadingProperties } from "@/components/Properties/LoadingProperties";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <LoadingProperties amount={32} />
    </div>
  );
}
