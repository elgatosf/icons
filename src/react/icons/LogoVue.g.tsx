import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoVue = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M1.25 3H10.1588L11.9997 6.17993L13.841 3H22.7495L11.9997 21.6193L1.25 3ZM5.86881 3.55851L11.9997 14.1713L18.1275 3.55851H14.1592L11.9997 7.29945L9.8411 3.55851H5.86881Z" clipRule="evenodd" />
		</svg>
	);
};

LogoVue.iconName = "logo-vue";

export default LogoVue;