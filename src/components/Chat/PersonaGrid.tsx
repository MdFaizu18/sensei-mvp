import type React from "react";
import {
  Users,
  Scale,
  Headphones,
  MessageSquare,
} from "lucide-react";

interface PersonaCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const PersonaGrid: React.FC = () => {
  const personas: PersonaCard[] = [
    {
      id: "hr",
      title: "HR Assistant",
      description: "Handle employee queries, benefits, policies, and HR operations with expertise.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      id: "legal",
      title: "Legal Advisor",
      description: "Provide legal guidance, contract review, and compliance assistance.",
      icon: <Scale className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50",
    },
    {
      id: "l1",
      title: "L1 Support",
      description: "First-level technical support for common issues and troubleshooting.",
      icon: <Headphones className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50",
    },
    {
      id: "l2",
      title: "L2 Support",
      description: "Advanced technical support for complex issues and escalations.",
      icon: <MessageSquare className="w-6 h-6 text-amber-600" />,
      color: "bg-amber-50",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Assistant</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl">
          Select the specialized persona that best matches your needs. Each assistant is trained with domain-specific expertise.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="flex flex-col justify-start h-[240px] bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${persona.color} mb-4`}>
                {persona.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{persona.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaGrid;
