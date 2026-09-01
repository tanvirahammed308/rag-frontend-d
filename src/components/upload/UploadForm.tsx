"use client";

import { useForm } from "react-hook-form";
import { uploadDocument } from "@/services/document.service";
import { UploadFormData } from "@/types/chat.types";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Alert from "../alert/Alert";

interface AlertState {
  type: "success" | "error";
  message: string;
}

export default function UploadForm() {
    const [alert, setAlert] = useState<AlertState | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UploadFormData>();

  const onSubmit = async (data: UploadFormData) => {
    const file = data.file?.[0];

    if (!file) {
      return;
    }

    try {
      const result = await uploadDocument(file);

      setAlert({
        type: "success",
        message: `${result.message}. ${result.chunks} chunks created.`,
      });


      reset();
    } catch (error) {
      console.error("Upload failed:", error);

      setAlert({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to upload document.",
      });
    }
  };

  return (
        <>
      {/* Alert */}
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm"
      >
        <div className="mb-5">
          <h2 className="text-xl font-semibold">
            Upload Document
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Upload a PDF document to your RAG knowledge base.
          </p>
        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-8 transition hover:bg-gray-50">
          <FiUploadCloud
            size={40}
            className="mb-3 text-gray-400"
          />

          <span className="text-sm font-medium">
            Select PDF
          </span>

          <span className="mt-1 text-xs text-gray-500">
            PDF files only
          </span>

          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            {...register("file", {
              required: "Please select a PDF file",
            })}
          />
        </label>

        {errors.file && (
          <p className="mt-2 text-sm text-red-500">
            {errors.file.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FiUploadCloud />

          {isSubmitting
            ? "Uploading..."
            : "Upload PDF"}
        </button>
      </form>
    </>

  );
}