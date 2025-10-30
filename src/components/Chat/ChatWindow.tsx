"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import UserMessage from "./UserMessage"
import ChatbotMessage from "./ChatbotMessage"


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
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-4 h-16 w-16 rounded-full bg-gray-100 mx-auto flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">No messages yet</h3>
              <p className="text-sm text-gray-500">Start typing to begin your conversation</p>
            </div>
          </div>
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
      <UserMessage
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
    </div>
    </div>
      {/* Input Area */}
      <div className="border-t border-gray-200 px-6 py-4">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1 resize-none rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            rows={3}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-black text-white hover:bg-gray-900 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
