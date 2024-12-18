import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Link = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.49756 12C3.49756 8.96281 5.962 6.5 8.99994 6.5H9.24994C9.66415 6.5 9.99994 6.16421 9.99994 5.75C9.99994 5.33579 9.66415 5 9.24994 5H8.99994C5.13432 5 1.99756 8.13364 1.99756 12C1.99756 15.8664 5.13432 19 8.99994 19H9.24994C9.66415 19 9.99994 18.6642 9.99994 18.25C9.99994 17.8358 9.66415 17.5 9.24994 17.5H8.99994C5.962 17.5 3.49756 15.0372 3.49756 12Z" /><path d="M14.7499 5C14.3357 5 13.9999 5.33579 13.9999 5.75C13.9999 6.16421 14.3357 6.5 14.7499 6.5H14.9999C18.0379 6.5 20.5022 8.96279 20.5022 12C20.5022 15.0372 18.0379 17.5 14.9999 17.5H14.7499C14.3357 17.5 13.9999 17.8358 13.9999 18.25C13.9999 18.6642 14.3357 19 14.7499 19H14.9999C18.8656 19 22.0022 15.8664 22.0022 12C22.0022 8.13365 18.8656 5 14.9999 5H14.7499Z" /><path d="M8.74992 11.25C8.33571 11.25 7.99992 11.5858 7.99992 12C7.99992 12.4142 8.33571 12.75 8.74992 12.75H15.2499C15.6641 12.75 15.9999 12.4142 15.9999 12C15.9999 11.5858 15.6641 11.25 15.2499 11.25H8.74992Z" />
		</svg>
	);
};

Link.iconName = "link";

export default Link;