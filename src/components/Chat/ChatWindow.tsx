"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import UserMessage from "./UserMessage"
import ChatbotMessage from "./ChatbotMessage"
import ChatInput from "./ChatInput"
import PersonaGrid from "./PersonaGrid"


interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatWindowProps {
  chatId?: string
  messages: Message[]
  onSendMessage: (content: string) => void
  isLoading?: boolean
}

export default function ChatWindow({ chatId, messages, onSendMessage, isLoading = false }: ChatWindowProps) {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input)
      setInput("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex h-screen flex-1 flex-col bg-white">

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages.length === 0 ? (<div className="scale-80 max-w-4xl w-full"><PersonaGrid/></div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === "user" ? (
                  <UserMessage content={message.content} timestamp={message.timestamp} />
                ) : (
                  <ChatbotMessage content={message.content} timestamp={message.timestamp} personaName="Assistant" />
                )}
              </div>
            ))}
            {isLoading && <ChatbotMessage content="" timestamp={new Date()} isLoading={true} personaName="Assistant" />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
        <div className="p-4">
      {/* <UserMessage
        content="User bubble check"
        timestamp={new Date()}
        isRead={true}
        isSending={false}
      />
      <div className="p-4">
      <ChatbotMessage
        content="Chat bubble check"
        timestamp={new Date()}
        isLoading={false}
        personaName="Alex"
      />
    </div> */}
    </div>
      <div>
        <ChatInput/>
      </div>
    </div>
  )
}
