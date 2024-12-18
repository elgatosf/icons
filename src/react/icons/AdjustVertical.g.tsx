import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AdjustVertical = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 8.75C4 10.5642 5.28832 12.0775 7 12.425L7 21.25C7 21.6642 7.33579 22 7.75 22C8.16421 22 8.5 21.6642 8.5 21.25L8.5 12.425C10.2117 12.0775 11.5 10.5642 11.5 8.75C11.5 6.93578 10.2117 5.42247 8.5 5.07501L8.5 2.75C8.5 2.33578 8.16421 2 7.75 2C7.33579 2 7 2.33578 7 2.75L7 5.07501C5.28832 5.42247 4 6.93578 4 8.75ZM5.5 8.75C5.5 7.50736 6.50736 6.5 7.75 6.5C8.99264 6.5 10 7.50736 10 8.75C10 9.99264 8.99264 11 7.75 11C6.50736 11 5.5 9.99264 5.5 8.75Z" clipRule="evenodd" /><path fillRule="evenodd" d="M12.5 15.25C12.5 13.4358 13.7883 11.9225 15.5 11.575V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V11.575C18.7117 11.9225 20 13.4358 20 15.25C20 17.0642 18.7117 18.5775 17 18.925L17 21.25C17 21.6642 16.6642 22 16.25 22C15.8358 22 15.5 21.6642 15.5 21.25L15.5 18.925C13.7883 18.5775 12.5 17.0642 12.5 15.25ZM14 15.25C14 16.4926 15.0074 17.5 16.25 17.5C17.4926 17.5 18.5 16.4926 18.5 15.25C18.5 14.0074 17.4926 13 16.25 13C15.0074 13 14 14.0074 14 15.25Z" clipRule="evenodd" />
		</svg>
	);
};

AdjustVertical.iconName = "adjust-vertical";

export default AdjustVertical;