import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleMeet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m2 8.75 5-5h9.244c.897 0 1.631.741 1.631 1.648v2.577l3.092-2.45A.627.627 0 0 1 22 6.01v11.73c0 .54-.633.831-1.046.485l-3.079-2.478v2.858c0 .905-.734 1.645-1.631 1.645H3.667C2.75 20.25 2 19.5 2 18.583zm2 9.5V9.578L7.828 5.75h8.047v12.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoGoogleMeet.iconName = "logo-google-meet";

export default IconLogoGoogleMeet;
