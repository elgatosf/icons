import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEyedropperFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M9.91 9.41C8.656 8.15 9.549 6 11.328 6h.844a2 2 0 0 0 1.414-.586L15 4a3.536 3.536 0 1 1 5 5l-1.414 1.414A2 2 0 0 0 18 11.828v.844c0 1.781-2.154 2.674-3.414 1.414z"
				clipRule="evenodd"
			/>
			<path d="m13.19 14.81-5.315 5.314a2 2 0 0 1-.888.516l-1.61.44c-1.493.406-2.863-.964-2.456-2.457l.44-1.61a2 2 0 0 1 .514-.889l5.314-5.313 1.06 1.06 1.88 1.879z" />
		</svg>
	);
};

IconEyedropperFilled.iconName = "eyedropper--filled";

export default IconEyedropperFilled;
