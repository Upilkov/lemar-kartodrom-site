import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-14 md:py-20", className)}>
      {children}
    </section>
  );
}
