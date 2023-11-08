"use client";

import { useEffect, useRef, useState } from "react";
import { type DropTargetMonitor, useDrop } from "react-dnd";
import { css } from "@/styled-system/css";

import { Sticker, type StickerProps } from "../album/sticker.component";
import { BackgroundImage } from "../album/background-image";

const style = css({
  // TODO remove hardcoded 100px (header + footer height)
  height: "calc(100vh - 100px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const styleDropzone = css({
  height: "100%",
  width: "100%",
});

// Next step:
// - Store data in localstorage using an api like schema and load it on refresh
// - Allow the user to upload his own sticker (/assets/* or https:// to begin, so no backend involved)
// - Allow the user to upload his own background (/assets/* or https:// to begin, so no backend involved)
export function Builder() {
  const dropCntainerRef = useRef<HTMLDivElement>(null);
  const [backgroundSrc, setBackgroundSrc] = useState<string | null>(null);
  const [stickers, setStickers] = useState<StickerProps[]>([]);

  const onDrop = (
    { id, top: topOffsetInPercent, left: leftOffsetInPercent },
    monitor: DropTargetMonitor
  ) => {
    if (!dropCntainerRef.current) {
      return;
    }

    const offset = monitor.getDifferenceFromInitialOffset();

    if (!offset) {
      return;
    }

    const widthOffsetInPercent =
      (offset.x / dropCntainerRef.current.clientWidth) * 100;

    const heightOffsetInPercent =
      (offset.y / dropCntainerRef.current.clientHeight) * 100;

    const newTopOffset = topOffsetInPercent + heightOffsetInPercent;
    const newLeftOffset = leftOffsetInPercent + widthOffsetInPercent;

    const updatedStickers = stickers.map((sticker) => {
      if (sticker.id === id) {
        return {
          ...sticker,
          top: newTopOffset,
          left: newLeftOffset,
        };
      }

      return sticker;
    });

    setStickers(updatedStickers);
  };

  const [_, drop] = useDrop(
    () => ({
      accept: "Sticker",
      drop: onDrop,
    }),
    [stickers]
  );

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
          <div className={styleDropzone} ref={dropCntainerRef}>
            <div className={styleDropzone} ref={drop}>
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
            </div>
          </div>
        </BackgroundImage>
      )}
    </div>
  );
}
