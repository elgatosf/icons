import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMultiMount = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M19.25 2C19.6642 2 20 2.33579 20 2.75V6.5C20 6.79797 19.8238 7.06807 19.5508 7.1875L12 10.4902V13H13.25C13.6642 13 14 13.3358 14 13.75C14 14.1642 13.6642 14.5 13.25 14.5H12V20.5H14.75C15.1642 20.5 15.5 20.8358 15.5 21.25C15.5 21.6642 15.1642 22 14.75 22H7.75C7.33579 22 7 21.6642 7 21.25C7 20.8358 7.33579 20.5 7.75 20.5H10.5V14.5H4.75C4.33579 14.5 4 14.1642 4 13.75C4 13.3358 4.33579 13 4.75 13H10.5V10L10.5078 9.88965C10.5453 9.63683 10.7104 9.41699 10.9492 9.3125L18.5 6.00879V2.75C18.5 2.33579 18.8358 2 19.25 2Z" />
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
					<path d="M15.5 2C15.7761 2 16 2.22386 16 2.5V5.5C16 5.70185 15.8787 5.88428 15.6924 5.96191L10 8.33301V11H11.5C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H10V17H12.5C12.7761 17 13 17.2239 13 17.5C13 17.7761 12.7761 18 12.5 18H6.5C6.22386 18 6 17.7761 6 17.5C6 17.2239 6.22386 17 6.5 17H9V12H4.5C4.22386 12 4 11.7761 4 11.5C4 11.2239 4.22386 11 4.5 11H9V8C9 7.79815 9.12129 7.61572 9.30762 7.53809L15 5.16602V2.5C15 2.22386 15.2239 2 15.5 2Z" />
				</svg>
			);
	}
};

IconMultiMount.iconName = "multi-mount";

export default IconMultiMount;
