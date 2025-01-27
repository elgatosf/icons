import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconServer = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10 8.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.75 7.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM6 15.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M10.75 15a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M2.439 12A2 2 0 0 1 2 10.75V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.75c0 .473-.164.908-.439 1.25.275.342.439.777.439 1.25V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4.75c0-.473.164-.908.439-1.25M4 5.5h16a.5.5 0 0 1 .5.5v4.75a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5m0 7.25a.5.5 0 0 0-.5.5V18a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-4.75a.5.5 0 0 0-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconServer.iconName = "server";

export default IconServer;
