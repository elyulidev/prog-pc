"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Book, CheckSquare, Home, Laptop, Layers } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons/logo";

const navItems = [
	{ href: "/", label: "Início", icon: Home },
	{ href: "/modules", label: "Módulos", icon: Layers },
	{ href: "/bibliography", label: "Bibliografia", icon: Book },
	{ href: "/evaluation", label: "Avaliação", icon: CheckSquare },
];

export function MainSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar
			collapsible='icon'
			className='group-data-[variant=sidebar]:border-r border-border/50'
		>
			<SidebarHeader className='h-14 justify-center p-2 group-data-[collapsible=icon]:h-12'>
				<Link
					href='/'
					className='flex items-center justify-center gap-2 font-semibold'
				>
					<Logo className='size-8 shrink-0 text-primary' />
					<span className='text-lg font-headline group-data-[collapsible=icon]:hidden'>
						Programação de
					</span>
					<Laptop className='size-5' />
				</Link>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu>
					{navItems.map((item) => (
						<SidebarMenuItem key={item.href}>
							<Link href={item.href} passHref>
								<SidebarMenuButton
									isActive={
										pathname === item.href ||
										(item.href !== "/" && pathname.startsWith(item.href))
									}
									tooltip={item.label}
									className='justify-start'
								>
									<item.icon className='h-5 w-5' />
									<span className='group-data-[collapsible=icon]:hidden'>
										{item.label}
									</span>
								</SidebarMenuButton>
							</Link>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
