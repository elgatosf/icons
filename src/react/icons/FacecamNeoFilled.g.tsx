import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamNeoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 13.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" />
			<path
				fillRule="evenodd"
				d="M7.5 4A6.5 6.5 0 0 0 1 10.5v1a6.5 6.5 0 0 0 6 6.481V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.019a6.5 6.5 0 0 0 6-6.481v-1A6.5 6.5 0 0 0 16.5 4zm8 14h-7v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5zM8 11a4 4 0 1 1 8 0 4 4 0 0 1-8 0m-4.5 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 3.5 11"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFacecamNeoFilled.iconName = "facecam-neo--filled";

export default IconFacecamNeoFilled;
