import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./markdown.css"
const inter = Inter({ weight: ["400", "500"], subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "wagmigg",
  description: "espor app",
  icons:[
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.ico',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
