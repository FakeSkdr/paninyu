import type { PropsWithChildren } from "react";
import { stack } from "@/styled-system/patterns";

export interface BodyProps {}

const styles = stack({
  bgColor: "primary",
  color: "white",
  height: "100vh",
  width: "100vw",
  gap: 0,
});

export function Body({ children }: PropsWithChildren<BodyProps>) {
  return <body className={styles}>{children}</body>;
}
