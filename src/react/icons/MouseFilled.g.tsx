import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MouseFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.2499 1.67297C10.4247 1.74394 9.6071 1.93224 8.82261 2.23789L7.84994 2.61685C7.22528 2.86022 6.73673 3.36236 6.51059 3.99347L5.89888 5.70054C5.34119 7.2569 4.98521 8.86964 4.83346 10.5H11.2499V1.67297Z" /><path d="M4.75161 12C4.72718 13.5052 4.87597 15.0152 5.19992 16.5C5.8968 19.694 8.7855 22 12.0547 22C15.2605 22 18.0872 19.7668 18.7705 16.6346C19.1042 15.1055 19.2565 13.5501 19.2294 12H4.75161Z" /><path d="M19.1471 10.5C18.9923 8.82555 18.6272 7.16916 18.0545 5.5708L17.4893 3.99347C17.2631 3.36236 16.7746 2.86022 16.1499 2.61685L15.1772 2.23789C14.3927 1.93224 13.5752 1.74394 12.7499 1.67297V10.5H19.1471Z" />
		</svg>
	);
};

MouseFilled.iconName = "mouse--filled";

export default MouseFilled;