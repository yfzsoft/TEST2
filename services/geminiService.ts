import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Heft Bot", the expert AI security consultant for the company "Heft". 
Heft specializes in four main areas:
1. Surveillance Cameras (CCTV, IP Cameras, Remote Monitoring)
2. Fire Detection (Smoke detectors, Heat sensors, Alarm linkage)
3. Intrusion Systems (Motion sensors, Door/Window contacts, Glass break sensors)
4. Access Control (Keycards, Biometrics, Smart Locks, Intercoms)

Your goal is to assist potential customers by:
- Answering questions about security best practices.
- Explaining technical terms in simple language.
- Recommending Heft services based on their needs (Home or Business).
- Encouraging them to fill out the "Get a Quote" form for a precise assessment.

Tone: Professional, Reassuring, Alert, and Helpful.
Keep answers concise and formatted for a chat interface.
Do not make up pricing. Instead, say "Costs vary based on the property size. Please request a free quote for an accurate estimate."
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session");
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the security database. Please try again later.";
  }
};