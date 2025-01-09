import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFaceSatisfied = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.812 15.236a.75.75 0 1 0-1.144-.971 3.498 3.498 0 0 1-5.334.003.75.75 0 1 0-1.142.972 5 5 0 0 0 7.62-.004M10 10.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15.25 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
			<path
				fillRule="evenodd"
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10 8.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFaceSatisfied.iconName = "face-satisfied";

export default IconFaceSatisfied;
