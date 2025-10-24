import { SVGProps } from "react";
import {
	Hash,
	CircleDot,
	Waves,
	Zap,
	Type,
	ListOrdered,
	Layers,
	Database,
	Minus,
	GitCommitHorizontal,
	Baseline,
} from "lucide-react";

export function IntegerIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg'>
			<Hash className='w-6 h-6 text-blue-600' />
		</div>
	);
}

export function BooleanIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg'>
			<GitCommitHorizontal className='w-6 h-6 text-purple-600' />
		</div>
	);
}

export function FloatIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg'>
			<Waves className='w-6 h-6 text-green-600' />
		</div>
	);
}

export function ComplexIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg'>
			<Zap className='w-6 h-6 text-red-600' />
		</div>
	);
}

export function StringIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg'>
			<Baseline className='w-6 h-6 text-orange-600' />
		</div>
	);
}

export function ListIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg'>
			<ListOrdered className='w-6 h-6 text-blue-600' />
		</div>
	);
}

export function TupleIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg'>
			<Layers className='w-6 h-6 text-pink-600' />
		</div>
	);
}

export function DictionaryIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg'>
			<Database className='w-6 h-6 text-teal-600' />
		</div>
	);
}
