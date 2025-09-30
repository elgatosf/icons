import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSubtract = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M4 12C4 11.5858 4.33579 11.25 4.75 11.25L19.25 11.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75L4.75 12.75C4.33579 12.75 4 12.4142 4 12Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4 10C4 9.72386 4.22386 9.5 4.5 9.5H15.5C15.7761 9.5 16 9.72386 16 10C16 10.2761 15.7761 10.5 15.5 10.5H4.5C4.22386 10.5 4 10.2761 4 10Z"
					/>
				</svg>
			);
	}
};

IconSubtract.iconName = "subtract";

export default IconSubtract;
