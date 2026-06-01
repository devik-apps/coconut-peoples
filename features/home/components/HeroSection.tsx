import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { homeHero } from "../data";

export function HeroSection() {
  return (
    <section className="grid min-h-[calc(100dvh-10rem)] items-center gap-12 py-12 md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col items-start gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            {homeHero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
            {homeHero.title}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {homeHero.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 text-base font-medium sm:w-auto sm:flex-row">
          {homeHero.actions.map((action) => (
            <ButtonLink
              key={action.href}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              variant={action.variant}
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Architecture
        </p>
        <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          {homeHero.structure.map((item) => (
            <p key={item}>
              <code className="rounded bg-zinc-100 px-2 py-1 font-mono text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50">
                {item}
              </code>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
