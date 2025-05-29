"use client";
import { CardContent, useTheme } from "@mui/material";
import React from "react";

export default function PageDefault({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <CardContent
      sx={{
        backgroundColor: "#D32F2F",
      }}
    >
      {children}
    </CardContent>
  );
}
