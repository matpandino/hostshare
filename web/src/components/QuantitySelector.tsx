import { type FC, type ReactNode } from "react";

interface QuantitySelectorProps {
  min: number;
  max: number;
  value: number;
  afterValue?: ReactNode;
  onChange: (value: number) => void;
}

const QuantitySelector: FC<QuantitySelectorProps> = ({
  min,
  max,
  value,
  afterValue,
  onChange,
}) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center overflow-hidden rounded-md border">
      <button
        className="w-5 bg-gray-100 text-lg hover:bg-gray-200 focus:outline-none"
        onClick={handleDecrease}
      >
        -
      </button>
      <span className="w-7 px-1 text-center text-base font-semibold">
        {value} {afterValue}
      </span>
      <button
        className="w-5 bg-gray-100 text-lg hover:bg-gray-200 focus:outline-none"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
