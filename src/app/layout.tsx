import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@providers/ThemeProvider";
import Navbar from "@components/custom/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hotel Yaala",
	description: "Wild Coastal Luxury In The Deep South",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
