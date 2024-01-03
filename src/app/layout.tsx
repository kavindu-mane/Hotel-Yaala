import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@providers/ThemeProvider";
import Navbar from "@components/custom/NavBar";
import Footer from "@components/custom/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Hotel Yaala",
	description: "Wild Coastal Luxury In The Deep South",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative min-h-screen`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
