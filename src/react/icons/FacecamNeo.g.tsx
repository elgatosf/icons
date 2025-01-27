import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamNeo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8 11a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
				clipRule="evenodd"
			/>
			<path d="M4.25 10.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M1 10.5A6.5 6.5 0 0 1 7.5 4h9a6.5 6.5 0 0 1 6.5 6.5v1a6.5 6.5 0 0 1-6 6.481V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1.019A6.5 6.5 0 0 1 1 11.5zm6.5-5h9a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5v-1a5 5 0 0 1 5-5m1 13.5v-1h7v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFacecamNeo.iconName = "facecam-neo";

export default IconFacecamNeo;
