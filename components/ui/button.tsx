import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 font-medium",
    "transition-[background-color,color,transform,box-shadow,border-color]",
    "duration-[120ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
    "active:scale-[0.97]",
    "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]",
    "disabled:opacity-50 disabled:pointer-events-none",
    "select-none whitespace-nowrap",
    // Defesa para asChild + <a>: zera underline e impede que regras
    // globais de <a> (ou herdadas) sobrescrevam a cor da variant
    "no-underline [&]:no-underline",
  ],
  {
    variants: {
      variant: {
        // Sanetech canonical (DESIGN.md). [&]:!text-... reforca a cor
        // contra qualquer regra global concorrente (defense vs Bug 2).
        primary:
          "bg-[var(--color-primary-700)] [&]:!text-white hover:bg-[var(--color-primary-900)]",
        "primary-dark":
          "bg-[var(--color-primary-900)] [&]:!text-white hover:bg-[#1A1C45]",
        ghost:
          "bg-transparent [&]:text-[var(--color-primary-700)] hover:bg-[var(--color-primary-50)]",
        danger:
          "bg-[var(--color-danger)] [&]:!text-white hover:bg-[#9C2823]",

        // shadcn-compat aliases (para blocks shadcnblocks pluggarem direto)
        default:
          "bg-primary [&]:!text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary [&]:text-secondary-foreground hover:bg-secondary/80 border border-[var(--color-border)]",
        outline:
          "border border-[var(--color-border)] bg-transparent [&]:text-foreground hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive [&]:!text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-8 px-3 text-[13px] rounded-[var(--radius-md)]",
        md: "h-10 px-4 text-[15px] rounded-[var(--radius-md)]",
        lg: "h-12 px-6 text-base rounded-[var(--radius-md)]",
        xl: "h-14 px-8 text-lg rounded-[var(--radius-md)]",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
