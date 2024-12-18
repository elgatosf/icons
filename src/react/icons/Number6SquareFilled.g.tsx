import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Number6SquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M13.5402 13.3711C13.5402 12.4911 13.1222 11.7761 12.2202 11.7761C11.1862 11.7761 10.8012 12.5351 10.8012 13.4041C10.8012 14.2841 11.3072 14.9881 12.1872 14.9881C13.0892 14.9881 13.5402 14.2621 13.5402 13.3711Z" /><path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM15.0692 13.3051C15.0692 15.0211 13.7932 16.1431 12.1872 16.1431C9.83322 16.1431 9.07422 14.2291 9.07422 12.0731C9.07422 9.91712 9.85522 7.84912 12.2422 7.84912C13.6392 7.84912 14.8162 8.48712 14.8162 9.99412H13.2322C13.2322 9.25712 12.8142 8.92712 12.1872 8.92712C10.8562 8.92712 10.6362 10.7421 10.6252 11.8091C11.0762 11.0171 11.7362 10.6981 12.6052 10.6981C13.9912 10.6981 15.0692 11.7101 15.0692 13.3051Z" clipRule="evenodd" />
		</svg>
	);
};

Number6SquareFilled.iconName = "number-6-square--filled";

export default Number6SquareFilled;