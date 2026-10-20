import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}

// Treść jest widoczna od pierwszego renderu, bez zależności od skryptów i ruchu.
export default function Reveal({ children, className = "", as: Tag = "div" }: RevealProps) {
  return <Tag className={className || undefined}>{children}</Tag>;
}
