import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PlaceHolderImages } from "./placeholder-images";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getImage = (id: string) => {
	const image = PlaceHolderImages.find((img) => img.id === id);
	if (
		image &&
		image.id === "tiobe-chart" &&
		process.env.NODE_ENV === "production"
	) {
		return {
			...image,
			imageUrl:
				"https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/conf1/tiobe-python.webp",
		};
	}

	if (
		image &&
		image.id === "python-logo" &&
		process.env.NODE_ENV === "production"
	) {
		return {
			...image,
			imageUrl:
				"https://cz7algaabcz8rpd1.public.blob.vercel-storage.com/python-logo.webp",
		};
	}
	return image;
};
