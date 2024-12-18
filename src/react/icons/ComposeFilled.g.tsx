import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ComposeFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21.0859 4.58579L19.4143 2.91422C18.6332 2.13317 17.3669 2.13317 16.5859 2.91422L15.2804 4.21967L19.7804 8.71967L21.0859 7.41422C21.8669 6.63317 21.8669 5.36684 21.0859 4.58579Z" /><path d="M8.39179 11.1083L14.2197 5.28033L18.7197 9.78033L12.8918 15.6083C12.6355 15.8646 12.3143 16.0464 11.9626 16.1344L8.11698 17.0958C7.3846 17.2789 6.72121 16.6155 6.9043 15.8831L7.86572 12.0374C7.95364 11.6858 8.13547 11.3646 8.39179 11.1083Z" /><path d="M12.25 3C12.6642 3 13 3.33579 13 3.75C13 4.16421 12.6642 4.5 12.25 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V11.75C19.5 11.3358 19.8358 11 20.25 11C20.6642 11 21 11.3358 21 11.75V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H12.25Z" />
		</svg>
	);
};

ComposeFilled.iconName = "compose--filled";

export default ComposeFilled;