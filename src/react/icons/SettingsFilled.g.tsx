import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSettingsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M11.514 3.136c-.445-1.51-2.583-1.51-3.028 0a1.578 1.578 0 0 1-2.269.94c-1.382-.753-2.894.76-2.14 2.141a1.578 1.578 0 0 1-.94 2.269c-1.51.445-1.51 2.583 0 3.028a1.578 1.578 0 0 1 .94 2.269c-.754 1.382.758 2.894 2.14 2.14a1.578 1.578 0 0 1 2.27.94c.444 1.51 2.582 1.51 3.027 0a1.578 1.578 0 0 1 2.269-.94c1.382.754 2.894-.758 2.14-2.14a1.578 1.578 0 0 1 .94-2.27c1.51-.444 1.51-2.582 0-3.027a1.578 1.578 0 0 1-.94-2.269c.754-1.382-.758-2.894-2.14-2.14a1.578 1.578 0 0 1-2.27-.94M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSettingsFilled.iconName = "settings--filled";

export default IconSettingsFilled;
