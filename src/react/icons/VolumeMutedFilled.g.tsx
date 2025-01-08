import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolumeMutedFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m5 16 4.293 4.293c.63.63 1.707.184 1.707-.707V4.414c0-.89-1.077-1.337-1.707-.707L5 8H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"
				clipRule="evenodd"
			/>
			<path d="M14.22 14.72a.75.75 0 1 0 1.06 1.06L18 13.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L19.06 12l2.72-2.72a.75.75 0 0 0-1.06-1.06L18 10.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L16.94 12z" />
		</svg>
	);
};

IconVolumeMutedFilled.iconName = "volume-muted--filled";

export default IconVolumeMutedFilled;
