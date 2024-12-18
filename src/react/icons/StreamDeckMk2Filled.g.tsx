import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const StreamDeckMk2Filled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM12 11.4999C11.4477 11.4999 11 11.9476 11 12.4999C11 13.0522 11.4477 13.4999 12 13.4999C12.5523 13.4999 13 13.0522 13 12.4999C13 11.9476 12.5523 11.4999 12 11.4999ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8ZM5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9ZM6 11.4999C5.44772 11.4999 5 11.9476 5 12.4999C5 13.0522 5.44772 13.4999 6 13.4999C6.55228 13.4999 7 13.0522 7 12.4999C7 11.9476 6.55228 11.4999 6 11.4999ZM5 16C5 15.4477 5.44772 15 6 15C6.55228 15 7 15.4477 7 16C7 16.5523 6.55228 17 6 17C5.44772 17 5 16.5523 5 16ZM8.98807 15C8.43578 15 7.98807 15.4477 7.98807 16C7.98807 16.5523 8.43578 17 8.98807 17C9.54035 17 9.98807 16.5523 9.98807 16C9.98807 15.4477 9.54035 15 8.98807 15ZM8 12.4999C8 11.9476 8.44772 11.4999 9 11.4999C9.55228 11.4999 10 11.9476 10 12.4999C10 13.0522 9.55228 13.4999 9 13.4999C8.44772 13.4999 8 13.0522 8 12.4999ZM11.9761 15C11.4239 15 10.9761 15.4477 10.9761 16C10.9761 16.5523 11.4239 17 11.9761 17C12.5284 17 12.9761 16.5523 12.9761 16C12.9761 15.4477 12.5284 15 11.9761 15ZM13.9642 16C13.9642 15.4477 14.4119 15 14.9642 15C15.5165 15 15.9642 15.4477 15.9642 16C15.9642 16.5523 15.5165 17 14.9642 17C14.4119 17 13.9642 16.5523 13.9642 16ZM18 15C17.4477 15 17 15.4477 17 16C17 16.5523 17.4477 17 18 17C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15ZM17 12.4999C17 11.9476 17.4477 11.4999 18 11.4999C18.5523 11.4999 19 11.9476 19 12.4999C19 13.0522 18.5523 13.4999 18 13.4999C17.4477 13.4999 17 13.0522 17 12.4999ZM15 11.4999C14.4477 11.4999 14 11.9476 14 12.4999C14 13.0522 14.4477 13.4999 15 13.4999C15.5523 13.4999 16 13.0522 16 12.4999C16 11.9476 15.5523 11.4999 15 11.4999ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9ZM18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z" clipRule="evenodd" />
		</svg>
	);
};

StreamDeckMk2Filled.iconName = "stream-deck-mk2--filled";

export default StreamDeckMk2Filled;