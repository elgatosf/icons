import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LinkBroken = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.99994 6.5C5.962 6.5 3.49756 8.96281 3.49756 12C3.49756 15.0372 5.962 17.5 8.99994 17.5H9.24994C9.66415 17.5 9.99994 17.8358 9.99994 18.25C9.99994 18.6642 9.66415 19 9.24994 19H8.99994C5.13432 19 1.99756 15.8664 1.99756 12C1.99756 8.13364 5.13432 5 8.99994 5H9.24994C9.66415 5 9.99994 5.33579 9.99994 5.75C9.99994 6.16421 9.66415 6.5 9.24994 6.5H8.99994Z" /><path d="M13.9999 5.75C13.9999 5.33579 14.3357 5 14.7499 5H14.9999C18.8656 5 22.0022 8.13365 22.0022 12C22.0022 15.8664 18.8656 19 14.9999 19H14.7499C14.3357 19 13.9999 18.6642 13.9999 18.25C13.9999 17.8358 14.3357 17.5 14.7499 17.5H14.9999C18.0379 17.5 20.5022 15.0372 20.5022 12C20.5022 8.96279 18.0379 6.5 14.9999 6.5H14.7499C14.3357 6.5 13.9999 6.16421 13.9999 5.75Z" />
		</svg>
	);
};

LinkBroken.iconName = "link-broken";

export default LinkBroken;