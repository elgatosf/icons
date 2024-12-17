import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconScreenshot = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.75 10A.75.75 0 0 1 3 9.25V5a2 2 0 0 1 2-2h4.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v4.25a.75.75 0 0 1-.75.75m11-7a.75.75 0 0 0 0 1.5H19a.5.5 0 0 1 .5.5v4.25a.75.75 0 0 0 1.5 0V5a2 2 0 0 0-2-2zm-5.5 18a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5v-4.25a.75.75 0 0 0-1.5 0V19a2 2 0 0 0 2 2zm8.25-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
			<path
				fillRule="evenodd"
				d="M20.5 14h.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h.5l.406-.61a2 2 0 0 1 1.664-.89h1.86a2 2 0 0 1 1.664.89zm-5.197 1.5H14a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1.303l-.851-1.277A.5.5 0 0 0 18.43 14h-1.86a.5.5 0 0 0-.416.223z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconScreenshot.iconName = "screenshot";

export default IconScreenshot;
