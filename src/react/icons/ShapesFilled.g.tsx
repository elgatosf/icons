import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ShapesFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21.0001 7C21.0001 9.20914 19.2092 11 17.0001 11C14.7909 11 13.0001 9.20914 13.0001 7C13.0001 4.79086 14.7909 3 17.0001 3C19.2092 3 21.0001 4.79086 21.0001 7Z" /><path d="M13.0001 15C13.0001 13.8954 13.8955 13 15.0001 13H19.0001C20.1046 13 21.0001 13.8954 21.0001 15V19C21.0001 20.1046 20.1046 21 19.0001 21H15.0001C13.8955 21 13.0001 20.1046 13.0001 19V15Z" /><path d="M3.00006 5C3.00006 3.89543 3.89549 3 5.00006 3H9.00006C10.1046 3 11.0001 3.89543 11.0001 5V9C11.0001 10.1046 10.1046 11 9.00006 11H5.00006C3.89549 11 3.00006 10.1046 3.00006 9V5Z" /><path fillRule="evenodd" d="M8.73213 14.25C7.96233 12.9167 6.03783 12.9167 5.26803 14.25L3.10296 18C2.33316 19.3333 3.29541 21 4.83502 21H9.16514C10.7047 21 11.667 19.3333 10.8972 18L8.73213 14.25Z" clipRule="evenodd" />
		</svg>
	);
};

ShapesFilled.iconName = "shapes--filled";

export default ShapesFilled;