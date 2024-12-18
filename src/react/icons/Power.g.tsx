import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Power = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V12C11.25 12.4142 11.5858 12.75 12 12.75C12.4142 12.75 12.75 12.4142 12.75 12V2.75Z" /><path d="M18.364 5.63604C18.0711 5.34315 17.5962 5.34315 17.3033 5.63604C17.0104 5.92893 17.0104 6.40381 17.3033 6.6967C18.3522 7.74559 19.0665 9.08196 19.3559 10.5368C19.6453 11.9917 19.4968 13.4997 18.9291 14.8701C18.3614 16.2406 17.4001 17.4119 16.1668 18.236C14.9334 19.0601 13.4834 19.5 12 19.5C10.5166 19.5 9.0666 19.0601 7.83323 18.236C6.59986 17.4119 5.63857 16.2406 5.07091 14.8701C4.50325 13.4997 4.35473 11.9917 4.64411 10.5368C4.9335 9.08197 5.64781 7.74559 6.6967 6.6967C6.9896 6.40381 6.9896 5.92893 6.6967 5.63604C6.40381 5.34315 5.92894 5.34315 5.63604 5.63604C4.37737 6.89471 3.5202 8.49836 3.17294 10.2442C2.82567 11.99 3.0039 13.7996 3.68509 15.4442C4.36628 17.0887 5.51983 18.4943 6.99987 19.4832C8.47992 20.4722 10.22 21 12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4441C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604Z" />
		</svg>
	);
};

Power.iconName = "power";

export default Power;