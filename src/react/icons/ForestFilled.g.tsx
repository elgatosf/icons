import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconForestFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.062 18a1 1 0 0 0 .866-1.5l-2.02-3.5h.288a.997.997 0 0 0 .866-1.5l-5.196-9a1 1 0 0 0-1.732 0l-1.268 2.196 3.495 6.054a2.49 2.49 0 0 1-.322 2.941l1.188 2.059c.34.59.41 1.23.273 1.814v.003a2.5 2.5 0 0 1-.146.433zm-5.863-.009h.004a1 1 0 0 0 .725-1.491l-2.02-3.5h.288a1 1 0 0 0 .866-1.5l-5.196-9a1 1 0 0 0-1.732 0l-5.196 9a1 1 0 0 0 .866 1.5h.289l-2.021 3.5a1 1 0 0 0 .866 1.5h12.124q.07 0 .137-.009M6.5 20v-.5h5v.5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2m6 0v-.5h5v.5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2" />
		</svg>
	);
};

IconForestFilled.iconName = "forest--filled";

export default IconForestFilled;
