type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "diet";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const classes =
    variant === "diet"
      ? "inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20"
      : "inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700";

  return <span className={classes}>{children}</span>;
}
