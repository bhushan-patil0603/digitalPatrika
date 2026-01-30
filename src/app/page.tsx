"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LuxuryWeddingWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO */
      gsap.from(
        [
          ".hero-heart",
          ".hero-title",
          ".hero-divider",
          ".hero-subtitle",
          ".hero-details",
        ],
        {
          opacity: 0,
          y: 20,
          duration: 1.4,
          ease: "power2.out",
          stagger: 0.15,
        },
      );

      /* STORY */
      gsap.from(".story-animate", {
        opacity: 0,
        y: 24,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#story",
          start: "top 75%",
        },
      });

      /* EVENT */
      gsap.from(".event-card", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#details",
          start: "top 70%",
        },
      });

      /* GALLERY */
      gsap.utils.toArray(".gallery-item").forEach((item) => {
        gsap.from(item as Element, {
          opacity: 0,
          y: 16,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item as Element,
            start: "top 85%",
          },
        });
      });

      /* RSVP */
      gsap.from(".rsvp-animate", {
        opacity: 0,
        y: 20,
        duration: 1.1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#rsvp",
          start: "top 75%",
        },
      });

      /* MOBILE */
      ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
          gsap.set(
            [".story-animate", ".event-card", ".gallery-item", ".rsvp-animate"],
            { clearProps: "transform" },
          );
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-serif bg-[#F5F1ED] text-[#3D3530] overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F5F1ED]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between">
          <div className="text-3xl tracking-wider">R & A</div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO (image background) */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-6"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/sample-1.webp)" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white">
          <Heart className="hero-heart mx-auto mb-6 text-[#D4BC9F]" size={40} />
          <h1 className="hero-title text-6xl md:text-8xl mb-6">
            Rutuja & Abhijeet
          </h1>
          <div className="hero-divider w-24 h-px bg-[#D4BC9F] mx-auto mb-6" />
          <p className="hero-subtitle uppercase tracking-widest mb-8">
            Together with their families
          </p>
          <div className="hero-details text-lg text-white/80">
            <p>Saturday, June 27, 2026</p>
            <p>Napa Valley, California</p>
          </div>
          <button onClick={() => scrollToSection("story")} className="mt-12">
            <ChevronDown className="mx-auto text-[#D4BC9F]" />
          </button>
        </div>
      </section>

      {/* STORY (floating images) */}
      <section id="story" className="relative py-32 px-6">
        <img
          src="/sample-2.webp"
          className="absolute top-10 left-10 w-48 opacity-10"
        />
        <img
          src="/sample-3.webp"
          className="absolute bottom-10 right-10 w-56 opacity-10"
        />

        <div className="max-w-3xl mx-auto text-center space-y-8 relative">
          <h2 className="story-animate text-5xl">Our Story</h2>
          <p className="story-animate text-[#6B5E54]">
            From a quiet afternoon in Paris to forever.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {["2019", "2023", "2026"].map((y) => (
              <div key={y} className="story-animate text-[#D4BC9F] text-4xl">
                {y}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT (image cards) */}
      <section id="details" className="py-32 px-6">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            { t: "Ceremony", img: "sample-4.webp" },
            { t: "Reception", img: "sample-5.webp" },
          ].map((item) => (
            <div
              key={item.t}
              className="event-card relative overflow-hidden p-12 text-white"
              style={{
                backgroundImage: `url(/${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative">
                <h3 className="text-3xl mb-4">{item.t}</h3>
                <p className="text-white/80">Details here</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY (9 images) */}
      <section id="gallery" className="py-32 px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="gallery-item aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(/sample-${i}.webp)` }}
            />
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-32 px-6">
        <div className="max-w-xl mx-auto bg-white/60 p-12 backdrop-blur-sm">
          <h2 className="rsvp-animate text-4xl text-center mb-6">RSVP</h2>
          <input
            className="rsvp-animate w-full p-3 mb-4"
            placeholder="Your name"
          />
          <button className="rsvp-animate w-full bg-[#3D3530] text-white py-4">
            Submit
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center bg-[#3D3530] text-[#D4BC9F]">
        <Heart className="mx-auto mb-4" />
        <p>Sophia & Alexander • 2026</p>
      </footer>
    </div>
  );
}
