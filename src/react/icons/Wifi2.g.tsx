import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Wifi2 = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10.4693 13.8045C10.9546 13.6035 11.4747 13.5 12 13.5C12.5253 13.5 13.0454 13.6035 13.5307 13.8045C14.016 14.0055 14.457 14.3001 14.8284 14.6716C15.1213 14.9645 15.5962 14.9645 15.8891 14.6716C16.182 14.3787 16.182 13.9038 15.8891 13.6109C15.3784 13.1002 14.772 12.6951 14.1048 12.4187C13.4375 12.1423 12.7223 12 12 12C11.2777 12 10.5625 12.1423 9.89523 12.4187C9.22794 12.6951 8.62163 13.1002 8.11091 13.6109C7.81801 13.9038 7.81801 14.3787 8.11091 14.6716C8.4038 14.9645 8.87867 14.9645 9.17157 14.6716C9.543 14.3001 9.98396 14.0055 10.4693 13.8045Z" /><path d="M12 19C12.8284 19 13.5 18.3284 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.3284 11.1716 19 12 19Z" />
		</svg>
	);
};

Wifi2.iconName = "wifi2";

export default Wifi2;