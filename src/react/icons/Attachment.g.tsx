import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Attachment = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M10.7552 4.7448C9.09548 3.08507 6.40452 3.08507 4.7448 4.7448C3.08507 6.40452 3.08507 9.09548 4.7448 10.7552L5.27605 11.2865C5.56894 11.5793 5.56894 12.0542 5.27605 12.3471C4.98315 12.64 4.50828 12.64 4.21539 12.3471L3.68414 11.8159C1.43862 9.57035 1.43862 5.92965 3.68414 3.68414C5.92965 1.43862 9.57035 1.43862 11.8159 3.68414L20.3159 12.1842C22.5614 14.4297 22.5614 18.0704 20.3159 20.3159C18.0704 22.5614 14.4297 22.5614 12.1842 20.3159L8.12751 16.2592C6.46778 14.5995 6.46778 11.9085 8.12751 10.2488C9.78724 8.58908 12.4782 8.58908 14.1379 10.2488L16.6106 12.7215C16.9035 13.0144 16.9035 13.4892 16.6106 13.7821C16.3177 14.075 15.8428 14.075 15.5499 13.7821L13.0773 11.3095C12.0033 10.2355 10.2621 10.2355 9.18817 11.3095C8.11423 12.3834 8.11423 14.1246 9.18817 15.1986L13.2448 19.2552C14.9046 20.915 17.5955 20.915 19.2553 19.2552C20.915 17.5955 20.915 14.9046 19.2553 13.2448L10.7552 4.7448Z" />
		</svg>
	);
};

Attachment.iconName = "attachment";

export default Attachment;