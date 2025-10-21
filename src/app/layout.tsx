import type { Metadata } from "next";
import { Source_Code_Pro, PT_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/header";
import { MainSidebar } from "@/components/layout/main-sidebar";

const sourceCodePro = Source_Code_Pro({
	variable: "--font-source-code-pro",
	subsets: ["latin"],
});

const ptSans = PT_Sans({
	variable: "--font-pt-sans",
	subsets: ["latin"],
	weight: ["400", "700"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Programação de Computadores",
	description:
		"Um site interativo para o curso de Programação de Computadores.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt' suppressHydrationWarning>
			<head>
				<link rel='icon' href='/favicon.ico' type='image/ico' sizes='48x48' />
				<link
					rel='icon'
					href='/favicon-16x16.png'
					type='image/png'
					sizes='16x16'
				/>
				<link
					rel='icon'
					href='/favicon-32x32.png'
					type='image/ico'
					sizes='32x32'
				/>
				<link
					rel='apple-touch-icon'
					href='/apple-touch-icon.png'
					type='image/png'
					sizes='180x180'
				/>

				<link rel='manifest' href='/manifest.webmanifest' />
			</head>
			<body
				className={`${sourceCodePro.variable} ${ptSans.variable} ${inter.variable} antialiased overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<div className='flex min-h-screen w-full'>
							<MainSidebar />
							<div className='flex flex-1 flex-col'>
								<Header />
								<main className='flex-1 p-4 sm:p-6 lg:p-8 bg-background'>
									{children}
								</main>
							</div>
						</div>
					</SidebarProvider>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
