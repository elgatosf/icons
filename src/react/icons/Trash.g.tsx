import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Trash = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11 8.75C11 8.33579 10.6642 8 10.25 8C9.83579 8 9.5 8.33579 9.5 8.75L9.5 18.25C9.5 18.6642 9.83579 19 10.25 19C10.6642 19 11 18.6642 11 18.25V8.75Z" /><path d="M13.75 8C14.1642 8 14.5 8.33579 14.5 8.75V18.25C14.5 18.6642 14.1642 19 13.75 19C13.3358 19 13 18.6642 13 18.25V8.75C13 8.33579 13.3358 8 13.75 8Z" /><path fillRule="evenodd" d="M12 1.25C9.92893 1.25 8.25 2.92893 8.25 5L3.75 5C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H5.08824L5.88926 20.1174C5.95145 21.1746 6.82686 22 7.88581 22H16.1142C17.1731 22 18.0486 21.1746 18.1107 20.1174L18.9118 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5L15.75 5C15.75 2.92893 14.0711 1.25 12 1.25ZM14.25 5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5H14.25ZM7.38667 20.0294L6.59083 6.5H17.4092L16.6133 20.0294C16.5978 20.2936 16.3789 20.5 16.1142 20.5H7.88581C7.62107 20.5 7.40222 20.2936 7.38667 20.0294Z" clipRule="evenodd" />
		</svg>
	);
};

Trash.iconName = "trash";

export default Trash;