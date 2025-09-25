import { useState } from 'react';
import WhoIAm from './pages/WhoIAm';
import WhatIDo from './pages/WhatIDo';
import HowIWork from './pages/HowIWork';
import ReachMe from './pages/ReachMe';

export default function App() {
  const [page, setPage] = useState('who');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="bg-white shadow p-4 flex justify-center space-x-6 sticky top-0 z-10">
        <button onClick={() => setPage('who')} className={`px-3 py-2 font-medium rounded ${page === 'who' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}>
          Who I Am
        </button>
        <button onClick={() => setPage('what')} className={`px-3 py-2 font-medium rounded ${page === 'what' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}>
          What I Do
        </button>
        <button onClick={() => setPage('how')} className={`px-3 py-2 font-medium rounded ${page === 'how' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}>
          How I Work
        </button>
        <button onClick={() => setPage('reach')} className={`px-3 py-2 font-medium rounded ${page === 'reach' ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}>
          Reach Me
        </button>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        {page === 'who' && <WhoIAm />}
        {page === 'what' && <WhatIDo />}
        {page === 'how' && <HowIWork />}
        {page === 'reach' && <ReachMe />}
      </main>
    </div>
  );
}
