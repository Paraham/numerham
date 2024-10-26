import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NumerologyForm from './components/NumerologyForm';
import NumerologyResult from './components/NumerologyResult';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <NumerologyForm setResult={setResult} />
        {result && <NumerologyResult result={result} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
