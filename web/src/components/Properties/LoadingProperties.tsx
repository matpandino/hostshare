import Skeleton from "react-loading-skeleton";

const getLoadingAmount = (amount: number) =>
  new Array(amount).fill(1) as number[];

const LoadingCard = () => (
  <div className="flex aspect-square flex-col">
    <div className="relative mb-1 h-full w-full">
      <Skeleton className="h-full w-full" borderRadius={12} />
    </div>
    <div className="flex flex-col">
      <Skeleton height={20} width={"100%"} />
      <div className="mb-1 flex h-7 flex-row justify-between">
        <Skeleton height="100%" width={150} />
        <Skeleton height="100%" width={28} circle />
      </div>
      <div>
        <Skeleton height={20} width={50} />
      </div>
    </div>
  </div>
);

export function LoadingProperties({ amount = 32 }: { amount?: number }) {
  const placeholderData = getLoadingAmount(amount);
  return (
    <div className="grid-container mt-4 w-full gap-6">
      {placeholderData.map((listing, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}
