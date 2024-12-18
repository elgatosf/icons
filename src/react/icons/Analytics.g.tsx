import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Analytics = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V19C4.5 19.2761 4.72386 19.5 5 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H5C3.89543 21 3 20.1046 3 19V3.75C3 3.33579 3.33579 3 3.75 3Z" /><path d="M19.5 10.5607V12.2482C19.5 12.6624 19.8358 12.9982 20.25 12.9982C20.6642 12.9982 21 12.6624 21 12.2482V8.75003C21 8.33581 20.6642 8.00003 20.25 8.00003L16.75 8C16.3358 8 16 8.33578 16 8.74999C16 9.16421 16.3358 9.5 16.75 9.5L18.4393 9.50001L14.75 13.1893L11.7803 10.2197C11.4874 9.92678 11.0126 9.92678 10.7197 10.2197L6.21967 14.7197C5.92678 15.0126 5.92678 15.4874 6.21967 15.7803C6.51256 16.0732 6.98744 16.0732 7.28033 15.7803L11.25 11.8107L14.2197 14.7803C14.3603 14.921 14.5511 15 14.75 15C14.9489 15 15.1397 14.921 15.2803 14.7803L19.5 10.5607Z" />
		</svg>
	);
};

Analytics.iconName = "analytics";

export default Analytics;