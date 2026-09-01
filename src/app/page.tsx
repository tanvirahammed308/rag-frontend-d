
import { FileText, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";

import UploadForm from "@/components/upload/UploadForm";
import Chat from "@/components/chat/Chat";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
            <Sparkles className="h-4 w-4" />
            AI Powered Document Assistant
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              RAG Assistant
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Upload your documents and ask questions about them using
            intelligent document search and AI.
          </p>
        </header>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Upload section */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-400">
                <FileText className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Upload Document
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Upload a PDF to start chatting
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-6">
              <UploadForm />
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4" />
              Your document is processed securely.
            </div>
          </section>

          {/* Chat section */}
          <section className="flex min-h-[500px] flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-400">
                <MessageSquare className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Chat with your documents
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Ask questions and get intelligent answers
                </p>
              </div>
            </div>

            <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <Chat />
            </div>
          </section>
        </div>

        {/* Features */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
            <FileText className="mx-auto mb-3 h-6 w-6 text-indigo-400" />
            <h3 className="font-medium">PDF Support</h3>
            <p className="mt-1 text-sm text-slate-500">
              Upload and process your documents
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
            <Sparkles className="mx-auto mb-3 h-6 w-6 text-purple-400" />
            <h3 className="font-medium">AI Powered</h3>
            <p className="mt-1 text-sm text-slate-500">
              Get intelligent answers from your data
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
            <MessageSquare className="mx-auto mb-3 h-6 w-6 text-blue-400" />
            <h3 className="font-medium">Natural Chat</h3>
            <p className="mt-1 text-sm text-slate-500">
              Ask questions in natural language
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-slate-600">
          Built with Next.js, React, and AI
        </footer>
      </div>
    </main>
  );
}

