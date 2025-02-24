import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGift = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M14.734 5c.169-.294.266-.634.266-.997 0-1.78-2.152-2.671-3.41-1.413L10 4.18 8.41 2.59C7.152 1.332 5 2.223 5 4.003c0 .363.097.703.266.997H4a2 2 0 0 0-1 3.732V15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.732A2 2 0 0 0 16 5zM14 4.003c0-.89-1.075-1.334-1.703-.706L10.594 5h2.418A1 1 0 0 0 14 4.003M10.5 6H16a1 1 0 1 1 0 2h-5.5zM6.976 6H9.5v2H4a1 1 0 1 1 0-2zm2.43-1H6.982A1 1 0 0 1 6 4.003c0-.89 1.074-1.334 1.703-.706zM9.5 16V9H4v6a1 1 0 0 0 1 1zm1-7v7H15a1 1 0 0 0 1-1V9z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconGift.iconName = "gift";

export default IconGift;
