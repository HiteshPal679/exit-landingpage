"use client"

import Image from "next/image"
import { Maven_Pro } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Check, X, TrendingDown, TrendingUp, IndianRupee } from "lucide-react"
import { useEffect, useRef, type ReactNode } from "react"

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

function Animate({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in" | "fade-up-stagger"
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("animate-visible")
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`animate-on-scroll ${animation} ${className}`}>
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <main className={`bg-[#001C3D] text-white overflow-x-hidden ${mavenPro.className}`}>

      {/* Animation Styles */}
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-on-scroll.fade-up {
          transform: translateY(40px);
        }
        .animate-on-scroll.fade-in {
          transform: none;
        }
        .animate-on-scroll.fade-left {
          transform: translateX(-40px);
        }
        .animate-on-scroll.fade-right {
          transform: translateX(40px);
        }
        .animate-on-scroll.scale-in {
          transform: scale(0.92);
        }
        .animate-on-scroll.fade-up-stagger {
          transform: translateY(30px);
        }
        .animate-on-scroll.animate-visible {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }
      `}</style>

      {/* NAVBAR */}
      <header className="flex items-center justify-center px-10 md:px-20 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/Final Milestone logo croped.png"
            alt="Milestones"
            width={40}
            height={40}
            className="brightness-0 invert"
          />
          <span className="text-xl font-semibold tracking-tight">Milestones</span>
        </div>
      </header>

      {/* HERO */}
      <section
        className="px-10 md:px-20 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,188,178,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,188,178,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <Animate animation="fade-left">
          <div className="mt-[-50px]">
            <h1 className="text-5xl md:text-5xl font-bold leading-tight">
              Attrition rarely starts
              <span className="text-teal-400"> <br/>with one exit.</span>
              <br/>It starts with a
              <span className="text-teal-400"><br/> pattern.</span>
            </h1>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Milestones helps organisations decode the real drivers behind
              employee exits through independent conversations,behavioural insight, and structured analysis.
            </p>

            <Button className="mt-8 bg-teal-400 text-white font-semibold hover:bg-teal-300  px-6">
              Schedule a Demo <Image src="/Group.png" alt="" width={24} height={10} className="ml-2 h-auto w-6 inline-block" />
            </Button>
          </div>
        </Animate>

        {/* Hero Visual - Attrition Drivers */}
        <Animate animation="fade-right" delay={200}>
          <div className="flex justify-center relative">
            <Image
              src="/Frame 1.png"
              alt="Attrition drivers"
              width={400}
              height={300}
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </Animate>
      </section>

      {/* BUSINESS PROBLEM */}
      <section className="px-10 md:px-20 py-24 bg-[#001C3D]">
        <Animate>
          <p className="text-teal-400 text-ml font-semibold tracking-wider uppercase mb-4">
            The Business Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-3xl leading-tight">
            What looks like individual resignations Is often a deeper organisational signal
          </h2>
          <p className="mt-4  max-w-2xl">
            It is about lost productivity, hiring costs, and disrupted business continuity.
          </p>
        </Animate>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Animate animation="fade-up-stagger" delay={0}>
            <div className="bg-[#102E54] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FF3B4A]/[0.18] flex items-center justify-center mb-6">
                <TrendingDown className="h-6 w-6 text-[#FF3B4A]" />
              </div>
              <p className="text-[#FF3B4A] text-5xl font-bold">66%</p>
              <p className="mt-4  text-base leading-relaxed">
                say retention and turnover are top challenges <span className="text-sm">(Gallagher Workforce Trends Report)</span>
              </p>
            </div>
          </Animate>

          <Animate animation="fade-up-stagger" delay={150}>
            <div className="bg-[#0a2e4e] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#FFA600]/[0.18] flex items-center justify-center mb-6">
                <IndianRupee className="h-6 w-6 text-[#FFA600]" />
              </div>
              <p className="text-[#FFA600] text-5xl font-bold">50- 200%</p>
              <p className="mt-4  text-base leading-relaxed">
                of annual salary is spent replacing an employee - far higher than retention costs <span className="text-sm">(SHRM, Gallup)</span>
              </p>
            </div>
          </Animate>

          <Animate animation="fade-up-stagger" delay={300}>
            <div className="bg-[#0a2e4e] rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-[#2AAFFF]/[0.18] flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-[#2AAFFF]" />
              </div>
              <p className="text-[#2AAFFF] text-5xl font-bold">94%</p>
              <p className="mt-4 text-base leading-relaxed">
                of early exits could be prevented if organisations acted on exit insights
              </p>
              <p className="mt-2 text-sm">(LinkedIn Workplace Learning Report)</p>
            </div>
          </Animate>
        </div>

        <Animate delay={100}>
          <p className="mt-7">
            Yet most organisations only see the exit, not the signals building up to it.
          </p>
        </Animate>

        {/* Signal Levels */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          <Animate animation="fade-left">
            <div>
              <h3 className="text-4xl mt-12 font-bold leading-snug">
                Milestones help organisations identify these signals early before attrition begins impacting business outcomes.
              </h3>
            </div>
          </Animate>
          <Animate animation="fade-right" delay={200}>
            <div className="p-6 rounded-xl w-full">
  {[
    {
      level: "External Market",
      desc: "industry demand, compensation benchmarks",
      width: "w-full",
      dot: "bg-blue-500",
    },
    {
      level: "Organisation",
      desc: "leadership culture, policies, career paths",
      width: "w-[95%]",
      dot: "bg-blue-400",
    },
    {
      level: "Teams",
      desc: "manager behaviour, workload, collaboration",
      width: "w-[90%]",
      dot: "bg-sky-400",
    },
    {
      level: "Individual",
      desc: "role clarity, recognition, growth",
      width: "w-[85%]",
      dot: "bg-cyan-400",
    },
  ].map((item) => (
    <div
      key={item.level}
      className={`${item.width} bg-[#001731] border border-[#0a69b1d0] rounded-xl px-6 py-3 flex items-center justify-between`}
    >
      {/* LEFT TEXT */}
      <p className="text-sm md:text-base">
        <span className="text-white font-semibold">
          {item.level}
        </span>{" "}
        <span className="text-[#6B8FB3]">
          {item.desc}
        </span>
      </p>

      {/* RIGHT DOT */}
      <div className={`w-2 h-2 rounded-full ${item.dot}`} />
    </div>
  ))}

  {/* FOOTER TEXT */}
  <p className="text-xs mt-4 ml-5.5">
    Milestones studies attrition across all organisational layers, not just the final exit moment.
  </p>
