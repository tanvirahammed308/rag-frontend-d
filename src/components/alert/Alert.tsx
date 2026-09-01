
"use client";

import { useEffect } from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiX,
} from "react-icons/fi";

interface AlertProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

export default function Alert({
  type,
  message,
  onClose,
}: AlertProps) {
  // Automatically close after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === "success";

  return (
    <div className="fixed right-5 top-5 z-50 w-[360px] animate-in slide-in-from-right-5 fade-in duration-300">
      <div
        className={`relative overflow-hidden rounded-2xl border bg-white/95 p-4 shadow-2xl backdrop-blur-md ${
          isSuccess
            ? "border-green-200 shadow-green-100"
            : "border-red-200 shadow-red-100"
        }`}
      >
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              isSuccess
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isSuccess ? (
              <FiCheckCircle size={22} />
            ) : (
              <FiAlertCircle size={22} />
            )}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3
              className={`font-semibold ${
                isSuccess
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {isSuccess ? "Success!" : "Something went wrong"}
            </h3>

            <p className="mt-1 break-words text-sm leading-5 text-gray-600">
              {message}
            </p>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close notification"
            className="rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Progress bar */}
        <div
          className={`absolute bottom-0 left-0 h-1 w-full origin-left animate-[shrink_4s_linear_forwards] ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>
    </div>
  );
}

