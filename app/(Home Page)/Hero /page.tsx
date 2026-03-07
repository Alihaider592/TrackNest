import Link from "next/link";
export default function Hero() {
    return (
        <section className="relative pt-36 pb-24 px-6 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto text-center">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-8">
      🚀 NEW: Automated Grade Reports
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
      The smarter way to manage
      <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
        {" "}your school
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
      Manage students, attendance, results, and fees from one
      powerful dashboard designed for modern institutions.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <Link
        href="/register"
        className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
      >
        Start Free Trial
      </Link>

      <Link
        href="/demo"
        className="px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 transition font-semibold"
      >
        View Demo
      </Link>

    </div>

  </div>
</section>
    )
}