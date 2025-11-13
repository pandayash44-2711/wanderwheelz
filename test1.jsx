import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
function SEO({ title, description, url }) {
return (
<Helmet>
<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content="car rental, self drive, bhubaneswar, wanderwheelz, car booking india" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content={url} />
<meta property="og:site_name" content="WanderWheelz" />
<meta property="og:image" content="https://wanderwheelz.in/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="https://wanderwheelz.in/og-image.jpg" />
<link rel="canonical" href={url} />
</Helmet>
);
}


function Header() {
return (
<header className="bg-white shadow">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center text-white font-bold">W</div>
<div>
<h1 className="font-extrabold text-lg">WanderWheelz</h1>
<p className="text-xs text-slate-500">Self-drive & chauffeur rentals — wander freely</p>
</div>
</div>


<nav className="hidden md:flex gap-6 items-center text-sm text-slate-600">
<Link to="/">Home</Link>
<Link to="/fleet">Fleet</Link>
<Link to="/pricing">Pricing</Link>
<Link to="/contact">Contact</Link>
<Link to="/book" className="bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:opacity-95">Book Now</Link>
</nav>
</div>
</header>
);
}
function Home() {
</form>
</div>
);
}


function Booking() {
const [confirmed, setConfirmed] = useState(false);
return (
<div className="max-w-6xl mx-auto px-6 py-12">
<SEO title="Book a Car | WanderWheelz.in" description="Book your self-drive or chauffeur car in minutes. WanderWheelz makes travel easy and affordable." url="https://wanderwheelz.in/book" />
<h3 className="text-2xl font-bold mb-4">Book Your Ride</h3>
{!confirmed ? (
<form onSubmit={(e) => { e.preventDefault(); setConfirmed(true); }} className="space-y-3 max-w-md">
<input placeholder="Your name" className="p-3 border rounded-md w-full" />
<input type="date" className="p-3 border rounded-md w-full" />
<select className="p-3 border rounded-md w-full">
<option>Hyundai Aura</option>
<option>Dzire</option>
<option>Innova Crysta</option>
</select>
<button className="bg-emerald-600 text-white px-4 py-2 rounded-md">Confirm Booking</button>
</form>
) : (
<p className="text-lg text-emerald-700 font-semibold">Thank you! Your booking is confirmed.</p>
)}
</div>
);
}


function Footer() {
return (
<footer className="bg-white border-t">
<div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600 flex flex-col md:flex-row justify-between">
<div>© {new Date().getFullYear()} WanderWheelz · wanderwheelz.in</div>
<div className="flex gap-4">
<Link to="/terms">Terms</Link>
<Link to="/privacy">Privacy</Link>
</div>
</div>
</footer>
);
}


export default function App() {
return (
<Router>
<div className="min-h-screen flex flex-col bg-gray-50">
<Header />
<main className="flex-grow">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/fleet" element={<Fleet />} />
<Route path="/pricing" element={<Pricing />} />
<Route path="/contact" element={<Contact />} />
<Route path="/book" element={<Booking />} />
</Routes>
</main>
<Footer />
</div>
</Router>
);
}
