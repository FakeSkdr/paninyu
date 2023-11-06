import { css } from "@/styled-system/css";

export interface DropzoneProps {
  topLeftCorner?: string;
}

const style = css({
  backgroundColor: "red.100",
  border: "1px red solid",
  height: "100%",
  width: "100%",
});

export function Dropzone({ topLeftCorner }: DropzoneProps) {
  return <div className={style}>Dropzone {topLeftCorner}</div>;
}
