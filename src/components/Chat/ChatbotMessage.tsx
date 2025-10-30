"use client"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ChatbotMessageProps {
  content: string
  timestamp: Date
  isLoading?: boolean
  personaName?: string
}

export default function ChatbotMessage({
  content,
  timestamp,
  isLoading = false,
  personaName = "Assistant",
}: ChatbotMessageProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex justify-start">
      <div className="flex max-w-xs gap-3 lg:max-w-md">
        {/* Avatar */}
        <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
          <span className="text-xs font-semibold text-gray-700">{personaName.charAt(0).toUpperCase()}</span>
        </div>

        {/* Message Content */}
        <div className="flex flex-col gap-2">
          <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-2.5 text-gray-900 shadow-sm">
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }} />
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            ) : (
              <p className="text-sm leading-relaxed">{content}</p>
            )}
            <p className="mt-1.5 text-xs text-gray-500">
              {timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          {/* Action Buttons */}
          {!isLoading && (
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 gap-1.5 px-2 text-xs text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
