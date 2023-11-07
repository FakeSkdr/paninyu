"use client";

import { useEffect, useState } from "react";
import { BackgroundImage } from "../album/background-image";
import { css } from "@/styled-system/css";
import { Sticker, type StickerProps } from "../album/sticker.component";

const style = css({
  // TODO remove hardcoded 100px (header + footer height)
  height: "calc(100vh - 100px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Next step:
// - react-dnd to allow the sticker to be moved and save coordinates
// - Store data in localstorage using an api like schema and load it on refresh
// - Allow the user to upload his own sticker (/assets/* or https:// to begin, so no backend involved)
// - Allow the user to upload his own background (/assets/* or https:// to begin, so no backend involved)
export function Builder() {
  const [backgroundSrc, setBackgroundSrc] = useState<string | null>(null);
  const [stickers, setStickers] = useState<StickerProps[]>([]);

  useEffect(() => {
    setBackgroundSrc("/assets/background_1.png");
    setStickers([
      {
        id: 1,
        src: "/assets/sticker_1.png",
        top: 23,
        left: 14,
      },
      {
        id: 2,
        src: "/assets/sticker_2.png",
        top: 47,
        left: 54,
      },
    ]);
  }, []);

  return (
    <div className={style}>
      {backgroundSrc && (
        <BackgroundImage src={backgroundSrc}>
          {stickers.length > 0 &&
            stickers.map((sticker) => (
              <Sticker
                key={sticker.id}
                id={sticker.id}
                left={sticker.left}
                top={sticker.top}
                src={sticker.src}
              />
            ))}
        </BackgroundImage>
      )}
    </div>
  );
}
