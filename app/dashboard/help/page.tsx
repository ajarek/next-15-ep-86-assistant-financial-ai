'use client' // Potrzebne dla obsługi zdarzeń formularza

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const Help = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Tutaj logika wysyłania formularza
    // Na przykład, zebranie danych i wysłanie do API
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Dane formularza:", data);
    alert("Wiadomość została wysłana! (symulacja)");
    event.currentTarget.reset(); // Resetowanie formularza po wysłaniu
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Pomoc i wsparcie</h1>
      <p>Witaj w sekcji pomocy. Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania oraz informacje kontaktowe do naszego wsparcia.</p>

      <div className="w-full mt-8">
        <h2 className="text-xl font-semibold mb-4">Skontaktuj się z nami</h2>
        <form onSubmit={handleSubmit} className="space-y-4 border-2 border-primary p-6 rounded-lg">
          <div>
            <Label className='pb-2' htmlFor="name">Imię i nazwisko</Label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <Label className='pb-2' htmlFor="email">Adres e-mail</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <Label className='pb-2' htmlFor="message">Wiadomość</Label>
            <Textarea id="message" name="message" rows={8} required />
          </div>
          <div className='flex justify-end'>

          <Button type="submit">Wyślij wiadomość</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Help