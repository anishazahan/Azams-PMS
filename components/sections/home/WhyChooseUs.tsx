"use client";

import Container from "@/components/ui/Container";
import { VALUES } from "@/data/values";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Check, CheckCircle2, ShieldCheck } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(".why-anim-item");
      if (elements.length === 0) return;

      gsap.from(elements, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950 py-24 text-slate-100"
    >
      {/* Background Laser Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Ambient Radial Accent */}
      <div className="pointer-events-none absolute right-0 top-1/2 size-[35rem] -translate-y-1/2 bg-sky-600/10 blur-[180px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* LEFT COLUMN: Heading & Leadership Box */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="why-anim-item inline-flex items-center gap-2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-400 backdrop-blur-md w-fit">
              <Award className="size-3.5 text-sky-400" />
              <span>THE AMAZE DISCIPLINE DIFFERENCE</span>
            </div>

            <h2 className="why-anim-item text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Discipline, Not Just <br />
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Headcount.
              </span>
            </h2>

            <p className="why-anim-item text-sm leading-relaxed text-slate-300">
              Founded by a Certified Security Practitioner and Indian Navy
              veteran, Amaze runs every service line with structured
              military-grade SOPs — not informal judgment calls.
            </p>

            {/* Credibility Card */}
            <div className="why-anim-item relative rounded-sm border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-xl">
              <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>
              <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                +
              </div>

              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                <div className="flex size-9 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/20 text-sky-400">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Military Precision Governance
                  </h3>
                  <p className="font-mono text-[10px] uppercase text-slate-400">
                    INDIAN NAVY VETERAN LEADERSHIP
                  </p>
                </div>
              </div>

              <ul className="mt-3.5 flex flex-col gap-2.5 font-mono text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />
                  <span>
                    100% Standard Operating Procedure (SOP) Compliance
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />
                  <span>Zero-Tolerance Audits for Site Security & MEP</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Values Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {VALUES && VALUES.length > 0
              ? VALUES.map((value, i) => {
                  const IconComponent = value.icon || Check;

                  return (
                    <div
                      key={value.title || `value-card-${i}`}
                      className="why-anim-item group relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900/90 shadow-xl min-h-[220px]"
                    >
                      {/* Tactical Corner Crosshairs */}
                      <div className="pointer-events-none absolute left-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                        +
                      </div>
                      <div className="pointer-events-none absolute right-1.5 top-1.5 font-mono text-[9px] text-sky-500/40">
                        +
                      </div>
                      <div className="pointer-events-none absolute bottom-1.5 left-1.5 font-mono text-[9px] text-sky-500/40">
                        +
                      </div>
                      <div className="pointer-events-none absolute bottom-1.5 right-1.5 font-mono text-[9px] text-sky-500/40">
                        +
                      </div>

                      <div>
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex size-10 items-center justify-center rounded-sm border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors group-hover:border-sky-500/60 group-hover:bg-sky-500/20">
                            {typeof IconComponent === "function" ? (
                              <IconComponent className="size-5" />
                            ) : (
                              <Check className="size-5" />
                            )}
                          </div>
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                            VALUE // {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-white transition-colors group-hover:text-sky-300">
                          {value.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300">
                          {value.description}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-slate-800/80 pt-3 font-mono text-[10px] text-slate-500">
                        SOP PROTOCOL VERIFIED
                      </div>
                    </div>
                  );
                })
              : /* Fallback Cards if VALUES array is empty or failing */
                [
                  {
                    title: "Structured Navy SOPs",
                    description:
                      "Every security post and engineering task follows written protocols, not verbal assumptions.",
                  },
                  {
                    title: "24/7 Central Command",
                    description:
                      "Real-time incident tracking and automated escalation for total operational peace of mind.",
                  },
                  {
                    title: "100% Statutory Compliance",
                    description:
                      "Complete transparency across labor laws, PF, ESIC, and safety audits with live portal access.",
                  },
                  {
                    title: "Zero-Downtime Engineering",
                    description:
                      "Preventative MEP maintenance programs engineered to keep commercial towers running smoothly.",
                  },
                ].map((fallback, i) => (
                  <div
                    key={`fallback-val-${i}`}
                    className="why-anim-item relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl"
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase text-sky-400">
                        VALUE // 0{i + 1}
                      </span>
                      <h3 className="mt-2 text-base font-bold text-white">
                        {fallback.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {fallback.description}
                      </p>
                    </div>
                    <div className="mt-4 border-t border-slate-800/80 pt-2 font-mono text-[10px] text-slate-500">
                      SOP VERIFIED
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
