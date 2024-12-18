import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ShareWebFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M17 9C18.6569 9 20 7.65685 20 6C20 4.34315 18.6569 3 17 3C15.3431 3 14 4.34315 14 6C14 6.17688 14.0153 6.35019 14.0447 6.51867L8.02006 9.78201C7.48696 9.29621 6.77807 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.77807 15 7.48696 14.7038 8.02006 14.218L14.0447 17.4813C14.0153 17.6498 14 17.8231 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15C16.0582 15 15.2177 15.434 14.6677 16.1129L8.84371 12.9582C8.94507 12.6573 9 12.3351 9 12C9 11.6649 8.94507 11.3427 8.84371 11.0418L14.6677 7.8871C15.2177 8.56601 16.0582 9 17 9Z" />
		</svg>
	);
};

ShareWebFilled.iconName = "share-web--filled";

export default ShareWebFilled;