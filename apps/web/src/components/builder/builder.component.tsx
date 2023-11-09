"use client";

import { useEffect, useRef, useState } from "react";
import { type DropTargetMonitor, useDrop } from "react-dnd";

import { useQuery } from "@tanstack/react-query";

import { css } from "@/styled-system/css";
import { albumService } from "@/services/album.service";

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

// TODO: Next step
// - Store data in database and retrieve format
// - Allow the user to upload his own sticker (/assets/* or https:// to begin with server actions)
// - Allow the user to upload his own background (/assets/* or https:// to begin with server actions)
export function Builder() {
  const dropCntainerRef = useRef<HTMLDivElement>(null);
  const [backgroundSrc, setBackgroundSrc] = useState<string | null>(null);
  const [stickers, setStickers] = useState<StickerProps[]>([]);

  const { data } = useQuery({
    queryKey: ["album", 0],
    queryFn: () => albumService.getFullPage(0),
  });

  const onDrop = (
    { id, top: topOffsetInPercent, left: leftOffsetInPercent }: StickerProps,
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
    if (data) {
      setBackgroundSrc(data.backgroundImage);
      setStickers(data.stickers);
    }
  }, [data]);

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
