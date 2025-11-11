'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Satellite, Zap, Shield, Cpu, ArrowRight } from 'lucide-react'


export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(0)

  const products = [
    {
      name: 'Guardian Pro',
      type: 'explorer',
      tagline: 'Perimeter Security',
      description: 'Advanced autonomous security drone designed for large-scale perimeter monitoring and threat detection.',
      features: ['Thermal Imaging', 'Facial Recognition', 'Intrusion Detection', 'Auto-Patrol Routes'],
      specs: { range: '50 km', battery: '8 hours', payload: '15 kg', speed: '80 km/h' },
      icon: Satellite,
    },
    {
      name: 'Sentinel Max',
      type: 'guardian',
      tagline: 'Heavy Security Unit',
      description: 'Heavy-duty surveillance and security drone with advanced threat detection and response capabilities.',
      features: ['Threat Neutralization', 'Real-time Analysis', 'Weather Resistant', 'Stealth Mode'],
      specs: { range: '25 km', battery: '12 hours', payload: '50 kg', speed: '120 km/h' },
      icon: Shield,
    },
    {
      name: 'Stealth Scout',
      type: 'scout',
      tagline: 'Covert Surveillance',
      description: 'Compact reconnaissance drone with swarm intelligence capabilities for discrete security monitoring.',
      features: ['Swarm Coordination', 'Silent Operation', 'Night Vision', 'Adaptive Camouflage'],
      specs: { range: '15 km', battery: '6 hours', payload: '2 kg', speed: '60 km/h' },
      icon: Zap,
    }
  ]

  const Icon = products[selectedProduct].icon

  return (
    <section id="products" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-gray-900/10 via-transparent to-gray-900/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-glow">
            <span className="text-white tracking-wider">OUR FLEET</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our range of autonomous security drones, each engineered for specific security applications
            and equipped with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="h-96 hologram rounded-2xl relative overflow-hidden">
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 mb-6">
              <Icon className="h-5 w-5 text-white" />
              <span className="text-sm font-medium">{products[selectedProduct].tagline}</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-wide text-glow">
              {products[selectedProduct].name}
            </h3>

            <p className="text-white/80 mb-6">{products[selectedProduct].description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(products[selectedProduct].specs).map(([key, value]) => (
                <div key={key} className="hologram rounded-lg p-3">
                  <div className="text-sm text-white/60 uppercase tracking-wider">{key}</div>
                  <div className="text-lg font-semibold text-white">{value}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {products[selectedProduct].features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-white" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-white text-black hover:bg-gray-200 group">
              <span className="uppercase tracking-wider">Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const ProductIcon = product.icon
            return (
              <Card
                key={product.name}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hologram ${selectedProduct === index ? 'border-white' : 'hover:border-white/50'
                  }`}
                onClick={() => setSelectedProduct(index)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white">
                      <ProductIcon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-white uppercase tracking-wide">{product.name}</CardTitle>
                      <CardDescription>{product.tagline}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">{product.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
