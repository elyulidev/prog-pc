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
		process.env.NODE_ENV !== "production"
	) {
		return {
			...image,
			imageUrl: "/conf1/tiobe-python.webp",
		};
	}
	return image;
};
