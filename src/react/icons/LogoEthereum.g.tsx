import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoEthereum = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5.094 12.157 12 1l6.906 11.157L12 16.108z" />
			<path d="m12 23-6.828-9.512L12 17.48l6.828-3.992z" />
		</svg>
	);
};

IconLogoEthereum.iconName = "logo-ethereum";

export default IconLogoEthereum;
