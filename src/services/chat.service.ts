
import api from "@/lib/axios";
import type { ChatResponse } from "@/types/chat.types";

export const sendMessage = async (
  message: string
): Promise<ChatResponse> => {
  const response = await api.post<ChatResponse>("/chat", {
    message,
  });

  return response.data;
};

