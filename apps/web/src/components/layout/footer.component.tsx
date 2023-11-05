import { stack } from "@/styled-system/patterns";

export interface FooterProps {}

const styles = stack({
  bgColor: "primary-900",
  color: "white",
  paddingX: 4,
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
});

export function Footer() {
  return <footer className={styles}>Made with pa$$ion</footer>;
}
