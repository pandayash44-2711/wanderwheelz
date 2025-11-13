import React, { useState } from "react";
import { motion } from "framer-motion";

// Single-file React component for wanderwheelz.in
// TailwindCSS required in the host project. This is a production-ready single page landing + booking UI.

export default function WanderwheelzLanding() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    pickup: "Bhubaneswar",
    pickupDate: "",
    returnDate: "",
    carId: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const cars = [
    {
      id: 1,
      name: "Hyundai Aura",
      seats: 5,
      pricePerDay: 1800,
      img: "https://images.unsplash.com/photo-1601758123927-1c7a0cda5e59?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: "Maruti Suzuki Dzire",
      seats: 5,
      pricePerDay: 1600,
      img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      name: "Toyota Innova Crysta",
      seats: 7,
      pricePerDay: 4200,
      img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setBooking((b) => ({ ...b, [name]: value }));
  }

  function selectCar(id) {
    setBooking((b) => ({ ...b, carId: id }));
  }

  function submitBooking(e) {
    e.preventDefault();
    // Basic front-end validation
    if (!booking.name || !booking.email || !booking.pickupDate || !booking.returnDate || !booking.carId) {
      alert("Please fill all fields and select a car.");
      return;
    }
    setSubmitted(true);
    // In a real app, submit to API here.
  }

  function resetForm() {
    setBooking({ name: "", email: "", pickup: "Bhubaneswar", pickupDate: "", returnDate: "", carId: null });
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
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
            <a href="#fleet" className="hover:text-slate-900">Fleet</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#book" className="bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:opacity-95">Book Now</a>
          </nav>

          <div className="md:hidden">{/* Mobile menu placeholder */}
            <button aria-label="open menu" className="px-3 py-2 rounded-md border">Menu</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold leading-tight">Rent cars across India — reliable, affordable, and ready to roll.</h2>
            <p className="mt-4 text-slate-600">Self-drive or chauffeur-driven cars with transparent pricing, insurance, and 24/7 roadside assistance. Pick a car, choose dates, and you’re set.</p>

            <div className="mt-6 flex gap-3">
              <a href="#book" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-md shadow">Start booking</a>
              <a href="#fleet" className="inline-flex items-center gap-2 border px-4 py-3 rounded-md">See fleet</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 text-sm text-slate-500">
              <div className="p-3 bg-white rounded-md shadow-sm">
                <strong>Free cancellation</strong>
                <div className="text-xs">Up to 24 hours before pickup</div>
              </div>
              <div className="p-3 bg-white rounded-md shadow-sm">
                <strong>Roadside assist</strong>
                <div className="text-xs">24/7 support</div>
              </div>
              <div className="p-3 bg-white rounded-md shadow-sm">
                <strong>All inclusive</strong>
                <div className="text-xs">Insurance & taxes</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            {/* Booking card */}
            <div id="book" className="bg-white rounded-2xl shadow-lg p-6">
              {!submitted ? (
                <form onSubmit={submitBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input required name="name" value={booking.name} onChange={handleChange} placeholder="Full name" className="p-3 border rounded-md w-full" />
                    <input required name="email" value={booking.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded-md w-full" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select name="pickup" value={booking.pickup} onChange={handleChange} className="p-3 border rounded-md">
                      <option>Bhubaneswar</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Bengaluru</option>
                    </select>
                    <div className="grid grid-cols-2 gap-2">
                      <input required name="pickupDate" value={booking.pickupDate} onChange={handleChange} type="date" className="p-3 border rounded-md" />
                      <input required name="returnDate" value={booking.returnDate} onChange={handleChange} type="date" className="p-3 border rounded-md" />
                    </div>
                  </div>

                  <div className="text-sm text-slate-600">Select a car from the fleet below. Your selection will be highlighted.</div>

                  <div className="mt-2 grid grid-cols-1 gap-2">
                    {cars.map((c) => (
                      <button type="button" onClick={() => selectCar(c.id)} key={c.id} className={`p-3 text-left rounded-md border flex items-center gap-4 ${booking.carId === c.id ? 'border-emerald-500 ring-2 ring-emerald-100' : ''}`}>
                        <img src={c.img} alt={c.name} className="w-28 h-16 object-cover rounded-md flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{c.name}</div>
                          <div className="text-xs text-slate-500">{c.seats} seats • ₹{c.pricePerDay}/day</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">Secure booking — no hidden fees</div>
                    <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded-md">Confirm booking</button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold">Thanks, {booking.name || 'traveller'}!</h3>
                  <p className="mt-2 text-slate-600">We received your booking request. We'll email confirmation to <strong>{booking.email}</strong>.</p>
                  <div className="mt-4 flex justify-center gap-3">
                    <button onClick={resetForm} className="px-4 py-2 border rounded-md">Make another booking</button>
                    <a href="#contact" className="px-4 py-2 bg-emerald-600 text-white rounded-md">Contact support</a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        <section id="fleet" className="mt-16">
          <h3 className="text-2xl font-bold">Our fleet</h3>
          <p className="mt-2 text-slate-600">Cars for city drives, weekend trips, and family travel.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {cars.map((c) => (
              <article key={c.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img src={c.img} alt={c.name} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{c.name}</h4>
                    <div className="text-sm font-medium">₹{c.pricePerDay}/day</div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Comfortable, well-maintained, insured — perfect for short and long trips.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-slate-500">{c.seats} seats</div>
                    <button onClick={() => selectCar(c.id)} className="text-sm px-3 py-1 border rounded-md">Select</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="mt-16 bg-gradient-to-r from-white to-slate-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold">How WanderWheelz works</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">1. Pick & book</h4>
              <p className="mt-2 text-sm text-slate-600">Choose your car, select dates, and pay securely.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">2. Pickup or delivery</h4>
              <p className="mt-2 text-sm text-slate-600">Collect the car from the pickup location or request delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">3. Drive & return</h4>
              <p className="mt-2 text-sm text-slate-600">Enjoy your trip. Return the car at the agreed time and location.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-16">
          <h3 className="text-2xl font-bold">Pricing & policies</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">Transparent pricing</h4>
              <p className="mt-2 text-sm text-slate-600">Rates shown are per day and include taxes. Additional driver and insurance add-ons available.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">Fuel policy</h4>
              <p className="mt-2 text-sm text-slate-600">Full-to-full is our default — return with same fuel level to avoid refuel charges.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">Cancellation</h4>
              <p className="mt-2 text-sm text-slate-600">Free cancellation up to 24 hours before pickup.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 mb-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 text-slate-600">Questions? Reach our support team or drop a message.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div><strong>Email:</strong> support@wanderwheelz.in</div>
              <div><strong>Phone:</strong> +91 98765 43210</div>
              <div><strong>Address:</strong> Bhubaneswar, Odisha, India</div>
            </div>
          </div>

          <form className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold">Message us</h4>
            <div className="mt-4 grid gap-3">
              <input placeholder="Your name" className="p-3 border rounded-md" />
              <input placeholder="Email" className="p-3 border rounded-md" />
              <textarea placeholder="How can we help?" className="p-3 border rounded-md h-28" />
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-md">Send message</button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} WanderWheelz · wanderwheelz.in</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
