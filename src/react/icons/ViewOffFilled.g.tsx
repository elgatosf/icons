import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ViewOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2.21967 21.7803C1.92678 21.4874 1.92678 21.0126 2.21967 20.7197L20.7197 2.21967C21.0126 1.92678 21.4874 1.92678 21.7803 2.21967C22.0732 2.51256 22.0732 2.98744 21.7803 3.28033L17.9828 7.07789C19.8077 8.42452 21.068 10.1096 21.7235 11.118C22.0754 11.6594 22.0754 12.3406 21.7235 12.882C20.5006 14.7634 17.1724 19 12 19C10.2118 19 8.64399 18.4936 7.30742 17.7532L3.28033 21.7803C2.98744 22.0732 2.51256 22.0732 2.21967 21.7803ZM9.75179 15.3089C10.3925 15.745 11.1665 16 12 16C14.2092 16 16 14.2091 16 12C16 11.1665 15.7451 10.3925 15.3089 9.75177L14.2171 10.8436C14.3978 11.1894 14.5 11.5828 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C11.5828 14.5 11.1894 14.3978 10.8436 14.217L9.75179 15.3089Z" clipRule="evenodd" /><path d="M8.07033 12.7506L4.85917 15.9618C3.64987 14.8433 2.78283 13.6609 2.27658 12.882C1.92465 12.3406 1.92465 11.6594 2.27658 11.118C3.49949 9.23662 6.82759 5 12 5C13.1767 5 14.258 5.21927 15.2407 5.58019L12.7506 8.07031C12.5075 8.02415 12.2566 8 12 8C9.79088 8 8.00002 9.79086 8.00002 12C8.00002 12.2566 8.02417 12.5075 8.07033 12.7506Z" />
		</svg>
	);
};

ViewOffFilled.iconName = "view-off--filled";

export default ViewOffFilled;