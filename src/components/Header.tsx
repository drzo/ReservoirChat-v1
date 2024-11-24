import React from 'react';
import { Brain, Github, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8" />
            <span className="font-bold text-xl">ReservoirChat</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center space-x-2"
              onClick={() => window.open('https://reservoirpy.readthedocs.io/', '_blank')}
            >
              <BookOpen className="w-4 h-4" />
              <span>Docs</span>
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center space-x-2"
              onClick={() => window.open('https://github.com/reservoirpy/reservoirpy', '_blank')}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}