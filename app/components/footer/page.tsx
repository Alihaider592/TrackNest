export default function Footer() {
  return (
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
  );
}
{/* <footer className="py-12 px-6 border-t border-slate-100">
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
      </footer> */}