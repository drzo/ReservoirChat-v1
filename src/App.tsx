import React from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import ReservoirDemo from './components/ReservoirDemo';
import UserGuide from './components/UserGuide';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ChatInterface />
          <ReservoirDemo />
          <UserGuide />
        </div>
      </main>
    </div>
  );
}