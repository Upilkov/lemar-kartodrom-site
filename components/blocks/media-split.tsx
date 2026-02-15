import Image from "next/image";
import { cn } from "@/lib/cn";

export function MediaSplit({
  title,
  text,
  image,
  reverse,
  children,
}: {
  title: string;
  text: string;
  image: { src: string; alt: string };
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("grid gap-6 md:gap-10 items-center", "md:grid-cols-12")}>
      <div className={cn("md:col-span-6", reverse ? "md:order-2" : "")} data-reveal>
        <div className="rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8 shadow-glow">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">{title}</h2>
          <p className="mt-4 text-white/70 leading-relaxed">{text}</p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>

      <div className={cn("md:col-span-6", reverse ? "md:order-1" : "")} data-reveal>
        <div className="relative overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.02] shadow-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent2/10" />
          <Image src={image.src} alt={image.alt} width={1200} height={900} className="h-auto w-full object-cover opacity-90" />
        </div>
      </div>
    </div>
  );
}
