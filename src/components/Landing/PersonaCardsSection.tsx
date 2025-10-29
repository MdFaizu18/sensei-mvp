"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Scale, Headphones, MessageSquare, ArrowRight } from "lucide-react"

interface PersonaCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const PersonaCard: React.FC<PersonaCardProps> = ({ icon, title, description, features }) => {
  return (
    <Card className="group relative overflow-hidden border-2 border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300 hover:border-gray-400 flex flex-col h-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-black" />

      {/* Icon Container */}
      <div className="flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black transition-transform duration-300 group-hover:scale-110">
          <div className="text-white">{icon}</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mb-6 text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* Features List */}
      <div className="mb-8 space-y-3 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-black flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button className="w-full bg-black text-white hover:bg-gray-900 transition-colors" size="sm">
        Start Chat
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  )
}

export const PersonaCardsSection: React.FC = () => {
  const personas = [
    {
      icon: <Users className="h-4 w-4" />,
      title: "HR Assistant",
      description: "Get instant answers about HR policies, benefits, payroll, and employee management.",
      features: [
        "Policy guidance ",
        "Compensation info",
        "Onboarding support",
        "Attendance queries",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Legal Advisor",
      description: "Access legal expertise for contracts, compliance, and regulatory questions.",
      features: ["Contract review assistance", "Compliance guidance", "Regulatory updates", "Legal document templates"],
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "L1 Support",
      description: "Quick resolution for common issues and basic troubleshooting support.",
      features: ["Common issue resolution", "Basic troubleshooting", "FAQ and documentation", "Ticket escalation"],
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "L2 Support",
      description: "Advanced technical support for complex issues and specialized assistance.",
      features: ["Advanced troubleshooting", "Technical deep dives", "System optimization", "Custom solutions"],
    },
  ]

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 text-balance">Choose Your Expert Assistant</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Select the specialized AI assistant that best fits your needs. Each persona is trained to provide expert
            guidance in their domain.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 h-[500px]">
          {personas.map((persona, index) => (
            <PersonaCard
              key={index}
              icon={persona.icon}
              title={persona.title}
              description={persona.description}
              features={persona.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonaCardsSection
