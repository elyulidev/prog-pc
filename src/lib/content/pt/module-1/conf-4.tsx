import React from "react";

const LecturePage = () => {
	return (
		<div className='space-y-12'>
			{/* Conference Header */}
			<header className='rounded-lg bg-primary/5 p-8'>
				<p className='text-lg font-semibold text-primary'>
					Módulo I: Fundamentos de Python e Lógica Algorítmica
				</p>
				<h1 className='text-4xl font-bold tracking-tight lg:text-5xl font-headline'>
					Conferência 4: O Pacote NumPy: Matrizes e Vetores
				</h1>
				<p className='mt-4 text-lg text-muted-foreground max-w-3xl'>
					Proximamente vai estar disponivel
				</p>
			</header>
		</div>
	);
};

export default LecturePage;
