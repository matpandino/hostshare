import Skeleton from "react-loading-skeleton";

const getLoadingAmount = (amount: number) =>
  new Array(amount).fill(1) as number[];

const LoadingCard = () => (
  <div className="flex aspect-square flex-col gap-1">
    <div className="relative h-full w-full ">
      <Skeleton className="h-full w-full" borderRadius={12} />
    </div>
    <div>
      <Skeleton height={20} width={"100%"} />
      <div className="flex flex-row justify-between">
        <Skeleton className={"flex"} height={20} width={150} />
        <Skeleton className={"flex"} height={20} width={20} circle />
      </div>
      <Skeleton height={20} width={50} />
    </div>
  </div>
);

export function LoadingProperties({ amount = 32 }: { amount?: number }) {
  const placeholderData = getLoadingAmount(amount);
  return (
    <div className="grid-container mt-5 w-full max-w-[92%] gap-6">
      {placeholderData.map((listing, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}
