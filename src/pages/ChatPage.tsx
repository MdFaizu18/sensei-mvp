"use client"

import ChatSidebar from "@/components/Chat/ChatSidebar"
import ChatWindow from "@/components/Chat/ChatWindow"
import { Navbar } from "@/components/Landing/Navbar"
import { useState } from "react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatSession {
  id: string
  title: string
  timestamp: Date
  messages: Message[]
}

export default function ChatPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const currentSession = sessions.find((s) => s.id === selectedChatId)

  const handleNewChat = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: "New Chat",
      timestamp: new Date(),
      messages: [],
    }
    setSessions([newSession, ...sessions])
    setSelectedChatId(newSession.id)
  }

  const handleSelectChat = (id: string) => {
    setSelectedChatId(id)
  }

  const handleDeleteChat = (id: string) => {
    setSessions(sessions.filter((s) => s.id !== id))
    if (selectedChatId === id) {
      setSelectedChatId(sessions[0]?.id)
    }
  }

  const handleSendMessage = async (content: string) => {
    if (!selectedChatId) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setSessions(sessions.map((s) => (s.id === selectedChatId ? { ...s, messages: [...s.messages, userMessage] } : s)))

    setIsLoading(true)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "This is a simulated response. Connect your AI backend here.",
        timestamp: new Date(),
      }

      setSessions(
        sessions.map((s) => (s.id === selectedChatId ? { ...s, messages: [...s.messages, assistantMessage] } : s)),
      )
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Chat layout fills remaining space */}
      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar
          onNewChat={handleNewChat}
          onSelectChat={handleSelectChat}
          onDeleteChat={handleDeleteChat}
          selectedChatId={selectedChatId}
          sessions={sessions}
        />
        <div className="flex-1 h-full overflow-y-auto">
          <ChatWindow
            chatId={selectedChatId}
            messages={currentSession?.messages || []}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  )
}
