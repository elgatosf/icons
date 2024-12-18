import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Number5SquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM14.9266 13.2721C14.9266 15.1861 13.7716 16.1541 12.0446 16.1541C10.5706 16.1541 9.1626 15.6591 9.1626 13.9321H10.8016C10.8236 14.6361 11.3076 14.9881 11.9676 14.9881C12.8806 14.9881 13.2656 14.2071 13.2656 13.3271C13.2656 12.5021 12.8916 11.7761 12.0336 11.7761C11.4946 11.7761 11.0106 12.0841 10.9116 12.6671H9.2836L9.4596 8.04712H14.4976V9.22412H10.9226L10.8016 11.5781C11.2196 10.9511 11.8136 10.6431 12.5286 10.6431C14.0246 10.6431 14.9266 11.8091 14.9266 13.2721Z" clipRule="evenodd" />
		</svg>
	);
};

Number5SquareFilled.iconName = "number-5-square--filled";

export default Number5SquareFilled;