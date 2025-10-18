"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Globe className='h-[1.2rem] w-[1.2rem]' />
					<span className='sr-only'>Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem>Português</DropdownMenuItem>
				<DropdownMenuItem>Español</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
