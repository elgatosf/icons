import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAtlassianJira = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.4 11.65c.412 0 .774.325.774.751V21c-2.22 0-4.027-1.755-4.027-3.911v-1.53H6.495c-2.22 0-4.026-1.754-4.026-3.91z" />
			<path d="M15.814 7.313c.438 0 .774.35.774.751v8.625c-2.22 0-4.026-1.756-4.027-3.912v-1.554H10.91c-2.22 0-4.026-1.755-4.026-3.91z" />
			<path d="M20.226 3c.438 0 .774.326.774.752v8.6c-2.22 0-4.026-1.756-4.026-3.912V6.911H15.32c-2.22 0-4.026-1.755-4.026-3.911z" />
		</svg>
	);
};

IconLogoAtlassianJira.iconName = "logo-atlassian-jira";

export default IconLogoAtlassianJira;
