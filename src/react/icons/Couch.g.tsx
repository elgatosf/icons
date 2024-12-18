import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Couch = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M20 8V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V8C2.89543 8 2 8.89543 2 10V17C2 18.1046 2.89543 19 4 19L4 20.25C4 20.6642 4.33579 21 4.75 21C5.16421 21 5.5 20.6642 5.5 20.25V19H18.5V20.25C18.5 20.6642 18.8358 21 19.25 21C19.6642 21 20 20.6642 20 20.25V19C21.1046 19 22 18.1046 22 17V10C22 8.89543 21.1046 8 20 8ZM18 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V8.06301C6.36261 8.28503 7 9.06808 7 10V13.5C7 13.7761 7.22386 14 7.5 14H16.5C16.7761 14 17 13.7761 17 13.5V10C17 9.06808 17.6374 8.28503 18.5 8.06301V6C18.5 5.72386 18.2761 5.5 18 5.5ZM20 9.5C20.2761 9.5 20.5 9.72386 20.5 10V17C20.5 17.2761 20.2761 17.5 20 17.5H4C3.72386 17.5 3.5 17.2761 3.5 17V10C3.5 9.72386 3.72386 9.5 4 9.5H5C5.27614 9.5 5.5 9.72386 5.5 10V13.5C5.5 14.6046 6.39543 15.5 7.5 15.5H16.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10C18.5 9.72386 18.7239 9.5 19 9.5H20Z" clipRule="evenodd" />
		</svg>
	);
};

Couch.iconName = "couch";

export default Couch;