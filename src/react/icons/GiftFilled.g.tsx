import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGiftFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M15 4.003c0 .363-.097.703-.267.997H16a2 2 0 1 1 0 4h-5.5V6.5a.5.5 0 0 0-1 0V9H4a2 2 0 0 1-1-.268A2 2 0 0 1 4 5h1.266A2 2 0 0 1 5 4.003c0-1.78 2.152-2.671 3.41-1.413L10 4.18l1.59-1.59C12.848 1.332 15 2.223 15 4.003m-2.703-.706C12.925 2.67 14 3.114 14 4.003a1 1 0 0 1-.988.997h-2.418zM6.982 5h2.424L7.703 3.297C7.074 2.67 6 3.114 6 4.003c0 .545.438.989.982.997"
				clipRule="evenodd"
			/>
			<path d="M9.5 10H4c-.35 0-.687-.06-1-.17V15a2 2 0 0 0 2 2h4.5zM10.5 17H15a2 2 0 0 0 2-2V9.83c-.313.11-.65.17-1 .17h-5.5z" />
		</svg>
	);
};

IconGiftFilled.iconName = "gift--filled";

export default IconGiftFilled;
