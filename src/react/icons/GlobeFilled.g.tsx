import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGlobeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M11.996 10.5C11.932 14.685 11.063 18 10 18s-1.932-3.315-1.996-7.5zM12.996 10.5c-.03 2.072-.253 3.966-.612 5.4-.185.74-.418 1.409-.713 1.925a8.004 8.004 0 0 0 6.314-7.325zM17.985 9.5h-4.989c-.03-2.072-.253-3.966-.612-5.4-.185-.74-.418-1.409-.713-1.925A8.004 8.004 0 0 1 17.985 9.5M11.996 9.5H8.004C8.068 5.315 8.937 2 10 2s1.932 3.315 1.996 7.5M7.004 9.5c.03-2.072.253-3.966.612-5.4.185-.74.418-1.409.713-1.925A8.004 8.004 0 0 0 2.015 9.5zM2.015 10.5a8.004 8.004 0 0 0 6.314 7.325c-.295-.516-.528-1.186-.713-1.926-.359-1.433-.581-3.327-.612-5.399z" />
				</svg>
			);
	}
};

IconGlobeFilled.iconName = "globe--filled";

export default IconGlobeFilled;
