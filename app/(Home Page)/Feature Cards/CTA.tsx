import Link from "next/link";
export default function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-3xl p-16 text-center shadow-2xl">
        <h2 className="text-4xl font-bold mb-6">
          Ready to modernize your school?
        </h2>

        <p className="text-lg text-indigo-100 mb-10">
          Join hundreds of schools already managing everything with one
          platform.
        </p>

        <Link
          href="/register"
          className="inline-flex px-10 py-4 bg-white text-indigo-700 font-semibold rounded-xl hover:scale-105 transition"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  );
}
