"use client";

import { useEffect, useCallback, type PropsWithChildren, useRef } from "react";
import { css } from "@/styled-system/css";

export interface BackgroundImageProps {
  src: string;
}

export function BackgroundImage({
  children,
  src,
}: PropsWithChildren<BackgroundImageProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const setImageDimension = useCallback(() => {
    if (containerRef.current) {
      const RATIO = 16 / 9;
      const { clientHeight, clientWidth } = containerRef.current
        .parentElement as Element;

      let height: number;
      let width: number;

      if (clientWidth / clientHeight > RATIO) {
        height = clientHeight;
        width = clientHeight * RATIO;
      } else {
        height = clientWidth / RATIO;
        width = clientWidth;
      }

      containerRef.current.style.setProperty("height", `${height}px`);
      containerRef.current.style.setProperty("width", `${width}px`);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setImageDimension);

    return () => {
      window.removeEventListener("resize", setImageDimension);
    };
  }, [setImageDimension]);

  useEffect(() => {
    setImageDimension();
  }, [setImageDimension]);

  return (
    <div
      className={css({
        position: "relative",

        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      })}
      ref={containerRef}
      style={{
        // Needed because it is only know at runtiome and css({}) only handle static assets/values
        backgroundImage: `url('${src}')`,
      }}
    >
      {children}
    </div>
  );
}
