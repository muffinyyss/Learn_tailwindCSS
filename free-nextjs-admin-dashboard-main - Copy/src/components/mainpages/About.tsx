// "use client";

import Link from "next/link";

export default function About() {
    return (
        <section className="relative bg-gray-50 dark:bg-gray-900 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                    About Us
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Welcome to our platform! We are passionate about building modern
                    solutions with <span className="font-semibold">Next.js</span> and{" "}
                    <span className="font-semibold">TailwindCSS</span>. Our mission is to
                    deliver fast, reliable, and beautiful web applications that help
                    businesses and individuals succeed in the digital age.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    This project is designed as a learning and practice playground for
                    exploring full-stack features, authentication, dashboards, and modern
                    UI components.
                </p>

                <div className="flex justify-center space-x-4">
                    <Link
                        href="/"
                        className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-lg bg-gray-200 px-6 py-3 text-gray-800 font-medium shadow hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
