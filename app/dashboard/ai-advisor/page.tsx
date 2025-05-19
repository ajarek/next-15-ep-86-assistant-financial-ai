'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const AiAdvisor = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: question }),
      });
      
      if (!response.ok) {
        throw new Error('Błąd podczas komunikacji z API');
      }
      
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Błąd:', error);
      setAnswer('Przepraszamy, wystąpił błąd podczas przetwarzania twojego zapytania.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=' min-h-screen flex items-center justify-center'>
    <div className="w-full p-6 max-w-2xl mx-auto  rounded-xl shadow-md border-2 border-primary">
      <h1 className="text-2xl font-bold mb-4">Doradca Finansowy AI</h1>
      
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col">
        <div className="mb-4">
          <label htmlFor="question" className="block text-sm font-medium  mb-2">
            Zadaj pytanie:
          </label>
          <Input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full "
            placeholder="Np. Jak utworzyć fundusz inwestycyjny?"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={loading}
          className="w-fit self-end hover:bg-primary/80 disabled:bg-primary/50 disabled:cursor-not-allowed  transition-all duration-300"
        >
          {loading ? 'Ładowanie...' : 'Zapytaj'}
        </Button>
      </form>
      
      {answer && (
        <div className=" p-4  rounded ">
          <h2 className="font-semibold mb-2 ">Odpowiedź:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default AiAdvisor;