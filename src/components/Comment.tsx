import React, { FC, ReactNode } from "react";

const Comment: FC<{ children: ReactNode; type: "single" | "multi" }> = ({
  type,
  children,
}) => {
  if (type === "multi") {
    // Convert the multiline string into an array of lines
    const lines = (children as string).split("\n");

    return (
      <div className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed mb-6">
        <div>{"/**"}</div>
        {lines.map((line, idx) => (
          <div key={idx} className="break-words">
            {" * " + line.trim()}
          </div>
        ))}
        <div>{" */"}</div>
      </div>
    );
  }

  return (
    <div className="text-gray-400 text-xs sm:text-sm font-mono">
      // {children}
    </div>
  );
};

export default Comment;
