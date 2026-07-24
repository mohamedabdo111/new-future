import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "gradient-primary text-white shadow-elegant hover:shadow-glow hover:-translate-y-0.5",
        accent: "gradient-accent text-primary-foreground shadow-elegant hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        glass: "glass text-white hover:bg-white/20 border-white/40",
        ghost: "text-primary hover:bg-primary/10",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

interface CTAButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  withArrow?: boolean;
}

export function CTAButton({ variant, size, className, children, withArrow, ...rest }: CTAButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...rest}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
