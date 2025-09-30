import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber4 = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M16.0809 14.863H14.5269V17.061H12.5669V14.863H7.91895V13.043L12.1049 6.93896H14.5269V13.435H16.0809V14.863ZM12.6229 8.56296L9.37495 13.449H12.5949L12.6229 8.56296Z" />
		</svg>
	);
};

IconNumber4.iconName = "number4";

export default IconNumber4;
