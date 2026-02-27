
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const getGeminiResponse = async (userMessage: string, history: any[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Process history into the format expected by Gemini API (if needed)
    // For simplicity, we just send the message, but a real chat uses sendMessageStream or history
    const response = await chat.sendMessage({ message: userMessage });
    
    return {
      text: response.text || "Lo siento, tuve un problema conectando con tu abundancia. Intenta de nuevo.",
      groundingMetadata: response.candidates?.[0]?.groundingMetadata
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Error al conectar con la sabiduría artificial. Por favor verifica tu conexión.",
    };
  }
};
