import React, { ReactNode } from "react";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full mx-auto max-w-screen-xl p-2.5 md:p-20">
      {children}
    </div>
  );
}
