import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAirtable = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.317 8.745a.5.5 0 0 1 .684.464v7.418a.5.5 0 0 1-.316.465l-8.343 3.238a.5.5 0 0 1-.684-.465v-7.417a.5.5 0 0 1 .316-.465zM2.504 8.743a.5.5 0 0 1 .237.032l7.927 3.142c.402.16.434.724.041.914l-2.476 1.195-.252.121-5.227 2.505c-.331.16-.754-.081-.754-.449V9.24c0-.133.069-.247.16-.334a.56.56 0 0 1 .344-.163M10.93 3.846a2.78 2.78 0 0 1 2.126 0l7.457 3.086a.5.5 0 0 1-.007.925l-7.488 2.97a2.78 2.78 0 0 1-2.05 0l-7.487-2.97a.5.5 0 0 1-.006-.925z" />
		</svg>
	);
};

IconLogoAirtable.iconName = "logo-airtable";

export default IconLogoAirtable;
