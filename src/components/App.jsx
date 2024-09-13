import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import InputForm from './InputForm';
import Results from './Results';
import Footer from './Footer';
import { calculateROI } from '../utils/calculations';

function App() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = (formData) => {
    try {
      const calculatedResults = calculateROI(formData);
      if (calculatedResults.error) {
        setError(calculatedResults.error);
        setResults(null);
      } else {
        setResults(calculatedResults);
        setError(null);
      }
    } catch (err) {
      console.error('Calculation error:', err);
      setError(`An error occurred during calculation: ${err.message}`);
      setResults(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InputForm onCalculate={handleCalculate} />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {results && <Results results={results} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;