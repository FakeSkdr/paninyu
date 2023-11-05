import type { PropsWithChildren } from "react";
import { stack } from "@/styled-system/patterns";

export interface ContentProps {}

const styles = stack({
  bgColor: "primary",
  color: "white",
  flex: 1,
});

export function Content({ children }: PropsWithChildren<ContentProps>) {
  return <div className={styles}>{children}</div>;
}
