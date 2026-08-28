import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";

const golosText = Golos_Text({
    variable: "--font-golos",
    subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
    title: "Most",
    description: "Most - pay your subscribes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="ru" className={golosText.variable}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
