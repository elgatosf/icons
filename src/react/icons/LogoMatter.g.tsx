import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMatter = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="m16.176 6.687.005-.004h-.011z" />
			<path d="M16.176 6.687c-.893.66-1.864 1.147-2.99 1.34v-5.81l-1.15-.717-1.222.717v5.81a7 7 0 0 1-2.978-1.344l-2.155 1.24c1.755 1.65 3.983 2.583 6.35 2.583s4.589-.934 6.294-2.584zM4.148 10.539v2.494c1.055.411 1.955 1.04 2.672 1.917l-5.078 2.928v1.36l1.24.662 5.038-2.906c.361 1.056.428 2.173.289 3.267l2.15 1.239a9.1 9.1 0 0 0-.878-6.744 9.3 9.3 0 0 0-5.433-4.217M19.842 13.033V10.54a9.1 9.1 0 0 0-5.4 4.217 8.78 8.78 0 0 0-.917 6.744l2.15-1.239c-.144-1.094-.072-2.206.306-3.267l5.055 2.906 1.223-.661v-1.361l-5.095-2.922c.717-.878 1.65-1.506 2.672-1.923z" />
		</svg>
	);
};

IconLogoMatter.iconName = "logo-matter";

export default IconLogoMatter;
