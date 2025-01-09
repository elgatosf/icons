import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleDriveColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fill="#EA4335"
				d="m16.041 15.25 1.261 2.959 2.174 2.99c.336-.194.623-.475.824-.824l2.31-4c.201-.348.301-.736.301-1.125l-3.548-.375z"
			/>
			<path
				fill="#00832D"
				d="M15.435 2.301A2.25 2.25 0 0 0 14.31 2H9.691c-.4 0-.79.11-1.125.301L9.874 5.34l2.117 2.893.01.017 2.134-2.924z"
			/>
			<path
				fill="#0066DA"
				d="m7.959 15.25-3.542-.5-3.327.5c0 .387.1.775.3 1.124l2.31 4.001c.201.348.487.629.824.824l2.136-2.835z"
			/>
			<path
				fill="#FFBA00"
				d="m19.434 8.625-3.175-5.5a2.24 2.24 0 0 0-.824-.824L12 8.25l4.041 7h6.869c0-.389-.1-.776-.301-1.125z"
			/>
			<path
				fill="#2684FC"
				d="M16.04 15.25H7.959l-3.435 5.949a2.25 2.25 0 0 0 1.125.301H18.35a2.25 2.25 0 0 0 1.125-.301z"
			/>
			<path
				fill="#2684FC"
				d="M16.04 15.25H7.959l-3.435 5.949a2.25 2.25 0 0 0 1.125.301H18.35a2.25 2.25 0 0 0 1.125-.301z"
			/>
			<path
				fill="#00AC47"
				d="M12 8.25 8.566 2.301a2.24 2.24 0 0 0-.822.822L1.39 14.129c-.2.347-.3.735-.3 1.121h6.869z"
			/>
		</svg>
	);
};

IconLogoGoogleDriveColor.iconName = "logo-google-drive--color";

export default IconLogoGoogleDriveColor;
