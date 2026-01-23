"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGlobalModal } from "../_helper/ModalProvider";

export default function ContactForm() {
  const router = useRouter();
  const { showModal } = useGlobalModal();
  const redirectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setIsSubmitting(true);

    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to send message");
      }

      showModal("Thanks for your message! Catch you up soon...");
      form.reset();

      redirectTimeoutRef.current = setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error(error);
      showModal("Sorry, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.45)] dark:border-slate-800/80 dark:bg-slate-950/40 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[12px] font-semibold uppercase tracking-[1.6px] text-[#6b7280] dark:text-slate-400">
              Contact
            </p>
            <h3 className="text-[26px] font-semibold leading-[32px] text-[#0a0a0a] dark:text-slate-100">
              Let&apos;s get connected
            </h3>
          </div>
          <p className="text-[15px] leading-[24px] text-[#364153] dark:text-slate-300">
            Share your thoughts or anything interesting. Or reach me out at 👇
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/siran-chao/"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Image
                src="/icon/linkedin.svg"
                alt="linkedin"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://github.com/siranchao"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <Image
                src="/icon/github.svg"
                alt="github"
                width={18}
                height={18}
              />
            </a>
            <a
              href="mailto:siranchao@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors flex items-center justify-center"
              aria-label="Email"
            >
              <Image src="/icon/gmail.svg" alt="gmail" width={18} height={18} />
            </a>
          </div>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-[12px] font-semibold text-[#111827] dark:text-slate-200">
            Name
            <input
              type="text"
              name="name"
              placeholder="Jane Cooper"
              className="h-11 rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:border-[#111827] focus:outline-none dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500"
              required
            />
          </label>

          <label className="grid gap-2 text-[12px] font-semibold text-[#111827] dark:text-slate-200">
            Email Address
            <input
              type="email"
              name="email"
              placeholder="jane@email.com"
              className="h-11 rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:border-[#111827] focus:outline-none dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500"
              required
            />
          </label>

          <label className="grid gap-2 text-[12px] font-semibold text-[#111827] dark:text-slate-200">
            Message
            <textarea
              name="message"
              placeholder="Message you want to share..."
              rows={5}
              className="rounded-[10px] border border-[#e5e7eb] bg-white px-3 py-3 text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:border-[#111827] focus:outline-none dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-1 flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#0a0a0a] text-[14px] font-semibold text-white transition-colors hover:bg-[#111827] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-100 dark:text-[#0a0a0a] dark:hover:bg-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
