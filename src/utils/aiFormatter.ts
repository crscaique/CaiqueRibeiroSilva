export const formatAgentResponse = (text: string): string => {
  if (!text) return "";

  let formattedText = text.trim();
  formattedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
 
  return formattedText;
};

export const truncateResponse = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};