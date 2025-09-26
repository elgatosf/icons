import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoSketchColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#FDB300" d="m5.878 3.025 6.1-.645 6.1.645 4.724 6.34-10.824 12.603L1.155 9.365z" />
			<path fill="#EA6C00" d="m5.54 9.365 6.438 12.603L1.155 9.365z" />
			<path fill="#EA6C00" d="m18.417 9.365-6.44 12.603L22.802 9.365z" />
			<path fill="#FDAD00" d="M5.54 9.365h12.878l-6.44 12.603z" />
			<path fill="#FDD231" d="m11.978 2.38-6.1.645-.339 6.34zM11.978 2.38l6.1.645.339 6.34z" />
			<path fill="#FDAD00" d="m22.802 9.365-4.723-6.34.339 6.34zM1.155 9.365l4.723-6.34-.339 6.34z" />
			<path fill="#FEEEB7" d="M11.978 2.38 5.54 9.365h12.879z" />
		</svg>
	);
};

IconLogoSketchColor.iconName = "logo-sketch--color";

export default IconLogoSketchColor;
