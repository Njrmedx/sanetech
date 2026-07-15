/**
 * LinkArrow — wrap Next Link com seta animada.
 *
 * group inline-flex, font-medium 15px, color primary, no-underline, ArrowRight
 * 16px a direita. Hover: icone translate-x-3px + color primary-900. Active: 1px.
 *
 * Spec: DESIGN.md §6.10.
 */

import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LinkArrowProps {
  href: Route | string;
  children: ReactNode;
  className?: string;
  /** target='_blank' se externo. */
  external?: boolean;
}

export function LinkArrow({
  href,
  children,
  className,
  external,
}: LinkArrowProps) {
  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href as Route}
      className={cn(
        "group/linkarrow inline-flex items-center gap-1.5",
        "text-[15px] font-medium",
        "text-[var(--color-primary-700)] no-underline [&]:no-underline",
        "transition-[color] duration-[180ms]",
        "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
        "motion-reduce:transition-none",
        "hover:text-[var(--color-primary-900)]",
        "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
        "focus-visible:rounded-[var(--radius-sm)]",
        className
      )}
      {...externalProps}
    >
      <span>{children}</span>
      <ArrowRight
        className={cn(
          "size-4 shrink-0",
          "transition-transform duration-[180ms]",
          "[transition-timing-function:cubic-bezier(0.23,1,0.32,1)]",
          "motion-reduce:transition-none",
          "group-hover/linkarrow:translate-x-[3px]",
          "group-active/linkarrow:translate-x-[1px]"
        )}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Link>
  );
}

export default LinkArrow;
