import Link from "next/link";
import { GraduationCap, ClipboardList, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">TrackNest</h1>
        <div className="space-x-6">
          <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-12 py-24">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Modern Student Management for Your Institute
          </h2>
          <p className="text-gray-600 text-lg">
            TrackNest lets you manage students, attendance, results, and fees
            seamlessly with a clean and intuitive dashboard.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="/register"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Create Account
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/dashboard-illustration.png"
            alt="TrackNest Dashboard"
            className="w-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-12 py-20 bg-gray-50">
        <h3 className="text-4xl font-bold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Student Tracking</h4>
            <p className="text-gray-600">
              Add, edit, and manage student profiles, admission details, and
              academic records effortlessly.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
            <ClipboardList className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Attendance Management</h4>
            <p className="text-gray-600">
              Mark daily attendance, track trends, and analyze attendance
              percentages with ease.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition">
            <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Results & Grades</h4>
            <p className="text-gray-600">
              Create exams, record grades, generate student result cards, and
              view performance reports.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/pattern-bg.png"
            alt="background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 space-y-4 max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold">Start Managing Students Today</h2>
          <p className="text-lg">
            Powerful, intuitive, and easy-to-use student management system.
          </p>
          <Link
            href="/register"
            className="inline-block mt-4 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 bg-white">
        © {new Date().getFullYear()} TrackNest. All rights reserved.
      </footer>
    </main>
  );
}