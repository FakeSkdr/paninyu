"use client";

import { Header } from "@/components/layout/header.component";
import { Body } from "@/components/layout/body.component";
import { Content } from "@/components/layout/content.component";
import { Footer } from "@/components/layout/footer.component";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <QueryClientProvider client={queryClient}>
        <Body>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Body>
      </QueryClientProvider>
    </html>
  );
}
