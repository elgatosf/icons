import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Location = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.1716 11.5 10.5 10.8284 10.5 10C10.5 9.17157 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10Z" clipRule="evenodd" /><path fillRule="evenodd" d="M20 10C20 14.5637 15.3718 19.1273 13.1559 21.0508C12.4846 21.6334 11.5154 21.6334 10.8441 21.0508C8.6282 19.1273 4 14.5637 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10ZM18.5 10C18.5 11.8054 17.566 13.7683 16.2001 15.6273C14.8581 17.4539 13.2382 18.993 12.1726 19.918C12.1118 19.9708 12.0515 19.9878 12 19.9878C11.9485 19.9878 11.8882 19.9708 11.8274 19.918C10.7618 18.993 9.14191 17.4539 7.79989 15.6273C6.43404 13.7683 5.5 11.8054 5.5 10C5.5 6.41015 8.41015 3.5 12 3.5C15.5899 3.5 18.5 6.41015 18.5 10Z" clipRule="evenodd" />
		</svg>
	);
};

Location.iconName = "location";

export default Location;