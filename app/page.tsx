
'use client'
import Hero from "./components/hero";
import Navigation from "./components/navbar";


export default function Home() {
  return (
    <div  className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">

      <Navigation />

      <Hero />

    
     
    </div>
  );
}
