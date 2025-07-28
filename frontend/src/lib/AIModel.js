import { GoogleGenAI } from "google-genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY,
})

const config = {
    responseMimeType: "text/plain",
};
const model = "gemini-2.0-flash";

export async function getAIRecommendations(prompt) {
    try {
        const responce = await ai.models.generateContent({
            model,
            config,
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });
        return responce?.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (error) {
        console.error("Error generating AI recommendations:", error);
        return null;
    }
}