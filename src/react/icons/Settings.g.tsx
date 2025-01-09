import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSettings = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M8.486 3.136c.445-1.51 2.583-1.51 3.028 0a1.578 1.578 0 0 0 2.269.94c1.382-.753 2.894.76 2.14 2.141a1.578 1.578 0 0 0 .94 2.269c1.51.445 1.51 2.583 0 3.028a1.578 1.578 0 0 0-.94 2.269c.754 1.382-.758 2.894-2.14 2.14a1.578 1.578 0 0 0-2.27.94c-.444 1.51-2.582 1.51-3.027 0a1.578 1.578 0 0 0-2.269-.94c-1.382.754-2.894-.758-2.14-2.14a1.578 1.578 0 0 0-.94-2.27c-1.51-.444-1.51-2.582 0-3.027a1.578 1.578 0 0 0 .94-2.269c-.754-1.382.758-2.894 2.14-2.14a1.578 1.578 0 0 0 2.27-.94M5.74 4.954A2.578 2.578 0 0 0 9.445 3.42c.163-.553.947-.553 1.11 0a2.578 2.578 0 0 0 3.706 1.535c.507-.276 1.06.278.785.785a2.578 2.578 0 0 0 1.535 3.706c.553.163.553.947 0 1.11a2.578 2.578 0 0 0-1.535 3.706c.276.506-.278 1.06-.785.785a2.578 2.578 0 0 0-3.706 1.535c-.163.553-.947.553-1.11 0a2.578 2.578 0 0 0-3.706-1.535c-.507.275-1.06-.279-.785-.785a2.578 2.578 0 0 0-1.535-3.706c-.553-.163-.553-.947 0-1.11A2.578 2.578 0 0 0 4.954 5.74c-.275-.507.278-1.06.785-.785"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSettings.iconName = "settings";

export default IconSettings;
