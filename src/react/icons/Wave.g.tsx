import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Wave = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.2 8.75C7.2 8.33579 6.86421 8 6.45 8C6.03579 8 5.7 8.33579 5.7 8.75V15.25C5.7 15.6642 6.03579 16 6.45 16C6.86421 16 7.2 15.6642 7.2 15.25V8.75Z" /><path d="M13.8499 4C14.2641 4 14.5999 4.33579 14.5999 4.75V19.25C14.5999 19.6642 14.2641 20 13.8499 20C13.4357 20 13.0999 19.6642 13.0999 19.25V4.75C13.0999 4.33579 13.4357 4 13.8499 4Z" /><path d="M10.15 10C10.5642 10 10.9 10.3358 10.9 10.75V13.25C10.9 13.6642 10.5642 14 10.15 14C9.73574 14 9.39995 13.6642 9.39995 13.25V10.75C9.39995 10.3358 9.73574 10 10.15 10Z" /><path d="M16.7999 15.25C16.7999 15.6642 17.1356 16 17.5499 16C17.9641 16 18.2999 15.6642 18.2999 15.25V8.75C18.2999 8.33579 17.9641 8 17.5499 8C17.1356 8 16.7999 8.33579 16.7999 8.75V15.25Z" /><path d="M21.25 14C20.8358 14 20.5 13.6642 20.5 13.25V10.75C20.5 10.3358 20.8358 10 21.25 10C21.6642 10 22 10.3358 22 10.75V13.25C22 13.6642 21.6642 14 21.25 14Z" /><path d="M2.75 10C3.16421 10 3.5 10.3358 3.5 10.75V13.25C3.5 13.6642 3.16421 14 2.75 14C2.33579 14 2 13.6642 2 13.25V10.75C2 10.3358 2.33579 10 2.75 10Z" />
		</svg>
	);
};

Wave.iconName = "wave";

export default Wave;