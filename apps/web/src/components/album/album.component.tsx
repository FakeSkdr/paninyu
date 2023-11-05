"use client";

import { useEffect, useRef } from "react";
import { Dropzone } from "./dropzone.component";
import { css } from "@/styled-system/css";

const style = css({
  height: "calc(100vh - 100px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const styleImg = css({
  position: "relative",

  bgImage: 'url("/assets/background_1.png")',
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

// Exemple with black borders placeholder, size/ratio of sitckers should be fixed in % (with variation of landscape or portrait)
const styleDropZone = css({
  position: "absolute",
  top: "23%",
  left: "13.8%",
  width: "11%",
  height: "29.6%",
});

export function Album() {
  const containerRef = useRef();

  // TODO: handle on resize
  useEffect(() => {
    if (containerRef?.current) {
      const RATIO = 16 / 9;
      const { clientHeight, clientWidth } = containerRef?.current.parentElement;

      let height;
      let width;

      if (clientWidth / clientHeight > RATIO) {
        height = clientHeight;
        width = (clientHeight * 16) / 9;
      } else {
        height = (clientWidth * 9) / 16;
        width = clientWidth;
      }

      containerRef?.current.style.setProperty("height", `${height}px`);
      containerRef?.current.style.setProperty("width", `${width}px`);
    }
  }, [containerRef?.current]);

  return (
    <div className={style}>
      <div className={styleImg} ref={containerRef}>
        <div className={styleDropZone}>
          <Dropzone />
        </div>
      </div>
    </div>
  );
}
