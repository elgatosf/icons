import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWebflow = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m23.944 5-7.162 14h-6.726l2.997-5.802h-.135C10.446 16.408 6.756 18.52 1.5 19v-5.722s3.363-.199 5.34-2.277H1.5v-6h6.001v4.935h.135L10.088 5h4.538v4.905h.135L17.305 5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoWebflow.iconName = "logo-webflow";

export default IconLogoWebflow;
