import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const StreamDeckMini = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9 9.75C9 10.4404 8.44036 11 7.75 11C7.05964 11 6.5 10.4404 6.5 9.75C6.5 9.05964 7.05964 8.5 7.75 8.5C8.44036 8.5 9 9.05964 9 9.75Z" /><path d="M7.75 15.5C8.44036 15.5 9 14.9404 9 14.25C9 13.5596 8.44036 13 7.75 13C7.05964 13 6.5 13.5596 6.5 14.25C6.5 14.9404 7.05964 15.5 7.75 15.5Z" /><path d="M13.25 9.75C13.25 10.4404 12.6904 11 12 11C11.3096 11 10.75 10.4404 10.75 9.75C10.75 9.05964 11.3096 8.5 12 8.5C12.6904 8.5 13.25 9.05964 13.25 9.75Z" /><path d="M12 15.5C12.6904 15.5 13.25 14.9404 13.25 14.25C13.25 13.5596 12.6904 13 12 13C11.3096 13 10.75 13.5596 10.75 14.25C10.75 14.9404 11.3096 15.5 12 15.5Z" /><path d="M17.5 9.75C17.5 10.4404 16.9404 11 16.25 11C15.5596 11 15 10.4404 15 9.75C15 9.05964 15.5596 8.5 16.25 8.5C16.9404 8.5 17.5 9.05964 17.5 9.75Z" /><path d="M16.25 15.5C16.9404 15.5 17.5 14.9404 17.5 14.25C17.5 13.5596 16.9404 13 16.25 13C15.5596 13 15 13.5596 15 14.25C15 14.9404 15.5596 15.5 16.25 15.5Z" /><path fillRule="evenodd" d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM20 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V18C3.5 18.2761 3.72386 18.5 4 18.5H20C20.2761 18.5 20.5 18.2761 20.5 18V6C20.5 5.72386 20.2761 5.5 20 5.5Z" clipRule="evenodd" />
		</svg>
	);
};

StreamDeckMini.iconName = "stream-deck-mini";

export default StreamDeckMini;