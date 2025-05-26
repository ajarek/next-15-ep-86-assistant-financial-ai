import { GoogleGenAI } from '@google/genai'

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    if (!process.env.GOOGLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Klucz API nie został skonfigurowany' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY })

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: text,
    })

    return new Response(JSON.stringify({ answer: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Błąd API Gemini:', error)

    return new Response(
      JSON.stringify({ error: 'Błąd podczas przetwarzania zapytania' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
