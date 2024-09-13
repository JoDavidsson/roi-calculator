import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import InputForm from './InputForm';
import Results from './Results';
import Footer from './Footer';
import { calculateROI } from '../utils/calculations';

function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (formData) => {
    const calculatedResults = calculateROI(formData);
    setResults(calculatedResults);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InputForm onCalculate={handleCalculate} />
        {results && <Results results={results} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;