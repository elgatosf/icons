import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLightStrip = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 7v.277c.01.698.341 1.381.955 1.813l10.53 7.41H5a2 2 0 0 0-2 2v.5a2 2 0 0 0 2 2h12a4 4 0 0 0 4-4v-.278a2.25 2.25 0 0 0-.955-1.812L9.515 7.5H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4m2.2 1.132 11.845 8.336a4.5 4.5 0 0 0 1.755-.6L6.955 7.534a4.5 4.5 0 0 0-1.755.599M7 4.5h.5V6l-.115.001a6 6 0 0 0-2.374.538.8.8 0 0 0-.161.077 6 6 0 0 0-.342.182A2.497 2.497 0 0 1 7 4.5m2 0h2.5V6H9zm6.5 0H13V6h2.5zm3.5 0h-2V6h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5m-12 15H5a.5.5 0 0 1-.5-.5v-.5A.5.5 0 0 1 5 18h2zm1.5 0V18H11v1.5zm4 0V18H15v1.5zm4 0V18h.115a6 6 0 0 0 2.374-.539.8.8 0 0 0 .162-.076q.174-.087.341-.183A2.496 2.496 0 0 1 17 19.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLightStrip.iconName = "light-strip";

export default IconLightStrip;
