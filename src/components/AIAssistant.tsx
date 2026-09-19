import { useEffect, useRef, useState } from "react";
import {
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

// API URL
// Local: http://localhost:3000
// Production: https://naimul-ai-backend.onrender.com
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

const AIAssistant = () => {
  const [aiInput, setAiInput] = useState("");

  const [aiConversation, setAiConversation] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Naimul's AI assistant. Ask me anything about his skills, experience, projects, or professional background.",
    },
  ]);

  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);

  const aboutChatRef = useRef<HTMLDivElement>(null);
  const floatingChatRef = useRef<HTMLDivElement>(null);

  // Automatically scroll both chat windows to the latest message
  useEffect(() => {
    if (aboutChatRef.current) {
      aboutChatRef.current.scrollTop =
        aboutChatRef.current.scrollHeight;
    }

    if (floatingChatRef.current) {
      floatingChatRef.current.scrollTop =
        floatingChatRef.current.scrollHeight;
    }
  }, [aiConversation, isAiLoading]);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userMessage = aiInput.trim();

    if (!userMessage || isAiLoading) return;

    // Add user's message
    setAiConversation((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setAiInput("");
    setIsAiLoading(true);

    try {
      // Send message to Express backend
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      // Add AI response
      setAiConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "I couldn't generate a response right now. Please try again.",
        },
      ]);
    } catch (error) {
      console.error("AI Assistant error:", error);

      setAiConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting to my AI service right now. Please try again later.",
        },
      ]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const renderMessages = (compact = false) => (
    <>
      {aiConversation.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={cn(
              "whitespace-pre-wrap leading-relaxed",
              compact
                ? "max-w-[88%] rounded-xl px-3 py-2 text-sm"
                : "max-w-[85%] rounded-lg px-4 py-2 text-sm",
              msg.role === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground"
            )}
          >
            {msg.content}
          </div>
        </div>
      ))}

      {isAiLoading && (
        <div className="flex justify-start">
          <div
            className={cn(
              "rounded-lg bg-muted text-foreground flex items-center gap-2",
              compact
                ? "px-3 py-2 text-sm"
                : "px-4 py-2 text-sm"
            )}
          >
            <Bot className="h-4 w-4 text-primary animate-pulse" />
            Thinking...
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* ===================================================== */}
      {/* ABOUT SECTION AI ASSISTANT                            */}
      {/* ===================================================== */}

      <Card className="p-6 bg-card border-border h-full flex flex-col">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
           {/* <Sparkles className="text-primary h-5 w-5" /> */}
           &gt;Ask my AI Assistant
        </h3>

        {/* About Chat Messages */}
        <div
          ref={aboutChatRef}
          className="flex-grow h-48 overflow-y-auto p-3 bg-muted/50 rounded-md mb-4 space-y-4"
        >
          {renderMessages(false)}
        </div>

        {/* About Chat Input */}
        <form
          onSubmit={handleAiSubmit}
          className="flex gap-2"
        >
          <Input
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
            placeholder="Ask about my AI skills..."
            className="bg-muted border-border"
            disabled={isAiLoading}
          />

          <Button
            type="submit"
            size="icon"
            disabled={!aiInput.trim() || isAiLoading}
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </Card>

      {/* ===================================================== */}
      {/* FLOATING AI ASSISTANT                                 */}
      {/* ===================================================== */}

      <div className="fixed bottom-6 right-6 z-50">

        {/* Floating Chat Window */}
        {isFloatingOpen && (
          <Card
            className={cn(
              "absolute bottom-20 right-0",
              "w-[370px] max-w-[calc(100vw-2rem)]",
              "bg-card border-border",
              "shadow-2xl shadow-black/40",
              "overflow-hidden",
              "animate-fade-in"
            )}
          >
            {/* Floating Chat Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">

              <div className="flex items-center gap-3">

                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 border border-primary/30">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="font-semibold text-sm text-foreground">
                    Naimul's AI Assistant
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Ask about my professional profile
                  </p>
                </div>

              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => setIsFloatingOpen(false)}
                aria-label="Close AI assistant"
              >
                <X className="h-4 w-4" />
              </Button>

            </div>

            {/* Floating Chat Messages */}
            <div
              ref={floatingChatRef}
              className="h-[320px] overflow-y-auto p-4 space-y-3 bg-background/40"
            >
              {renderMessages(true)}
            </div>

            {/* Floating Chat Input */}
            <form
              onSubmit={handleAiSubmit}
              className="p-3 border-t border-border bg-card flex gap-2"
            >
              <Input
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
                placeholder="Ask something..."
                className="bg-muted border-border text-sm"
                disabled={isAiLoading}
              />

              <Button
                type="submit"
                size="icon"
                disabled={!aiInput.trim() || isAiLoading}
                aria-label="Send message"
                className="shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>

          </Card>
        )}

        {/* =================================================== */}
        {/* ROUND FLOATING CHAT BUTTON                          */}
        {/* =================================================== */}

        <Button
          type="button"
          onClick={() =>
            setIsFloatingOpen((prev) => !prev)
          }
          size="icon"
          className={cn(
            "h-16 w-16 rounded-full",
            "bg-background border-2 border-primary",
            "text-primary",
            "shadow-lg shadow-primary/20",
            "transition-all duration-300",
            "hover:bg-primary",
            "hover:text-primary-foreground",
            "hover:scale-105",
            "focus-visible:ring-2",
            "focus-visible:ring-primary",
            "focus-visible:ring-offset-2",
            "focus-visible:ring-offset-background"
          )}
          aria-label={
            isFloatingOpen
              ? "Close AI assistant"
              : "Open AI assistant"
          }
        >
          {isFloatingOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <MessageCircle className="h-7 w-7" />
          )}
        </Button>

      </div>
    </>
  );
};

export default AIAssistant;