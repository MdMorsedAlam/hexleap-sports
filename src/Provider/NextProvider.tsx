"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";
const NextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <NextUIProvider>{children}</NextUIProvider>
    </div>
  );
};

export default NextProvider;
