import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";
import logoDark from "@/assets/logo/parisco.svg";
import logoLight from "@/assets/logo/parisco-light.svg";

interface LogoProps {
  /** "dark" = navy wordmark for light backgrounds, "light" = white wordmark for dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
}

export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <img
      src={tone === "dark" ? logoDark : logoLight}
      alt={SITE.name}
      width={582}
      height={144}
      className={cn("h-10 sm:h-12 w-auto object-contain", className)}
    />
  );
}
