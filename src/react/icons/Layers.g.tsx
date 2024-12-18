import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Layers = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11 2.5774C11.6188 2.22013 12.3812 2.22013 13 2.5774L20.2583 6.768C21.5917 7.5378 21.5917 9.4623 20.2583 10.2321L13 14.4227C12.3812 14.78 11.6188 14.78 11 14.4227L3.74167 10.2321C2.40834 9.4623 2.40834 7.5378 3.74167 6.768L11 2.5774ZM12.25 3.87644L19.5083 8.06703C19.8417 8.25948 19.8417 8.74061 19.5083 8.93306L12.25 13.1237C12.0953 13.213 11.9047 13.213 11.75 13.1237L4.49167 8.93306C4.15834 8.74061 4.15834 8.25948 4.49167 8.06703L11.75 3.87644C11.9047 3.78712 12.0953 3.78712 12.25 3.87644Z" clipRule="evenodd" /><path d="M5.03602 13.0208C5.26807 12.8868 5.55397 12.8868 5.78602 13.0208C6.28602 13.3094 6.28602 14.0311 5.78602 14.3198L4.49167 15.0671C4.15834 15.2595 4.15834 15.7407 4.49167 15.9331L11.75 20.1237C11.9047 20.213 12.0953 20.213 12.25 20.1237L19.5083 15.9331C19.8417 15.7407 19.8417 15.2595 19.5083 15.0671L18.214 14.3198C17.714 14.0311 17.714 13.3094 18.214 13.0208C18.446 12.8868 18.7319 12.8868 18.964 13.0208L20.2583 13.768C21.5917 14.5378 21.5917 16.4624 20.2583 17.2322L13 21.4228C12.3812 21.78 11.6188 21.78 11 21.4228L3.74167 17.2322C2.40834 16.4624 2.40834 14.5379 3.74167 13.768L5.03602 13.0208Z" />
		</svg>
	);
};

Layers.iconName = "layers";

export default Layers;