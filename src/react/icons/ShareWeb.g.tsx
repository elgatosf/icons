import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ShareWeb = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M20 6C20 7.65685 18.6569 9 17 9C16.0582 9 15.2177 8.56601 14.6677 7.8871L8.84371 11.0418C8.94507 11.3427 9 11.6649 9 12C9 12.3351 8.94507 12.6573 8.84371 12.9582L14.6677 16.1129C15.2177 15.434 16.0582 15 17 15C18.6569 15 20 16.3431 20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18C14 17.8231 14.0153 17.6498 14.0447 17.4813L8.02006 14.218C7.48696 14.7038 6.77807 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C6.77807 9 7.48696 9.29621 8.02006 9.78201L14.0447 6.51867C14.0153 6.35019 14 6.17688 14 6C14 4.34315 15.3431 3 17 3C18.6569 3 20 4.34315 20 6ZM18.5 6C18.5 6.82843 17.8284 7.5 17 7.5C16.1716 7.5 15.5 6.82843 15.5 6C15.5 5.17157 16.1716 4.5 17 4.5C17.8284 4.5 18.5 5.17157 18.5 6ZM18.5 18C18.5 18.8284 17.8284 19.5 17 19.5C16.1716 19.5 15.5 18.8284 15.5 18C15.5 17.1716 16.1716 16.5 17 16.5C17.8284 16.5 18.5 17.1716 18.5 18ZM7.5 12C7.5 12.8284 6.82843 13.5 6 13.5C5.17157 13.5 4.5 12.8284 4.5 12C4.5 11.1716 5.17157 10.5 6 10.5C6.82843 10.5 7.5 11.1716 7.5 12Z" clipRule="evenodd" />
		</svg>
	);
};

ShareWeb.iconName = "share-web";

export default ShareWeb;