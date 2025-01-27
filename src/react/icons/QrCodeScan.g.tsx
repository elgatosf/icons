import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconQrCodeScan = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 2.75A.75.75 0 0 1 2.75 2h2.5a.75.75 0 0 1 0 1.5H3.5v1.75a.75.75 0 0 1-1.5 0zM2 21.25v-2.5a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M18.75 22a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75zM22 2.75v2.5a.75.75 0 0 1-1.5 0V3.5h-1.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 .75.75" />
			<path
				fillRule="evenodd"
				d="M5 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5M5 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zM13 7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
			<path d="M13 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0M13 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0M15 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0M17 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0M17 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
		</svg>
	);
};

IconQrCodeScan.iconName = "qr-code-scan";

export default IconQrCodeScan;
