import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            TrackNest
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#features" className="hover:text-indigo-600 transition">
            Features
          </Link>
          <Link href="#solutions" className="hover:text-indigo-600 transition">
            Solutions
          </Link>
          <Link href="#pricing" className="hover:text-indigo-600 transition">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
