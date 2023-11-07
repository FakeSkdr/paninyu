import Image from "next/image";

import { css } from "@/styled-system/css";

export interface StickerProps {
  /**
   * Number of the card in the album
   */
  id: number;
  /**
   *Image source
   */
  src: string;
  /**
   * Free space at the top of the card, in percentage
   * @example 25
   */
  top: number;

  /**
   * Free space at the left of the card, in percentage
   * @example 25
   */
  left: number;
}

// Decide of the ratio/size to hardcode it/set into the theme
const styles = css({
  position: "absolute",
  width: "10%",
  height: "25%",
});

export function Sticker({ src, top, left }: StickerProps) {
  return (
    <div
      className={styles}
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <Image alt="sticker" fill src={src} />
    </div>
  );
}
