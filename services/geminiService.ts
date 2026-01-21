
import { GoogleGenAI, Type } from "@google/genai";

// Updated initialization to follow @google/genai guidelines strictly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBio = async (keywords: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, punchy, and engaging "Link in Bio" profile description (max 150 chars) for a person with these keywords: ${keywords}. Use emojis.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });
    // Used .text property directly as per guidelines
    return response.text || "Creator & Innovator ✨";
  } catch (error) {
    console.error("Error generating bio:", error);
    return "Passion for creation and sharing knowledge.";
  }
};
