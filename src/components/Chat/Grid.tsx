import type React from "react"
import { Users, Scale, Headphones, MessageSquare, ArrowRight, Sparkles } from "lucide-react"

interface PersonaCard {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  gradient: string
  stats: string
}

const PersonaGrid: React.FC = () => {
  const personas: PersonaCard[] = [
    {
      id: "hr",
      title: "HR Assistant",
      description: "Handle employee queries, benefits, policies, and HR operations with expertise",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-50 to-blue-100",
      gradient: "from-blue-500 to-blue-600",
      stats: "2,450+ interactions",
    },
    {
      id: "legal",
      title: "Legal Advisor",
      description: "Provide legal guidance, contract review, and compliance assistance",
      icon: <Scale className="w-8 h-8" />,
      color: "from-purple-50 to-purple-100",
      gradient: "from-purple-500 to-purple-600",
      stats: "1,890+ consultations",
    },
    {
      id: "l1",
      title: "L1 Support",
      description: "First-level technical support for common issues and troubleshooting",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-emerald-50 to-emerald-100",
      gradient: "from-emerald-500 to-emerald-600",
      stats: "5,230+ resolved",
    },
    {
      id: "l2",
      title: "L2 Support",
      description: "Advanced technical support for complex issues and escalations",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-amber-50 to-amber-100",
      gradient: "from-amber-500 to-amber-600",
      stats: "890+ escalations",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            PERSONA SELECTION
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Choose Your Assistant</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Select the specialized persona that best matches your needs. Each assistant is trained with domain-specific
          expertise.
        </p>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => (
            <div key={persona.id} className="group relative h-full">
              {/* Card Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              {/* Main Card */}
              <div className="relative h-full bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-2xl overflow-hidden">
                {/* Decorative Background */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${persona.color} rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl -mr-16 -mt-16`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`inline-flex p-3 bg-gradient-to-br ${persona.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`text-transparent bg-clip-text bg-gradient-to-br ${persona.gradient}`}>
                      {persona.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-950 transition-colors">
                    {persona.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {persona.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{persona.stats}</span>
                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto mt-16 p-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl border border-slate-200">
        <p className="text-sm text-slate-600 text-center">
          💡 <span className="font-semibold text-slate-900">Pro Tip:</span> You can switch between personas at any time
          during your conversation to get different perspectives and expertise.
        </p>
      </div>
    </div>
  )
}

export default PersonaGrid
