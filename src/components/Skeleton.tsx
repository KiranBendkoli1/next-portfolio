import { twMerge } from "tailwind-merge";

const Skeleton = ({ className = "" }) => {

  return (
    <div
      className={twMerge(
        `animate-pulse rounded h-4 w-full`,
        "bg-gray-600",
        className,
      )}
    />
  );
};

export default Skeleton;
