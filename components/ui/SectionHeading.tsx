import { cn } from "@/lib/utils";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <TextReveal
        as="h2"
        text={title}
        className={cn(
          "text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl",
          align === "center" && "mx-auto max-w-3xl"
        )}
      />
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "max-w-xl text-lg leading-relaxed text-muted",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
