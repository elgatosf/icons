import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Heart = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 7.94215L10.7736 6.20057C10.0471 5.16895 8.8516 4.5 7.5 4.5C5.29086 4.5 3.5 6.29086 3.5 8.5C3.5 11.0092 4.87491 13.3032 6.73275 15.2387C8.57389 17.1567 10.723 18.546 11.8834 19.223C11.96 19.2677 12.0399 19.2677 12.1166 19.223C13.277 18.546 15.4261 17.1567 17.2673 15.2387C19.1251 13.3032 20.5 11.0092 20.5 8.5C20.5 6.29086 18.7091 4.5 16.5 4.5C15.1484 4.5 13.9529 5.16895 13.2264 6.20057L12 7.94215ZM10.9582 4.22302C10.0135 3.45817 8.81025 3 7.5 3C4.46243 3 2 5.46243 2 8.5C2 14.6356 8.69245 19.098 11.1275 20.5186C11.6713 20.8358 12.3287 20.8358 12.8725 20.5186C15.3076 19.098 22 14.6356 22 8.5C22 5.46243 19.5376 3 16.5 3C15.1897 3 13.9865 3.45817 13.0418 4.22302C12.6452 4.54403 12.2943 4.91906 12 5.33692C11.7057 4.91906 11.3548 4.54403 10.9582 4.22302Z" clipRule="evenodd" />
		</svg>
	);
};

Heart.iconName = "heart";

export default Heart;