import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShieldFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m11.029 2.54-7 3.889c-.635.352-1.038 1.025-.994 1.75.496 8.203 6.09 12.194 8.182 13.407.49.284 1.076.284 1.566 0 2.091-1.213 7.686-5.204 8.182-13.407.044-.725-.359-1.398-.994-1.75l-7-3.89a2 2 0 0 0-1.942 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconShieldFilled.iconName = "shield--filled";

export default IconShieldFilled;
