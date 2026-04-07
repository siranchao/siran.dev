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
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-base-content/40">
              Contact
            </p>
            <h3 className="text-2xl font-bold text-base-content">
              Let&apos;s get connected
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-base-content/60">
            Share your thoughts or anything interesting. Or reach me out at
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/siran-chao/"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-base-200 hover:bg-base-300 transition-colors duration-200 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Image
                src="/icon/linkedin.svg"
                alt="linkedin"
                width={16}
                height={16}
              />
            </a>
            <a
              href="https://github.com/siranchao"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-base-200 hover:bg-base-300 transition-colors duration-200 flex items-center justify-center"
              aria-label="GitHub"
            >
              <Image
                src="/icon/github.svg"
                alt="github"
                width={16}
                height={16}
              />
            </a>
            <a
              href="mailto:siranchao@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-base-200 hover:bg-base-300 transition-colors duration-200 flex items-center justify-center"
              aria-label="Email"
            >
              <Image src="/icon/gmail.svg" alt="gmail" width={16} height={16} />
            </a>
          </div>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-[11px] font-bold uppercase tracking-wider text-base-content/60">
            Name
            <input
              type="text"
              name="name"
              placeholder="Jane Cooper"
              className="h-11 rounded-xl border border-base-300 bg-base-100 px-4 text-sm text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
              required
            />
          </label>

          <label className="grid gap-2 text-[11px] font-bold uppercase tracking-wider text-base-content/60">
            Email Address
            <input
              type="email"
              name="email"
              placeholder="jane@email.com"
              className="h-11 rounded-xl border border-base-300 bg-base-100 px-4 text-sm text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
              required
            />
          </label>

          <label className="grid gap-2 text-[11px] font-bold uppercase tracking-wider text-base-content/60">
            Message
            <textarea
              name="message"
              placeholder="Message you want to share..."
              rows={5}
              className="rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/30 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
              required
            />
          </label>

          <button
            type="submit"
            className="mt-1 flex h-12 items-center justify-center gap-2 rounded-xl bg-base-content text-sm font-semibold text-base-100 transition-colors hover:bg-base-content/85 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}
