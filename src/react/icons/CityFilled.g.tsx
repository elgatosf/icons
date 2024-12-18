import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CityFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.75 1.75C12.75 1.33579 12.4142 1 12 1C11.5858 1 11.25 1.33579 11.25 1.75V3H9.5C8.39543 3 7.5 3.89543 7.5 5V8.53544C9.19615 8.77806 10.5 10.2368 10.5 12V22H13.5V9.20256C13.5 7.42057 14.9561 6.20503 16.5 6.19687V5C16.5 3.89543 15.6046 3 14.5 3H12.75V1.75Z" /><path d="M15 22H19C20.1046 22 21 21.1046 21 20V11.9367C21 11.3432 20.7364 10.7803 20.2804 10.4003L17.4603 8.05023C17.1678 7.80647 16.8299 7.69797 16.5 7.69971C15.7281 7.70379 15 8.31156 15 9.20256V22Z" /><path d="M7.5 10.063C8.36261 10.285 9 11.0681 9 12V22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10H7C7.17265 10 7.34019 10.0219 7.5 10.063Z" />
		</svg>
	);
};

CityFilled.iconName = "city--filled";

export default CityFilled;