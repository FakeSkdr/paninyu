import { stack } from "@/styled-system/patterns";

export interface HeaderProps {}

const styles = stack({
  bgColor: "primary-900",
  justifyContent: "space-between",
  direction: "row",
  alignItems: "center",
  height: "50px",
  paddingX: 4,
});

export function Header() {
  return (
    <header className={styles}>
      <div>Logo</div>

      <div>Account</div>
    </header>
  );
}
