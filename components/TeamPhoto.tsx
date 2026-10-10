"use client";

import { useState } from "react";

/**
 * Shows a founder photo if it exists in /public/team/.
 * Falls back to an initials circle automatically if the
 * image file hasn't been added yet, so the site never
 * shows a broken image icon.
 */
export default function TeamPhoto({
  photo,
  initials,
}: {
  photo: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full aspect-[3/4] flex items-center justify-center border border-gold text-gold font-display text-5xl">
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo}
      alt=""
      onError={() => setFailed(true)}
      className="w-full aspect-[3/4] object-cover border border-line"
    />
  );
}
