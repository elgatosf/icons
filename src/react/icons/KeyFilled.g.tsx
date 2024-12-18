import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const KeyFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M8.00002 9.5C8.00002 5.91015 10.9102 3 14.5 3C18.0899 3 21 5.91015 21 9.5C21 13.0899 18.0899 16 14.5 16C13.8379 16 13.1979 15.9008 12.5946 15.7161L11.5303 16.7803C11.3896 16.921 11.1989 17 10.9999 17L9.74997 17L9.74997 18.25C9.74997 18.4489 9.67095 18.6397 9.5303 18.7803C9.38964 18.921 9.19888 19 8.99996 19L7.74998 19L7.75 20.2499C7.75 20.4488 7.67099 20.6396 7.53033 20.7802C7.38968 20.9209 7.19892 20.9999 7 20.9999L5 20.9999C3.89543 20.9999 3 20.1045 3 18.9999L3 17.5177C3 16.9873 3.21072 16.4785 3.58579 16.1035L8.28395 11.4054C8.09923 10.8021 8.00002 10.1621 8.00002 9.5ZM14.5 7.00001C15.8807 7.00001 17 8.11929 17 9.50001C17 10.8807 15.8807 12 14.5 12C13.1193 12 12 10.8807 12 9.50001C12 8.11929 13.1193 7.00001 14.5 7.00001Z" clipRule="evenodd" />
		</svg>
	);
};

KeyFilled.iconName = "key--filled";

export default KeyFilled;