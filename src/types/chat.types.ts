
export interface UploadFormData {
  file: FileList;
}


export interface UploadResponse {
  message: string;
  chunks: number;
}


export interface ChatResponse {
  answer: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatFormData {
  message: string;
}