</div>
          </Animate>
        </div>
      </section>


<section className="bg-[#EFF4F7] py-24 px-6 md:px-16 text-black">
  {/* HEADER */}
  <Animate>
    <p className="text-[#12B9B0] text-ml font-semibold uppercase text-center ">
      Why Milestones
    </p>

    <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
      Traditional Exit Interviews Limit Insights
    </h2>

    <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto text-base">
      Most organisations already conduct exit interviews, but the insights rarely
      translate into organisational understanding.
    </p>
  </Animate>

  {/* TABLE */}
  <Animate animation="scale-in" delay={200}>
    <div className="max-w-5xl mx-auto mt-16 rounded-2xl overflow-hidden border border-[#D5DEE6] bg-[#F8FBFD] shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-[#E9EFF5] p-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-r border-[#D5DEE6]">
              Aspect
            </th>

            <th className="bg-[#E9EFF5] p-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-r border-[#D5DEE6]">
              <span className="flex items-center gap-2">
                <X className="h-4 w-4 text-gray-400" />
                Traditional Exit Interview
              </span>
            </th>

            <th className="bg-[#0A2E4E] p-5 text-left text-xs font-semibold text-white uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal-400" />
                Milestones Approach
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {[
            {
              aspect: "Who Conducts it",
              traditional: "Internally within the organisation",
              milestones: "An independent third-party partner",
            },
            {
              aspect: "Quality of feedback",
              traditional: "Tends to be guarded or diplomatic",
              milestones: "Neutral, candid, reflective",
            },
            {
              aspect: "Analysis depth",
              traditional: "Generic exit reason documented",
              milestones: "Pattern detection across exit datasets",
            },
            {
              aspect: "Timing",
              traditional: "Focused only on the final exit moment",
              milestones:
                "Connected insights across the employee lifecycle",
            },
            {
              aspect: "Output",
              traditional: "Conducted immediately after exit or FNF",
              milestones:
                "Delayed exit interviews with honest insights",
            },
          ].map((row, i) => (
            <tr
    key={i}
    className={`border-t border-[#D5DEE6]  transition ${
      i % 2 !== 0 ? "bg-[#E9EFF5]" : ""
    }`}
  >
              {/* ASPECT */}
              <td className="p-5 font-medium text-sm text-gray-800 border-r border-[#D5DEE6]">
                {row.aspect}
              </td>

              {/* TRADITIONAL */}
              <td className="p-5 text-sm text-gray-600 border-r border-[#D5DEE6]">
                <div className="flex items-center gap-2">
                  <X className="h-4 w-4 text-gray-400 shrink-0" />
                  {row.traditional}
                </div>
              </td>

              {/* MILESTONES */}
              <td className="p-5 text-sm text-gray-700 bg-[#E6F4F1]">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500 shrink-0" />
                  {row.milestones}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Animate>

  {/* FOOTER */}
  <Animate delay={300}>
    <p className="mt-7 text-center text-gray-700 text-base">
      The difference is not collecting feedback. The difference is{" "}
      <span className="text-[#12B9B0] font-semibold">
        interpreting what it means.
      </span>
    </p>
  </Animate>
</section>

      {/* THE MILESTONES METHOD - Triangle */}
      <section className="bg-gray-50 text-black py-28 px-10 md:px-20 text-center">
        <Animate>
          <p className="text-teal-500 text-ml font-semibold tracking-wider uppercase ">
            The Milestones Method
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Attrition has no single cause.<br/>
            Understanding it requires more than one lens.
          </h2>

          <p className="mt-5 text-teal-500 text-ml text-base">Milestones Combines</p>
        </Animate>

        {/* Triangle Image with Labels */}
        <Animate animation="scale-in" delay={200}>
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-[900px]">
              {/* Top Label - HR Expertise */}
              <div className="text-center mb-1">
                <p className="font-bold text-lg">HR Expertise</p>
                <p className="text-sm text-gray-500">Organisational structures<br />and leadership dynamics</p>
              </div>

              <Image
                src="/Frame 3.png"
                alt="Milestones Method Triangle"
                width={700}
                height={550}
                className="w-full h-auto"
              />

              {/* Bottom Labels - positioned to align with bottom-left and bottom-right icons */}
              <div className="flex justify-between -mt-40 gap-20">
                <div className="text-center w-[220px] -ml-10">
                  <p className="font-bold text-lg">Behavioural Psychology</p>
                  <p className="text-sm text-gray-500">Motivations behind employee<br />decisions</p>
                </div>
                <div className="text-center w-[220px] -mr-12">
                  <p className="font-bold text-lg">Technology & AI</p>
                  <p className="text-sm text-gray-500">Pattern detection across exit<br />insights</p>
                </div>
              </div>
            </div>
          </div>
        </Animate>

        <Animate delay={400}>
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-gray-100 border border-gray-300 rounded-xl px-5 py-4">
              <p className="text-sm font-semibold text-gray-600">
                This triangulation allows us to move from isolated feedback to systemic understanding
              </p>
            </div>
          </div>
        </Animate>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="px-10 md:px-20 py-24 text-center bg-[#001C3D]">
        <Animate>
          <p className="text-teal-400 text-ml font-semibold tracking-wider uppercase mb-4">
            Attrition Intelligence Dashboard
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            A Unified View of Attrition Intelligence
          </h2>

          <p className="mt-4 text-white max-w-3xl mx-auto text-base">
            Milestones brings all exit insights together into a single consolidated view, allowing leadership teams to track how attrition signals are evolving across the organisation.
          </p>
        </Animate>

        {/* Dashboard Screenshot */}
        <Animate animation="scale-in" delay={200}>
          <div className="mt-12 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/40">
            <Image
              src="/Dashboard.png"
              alt="Milestones Dashboard"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </Animate>

        {/* Feature Pills */}
        <Animate delay={400}>
          <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-6xl mx-auto">
            {[
              "Exit reasons across departments",
              "Sentiment, leadership, and loyalty indicators",
              "Interview progress and response rates",
              "Follow-ups and report generation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-[#001731] border border-[#0a69b1d0]  rounded-md px-5 py-2.5">
                <div className="w-2 h-2 bg-teal-400 rounded-full" />
                <span className="text-xs text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </Animate>
      </section>

      {/* INSIGHT → ACTION */}
      <section className="bg-white text-black py-24 px-10 md:px-20 text-center">
        <Animate>
          <p className="text-teal-400 text-ml font-semibold tracking-wider uppercase mb-4">
            Insight &rarr; Action
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Every employee exit leaves behind a signal
          </h2>

          <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base"> Milestones help leadership teams move from reactive headcount management to informed,
            proactive decisions and finally identifying where intervention is needed before attrition compounds.</p>
        </Animate>
      </section>

      {/* CTA */}
      <section className="bg-[#001C3D] text-center py-24 px-10">
        <Animate>
          <p className="text-teal-400 text-ml font-semibold tracking-wider uppercase mb-4">
            Ready to Listen?
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Listen to what your exits
          </h2>
          <h2 className="text-3xl md:text-5xl font-semibold text-teal-400 mt-2">
             are trying to tell you
          </h2>

          <p className="mt-6 ">
            Milestones transform employee departures into meaningful organisational insight.
          </p>

          <Button className="mt-8 bg-teal-400 text-white font-semibold hover:bg-teal-300  px-6">
              Schedule a Demo <Image src="/Group.png" alt="" width={24} height={10} className="ml-2 h-auto w-6 inline-block" />
            </Button>
        </Animate>
      </section>

    </main>
  )
}
