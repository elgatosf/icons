import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon9SquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M13.2873 10.4671C13.2873 9.59812 12.7703 8.98212 11.9233 8.98212C10.9993 8.98212 10.5263 9.57612 10.5263 10.4671C10.5263 11.3251 11.0213 11.9851 11.8683 11.9851C12.7373 11.9851 13.2873 11.3801 13.2873 10.4671Z" /><path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM14.9813 11.8531C14.9813 14.1081 14.3543 16.1541 11.8023 16.1541C10.0973 16.1541 8.99733 15.3841 8.99733 14.0421H10.6473C10.6803 14.4491 10.8343 14.9551 11.8023 14.9551C13.3093 14.9551 13.3863 13.1951 13.4083 12.0731C12.9793 12.7551 12.4513 13.0521 11.5163 13.0521C10.0643 13.0521 8.98633 12.0511 8.98633 10.5111C8.98633 8.85012 10.2733 7.84912 11.9013 7.84912C14.3103 7.84912 14.9813 9.69712 14.9813 11.8531Z" clipRule="evenodd" />
		</svg>
	);
};

Icon9SquareFilled.iconName = "9-square--filled";

export default Icon9SquareFilled;