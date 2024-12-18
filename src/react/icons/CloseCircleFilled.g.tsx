import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CloseCircleFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.31802 8.25736C9.02513 7.96447 8.55025 7.96447 8.25736 8.25736C7.96447 8.55025 7.96447 9.02513 8.25736 9.31802L10.9393 12L8.25736 14.682C7.96447 14.9749 7.96447 15.4497 8.25736 15.7426C8.55025 16.0355 9.02513 16.0355 9.31802 15.7426L12 13.0607L14.682 15.7426C14.9749 16.0355 15.4497 16.0355 15.7426 15.7426C16.0355 15.4497 16.0355 14.9749 15.7426 14.682L13.0607 12L15.7426 9.31802C16.0355 9.02513 16.0355 8.55025 15.7426 8.25736C15.4497 7.96447 14.9749 7.96447 14.682 8.25736L12 10.9393L9.31802 8.25736Z" clipRule="evenodd" />
		</svg>
	);
};

CloseCircleFilled.iconName = "close-circle--filled";

export default CloseCircleFilled;