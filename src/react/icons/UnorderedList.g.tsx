import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const UnorderedList = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4.5 8.75C5.60457 8.75 6.5 7.85457 6.5 6.75C6.5 5.64543 5.60457 4.75 4.5 4.75C3.39543 4.75 2.5 5.64543 2.5 6.75C2.5 7.85457 3.39543 8.75 4.5 8.75Z" /><path d="M4.5 19.25C5.60457 19.25 6.5 18.3546 6.5 17.25C6.5 16.1454 5.60457 15.25 4.5 15.25C3.39543 15.25 2.5 16.1454 2.5 17.25C2.5 18.3546 3.39543 19.25 4.5 19.25Z" /><path d="M9 6.75C9 6.33579 9.33579 6 9.75 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H9.75C9.33579 7.5 9 7.16421 9 6.75Z" /><path d="M9.75 16.5C9.33579 16.5 9 16.8358 9 17.25C9 17.6642 9.33579 18 9.75 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H9.75Z" />
		</svg>
	);
};

UnorderedList.iconName = "unordered-list";

export default UnorderedList;