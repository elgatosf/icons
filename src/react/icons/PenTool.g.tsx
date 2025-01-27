import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPenTool = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.343 17.657a8 8 0 0 0 8.233 1.919l1.51 1.51a2 2 0 0 0 2.828 0l2.172-2.172a2 2 0 0 0 0-2.828l-1.51-1.51a8 8 0 0 0-1.92-8.233C15.213 3.9 8.24 2.974 4.667 2.653a1.84 1.84 0 0 0-2.012 2.014c.32 3.572 1.245 10.545 3.69 12.99m11.812-3.563a1.5 1.5 0 0 0 .36 1.543l1.51 1.51a.5.5 0 0 1 0 .707l-2.171 2.171a.5.5 0 0 1-.708 0l-1.51-1.51a1.5 1.5 0 0 0-1.542-.36 6.5 6.5 0 0 1-6.69-1.559c-.412-.412-.837-1.101-1.237-2.07-.394-.953-.726-2.08-1.004-3.28-.48-2.077-.772-4.274-.944-5.966l5.94 5.939a2 2 0 1 0 1.06-1.06L5.28 4.218c1.692.172 3.89.464 5.967.944 1.2.278 2.326.61 3.278 1.004.97.4 1.66.825 2.071 1.237a6.5 6.5 0 0 1 1.56 6.69"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPenTool.iconName = "pen-tool";

export default IconPenTool;
