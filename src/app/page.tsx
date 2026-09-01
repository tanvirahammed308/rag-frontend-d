
import UploadForm from "@/components/upload/UploadForm";
import Chat from "@/components/chat/Chat";

export default function Home() {
  return (
    <main>
      <h1>RAG Chatbot</h1>

      <section>
        <h2>Upload Document</h2>
        <UploadForm />
      </section>

      <section>
        <h2>Chat</h2>
        <Chat />
      </section>
    </main>
  );
}

