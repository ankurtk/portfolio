import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;