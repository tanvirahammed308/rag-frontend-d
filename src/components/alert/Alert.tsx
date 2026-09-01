"use client";

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
  return (
    <div className="fixed right-5 top-5 z-50 w-[350px]">
      <div
        className={`flex items-start gap-3 rounded-xl border bg-white p-4 shadow-lg ${
          type === "success"
            ? "border-green-200"
            : "border-red-200"
        }`}
      >
        {/* Icon */}
        <div
          className={
            type === "success"
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {type === "success" ? (
            <FiCheckCircle size={22} />
          ) : (
            <FiAlertCircle size={22} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold">
            {type === "success"
              ? "Success"
              : "Error"}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            {message}
          </p>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 transition hover:text-gray-700"
        >
          <FiX size={18} />
        </button>
      </div>
    </div>
  );
}