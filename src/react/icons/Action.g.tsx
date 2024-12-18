import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Action = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9 5.25C9 3.45507 10.4551 2 12.25 2H18.75C20.5449 2 22 3.45507 22 5.25V11.75C22 13.5449 20.5449 15 18.75 15H18.25C17.8358 15 17.5035 14.6631 17.4674 14.2504C17.1095 10.1541 13.8459 6.89051 9.74957 6.5326C9.33693 6.49654 9 6.16421 9 5.75V5.25Z" /><path fillRule="evenodd" d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22ZM6.28033 11.2197C5.98744 10.9268 5.51256 10.9268 5.21967 11.2197C4.92678 11.5126 4.92678 11.9874 5.21967 12.2803L7.71967 14.7803C8.01256 15.0732 8.48744 15.0732 8.78033 14.7803C9.07322 14.4874 9.07322 14.0126 8.78033 13.7197L6.28033 11.2197Z" clipRule="evenodd" />
		</svg>
	);
};

Action.iconName = "action";

export default Action;