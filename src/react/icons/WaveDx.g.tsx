import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWaveDx = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
			<path
				fillRule="evenodd"
				d="M19.232 3.004a2 2 0 0 0-2.732-.732L2.996 10.07a2 2 0 0 0-.732 2.732l2.5 4.33a2 2 0 0 0 1.736 1v1.87a2 2 0 0 0 2 2H9a2 2 0 0 0 2-2v-4.16l10-5.775a2 2 0 0 0 .732-2.732zm1.201 5.08-2.5-4.33a.5.5 0 0 0-.683-.183L9.446 8.077l3 5.196 7.804-4.506a.5.5 0 0 0 .183-.683m-9.286 5.94-3-5.197-4.4 2.54a.5.5 0 0 0-.184.684l2.5 4.33a.5.5 0 0 0 .683.183zM8 20v-2.429l1.5-.866v3.295a.5.5 0 0 1-.5.5h-.5A.5.5 0 0 1 8 20"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWaveDx.iconName = "wave-dx";

export default IconWaveDx;
