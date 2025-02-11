import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconViewOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
						d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-3.797 3.798c1.825 1.347 3.085 3.032 3.74 4.04a1.61 1.61 0 0 1 0 1.764C20.502 14.763 17.174 19 12 19c-1.788 0-3.356-.506-4.693-1.247L3.28 21.78a.75.75 0 0 1-1.06 0m7.532-6.471a4 4 0 0 0 5.557-5.557l-1.092 1.092a2.5 2.5 0 0 1-3.373 3.373z"
						clipRule="evenodd"
					/>
					<path d="m8.07 12.75-3.21 3.212a16.6 16.6 0 0 1-2.583-3.08 1.61 1.61 0 0 1 0-1.764C3.499 9.237 6.827 5 12 5c1.177 0 2.258.22 3.24.58l-2.49 2.49a4 4 0 0 0-4.68 4.68" />
				</svg>
			);
		default:
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
						d="M17.854 2.854a.5.5 0 0 0-.708-.708l-15 15a.5.5 0 0 0 .708.708l2.91-2.911A8.96 8.96 0 0 0 10 16a9 9 0 0 0 8.226-5.343 1.62 1.62 0 0 0 0-1.314 9.04 9.04 0 0 0-3.112-3.75zm-5.409 5.408-.722.722a2 2 0 0 1-2.74 2.74l-.721.721a3 3 0 0 0 4.184-4.184"
						clipRule="evenodd"
					/>
					<path d="M10 4c1.152 0 2.254.217 3.267.611l-2.49 2.49a3 3 0 0 0-3.675 3.675L4.09 13.79a9 9 0 0 1-2.316-3.132 1.61 1.61 0 0 1 0-1.313A9 9 0 0 1 10 4" />
				</svg>
			);
	}
};

IconViewOffFilled.iconName = "view-off--filled";

export default IconViewOffFilled;
