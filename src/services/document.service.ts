
import api from "@/lib/axios";
import type { UploadResponse } from "@/types/chat.types";

export const uploadDocument = async (
  file: File
): Promise<UploadResponse> => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post<UploadResponse>(
    "/documents/upload",
    formData
  );

  return response.data;
};

