import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFaceSatisfiedFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3.812-6.764a.75.75 0 1 0-1.144-.971 3.498 3.498 0 0 1-5.334.003.75.75 0 1 0-1.142.972 5 5 0 0 0 7.62-.004m.688-4.986a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-6.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFaceSatisfiedFilled.iconName = "face-satisfied--filled";

export default IconFaceSatisfiedFilled;
