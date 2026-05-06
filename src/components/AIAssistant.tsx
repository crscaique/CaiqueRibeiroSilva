import { Bot, Send, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { askCaiqueAgent } from "../utils/aiConfig";
import { bioData } from "../data/bioData";
import { formatAgentResponse } from "../utils/aiFormatter";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isIntroActive, setIsIntroActive] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const suggestedQuestions = [
    "What is the Caique's agent?",
    "I would like to know more about Caique's hobbies.",
    "Why should I hire Caique?",
  ];

  // Placeholder for conversation state
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! Ask me anything about Caique.", sender: "ai" },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroActive(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [messages, isOpen]);

  const sendMessage = async (messageText: string) => {
    const trimmedInput = messageText.trim();
    if (trimmedInput === "" || isLoading) return;

    const newMessage: Message = { id: Date.now(), text: trimmedInput, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await askCaiqueAgent(trimmedInput, bioData);
      const formattedResponse = formatAgentResponse(aiResponse);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: formattedResponse,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleSuggestedQuestionClick = (question: string) => {
    // Set the input value and then send, or just send directly
    sendMessage(question);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {/* Chat Window */}
      {isOpen && (
        <div className="group absolute bottom-20 right-0 h-[32rem] w-80 origin-bottom-right animate-fade-in-scale rounded-2xl bg-white shadow-2xl ring-2 ring-lime-500">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-3">
              <h3 className="font-bold text-gray-800">Caique's Assistant</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300 group-hover:scrollbar-thumb-slate-400">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "ai" && <Bot className="size-6 flex-shrink-0 text-slate-700" />}
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      message.sender === "user"
                        ? "bg-lime-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {/* Suggested Questions */}
              {messages.filter((m) => m.sender === "user").length === 0 && !isLoading && (
                <div className="mt-4 flex flex-col items-start gap-2 animate-fade-in">
                  <p className="text-xs text-slate-500">Or try a suggestion:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSuggestedQuestionClick(q)}
                        className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <Bot className="size-6 flex-shrink-0 text-slate-700" />
                  <div className="max-w-[80%] rounded-lg bg-gray-200 px-3 py-2 text-sm text-gray-800">
                    <div className="flex items-center gap-1">Cai's agent is typing...</div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3">
              <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-1 ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-lime-500">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full flex-1 bg-transparent px-2 text-slate-800 placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md bg-lime-500 p-2 text-white transition-colors hover:bg-lime-600"
                  disabled={isLoading}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Button */}
      <div className="group flex items-center">
        {!isOpen && isIntroActive && (
          <div className="absolute right-full mr-4 whitespace-nowrap rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-lg">
            Heey, let's chat!
            <div className="absolute top-1/2 right-[-4px] h-3 w-3 -translate-y-1/2 rotate-45 bg-slate-800"></div>
          </div>
        )}
        {!isOpen && !isIntroActive && (
          <div className="absolute right-full mr-4 scale-0 whitespace-nowrap rounded-md bg-slate-800 px-3 py-1 text-sm font-semibold text-white shadow-lg transition-all duration-200 group-hover:scale-100">
            Talk to me
            <div className="absolute top-1/2 right-[-3px] h-2 w-2 -translate-y-1/2 rotate-45 bg-slate-800"></div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 hover:scale-110 ${
            isOpen
              ? "bg-lime-500"
              : `bg-slate-700 hover:bg-lime-500 ${
                  isIntroActive ? "animate-bounce" : ""
                }`
          }`}
          aria-label={isOpen ? "Close chat" : "Open AI Assistant chat"}
        >
          {isOpen ? <X size={32} /> : <Bot size={32} />}
        </button>
      </div>
    </div>
  );
}