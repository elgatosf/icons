import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Diffuse = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10.2001 3H6.6001V5.6H10.2V8.19995H6.6001V11.7999H3V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V11.7999H17.4V8.19998H20.9999V5.59998H17.4V3H13.8V5.6L17.4 5.59998V8.19998L13.8 8.19995V11.8L17.4 11.7999L17.3998 15.3999H13.7998L13.8 11.8L10.2001 11.7999L10.2 8.19995H13.8V5.6H10.2L10.2001 3ZM10.2001 11.7999H6.6001V15.3999H10.2001V11.7999Z" clipRule="evenodd" /><path d="M3 5.59998L6.6001 5.6V8.19995L3 8.19998V5.59998Z" />
		</svg>
	);
};

Diffuse.iconName = "diffuse";

export default Diffuse;