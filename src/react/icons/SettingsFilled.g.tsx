import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSettingsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M13.884 3.332c-.63-1.773-3.138-1.773-3.768 0l-.046.129a2 2 0 0 1-2.743 1.136l-.124-.059c-1.7-.808-3.473.966-2.665 2.665l.06.124A2 2 0 0 1 3.46 10.07l-.129.045c-1.773.63-1.773 3.139 0 3.77l.129.045a2 2 0 0 1 1.136 2.743l-.059.123c-.808 1.7.966 3.473 2.665 2.665l.124-.058a2 2 0 0 1 2.743 1.136l.046.128c.63 1.774 3.138 1.774 3.768 0l.046-.128a2 2 0 0 1 2.743-1.136l.123.058c1.7.808 3.473-.965 2.665-2.665l-.058-.123a2 2 0 0 1 1.136-2.743l.129-.046c1.773-.63 1.773-3.138 0-3.769l-.13-.045a2 2 0 0 1-1.135-2.743l.058-.124c.808-1.7-.965-3.473-2.665-2.665l-.123.059A2 2 0 0 1 13.93 3.46zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
						clipRule="evenodd"
					/>
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
						d="M11.514 3.136c-.445-1.51-2.583-1.51-3.028 0a1.578 1.578 0 0 1-2.269.94c-1.382-.753-2.894.76-2.14 2.141a1.578 1.578 0 0 1-.94 2.269c-1.51.445-1.51 2.583 0 3.028a1.578 1.578 0 0 1 .94 2.269c-.754 1.382.758 2.894 2.14 2.14a1.578 1.578 0 0 1 2.27.94c.444 1.51 2.582 1.51 3.027 0a1.578 1.578 0 0 1 2.269-.94c1.382.754 2.894-.758 2.14-2.14a1.578 1.578 0 0 1 .94-2.27c1.51-.444 1.51-2.582 0-3.027a1.578 1.578 0 0 1-.94-2.269c.754-1.382-.758-2.894-2.14-2.14a1.578 1.578 0 0 1-2.27-.94M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconSettingsFilled.iconName = "settings--filled";

export default IconSettingsFilled;
