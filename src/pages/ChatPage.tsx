import React from 'react';
import PersonaGrid from '@/components/Chat/PersonaGrid';
import { Navbar } from '@/components/Landing/Navbar';
import ChatInput from '@/components/Chat/ChatInput';

export const ChatPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Persona Grid Section */}
      <div className="px-6 py-8">
        <PersonaGrid />
      </div>

      {/* Chat Section Placeholder */}
      <div className="px-6 py-8">
        {/* TODO: Add ChatBox component here */}
        <ChatInput/>
      </div>

      {/* Uploaded Files Section Placeholder */}
      <div className="px-6 py-8">
        {/* TODO: Add UploadedFilesTable or FileHistory component here */}
      </div>
    </div>
  );
};
