import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const StoreFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6.35407 3C5.53626 3 4.80084 3.4979 4.49711 4.25722L3.14305 7.64238C3.04855 7.87862 3 8.13073 3 8.38516V11.5C3 12.2403 3.4022 12.8866 4 13.2324V20.25C4 20.6642 4.33579 21 4.75 21C5.16421 21 5.5 20.6642 5.5 20.25V13.5H9.5V19C9.5 20.1046 10.3954 21 11.5 21H18C19.1046 21 20 20.1046 20 19V13.2324C20.5978 12.8866 21 12.2403 21 11.5V8.38516C21 8.13073 20.9515 7.87862 20.857 7.64238L19.5029 4.25722C19.1992 3.4979 18.4637 3 17.6459 3H6.35407ZM8.5 8.75C8.5 8.33579 8.16421 8 7.75 8C7.33579 8 7 8.33579 7 8.75V11.25C7 11.6642 7.33579 12 7.75 12C8.16421 12 8.5 11.6642 8.5 11.25V8.75ZM12.75 8.75C12.75 8.33579 12.4142 8 12 8C11.5858 8 11.25 8.33579 11.25 8.75V11.25C11.25 11.6642 11.5858 12 12 12C12.4142 12 12.75 11.6642 12.75 11.25V8.75ZM17 8.75C17 8.33579 16.6642 8 16.25 8C15.8358 8 15.5 8.33579 15.5 8.75V11.25C15.5 11.6642 15.8358 12 16.25 12C16.6642 12 17 11.6642 17 11.25V8.75Z" clipRule="evenodd" />
		</svg>
	);
};

StoreFilled.iconName = "store--filled";

export default StoreFilled;