import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconSettingsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M13.884 3.332c-.63-1.773-3.138-1.773-3.769 0l-.045.129a2 2 0 0 1-2.743 1.136l-.124-.059c-1.7-.808-3.473.966-2.665 2.665l.059.124A2 2 0 0 1 3.46 10.07l-.129.045c-1.773.63-1.773 3.139 0 3.77l.129.045a2 2 0 0 1 1.136 2.743l-.059.123c-.808 1.7.966 3.473 2.665 2.665l.124-.058a2 2 0 0 1 2.743 1.136l.045.128c.63 1.774 3.139 1.774 3.77 0l.045-.128a2 2 0 0 1 2.743-1.136l.123.058c1.7.808 3.473-.965 2.665-2.665l-.058-.123a2 2 0 0 1 1.136-2.743l.128-.046c1.774-.63 1.774-3.138 0-3.769l-.128-.045a2 2 0 0 1-1.136-2.743l.058-.124c.808-1.7-.965-3.473-2.665-2.665l-.123.059A2 2 0 0 1 13.93 3.46zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSettingsFilled.iconName = "settings--filled";

export default IconSettingsFilled;
