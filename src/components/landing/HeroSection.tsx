// components/HeroSection.tsx
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 opacity-30 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Supercharge Your Productivity
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          The all-in-one platform that helps you build, collaborate, and scale — beautifully and effortlessly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="text-lg px-8 py-5 rounded-xl shadow-xl bg-black text-white hover:bg-gray-900 transition-all duration-300">
            Get Started
          </Button>
          <Button variant="outline" className="text-lg px-8 py-5 rounded-xl border-gray-300 hover:border-gray-500 hover:text-gray-900 transition-all duration-300">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
