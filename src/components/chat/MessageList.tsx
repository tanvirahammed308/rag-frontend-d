
import type { Message } from "@/types/chat.types";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({
  messages,
}: MessageListProps) {
  return (
    <div>
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}

