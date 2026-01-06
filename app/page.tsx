'use client'
import Hero from "./components/hero";
import Navbar from "./components/navbar";
export default function Home() {
  return (
<div className="flex min-h-screen flex-col font-sans bg-white">
      <Navbar/>
      <Hero/>
    </div>
  );
}
