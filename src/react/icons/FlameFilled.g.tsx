import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFlameFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.058 2.78a.75.75 0 0 1 .174.892 2.86 2.86 0 0 0-.294 1.268 2.873 2.873 0 0 0 4.539 2.345c.34-.242.627-.557.835-.922a.75.75 0 0 1 1.265-.059A13.4 13.4 0 0 1 20 14.003a8 8 0 1 1-16 0C4 9.266 6.452 5.102 10.152 2.71a.75.75 0 0 1 .906.07M12 20.503l.132-.001a2.5 2.5 0 0 0 2.368-2.497c0-1.255-.692-2.561-1.477-3.617A13 13 0 0 0 12 13.179c-.284.298-.655.713-1.023 1.209-.785 1.056-1.477 2.362-1.477 3.617a2.5 2.5 0 0 0 2.5 2.498"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlameFilled.iconName = "flame--filled";

export default IconFlameFilled;
