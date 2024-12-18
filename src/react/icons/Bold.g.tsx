import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Bold = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6 5C6 3.89543 6.89543 3 8 3H13C15.7614 3 18 5.23858 18 8C18 9.30809 17.4977 10.4989 16.6754 11.3899C18.0775 12.3325 19 13.9335 19 15.75C19 18.6495 16.6495 21 13.75 21H8C6.89543 21 6 20.1046 6 19V5ZM15.5 8C15.5 9.38071 14.3807 10.5 13 10.5H8.5V5.5H13C14.3807 5.5 15.5 6.61929 15.5 8ZM8.5 13V18.5H13.75C15.2688 18.5 16.5 17.2688 16.5 15.75C16.5 14.2312 15.2688 13 13.75 13H8.5Z" clipRule="evenodd" />
		</svg>
	);
};

Bold.iconName = "bold";

export default Bold;