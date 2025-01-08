import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
			<path
				fillRule="evenodd"
				d="M2.485 18.191c.294.532.869.809 1.476.809H20.04c.607 0 1.182-.277 1.476-.809C22.108 17.12 23 15.008 23 12.01v-.018c0-3-.892-5.11-1.485-6.182C21.221 5.277 20.646 5 20.04 5H3.96c-.607 0-1.182.277-1.476.809C1.892 6.88 1 8.994 1 12s.892 5.12 1.485 6.191M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-8.75-3.25h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFacecamFilled.iconName = "facecam--filled";

export default IconFacecamFilled;
