import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TimerFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.99992 2.25C8.99992 1.83579 9.33571 1.5 9.74992 1.5H14.2499C14.6641 1.5 14.9999 1.83579 14.9999 2.25C14.9999 2.66421 14.6641 3 14.2499 3L9.74992 3C9.33571 3 8.99992 2.66421 8.99992 2.25Z" /><path fillRule="evenodd" d="M19.9999 13C19.9999 17.4183 16.4182 21 11.9999 21C7.58165 21 3.99992 17.4183 3.99992 13C3.99992 8.58172 7.58165 5 11.9999 5C16.4182 5 19.9999 8.58172 19.9999 13ZM14.4696 9.46967L11.4696 12.4697C11.1767 12.7626 11.1767 13.2374 11.4696 13.5303C11.7625 13.8232 12.2374 13.8232 12.5303 13.5303L15.5303 10.5303C15.8231 10.2374 15.8231 9.76256 15.5303 9.46967C15.2374 9.17678 14.7625 9.17678 14.4696 9.46967Z" clipRule="evenodd" /><path d="M2.98432 6.8128C2.69143 6.51991 2.69143 6.04503 2.98432 5.75214L4.75209 3.98437C5.04498 3.69148 5.51985 3.69148 5.81275 3.98437C6.10564 4.27727 6.10564 4.75214 5.81275 5.04503L4.04498 6.8128C3.75209 7.10569 3.27721 7.10569 2.98432 6.8128Z" /><path d="M18.1871 3.98438C18.48 3.69149 18.9549 3.69149 19.2478 3.98438L21.0155 5.75215C21.3084 6.04504 21.3084 6.51991 21.0155 6.81281C20.7226 7.1057 20.2478 7.1057 19.9549 6.81281L18.1871 5.04504C17.8942 4.75215 17.8942 4.27727 18.1871 3.98438Z" />
		</svg>
	);
};

TimerFilled.iconName = "timer--filled";

export default TimerFilled;