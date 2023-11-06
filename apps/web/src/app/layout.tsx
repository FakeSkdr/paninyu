import { Header } from "@/components/layout/header.component";
import { Body } from "@/components/layout/body.component";
import { Content } from "@/components/layout/content.component";
import { Footer } from "@/components/layout/footer.component";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Body>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Body>
    </html>
  );
}
