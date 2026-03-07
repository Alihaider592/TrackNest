import Link from "next/link";
import { GraduationCap, ClipboardList, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 font-sans">
      
      {/* Sticky Glass Navbar */}
    
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-transparent opacity-70" />
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            NEW: AUTOMATED GRADE REPORTS
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
            Simplify your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">campus management</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            The all-in-one platform for schools to manage students, streamline attendance, and track academic growth without the manual paperwork.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-xl"
            >
              Start 14-day free trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition"
            >
              Book a demo
            </Link>
          </div>

          <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-2xl max-w-5xl mx-auto overflow-hidden">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden aspect-video flex items-center justify-center text-slate-400">
              {/* Replace with your image */}
              <p>Dashboard Preview Illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Bento Grid Style */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-3">Capabilities</h3>
            <h4 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need to scale.</h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="md:col-span-2 group p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-200 transition-all">
              <div className="h-12 w-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Intelligent Student CRM</h4>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                Detailed profiles with historical data, family contacts, and health records accessible in one click.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-indigo-600 text-white rounded-3xl shadow-xl shadow-indigo-100 flex flex-col justify-between">
              <div>
                <ClipboardList className="w-8 h-8 mb-6 opacity-80" />
                <h4 className="text-xl font-bold mb-3">Smart Attendance</h4>
                <p className="text-indigo-100">Automated SMS alerts for absentees and monthly trends.</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-indigo-50">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> QR-based logging</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Parent notifications</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-200 transition-all">
              <GraduationCap className="w-10 h-10 text-indigo-600 mb-6" />
              <h4 className="text-xl font-bold mb-3">Academic Excellence</h4>
              <p className="text-slate-600">
                Customizable report cards and GPA calculation that adapts to your curriculum.
              </p>
            </div>

            {/* Feature 4 (Full Width-ish) */}
            <div className="md:col-span-2 p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-200 transition-all flex items-center gap-8">
              <div className="hidden sm:block h-32 w-48 bg-slate-100 rounded-xl flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Automated Fee Collection</h4>
                <p className="text-slate-600">Send invoices, track partial payments, and generate tax receipts automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your school?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Join 500+ institutions already using TrackNest to save 20+ hours of admin work every week.
            </p>
            <Link
              href="/register"
              className="inline-flex px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 hover:scale-105 transition shadow-lg"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-bold text-slate-900">TrackNest</span>
          </div>
          <p className="text-slate-500 text-sm italic">
            Education is the most powerful weapon which you can use to change the world.
          </p>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TrackNest Inc.
          </div>
        </div>
      </footer>
    </main>
  );
}