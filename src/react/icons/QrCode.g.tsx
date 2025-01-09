import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconQrCode = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm4 1.5H5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
			<path d="M6 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
			<path
				fillRule="evenodd"
				d="M5 13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z"
				clipRule="evenodd"
			/>
			<path d="M17 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
			<path
				fillRule="evenodd"
				d="M13 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
			<path d="M14 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2M13 20a1 1 0 1 1 2 0 1 1 0 0 1-2 0M17 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2M19 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0M20 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
		</svg>
	);
};

IconQrCode.iconName = "qr-code";

export default IconQrCode;
