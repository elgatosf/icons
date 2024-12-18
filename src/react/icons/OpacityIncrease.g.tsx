import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const OpacityIncrease = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M6.78033 3.21967C7.07322 3.51256 7.07322 3.98744 6.78033 4.28033L4.28033 6.78033C3.98744 7.07322 3.51256 7.07322 3.21967 6.78033C2.92678 6.48744 2.92678 6.01256 3.21967 5.71967L5.71967 3.21967C6.01256 2.92678 6.48744 2.92678 6.78033 3.21967Z" /><path d="M13.7803 3.21967C14.0732 3.51256 14.0732 3.98744 13.7803 4.28033L4.28033 13.7803C3.98744 14.0732 3.51256 14.0732 3.21967 13.7803C2.92678 13.4874 2.92678 13.0126 3.21967 12.7197L12.7197 3.21967C13.0126 2.92678 13.4874 2.92678 13.7803 3.21967Z" /><path d="M20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033L4.28033 20.7803C3.98744 21.0732 3.51256 21.0732 3.21967 20.7803C2.92678 20.4874 2.92678 20.0126 3.21967 19.7197L19.7197 3.21967C20.0126 2.92678 20.4874 2.92678 20.7803 3.21967Z" /><path d="M20.7803 10.2197C21.0732 10.5126 21.0732 10.9874 20.7803 11.2803L20.3863 11.6744C19.8924 11.4292 19.363 11.245 18.8077 11.1316L19.7197 10.2197C20.0126 9.92678 20.4874 9.92678 20.7803 10.2197Z" /><path d="M11.1316 18.8077C11.245 19.363 11.4292 19.8924 11.6744 20.3863L11.2803 20.7803C10.9874 21.0732 10.5126 21.0732 10.2197 20.7803C9.92678 20.4874 9.92678 20.0126 10.2197 19.7197L11.1316 18.8077Z" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM14.5001 17C14.2239 17 14.0001 17.2239 14.0001 17.5C14.0001 17.7761 14.2239 18 14.5001 18H20.5001C20.7762 18 21.0001 17.7761 21.0001 17.5C21.0001 17.2239 20.7762 17 20.5001 17H14.5001Z" clipRule="evenodd" />
		</svg>
	);
};

OpacityIncrease.iconName = "opacity-increase";

export default OpacityIncrease;