
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, OPENING_HOURS, ADDRESS } from "../constants";

// Construct a system instruction string from our data
const systemInstruction = `
You are "Pepe", the virtual waiter at "Tex Mex Steyr", located at ${ADDRESS.street} in Steyr, Austria.
The restaurant is famous for its Steaks, Burgers, Spare Ribs, and Cocktails.

Key Information:
- Location: ${ADDRESS.street}, ${ADDRESS.city}.
- Opening Hours: ${JSON.stringify(OPENING_HOURS)}. We open daily at 17:00.
- Menu: ${JSON.stringify(MENU_ITEMS)}.

Rules:
1. Recommend our specials: The Tex Mex Burger and the Spare Ribs (All you can eat hints are welcome if asked).
2. We have a great cocktail bar (Happy Hour hints are welcome).
3. If a user asks for something not on the menu, politely suggest a similar alternative from the menu.
4. Suggest drink pairings (Cocktails/Mexican Cerveza) with food.
5. If asked about reservations, emphasize that for groups, reservations via phone (${ADDRESS.phone}) are recommended.
6. Keep responses concise and engaging (under 100 words ideally).
7. Prices are in Euro (€).

Current Context: The user is on the website looking for information or recommendations.
`;

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
    // Check if process and process.env exist before accessing API_KEY
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;
    if (!aiClient && apiKey) {
        aiClient = new GoogleGenAI({ apiKey });
    }
    return aiClient;
}

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], userMessage: string): Promise<string> => {
    const ai = initGemini();
    if (!ai) {
        return "Hola amigo! My connection to the bar is weak (API Key missing). Please check back later!";
    }

    try {
        // Use gemini-3-flash-preview as per the world-class guidelines
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: [
                ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: h.parts })),
                { role: 'user', parts: [{ text: userMessage }] }
            ],
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
                maxOutputTokens: 300,
            }
        });

        return response.text || "Lo siento, I didn't catch that. Can you repeat?";
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Ay caramba! Something went wrong. Please try again.";
    }
};
