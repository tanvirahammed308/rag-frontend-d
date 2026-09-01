
import type { Message } from "@/types/chat.types";

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({
  message,
}: MessageItemProps) {
  return (
    <div>
      <strong>
        {message.role === "user" ? "You" : "AI"}
      </strong>

      <p>{message.content}</p>
    </div>
  );
}

