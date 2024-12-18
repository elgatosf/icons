import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HomeFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 8.9782C3 8.36102 3.28495 7.77841 3.77212 7.39949L10.7721 1.95505C11.4943 1.39332 12.5057 1.39332 13.2279 1.95505L20.2279 7.39949C20.7151 7.77841 21 8.36102 21 8.9782V19C21 20.1046 20.1046 21 19 21H15.5C14.3954 21 13.5 20.1046 13.5 19V13H10.5V19C10.5 20.1046 9.60457 21 8.5 21H5C3.89543 21 3 20.1046 3 19V8.9782Z" />
		</svg>
	);
};

HomeFilled.iconName = "home--filled";

export default HomeFilled;