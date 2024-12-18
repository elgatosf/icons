import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const GameFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5.61684 5C4.67377 5 3.85884 5.6588 3.66124 6.58094L1.74609 15.5183C1.3621 17.3102 2.72813 19 4.56074 19C5.46678 19 6.31995 18.5734 6.86358 17.8486L9.00001 15H15L17.1364 17.8486C17.6801 18.5734 18.5332 19 19.4393 19C21.2719 19 22.6379 17.3102 22.2539 15.5183L20.3388 6.58094C20.1412 5.6588 19.3263 5 18.3832 5H5.61684ZM8.75001 8.5C8.75001 8.08579 8.41423 7.75 8.00001 7.75C7.5858 7.75 7.25001 8.08579 7.25001 8.5V9.25H6.50001C6.0858 9.25 5.75001 9.58579 5.75001 10C5.75001 10.4142 6.0858 10.75 6.50001 10.75H7.25001V11.5C7.25001 11.9142 7.5858 12.25 8.00001 12.25C8.41423 12.25 8.75001 11.9142 8.75001 11.5V10.75H9.50001C9.91423 10.75 10.25 10.4142 10.25 10C10.25 9.58579 9.91423 9.25 9.50001 9.25H8.75001V8.5ZM16.0001 11.5C16.8285 11.5 17.5001 10.8284 17.5001 10C17.5001 9.17157 16.8285 8.5 16.0001 8.5C15.1716 8.5 14.5001 9.17157 14.5001 10C14.5001 10.8284 15.1716 11.5 16.0001 11.5Z" clipRule="evenodd" />
		</svg>
	);
};

GameFilled.iconName = "game--filled";

export default GameFilled;