"use client";

import { useForm } from "react-hook-form";
import { uploadDocument } from "@/services/document.service";
import { UploadFormData } from "@/types/chat.types";


export default function UploadForm() {
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

      alert(`${result.message}. ${result.chunks} chunks created.`);

      reset();
    } catch (error) {
      console.error("Upload failed:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to upload document."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        accept="application/pdf"
        {...register("file", {
          required: "Please select a PDF file",
        })}
      />

      {errors.file && (
        <p>{errors.file.message}</p>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Uploading..." : "Upload PDF"}
      </button>
    </form>
  );
}