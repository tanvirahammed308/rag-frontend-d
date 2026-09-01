
"use client";

import { useState } from "react";
import { sendMessage } from "@/services/chat.service";
import type { Message } from "@/types/chat.types";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendMessage(message);

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer,
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Something went wrong. Please try again.",
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <MessageList messages={messages} />

      {loading && <p>AI is thinking...</p>}

      <ChatInput
        onSend={handleSendMessage}
        disabled={loading}
      />
    </div>
  );
}

