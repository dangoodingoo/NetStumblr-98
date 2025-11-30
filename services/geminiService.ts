import { GoogleGenAI } from "@google/genai";

let genAI: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getEraContext = async (year: string, siteName: string): Promise<string> => {
  if (!genAI) return "API Key not configured.";

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a short, 2-sentence witty or nostalgic fact about internet culture or world events specifically in the year ${year}. Mention the website "${siteName}" if relevant to the vibe of that year. Keep it vaporwave/retro style.`,
    });
    
    return response.text || "Data corrupted...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection to mainframe lost...";
  }
};
