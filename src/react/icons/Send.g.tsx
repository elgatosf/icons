import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSend = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M5.928 3.033 15.93 8.225c1.438.747 1.438 2.804 0 3.55L5.928 16.968c-1.657.86-3.485-.82-2.768-2.543L5 10 3.16 5.576C2.443 3.85 4.27 2.172 5.928 3.033M5.875 10.5 4.083 14.81c-.358.862.556 1.701 1.385 1.27l10.002-5.191a1 1 0 0 0 0-1.775L5.468 3.92c-.83-.43-1.743.41-1.385 1.272L5.875 9.5H10.5a.5.5 0 0 1 0 1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSend.iconName = "send";

export default IconSend;
