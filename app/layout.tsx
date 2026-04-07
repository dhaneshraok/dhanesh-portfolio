import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhanesh Rao — Full-Stack Engineer & System Architect",
  description:
    "Full-Stack Engineer specializing in distributed systems, cloud-native architectures, and AI-powered solutions. Building high-availability payment systems at Bank of America processing 25K+ TPS.",
  keywords: [
    "Dhanesh Rao",
    "software engineer",
    "full-stack developer",
    "distributed systems",
    "cloud architecture",
    "system design",
    "Java",
    "Spring Boot",
    "Kafka",
    "AWS",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Dhanesh Rao — Full-Stack Engineer & System Architect",
    description:
      "Building distributed systems that scale. Specializing in high-availability architectures and AI-powered solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
