import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoJsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#F7DF1E" d="M17 3H3v14h14z" />
			<path
				fill="#000"
				d="m12.404 13.938-1.071.62c.385.762 1.175 1.344 2.396 1.344 1.25 0 2.18-.648 2.18-1.832 0-1.1-.63-1.588-1.747-2.068l-.33-.14c-.563-.245-.808-.405-.808-.8 0-.319.245-.563.63-.563.376 0 .62.16.846.564l1.024-.658c-.432-.761-1.033-1.053-1.87-1.053-1.174 0-1.926.752-1.926 1.739 0 1.071.63 1.579 1.579 1.983l.328.14c.602.264.959.423.959.875 0 .375-.348.648-.893.648-.648 0-1.015-.338-1.297-.799M6.68 14.7c.31.657.922 1.202 1.974 1.202 1.166 0 1.964-.62 1.964-1.983V9.427H9.303v4.474c0 .658-.273.827-.705.827-.451 0-.64-.31-.846-.677z"
			/>
		</svg>
	);
};

IconLogoJsColor.iconName = "logo-js--color";

export default IconLogoJsColor;
