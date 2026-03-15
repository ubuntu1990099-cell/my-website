import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "王哥的个人主页",
  description: "欢迎来到我的个人网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
