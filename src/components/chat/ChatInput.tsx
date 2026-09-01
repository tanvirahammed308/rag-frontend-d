"use client";

import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";

import type { ChatFormData } from "@/types/chat.types";

interface ChatInputProps {
  onSend: (message: string) => Promise<void>;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ChatFormData>();

  const onSubmit = async (data: ChatFormData) => {
    const message = data.message.trim();

    if (!message) {
      return;
    }

    await onSend(message);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-2"
    >
      <div className="flex-1">
        <input
          type="text"
          placeholder="Ask something..."
          disabled={disabled || isSubmitting}
          {...register("message", {
            required: "Message is required",
          })}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-1 focus:ring-black disabled:bg-gray-100"
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={disabled || isSubmitting}
        className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiSend />

        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}