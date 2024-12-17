import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipVertical = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M6.057 3.463A.75.75 0 0 1 6.75 3h10.5a.75.75 0 0 1 .53 1.28l-5.25 5.25a.75.75 0 0 1-1.06 0L6.22 4.28a.75.75 0 0 1-.163-.817M8.561 4.5 12 7.94l3.44-3.44z"
				clipRule="evenodd"
			/>
			<path d="M16.5 11.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zm4.75.75a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75m-13.75.75a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 0 1.5zM2.75 12c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75" />
			<path
				fillRule="evenodd"
				d="M6.057 20.537A.75.75 0 0 0 6.75 21h10.5a.75.75 0 0 0 .53-1.28l-5.25-5.25a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 0 0-.163.817M8.561 19.5 12 16.06l3.44 3.44z"
				clipRule="evenodd"
			/>
			<path d="M13.25 12a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75" />
		</svg>
	);
};

IconFlipVertical.iconName = "flip-vertical";

export default IconFlipVertical;
