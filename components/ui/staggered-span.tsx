import React from "react";

interface StaggeredSpanProps {
  children: React.ReactNode;
}

export default function StaggeredSpan({ children }: StaggeredSpanProps) {
  // Convert children to string
  const text = React.Children.toArray(children)
    .map((child) => (typeof child === "string" ? child : ""))
    .join("");

  // Split by spaces to get words
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <span key={index}>
          {word}
          {index < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
