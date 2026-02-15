"use client";

import { Hero } from "@/components/blocks/hero";
import { Section } from "@/components/blocks/section";
import { Reveal } from "@/components/blocks/reveal";
import { site } from "@/content/site";
import { school } from "@/content/school";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function SchoolPage() {
  return (
    <>
      <Hero
        title={school.hero.title}
        subtitle={school.hero.subtitle}
        image={{ src: "/images/new-photo/new_school.jpg", alt: "Школа картинга Lemar" }}
        primaryCta={{ href: site.links.telegram, label: "Записаться на занятие", external: true }}
        secondaryCta={{ href: "/rental", label: "Прокат и цены" }}
      />

      <Reveal>
        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8 shadow-glow">
              <div className="text-xs text-white/60">{school.adult.age}</div>
              <h2 className="mt-2 font-display text-2xl tracking-tight">{school.adult.title}</h2>
              <p className="mt-4 text-white/70 leading-relaxed">{school.adult.about}</p>

              <div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-sm text-white/80">Главный тренер</div>
                <div className="mt-1 font-semibold text-white">{school.adult.coach.name}</div>
                <div className="text-sm text-white/60">{school.adult.coach.desc}</div>
                <div className="mt-2 text-sm text-white/80">{school.adult.coach.phone}</div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-white/75">
                {school.adult.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8 shadow-glow">
              <div className="text-xs text-white/60">Набор</div>
              <h2 className="mt-2 font-display text-2xl tracking-tight">{school.kids.title}</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                {school.kids.intake}. Подробности по телефону: <b>{school.kids.contact.name}</b> — {school.kids.contact.phone}
              </p>

              <div className="mt-6 grid gap-4">
                <Block title={school.kids.docsTitle} items={school.kids.docs} />
                <Block title={school.kids.gearTitle} items={school.kids.gear} />
                <Block title={school.kids.youCanTitle} items={school.kids.youCan} />
                <Block title={school.kids.forStudentsTitle} items={school.kids.forStudents} />
              </div>
            </motion.div>
          </div>
        </Section>
      </Reveal>
    </>
  );
}

function Block({ title, items }: { title: string; items: ReadonlyArray<string> }) {
  return (
    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
      <div className="text-sm text-white/85">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent2" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
