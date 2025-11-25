'use client'

import { useRef, useEffect } from 'react'
import { Rocket, Brain, Globe, Zap } from 'lucide-react'
import { useScroll, cancelFrame, frame } from 'motion/react'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import ParallaxCardEffect from '@/components/effects/ParallaxCardEffect'
import { cn } from '@/lib/utils'

export default function AboutSection() {
  const lenisRef = useRef<LenisRef>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Security',
      description:
        'Advanced AI algorithms enable real-time threat detection and autonomous security responses.',
    },
    {
      icon: Rocket,
      title: 'Rapid Response',
      description: 'Lightning-fast deployment and response times for critical security situations.',
    },
    {
      icon: Globe,
      title: 'Global Protection',
      description:
        'Comprehensive security solutions for facilities, borders, and critical infrastructure worldwide.',
    },
    {
      icon: Zap,
      title: 'Always Ready',
      description: 'Continuous monitoring and instant activation for 24/7 security coverage.',
    },
  ]

  const ParallaxFeatureCard = ({ item, id }: { item: typeof features[0]; id: number }) => {
    const targetScale = 1 - (features.length - id) * 0.05

    return (
      <ParallaxCardEffect
        id={id}
        progress={scrollYProgress}
        range={[id * 0.25, 1]}
        targetScale={targetScale}
        className="relative flex flex-col items-center justify-center rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl bg-white/5"
      >
        <div className="space-y-6 text-center px-8 py-12 md:px-16 md:py-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 transition-transform duration-300 hover:scale-110">
              <item.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {item.title}
          </h3>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {item.description}
          </p>
        </div>
      </ParallaxCardEffect>
    )
  }

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <section id="about" className="relative overflow-hidden bg-black">
        {/* Vignette effect matching hero */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 pointer-events-none" />

        <div ref={containerRef} className="relative">
          {/* Spacer at top */}
          <div className="h-screen" />

          {/* Parallax feature cards - they will stack */}
          <div className="mx-auto max-w-4xl px-4">
            {features.map((feature, i) => (
              <ParallaxFeatureCard item={feature} key={i} id={i} />
            ))}
          </div>

          {/* Spacer at bottom */}
          <div className="h-screen" />
        </div>
      </section>
    </>
  )
}
