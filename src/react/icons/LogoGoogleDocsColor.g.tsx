import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleDocsColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#fff" d="M16.75 12.25h-9.5V14h9.5zM14.25 15.25h-7V17h7z" />
			<path fill="#0066DA" d="m14.5 6.5 2.578.125L20 6.5 14.5 1l-.125 3.358z" />
			<path fill="#fff" d="M16.75 9.25h-9.5V11h9.5z" />
			<path
				fill="#2684FC"
				d="M14.5 6.5V1h-9A1.5 1.5 0 0 0 4 2.5v19A1.5 1.5 0 0 0 5.5 23h13a1.5 1.5 0 0 0 1.5-1.5v-15zM14 16.75H7.5V15.5H14zm2.5-3h-9V12.5h9zm0-3h-9V9.5h9z"
			/>
		</svg>
	);
};

IconLogoGoogleDocsColor.iconName = "logo-google-docs--color";

export default IconLogoGoogleDocsColor;
