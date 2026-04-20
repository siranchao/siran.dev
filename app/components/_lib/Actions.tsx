"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  ShareIcon,
  StarIcon as StarIconOutline,
  CheckCircleIcon,
  XMarkIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import { formatShortDate } from "@/app/lib/date";

type ActiveModal = "share" | "star-feedback" | "login" | null;

export default function Actions({
  postId,
  updatedAt,
  favoritedBy,
}: {
  postId: string;
  updatedAt: string;
  favoritedBy: { id: string }[];
}) {
  const { data: session } = useSession();
  const liked = favoritedBy.some(
    (item: { id: string }) => item.id === session?.user?.id,
  );
  const [optimisticLiked, setOptimisticLiked] = useState<boolean | null>(null);
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [starMsg, setStarMsg] = useState("");
  const [copied, setCopied] = useState(false);
  const isLiked = optimisticLiked ?? liked;

  const shareUrl = `${process.env.NEXT_PUBLIC_URL}notes/${postId}/`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => alert("Unable to copy URL, please try again"));
  };

  const handleLikeBtn = async () => {
    if (isLiked) {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_URL}/api/user/unlike/${session?.user?.id}`,
        { data: { id: postId } },
        { headers: { Authorization: session?.user?.accessToken as string } },
      );
      if (
        res.status === 200 &&
        !res.data.favoritePosts
          .map((item: { id: string }) => item.id)
          .includes(postId)
      ) {
        setOptimisticLiked(false);
        setStarMsg("Removed from your favorites.");
      }
    } else {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_URL}/api/user/like/${session?.user?.id}`,
        { data: { id: postId } },
        { headers: { Authorization: session?.user?.accessToken as string } },
      );
      if (
        res.status === 200 &&
        res.data.favoritePosts
          .map((item: { id: string }) => item.id)
          .includes(postId)
      ) {
        setOptimisticLiked(true);
        setStarMsg("Added to your favorites!");
      }
    }
    setActiveModal("star-feedback");
  };

  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Share Modal */}
      {activeModal === "share" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Share this note"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-base-100 border border-base-300 shadow-2xl p-6">
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 text-base-content/50 transition-colors"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                  <ShareIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-base-content">
                    Share this note
                  </p>
                  <p className="text-xs text-base-content/50 mt-0.5">
                    Copy the link to share with others
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-base-300 bg-base-200/60 px-3 py-2.5">
                <LinkIcon className="w-4 h-4 text-base-content/40 shrink-0" />
                <span className="flex-1 text-sm text-base-content/70 truncate font-mono select-all">
                  {shareUrl}
                </span>
                <button
                  onClick={handleCopy}
                  className={`btn btn-sm rounded-lg normal-case font-semibold min-w-[72px] transition-all ${
                    copied ? "btn-success text-white" : "btn-primary"
                  }`}
                >
                  {copied ? (
                    <span className="flex items-center gap-1.5">
                      <CheckCircleIcon className="w-4 h-4" />
                      Copied
                    </span>
                  ) : (
                    "Copy"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Star feedback Modal */}
      {activeModal === "star-feedback" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-base-100 border border-base-300 shadow-2xl p-6 text-center">
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 text-base-content/50 transition-colors"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
            <div className="flex flex-col items-center gap-3 py-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-warning/10">
                <StarIconSolid className="w-6 h-6 text-warning" />
              </div>
              <p className="font-semibold text-base-content">{starMsg}</p>
              <p className="text-sm text-base-content/50">
                {isLiked
                  ? "You can find it in your Favorites."
                  : "You can always star it again later."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {activeModal === "login" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Sign in required"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-base-100 border border-base-300 shadow-2xl p-6">
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 text-base-content/50 transition-colors"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center gap-4 text-center pt-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <StarIconOutline className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-base-content text-lg">
                  Sign in to save
                </p>
                <p className="mt-1.5 text-sm text-base-content/55 leading-relaxed">
                  Log in to star this note and build your personal favorites
                  list.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full mt-1">
                <Link
                  href="/user/login"
                  className="btn btn-primary rounded-xl normal-case font-semibold w-full"
                  onClick={closeModal}
                >
                  Log in
                </Link>
                <button
                  onClick={closeModal}
                  className="btn btn-ghost rounded-xl normal-case text-base-content/50 w-full"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions bar */}
      <section className="mb-16 flex flex-row justify-between items-center">
        <p className="text-sm text-base-content/40 font-medium">
          Last update: {formatShortDate(updatedAt)}
        </p>

        <div className="flex gap-2 items-center">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-base-300 bg-base-100 text-base-content/65 text-sm font-semibold hover:bg-base-200 hover:border-base-400 transition-all shadow-sm hover:-translate-y-0.5 duration-200"
            onClick={() => setActiveModal("share")}
          >
            <ShareIcon className="w-4 h-4" />
            Share
          </button>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all shadow-sm hover:-translate-y-0.5 duration-200 ${
              isLiked
                ? "border-warning/40 bg-warning/10 text-warning hover:bg-warning/15"
                : "border-base-300 bg-base-100 text-base-content/65 hover:bg-base-200 hover:border-base-400"
            }`}
            onClick={() => {
              if (session) {
                handleLikeBtn();
              } else {
                setActiveModal("login");
              }
            }}
          >
            {isLiked ? (
              <StarIconSolid className="w-4 h-4 text-warning" />
            ) : (
              <StarIconOutline className="w-4 h-4" />
            )}
            {isLiked ? "Starred" : "Star"}
          </button>
        </div>
      </section>
    </>
  );
}
