import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const View = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M16 12C16 14.2091 14.2092 16 12 16C9.79088 16 8.00002 14.2091 8.00002 12C8.00002 9.79086 9.79088 8 12 8C14.2092 8 16 9.79086 16 12ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.50002 13.3807 9.50002 12C9.50002 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" clipRule="evenodd" /><path fillRule="evenodd" d="M2.27658 11.118C3.49949 9.23662 6.82759 5 12 5C17.1724 5 20.5006 9.23662 21.7235 11.118C22.0754 11.6594 22.0754 12.3406 21.7235 12.882C20.5006 14.7634 17.1724 19 12 19C6.82759 19 3.49949 14.7634 2.27658 12.882C1.92465 12.3406 1.92465 11.6594 2.27658 11.118ZM3.53424 11.9355C4.7288 10.0977 7.66514 6.5 12 6.5C16.3349 6.5 19.2712 10.0977 20.4658 11.9355C20.4835 11.9626 20.4874 11.9843 20.4874 12C20.4874 12.0157 20.4835 12.0374 20.4658 12.0645C19.2712 13.9023 16.3349 17.5 12 17.5C7.66514 17.5 4.7288 13.9023 3.53424 12.0645C3.51657 12.0374 3.51263 12.0157 3.51263 12C3.51263 11.9843 3.51657 11.9626 3.53424 11.9355Z" clipRule="evenodd" />
		</svg>
	);
};

View.iconName = "view";

export default View;