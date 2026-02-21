import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundShapes from "@/components/BackgroundShapes";
import CustomCursor from "@/components/CustomCursor";
import ShubhamCompanion from "@/components/ShubhamCompanion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shubham N. Nagare | AIML Engineer Portfolio",
    description: "Portfolio of Shubham N. Nagare, an AIML Engineer specializing in AI-driven solutions, full-stack development, and UI/UX design.",
    keywords: ["AI Engineer", "ML Engineer", "Next.js", "Portfolio", "Shubham Nagare"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative min-h-screen flex flex-col">
                        <CustomCursor />
                        <ShubhamCompanion />
                        <BackgroundShapes />
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
