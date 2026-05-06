const OpenAI = require("openai");

if (!process.env.NETLIFY_API_KEY) {
  throw new Error("Missing NETLIFY_API_KEY environment variable");
}

const openai = new OpenAI({
  apiKey: process.env.NETLIFY_API_KEY, 
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Method Not Allowed" }) 
    };
  }

  try {
    const { userMessage, bioData } = JSON.parse(event.body);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: `
            You are the digital representative for Caique Silva (Cai).
            
            KNOWLEDGE BASE:
            ${bioData}

            ANSWERS:
            - Answer using a first-person speech
            - Do not go over 40 words
            - After 2 questions always suggest the user to contact Caique
            
            TONE & BEHAVIOR:
            - Calm, resilient, and casual.
            - Use a touch of humor where it feels natural.
            - You value meaningful connections and simplicity.
            - Be helpful but concise.
            
            GUARDRAILS:
            - Only answer questions about Caique's professional background, skills, and the personal interests mentioned in his bio.
            - If asked about unrelated topics (politics, general news, etc.), politely steer the conversation back to Caique's work or experience.
            - If you don't know an answer based on the bio, don't make it up. Suggest they ask about his tech stack or his experience in New Zealand or Brazil instead.
            - Do not talk bad words or swears
          ` 
        },
        { role: "user", content: userMessage },
      ],
      temperature: 0.7, 
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reply: completion.choices[0].message.content }),
    };
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "The agent is taking a breather. Please try again in a moment." }) 
    };
  }
};