import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 9.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
			<path
				fillRule="evenodd"
				d="M8.703 3.445 7 6H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-1.703-2.555A1 1 0 0 0 14.465 3h-4.93a1 1 0 0 0-.832.445M12 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraFilled.iconName = "camera--filled";

export default IconCameraFilled;
