"use client"

import { useState } from "react"
import {
  Menu,
  X,
  MessageSquare,
  Settings,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User,
  HelpCircle,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const navLinks = [
    { label: "Home", href: "#", icon: null },
    { label: "Chat", href: "#", icon: MessageSquare },
    { label: "Personas", href: "#", icon: Sparkles },
    { label: "Files", href: "#", icon: null },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-slate-50 to-white backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" strokeWidth={2.5} />
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight leading-none font-sans">Sensei 2.O</h1>
              <p className="text-xs text-gray-500 font-medium mt-0.5">AI Chatbot Platform</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-700 rounded-lg transition-all duration-200 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon && <link.icon className="w-4 h-4 text-gray-500 group-hover:text-indigo-700 transition-colors duration-200" />}
                  {link.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-gray-700 hover:text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-all duration-200"
                >
                  {link.icon && <link.icon className="w-5 h-5 text-gray-500 group-hover:text-indigo-700 transition-colors duration-200" />}
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-200 mt-3">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-gray-700 hover:text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-all duration-200"
                >
                  <User className="w-5 h-5 text-gray-500 group-hover:text-indigo-700 transition-colors duration-200" />
                  Profile
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-base font-semibold text-gray-700 hover:text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-lg transition-all duration-200"
                >
                  <Settings className="w-5 h-5 text-gray-500 group-hover:text-indigo-700 transition-colors duration-200" />
                  Settings
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
