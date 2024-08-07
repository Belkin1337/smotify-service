import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

export const userCardVariants = cva("flex overflow-hidden min-w-[220px] w-fit", {
	variants: {
		variant: {
			miniauture: "items-center justify-start gap-x-1"
		}
	}
})

export interface IUserCard
	extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof userCardVariants> {
	followed_songs_length?: number
}