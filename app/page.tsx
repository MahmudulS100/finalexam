"use client";

import React, { useState } from "react";
import {
  Truck,
  Package,
  MapPin,
  Calendar,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Menu,
  X,
  ShieldCheck,
  Box
} from "lucide-react";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MetroMoversHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-purple-500/30">
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              MetroMovers
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About Us</a>
            <a href="#reviews" className="hover:text-purple-400 transition-colors">Reviews</a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0a0a0a] p-4 flex flex-col gap-4">
            <a href="#services" className="text-slate-400 hover:text-purple-400">Services</a>
            <a href="#about" className="text-slate-400 hover:text-purple-400">About Us</a>
            <a href="#reviews" className="text-slate-400 hover:text-purple-400">Reviews</a>
            <Button className="w-full bg-purple-600">Get a Quote</Button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium">
              <Star className="w-4 h-4 fill-purple-300" /> #1 Rated Moving Team
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Moving Made <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
                Electric.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
              Experience the smoothest move of your life. We handle the heavy lifting with precision, speed, and a touch of modern efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 text-lg rounded-full">
                <Phone className="mr-2 w-4 h-4" /> (555) 123-4567
              </Button>
            </div>
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-purple-400" /> Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-purple-400" /> Local & Long Distance
              </div>
            </div>
          </div>

          {/* Quick Quote Form Card */}
          <Card className="bg-slate-900/50 backdrop-blur-sm border-white/10 shadow-2xl relative z-10">
            <CardHeader>
              <CardTitle className="text-white">Get a Free Estimate</CardTitle>
              <CardDescription className="text-slate-400">Fill out the form below and we'll get back to you within 15 minutes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">From Zip</Label>
                  <Input placeholder="10001" className="bg-slate-950 border-slate-800 text-white focus:ring-purple-500" />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">To Zip</Label>
                  <Input placeholder="90210" className="bg-slate-950 border-slate-800 text-white focus:ring-purple-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-slate-300">Move Date</Label>
                <div className="relative">
                  <Input type="date" className="bg-slate-950 border-slate-800 text-white focus:ring-purple-500 pl-10" />
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-slate-300">Home Size</Label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-800 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Studio / 1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3+ Bedrooms</option>
                  <option>Commercial Office</option>
                </select>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                Calculate Cost <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-slate-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We offer comprehensive moving solutions tailored to your specific needs, whether you're moving down the street or across the country.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Local Moving", desc: "Fast and reliable local moves within the metro area. We know the streets like the back of our hand." },
              { icon: MapPin, title: "Long Distance", desc: "Cross-country hauling with GPS tracking and guaranteed delivery windows." },
              { icon: Package, title: "Packing Services", desc: "Full-service packing using high-quality materials to ensure your valuables stay safe." },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-900 hover:-translate-y-1">
                <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <service.icon className="w-7 h-7 text-purple-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Why MetroMovers?
              </h2>
              <div className="space-y-6">
                {[
                  "Transparent Pricing - No hidden fees, ever.",
                  "Professional Crew - Background checked & trained.",
                  "Modern Fleet - Clean, padded trucks.",
                  "On-Time Guarantee - We pay you if we're late."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-lg text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-950">
                Read Our Story
              </Button>
            </div>
            
            {/* Abstract Graphic Representation */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-900/50 to-slate-900 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <Box className="w-32 h-32 text-purple-500/50 relative z-10" />
                
                {/* Floating Stats */}
                <Card className="absolute top-10 right-10 bg-slate-950 border-purple-500/30 w-40 animate-bounce delay-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white">10k+</div>
                    <div className="text-xs text-slate-400">Moves Completed</div>
                  </CardContent>
                </Card>
                
                <Card className="absolute bottom-10 left-10 bg-slate-950 border-purple-500/30 w-40 animate-bounce">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white">4.9/5</div>
                    <div className="text-xs text-slate-400">Customer Rating</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Footer --- */}
      <footer className="py-12 border-t border-white/10 bg-slate-950 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to make your move?</h2>
            <p className="text-slate-400">Join thousands of happy customers who trusted MetroMovers.</p>
            <div className="flex justify-center gap-4 pt-4">
               <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-200 font-bold">
                 Get Started
               </Button>
            </div>
          </div>
          <div className="mt-12 text-slate-600 text-sm">
            © {new Date().getFullYear()} Metro Movers Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}