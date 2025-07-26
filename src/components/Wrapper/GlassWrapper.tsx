import { FC, ReactNode } from "react";

const GlassWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-bgPrimary relative text-tBase min-h-[100vh] w-full flex justify-center items-center">
      <span className="absolute hidden sm:block sm:size-64 bg-[#27ceda] right-36 rounded-full blur-3xl opacity-30" />
      <span className="absolute hidden sm:block size-5 sm:size-48 bg-[#2d27da] rounded-full translate-x-40 translate-y-40 blur-3xl opacity-30" />
      <div className="min-h-[90%] w-[95%] border border-white/20 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default GlassWrapper;
