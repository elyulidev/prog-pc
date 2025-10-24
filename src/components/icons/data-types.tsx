import {
	Hash,
	Waves,
	Zap,
	ListOrdered,
	Layers,
	Database,
	GitCommitHorizontal,
	Baseline,
} from "lucide-react";

export function IntegerIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg'>
			<Hash className='w-6 h-6 text-blue-600' />
		</div>
	);
}

export function BooleanIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg'>
			<GitCommitHorizontal className='w-6 h-6 text-purple-600' />
		</div>
	);
}

export function FloatIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg'>
			<Waves className='w-6 h-6 text-green-600' />
		</div>
	);
}

export function ComplexIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg'>
			<Zap className='w-6 h-6 text-red-600' />
		</div>
	);
}

export function StringIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg'>
			<Baseline className='w-6 h-6 text-orange-600' />
		</div>
	);
}

export function ListIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg'>
			<ListOrdered className='w-6 h-6 text-blue-600' />
		</div>
	);
}

export function TupleIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg'>
			<Layers className='w-6 h-6 text-pink-600' />
		</div>
	);
}

export function DictionaryIcon() {
	return (
		<div className='flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg'>
			<Database className='w-6 h-6 text-teal-600' />
		</div>
	);
}
