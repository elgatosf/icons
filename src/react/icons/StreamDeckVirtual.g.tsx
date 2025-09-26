import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckVirtual = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.103 11.005A1 1 0 0 1 9 12v2l-.005.102A1 1 0 0 1 8 15H6l-.103-.005A1 1 0 0 1 5 14v-2a1 1 0 0 1 1-1h2zM6 14h2v-2H6zM8.103 5.005A1 1 0 0 1 9 6v2l-.005.103A1 1 0 0 1 8 9H6l-.103-.005A1 1 0 0 1 5 8V6a1 1 0 0 1 1-1h2zM6 8h2V6H6zM14.103 5.005A1 1 0 0 1 15 6v2l-.005.103A1 1 0 0 1 14 9h-2l-.102-.005A1 1 0 0 1 11 8V6a1 1 0 0 1 1-1h2zM12 8h2V6h-2z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M16.25 2c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 16.25 12h-3.5a.75.75 0 0 0-.75.75v3.5A1.75 1.75 0 0 1 10.25 18h-6.5A1.75 1.75 0 0 1 2 16.25V3.75C2 2.784 2.784 2 3.75 2zM3.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-3.5c0-.966.784-1.75 1.75-1.75h3.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckVirtual.iconName = "stream-deck-virtual";

export default IconStreamDeckVirtual;
