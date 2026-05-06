export const askCaiqueAgent = async (userMessage: string, bioData: string): Promise<string> => {
  try {
    const response = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userMessage,
        bioData,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data.reply;
    
  } catch (error) {
    console.error("Agent communication error:", error);
    return "Error connecting to the agent. Please check the console for details.";
  }
};