"use client"

import type React from "react"
import { useState, useRef } from "react"
import {
  ArrowUpCircle,
  Paperclip,
  ChevronDown,
  X,
  Users,
  Scale,
  Headphones,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ChatInputProps {
  onSendMessage?: (message: string, persona: string, file?: File) => void
  onAttachDocument?: (file: File) => void
}

const personas = [
  {
    id: "hr",
    label: "HR",
    description: "Human Resources",
    bg: "bg-blue-50",
    icon: <Users className="w-5 h-5 text-blue-600" />,
  },
  {
    id: "legal",
    label: "Legal",
    description: "Legal Advisor",
    bg: "bg-purple-50",
    icon: <Scale className="w-5 h-5 text-purple-600" />,
  },
  {
    id: "l1",
    label: "L1",
    description: "Level 1 Support",
    bg: "bg-emerald-50",
    icon: <Headphones className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: "l2",
    label: "L2",
    description: "Level 2 Support",
    bg: "bg-amber-50",
    icon: <MessageSquare className="w-5 h-5 text-amber-600" />,
  },
]

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onAttachDocument }) => {
  const [message, setMessage] = useState("")
  const [selectedPersona, setSelectedPersona] = useState(personas[0])
  const [attachedFile, setAttachedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSend = () => {
    if (message.trim() || attachedFile) {
      onSendMessage?.(message, selectedPersona.id, attachedFile || undefined)
      setMessage("")
      setAttachedFile(null)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleAttachClick = () => fileInputRef.current?.click()

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAttachedFile(file)
      onAttachDocument?.(file)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  return (
    <div className="w-full bg-white border-t border-gray-200 px-6 py-4">
      {/* Unified Input + Controls Container */}
      <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition">
        {/* Input Field */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message…"
          className="w-full bg-transparent text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none resize-none leading-normal"
          rows={1}
          style={{ minHeight: "44px", maxHeight: "120px" }}
        />

        {/* File Preview */}
        {attachedFile && (
          <div className="mt-2 flex items-center justify-between bg-gray-100 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700">
            <span className="truncate">{attachedFile.name}</span>
            <button
              onClick={() => setAttachedFile(null)}
              className="text-gray-400 hover:text-red-500 transition"
              title="Remove file"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Control Bar */}
        <div className="flex items-center justify-between pt-2">
          {/* Left Controls */}
          <div className="flex items-center gap-3">
            {/* Attach Button with circular background */}
            <button
              onClick={handleAttachClick}
              className="p-2 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-500 hover:text-blue-600 transition"
              title="Attach document"
            >
              <Paperclip className="w-5 h-5" />
            </button>

            {/* Persona Dropdown with margin and border */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-2 py-1 rounded-md border border-gray-200 bg-white hover:bg-gray-100 transition">
                  <div className={`w-6 h-6 rounded-full ${selectedPersona.bg} flex items-center justify-center`}>
                    {selectedPersona.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-800">{selectedPersona.label}</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {personas.map((persona) => (
                  <DropdownMenuItem
                    key={persona.id}
                    onClick={() => setSelectedPersona(persona)}
                    className="cursor-pointer gap-3 py-3 hover:bg-gray-50"
                  >
                    <div className={`w-8 h-8 rounded-full ${persona.bg} flex items-center justify-center`}>
                      {persona.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">{persona.label}</span>
                      <span className="text-xs text-gray-500">{persona.description}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Control */}
          <button
            onClick={handleSend}
            disabled={!message.trim() && !attachedFile}
            className="text-blue-600 hover:text-purple-600 transition disabled:opacity-30"
            title="Send message"
          >
            <ArrowUpCircle className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        accept=".pdf,.doc,.docx,.txt,.xlsx,.xls,.png,.jpg"
      />
    </div>
  )
}

export default ChatInput
