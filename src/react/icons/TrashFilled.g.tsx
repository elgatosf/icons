import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TrashFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 1.25C9.92893 1.25 8.25 2.92893 8.25 5L3.75 5C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H5.08824L5.88926 20.1174C5.95145 21.1746 6.82686 22 7.88581 22H16.1142C17.1731 22 18.0486 21.1746 18.1107 20.1174L18.9118 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5L15.75 5C15.75 2.92893 14.0711 1.25 12 1.25ZM14.25 5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5H14.25ZM10.25 8C10.6642 8 11 8.33579 11 8.75V18.25C11 18.6642 10.6642 19 10.25 19C9.83579 19 9.5 18.6642 9.5 18.25L9.5 8.75C9.5 8.33579 9.83579 8 10.25 8ZM14.5 8.75C14.5 8.33579 14.1642 8 13.75 8C13.3358 8 13 8.33579 13 8.75V18.25C13 18.6642 13.3358 19 13.75 19C14.1642 19 14.5 18.6642 14.5 18.25V8.75Z" clipRule="evenodd" />
		</svg>
	);
};

TrashFilled.iconName = "trash--filled";

export default TrashFilled;