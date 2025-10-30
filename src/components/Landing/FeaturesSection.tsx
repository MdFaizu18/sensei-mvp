import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BrainCircuit,
  ShieldCheck,
  FileText,
  Bot,
  Layers,
  History,
} from "lucide-react";

const features = [
  {
    title: "Context-Aware Responses",
    description: "Combines retrieval and generation to deliver accurate, document-grounded answers.",
    icon: <BrainCircuit className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Persona-Driven Chat",
    description: "Switch between expert personas like Legal Advisor, Analyst, or HR Assistant.",
    icon: <Bot className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Secure File Uploads",
    description: "Attach PDFs, DOCX, or TXT files and query them safely.",
    icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Model Switching",
    description: "Choose GPT-4, Claude, or other LLMs to match your task and tone.",
    icon: <Layers className="h-6 w-6 text-yellow-600" />,
  },
  {
    title: "Enterprise-Grade UI/UX",
    description: "Clean layout, responsive grids, and hover states built for business users.",
    icon: <FileText className="h-6 w-6 text-gray-600" />,
  },
  {
    title: "File History & Re-query",
    description: "Access previously uploaded files, preview them, and re-query with new prompts.",
    icon: <History className="h-6 w-6 text-red-600" />,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Aesthetic blurred background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-[500px] w-[500px] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="text-sm mb-2">Features</Badge>
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Built for Enterprise-Grade AI Chat
        </h2>
        <p className="mt-3 text-gray-600 text-base max-w-xl mx-auto">
          Everything you need to deliver secure, persona-driven, document-aware conversations.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-white hover:shadow-xl hover:ring-1 hover:ring-blue-200 transition-all duration-300"
          >
            <CardHeader className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-100 p-2">
                {feature.icon}
              </div>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
