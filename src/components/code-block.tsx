"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Clipboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CodeBlockProps = {
	code: string;
	language?: string;
	className?: string;
};

export function CodeBlock({ code, language, className }: CodeBlockProps) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(code).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		});
	};

	return (
		<div className={cn("code-block group", className)}>
			<div className='code-block-header'>
				<span className='code-block-lang'>{language || "code"}</span>
				<Button
					variant='ghost'
					size='icon'
					className='h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity'
					onClick={handleCopy}
					aria-label='Copy code'
				>
					{isCopied ? (
						<Check className='h-4 w-4 text-green-500' />
					) : (
						<Clipboard className='h-4 w-4' />
					)}
				</Button>
			</div>
			<SyntaxHighlighter
				language={language}
				style={vscDarkPlus}
				customStyle={{
					margin: 0,
					borderBottomLeftRadius: "0.5rem",
					borderBottomRightRadius: "0.5rem",
					padding: "1rem",
				}}
				codeTagProps={{
					style: {
						fontFamily: "'Fira Code', monospace",
						fontSize: "14px",
					},
				}}
				showLineNumbers
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
}
