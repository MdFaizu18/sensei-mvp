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
      icon: <Users className="w-5 h-5 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      id: "legal",
      title: "Legal Advisor",
      description: "Provide legal guidance, contract review, and compliance assistance.",
      icon: <Scale className="w-5 h-5 text-purple-600" />,
      color: "bg-purple-50",
    },
    {
      id: "l1",
      title: "L1 Support",
      description: "First-level technical support for common issues and troubleshooting.",
      icon: <Headphones className="w-5 h-5 text-emerald-600" />,
      color: "bg-emerald-50",
    },
    {
      id: "l2",
      title: "L2 Support",
      description: "Advanced technical support for complex issues and escalations.",
      icon: <MessageSquare className="w-5 h-5 text-amber-600" />,
      color: "bg-amber-50",
    },
  ];

  return (
    <div className="w-full h-full bg-white px-4 py-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">Choose Your Assistant</h2>
        <p className="text-sm text-slate-600 mb-6 text-center max-w-xl mx-auto">
          Select the specialized persona that best matches your needs. Each assistant is trained with domain-specific expertise.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="flex flex-col justify-start h-[180px] bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${persona.color} mb-3`}>
                {persona.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{persona.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaGrid;
