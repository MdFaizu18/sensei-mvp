"use client"

import { useState } from "react"
import { Plus, Trash2, MessageSquare, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ChatSession {
  id: string
  title: string
  timestamp: Date
}

interface ChatSidebarProps {
  onNewChat: () => void
  onSelectChat: (id: string) => void
  onDeleteChat: (id: string) => void
  selectedChatId?: string
  sessions: ChatSession[]
  currentPage?: "chat" | "upload"
  onPageChange?: (page: "chat" | "upload") => void
}

export default function ChatSidebar({
  onNewChat,
  onSelectChat,
  onDeleteChat,
  selectedChatId,
  sessions,
  currentPage = "chat",
  onPageChange,
}: ChatSidebarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">


      {/* Navigation */}
      <div className="mt-15 border-b border-gray-200 p-4 space-y-2">
        <Button
          onClick={() => onPageChange?.("chat")}
          variant={currentPage === "chat" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            currentPage === "chat" ? "bg-black text-white hover:bg-gray-900" : "text-gray-700 hover:bg-gray-100",
          )}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat Page
        </Button>
        <Button
          onClick={() => onPageChange?.("upload")}
          variant={currentPage === "upload" ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            currentPage === "upload" ? "bg-black text-white hover:bg-gray-900" : "text-gray-700 hover:bg-gray-100",
          )}
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload Page
        </Button>
      </div>

    </div>
  )
}
