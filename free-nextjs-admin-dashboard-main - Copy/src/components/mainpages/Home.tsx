// "use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* NAVBAR */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <span className="text-2xl font-extrabold tracking-tight">
                            <span className="text-gray-900">i</span>
                            <span className="text-black">MPS</span>
                        </span>
                        <span className="sr-only">iMPS</span>
                    </Link>

                    {/* Menu */}
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <Link href="/" className="hover:text-black/70">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-black/70">
                            About
                        </Link>
                        <Link href="/contract" className="hover:text-black/70">
                            Contract
                        </Link>
                        <Link href="/dashboard" className="hover:text-black/70">
                            Dashboard
                        </Link>
                    </nav>

                    {/* User */}
                    {/* <div className="flex items-center gap-3">
                        <button className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50">
                            <span>John Doe</span>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 7l5 5 5-5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button className="md:hidden p-2 rounded-lg hover:bg-gray-50" aria-label="Open menu">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </button>
                    </div> */}
                    
                </div>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left copy */}
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            <span className="block">Ai Maintenance</span>
                            <span className="block">as a service Platform</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-base sm:text-lg text-gray-600">
                            Journey to the edge of wonder and witness the Aurora Borealis, where
                            nature’s most dazzling light show awaits to captivate your senses and
                            ignite your imagination.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <Link
                                href="/signin"
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-gray-900 hover:bg-black transition shadow"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="#pricing"
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-gray-900 border border-gray-300 hover:bg-gray-50 transition"
                            >
                                View Plans
                            </Link>
                        </div>
                    </div>

                    {/* Right image */}
                    {/* <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] aspect-[3/5]">
                            <Image
                                src="/images/ev-charger.png" // ← เปลี่ยนเป็นรูปของคุณ
                                alt="EV Charger"
                                fill
                                className="object-contain drop-shadow-xl"
                                priority
                            />
                        </div>
                    </div> */}
                </div>
            </section>

            {/* PRICING */}
            <section id="pricing" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight">
                        Subscribe Package
                    </h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <PricingCard price={199} title="Starter" features={["Basic monitoring", "Email alerts", "Single site"]} />
                        <PricingCard
                            highlight
                            price={599}
                            title="Pro"
                            features={["Advanced analytics", "Priority support", "Multi‑site"]}
                        />
                        <PricingCard price={970} title="Enterprise" features={["24/7 SLA", "Custom reports", "Unlimited sites"]} />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-gray-200 py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex items-center justify-between">
                    <p>© {new Date().getFullYear()} iMPS. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-gray-700">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-gray-700">
                            Terms
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/* ---------------- Components ---------------- */

type PricingCardProps = {
    price: number;
    title: string;
    features: string[];
    highlight?: boolean;
};

function PricingCard({ price, title, features, highlight }: PricingCardProps) {
    return (
        <div
            className={[
                "rounded-2xl border bg-white p-6 sm:p-7 shadow-sm",
                highlight ? "border-gray-900 ring-2 ring-gray-900" : "border-gray-200",
            ].join(" ")}
        >
            <div className="flex items-baseline gap-2">
                <div className="text-3xl font-extrabold">฿ {price}</div>
                <div className="text-gray-500">/Month.</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>

            <ul className="mt-5 space-y-2 text-sm text-gray-600">
                {features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5" aria-hidden="true">
                            <path
                                d="M20 6L9 17l-5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="/signin"
                className={[
                    "mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition",
                    highlight
                        ? "bg-gray-900 text-white hover:bg-black"
                        : "border border-gray-300 text-gray-900 hover:bg-gray-50",
                ].join(" ")}
            >
                Choose Plan
            </Link>
        </div>
    );
}
