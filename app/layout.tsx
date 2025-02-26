import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});
const ibmPlexSerif = IBM_Plex_Serif({
	variable: "--font-ibm-plex-serif",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "SpendWise – Smart Expense Tracker & Budget Manager",
	description:
		"SpendWise is a powerful expense tracker and budget management app designed to help users track spending, manage budgets, and gain financial insights. With features like real-time expense tracking, automated budget categorization, and interactive charts, SpendWise makes personal finance easy and intuitive.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
