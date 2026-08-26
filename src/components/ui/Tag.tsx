import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs text-muted transition-colors",
        variant === "default" &&
          "border-border bg-surface/60 hover:border-border-strong hover:text-foreground",
        variant === "accent" &&
          "border-accent/30 bg-accent-soft text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
