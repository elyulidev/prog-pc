"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
	return (
		<header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm sm:px-6'>
			<SidebarTrigger className='lg:hidden' />
			<div className='flex-1'></div>
			<div className='flex items-center gap-2'>
				{/* <LanguageToggle /> */}
				<ThemeToggle />
			</div>
		</header>
	);
}
