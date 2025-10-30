import { Check, CheckCheck } from "lucide-react"

interface UserMessageProps {
  content: string
  timestamp: Date
  isRead?: boolean
  isSending?: boolean
}

export default function UserMessage({ content, timestamp, isRead = true, isSending = false }: UserMessageProps) {
  return (
    <div className="flex justify-end">
      <div className="flex max-w-xs gap-2 lg:max-w-md">
        <div className="rounded-2xl rounded-tr-sm bg-black px-4 py-2.5 text-white shadow-sm">
          <p className="text-sm leading-relaxed">{content}</p>
          <div className="mt-1.5 flex items-center justify-end gap-1">
            <p className="text-xs text-gray-300">
              {timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            {!isSending && (
              <div className="ml-1">
                {isRead ? (
                  <CheckCheck className="h-3.5 w-3.5 text-gray-300" />
                ) : (
                  <Check className="h-3.5 w-3.5 text-gray-300" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
