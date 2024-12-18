import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Shapes = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M17 9.5C18.3807 9.5 19.5 8.38071 19.5 7C19.5 5.61929 18.3807 4.5 17 4.5C15.6192 4.5 14.5 5.61929 14.5 7C14.5 8.38071 15.6192 9.5 17 9.5ZM17 11C19.2091 11 21 9.20914 21 7C21 4.79086 19.2091 3 17 3C14.7908 3 13 4.79086 13 7C13 9.20914 14.7908 11 17 11Z" clipRule="evenodd" /><path fillRule="evenodd" d="M19 14.5H15C14.7238 14.5 14.5 14.7239 14.5 15V19C14.5 19.2761 14.7238 19.5 15 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V15C19.5 14.7239 19.2761 14.5 19 14.5ZM15 13C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1045 21 21 20.1046 21 19V15C21 13.8954 20.1045 13 19 13H15Z" clipRule="evenodd" /><path fillRule="evenodd" d="M8.99996 4.5H4.99996C4.72381 4.5 4.49996 4.72386 4.49996 5V9C4.49996 9.27614 4.72381 9.5 4.99996 9.5H8.99996C9.2761 9.5 9.49996 9.27614 9.49996 9V5C9.49996 4.72386 9.2761 4.5 8.99996 4.5ZM4.99996 3C3.89539 3 2.99996 3.89543 2.99996 5V9C2.99996 10.1046 3.89539 11 4.99996 11H8.99996C10.1045 11 11 10.1046 11 9V5C11 3.89543 10.1045 3 8.99996 3H4.99996Z" clipRule="evenodd" /><path fillRule="evenodd" d="M9.59803 18.75L7.43297 15C7.24052 14.6667 6.75939 14.6667 6.56694 15L4.40188 18.75C4.20943 19.0833 4.44999 19.5 4.83489 19.5H9.16502C9.54992 19.5 9.79048 19.0833 9.59803 18.75ZM8.73201 14.25C7.96221 12.9167 6.03771 12.9167 5.26791 14.25L3.10284 18C2.33304 19.3333 3.29529 21 4.83489 21H9.16502C10.7046 21 11.6669 19.3333 10.8971 18L8.73201 14.25Z" clipRule="evenodd" />
		</svg>
	);
};

Shapes.iconName = "shapes";

export default Shapes;