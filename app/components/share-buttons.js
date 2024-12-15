'use client';

import { Twitter, Facebook, Linkedin } from "lucide-react";

export default function ShareButtons({ title }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="flex gap-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500"
      >
        <Twitter size={24} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600"
      >
        <Facebook size={24} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
} 