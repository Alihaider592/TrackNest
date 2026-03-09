export default function TrustNumber() {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Businesses", value: "2,500+" },
              { label: "Tasks Automated", value: "1.2M" },
              { label: "System Uptime", value: "99.9%" },
              { label: "Data Security", value: "AES-256" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-indigo-600">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}