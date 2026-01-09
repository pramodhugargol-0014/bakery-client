"use client";

import { useEffect, useState } from "react";

export default function FoodImage({ name }: { name: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadImage() {
      try {
        const res = await fetch(
          `/api/foodImages?q=${encodeURIComponent(name)}`
        );

        if (!res.ok) return;

        const data = await res.json();

        if (!cancelled) {
          setSrc(data.image ?? null);
        }
      } catch (err) {
        console.error("Image fetch failed", err);
      }
    }

    loadImage();

    return () => {
      cancelled = true;
    };
  }, [name]);

  return (
    <img
      src={src || "/bakery.png"}
      alt={name}
      className="h-16 w-16 rounded-lg object-cover"
      loading="lazy"
    />
  );
}
